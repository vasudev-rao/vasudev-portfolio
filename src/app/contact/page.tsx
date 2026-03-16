"use client";
import { useState } from "react";
import { Mail, MapPin, Github, Linkedin, CheckCircle2, ArrowRight, Brain, Globe, Clock, Shield, Zap, TrendingUp, Star } from "lucide-react";

const CYAN = "#00F2FF";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", company: "", challenge: "", budget: "" });
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);
  const [focused, setFocused] = useState("");

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1100));
    setDone(true);
    setLoading(false);
  };

  const inputStyle = (name: string): React.CSSProperties => ({
    width: "100%",
    background: focused === name ? "rgba(0,242,255,0.04)" : "rgba(255,255,255,0.03)",
    border: focused === name ? "1px solid rgba(0,242,255,0.35)" : "1px solid rgba(255,255,255,0.08)",
    borderRadius: "0.75rem",
    padding: "0.875rem 1rem",
    fontSize: 14,
    color: "#F0F4FF",
    outline: "none",
    transition: "border-color 0.2s, background 0.2s, box-shadow 0.2s",
    boxShadow: focused === name ? "0 0 0 3px rgba(0,242,255,0.08)" : "none",
    fontFamily: "Inter, sans-serif",
  });

  const labelStyle: React.CSSProperties = {
    fontFamily: "JetBrains Mono, monospace",
    fontSize: 10,
    letterSpacing: "0.15em",
    textTransform: "uppercase",
    color: "rgba(240,244,255,0.4)",
    display: "block",
    marginBottom: "0.5rem",
  };

  const results = [
    { metric: "35%",   label: "Infrastructure cost saved", sub: "Redshift → Snowflake migration", color: "#10b981" },
    { metric: "100+",  label: "Hours automated / month", sub: "Python + Airflow · E-commerce", color: CYAN },
    { metric: "$15K",  label: "Saved monthly", sub: "Data quality framework · Fintech", color: "#F5A623" },
  ];

  const trust = [
    { icon: Clock,    label: "48-Hour Response",         desc: "Usually same day" },
    { icon: Brain,    label: "Data Platform Expert",       desc: "dbt · Snowflake · Spark · Airflow" },
    { icon: Globe,    label: "Global Availability",       desc: "US · EU · APAC timezones" },
    { icon: Shield,   label: "NDA Available",             desc: "Full confidentiality" },
    { icon: Zap,      label: "Open to Relocate",            desc: "India · Remote · On-site" },
  ];

  return (
    <div style={{ background: "#000412", minHeight: "100vh", paddingTop: "7rem", paddingBottom: "6rem" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 1.5rem" }}>

        {/* ── PAGE HEADER ── */}
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.35rem 1rem", borderRadius: "9999px", border: "1px solid rgba(0,242,255,0.2)", background: "rgba(0,242,255,0.05)", marginBottom: "1.5rem" }}>
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: CYAN, boxShadow: "0 0 8px rgba(0,242,255,0.8)", display: "inline-block" }} />
            <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase" as const, color: CYAN + "CC" }}>Taking Consulting Projects — 2025</span>
          </div>
          <h1 style={{ fontFamily: "Inter, sans-serif", fontWeight: 800, fontSize: "clamp(40px,5vw,68px)", lineHeight: 1.0, letterSpacing: "-0.04em", color: "#F0F4FF", marginBottom: "1rem" }}>
            Get in<br />
            <span style={{ color: CYAN }}>Touch</span>
          </h1>
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: 18, color: "rgba(240,244,255,0.5)", maxWidth: 540, margin: "0 auto", lineHeight: 1.65 }}>
            Open to senior and staff-level data engineering positions. Also consulting on streaming system design, lakehouse architecture, and Spark optimisation.
          </p>
        </div>

        {/* ── PROOF METRICS ── */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem", marginBottom: "3.5rem" }}>
          {results.map(({ metric, label, sub, color }) => (
            <div key={label} style={{ background: "#000824", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "1rem", padding: "1.5rem", textAlign: "center", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg, transparent, ${color}, transparent)` }} />
              <div style={{ fontFamily: "Inter, sans-serif", fontWeight: 900, fontSize: "clamp(32px,4vw,48px)", lineHeight: 1, color, letterSpacing: "-0.04em", marginBottom: "0.4rem" }}>{metric}</div>
              <div style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: 14, color: "#F0F4FF", marginBottom: "0.3rem" }}>{label}</div>
              <div style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 10, color: "rgba(240,244,255,0.35)" }}>{sub}</div>
            </div>
          ))}
        </div>

        {/* ── MAIN GRID ── */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 420px", gap: "2rem", alignItems: "start" }}>

          {/* ── FORM ── */}
          <div style={{ background: "#000824", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "1.25rem", overflow: "hidden", position: "relative" }}>
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg, transparent, ${CYAN}, transparent)` }} />

            {done ? (
              <div style={{ padding: "4rem 2.5rem", textAlign: "center" }}>
                <div style={{ width: 72, height: 72, borderRadius: "50%", background: "rgba(16,185,129,0.1)", border: "1px solid rgba(16,185,129,0.3)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.5rem" }}>
                  <CheckCircle2 size={32} style={{ color: "#10b981" }} />
                </div>
                <h3 style={{ fontFamily: "Inter, sans-serif", fontWeight: 800, fontSize: 28, color: "#F0F4FF", marginBottom: "0.75rem" }}>Audit request received!</h3>
                <p style={{ fontFamily: "Inter, sans-serif", fontSize: 16, color: "rgba(240,244,255,0.5)", lineHeight: 1.6 }}>
                  {"I'll"} review your details and reply within 48 hours to schedule your free strategy call.
                </p>
              </div>
            ) : (
              <div style={{ padding: "2.5rem" }}>
                <div style={{ marginBottom: "2rem" }}>
                  <h2 style={{ fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: 22, color: "#F0F4FF", marginBottom: "0.5rem" }}>Request Your Free Audit</h2>
                  <p style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 11, color: "rgba(240,244,255,0.35)" }}>Takes 2 minutes. {"I'll"} prepare before we speak.</p>
                </div>

                <form onSubmit={submit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                    <div>
                      <label style={labelStyle}>Your name</label>
                      <input
                        type="text" required placeholder="Sarah Chen"
                        value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                        onFocus={() => setFocused("name")} onBlur={() => setFocused("")}
                        style={inputStyle("name")} />
                    </div>
                    <div>
                      <label style={labelStyle}>Work email</label>
                      <input
                        type="email" required placeholder="you@company.com"
                        value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
                        onFocus={() => setFocused("email")} onBlur={() => setFocused("")}
                        style={inputStyle("email")} />
                    </div>
                  </div>

                  <div>
                    <label style={labelStyle}>Company / Project</label>
                    <input
                      type="text" placeholder="Acme Corp · Series A · 50 staff"
                      value={form.company} onChange={e => setForm({ ...form, company: e.target.value })}
                      onFocus={() => setFocused("company")} onBlur={() => setFocused("")}
                      style={inputStyle("company")} />
                  </div>

                  <div>
                    <label style={labelStyle}>Your data engineering challenge or role</label>
                    <textarea
                      required rows={5}
                      placeholder={"e.g. Our data pipeline breaks every week · We need a single source of truth · We spend hours on manual reporting..."}
                      value={form.challenge} onChange={e => setForm({ ...form, challenge: e.target.value })}
                      onFocus={() => setFocused("challenge")} onBlur={() => setFocused("")}
                      style={{ ...inputStyle("challenge"), resize: "none" }} />
                  </div>

                  <div>
                    <label style={labelStyle}>Approximate budget</label>
                    <select
                      value={form.budget} onChange={e => setForm({ ...form, budget: e.target.value })}
                      onFocus={() => setFocused("budget")} onBlur={() => setFocused("")}
                      style={{ ...inputStyle("budget"), color: form.budget ? "#F0F4FF" : "rgba(240,244,255,0.3)" }}>
                      <option value="" disabled>Select a range...</option>
                      {["< $5K", "$5K – $15K", "$15K – $50K", "$50K+", "Not sure yet"].map(o => (
                        <option key={o} value={o} style={{ background: "#000824", color: "#F0F4FF" }}>{o}</option>
                      ))}
                    </select>
                  </div>

                  <button
                    type="submit" disabled={loading}
                    style={{
                      display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem",
                      padding: "1rem 1.5rem", borderRadius: "0.75rem",
                      background: loading ? "rgba(0,242,255,0.5)" : CYAN,
                      color: "#000412", fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: 15,
                      border: "none", cursor: loading ? "not-allowed" : "pointer",
                      boxShadow: "0 0 40px rgba(0,242,255,0.3), 0 0 80px rgba(0,242,255,0.1)",
                      transition: "all 0.2s",
                    }}>
                    {loading ? (
                      <span style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                        <span style={{ width: 16, height: 16, border: "2px solid rgba(0,0,0,0.3)", borderTop: "2px solid #000412", borderRadius: "50%", animation: "spin 0.8s linear infinite", display: "inline-block" }} />
                        Sending...
                      </span>
                    ) : (
                      <span style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                        Book a Free Data Audit <ArrowRight size={16} />
                      </span>
                    )}
                  </button>

                  <p style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 10, textAlign: "center", color: "rgba(240,244,255,0.25)" }}>
                    No spam. No sales pitch. Just honest advice.
                  </p>
                </form>
              </div>
            )}
          </div>

          {/* ── SIDEBAR ── */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>

            {/* Trust signals */}
            <div style={{ background: "#000824", border: "1px solid rgba(0,242,255,0.15)", borderRadius: "1.25rem", padding: "1.75rem", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg, transparent, ${CYAN}, transparent)` }} />
              <div style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase" as const, color: "rgba(0,242,255,0.55)", marginBottom: "1.25rem" }}>Why Work With Me</div>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {trust.map(({ icon: Icon, label, desc }) => (
                  <div key={label} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                    <div style={{ width: 34, height: 34, borderRadius: "0.6rem", background: "rgba(0,242,255,0.08)", border: "1px solid rgba(0,242,255,0.18)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <Icon size={15} style={{ color: CYAN }} />
                    </div>
                    <div>
                      <div style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: 13, color: "#F0F4FF" }}>{label}</div>
                      <div style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 10, color: "rgba(240,244,255,0.4)", marginTop: 2 }}>{desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent proof */}
            <div style={{ background: "#000824", border: "1px solid rgba(16,185,129,0.2)", borderRadius: "1.25rem", padding: "1.5rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.875rem" }}>
                <Star size={12} style={{ color: "#F5A623" }} />
                <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 10, color: "#10b981", letterSpacing: "0.12em", textTransform: "uppercase" as const }}>Recent Result</span>
              </div>
              <p style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: 14, color: "#F0F4FF", lineHeight: 1.5, marginBottom: "0.5rem" }}>
                &ldquo;Saved 35% on cloud infrastructure and eliminated 1 FTE in pipeline maintenance.&rdquo;
              </p>
              <p style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 10, color: "rgba(240,244,255,0.35)" }}>
                Series B SaaS company · Redshift → Snowflake + dbt migration
              </p>
            </div>

            {/* Social links */}
            <div style={{ background: "#000824", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "1.25rem", padding: "1.5rem" }}>
              <div style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase" as const, color: "rgba(240,244,255,0.3)", marginBottom: "1rem" }}>Find Me</div>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {[
                  { icon: Mail,     label: "vasudev@example.com",         href: "mailto:vasudev@example.com" },
                  { icon: Github,   label: "github.com/vasudevarao",      href: "https://github.com" },
                  { icon: Linkedin, label: "linkedin.com/in/vasudevarao", href: "https://linkedin.com" },
                  { icon: MapPin,   label: "Remote — India / Global",     href: null },
                ].map(({ icon: Icon, label, href }) => (
                  <div key={label} style={{ display: "flex", alignItems: "center", gap: "0.625rem" }}>
                    <Icon size={13} style={{ color: "rgba(240,244,255,0.3)", flexShrink: 0 }} />
                    {href ? (
                      <a href={href} style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 11, color: "rgba(240,244,255,0.55)", textDecoration: "none" }}
                        onMouseOver={e => (e.currentTarget.style.color = CYAN)}
                        onMouseOut={e => (e.currentTarget.style.color = "rgba(240,244,255,0.55)")}>
                        {label}
                      </a>
                    ) : (
                      <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 11, color: "rgba(240,244,255,0.35)" }}>{label}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
        select option { background: #000824; color: #F0F4FF; }
        input::placeholder, textarea::placeholder { color: rgba(240,244,255,0.25); }
      `}</style>
    </div>
  );
}
