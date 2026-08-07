import { getSupabaseAdmin } from "@/lib/supabase-admin";

function getAccessToken(request: Request) {
  const authorization = request.headers.get("authorization");
  return authorization?.startsWith("Bearer ")
    ? authorization.slice("Bearer ".length)
    : null;
}

export async function getAdminUser(request: Request) {
  const accessToken = getAccessToken(request);
  if (!accessToken) return { status: 401 as const, admin: null, user: null };

  const admin = getSupabaseAdmin();
  const { data, error } = await admin.auth.getUser(accessToken);
  if (error || !data.user) return { status: 401 as const, admin: null, user: null };

  const { data: profile, error: profileError } = await admin
    .from("profiles")
    .select("is_admin")
    .eq("id", data.user.id)
    .maybeSingle();

  if (profileError || !profile?.is_admin) {
    return { status: 403 as const, admin: null, user: data.user };
  }

  return { status: 200 as const, admin, user: data.user };
}
