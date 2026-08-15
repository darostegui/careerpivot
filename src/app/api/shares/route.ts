import { NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase-admin";
import { getRoadmapContent } from "@/lib/roadmap-content";

function getAccessToken(request: Request) {
  const authorization = request.headers.get("authorization");
  return authorization?.startsWith("Bearer ") ? authorization.slice("Bearer ".length) : null;
}

export async function POST(request: Request) {
  try {
    const accessToken = getAccessToken(request);
    if (!accessToken) return NextResponse.json({ error: "Sign in to share a personalized roadmap." }, { status: 401 });

    const admin = getSupabaseAdmin();
    const { data: authData, error: authError } = await admin.auth.getUser(accessToken);
    if (authError || !authData.user) return NextResponse.json({ error: "Your session is no longer valid." }, { status: 401 });

    const body = await request.json();
    const targetRole = typeof body.targetRole === "string" ? body.targetRole.trim().slice(0, 160) : "";
    if (!targetRole) return NextResponse.json({ error: "Choose a target role before sharing." }, { status: 400 });

    const roadmap = getRoadmapContent(targetRole);
    const { data, error } = await admin
      .from("roadmap_shares")
      .insert({ token: crypto.randomUUID().replaceAll("-", ""), user_id: authData.user.id, target_role: roadmap.roleTitle })
      .select("token")
      .single();
    if (error) throw error;

    return NextResponse.json({ token: data.token }, { status: 201 });
  } catch (error) {
    console.error("Roadmap share creation error:", error);
    return NextResponse.json({ error: "Unable to create a public roadmap link." }, { status: 500 });
  }
}
