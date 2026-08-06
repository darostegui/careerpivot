import { NextResponse } from "next/server";

export function GET() {
  const hasGeminiKey = Boolean(process.env.GEMINI_API_KEY);
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  let hasSupabaseConfig = false;

  if (supabaseUrl && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
    try {
      const parsedUrl = new URL(supabaseUrl);
      hasSupabaseConfig =
        parsedUrl.protocol === "https:" &&
        parsedUrl.hostname.endsWith(".supabase.co");
    } catch {
      hasSupabaseConfig = false;
    }
  }

  return NextResponse.json({
    ok: hasGeminiKey && hasSupabaseConfig,
    services: {
      gemini: hasGeminiKey ? "configured" : "missing",
      supabase: hasSupabaseConfig ? "configured" : "missing",
    },
  });
}
