"use client";

import { useState } from "react";
import { Mail, CheckCircle, Loader2 } from "lucide-react";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    
    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "homepage-footer" }),
      });
      
      if (!response.ok) throw new Error("Subscription failed");
      
      setStatus("success");
      setEmail("");
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto my-24 p-8 md:p-12 rounded-3xl bg-zinc-900 border border-zinc-800 text-center">
      <h2 className="text-3xl font-bold text-white mb-4">Join the Pivot Community</h2>
      <p className="text-zinc-400 max-w-xl mx-auto mb-8">
        Get weekly insights on the tech job market, tips for transferring your skills, and free resources to help you land your next role.
      </p>

      {status === "success" ? (
        <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-6 max-w-md mx-auto flex items-center justify-center gap-3">
          <CheckCircle className="h-6 w-6 text-emerald-400" />
          <span className="font-semibold text-emerald-300">Thanks for subscribing! Check your inbox.</span>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <div className="relative flex-grow">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-500" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
              className="w-full bg-zinc-950 border border-zinc-800 rounded-xl py-3 pl-11 pr-4 text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
            />
          </div>
          <button
            type="submit"
            disabled={status === "loading"}
            className="flex items-center justify-center bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold py-3 px-6 rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
          >
            {status === "loading" ? <Loader2 className="w-5 h-5 animate-spin" /> : "Subscribe"}
          </button>
        </form>
      )}
      {status === "error" && (
        <p className="text-red-400 text-sm mt-3">Oops! Something went wrong. Please try again.</p>
      )}
    </div>
  );
}
