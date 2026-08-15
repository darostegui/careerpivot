"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft, Bookmark, Download, ExternalLink, FileText, Loader2, LogOut, ReceiptText, Trash2, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { getSupabaseClient } from "@/lib/supabase";

type Resume = {
  id: string;
  originalFilename: string;
  byteSize: number;
  storageConsentAt: string;
  retentionExpiresAt: string;
  createdAt: string;
};

type SavedRoadmap = {
  id: string;
  roleTitle: string;
  savedAt: string;
};

type Purchase = {
  id: string;
  productKey: string;
  amountCents: number;
  currency: string;
  status: string;
  purchasedAt: string | null;
  createdAt: string;
};

type Invoice = {
  id: string;
  invoiceNumber: string;
  status: string;
  product: string;
  amountCents: number;
  currency: string;
  purchasedAt: string;
  email: string | null;
  hostedInvoiceUrl: string | null;
  invoicePdfUrl: string | null;
  receiptUrl: string | null;
};

type Account = {
  email: string | null;
  selectedPivot: string | null;
  trainingConsentAt: string | null;
  resumes: Resume[];
  roadmaps: SavedRoadmap[];
  purchases: Purchase[];
  usage: {
    storedResumes: number;
    storedResumeLimit: number;
    roadmapChecks: number;
    roadmapCheckLimit: number;
    roadmapCheckWindowDays: number;
  };
};

function formatDate(value: string | null) {
  if (!value) return "Pending";
  return new Intl.DateTimeFormat(undefined, { dateStyle: "medium" }).format(new Date(value));
}

function formatBytes(value: number) {
  if (value < 1024 * 1024) return `${Math.ceil(value / 1024)} KB`;
  return `${(value / (1024 * 1024)).toFixed(1)} MB`;
}

function formatPrice(amountCents: number, currency: string) {
  return new Intl.NumberFormat(undefined, {
    style: "currency",
    currency: currency.toUpperCase(),
  }).format(amountCents / 100);
}

export default function AccountPage() {
  const router = useRouter();
  const [account, setAccount] = useState<Account | null>(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [invoice, setInvoice] = useState<Invoice | null>(null);
  const [invoiceLoadingId, setInvoiceLoadingId] = useState<string | null>(null);
  const [isGeneratingInvoice, setIsGeneratingInvoice] = useState(false);

  const getSession = useCallback(async () => {
    const { data, error: sessionError } = await getSupabaseClient().auth.getSession();
    if (sessionError || !data.session) {
      router.replace("/login?returnTo=/account");
      return null;
    }
    return data.session;
  }, [router]);

  const loadAccount = useCallback(async () => {
    const session = await getSession();
    if (!session) return;
    const response = await fetch("/api/account", {
      headers: { Authorization: `Bearer ${session.access_token}` },
    });
    const payload = await response.json();
    if (!response.ok) throw new Error(payload.error ?? "Unable to load your account.");
    setAccount(payload as Account);
  }, [getSession]);

  useEffect(() => {
    const loadTimer = window.setTimeout(() => {
      void loadAccount()
        .catch((caughtError) => setError(caughtError instanceof Error ? caughtError.message : "Unable to load your account."))
        .finally(() => setIsLoading(false));
    }, 0);
    return () => window.clearTimeout(loadTimer);
  }, [loadAccount]);

  async function deleteResume(id: string, filename: string) {
    if (!window.confirm(`Delete ${filename}? This permanently removes the stored PDF.`)) return;
    await deleteItem("resume", id);
  }

  async function deleteRoadmap(id: string, roleTitle: string) {
    if (!window.confirm(`Remove your saved ${roleTitle} roadmap?`)) return;
    await deleteItem("roadmap", id);
  }

  async function deleteItem(kind: "resume" | "roadmap", id: string) {
    setDeletingId(id);
    setError("");
    try {
      const session = await getSession();
      if (!session) return;
      const response = kind === "resume"
        ? await fetch(`/api/resumes/${id}`, {
            method: "DELETE",
            headers: { Authorization: `Bearer ${session.access_token}` },
          })
        : await fetch(`/api/roadmaps?id=${encodeURIComponent(id)}`, {
            method: "DELETE",
            headers: { Authorization: `Bearer ${session.access_token}` },
          });
      const payload = response.status === 204 ? null : await response.json();
      if (!response.ok) throw new Error(payload?.error ?? "Unable to delete this item.");
      await loadAccount();
    } catch (caughtError) {
      setError(caughtError instanceof Error ? caughtError.message : "Unable to delete this item.");
    } finally {
      setDeletingId(null);
    }
  }

  async function signOut() {
    await getSupabaseClient().auth.signOut();
    router.replace("/");
  }

  async function viewInvoice(purchase: Purchase) {
    setInvoiceLoadingId(purchase.id);
    setError("");
    try {
      const session = await getSession();
      if (!session) return;
      const response = await fetch(`/api/purchases/${encodeURIComponent(purchase.id)}/invoice`, {
        headers: { Authorization: `Bearer ${session.access_token}` },
      });
      const payload = await response.json() as Invoice & { error?: string };
      if (!response.ok) throw new Error(payload.error ?? "Unable to load this invoice.");
      setInvoice(payload);
    } catch (caughtError) {
      setError(caughtError instanceof Error ? caughtError.message : "Unable to load this invoice.");
    } finally {
      setInvoiceLoadingId(null);
    }
  }

  async function downloadInvoice() {
    if (!invoice) return;
    if (invoice.invoicePdfUrl) {
      window.open(invoice.invoicePdfUrl, "_blank", "noopener,noreferrer");
      return;
    }
    setIsGeneratingInvoice(true);
    try {
      const { jsPDF } = await import("jspdf");
      const document = new jsPDF({ unit: "pt", format: "a4" });
      const margin = 56;
      const pageWidth = document.internal.pageSize.getWidth();
      document.setFillColor(5, 150, 105);
      document.rect(0, 0, pageWidth, 10, "F");
      document.setTextColor(15, 23, 42);
      document.setFontSize(26);
      document.text("INVOICE", margin, 76);
      document.setFontSize(11);
      document.setTextColor(71, 85, 105);
      document.text("CareerPivot.me", margin, 98);
      document.text("Professional career-pivot planning", margin, 115);
      document.setTextColor(15, 23, 42);
      document.setFontSize(11);
      document.text(`Invoice number: ${invoice.invoiceNumber}`, pageWidth - margin - 180, 76);
      document.text(`Status: ${invoice.status.toUpperCase()}`, pageWidth - margin - 180, 94);
      document.text(`Date: ${formatDate(invoice.purchasedAt)}`, pageWidth - margin - 180, 112);
      document.setDrawColor(226, 232, 240);
      document.line(margin, 145, pageWidth - margin, 145);
      document.setFontSize(11);
      document.setTextColor(71, 85, 105);
      document.text("Billed to", margin, 176);
      document.setTextColor(15, 23, 42);
      document.text(invoice.email ?? "Email unavailable", margin, 196);
      document.setTextColor(71, 85, 105);
      document.text("Description", margin, 250);
      document.text("Amount", pageWidth - margin - 90, 250);
      document.setTextColor(15, 23, 42);
      document.text(invoice.product, margin, 280);
      document.text(formatPrice(invoice.amountCents, invoice.currency), pageWidth - margin - 90, 280);
      document.line(margin, 305, pageWidth - margin, 305);
      document.setFontSize(14);
      document.text("Total paid", pageWidth - margin - 170, 338);
      document.text(formatPrice(invoice.amountCents, invoice.currency), pageWidth - margin - 90, 338);
      document.setFontSize(10);
      document.setTextColor(100, 116, 139);
      document.text("Thank you for choosing CareerPivot.", margin, 420);
      document.save(`${invoice.invoiceNumber}.pdf`);
    } catch (caughtError) {
      setError(caughtError instanceof Error ? caughtError.message : "Unable to generate the invoice PDF.");
    } finally {
      setIsGeneratingInvoice(false);
    }
  }

  return (
    <main className="min-h-screen bg-zinc-950 px-6 py-8 text-white">
      <header className="mx-auto flex max-w-5xl items-center justify-between">
        <Link href="/" className="inline-flex items-center text-zinc-400 transition hover:text-white">
          <ArrowLeft className="mr-2 h-4 w-4" /> Home
        </Link>
        <button onClick={() => void signOut()} className="inline-flex items-center text-sm text-zinc-400 transition hover:text-white">
          <LogOut className="mr-2 h-4 w-4" /> Sign out
        </button>
      </header>

      <section className="mx-auto max-w-5xl pb-16 pt-14">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-400">Account</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight">Your CareerPivot workspace</h1>
        <p className="mt-3 max-w-2xl text-zinc-400">Manage your private resumes, saved roadmaps, and CareerPivot purchases in one place.</p>

        {isLoading ? (
          <div className="mt-10 space-y-4" aria-label="Loading account">
            <div className="h-32 animate-pulse rounded-2xl bg-zinc-900" />
            <div className="h-56 animate-pulse rounded-2xl bg-zinc-900" />
          </div>
        ) : account ? (
          <div className="mt-10 space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <section className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6">
                <p className="text-sm text-zinc-500">Signed-in email</p>
                <p className="mt-2 break-all font-medium">{account.email ?? "Email unavailable"}</p>
                <p className="mt-6 text-sm text-zinc-500">Selected pivot</p>
                <p className="mt-2 font-medium text-emerald-300">{account.selectedPivot ?? "No pivot selected yet"}</p>
              </section>
              <section className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6">
                <p className="text-sm text-zinc-500">Privacy choices</p>
                <p className="mt-3 text-sm text-zinc-300">Resume storage: <span className="text-emerald-300">Granted per document</span></p>
                <p className="mt-2 text-sm text-zinc-300">AI training: <span className="text-zinc-400">{account.trainingConsentAt ? `Opted in ${formatDate(account.trainingConsentAt)}` : "Not opted in"}</span></p>
              </section>
            </div>

            <section className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6">
              <h2 className="text-xl font-bold">Usage limits</h2>
              <div className="mt-4 grid gap-3 text-sm text-zinc-300 sm:grid-cols-2">
                <p>Stored resumes: <span className="font-semibold text-emerald-300">{account.usage.storedResumes} / {account.usage.storedResumeLimit}</span></p>
                <p>Roadmap checks (last {account.usage.roadmapCheckWindowDays} days): <span className="font-semibold text-emerald-300">{account.usage.roadmapChecks} / {account.usage.roadmapCheckLimit}</span></p>
              </div>
              {(account.usage.storedResumes >= account.usage.storedResumeLimit || account.usage.roadmapChecks >= account.usage.roadmapCheckLimit) && (
                <p className="mt-4 text-sm text-amber-200">You have reached a usage limit. Contact support to extend your limits.</p>
              )}
            </section>

            <section className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="flex items-center gap-2 text-xl font-bold"><FileText className="h-5 w-5 text-emerald-400" /> Stored resumes</h2>
                  <p className="mt-1 text-sm text-zinc-500">Private PDFs are retained for one year unless you delete them sooner.</p>
                </div>
              </div>
              {account.resumes.length === 0 ? (
                <p className="mt-6 text-sm text-zinc-400">No resumes are stored in your account.</p>
              ) : (
                <div className="mt-6 divide-y divide-zinc-800">
                  {account.resumes.map((resume) => (
                    <div key={resume.id} className="flex flex-wrap items-center justify-between gap-4 py-4 first:pt-0 last:pb-0">
                      <div className="min-w-0">
                        <p className="truncate font-medium">{resume.originalFilename}</p>
                        <p className="mt-1 text-sm text-zinc-500">{formatBytes(resume.byteSize)} · Added {formatDate(resume.createdAt)} · Expires {formatDate(resume.retentionExpiresAt)}</p>
                      </div>
                      <button onClick={() => void deleteResume(resume.id, resume.originalFilename)} disabled={deletingId === resume.id} className="inline-flex items-center rounded-lg border border-red-500/30 px-3 py-2 text-sm text-red-300 transition hover:bg-red-500/10 disabled:opacity-50">
                        {deletingId === resume.id ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Trash2 className="mr-2 h-4 w-4" />} Delete
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </section>

            <section className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6">
              <h2 className="flex items-center gap-2 text-xl font-bold"><Bookmark className="h-5 w-5 text-emerald-400" /> Saved roadmaps</h2>
              <p className="mt-1 text-sm text-zinc-500">Keep the career directions you want to revisit.</p>
              {account.roadmaps.length === 0 ? (
                <div className="mt-6 rounded-xl border border-dashed border-zinc-700 p-5 text-sm text-zinc-400">
                  No saved roadmaps yet. <Link href="/roadmap" className="text-emerald-300 underline underline-offset-4">Explore a roadmap</Link>
                </div>
              ) : (
                <div className="mt-6 divide-y divide-zinc-800">
                  {account.roadmaps.map((roadmap) => (
                    <div key={roadmap.id} className="flex flex-wrap items-center justify-between gap-4 py-4 first:pt-0 last:pb-0">
                      <div>
                        <p className="font-medium">{roadmap.roleTitle}</p>
                        <p className="mt-1 text-sm text-zinc-500">Saved {formatDate(roadmap.savedAt)}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Link
                          href={`/roadmap?role=${encodeURIComponent(roadmap.roleTitle)}`}
                          className="inline-flex items-center rounded-lg border border-emerald-500/30 px-3 py-2 text-sm text-emerald-300 transition hover:bg-emerald-500/10"
                        >
                          <ExternalLink className="mr-2 h-4 w-4" /> Open
                        </Link>
                        <button onClick={() => void deleteRoadmap(roadmap.id, roadmap.roleTitle)} disabled={deletingId === roadmap.id} className="inline-flex items-center rounded-lg border border-red-500/30 px-3 py-2 text-sm text-red-300 transition hover:bg-red-500/10 disabled:opacity-50">
                          {deletingId === roadmap.id ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Trash2 className="mr-2 h-4 w-4" />} Remove
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </section>

            <section className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6">
              <h2 className="flex items-center gap-2 text-xl font-bold"><ReceiptText className="h-5 w-5 text-emerald-400" /> Purchase history</h2>
              {account.purchases.length === 0 ? (
                <p className="mt-6 text-sm text-zinc-400">No purchases yet.</p>
              ) : (
                <div className="mt-6 divide-y divide-zinc-800">
                  {account.purchases.map((purchase) => (
                    <div key={purchase.id} className="flex flex-wrap items-center justify-between gap-4 py-4 first:pt-0 last:pb-0">
                      <div>
                        <p className="font-medium">{purchase.productKey === "roadmap_blueprint" ? "Full Blueprint" : purchase.productKey}</p>
                        <p className="mt-1 text-sm text-zinc-500">{formatDate(purchase.purchasedAt ?? purchase.createdAt)} · <span className="capitalize">{purchase.status}</span></p>
                      </div>
                      <div className="flex items-center gap-3">
                        <p className="font-semibold text-emerald-300">{formatPrice(purchase.amountCents, purchase.currency)}</p>
                        {purchase.status === "paid" && (
                          <button
                            onClick={() => void viewInvoice(purchase)}
                            disabled={invoiceLoadingId === purchase.id}
                            className="inline-flex items-center rounded-lg border border-emerald-500/30 px-3 py-2 text-sm text-emerald-300 transition hover:bg-emerald-500/10 disabled:opacity-50"
                          >
                            {invoiceLoadingId === purchase.id ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <ReceiptText className="mr-2 h-4 w-4" />}
                            Invoice
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </section>

            {invoice && (
              <section className="rounded-2xl border border-emerald-500/30 bg-zinc-900/80 p-6" aria-label="Invoice details">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.16em] text-emerald-400">Invoice details</p>
                    <h2 className="mt-2 text-2xl font-bold">{invoice.invoiceNumber}</h2>
                  </div>
                  <button onClick={() => setInvoice(null)} className="rounded-lg p-2 text-zinc-400 transition hover:bg-zinc-800 hover:text-white" aria-label="Close invoice details">
                    <X className="h-5 w-5" />
                  </button>
                </div>
                <div className="mt-6 grid gap-4 text-sm sm:grid-cols-2">
                  <p className="text-zinc-400">Product <span className="mt-1 block font-medium text-white">{invoice.product}</span></p>
                  <p className="text-zinc-400">Status <span className="mt-1 block font-medium capitalize text-emerald-300">{invoice.status}</span></p>
                  <p className="text-zinc-400">Paid on <span className="mt-1 block font-medium text-white">{formatDate(invoice.purchasedAt)}</span></p>
                  <p className="text-zinc-400">Billed to <span className="mt-1 block break-all font-medium text-white">{invoice.email ?? "Email unavailable"}</span></p>
                  <p className="text-zinc-400">Total <span className="mt-1 block text-lg font-semibold text-emerald-300">{formatPrice(invoice.amountCents, invoice.currency)}</span></p>
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  <button onClick={() => void downloadInvoice()} disabled={isGeneratingInvoice} className="inline-flex items-center rounded-lg bg-emerald-500 px-4 py-2 text-sm font-semibold text-zinc-950 transition hover:bg-emerald-400 disabled:opacity-50">
                    {isGeneratingInvoice ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Download className="mr-2 h-4 w-4" />}
                    {invoice.invoicePdfUrl ? "Open invoice PDF" : "Download invoice PDF"}
                  </button>
                  {invoice.hostedInvoiceUrl && <a href={invoice.hostedInvoiceUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center rounded-lg border border-zinc-700 px-4 py-2 text-sm text-zinc-200 transition hover:bg-zinc-800"><ExternalLink className="mr-2 h-4 w-4" /> View hosted invoice</a>}
                  {!invoice.hostedInvoiceUrl && invoice.receiptUrl && <a href={invoice.receiptUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center rounded-lg border border-zinc-700 px-4 py-2 text-sm text-zinc-200 transition hover:bg-zinc-800"><ExternalLink className="mr-2 h-4 w-4" /> View Stripe receipt</a>}
                </div>
              </section>
            )}
          </div>
        ) : null}
        {error && <p role="alert" className="mt-6 rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-200">{error}</p>}
      </section>
    </main>
  );
}
