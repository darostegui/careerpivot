"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft, FileText, Loader2, LogOut, Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { getSupabaseClient } from "@/lib/supabase";

type Resume = {
  id: string;
  originalFilename: string;
  byteSize: number;
  storageConsentAt: string;
  trainingConsent: boolean;
  retentionExpiresAt: string;
};

type Account = {
  email: string | null;
  selectedPivot: string | null;
  trainingConsentAt: string | null;
  resumes: Resume[];
};

function formatDate(value: string) {
  return new Intl.DateTimeFormat(undefined, { dateStyle: "medium" }).format(new Date(value));
}

export default function AccountPage() {
  const router = useRouter();
  const [account, setAccount] = useState<Account | null>(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const loadAccount = useCallback(async () => {
    const supabase = getSupabaseClient();
    const { data, error: sessionError } = await supabase.auth.getSession();
    if (sessionError || !data.session) {
      router.replace("/login");
      return;
    }

    const response = await fetch("/api/account", {
      headers: { Authorization: `Bearer ${data.session.access_token}` },
    });
    const payload = await response.json();
    if (!response.ok) throw new Error(payload.error ?? "Unable to load your account.");
    setAccount(payload);
  }, [router]);

  useEffect(() => {
    const loadTimer = window.setTimeout(() => {
      void loadAccount()
        .catch((caughtError) => setError(caughtError instanceof Error ? caughtError.message : "Unable to load your account."))
        .finally(() => setIsLoading(false));
    }, 0);
    return () => window.clearTimeout(loadTimer);
  }, [loadAccount]);

  async function deleteResume(id: string) {
    setDeletingId(id);
    setError("");
    try {
      const { data } = await getSupabaseClient().auth.getSession();
      if (!data.session) {
        router.replace("/login");
        return;
      }
      const response = await fetch(`/api/resumes/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${data.session.access_token}` },
      });
      const payload = response.status === 204 ? null : await response.json();
      if (!response.ok) throw new Error(payload?.error ?? "Unable to delete this resume.");
      await loadAccount();
    } catch (caughtError) {
      setError(caughtError instanceof Error ? caughtError.message : "Unable to delete this resume.");
    } finally {
      setDeletingId(null);
    }
  }

  async function signOut() {
    await getSupabaseClient().auth.signOut();
    router.replace("/");
  }

  return (
    <main className="min-h-screen bg-zinc-950 px-6 py-8 text-white">
      <header className="mx-auto flex max-w-4xl items-center justify-between">
        <Link href="/" className="inline-flex items-center text-zinc-400 hover:text-white">
          <ArrowLeft className="mr-2 h-4 w-4" /> Home
        </Link>
        <button onClick={signOut} className="inline-flex items-center text-sm text-zinc-400 hover:text-white">
          <LogOut className="mr-2 h-4 w-4" /> Sign out
        </button>
      </header>

      <section className="mx-auto mt-16 max-w-4xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-400">Account</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight">Your CareerPivot account</h1>
        {isLoading ? (
          <Loader2 className="mt-10 h-6 w-6 animate-spin text-emerald-400" />
        ) : account ? (
          <div className="mt-10 space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6">
                <p className="text-sm text-zinc-500">Signed-in email</p>
                <p className="mt-2 font-medium">{account.email ?? "Email unavailable"}</p>
                <p className="mt-6 text-sm text-zinc-500">Selected pivot</p>
                <p className="mt-2 font-medium text-emerald-300">{account.selectedPivot ?? "No pivot selected yet"}</p>
              </div>
              <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6">
                <p className="text-sm text-zinc-500">Consent status</p>
                <p className="mt-3 text-sm text-zinc-300">Resume storage: <span className="text-emerald-300">Granted per document</span></p>
                <p className="mt-2 text-sm text-zinc-300">AI training: <span className="text-zinc-400">{account.trainingConsentAt ? `Opted in ${formatDate(account.trainingConsentAt)}` : "Not opted in"}</span></p>
              </div>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h2 className="text-xl font-bold">Stored resumes</h2>
                  <p className="mt-1 text-sm text-zinc-500">Private PDFs are automatically retained for one year unless you delete them sooner.</p>
                </div>
                <FileText className="hidden h-6 w-6 text-zinc-600 sm:block" />
              </div>
              {account.resumes.length === 0 ? (
                <p className="mt-6 text-sm text-zinc-400">No resumes are stored in your account.</p>
              ) : (
                <div className="mt-6 divide-y divide-zinc-800">
                  {account.resumes.map((resume) => (
                    <div key={resume.id} className="flex flex-wrap items-center justify-between gap-4 py-4 first:pt-0 last:pb-0">
                      <div>
                        <p className="font-medium">{resume.originalFilename}</p>
                        <p className="mt-1 text-sm text-zinc-500">Expires {formatDate(resume.retentionExpiresAt)} · Storage consent {formatDate(resume.storageConsentAt)}</p>
                      </div>
                      <button onClick={() => deleteResume(resume.id)} disabled={deletingId === resume.id} className="inline-flex items-center rounded-lg border border-red-500/30 px-3 py-2 text-sm text-red-300 hover:bg-red-500/10 disabled:opacity-50">
                        {deletingId === resume.id ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Trash2 className="mr-2 h-4 w-4" />} Delete
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ) : null}
        {error && <p className="mt-6 rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-200">{error}</p>}
      </section>
    </main>
  );
}
