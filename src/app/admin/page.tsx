"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft, Loader2, LockKeyhole } from "lucide-react";
import { getSupabaseClient } from "@/lib/supabase";

type Summary = {
  roles: { count: number };
  content: {
    milestones: number;
    learningResources: number;
    rolesWithMilestones: number;
    rolesWithResources: number;
    rolesWithAnyContent: number;
  };
  market: {
    snapshotCount: number;
    latestCreatedAt: string | null;
    latestRefreshedAt: string | null;
    status: string;
  };
  resumes: { total: number; last30Days: number };
};

function formatDate(value: string | null) {
  return value ? new Intl.DateTimeFormat(undefined, { dateStyle: "medium", timeStyle: "short" }).format(new Date(value)) : "No snapshot yet";
}

export default function AdminPage() {
  const [summary, setSummary] = useState<Summary | null>(null);
  const [state, setState] = useState<"loading" | "unauthorized" | "error">("loading");

  const loadSummary = useCallback(async () => {
    const { data } = await getSupabaseClient().auth.getSession();
    const response = await fetch("/api/admin/summary", {
      headers: data.session ? { Authorization: `Bearer ${data.session.access_token}` } : {},
    });
    if (response.status === 401 || response.status === 403) {
      setState("unauthorized");
      return;
    }
    if (!response.ok) {
      setState("error");
      return;
    }
    setSummary(await response.json());
  }, []);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      void loadSummary().catch(() => setState("error"));
    }, 0);
    return () => window.clearTimeout(timer);
  }, [loadSummary]);

  return (
    <main className="min-h-screen bg-zinc-950 px-6 py-8 text-white">
      <header className="mx-auto flex max-w-5xl items-center justify-between">
        <Link href="/" className="inline-flex items-center text-zinc-400 hover:text-white">
          <ArrowLeft className="mr-2 h-4 w-4" /> Home
        </Link>
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">Admin</span>
      </header>

      <section className="mx-auto mt-16 max-w-5xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-400">Operations</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight">CareerPivot overview</h1>
        {state === "loading" && <Loader2 className="mt-10 h-6 w-6 animate-spin text-emerald-400" />}
        {state === "unauthorized" && (
          <div className="mt-10 max-w-xl rounded-2xl border border-amber-500/30 bg-amber-500/10 p-6">
            <LockKeyhole className="h-6 w-6 text-amber-300" />
            <h2 className="mt-4 text-xl font-semibold">Admin access required</h2>
            <p className="mt-2 text-sm text-amber-100/70">Your account is signed out or does not have the admin role.</p>
          </div>
        )}
        {state === "error" && <p className="mt-10 rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-200">Unable to load the admin summary.</p>}
        {summary && (
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <Metric title="Career roles" value={summary.roles.count} detail="Catalogued roles" />
            <Metric title="Content coverage" value={`${summary.content.rolesWithAnyContent}/${summary.roles.count}`} detail={`${summary.content.milestones} milestones · ${summary.content.learningResources} resources`} />
            <Metric title="Market snapshot" value={summary.market.status} detail={`${summary.market.snapshotCount} snapshots · refreshed ${formatDate(summary.market.latestRefreshedAt)}`} />
            <Metric title="Recent resumes" value={summary.resumes.last30Days} detail={`${summary.resumes.total} stored total · last 30 days`} />
          </div>
        )}
      </section>
    </main>
  );
}

function Metric({ title, value, detail }: { title: string; value: string | number; detail: string }) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6">
      <p className="text-sm text-zinc-500">{title}</p>
      <p className="mt-3 text-3xl font-bold capitalize text-emerald-300">{value}</p>
      <p className="mt-2 text-sm text-zinc-400">{detail}</p>
    </div>
  );
}
