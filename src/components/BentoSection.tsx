"use client";
import { Activity, GitBranch, Layers, DollarSign } from "lucide-react";

const CYAN = "#00F2FF";

/* ─────────────────────────────────────────────────────────────
   ROW 1 — Impact metrics (3 cards, equal weight)
───────────────────────────────────────────────────────────── */
const metrics = [
  {
    value: "1B+",
    label: "Events / Day",
    color: "#00F2FF",
    gradient: "linear-gradient(135deg, #00F2FF 0%, #80F8FF 100%)",
    glow: "rgba(0,242,255,0.3)",
    context: "Kafka → Spark Structured Streaming → Delta Lake",
    detail: "Exactly-once delivery · late-event watermarks · sub-5s latency",
    tags: ["Apache Kafka", "Spark SS", "Delta Lake", "AWS EMR"],
  },
  {
    value: "40%",
    label: "Platform Cost Saved",
    color: "#F5A623",
    gradient: "linear-gradient(135deg, #F5A623 0%, #FFD580 100%)",
    glow: "rgba(245,166,35,0.28)",
    context: "Spark optimization + storage tiering + auto-remediation",
    detail: "Isolation Forest anomaly detection · 20+ Databricks workspaces · 90 days",
    tags: ["Databricks", "Terraform", "AWS Cost Explorer", "GCP"],
  },
  {
    value: "99.9%",
    label: "Pipeline SLA",
    color: "#10b981",
    gradient: "linear-gradient(135deg, #10b981 0%, #34d399 100%)",
    glow: "rgba(16,185,129,0.28)",
    context: "Great Expectations · self-healing · auto-restart",
    detail: "Structured alerting · PagerDuty · data quality gates at every layer",
    tags: ["Great Expectations", "Airflow", "PagerDuty"],
  },
];

/* ─────────────────────────────────────────────────────────────
   ROW 2 — Core expertise (4 cards, equal weight)
───────────────────────────────────────────────────────────── */
const expertise = [
  {
    icon: Activity,
    name: "Streaming Systems",
    color: "#00F2FF",
    desc: "End-to-end Kafka → Spark Structured Streaming pipelines with exactly-once delivery, watermark-based late-event handling, and idempotent MERGE writes to Delta Lake.",
    stack: ["Apache Kafka", "Spark SS", "Delta Lake", "AWS EMR"],
  },
  {
    icon: Layers,
    name: "Lakehouse Architecture",
    color: "#F5A623",
    desc: "Bronze → Silver → Gold medallion architecture on Databricks. Unity Catalog governance, dbt schema contracts, Great Expectations quality gates, and Photon-powered Gold layer.",
    stack: ["Databricks", "Delta Lake", "dbt", "Unity Catalog"],
  },
  {
    icon: GitBranch,
    name: "Warehouse Modernisation",
    color: "#C4B5FD",
    desc: "Redshift / Oracle → Snowflake + BigQuery migrations using dual-write validation strategy. Zero-downtime cutover, incremental ELT redesign, and physical data model optimisation.",
    stack: ["Snowflake", "BigQuery", "dbt", "Airbyte"],
  },
  {
    icon: DollarSign,
    name: "Cost Engineering",
    color: "#10b981",
    desc: "Automated frameworks for Spark cluster rightsizing, S3 → Glacier storage tiering, and cross-workspace cost anomaly detection. 40% platform spend reduction in 90 days.",
    stack: ["Terraform", "Python", "Databricks", "AWS + GCP"],
  },
];

/* ─────────────────────────────────────────────────────────────
   ROW 3 — Tech stack grouped (no %, no bars)
───────────────────────────────────────────────────────────── */
const stackGroups = [
  {
    category: "Languages & Processing",
    color: "#F5A623",
    items: ["Python", "PySpark", "Apache Spark", "SQL"],
  },
  {
    category: "Streaming & Messaging",
    color: "#00F2FF",
    items: ["Apache Kafka", "Spark Structured Streaming", "GCP Pub/Sub", "AWS Kinesis"],
  },
  {
    category: "Lakehouse & Storage",
    color: "#C4B5FD",
    items: ["Databricks", "Delta Lake", "Apache Iceberg", "AWS S3", "GCS"],
  },
  {
    category: "Warehousing",
    color: "#00F2FF",
    items: ["Snowflake", "BigQuery", "Redshift", "PostgreSQL"],
  },
  {
    category: "Orchestration & Quality",
    color: "#F5A623",
    items: ["Apache Airflow", "dbt", "Great Expectations", "MLflow"],
  },
  {
    category: "Cloud & Infrastructure",
    color: "#10b981",
    items: ["AWS", "GCP", "Terraform", "Docker", "Kubernetes", "AWS Glue", "GCP Dataflow"],
  },
];

/* ─────────────────────────────────────────────────────────────
   Experience timeline
───────────────────────────────────────────────────────────── */
const experience = [
  {
    company: "Fintech Platform (100K+ apps/day)", role: "Senior Data Engineer", period: "2023–Present",
    desc: "Kafka → PySpark real-time credit decisioning. 48h batch → <2min streaming. 200+ risk features computed in-flight. 95%+ model accuracy at 100K+ apps/day.",
    tags: ["Kafka", "PySpark", "Spark SS", "PostgreSQL", "AWS"],
  },
  {
    company: "Enterprise Data Platform (50+ sources)", role: "Data Platform Engineer", period: "2022–2023",
    desc: "Unified 50+ AWS Glue jobs into Databricks medallion lakehouse. 60% pipeline runtime reduction. Unity Catalog governance across 8 teams. Zero schema conflicts.",
    tags: ["Databricks", "Delta Lake", "dbt", "Unity Catalog", "AWS Glue"],
  },
  {
    company: "Cloud Migration Programme (100TB)", role: "Data Engineering Lead", period: "2020–2022",
    desc: "Redshift + Oracle → Snowflake + BigQuery. Dual-write validation, zero downtime. p95 query time 42s → 11s. 40% cost reduction.",
    tags: ["Snowflake", "BigQuery", "dbt", "Airflow", "Airbyte"],
  },
];

export function BentoSection() {
  return (
    <section className="py-28">
      <div className="max-w-7xl mx-auto px-6">

        {/* ── Section header ── */}
        <div className="mb-16">
          <p className="eyebrow mb-4">What I Deliver</p>
          <h2 style={{ fontFamily: "Inter,sans-serif", fontWeight: 800, fontSize: "clamp(36px,4vw,52px)", letterSpacing: "-0.03em", color: "#F0F4FF", marginBottom: "1rem" }}>
            Stack, Skills &amp; Experience
          </h2>
          <p className="font-mono" style={{ fontSize: 12, color: "rgba(240,244,255,0.35)", letterSpacing: "0.04em" }}>
            Processing 50TB+ of batch and streaming data daily across production pipelines on AWS and GCP.
          </p>
        </div>

        {/* ══════════════════════════════════════════
            ROW 1 — 3 Impact Metrics
        ══════════════════════════════════════════ */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1rem", marginBottom: "1rem" }}
          className="metrics-row">
          {metrics.map(({ value, label, color, gradient, glow, context, detail, tags }) => (
            <div key={label} style={{ padding: "2rem", borderRadius: "1.25rem", background: "#000824", border: `1px solid ${color}28`, position: "relative", overflow: "hidden" }}>
              {/* top accent */}
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg, transparent, ${color}, transparent)` }}/>
              {/* big number */}
              <p style={{ fontFamily: "Inter,sans-serif", fontWeight: 900, fontSize: "clamp(52px,5vw,72px)", lineHeight: 0.9, letterSpacing: "-0.05em", background: gradient, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", filter: `drop-shadow(0 0 28px ${glow})`, marginBottom: "0.5rem" }}>
                {value}
              </p>
              <p style={{ fontFamily: "Inter,sans-serif", fontWeight: 700, fontSize: 17, color: "#F0F4FF", marginBottom: "0.75rem" }}>{label}</p>
              {/* Architecture context */}
              <p style={{ fontFamily: "JetBrains Mono,monospace", fontSize: 10.5, color: color + "BB", lineHeight: 1.55, marginBottom: "0.5rem" }}>{context}</p>
              <p style={{ fontFamily: "JetBrains Mono,monospace", fontSize: 10, color: "rgba(240,244,255,0.35)", lineHeight: 1.5, marginBottom: "1rem" }}>{detail}</p>
              {/* tags */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem" }}>
                {tags.map(t => (
                  <span key={t} style={{ fontFamily: "JetBrains Mono,monospace", fontSize: "0.6rem", letterSpacing: "0.07em", padding: "0.2rem 0.55rem", borderRadius: "0.3rem", background: color + "10", border: `1px solid ${color}25`, color: color + "AA" }}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* ══════════════════════════════════════════
            ROW 2 — 4 Core Expertise Cards
        ══════════════════════════════════════════ */}
        <div style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <p className="font-mono" style={{ fontSize: 10, color: "rgba(240,244,255,0.3)", letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: "1rem" }}>Core Specialisms</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "1rem" }} className="expertise-row">
            {expertise.map(({ icon: Icon, name, color, desc, stack }) => (
              <div key={name} className="bento" style={{ padding: "1.75rem", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1.5, background: `linear-gradient(90deg, transparent, ${color}80, transparent)` }}/>
                {/* icon */}
                <div style={{ width: 40, height: 40, borderRadius: "0.75rem", display: "flex", alignItems: "center", justifyContent: "center", background: color + "12", border: `1px solid ${color}25`, marginBottom: "1rem" }}>
                  <Icon size={18} style={{ color }}/>
                </div>
                <h3 style={{ fontFamily: "Inter,sans-serif", fontWeight: 700, fontSize: 15, color: "#F0F4FF", letterSpacing: "-0.02em", marginBottom: "0.625rem", lineHeight: 1.3 }}>{name}</h3>
                <p style={{ fontSize: 12.5, color: "rgba(240,244,255,0.48)", lineHeight: 1.65, fontFamily: "Inter,sans-serif", marginBottom: "1rem" }}>{desc}</p>
                {/* mini stack pills */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.3rem", marginTop: "auto" }}>
                  {stack.map(t => (
                    <span key={t} style={{ fontFamily: "JetBrains Mono,monospace", fontSize: "0.57rem", letterSpacing: "0.06em", padding: "0.18rem 0.5rem", borderRadius: "0.25rem", background: color + "0D", border: `1px solid ${color}22`, color: color + "90" }}>{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ══════════════════════════════════════════
            ROW 3 — Full-width Production Stack
        ══════════════════════════════════════════ */}
        <div style={{ marginTop: "2rem" }}>
          <p className="font-mono" style={{ fontSize: 10, color: "rgba(240,244,255,0.3)", letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: "1rem" }}>Production Data Stack</p>
          <div className="bento" style={{ padding: "2rem" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.75rem" }} className="stack-grid">
              {stackGroups.map(({ category, color, items }) => (
                <div key={category}>
                  <p style={{ fontFamily: "JetBrains Mono,monospace", fontSize: 10, color: color + "BB", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: "0.75rem" }}>{category}</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                    {items.map(t => (
                      <span key={t} style={{ fontFamily: "JetBrains Mono,monospace", fontSize: "0.65rem", letterSpacing: "0.05em", padding: "0.3rem 0.7rem", borderRadius: "0.375rem", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "rgba(240,244,255,0.65)" }}>{t}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════════
            ROW 4 — Experience timeline (full-width)
        ══════════════════════════════════════════ */}
        <div style={{ marginTop: "2rem" }}>
          <p className="font-mono" style={{ fontSize: 10, color: "rgba(240,244,255,0.3)", letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: "1rem" }}>Experience</p>
          <div className="bento" style={{ padding: "2rem" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.75rem" }}>
              {experience.map(({ company, role, period, desc, tags }, i) => (
                <div key={company} style={{ display: "flex", gap: "1.25rem", alignItems: "flex-start" }}>
                  {/* timeline spine */}
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: 20, flexShrink: 0 }}>
                    <div style={{ width: 10, height: 10, borderRadius: "9999px", marginTop: 5, background: i === 0 ? CYAN : "rgba(255,255,255,0.15)", boxShadow: i === 0 ? `0 0 12px rgba(0,242,255,0.5)` : "none", flexShrink: 0 }}/>
                    {i < experience.length - 1 && <div style={{ width: 1, flex: 1, marginTop: 5, minHeight: 40, background: "rgba(255,255,255,0.07)" }}/>}
                  </div>
                  {/* content */}
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", flexWrap: "wrap", alignItems: "baseline", gap: "0.625rem", marginBottom: "0.375rem" }}>
                      <span style={{ fontFamily: "Inter,sans-serif", fontWeight: 700, fontSize: 15, color: "#F0F4FF" }}>{role}</span>
                      <span className="font-mono" style={{ fontSize: 10.5, color: CYAN + "80" }}>— {company}</span>
                      <span className="font-mono" style={{ fontSize: 10, color: "rgba(240,244,255,0.3)", marginLeft: "auto" }}>{period}</span>
                    </div>
                    <p style={{ fontSize: 13.5, color: "rgba(240,244,255,0.5)", lineHeight: 1.65, fontFamily: "Inter,sans-serif", marginBottom: "0.625rem" }}>{desc}</p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem" }}>
                      {tags.map(t => <span key={t} className="tag" style={{ fontSize: "0.6rem" }}>{t}</span>)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* responsive overrides */}
        <style>{`
          @media (max-width: 1024px) {
            .metrics-row   { grid-template-columns: repeat(3,1fr) !important; }
            .expertise-row { grid-template-columns: repeat(2,1fr) !important; }
            .stack-grid    { grid-template-columns: repeat(2,1fr) !important; }
          }
          @media (max-width: 640px) {
            .metrics-row   { grid-template-columns: 1fr !important; }
            .expertise-row { grid-template-columns: 1fr !important; }
            .stack-grid    { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </div>
    </section>
  );
}
