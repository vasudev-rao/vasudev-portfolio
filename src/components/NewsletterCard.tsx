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
    <div className="card p-5 relative overflow-hidden">
      {/* Top accent */}
      <div className="absolute top-0 inset-x-0 h-[1.5px]"
        style={{ background: "linear-gradient(90deg, transparent, rgba(0,242,255,0.35), transparent)" }}/>
      {/* BG glow */}
      <div className="absolute -top-16 -right-16 w-40 h-40 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(0,242,255,0.07), transparent 70%)" }}/>

      <div className="w-9 h-9 rounded-xl bg-[rgba(0,242,255,0.08)] border border-[rgba(0,242,255,0.18)] flex items-center justify-center mb-4">
        <Mail size={15} className="text-[#00F2FF]"/>
      </div>

      <h3 className="font-display font-700 text-[15px] text-white mb-1.5 tracking-tight">
        Subscribe to newsletter
      </h3>
      <p className="text-[12px] text-white/45 leading-relaxed mb-4 font-body">
        Weekly insights on data engineering, Spark, dbt, streaming architectures, and cloud data platforms.
      </p>

      {done ? (
        <div className="flex items-center gap-2 text-[#00F2FF] text-sm font-500">
          <CheckCircle2 size={16}/>
          You&apos;re subscribed! Check your inbox.
        </div>
      ) : (
        <form onSubmit={submit} className="space-y-3">
          <div>
            <label className="font-mono text-[9px] text-white/30 uppercase tracking-[0.16em] block mb-2">
              Email address
            </label>
            <input
              type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
              placeholder="you@company.com"
              className="w-full bg-white/[0.04] border border-white/[0.07] rounded-xl px-4 py-2.5 text-[13px] text-white placeholder:text-white/25 focus:outline-none focus:border-[rgba(0,242,255,0.3)] focus:bg-[rgba(0,242,255,0.04)] transition-all duration-200 font-body"
            />
          </div>
          <button type="submit" disabled={loading} className="btn-primary w-full justify-center text-[11px] py-2.5">
            {loading ? (
              <span className="flex items-center gap-2">
                <span className="w-3.5 h-3.5 border-2 border-[#080C14]/30 border-t-[#080C14] rounded-full animate-spin"/>
                Subscribing...
              </span>
            ) : (
              <span className="flex items-center gap-2">Subscribe <ArrowRight size={13}/></span>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
