import { Container } from "@/components/Container";
import { ProjectCard } from "@/components/ProjectCard";
import { BlogCard } from "@/components/BlogCard";
import { NewsletterCard } from "@/components/NewsletterCard";
import { getAllPosts } from "@/lib/blog";
import { stats } from "@/data/skills";
import projectsData from "@/data/projects.json";
import { Project } from "@/types";
import { BentoSection } from "@/components/BentoSection";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Download, ArrowUpRight, MoveRight, Zap, Database, GitBranch } from "lucide-react";

const projects = projectsData as Project[];

const techStack = [
  "Databricks","Apache Spark","PySpark","Snowflake","BigQuery","Delta Lake",
  "Apache Kafka","Apache Airflow","dbt","AWS Glue","GCP Dataflow","Apache Iceberg",
  "PostgreSQL","Python","Terraform","Docker","Kubernetes","Great Expectations",
  "Databricks","Apache Spark","PySpark","Snowflake","BigQuery","Delta Lake",
  "Apache Kafka","Apache Airflow","dbt","AWS Glue","GCP Dataflow","Apache Iceberg",
  "PostgreSQL","Python","Terraform","Docker","Kubernetes","Great Expectations",
];

export const metadata = {
  title: "Vasudev Rao — Senior Data Engineer | Batch & Streaming Systems",
  description: "Senior Data Engineer with 6+ years designing distributed data platforms, real-time Kafka + Spark streaming pipelines, and cost-optimized data warehouses on AWS and GCP.",
  keywords: ["Vasudev Rao", "Senior Data Engineer", "PySpark", "Databricks", "Apache Kafka", "Snowflake", "dbt", "Delta Lake", "AWS Data Engineer", "GCP Data Engineer"],
  alternates: { canonical: "https://vasudevarao.com" },
  openGraph: {
    type: "website",
    url: "https://vasudevarao.com",
    title: "Vasudev Rao — Senior Data Engineer | Batch & Streaming Systems",
    description: "6+ years building distributed data platforms, streaming pipelines, and cost-optimised warehouses.",
    images: [{ url: "https://vasudevarao.com/vasudev-rao.png", width: 400, height: 400 }],
  },
};

export default function HomePage() {
  const posts = getAllPosts().slice(0, 4);
  const featured = projects.filter((p) => p.featured).slice(0, 3);
  const other = projects.filter((p) => !p.featured).slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Vasudev Rao",
    url: "https://vasudevarao.com",
    jobTitle: "Senior Data Engineer",
    description: "Senior Data Engineer with 6+ years building distributed data systems — 1B+ events/day Kafka+Spark streaming, Databricks lakehouse architecture, and 100TB+ warehouse migrations on AWS and GCP.",
    knowsAbout: ["Apache Spark","PySpark","Apache Kafka","Databricks","Delta Lake","Snowflake","BigQuery","AWS","GCP","dbt","Airflow","Apache Iceberg","Great Expectations","Terraform","MLflow","Redis","Kubernetes"],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ══════════════════════════════════════════════════════
          HERO — "Signal & Precision"
      ══════════════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex flex-col justify-center pt-36 pb-24 overflow-hidden">

        {/* ── Network SVG background ── */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
          <svg className="absolute inset-0 w-full h-full opacity-[0.18]" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice">
            <defs>
              <radialGradient id="fade" cx="50%" cy="50%" r="60%">
                <stop offset="0%" stopColor="white" stopOpacity="1"/>
                <stop offset="100%" stopColor="white" stopOpacity="0"/>
              </radialGradient>
              <mask id="vignette"><rect width="1440" height="900" fill="url(#fade)"/></mask>
            </defs>
            <g mask="url(#vignette)" stroke="#00F2FF" fill="none">
              {/* Node network lines */}
              <line x1="200" y1="150" x2="500" y2="300" strokeWidth="0.8" strokeDasharray="4 8" opacity="0.6"/>
              <line x1="500" y1="300" x2="800" y2="200" strokeWidth="0.8" strokeDasharray="4 8" opacity="0.6"/>
              <line x1="800" y1="200" x2="1100" y2="400" strokeWidth="0.8" strokeDasharray="4 8" opacity="0.6"/>
              <line x1="1100" y1="400" x2="1300" y2="250" strokeWidth="0.8" strokeDasharray="4 8" opacity="0.6"/>
              <line x1="300" y1="500" x2="600" y2="400" strokeWidth="0.8" strokeDasharray="4 8" opacity="0.5"/>
              <line x1="600" y1="400" x2="900" y2="550" strokeWidth="0.8" strokeDasharray="4 8" opacity="0.5"/>
              <line x1="900" y1="550" x2="1200" y2="450" strokeWidth="0.8" strokeDasharray="4 8" opacity="0.5"/>
              <line x1="500" y1="300" x2="600" y2="400" strokeWidth="0.8" opacity="0.4"/>
              <line x1="800" y1="200" x2="900" y2="550" strokeWidth="0.8" opacity="0.3"/>
              <line x1="1100" y1="400" x2="1200" y2="450" strokeWidth="0.8" opacity="0.4"/>
              <line x1="150" y1="600" x2="300" y2="500" strokeWidth="0.8" strokeDasharray="3 6" opacity="0.4"/>
              <line x1="700" y1="700" x2="900" y2="550" strokeWidth="0.8" strokeDasharray="3 6" opacity="0.35"/>
              <line x1="1100" y1="700" x2="1200" y2="450" strokeWidth="0.8" strokeDasharray="3 6" opacity="0.35"/>
              {/* Nodes */}
              {[
                [200,150],[500,300],[800,200],[1100,400],[1300,250],
                [300,500],[600,400],[900,550],[1200,450],
                [150,600],[700,700],[1100,700],
              ].map(([x,y],i) => (
                <g key={i}>
                  <circle cx={x} cy={y} r="4" fill="#00F2FF" opacity="0.7"/>
                  <circle cx={x} cy={y} r="8" fill="none" stroke="#00F2FF" strokeWidth="0.6" opacity="0.3"/>
                </g>
              ))}
            </g>
          </svg>

          {/* Large phosphor glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] pointer-events-none"
            style={{ background: "radial-gradient(ellipse 70% 60% at 50% 45%, rgba(0,242,255,0.07) 0%, rgba(167,139,250,0.04) 50%, transparent 75%)" }}/>
        </div>

        <div className="max-w-7xl mx-auto px-6 w-full relative" style={{ zIndex: 1 }}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* ── Left content ── */}
            <div className="lg:col-span-7 space-y-8">

              {/* Status pill */}
              <div className="animate-on-load animate-fade-up" style={{ animationFillMode: "forwards" }}>
                <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[rgba(0,242,255,0.2)] bg-[rgba(0,242,255,0.05)]">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00F2FF] opacity-60"/>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00F2FF]"/>
                  </span>
                  <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-[#00F2FF]/80">
                    Open to Senior DE Roles
                  </span>
                </div>
              </div>

              {/* Headline */}
              <div className="animate-on-load animate-fade-up delay-100" style={{ animationFillMode: "forwards" }}>
                <div className="font-mono text-[11px] tracking-[0.2em] uppercase mb-3" style={{ color: "rgba(0,242,255,0.55)" }}>
                  Senior · Staff · Principal Data Engineer
                </div>
                <h1 className="font-body font-800 leading-[0.93] tracking-[-0.038em] text-white"
                  style={{ fontSize: "clamp(50px, 6.5vw, 84px)" }}>
                  Pipelines that<br/>
                  scale. Systems<br/>
                  <span style={{ color: "#00F2FF" }}>that don't fail.</span>
                </h1>
              </div>

              {/* Value proposition */}
              <div className="animate-on-load animate-fade-up delay-200" style={{ animationFillMode: "forwards" }}>
                <p className="text-white/55 text-[17px] leading-relaxed max-w-[500px] font-body font-300">
                  6+ years owning production data infrastructure that processes{" "}
                  <span className="text-white/80 font-400">1B+ events/day</span> — Kafka streaming, Databricks lakehouses, and 100TB+ warehouse migrations on{" "}
                  <span className="text-white/80 font-400">AWS · GCP · Databricks</span>.
                  Correctness and fault tolerance are non-negotiable.
                </p>
              </div>

              {/* Key proof points */}
              <div className="animate-on-load animate-fade-up delay-300" style={{ animationFillMode: "forwards" }}>
                <div className="flex flex-col gap-3">
                  {[
                    { icon: Database, text: "Kafka → Spark Streaming: 1B+ events/day, exactly-once, sub-5s latency on AWS EMR" },
                    { icon: Zap,      text: "Databricks medallion lakehouse: 60% faster pipelines, 50+ sources unified, Unity Catalog" },
                    { icon: GitBranch,text: "100TB warehouse migration: Redshift → Snowflake, p95 query time 42s → 11s, zero downtime" },
                  ].map(({ icon: Icon, text }) => (
                    <div key={text} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-md bg-[rgba(0,242,255,0.1)] border border-[rgba(0,242,255,0.18)] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Icon size={12} className="text-[#00F2FF]"/>
                      </div>
                      <span className="text-[14px] text-white/50 font-body">{text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTAs */}
              <div className="animate-on-load animate-fade-up delay-400 flex flex-wrap gap-3 pt-2" style={{ animationFillMode: "forwards" }}>
                <Link href="/contact" className="btn-primary">
                  View My Work
                  <ArrowRight size={14}/>
                </Link>
                <a href="/Vasudev-Rao-Resume.pdf"
                  className="btn-outline">
                  <Download size={14}/>
                  Download CV
                </a>
              </div>
            </div>

            {/* ── Right: Profile card ── */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end animate-on-load animate-fade-up delay-300"
              style={{ animationFillMode: "forwards" }}>
              <div className="relative">
                {/* Glow halo */}
                <div className="absolute inset-0 rounded-3xl blur-3xl scale-110 pointer-events-none"
                  style={{ background: "radial-gradient(circle, rgba(0,242,255,0.14) 0%, rgba(167,139,250,0.08) 60%, transparent 80%)" }}/>

                {/* Card */}
                <div className="relative rounded-2xl overflow-hidden border border-white/[0.07] bg-[#131B2E]" style={{ width: "280px" }}>
                  {/* Top accent line */}
                  <div className="absolute top-0 inset-x-0 h-[1.5px]"
                    style={{ background: "linear-gradient(90deg, transparent, #00F2FF, transparent)" }}/>

                  {/* Photo */}
                  <div className="relative overflow-hidden" style={{ height: "320px" }}>
                    <Image src="/vasudev-rao.png" alt="Vasudev Rao" fill className="object-cover" style={{ objectPosition: "center 10%" }} priority/>
                    <div className="absolute inset-0" style={{ background: "linear-gradient(0deg, #131B2E 0%, transparent 55%)" }}/>
                    {/* DE badge */}
                    <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[rgba(8,12,20,0.75)] backdrop-blur-sm border border-[rgba(0,242,255,0.2)]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00F2FF]"/>
                      <span className="font-mono text-[10px] text-[#00F2FF] tracking-wider">Senior DE</span>
                    </div>
                  </div>

                  {/* Card body */}
                  <div className="p-5 space-y-4">
                    <div>
                      <h3 className="font-body font-700 text-[18px] text-white tracking-tight">Vasudev Rao</h3>
                      <p className="font-mono text-[10px] text-white/40 tracking-[0.14em] uppercase mt-0.5">
                        Data Engineer · 6+ Years
                      </p>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      {[["1B+","Events/Day"],["< 5s","Stream Latency"],["99.9%","Pipeline SLA"]].map(([v,l]) => (
                        <div key={l} className="stat-box text-center p-3">
                          <p className="font-body font-800 text-[15px] text-[#00F2FF]">{v}</p>
                          <p className="font-mono text-[9px] text-white/35 uppercase tracking-wider mt-0.5">{l}</p>
                        </div>
                      ))}
                    </div>
                    <Link href="/contact" className="btn-primary w-full justify-center text-[11px] py-2.5">
                      Book Strategy Audit <ArrowRight size={12}/>
                    </Link>
                  </div>
                </div>

                {/* Floating tech pills */}
                {[
                  { label: "PySpark",    top: "28%",  left: "-70px" },
                  { label: "Kafka",      top: "18%",  right: "-80px" },
                  { label: "Snowflake",  top: "62%",  left: "-72px" },
                ].map(({ label, ...pos }) => (
                  <div key={label} className="absolute hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/[0.06] bg-[rgba(14,19,32,0.85)] backdrop-blur-sm" style={pos}>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00F2FF]/60"/>
                    <span className="font-mono text-[10px] text-white/50 whitespace-nowrap">{label}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          TECH MARQUEE
      ══════════════════════════════════════════════════════ */}
      <section className="py-10 overflow-hidden relative border-y border-white/[0.04]">
        <div className="absolute inset-0 pointer-events-none" style={{
          background: "linear-gradient(90deg, #080C14 0%, transparent 16%, transparent 84%, #080C14 100%)",
          zIndex: 2,
        }}/>
        <div className="flex items-center" style={{
          width: "max-content",
          animation: "marquee 50s linear infinite",
          willChange: "transform",
        }}>
          {[...techStack.slice(0,18), ...techStack.slice(0,18)].map((t, i) => (
            <div key={i} className="flex items-center flex-shrink-0">
              <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-white/25 whitespace-nowrap px-7">{t}</span>
              <span style={{ color: "rgba(0,242,255,0.25)", fontSize: "0.45rem" }}>◆</span>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          STATS
      ══════════════════════════════════════════════════════ */}
            <BentoSection />

      <div className="section-divider"/>

      {/* ══════════════════════════════════════════════════════
          PROJECTS
      ══════════════════════════════════════════════════════ */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-16">
            <div>
              <p className="eyebrow mb-4">Featured Work</p>
              <h2 className="font-body font-800 text-[48px] leading-[1.0] tracking-[-0.03em] text-white">
                Selected Projects
              </h2>
            </div>
            <Link href="/projects"
              className="hidden sm:flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.12em] text-white/35 hover:text-[#00F2FF] transition-colors group">
              All Projects <MoveRight size={13} className="group-hover:translate-x-1 transition-transform"/>
            </Link>
          </div>

          <div className="space-y-4 mb-10">
            {featured.map((p, i) => (
              <ProjectCard key={p.id} project={p} featured index={i}/>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {other.map((p) => (
              <ProjectCard key={p.id} project={p}/>
            ))}
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════════════
          SYSTEM DESIGN PATTERNS
      ══════════════════════════════════════════════════════ */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14">
            <p className="eyebrow mb-4">System Design</p>
            <h2 className="font-body font-800 text-[48px] leading-[1.0] tracking-[-0.03em] text-white">
              Architecture Patterns
            </h2>
            <p className="text-white/45 text-[15px] mt-4 max-w-lg font-body font-300 leading-relaxed">
              Production patterns I design, operate, and own in production — built for correctness, scale, and operational simplicity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                title: "Lambda + Kappa Architecture",
                badge: "Streaming",
                badgeColor: "#00F2FF",
                desc: "Unified batch + streaming pipelines. Kafka for real-time ingestion, Spark Structured Streaming for micro-batch processing, Delta Lake for atomic writes. Exactly-once via idempotent MERGE operations.",
                layers: ["Kafka (RF=3)", "Spark SS + Watermarks", "Delta Lake MERGE", "Looker / BI"],
                layerColor: "#00F2FF",
              },
              {
                title: "Medallion Lakehouse",
                badge: "Lakehouse",
                badgeColor: "#F5A623",
                desc: "Bronze → Silver → Gold architecture on Databricks. Raw CDC in Bronze, type-safe contracts in Silver via dbt + Great Expectations, business-ready aggregations in Gold served via Photon.",
                layers: ["Bronze (raw · CDC)", "Silver (dbt · tested)", "Gold (Photon · KPIs)", "Unity Catalog lineage"],
                layerColor: "#F5A623",
              },
              {
                title: "Dual-Mode Feature Store",
                badge: "ML Infra",
                badgeColor: "#C4B5FD",
                desc: "Point-in-time correct offline training store (Delta Lake) and low-latency online serving store (Redis, p99 < 8ms) backed by identical feature definitions. Eliminates training-serving skew.",
                layers: ["PySpark batch → Delta", "Redis online serving", "MLflow lineage", "p99 < 8ms inference"],
                layerColor: "#C4B5FD",
              },
            ].map(({ title, badge, badgeColor, desc, layers, layerColor }) => (
              <div key={title} className="bento" style={{ padding: "1.75rem", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg, transparent, ${badgeColor}, transparent)` }}/>
                <div style={{ display: "inline-flex", alignItems: "center", gap: "0.375rem", padding: "0.2rem 0.65rem", borderRadius: "9999px", background: badgeColor + "15", border: `1px solid ${badgeColor}35`, marginBottom: "1rem" }}>
                  <span className="font-mono" style={{ fontSize: 9.5, color: badgeColor, letterSpacing: "0.1em" }}>{badge}</span>
                </div>
                <h3 style={{ fontFamily: "Inter,sans-serif", fontWeight: 700, fontSize: 16, color: "#F0F4FF", letterSpacing: "-0.02em", marginBottom: "0.75rem", lineHeight: 1.3 }}>{title}</h3>
                <p style={{ fontSize: 13, color: "rgba(240,244,255,0.5)", lineHeight: 1.65, fontFamily: "Inter,sans-serif", marginBottom: "1.25rem" }}>{desc}</p>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.35rem" }}>
                  {layers.map((l, i) => (
                    <div key={l} style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                      <div style={{ width: 20, height: 20, borderRadius: "0.3rem", background: layerColor + "15", border: `1px solid ${layerColor}30`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <span style={{ fontFamily: "JetBrains Mono,monospace", fontSize: 8, color: layerColor, fontWeight: 700 }}>{i + 1}</span>
                      </div>
                      <span className="font-mono" style={{ fontSize: 10.5, color: "rgba(240,244,255,0.55)" }}>{l}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          BLOG
      ══════════════════════════════════════════════════════ */}
      <section className="py-28" style={{ background: "linear-gradient(180deg, transparent 0%, rgba(167,139,250,0.018) 50%, transparent 100%)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-16">
            <div>
              <p className="eyebrow mb-4">Writing</p>
              <h2 className="font-body font-800 text-[48px] leading-[1.0] tracking-[-0.03em] text-white">
                Blog &amp; Articles
              </h2>
            </div>
            <Link href="/blog"
              className="hidden sm:flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.12em] text-white/35 hover:text-[#00F2FF] transition-colors group">
              All Articles <MoveRight size={13} className="group-hover:translate-x-1 transition-transform"/>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              {posts.length > 0 ? (
                <div className="card p-6 md:p-8">
                  {posts.map((post) => (
                    <BlogCard key={post.slug} post={post} variant="compact"/>
                  ))}
                </div>
              ) : (
                <div className="card p-16 text-center">
                  <p className="font-body text-2xl font-700 text-white/20 mb-2">No posts yet</p>
                  <p className="text-sm text-white/30">Articles coming soon.</p>
                </div>
              )}
            </div>
            <div><NewsletterCard/></div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          CTA — "The Close"
      ══════════════════════════════════════════════════════ */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative rounded-2xl overflow-hidden border border-[rgba(0,242,255,0.12)]"
            style={{ background: "linear-gradient(135deg, #0E1320 0%, #131B2E 50%, #0E1320 100%)" }}>

            {/* Top accent line */}
            <div className="absolute top-0 inset-x-0 h-[1.5px]"
              style={{ background: "linear-gradient(90deg, transparent, #00F2FF, transparent)" }}/>

            {/* BG glow */}
            <div className="absolute inset-0 pointer-events-none"
              style={{ background: "radial-gradient(ellipse 60% 70% at 50% 50%, rgba(0,242,255,0.06) 0%, transparent 70%)" }}/>

            {/* Network pattern overlay */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.06]"
              style={{
                backgroundImage: "radial-gradient(circle, rgba(0,242,255,0.8) 1px, transparent 1px)",
                backgroundSize: "32px 32px",
              }}/>

            <div className="relative px-12 py-20 md:px-20 md:py-24 text-center">
              <p className="font-mono text-[10px] text-[#00F2FF]/60 tracking-[0.2em] uppercase mb-4">
                Open to Senior Data Engineering Roles
              </p>
              <h2 className="font-body font-800 text-[48px] md:text-[60px] leading-[1.0] tracking-[-0.03em] text-white mb-5">
                Let&apos;s build data systems<br/>
                <span style={{ color: "#00F2FF" }}>
                  that don&apos;t break at 3am.
                </span>
              </h2>
              <p className="text-white/45 text-[17px] max-w-xl mx-auto mb-8 font-body font-300 leading-relaxed">
                Targeting senior and staff-level data engineering roles — fintech, ML infrastructure, and platform teams. Also available for consulting on streaming architecture, Spark performance, and lakehouse design.
              </p>
              {/* ATS keyword signals */}
              <div className="flex flex-wrap justify-center gap-4 mb-10">
                {[
                  "✓ Apache Spark / PySpark",
                  "✓ Kafka + Flink",
                  "✓ Databricks / Delta Lake",
                  "✓ Snowflake / BigQuery",
                  "✓ AWS · GCP",
                ].map(t => (
                  <span key={t} className="font-mono text-[10px] text-[#00F2FF]/55 px-3 py-1 rounded-full border border-[rgba(0,242,255,0.12)] bg-[rgba(0,242,255,0.04)]">{t}</span>
                ))}
              </div>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="/contact" className="btn-primary text-[14px] py-4 px-10"
                  style={{ boxShadow: "0 0 40px rgba(0,242,255,0.25), 0 0 80px rgba(0,242,255,0.1)" }}>
                  Start a Conversation <ArrowRight size={16}/>
                </Link>
                <a href="/Vasudev-Rao-Resume.pdf" className="btn-outline text-[13px] py-3.5 px-8">
                  <Download size={15}/> Download CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
