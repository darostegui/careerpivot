import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export function GET() {
  const hasGeminiKey = Boolean(process.env.GEMINI_API_KEY);
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  let hasSupabaseConfig = false;

  if (supabaseUrl && supabaseAnonKey) {
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
    version: process.env.npm_package_version || "unknown",
    timestamp: new Date().toISOString(),
    deploymentId: "deploy-2026-08-15-telemetry-v1",
    services: {
      gemini: hasGeminiKey ? "configured" : "missing",
      supabase: hasSupabaseConfig ? "configured" : "missing",
    },
  });
}
