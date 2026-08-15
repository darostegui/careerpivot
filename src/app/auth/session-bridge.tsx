"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { getSupabaseClient } from "@/lib/supabase";

export function SessionBridge() {
  const router = useRouter();

  useEffect(() => {
    if (!process.env.NEXT_PUBLIC_APP_URL) {
      return;
    }

    const supabase = getSupabaseClient();
    void supabase.auth.getSession().then(({ error }) => {
      if (error) console.error("Unable to restore Supabase session:", error);
      
      const hash = window.location.hash;
      if (hash.includes("access_token=") || hash.includes("error=")) {
        window.history.replaceState({}, document.title, window.location.pathname + window.location.search);
        
        // If Supabase fell back to the root URL instead of the callback URL, 
        // redirect the user to the upload page so they don't get stuck on the homepage.
        if (window.location.pathname === "/" && hash.includes("access_token=")) {
          router.push("/upload");
        }
      }
    });
  }, [router]);

  return null;
}
