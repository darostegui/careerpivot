"use client";

import { useState } from "react";
import { FileText, Loader2, Copy, Check } from "lucide-react";

export function CoverLetterButton({ analysis, targetRoleTitle }: { analysis: { currentRole?: string; strengths?: string[] } | null; targetRoleTitle: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [letter, setLetter] = useState("");
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  const generateLetter = async () => {
    setIsOpen(true);
    if (letter) return; // already generated
    
    setIsLoading(true);
    setError("");
    
    try {
      const res = await fetch("/api/cover-letter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ analysis, targetRole: targetRoleTitle }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to generate");
      setLetter(data.coverLetter);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(letter);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <button 
        onClick={generateLetter}
        className="inline-flex items-center gap-2 rounded-lg bg-indigo-500 px-3 py-2 text-sm font-semibold text-white transition hover:bg-indigo-600"
      >
        <FileText className="h-4 w-4" /> AI Cover Letter
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
          <div className="w-full max-w-2xl rounded-2xl bg-zinc-900 border border-zinc-700 shadow-2xl overflow-hidden flex flex-col max-h-[85vh]">
            <div className="flex items-center justify-between border-b border-zinc-800 p-4">
              <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                <FileText className="h-5 w-5 text-indigo-400" /> AI Cover Letter Generator
              </h3>
              <button onClick={() => setIsOpen(false)} className="text-zinc-400 hover:text-white">✕</button>
            </div>
            
            <div className="p-6 overflow-y-auto flex-grow text-sm text-zinc-300 whitespace-pre-wrap leading-relaxed">
              {isLoading ? (
                <div className="flex flex-col items-center justify-center py-12 text-zinc-400">
                  <Loader2 className="h-8 w-8 animate-spin text-indigo-500 mb-4" />
                  <p>Gemini is writing your cover letter for {targetRoleTitle}...</p>
                </div>
              ) : error ? (
                <p className="text-red-400 p-4 bg-red-400/10 rounded-lg">{error}</p>
              ) : (
                <div className="select-text">
                  {letter}
                </div>
              )}
            </div>
            
            {!isLoading && !error && letter && (
              <div className="border-t border-zinc-800 p-4 bg-zinc-950 flex justify-end gap-3">
                <button onClick={() => setIsOpen(false)} className="px-4 py-2 text-sm font-medium text-zinc-400 hover:text-white transition">
                  Close
                </button>
                <button onClick={handleCopy} className="inline-flex items-center gap-2 rounded-lg bg-indigo-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-600">
                  {copied ? <><Check className="h-4 w-4" /> Copied!</> : <><Copy className="h-4 w-4" /> Copy to Clipboard</>}
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
