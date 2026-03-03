import { Metadata } from "next";
import { Container } from "@/components/Container";
import { skills, stats } from "@/data/skills";
import Image from "next/image";
import { Download, MapPin, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "About — Vasudev Rao",
  description: "Senior Data Engineer with 6+ years building distributed data platforms on AWS and GCP using PySpark, Databricks, Kafka, Snowflake, dbt, and Airflow.",
  keywords: ["Vasudev Rao", "Senior Data Engineer", "PySpark", "Databricks", "Kafka", "Snowflake", "AWS", "GCP", "Data Engineer Bengaluru"],
  alternates: { canonical: "https://vasudevarao.com/about" },
  openGraph: {
    type: "profile",
    url: "https://vasudevarao.com/about",
    title: "About Vasudev Rao — Senior Data Engineer",
    description: "6+ years building distributed data platforms on AWS and GCP using PySpark, Databricks, Kafka, and Snowflake.",
    siteName: "Vasudev Rao",
    images: [{ url: "https://vasudevarao.com/vasudev-rao.png", width: 400, height: 400, alt: "Vasudev Rao" }],
  },
  twitter: {
    card: "summary",
    title: "About Vasudev Rao — Senior Data Engineer",
    description: "6+ years building distributed data platforms on AWS and GCP.",
    creator: "@vasudevarao",
  },
};

const timeline = [
  { period: "2020 – Present", role: "Senior Data Engineer", company: "Current Role", items: [
    "Engineered batch and streaming pipelines processing 1B+ events/day using PySpark, Databricks, and Delta Lake with exactly-once delivery semantics",
    "Built Kafka → Spark Structured Streaming system with watermarking, dead-letter routing, and schema evolution via Confluent Schema Registry",
    "Reduced Spark compute and S3 storage costs by 40% through lakehouse consolidation, Z-ordering, and storage tiering",
    "Established CI/CD for data pipelines using Docker, GitHub Actions, and Terraform; introduced dbt for transformation governance",
    "Migrated legacy Redshift and Oracle workloads to Snowflake and BigQuery; achieved 70% query performance improvement through physical data modeling",
  ]},
  { period: "2018 – 2020", role: "Data Engineer", company: "Previous Role", items: [
    "Designed and maintained Airflow DAGs for multi-source ELT workflows with dependency-aware scheduling and SLA alerting",
    "Reduced BigQuery query cost by 60% by introducing date partitioning, clustering on high-cardinality keys, and materialized views",
    "Built cloud-native ingestion pipelines from REST APIs, CDC streams, and file-based sources into GCS and BigQuery",
    "Contributed to dimensional data model design across 10+ business domains, establishing naming conventions and data contracts",
  ]},
];

export default function AboutPage() {
  return (
    <div className="pt-28 pb-32">
      <div className="max-w-7xl mx-auto px-6">

        {/* ── Header ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24 items-end">
          <div className="lg:col-span-7">
            <p className="eyebrow mb-6">About Me</p>
            <h1 className="display-text text-6xl lg:text-7xl text-ink">
              I design, build<br />&amp; <em>operate</em> production-grade<br />data systems.
            </h1>
          </div>
          <div className="lg:col-span-5">
            <p className="text-ink-secondary leading-relaxed text-base">
              6+ years delivering production data systems across AWS, GCP, and Databricks — covering ingestion, transformation, storage, orchestration, and quality monitoring at scale.
            </p>
          </div>
        </div>

        {/* ── Profile ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24">
          {/* Image */}
          <div className="lg:col-span-4">
            <div className="relative">
              <div className="absolute inset-0 rounded-3xl blur-2xl" style={{ background: "radial-gradient(circle, rgba(79,142,247,0.15) 0%, rgba(123,94,167,0.08) 50%, transparent 70%)", transform: "scale(1.2)" }} />
              <div className="relative rounded-3xl overflow-hidden border border-white/[0.06] aspect-[4/5]">
                <Image src="/vasudev-rao.png" alt="Vasudev Rao" fill className="object-cover" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, #060b18 0%, transparent 60%)" }} />
                <div className="absolute bottom-5 left-5 right-5">
                  <div className="grid grid-cols-3 gap-2">
                    {[["6+","Yrs Prod DE"],["1B+","Events/Day"],["40%","Cost Cut"]].map(([v,l]) => (
                      <div key={l} className="stat-box text-center py-2">
                        <p className="font-display font-800 text-lg text-electric">{v}</p>
                        <p className="font-mono text-[9px] text-ink-muted uppercase">{l}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {/* Meta */}
            <div className="mt-6 space-y-2.5">
              {[["📍","India"],["💼","Open to opportunities"],["⚡","6+ years experience"]].map(([e,t]) => (
                <div key={t} className="flex items-center gap-2.5 text-sm text-ink-secondary">
                  <span>{e}</span>{t}
                </div>
              ))}
            </div>
            <a href="/Vasudev-Rao-Resume.pdf" className="btn-primary mt-6 inline-flex text-xs">
              <Download size={13} />Download CV (PDF)
            </a>
          </div>

          {/* Bio */}
          <div className="lg:col-span-8 space-y-6">
            <p className="text-ink-secondary text-base leading-relaxed">
              <span className="text-ink font-500">Senior Data Engineer</span> with 6+ years in production across <span className="text-ink font-500">AWS, GCP, and Databricks</span>. Work covers high-throughput batch ingestion, distributed transformation, lakehouse storage design, pipeline orchestration, and data quality enforcement at scale.
            </p>
            <p className="text-ink-secondary text-base leading-relaxed">
              Core technical focus: Spark performance tuning, Delta Lake table design, and Kafka-based streaming with exactly-once semantics. Correctness, pipeline observability, and failure recovery are treated as system requirements — not operational afterthoughts.
            </p>
            <p className="text-ink-secondary text-base leading-relaxed">
              Delivered pipelines handling <span className="text-ink font-500">1B+ events/day</span>, reduced Spark and storage costs by 40% through lakehouse consolidation, and built real-time feature systems with p99 <span className="text-ink font-500">&lt;10ms</span> serving latency. Systems are designed to stay correct under load, recover from failure, and remain operable by teams beyond the original author.
            </p>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-3 pt-4">
              {stats.map((s) => (
                <div key={s.label} className="stat-box">
                  <p className="font-display font-800 text-3xl text-electric mb-1">{s.value}</p>
                  <p className="font-label font-600 text-xs uppercase tracking-[0.1em] text-ink-secondary">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Skills ── */}
        <div className="mb-24">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="eyebrow mb-4">Tech Stack</p>
              <h2 className="display-text text-4xl text-ink">Skills &amp; <em>Technologies</em></h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="card p-6">
                <p className="eyebrow text-[10px] mb-6" style={{ letterSpacing: "0.2em" }}>{category}</p>
                <div className="space-y-4">
                  {items.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-1.5">
                        <span className="text-sm text-ink-secondary">{skill.name}</span>
                        <span className="font-mono text-[10px] text-electric">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <div className="skill-bar-fill" style={{ width: `${skill.level}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Experience ── */}
        <div>
          <p className="eyebrow mb-4">Experience</p>
          <h2 className="display-text text-4xl text-ink mb-12">Work <em>History</em></h2>
          <div className="space-y-6">
            {timeline.map((item, i) => (
              <div key={i} className="card p-7 grid grid-cols-1 lg:grid-cols-12 gap-6">
                <div className="lg:col-span-3">
                  <p className="font-mono text-xs text-electric mb-2">{item.period}</p>
                  <h3 className="font-display font-800 text-lg text-ink mb-1">{item.role}</h3>
                  <p className="font-label font-600 text-xs uppercase tracking-[0.1em] text-ink-secondary">{item.company}</p>
                </div>
                <div className="lg:col-span-9">
                  <ul className="space-y-2.5">
                    {item.items.map((point) => (
                      <li key={point} className="flex items-start gap-2.5 text-sm text-ink-secondary">
                        <span className="text-electric font-mono mt-0.5 flex-shrink-0">→</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
