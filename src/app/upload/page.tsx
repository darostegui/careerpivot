"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import Link from "next/link";
import { ArrowLeft, Loader2, UploadCloud } from "lucide-react";
import { getSupabaseClient } from "@/lib/supabase";

type SuggestedRole = {
  title: string;
  fitScore: number;
  estimatedMonths: number;
  salaryRange: string;
  rationale: string;
  nextSkills: string[];
};

type Analysis = {
  currentRole: string;
  strengths: string[];
  suggestedRoles: SuggestedRole[];
};

export default function UploadPage() {
  const [file, setFile] = useState<File | null>(null);
  const [analysis, setAnalysis] = useState<Analysis | null>(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [storageConsent, setStorageConsent] = useState(false);

  function handleFileChange(event: ChangeEvent<HTMLInputElement>) {
    setError("");
    setAnalysis(null);
    setFile(event.target.files?.[0] ?? null);
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!file) {
      setError("Choose a PDF resume first.");
      return;
    }

    setError("");
    setIsLoading(true);
    const formData = new FormData();
    formData.append("resume", file);
    formData.append("storageConsent", String(storageConsent));

    try {
      const supabase = getSupabaseClient();
      const { data: sessionData } = await supabase.auth.getSession();
      if (!sessionData.session) {
        throw new Error("Sign in before saving your resume.");
      }

      const saveResponse = await fetch("/api/resumes", {
        method: "POST",
        headers: { Authorization: `Bearer ${sessionData.session.access_token}` },
        body: formData,
      });
      const saveData = await saveResponse.json();
      if (!saveResponse.ok) throw new Error(saveData.error ?? "Unable to save your resume.");

      const analysisFormData = new FormData();
      analysisFormData.append("resume", file);
      const response = await fetch("/api/analyze", { method: "POST", body: analysisFormData });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error ?? "Resume analysis failed.");
      setAnalysis(data.analysis);
      window.sessionStorage.setItem("careerpivot-analysis", JSON.stringify(data.analysis));
    } catch (caughtError) {
      setError(caughtError instanceof Error ? caughtError.message : "Resume analysis failed.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-zinc-950 px-6 py-8 text-white">
      <Link href="/" className="inline-flex items-center text-zinc-400 hover:text-white">
        <ArrowLeft className="mr-2 h-4 w-4" /> Back to home
      </Link>
      <section className="mx-auto mt-12 max-w-3xl">
        <div className="text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-400">Step 01 / Analyze</p>
          <h1 className="text-4xl font-bold tracking-tight">Find your nearest pivot</h1>
          <p className="mx-auto mt-4 max-w-xl text-zinc-400">
            Upload your LinkedIn PDF. We extract the signal, then show three realistic next roles before you commit to a full roadmap.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-10">
          <label
            htmlFor="resume"
            className="group block cursor-pointer rounded-2xl border-2 border-dashed border-zinc-800 bg-zinc-900/40 p-12 text-center transition hover:border-emerald-500/60 hover:bg-zinc-900"
          >
            <UploadCloud className="mx-auto mb-5 h-14 w-14 text-zinc-600 transition group-hover:text-emerald-400" />
            <span className="block text-lg font-semibold">{file?.name ?? "Choose your LinkedIn PDF"}</span>
            <span className="mt-2 block text-sm text-zinc-500">PDF only · maximum 5 MB · processed privately</span>
            <input id="resume" type="file" accept="application/pdf" onChange={handleFileChange} className="sr-only" />
          </label>
          <button
            type="submit"
            disabled={isLoading}
            className="mt-5 flex w-full items-center justify-center rounded-xl bg-white px-6 py-4 font-semibold text-black transition hover:bg-zinc-200 disabled:opacity-50"
          >
            {isLoading && <Loader2 className="mr-2 h-5 w-5 animate-spin" />}
            {isLoading ? "Mapping your experience..." : "Show my pivot options"}
          </button>
        </form>

        <label className="mt-5 flex items-start gap-3 text-sm text-zinc-400">
          <input
            type="checkbox"
            checked={storageConsent}
            onChange={(event) => setStorageConsent(event.target.checked)}
            className="mt-1 accent-emerald-500"
          />
          <span>
            I agree to securely store this PDF in my private account so I can access and delete it later.
            It will not be used to train AI models unless I separately opt in.
          </span>
        </label>

        {error && <p className="mt-5 rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-200">{error}</p>}

        {analysis && (
          <section className="mt-12">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6">
              <p className="text-sm text-zinc-500">Current profile signal</p>
              <h2 className="mt-1 text-2xl font-bold">{analysis.currentRole}</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {analysis.strengths.map((strength) => (
                  <span key={strength} className="rounded-full bg-emerald-500/10 px-3 py-1 text-sm text-emerald-300">{strength}</span>
                ))}
              </div>
            </div>
            <h2 className="mt-10 text-2xl font-bold">Your closest pivots</h2>
            <div className="mt-4 space-y-4">
              {analysis.suggestedRoles.map((role) => (
                <article key={role.title} className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-bold">{role.title}</h3>
                      <p className="mt-1 text-sm text-zinc-400">{role.salaryRange} · approximately {role.estimatedMonths} months</p>
                    </div>
                    <div className="rounded-lg bg-emerald-500/10 px-3 py-2 text-right">
                      <strong className="block text-xl text-emerald-300">{role.fitScore}%</strong>
                      <span className="text-xs text-zinc-400">skill overlap</span>
                    </div>
                  </div>
                  <p className="mt-4 text-zinc-300">{role.rationale}</p>
                  <p className="mt-4 text-sm text-zinc-500">Next skills: {role.nextSkills.join(" · ")}</p>
                </article>
              ))}
            </div>
            <Link href="/roadmap" className="mt-6 block rounded-xl border border-emerald-500/40 bg-emerald-500/10 px-6 py-4 text-center font-semibold text-emerald-300 hover:bg-emerald-500/20">
              Preview the full interactive roadmap →
            </Link>
          </section>
        )}
      </section>
    </main>
  );
}
