import { NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase-admin";

const bucket = "resume-pdfs";
const maxUploadBytes = 5 * 1024 * 1024;
const retentionDays = 365;

export async function POST(request: Request) {
  try {
    const authorization = request.headers.get("authorization");
    const accessToken = authorization?.startsWith("Bearer ")
      ? authorization.slice("Bearer ".length)
      : null;

    if (!accessToken) {
      return NextResponse.json({ error: "Sign in before saving a resume." }, { status: 401 });
    }

    const admin = getSupabaseAdmin();
    const { data: userData, error: userError } = await admin.auth.getUser(accessToken);
    if (userError || !userData.user) {
      return NextResponse.json({ error: "Your session is no longer valid." }, { status: 401 });
    }

    const formData = await request.formData();
    const file = formData.get("resume");
    const storageConsent = formData.get("storageConsent") === "true";

    if (!storageConsent) {
      return NextResponse.json({ error: "Confirm storage consent before saving your resume." }, { status: 400 });
    }
    if (!(file instanceof File) || file.type !== "application/pdf") {
      return NextResponse.json({ error: "Upload a PDF resume to save it." }, { status: 400 });
    }
    if (file.size > maxUploadBytes) {
      return NextResponse.json({ error: "The PDF must be smaller than 5 MB." }, { status: 400 });
    }

    const id = crypto.randomUUID();
    const storagePath = `${userData.user.id}/${id}.pdf`;
    const { error: uploadError } = await admin.storage
      .from(bucket)
      .upload(storagePath, Buffer.from(await file.arrayBuffer()), {
        contentType: "application/pdf",
        upsert: false,
      });

    if (uploadError) throw uploadError;

    const expiresAt = new Date();
    expiresAt.setDate(expiresAt.getDate() + retentionDays);
    const { error: insertError } = await admin.from("resume_documents").insert({
      id,
      user_id: userData.user.id,
      storage_path: storagePath,
      original_filename: file.name,
      byte_size: file.size,
      storage_consent_at: new Date().toISOString(),
      training_consent: false,
      retention_expires_at: expiresAt.toISOString(),
    });

    if (insertError) {
      await admin.storage.from(bucket).remove([storagePath]);
      if (insertError.message.includes("resume_storage_limit_exceeded")) {
        return NextResponse.json(
          { error: "You can store up to 5 PDF resumes. Delete an existing resume or contact support to extend your limit." },
          { status: 429 },
        );
      }
      throw insertError;
    }

    return NextResponse.json({ id, expiresAt: expiresAt.toISOString() }, { status: 201 });
  } catch (error) {
    console.error("Resume storage error:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unable to save your resume." },
      { status: 500 },
    );
  }
}
