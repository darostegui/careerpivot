import { NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";
import { getOptionalAuthenticatedUser, UsageLimitError } from "@/lib/usage-limits";
import { telemetry } from "@/lib/telemetry";

const ai = process.env.GEMINI_API_KEY ? new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY }) : null;
const model = process.env.GEMINI_MODEL ?? "gemini-3-flash-preview";

export async function POST(request: Request) {
  try {
    if (!ai) return NextResponse.json({ error: "Gemini API key is not configured." }, { status: 500 });
    
    const body = await request.json();
    if (!body.analysis || !body.targetRole) {
      return NextResponse.json({ error: "Missing analysis data to generate cover letter." }, { status: 400 });
    }

    const prompt = `You are an expert career transition coach. Write a compelling, highly professional cover letter for someone pivoting into the role of "${body.targetRole}".
    
    Here is their background and transferable strengths:
    Current Role: ${body.analysis.currentRole}
    Strengths to highlight: ${body.analysis.strengths.join(", ")}
    
    Instructions:
    1. Acknowledge the pivot directly but frame it as an massive advantage (e.g. they bring a unique perspective).
    2. Keep it under 300 words.
    3. Do not use generic AI buzzwords like "delve" or "testament". Use clean, direct corporate language.
    4. Provide the letter in plain text, ready to be copied and pasted.`;

    telemetry.log('AI_AGENT_COVER_LETTER_STARTED', { targetRole: body.targetRole });

    const response = await ai.models.generateContent({
      model,
      contents: prompt,
    });

    telemetry.log('AI_AGENT_COVER_LETTER_COMPLETED', { targetRole: body.targetRole });

    return NextResponse.json({ coverLetter: response.text });
  } catch (error) {
    telemetry.error('AI_AGENT_COVER_LETTER_FAILED', error);
    console.error("Cover letter error:", error);
    return NextResponse.json({ error: "Unable to generate cover letter." }, { status: 500 });
  }
}
