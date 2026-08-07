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
    if (!authenticated) {
      return NextResponse.json({ error: "Sign in to view your account." }, { status: 401 });
    }

    const { admin, user } = authenticated;
    const [{ data: profile }, { data: documents }, { data: assessments }] = await Promise.all([
      admin
        .from("profiles")
        .select("selected_pivot_title, training_consent_at")
        .eq("id", user.id)
        .maybeSingle(),
      admin
        .from("resume_documents")
        .select(
          "id, original_filename, byte_size, storage_consent_at, training_consent, retention_expires_at, created_at",
        )
        .eq("user_id", user.id)
        .order("created_at", { ascending: false }),
      admin
        .from("assessments")
        .select("target_title, suggested_roles, created_at")
        .eq("user_id", user.id)
        .order("created_at", { ascending: false })
        .limit(1),
    ]);

    const latestRole = assessments?.[0]?.target_title
      ?? (Array.isArray(assessments?.[0]?.suggested_roles)
        ? (assessments[0].suggested_roles[0] as { title?: string } | undefined)?.title
        : null);

    return NextResponse.json({
      email: user.email ?? null,
      selectedPivot: profile?.selected_pivot_title ?? latestRole ?? null,
      trainingConsentAt: profile?.training_consent_at ?? null,
      resumes: (documents ?? []).map((document) => ({
        id: document.id,
        originalFilename: document.original_filename,
        byteSize: document.byte_size,
        storageConsentAt: document.storage_consent_at,
        trainingConsent: document.training_consent,
        retentionExpiresAt: document.retention_expires_at,
        createdAt: document.created_at,
      })),
    });
  } catch (error) {
    console.error("Account lookup error:", error);
    return NextResponse.json({ error: "Unable to load your account." }, { status: 500 });
  }
}

export async function PATCH(request: Request) {
  try {
    const authenticated = await getUser(request);
    if (!authenticated) {
      return NextResponse.json({ error: "Sign in to update your account." }, { status: 401 });
    }

    const body = await request.json();
    const selectedPivotTitle =
      typeof body.selectedPivotTitle === "string" && body.selectedPivotTitle.trim()
        ? body.selectedPivotTitle.trim().slice(0, 160)
        : null;
    const admin = authenticated.admin;

    const { error } = await admin.from("profiles").upsert({
      id: authenticated.user.id,
      selected_pivot_title: selectedPivotTitle,
    });
    if (error) throw error;

    return NextResponse.json({ selectedPivot: selectedPivotTitle });
  } catch (error) {
    console.error("Account update error:", error);
    return NextResponse.json({ error: "Unable to update your account." }, { status: 500 });
  }
}
