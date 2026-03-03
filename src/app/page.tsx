import { Container } from "@/components/Container";
import { ProjectCard } from "@/components/ProjectCard";
import { BlogCard } from "@/components/BlogCard";
import { NewsletterCard } from "@/components/NewsletterCard";
import { getAllPosts } from "@/lib/blog";
import { stats } from "@/data/skills";
import projectsData from "@/data/projects.json";
import { Project } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Download, ArrowUpRight, MoveRight } from "lucide-react";

const projects = projectsData as Project[];

const techStack = [
  "Databricks","Apache Spark","PySpark","Snowflake","BigQuery","Delta Lake",
  "Apache Kafka","Apache Airflow","AWS Glue","AWS EMR","GCP Dataflow",
  "Apache Iceberg","dbt","PostgreSQL","Python","Terraform","Docker","Kubernetes",
  "Databricks","Apache Spark","PySpark","Snowflake","BigQuery","Delta Lake",
  "Apache Kafka","Apache Airflow","AWS Glue","AWS EMR","GCP Dataflow",
  "Apache Iceberg","dbt","PostgreSQL","Python","Terraform","Docker","Kubernetes",
];

export const metadata = {
  title: "Vasudev Rao — Senior Data Engineer | Batch & Streaming Systems",
  description: "Senior Data Engineer with 6+ years designing distributed data platforms, real-time Kafka + Spark streaming systems, and Delta Lake lakehouses on AWS and GCP. Open to senior and staff-level roles.",
  keywords: ["Vasudev Rao", "Senior Data Engineer", "PySpark", "Databricks", "Apache Kafka", "Snowflake", "Delta Lake", "AWS Data Engineer", "GCP Data Engineer", "Data Engineer Bengaluru India", "Batch Streaming Systems"],
  alternates: { canonical: "https://vasudevarao.com" },
  openGraph: {
    type: "website",
    url: "https://vasudevarao.com",
    title: "Vasudev Rao — Senior Data Engineer | Batch & Streaming Systems",
    description: "6+ years building distributed data platforms, Kafka + Spark streaming, and Delta Lake lakehouses on AWS and GCP.",
    siteName: "Vasudev Rao",
    images: [{ url: "https://vasudevarao.com/vasudev-rao.png", width: 400, height: 400, alt: "Vasudev Rao — Senior Data Engineer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vasudev Rao — Senior Data Engineer",
    description: "6+ years building distributed data platforms, Kafka + Spark streaming, and Delta Lake lakehouses.",
    creator: "@vasudevarao",
    images: ["https://vasudevarao.com/vasudev-rao.png"],
  },
};

export default function HomePage() {
  const posts = getAllPosts().slice(0, 4);
  const featured = projects.filter((p) => p.featured).slice(0, 3);
  const other = projects.filter((p) => !p.featured).slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://vasudevarao.com/#person",
        "name": "Vasudev Rao",
        "url": "https://vasudevarao.com",
        "image": "https://vasudevarao.com/vasudev-rao.png",
        "jobTitle": "Senior Data Engineer",
        "description": "Senior Data Engineer with 6+ years building large-scale data platforms, real-time streaming systems, and AI-ready pipelines.",
        "sameAs": [
          "https://github.com/vasudevarao",
          "https://linkedin.com/in/vasudevarao"
        ],
        "knowsAbout": ["Apache Spark", "PySpark", "Apache Kafka", "Databricks", "Delta Lake", "Snowflake", "BigQuery", "AWS", "GCP", "dbt", "Airflow", "Data Engineering"]
      },
      {
        "@type": "WebSite",
        "@id": "https://vasudevarao.com/#website",
        "url": "https://vasudevarao.com",
        "name": "Vasudev Rao — Senior Data Engineer",
        "description": "Portfolio and technical blog of Vasudev Rao, Senior Data Engineer.",
        "author": { "@id": "https://vasudevarao.com/#person" }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* ════════════════════════════════════ HERO */}
      <section className="relative min-h-screen flex flex-col justify-center pt-36 pb-20 overflow-hidden">
        {/* Layered ambient glows — navy / indigo / purple */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[700px] pointer-events-none"
          style={{ background: "radial-gradient(ellipse 60% 50% at 50% 40%, rgba(79,142,247,0.09) 0%, rgba(123,94,167,0.05) 55%, transparent 75%)" }} />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none"
          style={{ background: "radial-gradient(circle at 80% 20%, rgba(167,139,250,0.06) 0%, transparent 60%)" }} />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] pointer-events-none"
          style={{ background: "radial-gradient(circle at 20% 80%, rgba(59,125,232,0.07) 0%, transparent 60%)" }} />

        {/* Horizontal scan line */}
        <div className="absolute left-0 right-0 h-px pointer-events-none"
          style={{ background: "linear-gradient(90deg, transparent, rgba(79,142,247,0.35), transparent)", animation: "scan 8s linear infinite", top: 0 }} />

        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* ── Left content ── */}
            <div className="lg:col-span-7 space-y-8">
              {/* Availability badge */}
              <div className="animate-on-load animate-fade-up" style={{ animationDelay: "0ms", animationFillMode: "forwards" }}>
                <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass border border-electric-border">
                  <span className="w-2 h-2 rounded-full bg-emerald animate-pulse" />
                  <span className="font-label font-600 text-xs tracking-[0.12em] uppercase text-ink-secondary">
                    Open to Senior DE Roles
                  </span>
                </div>
              </div>

              {/* Main headline */}
              <div className="animate-on-load animate-fade-up delay-100" style={{ animationFillMode: "forwards" }}>
                <h1 className="display-text text-5xl md:text-6xl xl:text-7xl text-ink">
                  Senior Data<br />
                  Engineer —<br />
                  Batch &amp; <em>Streaming</em><br />
                  Systems
                </h1>
              </div>

              {/* Description */}
              <div className="animate-on-load animate-fade-up delay-200" style={{ animationFillMode: "forwards" }}>
                <p className="text-ink-secondary text-base leading-relaxed max-w-lg">
                  6+ years designing and operating distributed data systems at scale — batch pipelines, streaming platforms, and lakehouse architecture on <span className="text-ink font-500">AWS and GCP</span>. Focused on correctness, fault tolerance, and operational simplicity.
                </p>
              </div>

              {/* Highlights */}
              <div className="animate-on-load animate-fade-up delay-300" style={{ animationFillMode: "forwards" }}>
                <div className="flex flex-col gap-2.5">
                  {[
                    "Engineered pipelines processing 1B+ events/day on Databricks + Delta Lake",
                    "Reduced Spark + storage costs by 40% via lakehouse consolidation on AWS",
                    "Designed Kafka → Spark Structured Streaming with exactly-once delivery guarantees",
                  ].map((h) => (
                    <div key={h} className="flex items-center gap-3">
                      <span className="text-electric font-mono text-xs">⚡</span>
                      <span className="text-sm text-ink-secondary">{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTAs */}
              <div className="animate-on-load animate-fade-up delay-400 flex flex-wrap gap-3 pt-2" style={{ animationFillMode: "forwards" }}>
                <a href="/Vasudev-Rao-Resume.pdf" className="btn-primary">
                  <Download size={14} />
                  Download CV
                </a>
                <Link href="/projects" className="btn-outline">
                  View Projects
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* ── Right: Profile card ── */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end animate-on-load animate-fade-up delay-300" style={{ animationFillMode: "forwards" }}>
              <div className="relative">
                {/* Glow backdrop */}
                <div className="absolute inset-0 rounded-3xl blur-3xl" style={{ background: "radial-gradient(circle, rgba(79,142,247,0.18) 0%, transparent 70%)", transform: "scale(1.3)" }} />

                {/* Main card */}
                <div className="relative card p-0 w-72 overflow-hidden">
                  {/* Image */}
                  <div className="relative h-80 overflow-hidden">
                    <Image
                      src="/vasudev-rao.png"
                      alt="Vasudev Rao"
                      fill className="object-cover"
                      priority
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0" style={{ background: "linear-gradient(0deg, #0d1326 0%, transparent 50%)" }} />
                    {/* Top badge */}
                    <div className="absolute top-4 left-4 glass rounded-xl px-3 py-1.5 border border-electric-border">
                      <span className="font-mono text-xs text-electric">Senior DE</span>
                    </div>
                  </div>

                  {/* Card body */}
                  <div className="p-5 space-y-4">
                    <div>
                      <h3 className="font-display font-800 text-lg text-ink">Vasudev Rao</h3>
                      <p className="text-sm text-ink-secondary font-label tracking-wider uppercase text-xs">Data Engineer · 6+ Years</p>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      {[["1B+","Events / Day"],["40%","Cloud Savings"],["50+","Sources Unified"]].map(([v,l]) => (
                        <div key={l} className="stat-box text-center">
                          <p className="font-display font-800 text-base text-electric">{v}</p>
                          <p className="font-mono text-[10px] text-ink-muted uppercase tracking-wider mt-0.5">{l}</p>
                        </div>
                      ))}
                    </div>
                    <Link href="/contact" className="btn-primary w-full justify-center text-xs py-2.5">
                      Get In Touch
                      <ArrowRight size={13} />
                    </Link>
                  </div>
                </div>

                {/* Floating badges */}
                <div className="absolute -left-14 top-1/3 glass rounded-xl px-3 py-2 border border-white/[0.06] hidden lg:block">
                  <p className="font-mono text-[10px] text-electric uppercase tracking-wider">Kafka</p>
                </div>
                <div className="absolute -right-12 top-1/4 glass rounded-xl px-3 py-2 border border-white/[0.06] hidden lg:block">
                  <p className="font-mono text-[10px] text-electric uppercase tracking-wider">Databricks</p>
                </div>
                <div className="absolute -left-16 bottom-1/4 glass rounded-xl px-3 py-2 border border-white/[0.06] hidden lg:block">
                  <p className="font-mono text-[10px] text-electric uppercase tracking-wider">Snowflake</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════ TECH MARQUEE */}
      <section className="py-10 border-y border-white/[0.04] overflow-hidden relative">
        <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(90deg, #060b18 0%, transparent 18%, transparent 82%, #060b18 100%)", zIndex: 2 }} />
        {/* Single element containing 2× the items, animated -50% = seamless loop */}
        <div
          className="flex items-center"
          style={{
            width: "max-content",
            animation: "marquee 40s linear infinite",
            willChange: "transform",
          }}
        >
          {[...techStack.slice(0, 18), ...techStack.slice(0, 18)].map((t, i) => (
            <div key={i} className="flex items-center flex-shrink-0">
              <span className="font-label font-600 text-xs tracking-[0.15em] uppercase text-ink-muted whitespace-nowrap px-7">{t}</span>
              <span style={{ color: "rgba(79,142,247,0.3)", fontSize: "0.55rem" }}>◆</span>
            </div>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════ STATS */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((s, i) => (
              <div key={s.label} className="stat-box group">
                <p className="font-mono text-[10px] text-ink-muted uppercase tracking-[0.15em] mb-2">{`0${i+1}`}</p>
                <p className="font-display font-900 text-4xl text-electric mb-1">{s.value}</p>
                <p className="font-label font-600 text-xs tracking-[0.1em] uppercase text-ink-secondary">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════ ABOUT STRIP */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-4 sticky top-28">
              <p className="eyebrow mb-5">About Me</p>
              <h2 className="display-text text-4xl text-ink mb-6">
                I design, build &amp;<br/><em>operate</em> production-grade<br/>data systems.
              </h2>
              <Link href="/about" className="btn-outline inline-flex text-xs">
                Full Profile
                <ArrowRight size={13} />
              </Link>
            </div>
            <div className="lg:col-span-8 space-y-6">
              <p className="text-ink-secondary text-base leading-relaxed">
                <span className="text-ink font-500">Senior Data Engineer</span> with 6+ years in production across <span className="text-ink font-500">AWS, GCP, and Databricks</span>. Work spans high-throughput ingestion, distributed transformation, lakehouse storage, pipeline orchestration, and data quality enforcement at scale.
              </p>
              <p className="text-ink-secondary text-base leading-relaxed">
                Core focus: Spark performance tuning, Delta Lake table design, and Kafka-based streaming with exactly-once semantics. Data correctness, pipeline observability, and failure recovery are treated as system requirements — not operational concerns.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="card p-5">
                  <p className="eyebrow text-[10px] mb-4" style={{ letterSpacing: "0.18em" }}>What I Do</p>
                  <ul className="space-y-2">
                    {["Design and operate high-throughput batch pipelines","Build stream-processing systems with delivery guarantees","Architect open lakehouses on Delta Lake and Apache Iceberg"].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-ink-secondary">
                        <span className="text-electric mt-0.5 flex-shrink-0 font-mono text-xs">→</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="card p-5">
                  <p className="eyebrow text-[10px] mb-4" style={{ letterSpacing: "0.18em" }}>Focusing On</p>
                  <ul className="space-y-2">
                    {["Streaming feature pipelines for credit and fraud scoring","Vector store integration for LLM retrieval workloads","ML platform and model serving infrastructure (MLOps)"].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-ink-secondary">
                        <span className="text-electric mt-0.5 flex-shrink-0 font-mono text-xs">→</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════ PROJECTS */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-14">
            <div>
              <p className="eyebrow mb-4">Featured Work</p>
              <h2 className="display-text text-5xl text-ink">Projects</h2>
            </div>
            <Link href="/projects" className="hidden sm:flex items-center gap-2 text-xs font-label font-600 uppercase tracking-[0.12em] text-ink-secondary hover:text-electric transition-colors group">
              All Projects <MoveRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Featured list — large editorial rows */}
          <div className="space-y-4 mb-10">
            {featured.map((p, i) => (
              <ProjectCard key={p.id} project={p} featured index={i} />
            ))}
          </div>

          {/* Other — grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {other.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════ BLOG */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-14">
            <div>
              <p className="eyebrow mb-4">Writing</p>
              <h2 className="display-text text-5xl text-ink">Blog & <em>Articles</em></h2>
            </div>
            <Link href="/blog" className="hidden sm:flex items-center gap-2 text-xs font-label font-600 uppercase tracking-[0.12em] text-ink-secondary hover:text-electric transition-colors group">
              All Articles <MoveRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              {posts.length > 0 ? (
                <div className="card p-6 md:p-8">
                  {posts.map((post) => (
                    <BlogCard key={post.slug} post={post} variant="compact" />
                  ))}
                </div>
              ) : (
                <div className="card p-16 text-center">
                  <p className="font-display text-2xl font-800 text-ink-muted mb-2">No posts yet</p>
                  <p className="text-sm text-ink-muted">Articles coming soon.</p>
                </div>
              )}
            </div>
            <div>
              <NewsletterCard />
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════ CTA STRIP */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative card p-12 md:p-20 text-center overflow-hidden">
            <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(79,142,247,0.07) 0%, transparent 70%)" }} />
            <div className="absolute top-0 inset-x-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(79,142,247,0.35), transparent)" }} />
            <p className="eyebrow justify-center mb-6">Get In Touch</p>
            <h2 className="display-text text-5xl md:text-6xl text-ink mb-6">
              Available for senior<br />data engineering <em>roles</em>
            </h2>
            <p className="text-ink-secondary max-w-lg mx-auto mb-10 leading-relaxed">
              Open to senior and staff-level data engineering positions. Also available for consulting on data platform architecture, streaming system design, and lakehouse migrations — particularly in fintech and ML infrastructure.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Start a Conversation
                <ArrowRight size={14} />
              </Link>
              <a href="mailto:vasudev@example.com" className="btn-outline">
                Email Me Directly
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
