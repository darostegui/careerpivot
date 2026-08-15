import { NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";

const ai = process.env.GEMINI_API_KEY
  ? new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY })
  : null;
const model = process.env.GEMINI_MODEL ?? "gemini-3-flash-preview";

export async function POST(request: Request) {
  try {
    if (!ai) {
      return NextResponse.json({ error: "Gemini API key is not configured." }, { status: 500 });
    }

    const { currentRole, targetRole, topic } = await request.json();

    const prompt = `You are an expert career transition coach for a user transitioning from ${currentRole || "their current role"} to ${targetRole}. 
They are studying a module on "${topic}".

Generate a 4-step practical study plan that is highly tailored to learning "${topic}" in the context of becoming a ${targetRole}.
Also provide a 1-sentence "Why it matters" rationale addressing them directly ("This matters for you because..."), and a practical project idea.

Return valid JSON:
{
  "studyPlan": ["Step 1", "Step 2", "Step 3", "Step 4"],
  "rationale": "string",
  "project": "string",
  "checkpoint": "string"
}`;

    const response = await ai.models.generateContent({
      model,
      contents: prompt,
      config: { responseMimeType: "application/json" },
    });

    return NextResponse.json({ content: JSON.parse(response.text || "{}") });
  } catch (error) {
    return NextResponse.json({ error: "Failed to generate module content." }, { status: 500 });
  }
}
