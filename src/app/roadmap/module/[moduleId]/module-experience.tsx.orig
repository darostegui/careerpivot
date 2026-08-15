"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2, Clock3, ExternalLink, FlaskConical, Target } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { getRoadmapContent } from "@/lib/roadmap-content";
import type { RoadmapContent, RoadmapTopic } from "@/lib/roadmap-content/types";

type GeneratedAnalysis = {
  currentRole: string;
  strengths: string[];
  suggestedRoles: Array<{ title: string; nextSkills: string[] }>;
};

function readPersonalizedRoadmap(roleFromQuery: string): RoadmapContent {
  if (typeof window === "undefined") return getRoadmapContent(roleFromQuery || "Cloud DevOps Engineer");

  const stored = window.sessionStorage.getItem("careerpivot-analysis") ?? window.localStorage.getItem("careerpivot-analysis");
  const savedRole = window.sessionStorage.getItem("careerpivot-selected-role") ?? window.localStorage.getItem("careerpivot-selected-role");
  if (!stored) return getRoadmapContent(roleFromQuery || savedRole || "Cloud DevOps Engineer");

  try {
    const analysis = JSON.parse(stored) as GeneratedAnalysis;
    const selected = analysis.suggestedRoles.find((candidate) => candidate.title === savedRole)
      ?? analysis.suggestedRoles.find((candidate) => candidate.title === roleFromQuery)
      ?? analysis.suggestedRoles[0];
    return getRoadmapContent(selected?.title ?? roleFromQuery, [
      ...(analysis.strengths?.slice(0, 1) ?? []),
      ...(selected?.nextSkills ?? []),
    ]);
  } catch {
    return getRoadmapContent(roleFromQuery || savedRole || "Cloud DevOps Engineer");
  }
}

function effortFor(topic: RoadmapTopic) {
  const hours = Math.max(4, topic.studyPlan.length * 2 + (topic.resources.length > 2 ? 2 : 0));
  return `${hours}–${hours + 4} hours`;
}

export default function ModuleExperience({ moduleId, roleTitle }: { moduleId: string; roleTitle: string }) {
  const [roadmap, setRoadmap] = useState<RoadmapContent | null>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setRoadmap(readPersonalizedRoadmap(roleTitle));
      setIsReady(true);
    }, 0);
    return () => window.clearTimeout(timer);
  }, [roleTitle]);

  const decodedModuleId = useMemo(() => {
    try {
      return decodeURIComponent(moduleId);
    } catch {
      return moduleId;
    }
  }, [moduleId]);
  const moduleIndex = useMemo(
    () => roadmap?.topics.findIndex((topic) => topic.id === decodedModuleId) ?? -1,
    [decodedModuleId, roadmap],
  );
  const topic = moduleIndex >= 0 ? roadmap?.topics[moduleIndex] : undefined;
  const previous = moduleIndex > 0 ? roadmap?.topics[moduleIndex - 1] : undefined;
  const next = roadmap && moduleIndex >= 0 ? roadmap.topics[moduleIndex + 1] : undefined;

  if (!isReady) return <main className="module-experience min-h-screen bg-zinc-950" />;
  if (!roadmap || !topic) {
    return (
      <main className="module-experience flex min-h-screen items-center justify-center bg-zinc-950 px-6 text-white">
        <div className="max-w-md text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-400">Module not found</p>
          <h1 className="mt-3 text-3xl font-bold">That learning module is no longer available.</h1>
          <Link href="/roadmap" className="mt-8 inline-flex rounded-xl bg-emerald-400 px-5 py-3 font-semibold text-zinc-950">Back to roadmap</Link>
        </div>
      </main>
    );
  }

  const role = roadmap.roleTitle;
  const query = `?role=${encodeURIComponent(role)}`;
  const roleReason = `This is useful for a ${role} because it turns the concept into evidence you can use in day-to-day work, interviews, and portfolio reviews.`;

  return (
    <main className="module-experience min-h-screen bg-zinc-950 text-white">
      <div className="mx-auto max-w-6xl px-5 py-6 sm:px-8 lg:px-12">
        <header className="flex items-center justify-between gap-4">
          <Link href="/roadmap" className="inline-flex items-center gap-2 text-sm text-zinc-400 transition hover:text-white">
            <ArrowLeft className="h-4 w-4" /> Back to roadmap
          </Link>
          <span className="text-sm font-bold tracking-tight">CareerPivot<span className="text-emerald-400">.me</span></span>
        </header>

        <div className="mt-14 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <section>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-400">Module {moduleIndex + 1} of {roadmap.topics.length}</p>
            <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight sm:text-6xl">{topic.title}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">{topic.outcome}</p>
            <div className="mt-8 flex flex-wrap gap-3 text-sm text-zinc-400">
              <span className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/70 px-4 py-2"><Clock3 className="h-4 w-4 text-amber-300" /> {effortFor(topic)} estimated</span>
              <span className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/70 px-4 py-2"><Target className="h-4 w-4 text-cyan-300" /> Target: {role}</span>
            </div>
          </section>
          <aside className="rounded-3xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/15 via-zinc-900 to-cyan-500/10 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">Why it matters</p>
            <p className="mt-4 leading-7 text-zinc-200">{roleReason}</p>
            <div className="mt-6 border-t border-white/10 pt-5 text-sm text-zinc-400">
              Your finish line: <span className="text-zinc-200">{topic.checkpoint}</span>
            </div>
          </aside>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-[1fr_0.78fr]">
          <section className="rounded-3xl border border-zinc-800 bg-zinc-900/55 p-6 sm:p-8">
            <div className="flex items-center gap-3"><span className="rounded-xl bg-emerald-400/15 p-2 text-emerald-300"><CheckCircle2 className="h-5 w-5" /></span><h2 className="text-2xl font-semibold">Your study plan</h2></div>
            <ol className="mt-8 space-y-6">
              {topic.studyPlan.map((step, index) => (
                <li key={step} className="flex gap-4">
                  <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-emerald-400 text-sm font-bold text-zinc-950">{index + 1}</span>
                  <p className="pt-1 leading-7 text-zinc-300">{step}</p>
                </li>
              ))}
            </ol>
          </section>
          <div className="space-y-6">
            <section className="rounded-3xl border border-cyan-500/20 bg-cyan-500/10 p-6 sm:p-8">
              <div className="flex items-center gap-3"><FlaskConical className="h-5 w-5 text-cyan-300" /><h2 className="text-xl font-semibold text-cyan-100">Practical project</h2></div>
              <p className="mt-5 leading-7 text-zinc-200">{topic.project}</p>
            </section>
            <section className="rounded-3xl border border-zinc-800 bg-zinc-900/55 p-6 sm:p-8">
              <h2 className="text-xl font-semibold">Evidence checkpoint</h2>
              <p className="mt-4 leading-7 text-zinc-400">{topic.checkpoint}</p>
            </section>
          </div>
        </div>

        <section className="mt-6 rounded-3xl border border-zinc-800 bg-zinc-900/55 p-6 sm:p-8">
          <h2 className="text-xl font-semibold">Resources selected for this module</h2>
          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {topic.resources.map((resource) => (
              <a key={resource.title} href={resource.url} target="_blank" rel="noreferrer" className="group rounded-2xl border border-zinc-800 p-4 transition hover:border-emerald-500/50 hover:bg-zinc-800/60">
                <div className="flex items-start justify-between gap-3"><span className="font-medium text-zinc-100">{resource.title}</span><ExternalLink className="h-4 w-4 flex-shrink-0 text-zinc-500 transition group-hover:text-emerald-300" /></div>
                <p className="mt-2 text-xs uppercase tracking-wide text-emerald-400">{resource.provider} · {resource.access} · {resource.format}</p>
                <p className="mt-3 text-sm leading-6 text-zinc-400">{resource.note}</p>
              </a>
            ))}
          </div>
        </section>

        <nav className="mt-10 flex items-center justify-between gap-4 border-t border-zinc-800 pt-6">
          {previous ? <Link href={`/roadmap/module/${encodeURIComponent(previous.id)}${query}`} className="group max-w-[45%] text-sm text-zinc-400 hover:text-white"><span className="flex items-center gap-2"><ArrowLeft className="h-4 w-4" /> Previous</span><span className="mt-2 block truncate font-medium text-zinc-200 group-hover:text-emerald-300">{previous.title}</span></Link> : <span />}
          {next ? <Link href={`/roadmap/module/${encodeURIComponent(next.id)}${query}`} className="group max-w-[45%] text-right text-sm text-zinc-400 hover:text-white"><span className="flex items-center justify-end gap-2">Next module <ArrowRight className="h-4 w-4" /></span><span className="mt-2 block truncate font-medium text-zinc-200 group-hover:text-emerald-300">{next.title}</span></Link> : <Link href={`/roadmap${query}`} className="inline-flex items-center gap-2 rounded-xl bg-emerald-400 px-4 py-2 text-sm font-semibold text-zinc-950">Finish module <ArrowRight className="h-4 w-4" /></Link>}
        </nav>
      </div>
    </main>
  );
}
