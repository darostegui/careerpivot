import { NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase-admin";

export async function GET(request: Request) {
  try {
    const authorization = request.headers.get("authorization");
    const accessToken = authorization?.startsWith("Bearer ")
      ? authorization.slice("Bearer ".length)
      : null;
    if (!accessToken) return NextResponse.json({ unlocked: false });

    const admin = getSupabaseAdmin();
    const { data: authData, error: authError } = await admin.auth.getUser(accessToken);
    if (authError || !authData.user) return NextResponse.json({ unlocked: false });

    const { data, error } = await admin
      .from("purchases")
      .select("id")
      .eq("user_id", authData.user.id)
      .eq("product_key", "roadmap_blueprint")
      .eq("status", "paid")
      .limit(1);
    if (error) throw error;

    return NextResponse.json({ unlocked: (data ?? []).length > 0 });
  } catch (error) {
    console.error("Purchase lookup error:", error);
    return NextResponse.json({ error: "Unable to verify purchase." }, { status: 500 });
  }
}
