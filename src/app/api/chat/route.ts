import { NextResponse } from 'next/server';
import { GoogleGenAI } from '@google/genai';

// Initialize Gemini Client
// We ensure it fails gracefully if the key isn't present yet
const ai = process.env.GEMINI_API_KEY 
  ? new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY }) 
  : null;
const model = process.env.GEMINI_MODEL ?? 'gemini-2.0-flash';

export async function POST(req: Request) {
  try {
    if (!ai) {
      return NextResponse.json(
        { error: 'Gemini API key not configured yet.' },
        { status: 500 }
      );
    }

    const { message, history } = await req.json();

    if (typeof message !== 'string' || !message.trim() || !Array.isArray(history)) {
      return NextResponse.json(
        { error: 'A message and chat history are required.' },
        { status: 400 }
      );
    }

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
      model,
      contents: prompt,
    });

    return NextResponse.json({ reply: response.text });
  } catch (error) {
    console.error('Chat API Error:', error);
    const message = error instanceof Error ? error.message : 'Unknown Gemini API error';
    return NextResponse.json(
      { error: `Failed to process chat message: ${message}` },
      { status: 500 }
    );
  }
}
