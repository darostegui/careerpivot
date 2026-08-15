import { NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase-admin";

export async function GET(
  _request: Request,
  context: { params: Promise<{ token: string }> },
) {
  try {
    const { token } = await context.params;
    if (!/^[a-f0-9]{32}$/.test(token)) return NextResponse.json({ error: "Shared roadmap not found." }, { status: 404 });

    const admin = getSupabaseAdmin();
    const { data, error } = await admin
      .from("roadmap_shares")
      .select("target_role, created_at")
      .eq("token", token)
      .is("revoked_at", null)
      .maybeSingle();
    if (error) throw error;
    if (!data) return NextResponse.json({ error: "Shared roadmap not found." }, { status: 404 });

    return NextResponse.json({ targetRole: data.target_role, createdAt: data.created_at });
  } catch (error) {
    console.error("Roadmap share lookup error:", error);
    return NextResponse.json({ error: "Unable to load this shared roadmap." }, { status: 500 });
  }
}
