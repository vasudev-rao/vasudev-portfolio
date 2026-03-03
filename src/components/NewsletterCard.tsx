"use client";
import { useState } from "react";
import { ArrowRight, CheckCircle2, Mail } from "lucide-react";

export function NewsletterCard() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 900));
    setDone(true);
    setLoading(false);
  };

  return (
    <div className="card p-6 md:p-8 relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(79,142,247,0.35), transparent)" }} />
      <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(79,142,247,0.07), transparent 70%)" }} />

      <div className="w-10 h-10 rounded-xl bg-electric-dim border border-electric-border flex items-center justify-center mb-5">
        <Mail size={16} className="text-electric" />
      </div>
      <h3 className="font-display font-800 text-lg text-ink mb-2">Subscribe to newsletter</h3>
      <p className="text-sm text-ink-secondary leading-relaxed mb-6">
        Weekly insights on data engineering, Spark, dbt, streaming architectures, and cloud data platforms.
      </p>

      {done ? (
        <div className="flex items-center gap-2 text-emerald text-sm font-500">
          <CheckCircle2 size={16} />
          You&apos;re subscribed! Check your inbox.
        </div>
      ) : (
        <form onSubmit={submit} className="space-y-3">
          <div>
            <label className="font-mono text-[10px] text-ink-muted uppercase tracking-[0.15em] block mb-2">Email address</label>
            <input
              type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
              placeholder="you@company.com"
              className="w-full bg-surface-2 border border-white/[0.07] rounded-xl px-4 py-2.5 text-sm text-ink placeholder:text-ink-muted focus:outline-none focus:border-electric-border focus:bg-electric-glow focus:shadow-[0_0_14px_rgba(79,142,247,0.12)] transition-all duration-200"
            />
          </div>
          <button type="submit" disabled={loading} className="btn-primary w-full justify-center text-xs py-2.5">
            {loading ? (
              <span className="flex items-center gap-2">
                <span className="w-3.5 h-3.5 border-2 border-canvas/30 border-t-canvas rounded-full animate-spin" />
                Subscribing...
              </span>
            ) : (
              <span className="flex items-center gap-2">Subscribe now <ArrowRight size={13} /></span>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
