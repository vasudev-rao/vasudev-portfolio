"use client";
import { useState } from "react";
import { Mail, MapPin, Github, Linkedin, Send, CheckCircle2, ArrowRight } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1100));
    setDone(true);
    setLoading(false);
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: "vasudev@example.com", href: "mailto:vasudev@example.com" },
    { icon: MapPin, label: "Location", value: "India", href: null },
    { icon: Github, label: "GitHub", value: "github.com/yourgithub", href: "https://github.com" },
    { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/yourlinkedin", href: "https://linkedin.com" },
  ];

  return (
    <div className="pt-28 pb-32">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20 items-end">
          <div className="lg:col-span-7">
            <p className="eyebrow mb-6">Get In Touch</p>
            <h1 className="display-text text-6xl lg:text-7xl text-ink">
              Available for<br />senior data<br /><em>engineering roles</em>
            </h1>
          </div>
          <div className="lg:col-span-5">
            <p className="text-ink-secondary text-base leading-relaxed">
              Open to senior and staff-level data engineering positions, contract work on data platform architecture, and greenfield pipeline projects — particularly in fintech and AI/ML infrastructure.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Form */}
          <div className="lg:col-span-7">
            {done ? (
              <div className="card p-16 text-center space-y-5">
                <div className="w-16 h-16 rounded-full bg-emerald/10 border border-emerald/20 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="text-emerald" size={26} />
                </div>
                <h3 className="font-display font-800 text-2xl text-ink">Message sent!</h3>
                <p className="text-ink-secondary">Thanks for reaching out. I&apos;ll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={submit} className="card p-8 md:p-10 space-y-5">
                <div className="absolute top-0 inset-x-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(79,142,247,0.22), transparent)" }} />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {[["name","Your name","John Carter"],["email","Email address","you@company.com"]].map(([k,l,p]) => (
                    <div key={k}>
                      <label className="font-mono text-[10px] text-ink-muted uppercase tracking-[0.15em] block mb-2">{l}</label>
                      <input type={k === "email" ? "email" : "text"} required value={(form as any)[k]} onChange={(e) => setForm({ ...form, [k]: e.target.value })} placeholder={p}
                        className="w-full bg-surface-2 border border-white/[0.07] rounded-xl px-4 py-3 text-sm text-ink placeholder:text-ink-muted focus:outline-none focus:border-electric-border focus:bg-electric-glow focus:shadow-[0_0_14px_rgba(79,142,247,0.12)] transition-all duration-200" />
                    </div>
                  ))}
                </div>
                <div>
                  <label className="font-mono text-[10px] text-ink-muted uppercase tracking-[0.15em] block mb-2">Subject</label>
                  <input type="text" value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} placeholder="Senior DE role / Consulting / Data platform project"
                    className="w-full bg-surface-2 border border-white/[0.07] rounded-xl px-4 py-3 text-sm text-ink placeholder:text-ink-muted focus:outline-none focus:border-electric-border focus:bg-electric-glow focus:shadow-[0_0_14px_rgba(79,142,247,0.12)] transition-all duration-200" />
                </div>
                <div>
                  <label className="font-mono text-[10px] text-ink-muted uppercase tracking-[0.15em] block mb-2">Message</label>
                  <textarea required rows={6} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Tell me about your data platform challenges..."
                    className="w-full bg-surface-2 border border-white/[0.07] rounded-xl px-4 py-3 text-sm text-ink placeholder:text-ink-muted focus:outline-none focus:border-electric-border focus:bg-electric-glow focus:shadow-[0_0_14px_rgba(79,142,247,0.12)] transition-all duration-200 resize-none" />
                </div>
                <button type="submit" disabled={loading} className="btn-primary w-full justify-center py-3.5">
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-canvas/30 border-t-canvas rounded-full animate-spin" />Sending...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2"><Send size={14} />Send Message</span>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="card p-7">
              <p className="eyebrow text-[10px] mb-6" style={{ letterSpacing: "0.2em" }}>Contact Info</p>
              <div className="space-y-5">
                {contactInfo.map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-center gap-3.5">
                    <div className="w-9 h-9 rounded-xl bg-electric-dim border border-electric-border flex items-center justify-center flex-shrink-0">
                      <Icon size={14} className="text-electric" />
                    </div>
                    <div>
                      <p className="font-mono text-[9px] text-ink-muted uppercase tracking-[0.15em] mb-0.5">{label}</p>
                      {href ? (
                        <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="text-sm text-ink-secondary hover:text-ink transition-colors">{value}</a>
                      ) : (
                        <p className="text-sm text-ink-secondary">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="card p-7 relative overflow-hidden">
              <div className="absolute top-0 inset-x-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(79,142,247,0.28), transparent)" }} />
              <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(79,142,247,0.07), transparent 70%)" }} />
              <div className="w-2 h-2 rounded-full bg-emerald mb-4 animate-pulse" />
              <h4 className="font-display font-800 text-lg text-ink mb-2">Open to opportunities</h4>
              <p className="text-sm text-ink-secondary leading-relaxed">
                Senior data engineering roles, consulting contracts, and interesting projects — especially fintech, AI infrastructure, and cloud-native architectures.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
