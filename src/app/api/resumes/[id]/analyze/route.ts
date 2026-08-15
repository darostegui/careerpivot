import { NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase-admin";
import { GoogleGenAI } from "@google/genai";
import { createRequire } from "node:module";
import { recordRoadmapCheck, UsageLimitError } from "@/lib/usage-limits";
import { telemetry } from "@/lib/telemetry";

const require = createRequire(import.meta.url);
const pdf = require("pdf-parse/lib/pdf-parse.js") as (
  buffer: Buffer,
) => Promise<{ text: string }>;

const ai = process.env.GEMINI_API_KEY ? new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY }) : null;
const model = process.env.GEMINI_MODEL ?? "gemini-3-flash-preview";

export async function POST(
  request: Request,
  context: { params: Promise<{ id: string }> },
) {
  try {
    if (!ai) return NextResponse.json({ error: "Gemini API key is not configured." }, { status: 500 });
    
    const authorization = request.headers.get("authorization");
    const accessToken = authorization?.startsWith("Bearer ")
      ? authorization.slice("Bearer ".length)
      : null;
    if (!accessToken) return NextResponse.json({ error: "Sign in to analyze a stored resume." }, { status: 401 });

    const admin = getSupabaseAdmin();
    const { data: userData, error: userError } = await admin.auth.getUser(accessToken);
    if (userError || !userData.user) return NextResponse.json({ error: "Your session is no longer valid." }, { status: 401 });

    const { id } = await context.params;
    const { data: document, error: readError } = await admin
      .from("resume_documents")
      .select("storage_path, original_filename")
      .eq("id", id)
      .eq("user_id", userData.user.id)
      .single();
      
    if (readError || !document) return NextResponse.json({ error: "Resume not found." }, { status: 404 });

    const { data: fileData, error: downloadError } = await admin.storage
      .from("resume-pdfs")
      .download(document.storage_path);
      
    if (downloadError || !fileData) {
      return NextResponse.json({ error: "Could not download the stored PDF." }, { status: 500 });
    }

    const buffer = Buffer.from(await fileData.arrayBuffer());
    const parsed = await pdf(buffer);
    const resumeText = parsed.text.trim().slice(0, 40_000);
    
    telemetry.log('AI_AGENT_ANALYSIS_STARTED', { 
      fileSize: fileData.size, 
      textLength: resumeText.length,
      storedResumeId: id
    });

    if (!resumeText) {
      return NextResponse.json({ error: "No readable text was found in this stored resume." }, { status: 422 });
    }

    const prompt = `You are CareerPivot.me, an expert career transition analyst.
Analyze the resume below and identify three realistic career pivot roles.
Prioritize transferable skills, explain the gaps honestly, and estimate learning time.
Always address the user directly (use "you" and "your" instead of third-person pronouns like "he", "she", "his", or "her").
Return only valid JSON matching this exact shape:
{
  "currentRole": "string",
  "strengths": ["string"],
  "suggestedRoles": [{
    "title": "string",
    "fitScore": 0,
    "estimatedMonths": 0,
    "salaryRange": "string",
    "rationale": "string",
    "nextSkills": ["string"],
    "modules": [{
      "title": "string",
      "outcome": "string",
      "studyPlan": ["string", "string", "string", "string"],
      "project": "string",
      "checkpoint": "string"
    }]
  }]
}
fitScore must be an integer from 0 to 100. Do not invent employers, degrees, or certifications.
For each nextSkill, generate a highly tailored, unique learning module inside the "modules" array that matches the skill name. Ensure the study plan, project, and checkpoint are specific to the role and skill, NOT generic templates.
Make the "checkpoint" highly detailed, easy to understand, and explicitly state what concrete evidence a hiring manager would look for. Do not constrain the checkpoint to a single short sentence; explain the exact evaluation criteria clearly and in plain language.

Resume:
${resumeText}`;

    const response = await ai.models.generateContent({
      model,
      contents: prompt,
      config: { responseMimeType: "application/json", temperature: 0 },
    });

    const text = response.text ?? "";
    const start = text.indexOf("{");
    const end = text.lastIndexOf("}");
    if (start < 0 || end <= start) throw new Error("Gemini did not return a readable analysis.");
    
    let jsonString = text.slice(start, end + 1);
    jsonString = jsonString.replace(/^```(?:json)?\s*/i, "").replace(/\s*```$/i, "").trim();
    
    const analysis = JSON.parse(jsonString);
    
    telemetry.log('AI_AGENT_ANALYSIS_COMPLETED', {
      suggestedRolesCount: analysis.suggestedRoles?.length,
      userId: userData.user.id
    });

    await recordRoadmapCheck(admin, userData.user.id, "resume");
    
    return NextResponse.json({ analysis, filename: document.original_filename });
  } catch (error) {
    telemetry.error('AI_AGENT_ANALYSIS_FAILED', error);
    console.error("Stored resume analysis error:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unable to analyze this resume." },
      { status: error instanceof UsageLimitError ? 429 : 500 }
    );
  }
}
