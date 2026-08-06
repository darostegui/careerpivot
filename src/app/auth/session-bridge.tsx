"use client";

import { useEffect } from "react";
import { getSupabaseClient } from "@/lib/supabase";

export function SessionBridge() {
  useEffect(() => {
    const supabase = getSupabaseClient();
    void supabase.auth.getSession().then(({ error }) => {
      if (error) console.error("Unable to restore Supabase session:", error);
      if (window.location.hash.includes("access_token=")) {
        window.history.replaceState({}, document.title, window.location.pathname + window.location.search);
      }
    });
  }, []);

  return null;
}
