import { NextResponse } from "next/server";
import { getAdminUser } from "@/lib/admin-auth";

export async function GET(request: Request) {
  try {
    const authenticated = await getAdminUser(request);
    if (authenticated.status === 401) {
      return NextResponse.json({ error: "Sign in with an admin account to continue." }, { status: 401 });
    }
    if (authenticated.status === 403) {
      return NextResponse.json({ error: "You are not authorized to view the admin panel." }, { status: 403 });
    }

    const { admin } = authenticated;
    const thirtyDaysAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString();
    const [
      roles,
      milestones,
      resources,
      rolesWithMilestones,
      rolesWithResources,
      marketSnapshots,
      latestMarketSnapshot,
      resumes,
      recentResumes,
    ] = await Promise.all([
      admin.from("career_roles").select("slug", { count: "exact", head: true }),
      admin.from("career_milestones").select("id", { count: "exact", head: true }),
      admin.from("learning_resources").select("id", { count: "exact", head: true }),
      admin.from("career_milestones").select("role_slug"),
      admin.from("learning_resources").select("role_slug"),
      admin.from("market_snapshots").select("id", { count: "exact", head: true }),
      admin.from("market_snapshots").select("refreshed_at, created_at").order("created_at", { ascending: false }).limit(1).maybeSingle(),
      admin.from("resume_documents").select("id", { count: "exact", head: true }),
      admin.from("resume_documents").select("id", { count: "exact", head: true }).gte("created_at", thirtyDaysAgo),
    ]);

    const queryError = [
      roles.error,
      milestones.error,
      resources.error,
      rolesWithMilestones.error,
      rolesWithResources.error,
      marketSnapshots.error,
      latestMarketSnapshot.error,
      resumes.error,
      recentResumes.error,
    ].find(Boolean);
    if (queryError) throw queryError;

    const roleCount = roles.count ?? 0;
    const milestoneRoleCount = new Set((rolesWithMilestones.data ?? []).map((row) => row.role_slug)).size;
    const resourceRoleCount = new Set((rolesWithResources.data ?? []).map((row) => row.role_slug)).size;

    return NextResponse.json({
      roles: { count: roleCount },
      content: {
        milestones: milestones.count ?? 0,
        learningResources: resources.count ?? 0,
        rolesWithMilestones: milestoneRoleCount,
        rolesWithResources: resourceRoleCount,
        rolesWithAnyContent: new Set([
          ...(rolesWithMilestones.data ?? []).map((row) => row.role_slug),
          ...(rolesWithResources.data ?? []).map((row) => row.role_slug),
        ]).size,
      },
      market: {
        snapshotCount: marketSnapshots.count ?? 0,
        latestCreatedAt: latestMarketSnapshot.data?.created_at ?? null,
        latestRefreshedAt: latestMarketSnapshot.data?.refreshed_at ?? null,
        status: latestMarketSnapshot.data ? "available" : "not seeded",
      },
      resumes: {
        total: resumes.count ?? 0,
        last30Days: recentResumes.count ?? 0,
      },
    });
  } catch (error) {
    console.error("Admin summary error:", error);
    return NextResponse.json({ error: "Unable to load the admin summary." }, { status: 500 });
  }
}
