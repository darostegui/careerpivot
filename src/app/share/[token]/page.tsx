import Link from "next/link";
import { notFound } from "next/navigation";
import { getSupabaseAdmin } from "@/lib/supabase-admin";
import { getRoadmapContent } from "@/lib/roadmap-content";

export default async function SharedRoadmapPage({
  params,
}: {
  params: Promise<{ token: string }>;
}) {
  const { token } = await params;
  if (!/^[a-f0-9]{32}$/.test(token)) notFound();

  const { data, error } = await getSupabaseAdmin()
    .from("roadmap_shares")
    .select("target_role")
    .eq("token", token)
    .is("revoked_at", null)
    .maybeSingle();
  if (error || !data) notFound();

  const roadmap = getRoadmapContent(data.target_role);
  return (
    <main className="min-h-screen bg-zinc-950 px-6 py-12 text-white">
      <div className="mx-auto max-w-4xl">
        <Link href="/" className="text-sm text-zinc-400 hover:text-white">CareerPivot<span className="text-emerald-500">.me</span></Link>
        <p className="mt-16 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-400">Shared career roadmap</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight">Your path to {roadmap.roleTitle}</h1>
        <p className="mt-4 max-w-2xl text-zinc-400">A practical, read-only sequence of skills, projects, and proof points for this career pivot.</p>
        <div className="mt-10 space-y-5">
          {roadmap.topics.map((topic, index) => (
            <article key={topic.id} className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6">
              <p className="text-sm text-emerald-400">Module {index + 1}</p>
              <h2 className="mt-1 text-2xl font-semibold">{topic.title}</h2>
              <p className="mt-3 text-zinc-300">{topic.outcome}</p>
              <h3 className="mt-5 text-sm font-semibold text-white">Build this</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-400">{topic.project}</p>
              <h3 className="mt-5 text-sm font-semibold text-white">Done when</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-400">{topic.checkpoint}</p>
            </article>
          ))}
        </div>
        <Link href="/upload" className="mt-10 inline-block rounded-xl bg-emerald-500 px-5 py-3 font-semibold text-zinc-950 hover:bg-emerald-400">Create your own roadmap</Link>
      </div>
    </main>
  );
}
