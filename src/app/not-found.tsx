import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center pt-24">
      <div className="text-center space-y-6 px-6">
        <p className="font-mono text-xs text-electric/50 uppercase tracking-[0.2em]">Error 404</p>
        <h1 className="text-8xl md:text-9xl font-black text-ink/10">404</h1>
        <p className="font-display font-800 text-2xl text-ink">Page not found</p>
        <p className="text-ink-secondary max-w-sm mx-auto">The page you&apos;re looking for doesn&apos;t exist or has been moved.</p>
        <Link href="/" className="btn-primary inline-flex mx-auto">
          <ArrowLeft size={14} />Back to Home
        </Link>
      </div>
    </div>
  );
}
