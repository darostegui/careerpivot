import { NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase-admin";

const bucket = "resume-pdfs";

export async function DELETE(
  request: Request,
  context: { params: Promise<{ id: string }> },
) {
  try {
    const authorization = request.headers.get("authorization");
    const accessToken = authorization?.startsWith("Bearer ")
      ? authorization.slice("Bearer ".length)
      : null;
    if (!accessToken) return NextResponse.json({ error: "Sign in to delete your resume." }, { status: 401 });

    const admin = getSupabaseAdmin();
    const { data: userData, error: userError } = await admin.auth.getUser(accessToken);
    if (userError || !userData.user) return NextResponse.json({ error: "Your session is no longer valid." }, { status: 401 });

    const { id } = await context.params;
    const { data: document, error: readError } = await admin
      .from("resume_documents")
      .select("storage_path")
      .eq("id", id)
      .eq("user_id", userData.user.id)
      .single();
    if (readError || !document) return NextResponse.json({ error: "Resume not found." }, { status: 404 });

    const { error: storageError } = await admin.storage.from(bucket).remove([document.storage_path]);
    if (storageError) throw storageError;
    const { error: deleteError } = await admin.from("resume_documents").delete().eq("id", id).eq("user_id", userData.user.id);
    if (deleteError) throw deleteError;

    return new NextResponse(null, { status: 204 });
  } catch (error) {
    console.error("Resume deletion error:", error);
    return NextResponse.json({ error: "Unable to delete your resume." }, { status: 500 });
  }
}
