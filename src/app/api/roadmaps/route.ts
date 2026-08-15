import { NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase-admin";

function getAccessToken(request: Request) {
  const authorization = request.headers.get("authorization");
  return authorization?.startsWith("Bearer ")
    ? authorization.slice("Bearer ".length)
    : null;
}

async function getUser(request: Request) {
  const accessToken = getAccessToken(request);
  if (!accessToken) return null;
  const admin = getSupabaseAdmin();
  const { data, error } = await admin.auth.getUser(accessToken);
  if (error || !data.user) return null;
  return { admin, user: data.user };
}

export async function GET(request: Request) {
  try {
    const authenticated = await getUser(request);
    if (!authenticated) return NextResponse.json({ error: "Sign in to view saved roadmaps." }, { status: 401 });

    const { data, error } = await authenticated.admin
      .from("saved_roadmaps")
      .select("id, role_title, saved_at")
      .eq("user_id", authenticated.user.id)
      .order("saved_at", { ascending: false });
    if (error) throw error;

    return NextResponse.json({
      roadmaps: (data ?? []).map((roadmap) => ({
        id: roadmap.id,
        roleTitle: roadmap.role_title,
        savedAt: roadmap.saved_at,
      })),
    });
  } catch (error) {
    console.error("Saved roadmaps lookup error:", error);
    return NextResponse.json({ error: "Unable to load your saved roadmaps." }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const authenticated = await getUser(request);
    if (!authenticated) return NextResponse.json({ error: "Sign in to save a roadmap." }, { status: 401 });

    const body = await request.json();
    const roleTitle = typeof body.roleTitle === "string" ? body.roleTitle.trim().slice(0, 160) : "";
    if (!roleTitle) return NextResponse.json({ error: "Choose a roadmap before saving it." }, { status: 400 });

    const { data, error } = await authenticated.admin
      .from("saved_roadmaps")
      .insert({ user_id: authenticated.user.id, role_title: roleTitle })
      .select("id, role_title, saved_at")
      .single();
    if (error) throw error;

    return NextResponse.json({
      roadmap: { id: data.id, roleTitle: data.role_title, savedAt: data.saved_at },
    }, { status: 201 });
  } catch (error) {
    console.error("Saved roadmap error:", error);
    return NextResponse.json({ error: "Unable to save your roadmap." }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const authenticated = await getUser(request);
    if (!authenticated) return NextResponse.json({ error: "Sign in to delete a saved roadmap." }, { status: 401 });

    const id = new URL(request.url).searchParams.get("id");
    if (!id) return NextResponse.json({ error: "Roadmap not found." }, { status: 400 });

    const { data, error } = await authenticated.admin
      .from("saved_roadmaps")
      .delete()
      .eq("id", id)
      .eq("user_id", authenticated.user.id)
      .select("id")
      .maybeSingle();
    if (error) throw error;
    if (!data) return NextResponse.json({ error: "Roadmap not found." }, { status: 404 });

    return new NextResponse(null, { status: 204 });
  } catch (error) {
    console.error("Saved roadmap deletion error:", error);
    return NextResponse.json({ error: "Unable to delete your saved roadmap." }, { status: 500 });
  }
}
