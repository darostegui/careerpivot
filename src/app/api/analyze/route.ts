import { NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const pdf = require("pdf-parse/lib/pdf-parse.js") as (
  buffer: Buffer,
) => Promise<{ text: string }>;

const ai = process.env.GEMINI_API_KEY
  ? new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY })
  : null;
const model = process.env.GEMINI_MODEL ?? "gemini-3-flash-preview";
const maxUploadBytes = 5 * 1024 * 1024;

type Analysis = {
  currentRole: string;
  strengths: string[];
  suggestedRoles: Array<{
    title: string;
    fitScore: number;
    estimatedMonths: number;
    salaryRange: string;
    rationale: string;
    nextSkills: string[];
  }>;
};

function parseAnalysis(text: string): Analysis {
  const normalized = text
    .replace(/^```(?:json)?\s*/i, "")
    .replace(/\s*```$/i, "")
    .trim();
  const start = normalized.indexOf("{");
  const end = normalized.lastIndexOf("}");

  if (start < 0 || end <= start) {
    throw new Error("Gemini did not return a readable analysis.");
  }

  const parsed = JSON.parse(normalized.slice(start, end + 1)) as Analysis;
  if (
    typeof parsed.currentRole !== "string" ||
    !Array.isArray(parsed.strengths) ||
    !Array.isArray(parsed.suggestedRoles)
  ) {
    throw new Error("Gemini returned an incomplete analysis.");
  }

  return parsed;
}

export async function POST(request: Request) {
  try {
    if (!ai) {
      return NextResponse.json({ error: "Gemini API key is not configured." }, { status: 500 });
    }

    const contentType = request.headers.get("content-type") ?? "";
    if (!contentType.startsWith("multipart/form-data")) {
      return NextResponse.json({ error: "Send the resume as multipart form data." }, { status: 400 });
    }

    const formData = await request.formData();
    const file = formData.get("resume");

    if (!(file instanceof File)) {
      return NextResponse.json({ error: "Upload a resume PDF to continue." }, { status: 400 });
    }
    if (file.type !== "application/pdf") {
      return NextResponse.json({ error: "Only PDF resumes are supported." }, { status: 400 });
    }
    if (file.size > maxUploadBytes) {
      return NextResponse.json({ error: "The PDF must be smaller than 5 MB." }, { status: 400 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const parsed = await pdf(buffer);
    const resumeText = parsed.text.trim().slice(0, 40_000);

    if (!resumeText) {
      return NextResponse.json(
        { error: "No readable text was found. Try exporting your LinkedIn profile again." },
        { status: 422 },
      );
    }

    const prompt = `You are CareerPivot.me, an expert career transition analyst.
Analyze the resume below and identify three realistic career pivot roles.
Prioritize transferable skills, explain the gaps honestly, and estimate learning time.
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
    "nextSkills": ["string"]
  }]
}
fitScore must be an integer from 0 to 100. Do not invent employers, degrees, or certifications.

Resume:
${resumeText}`;

    const response = await ai.models.generateContent({
      model,
      contents: prompt,
      config: { responseMimeType: "application/json" },
    });

    const analysis = parseAnalysis(response.text ?? "");
    return NextResponse.json({ analysis, filename: file.name });
  } catch (error) {
    console.error("Resume analysis error:", error);
    const message = error instanceof Error ? error.message : "Unable to analyze this resume.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
