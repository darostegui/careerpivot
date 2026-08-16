"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { ArrowLeft, Loader2 } from "lucide-react";
import { getSupabaseClient } from "@/lib/supabase";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [subscribeNewsletter, setSubscribeNewsletter] = useState(true);
  const [status, setStatus] = useState("");
  const [statusType, setStatusType] = useState<"success" | "error" | "">("");
  const [isLoading, setIsLoading] = useState(false);
  const [oauthProvider, setOauthProvider] = useState<"google" | "github" | "">("");

  function getAuthRedirectUrl(nextPath: string) {
    const configuredUrl = process.env.NEXT_PUBLIC_APP_URL?.trim().replace(/\/$/, "");
    const appUrl = configuredUrl?.startsWith("https://")
      ? configuredUrl
      : window.location.origin;
    return `${appUrl}/auth/callback?next=${encodeURIComponent(nextPath)}`;
  }

  async function sendMagicLink(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("");
    setStatusType("");
    setIsLoading(true);

    try {
      const supabase = getSupabaseClient();
      const returnTo = new URLSearchParams(window.location.search).get("returnTo");
      const nextPath = returnTo?.startsWith("/") ? returnTo : "/upload";
      const { error } = await supabase.auth.signInWithOtp({
        email,
        options: {
          emailRedirectTo: getAuthRedirectUrl(nextPath),
        },
      });

      if (error) throw error;
      
      // If user checked the newsletter box, add them to the newsletter DB
      if (subscribeNewsletter) {
        try {
          await fetch("/api/subscribe", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, source: "login-signup" }),
          });
        } catch (subErr) {
          // Non-blocking error
          console.error("Newsletter signup failed during magic link flow", subErr);
        }
      }

      setStatusType("success");
      setStatus("Check your email for a secure sign-in link.");
    } catch (error) {
      setStatusType("error");
      setStatus(error instanceof Error ? error.message : "Unable to send sign-in link.");
    } finally {
      setIsLoading(false);
    }
  }

  async function signInWithProvider(provider: "google" | "github") {
    setStatus("");
    setStatusType("");
    setOauthProvider(provider);

    try {
      const supabase = getSupabaseClient();
      const returnTo = new URLSearchParams(window.location.search).get("returnTo");
      const nextPath = returnTo?.startsWith("/") ? returnTo : "/upload";
      const { error } = await supabase.auth.signInWithOAuth({
        provider,
        options: {
          redirectTo: getAuthRedirectUrl(nextPath),
        },
      });
      if (error) throw error;
    } catch (error) {
      setOauthProvider("");
      setStatusType("error");
      setStatus(error instanceof Error ? error.message : `Unable to sign in with ${provider}.`);
    }
  }

  return (
    <main className="min-h-screen bg-zinc-950 px-6 py-8 text-white">
      <Link href="/" className="inline-flex items-center text-zinc-400 hover:text-white">
        <ArrowLeft className="mr-2 h-4 w-4" /> Back to home
      </Link>
      <section className="mx-auto mt-24 max-w-md">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-400">
          CareerPivot.me
        </p>
        <h1 className="text-4xl font-bold tracking-tight">Save your pivot plan</h1>
        <p className="mt-4 text-zinc-400">
          Sign in with your email to keep your assessment and access it on any device.
        </p>
        <div className="mt-8">
          <button
            type="button"
            onClick={() => void signInWithProvider("google")}
            disabled={Boolean(oauthProvider) || isLoading}
            className="w-full rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-3 font-semibold text-white transition hover:border-zinc-500 hover:bg-zinc-800 disabled:opacity-50"
          >
            {oauthProvider === "google" ? "Opening Google..." : "Continue with Google"}
          </button>
        </div>
        <div className="my-7 flex items-center gap-3 text-xs uppercase tracking-[0.16em] text-zinc-500">
          <span className="h-px flex-1 bg-zinc-800" />
          or use email
          <span className="h-px flex-1 bg-zinc-800" />
        </div>
        <form onSubmit={sendMagicLink} className="mt-8 space-y-4">
          <label className="block text-sm text-zinc-300" htmlFor="email">
            Email address
          </label>
          <input
            id="email"
            type="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="w-full rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-3 outline-none focus:border-emerald-500"
            placeholder="you@example.com"
          />
          
          <label className="mt-4 flex items-start gap-3 p-4 rounded-xl border border-zinc-800/50 bg-zinc-900/20 cursor-pointer group">
            <div className="flex h-5 items-center">
              <input 
                type="checkbox" 
                checked={subscribeNewsletter} 
                onChange={(e) => setSubscribeNewsletter(e.target.value === "on" ? true : e.target.checked)} 
                className="h-4 w-4 rounded border-zinc-700 bg-zinc-900 text-emerald-500 focus:ring-emerald-500 focus:ring-offset-zinc-900" 
              />
            </div>
            <div className="text-sm text-zinc-400">
              Send me the free Career Pivot Playbook and weekly market insights.
            </div>
          </label>

          <button
            type="submit"
            disabled={isLoading}
            className="flex w-full items-center justify-center rounded-xl bg-white px-4 py-3 font-semibold text-black transition hover:bg-zinc-200 disabled:opacity-50"
          >
            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Email me a sign-in link
          </button>
        </form>
        {status && (
          <p className={`mt-5 text-sm ${statusType === "error" ? "text-red-300" : "text-emerald-300"}`}>
            {status}
          </p>
        )}
        <p className="mt-5 text-xs leading-5 text-zinc-500">
          Email links are subject to Supabase sending limits. Google or GitHub sign-in avoids that limit.
        </p>
      </section>
    </main>
  );
}
