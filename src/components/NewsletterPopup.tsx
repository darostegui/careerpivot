"use client";

import { useEffect, useState } from "react";
import { X, CheckCircle, Mail, Download } from "lucide-react";

export function NewsletterPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  useEffect(() => {
    const hasSeenPopup = localStorage.getItem("careerpivot-newsletter-seen");
    if (hasSeenPopup) return;

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        setIsOpen(true);
        localStorage.setItem("careerpivot-newsletter-seen", "true");
        document.removeEventListener("mouseleave", handleMouseLeave);
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    
    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "exit-intent-popup" }),
      });
      
      if (!response.ok) throw new Error("Subscription failed");
      
      setStatus("success");
      setTimeout(() => {
        setIsOpen(false);
      }, 3000);
    } catch (err) {
      setStatus("error");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 animate-in fade-in duration-300">
      <div className="relative w-full max-w-lg overflow-hidden rounded-2xl bg-zinc-900 border border-zinc-800 shadow-2xl animate-in zoom-in-95 duration-300">
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute right-4 top-4 text-zinc-400 hover:text-white transition-colors"
        >
          <X className="h-5 w-5" />
        </button>
        
        <div className="p-8">
          <div className="flex justify-center mb-6">
            <div className="bg-emerald-500/20 p-4 rounded-full">
              <Download className="h-8 w-8 text-emerald-400" />
            </div>
          </div>
          
          <h2 className="text-2xl font-bold text-center text-white mb-2">
            Don't leave empty-handed!
          </h2>
          <p className="text-zinc-400 text-center mb-6 leading-relaxed">
            Get our free <strong>30-Day Tech Pivot Playbook</strong> PDF when you subscribe to our newsletter for career strategies, job market insights, and portfolio tips.
          </p>
          
          {status === "success" ? (
            <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-6 text-center">
              <CheckCircle className="h-8 w-8 text-emerald-400 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-emerald-300">You're on the list!</h3>
              <p className="text-sm text-emerald-400/80 mt-1">Check your inbox for the download link.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-500" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl py-3 pl-11 pr-4 text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
                />
              </div>
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold py-3 px-4 rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "loading" ? "Subscribing..." : "Send me the Free Playbook"}
              </button>
              {status === "error" && (
                <p className="text-red-400 text-sm text-center">Oops! Something went wrong. Please try again.</p>
              )}
            </form>
          )}
          
          <p className="text-xs text-zinc-600 text-center mt-6">
            We respect your privacy. No spam, ever. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </div>
  );
}
