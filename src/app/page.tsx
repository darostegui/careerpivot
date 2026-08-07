import Link from "next/link";
import { UploadCloud, MessageSquare } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans selection:bg-emerald-500 selection:text-black">
      {/* Navigation */}
      <header className="flex justify-between items-center p-6 pr-20 border-b border-zinc-800">
        <div className="text-xl font-bold tracking-tight">CareerPivot<span className="text-emerald-500">.me</span></div>
        <nav className="hidden md:flex space-x-6 text-sm">
          <Link href="#how-it-works" className="text-zinc-400 hover:text-white transition-colors">How it works</Link>
          <Link href="#faq" className="text-zinc-400 hover:text-white transition-colors">FAQ</Link>
          <Link href="/login" className="text-zinc-400 hover:text-white transition-colors">Sign In</Link>
          <Link href="/account" className="text-zinc-400 hover:text-white transition-colors">Account</Link>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="max-w-5xl mx-auto px-6 pt-24 pb-16 text-center">
        <div className="inline-block px-3 py-1 mb-6 text-xs font-semibold text-emerald-400 bg-emerald-500/10 rounded-full border border-emerald-500/20">
          Build with Gemini XPRIZE Submission
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-tight mb-8">
          Your next career, <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">mapped out by AI.</span>
        </h1>
        
        <p className="text-xl text-zinc-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          Upload your resume. Let Gemini 1.5 Pro analyze your skills, find your most achievable pivot roles, and generate a step-by-step roadmap to get you hired.
        </p>
        
        <div className="flex flex-col justify-center items-center gap-4">
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link href="/upload" className="px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-zinc-200 transition-colors shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] w-full sm:w-auto flex items-center justify-center gap-2">
              <UploadCloud className="w-5 h-5" /> Upload LinkedIn PDF
            </Link>
            <Link href="/interview" className="px-8 py-4 bg-zinc-900 border border-zinc-700 text-white font-semibold rounded-lg hover:bg-zinc-800 transition-colors w-full sm:w-auto flex items-center justify-center gap-2">
              <MessageSquare className="w-5 h-5" /> Start Manually (No PDF)
            </Link>
          </div>
          <p className="text-sm text-zinc-500 mt-2">
            Not sure how to get your PDF? <a href="#faq" className="text-emerald-500 hover:underline">See our FAQ below.</a>
          </p>
          <div className="mt-8">
             <Link href="/roadmap" className="text-sm text-zinc-400 hover:text-emerald-400 underline underline-offset-4 transition-colors">
               Preview what a generated roadmap looks like
             </Link>
          </div>
        </div>

        {/* Feature Grid */}
        <div id="how-it-works" className="grid md:grid-cols-3 gap-8 mt-32 text-left scroll-mt-24">
          <div className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-zinc-600 transition-colors">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-zinc-800 text-xs text-emerald-400">1</span> 
              Data Ingestion
            </h3>
            <p className="text-zinc-400">Upload your LinkedIn PDF or answer 5 quick questions. We extract your existing skills and find the best overlap with high-paying tech roles.</p>
          </div>
          <div className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-zinc-600 transition-colors">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-zinc-800 text-xs text-emerald-400">2</span> 
              Visual Roadmap
            </h3>
            <p className="text-zinc-400">Get a node-based, interactive graph showing exactly what to learn, with links to vetted free Google courses and API credits.</p>
          </div>
          <div className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-zinc-600 transition-colors">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-zinc-800 text-xs text-emerald-400">3</span> 
              Trust Guarantee
            </h3>
            <p className="text-zinc-400">$49 unlocks the full step-by-step plan. If it doesn't help you get an interview in 6 months, get a full refund. No questions asked.</p>
          </div>
        </div>

        {/* FAQ Section */}
        <div id="faq" className="max-w-3xl mx-auto mt-32 text-left mb-24 scroll-mt-24">
          <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            
            <div className="p-6 rounded-2xl bg-zinc-900/30 border border-zinc-800">
              <h3 className="text-lg font-bold mb-3 text-emerald-400">How do I download my LinkedIn profile as a PDF?</h3>
              <div className="text-zinc-400 space-y-2">
                <p>It takes less than 30 seconds:</p>
                <ol className="list-decimal list-inside ml-4 space-y-1">
                  <li>Go to your LinkedIn profile page.</li>
                  <li>Click the <strong>More</strong> button in the introduction section (near your profile picture).</li>
                  <li>Select <strong>Save to PDF</strong> from the dropdown menu.</li>
                  <li>Upload the downloaded file directly here!</li>
                </ol>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-zinc-900/30 border border-zinc-800">
              <h3 className="text-lg font-bold mb-3 text-emerald-400">What if I don't have a LinkedIn profile?</h3>
              <p className="text-zinc-400">
                No problem at all! You can click the <strong>"Start Manually (No PDF)"</strong> button above. Our AI will guide you through a quick, 5-question chat to understand your current experience, skills, and goals to build your personalized pivot roadmap.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-zinc-900/30 border border-zinc-800">
              <h3 className="text-lg font-bold mb-3 text-emerald-400">How does the Money-Back Guarantee work?</h3>
              <p className="text-zinc-400">
                We operate on a "Trust-by-Default" policy. If you purchase the $49 full roadmap blueprint and don't find it useful in helping you land an interview within 6 months, simply send us an email. We will issue a full refund immediately—no proof required, no questions asked.
              </p>
            </div>

          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-900 py-8 text-center text-zinc-500 text-sm">
        <p>&copy; {new Date().getFullYear()} CareerPivot.me - Built for the Build with Gemini XPRIZE.</p>
      </footer>
    </div>
  );
}
