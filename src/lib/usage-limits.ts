import type { SupabaseClient, User } from "@supabase/supabase-js";
import { getSupabaseAdmin } from "@/lib/supabase-admin";

export const MAX_STORED_RESUMES = 5;
export const MAX_ROADMAP_CHECKS = 12;
export const ROADMAP_CHECK_WINDOW_DAYS = 30;

export class UsageLimitError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "UsageLimitError";
  }
}

export async function getOptionalAuthenticatedUser(
  request: Request,
): Promise<{ admin: SupabaseClient; user: User } | null> {
  const authorization = request.headers.get("authorization");
  const accessToken = authorization?.startsWith("Bearer ")
    ? authorization.slice("Bearer ".length)
    : null;
  if (!accessToken) return null;

  const admin = getSupabaseAdmin();
  const { data, error } = await admin.auth.getUser(accessToken);
  if (error || !data.user) return null;
  return { admin, user: data.user };
}

export async function recordRoadmapCheck(
  admin: SupabaseClient,
  userId: string,
  checkType: "resume" | "manual",
) {
  const { error } = await admin.rpc("record_roadmap_check", {
    p_user_id: userId,
    p_check_type: checkType,
  });
  if (!error) return;

  if (error.message.includes("roadmap_check_limit_exceeded")) {
    throw new UsageLimitError(
      "You have reached your limit of 12 roadmap checks in the last 30 days. Contact support to extend your limit.",
    );
  }
  throw error;
}
