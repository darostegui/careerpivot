import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans selection:bg-emerald-500 selection:text-black">
      {/* Navigation */}
      <header className="flex justify-between items-center p-6 border-b border-zinc-800">
        <div className="text-xl font-bold tracking-tight">Pivot<span className="text-emerald-500">.ai</span></div>
        <nav className="space-x-6 text-sm">
          <Link href="#" className="text-zinc-400 hover:text-white transition-colors">How it works</Link>
          <Link href="#" className="text-zinc-400 hover:text-white transition-colors">Pricing</Link>
          <Link href="#" className="text-zinc-400 hover:text-white transition-colors">Testimonials</Link>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="max-w-5xl mx-auto px-6 pt-24 pb-16 text-center">
        <div className="inline-block px-3 py-1 mb-6 text-xs font-semibold text-emerald-400 bg-emerald-500/10 rounded-full border border-emerald-500/20">
          Build with Gemini XPRIZE Submission
        </div>
        
        <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter leading-tight mb-8">
          Your next career, <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">mapped out by AI.</span>
        </h1>
        
        <p className="text-xl text-zinc-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          Upload your resume. Let Gemini 1.5 Pro analyze your skills, find your most achievable pivot roles, and generate a step-by-step roadmap to get you hired.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <button className="px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-zinc-200 transition-colors shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]">
            Upload LinkedIn PDF
          </button>
          <button className="px-8 py-4 bg-zinc-900 border border-zinc-700 text-white font-semibold rounded-lg hover:bg-zinc-800 transition-colors">
            View Sample Roadmap
          </button>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-32 text-left">
          <div className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800">
            <h3 className="text-xl font-bold mb-3">1. Resume Ingestion</h3>
            <p className="text-zinc-400">Upload your PDF. We extract your existing skills and find the best overlap with high-paying tech roles.</p>
          </div>
          <div className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800">
            <h3 className="text-xl font-bold mb-3">2. Visual Roadmap</h3>
            <p className="text-zinc-400">Get a node-based, interactive graph showing exactly what to learn, with links to vetted free courses.</p>
          </div>
          <div className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800">
            <h3 className="text-xl font-bold mb-3">3. Trust Guarantee</h3>
            <p className="text-zinc-400">$49 unlocks the full plan. If it doesn't help you get an interview in 6 months, get a full refund.</p>
          </div>
        </div>
      </main>
    </div>
  );
}
