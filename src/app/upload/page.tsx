"use client";

import { ChangeEvent, FormEvent, useEffect, useState, Suspense } from "react";
import Link from "next/link";
import { ArrowLeft, Loader2, UploadCloud } from "lucide-react";
import { getSupabaseClient } from "@/lib/supabase";
import { useSearchParams } from "next/navigation";

type SuggestedRole = {
  title: string;
  fitScore: number;
  estimatedMonths: number;
  salaryRange: string;
  rationale: string;
  nextSkills: string[];
  modules?: Array<{
    title: string;
    outcome: string;
    studyPlan: string[];
    project: string;
    checkpoint: string;
  }>;
};

type Analysis = {
  currentRole: string;
  strengths: string[];
  suggestedRoles: SuggestedRole[];
};

function UploadForm() {
  const searchParams = useSearchParams();
  const [file, setFile] = useState<File | null>(null);
  const [analysis, setAnalysis] = useState<Analysis | null>(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [storageConsent, setStorageConsent] = useState(false);
  const [selectedRoleTitle, setSelectedRoleTitle] = useState("");

  useEffect(() => {
    if (searchParams.get("new") === "true") {
      window.sessionStorage.removeItem("careerpivot-analysis");
      window.localStorage.removeItem("careerpivot-analysis");
      return;
    }

    const stored =
      window.sessionStorage.getItem("careerpivot-analysis") ??
      window.localStorage.getItem("careerpivot-analysis");
    if (!stored) return;
    try {
      const parsed = JSON.parse(stored) as Analysis;
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setAnalysis(parsed);
      const savedTitle = window.sessionStorage.getItem("careerpivot-selected-role") ?? window.localStorage.getItem("careerpivot-selected-role");
      setSelectedRoleTitle(parsed.suggestedRoles.some((role) => role.title === savedTitle) ? savedTitle ?? "" : parsed.suggestedRoles[0]?.title ?? "");
    } catch {
      window.sessionStorage.removeItem("careerpivot-analysis");
      window.localStorage.removeItem("careerpivot-analysis");
    }
  }, [searchParams]);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0];
    if (selected && selected.type === "application/pdf") {
      setFile(selected);
      setError("");
    } else {
      setFile(null);
      setError("Please select a valid PDF file.");
    }
  };

  const handleUpload = async (e: FormEvent) => {
    e.preventDefault();
    if (!file) {
      setError("Please select a file first.");
      return;
    }
    setError("");
    setIsLoading(true);
    setAnalysis(null);

    try {
      const formData = new FormData();
      formData.append("resume", file);
      
      let storagePromise: Promise<Response> | null = null;
      if (storageConsent) {
        const { data: { session } } = await getSupabaseClient().auth.getSession();
        if (!session) {
          throw new Error("Sign in before saving your resume.");
        }
        formData.append("storageConsent", "true");
        storagePromise = fetch("/api/resumes", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${session.access_token}`,
          },
          body: formData,
        });
      }

      const response = await fetch("/api/analyze", {
        method: "POST",
        body: formData,
      });

      if (storagePromise) {
        const storeRes = await storagePromise;
        if (!storeRes.ok) {
          console.warn("Storage warning:", await storeRes.text());
        }
      }

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error ?? "Failed to analyze resume.");
      }

      setAnalysis(data.analysis);
      setSelectedRoleTitle(data.analysis.suggestedRoles[0]?.title ?? "");
      window.sessionStorage.setItem("careerpivot-analysis", JSON.stringify(data.analysis));
    } catch (err) {
      setError(err instanceof Error ? err.message : "An unexpected error occurred.");
    } finally {
      setIsLoading(false);
    }
  };

  if (analysis) {
    const selectedRole = analysis.suggestedRoles.find((r) => r.title === selectedRoleTitle);
    
    return (
      <div className="max-w-4xl mx-auto px-6 py-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <Link href="/" className="inline-flex items-center text-sm font-medium text-zinc-400 hover:text-emerald-400 mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to home
        </Link>
        
        <div className="bg-white dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800/60 rounded-2xl p-6 md:p-8 backdrop-blur-xl">
          <h3 className="text-sm font-medium text-zinc-500 uppercase tracking-wider mb-3">Current profile signal</h3>
          <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-6">{analysis.currentRole}</h2>
          
          <div className="flex flex-wrap gap-2 mb-8">
            {analysis.strengths.map((s, i) => (
              <span key={i} className="px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 rounded-full text-sm font-medium">
                {s}
              </span>
            ))}
          </div>
        </div>

        <h3 className="text-2xl font-bold mt-12 mb-6 text-zinc-900 dark:text-zinc-100">Your closest pivots</h3>
        <div className="grid gap-4">
          {analysis.suggestedRoles.map((role) => (
            <div 
              key={role.title} 
              onClick={() => {
                setSelectedRoleTitle(role.title);
                window.sessionStorage.setItem("careerpivot-selected-role", role.title);
              }}
              className={`p-6 rounded-2xl border transition-all cursor-pointer group ${
                selectedRoleTitle === role.title 
                  ? "bg-emerald-50/50 dark:bg-zinc-900 border-emerald-500/50 shadow-[0_0_30px_-10px_rgba(16,185,129,0.15)] ring-1 ring-emerald-500/20" 
                  : "bg-white dark:bg-zinc-900/30 border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-900/60 hover:border-zinc-300 dark:hover:border-zinc-700"
              }`}
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                <div>
                  <h4 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-300 transition-colors">{role.title}</h4>
                  <p className="text-zinc-500 dark:text-zinc-400 text-sm mt-1">{role.salaryRange} · approximately {role.estimatedMonths} months</p>
                </div>
                <div className="flex flex-col items-end">
                  <span className={`px-4 py-2 rounded-xl font-bold text-lg ${
                    role.fitScore > 80 ? "bg-emerald-500/15 text-emerald-400" :
                    role.fitScore > 60 ? "bg-cyan-500/15 text-cyan-400" :
                    "bg-amber-500/15 text-amber-400"
                  }`}>
                    {role.fitScore}%
                  </span>
                  <span className="text-xs text-zinc-500 mt-1 font-medium tracking-wide uppercase">skill overlap</span>
                </div>
              </div>
              <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed mb-6">{role.rationale}</p>
              
              <div className="flex items-center gap-3 text-sm text-zinc-500">
                <span className="font-semibold text-zinc-700 dark:text-zinc-400">Next skills:</span>
                <span className="truncate">{role.nextSkills.join(" · ")}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-end pb-24">
          <Link
            href={`/roadmap?role=${encodeURIComponent(selectedRoleTitle)}`}
            className="inline-flex items-center justify-center px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold rounded-xl transition-all hover:scale-[1.02] active:scale-95 shadow-[0_0_40px_-10px_rgba(16,185,129,0.4)]"
          >
            Generate My Roadmap
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-white p-6 pt-12">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="inline-flex items-center text-sm font-medium text-zinc-400 hover:text-emerald-400 mb-12 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to home
        </Link>
        
        <div className="text-center mb-12">
          <div className="text-emerald-400 font-bold tracking-widest text-xs uppercase mb-3">Step 01 / Analyze</div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">Find your nearest pivot</h1>
          <p className="text-zinc-400 text-lg max-w-xl mx-auto">Upload your LinkedIn PDF. We extract the signal, then show three realistic next roles before you commit to a full roadmap.</p>
        </div>

        <form onSubmit={handleUpload} className="max-w-2xl mx-auto">
          <div className="relative group">
            <input
              type="file"
              accept=".pdf"
              onChange={handleFileChange}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
            />
            <div className={`
              border-2 border-dashed rounded-3xl p-12 text-center transition-all duration-300
              career-upload-page__dropzone
              ${file ? "border-emerald-500 bg-emerald-500/5" : "border-zinc-800 hover:border-zinc-600 hover:bg-zinc-900/50"}
            `}>
              <UploadCloud className={`w-12 h-12 mx-auto mb-4 ${file ? "text-emerald-400" : "text-zinc-500 group-hover:text-zinc-400 transition-colors"}`} />
              <h3 className="text-xl font-semibold mb-2">{file ? file.name : "Choose your LinkedIn PDF"}</h3>
              <p className="text-zinc-500 text-sm">PDF only · maximum 5 MB · processed privately</p>
            </div>
          </div>

          {error && (
            <div className="mt-6 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-center text-sm font-medium animate-in fade-in slide-in-from-top-2">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={!file || isLoading}
            className={`
              w-full mt-8 py-4 px-6 rounded-xl font-bold text-lg transition-all
              career-upload-page__submit
              ${!file || isLoading 
                ? "opacity-50 cursor-not-allowed" 
                : "hover:scale-[1.02] active:scale-[0.98]"}
            `}
          >
            {isLoading ? (
              <span className="flex items-center justify-center gap-2">
                <Loader2 className="w-5 h-5 animate-spin" /> Analyzing your profile...
              </span>
            ) : (
              "Show my pivot options"
            )}
          </button>

          <label className="mt-6 flex items-start gap-3 p-4 rounded-xl border border-zinc-800/50 bg-zinc-900/20 cursor-pointer group">
            <div className="flex h-5 items-center">
              <input 
                type="checkbox" 
                checked={storageConsent} 
                onChange={(e) => setStorageConsent(e.target.checked)} 
                className="h-4 w-4 rounded border-zinc-700 bg-zinc-900 text-emerald-500 focus:ring-emerald-500 focus:ring-offset-zinc-900" 
              />
            </div>
            <div className="text-sm text-zinc-400 leading-relaxed">
              I agree to securely store this PDF in my private account so I can access and delete it later. It will not be used to train AI models unless I separately opt in.
            </div>
          </label>
        </form>
      </div>
    </div>
  );
}

export default function UploadPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-zinc-950 text-white p-6 pt-12 flex items-center justify-center"><Loader2 className="w-8 h-8 animate-spin text-emerald-500" /></div>}>
      <UploadForm />
    </Suspense>
  );
}
