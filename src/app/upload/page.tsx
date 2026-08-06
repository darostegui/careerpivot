import Link from "next/link";
import { UploadCloud, ArrowLeft, FileText } from "lucide-react";

export default function UploadPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white p-6 font-sans">
      <Link href="/" className="inline-flex items-center text-zinc-400 hover:text-white transition-colors mb-12">
        <ArrowLeft className="w-4 h-4 mr-2" /> Back to home
      </Link>
      
      <div className="max-w-2xl mx-auto mt-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Upload your Resume</h1>
        <p className="text-zinc-400 mb-12">Upload your LinkedIn PDF or standard resume. We'll extract your skills securely.</p>
        
        <div className="border-2 border-dashed border-zinc-800 rounded-2xl p-16 bg-zinc-900/30 hover:border-emerald-500/50 hover:bg-zinc-900/50 transition-all cursor-pointer group">
          <UploadCloud className="w-16 h-16 mx-auto text-zinc-600 group-hover:text-emerald-500 transition-colors mb-6" />
          <h3 className="text-xl font-semibold mb-2">Click to upload or drag and drop</h3>
          <p className="text-sm text-zinc-500">PDF, DOCX, or TXT (Max 5MB)</p>
        </div>

        <div className="mt-8 flex items-center justify-center text-sm text-zinc-500 gap-2">
          <FileText className="w-4 h-4" /> Your data is processed securely and never shared.
        </div>
      </div>
    </div>
  );
}
