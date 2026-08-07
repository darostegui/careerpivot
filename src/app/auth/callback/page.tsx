"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
import { getSupabaseClient } from "@/lib/supabase";

export default function AuthCallbackPage() {
  const router = useRouter();
  const [error, setError] = useState("");

  useEffect(() => {
    let active = true;

    async function completeSignIn() {
      try {
        const supabase = getSupabaseClient();
        const params = new URLSearchParams(window.location.search);
        const code = params.get("code");
        if (code) {
          const { error: exchangeError } = await supabase.auth.exchangeCodeForSession(code);
          if (exchangeError) throw exchangeError;
        }
        const { data, error: sessionError } = await supabase.auth.getSession();
        if (sessionError) throw sessionError;
        if (!data.session) throw new Error("The sign-in link is invalid or has expired.");
        if (active) {
          const returnTo = params.get("next");
          router.replace(returnTo?.startsWith("/") ? returnTo : "/upload");
        }
      } catch (caughtError) {
        if (active) {
          setError(caughtError instanceof Error ? caughtError.message : "Unable to complete sign in.");
        }
      }
    }

    void completeSignIn();
    return () => {
      active = false;
    };
  }, [router]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-zinc-950 px-6 text-white">
      <div className="text-center">
        {error ? (
          <>
            <h1 className="text-2xl font-bold">Sign-in failed</h1>
            <p className="mt-3 text-zinc-400">{error}</p>
          </>
        ) : (
          <>
            <Loader2 className="mx-auto h-8 w-8 animate-spin text-emerald-400" />
            <p className="mt-4 text-zinc-400">Completing your secure sign-in...</p>
          </>
        )}
      </div>
    </main>
  );
}
