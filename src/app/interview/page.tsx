"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { getSupabaseClient } from "@/lib/supabase";
import Link from "next/link";
import { ArrowLeft, Send, Loader2 } from "lucide-react";

type Message = {
  role: "user" | "ai";
  text: string;
};

export default function InterviewPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "ai",
      text: "Hi there! I'm here to help you pivot your career. To get started, could you tell me a bit about your current role and daily responsibilities?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generationError, setGenerationError] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");
    
    // Add user message to UI immediately
    const newMessages: Message[] = [...messages, { role: "user", text: userMessage }];
    setMessages(newMessages);
    setIsLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          message: userMessage,
          history: messages 
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error ?? "Failed to get response");
      }
      
      setMessages((prev) => [...prev, { role: "ai", text: data.reply }]);
    } catch (error) {
      console.error(error);
      setMessages((prev) => [...prev, { role: "ai", text: "Sorry, I ran into an error. Could you try sending that again?" }]);
    } finally {
      setIsLoading(false);
    }
  };

  const generatePivotOptions = async () => {
    setGenerationError("");
    setIsGenerating(true);
    try {
      const session = (await getSupabaseClient().auth.getSession()).data.session;
      const response = await fetch("/api/manual-analysis", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(session ? { Authorization: `Bearer ${session.access_token}` } : {}),
        },
        body: JSON.stringify({ messages }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error ?? "Unable to generate pivot options.");
      const serialized = JSON.stringify(data.analysis);
      window.sessionStorage.setItem("careerpivot-analysis", serialized);
      window.localStorage.setItem("careerpivot-analysis", serialized);
      router.push("/upload");
    } catch (error) {
      setGenerationError(error instanceof Error ? error.message : "Unable to generate pivot options.");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white p-6 font-sans flex flex-col">
      <header className="mb-8 flex-shrink-0">
        <Link href="/" className="inline-flex items-center text-zinc-400 hover:text-white transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to home
        </Link>
      </header>
      
      <main className="flex-grow flex flex-col max-w-3xl mx-auto w-full">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Manual Skill Extraction</h1>
          <p className="text-zinc-400">Answer a few questions so we can map out your career pivot.</p>
        </div>
        {messages.filter((message) => message.role === "user").length >= 1 && (
          <div className="mb-6">
            <button
              onClick={generatePivotOptions}
              disabled={isGenerating || isLoading}
              className="w-full rounded-xl bg-white px-5 py-3 font-semibold text-black transition hover:bg-zinc-200 disabled:opacity-50"
            >
              {isGenerating ? "Mapping your pivot options..." : "Generate my pivot options"}
            </button>
            {generationError && <p className="mt-3 text-sm text-red-300">{generationError}</p>}
          </div>
        )}
        
        {/* Chat window */}
        <div className="flex-grow bg-zinc-900/50 border border-zinc-800 rounded-2xl flex flex-col overflow-hidden mb-6 min-h-[400px]">
          <div className="flex-grow p-6 overflow-y-auto space-y-6">
            
            {messages.map((msg, index) => (
              <div key={index} className={`flex items-start gap-4 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                  msg.role === 'ai' 
                    ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' 
                    : 'bg-zinc-700 text-white text-xs'
                }`}>
                  {msg.role === 'ai' ? 'AI' : 'You'}
                </div>
                <div className={`rounded-2xl p-4 max-w-[80%] whitespace-pre-wrap ${
                  msg.role === 'ai'
                    ? 'bg-zinc-800 rounded-tl-none text-zinc-200'
                    : 'bg-emerald-600 rounded-tr-none text-white'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            
            {isLoading && (
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0 border border-emerald-500/30">
                  AI
                </div>
                <div className="bg-zinc-800 rounded-2xl rounded-tl-none p-4 max-w-[80%] text-zinc-400 flex items-center gap-2">
                  <Loader2 className="w-4 h-4 animate-spin" /> Thinking...
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>
          
          <div className="p-4 border-t border-zinc-800 bg-zinc-950">
            <div className="relative">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type your answer here..." 
                disabled={isLoading}
                className="w-full bg-zinc-900 border border-zinc-800 rounded-xl py-4 pl-4 pr-12 text-white placeholder-zinc-500 focus:outline-none focus:border-emerald-500 transition-colors disabled:opacity-50"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2 text-zinc-400 hover:text-emerald-400 transition-colors disabled:opacity-50 disabled:hover:text-zinc-400"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
