"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { ArrowLeft, Loader2 } from "lucide-react";
import { getSupabaseClient } from "@/lib/supabase";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function sendMagicLink(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("");
    setIsLoading(true);

    try {
      const supabase = getSupabaseClient();
      const { error } = await supabase.auth.signInWithOtp({
        email,
        options: { emailRedirectTo: window.location.origin },
      });

      if (error) throw error;
      setStatus("Check your email for a secure sign-in link.");
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "Unable to send sign-in link.");
    } finally {
      setIsLoading(false);
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
          <button
            type="submit"
            disabled={isLoading}
            className="flex w-full items-center justify-center rounded-xl bg-white px-4 py-3 font-semibold text-black transition hover:bg-zinc-200 disabled:opacity-50"
          >
            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Email me a sign-in link
          </button>
        </form>
        {status && <p className="mt-5 text-sm text-emerald-300">{status}</p>}
      </section>
    </main>
  );
}
