"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { getSupabaseClient } from "@/lib/supabase";
import type { User } from "@supabase/supabase-js";

export function Navigation() {
  const [user, setUser] = useState<User | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
    const supabase = getSupabaseClient();
    
    supabase.auth.getUser().then(({ data }) => {
      if (data.user) {
        setUser(data.user);
      }
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const handleSignOut = async () => {
    const supabase = getSupabaseClient();
    await supabase.auth.signOut();
  };

  if (!mounted) {
    return (
      <nav className="hidden md:flex space-x-6 text-sm items-center">
        <Link href="#how-it-works" className="text-zinc-400 hover:text-white transition-colors">How it works</Link>
        <Link href="#faq" className="text-zinc-400 hover:text-white transition-colors">FAQ</Link>
        <Link href="/login" className="text-zinc-400 hover:text-white transition-colors">Sign In</Link>
      </nav>
    );
  }

  return (
    <nav className="hidden md:flex space-x-6 text-sm items-center">
      <Link href="#how-it-works" className="text-zinc-400 hover:text-white transition-colors">How it works</Link>
      <Link href="#faq" className="text-zinc-400 hover:text-white transition-colors">FAQ</Link>
      {user ? (
        <>
          <Link href="/account" className="text-emerald-400 font-medium hover:text-emerald-300 transition-colors">
            {user.email?.split('@')[0]}
          </Link>
          <button onClick={handleSignOut} className="text-zinc-400 hover:text-white transition-colors">Sign Out</button>
        </>
      ) : (
        <>
          <Link href="/login" className="text-zinc-400 hover:text-white transition-colors">Sign In</Link>
        </>
      )}
    </nav>
  );
}
