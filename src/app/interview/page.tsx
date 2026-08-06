import Link from "next/link";
import { ArrowLeft, Send } from "lucide-react";

export default function InterviewPage() {
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
        
        {/* Chat window */}
        <div className="flex-grow bg-zinc-900/50 border border-zinc-800 rounded-2xl flex flex-col overflow-hidden mb-6 min-h-[400px]">
          <div className="flex-grow p-6 overflow-y-auto space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0 border border-emerald-500/30">
                AI
              </div>
              <div className="bg-zinc-800 rounded-2xl rounded-tl-none p-4 max-w-[80%] text-zinc-200">
                Hi there! I'm here to help you pivot your career. To get started, could you tell me a bit about your current role and daily responsibilities?
              </div>
            </div>
            
            {/* Example user response 
            <div className="flex items-start gap-4 flex-row-reverse">
              <div className="w-8 h-8 rounded-full bg-zinc-700 flex items-center justify-center flex-shrink-0">
                You
              </div>
              <div className="bg-emerald-600 rounded-2xl rounded-tr-none p-4 max-w-[80%] text-white">
                I currently work in retail management. I handle team scheduling, inventory, and customer complaints.
              </div>
            </div>
            */}
          </div>
          
          <div className="p-4 border-t border-zinc-800 bg-zinc-950">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Type your answer here..." 
                className="w-full bg-zinc-900 border border-zinc-800 rounded-xl py-4 pl-4 pr-12 text-white placeholder-zinc-500 focus:outline-none focus:border-emerald-500 transition-colors"
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2 p-2 text-zinc-400 hover:text-emerald-400 transition-colors">
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
