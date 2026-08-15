import { NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";
import { getOptionalAuthenticatedUser, recordRoadmapCheck, UsageLimitError } from "@/lib/usage-limits";
import { telemetry } from "@/lib/telemetry";

const ai = process.env.GEMINI_API_KEY ? new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY }) : null;
const model = process.env.GEMINI_MODEL ?? "gemini-3-flash-preview";

export async function POST(request: Request) {
  try {
    if (!ai) return NextResponse.json({ error: "Gemini API key is not configured." }, { status: 500 });
    const body = await request.json();
    if (!Array.isArray(body.messages) || body.messages.length < 2) {
      return NextResponse.json({ error: "Answer at least one coaching question first." }, { status: 400 });
    }

    const transcript = body.messages
      .map((message: { role: string; text: string }) => `${message.role}: ${message.text}`)
      .join("\n");
    const prompt = `You are CareerPivot.me. Convert this career-coaching transcript into a practical pivot analysis.
Always address the user directly (use "you" and "your" instead of third-person pronouns like "he", "she", "his", or "her").
Return only valid JSON in this exact shape:
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
Return exactly three roles. fitScore is an integer from 0 to 100. Do not invent facts not supported by the transcript.
For each nextSkill, generate a highly tailored, unique learning module inside the "modules" array that matches the skill name. Ensure the study plan, project, and checkpoint are specific to the role and skill, NOT generic templates.
Make the "checkpoint" highly detailed, easy to understand, and explicitly state what concrete evidence a hiring manager would look for. Do not constrain the checkpoint to a single short sentence; explain the exact evaluation criteria clearly and in plain language.

Transcript:
${transcript}`;

    telemetry.log('AI_AGENT_MANUAL_ANALYSIS_STARTED', { 
      messageCount: body.messages.length 
    });

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
    const authenticated = await getOptionalAuthenticatedUser(request);
    
    telemetry.log('AI_AGENT_MANUAL_ANALYSIS_COMPLETED', {
      suggestedRolesCount: analysis.suggestedRoles?.length,
      userId: authenticated?.user.id ?? 'anonymous'
    });

    if (authenticated) {
      await recordRoadmapCheck(authenticated.admin, authenticated.user.id, "manual");
    }
    return NextResponse.json({ analysis });
  } catch (error) {
    telemetry.error('AI_AGENT_MANUAL_ANALYSIS_FAILED', error);
    console.error("Manual analysis error:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unable to generate pivot options." },
      { status: error instanceof UsageLimitError ? 429 : 500 },
    );
  }
}
