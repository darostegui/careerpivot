import { NextResponse } from 'next/server';
import { GoogleGenAI } from '@google/genai';

// Initialize Gemini Client
// We ensure it fails gracefully if the key isn't present yet
const ai = process.env.GEMINI_API_KEY 
  ? new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY }) 
  : null;

export async function POST(req: Request) {
  try {
    if (!ai) {
      return NextResponse.json(
        { error: 'Gemini API key not configured yet.' },
        { status: 500 }
      );
    }

    const { message, history } = await req.json();

    // Construct the prompt with system instructions
    const systemInstruction = `
      You are an expert AI Career Pivot Coach. 
      Your goal is to interview the user in 5 questions or less to understand their current skills, 
      responsibilities, and target career goals.
      Keep your responses short, encouraging, and focused on extracting actionable skills.
    `;
    
    // We format the history for the gemini generateContent call
    // Note: In a production app, we would manage the chat session properly, 
    // but for the prototype we can just send the transcript.
    const prompt = `${systemInstruction}\n\nChat History:\n${history.map((h: any) => `${h.role}: ${h.text}`).join('\n')}\n\nUser: ${message}\nCoach:`;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });

    return NextResponse.json({ reply: response.text });
  } catch (error) {
    console.error('Chat API Error:', error);
    return NextResponse.json(
      { error: 'Failed to process chat message' },
      { status: 500 }
    );
  }
}
