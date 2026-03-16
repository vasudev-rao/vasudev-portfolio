import { Metadata } from "next";
import { skills, stats } from "@/data/skills";
import Image from "next/image";
import { Download, MapPin, Zap, Clock, CheckCircle2, TrendingUp, ArrowRight, Database, Activity } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About — Vasudev Rao | Senior Data Engineer",
  description: "Senior Data Engineer with 6+ years designing distributed data systems at scale — 1B+ events/day Kafka streaming, Databricks medallion lakehouse, 100TB+ warehouse migrations. Expert in PySpark, Snowflake, BigQuery, AWS, GCP, dbt.",
  keywords: ["Vasudev Rao","Senior Data Engineer","Staff Data Engineer","PySpark","Databricks","Apache Kafka","Snowflake","dbt","Delta Lake","Apache Iceberg","AWS Data Engineer","GCP Data Engineer","Apache Spark","Terraform","Airflow","BigQuery","Data Platform Engineer","Streaming Data Engineer","Lakehouse Architecture","Fintech Data Engineer"],
  alternates: { canonical: "https://vasudevarao.com/about" },
  openGraph: {
    type: "profile", url: "https://vasudevarao.com/about",
    title: "About Vasudev Rao — Senior Data Engineer",
    description: "6+ years building distributed data platforms, streaming pipelines, and lakehouse architecture on AWS and GCP.",
    images: [{ url: "https://vasudevarao.com/vasudev-rao.png", width: 400, height: 400 }],
  },
};

const CYAN = "#00F2FF";

const timeline = [
  { period: "2023 – Present", role: "Senior Data Engineer", company: "Fintech Platform (100K+ apps/day)", items: [
    "Kafka → PySpark real-time credit decisioning pipeline. Reduced decision latency from 48 hours to under 2 minutes while maintaining 95%+ model accuracy at 100K+ applications/day",
    "Built ML Feature Store on Databricks serving 1,000+ features with point-in-time correctness for offline training and sub-10ms retrieval for online inference across 4 ML teams",
    "Designed cost governance framework with auto-remediation across 20+ Databricks workspaces — reduced combined AWS + GCP data platform spend by 40% within 90 days",
  ]},
  { period: "2020 – 2023", role: "Data Platform Engineer", company: "Enterprise Data Platform", items: [
    "Built Kafka → Spark Structured Streaming pipelines processing 1B+ events/day with exactly-once delivery guarantees to Delta Lake — reduced end-to-end latency from minutes to under 5 seconds",
    "Replaced 50+ siloed ingestion jobs with a unified Databricks medallion lakehouse. Cut pipeline execution time by 60% and eliminated cross-team schema inconsistencies with Unity Catalog",
    "Led migration of 100TB from Redshift + Oracle to Snowflake + BigQuery using dual-write validation strategy — zero downtime, 70% query performance improvement",
  ]},
  { period: "2018 – 2020", role: "Data Engineer", company: "Analytics Consultancy", items: [
    "Designed Airflow DAGs for multi-source ELT workflows across 50+ upstream sources into BigQuery and Snowflake",
    "Reduced BigQuery costs 60% via date partitioning, clustering, and materialized view optimisation",
    "Built cloud-native ingestion pipelines from REST APIs, CDC streams, and file sources into GCS and BigQuery",
  ]},
];

const whyMe = [
  { icon: Activity,    color: "#00F2FF", title: "Correctness First",        desc: "Exactly-once delivery, idempotent writes, and late-event handling are system requirements — not afterthoughts. Pipelines that are correct under failure." },
  { icon: TrendingUp,  color: "#C4B5FD", title: "Performance at Scale",     desc: "1B+ events/day Spark pipelines, sub-10ms feature serving, and 70% query improvements through physical data modelling and smart partitioning." },
  { icon: Zap,         color: "#F5A623", title: "Operational Simplicity",   desc: "Systems built for observability — structured logging, data quality checks, automated alerting, and runbook-driven incident response from day one." },
  { icon: CheckCircle2,color: "#10b981", title: "Lakehouse Architecture",   desc: "Medallion patterns on Delta Lake and Apache Iceberg with Unity Catalog governance. Schema evolution, time-travel, and zero-copy cloning as standard." },
];

export default function AboutPage() {
  return (
    <div className="pt-28 pb-32">
      <div className="max-w-7xl mx-auto px-6">

        {/* ── Hero ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24 items-end">
          <div className="lg:col-span-7">
            <p className="eyebrow mb-6">About Me</p>
            <h1 style={{ fontFamily:"Inter,sans-serif", fontWeight:800, fontSize:"clamp(44px,5vw,68px)", lineHeight:1.0, letterSpacing:"-0.04em", color:"#F0F4FF", marginBottom:"1.5rem" }}>
              Senior Data<br/>
              <span style={{ color: CYAN }}>Engineer.</span>
            </h1>
            <div style={{ display:"flex", flexDirection:"column", gap:"1.25rem" }}>
              <p style={{ fontSize:18, color:"rgba(240,244,255,0.7)", lineHeight:1.7, fontFamily:"Inter,sans-serif", fontWeight:400 }}>
                <span style={{ color:"#F0F4FF", fontWeight:600 }}>6+ years designing and operating distributed data systems at scale — batch pipelines, streaming platforms, and lakehouse architecture on AWS and GCP.</span>
              </p>
              <p style={{ fontSize:18, color:"rgba(240,244,255,0.55)", lineHeight:1.7, fontFamily:"Inter,sans-serif", fontWeight:300 }}>
                Core focus: Spark performance tuning, Delta Lake table design, and Kafka-based streaming with exactly-once semantics.{" "}
                <span style={{ color:"rgba(240,244,255,0.85)", fontWeight:500 }}>Data correctness, pipeline observability, and failure recovery</span> are treated as system requirements — not operational concerns.
              </p>
              <p style={{ fontSize:18, color:"rgba(240,244,255,0.45)", lineHeight:1.7, fontFamily:"Inter,sans-serif", fontWeight:300 }}>
                Targeting senior and staff-level data engineering roles — fintech, ML infrastructure, and large-scale data platform teams. Apache Spark, PySpark, Kafka, Databricks, Delta Lake, Snowflake, BigQuery, AWS, GCP, dbt, Airflow, Terraform.
              </p>
            </div>
            <div style={{ display:"flex", flexWrap:"wrap", gap:"0.875rem", marginTop:"2rem" }}>
              <Link href="/contact" className="btn-primary">Start a Conversation <ArrowRight size={14}/></Link>
              <a href="/Vasudev-Rao-Resume.pdf" className="btn-outline"><Download size={14}/> Download CV</a>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-end">
            <div style={{ position:"relative", width:"100%", maxWidth:"340px" }}>
              {/* Glow halo — matches hero */}
              <div style={{ position:"absolute", inset:0, borderRadius:"1.5rem", filter:"blur(50px)", transform:"scale(1.1)", background:"radial-gradient(circle, rgba(0,242,255,0.13) 0%, rgba(196,181,253,0.07) 55%, transparent 80%)", pointerEvents:"none" }}/>

              <div style={{ position:"relative", borderRadius:"1.25rem", overflow:"hidden", border:"1px solid rgba(255,255,255,0.08)", background:"#0B1423" }}>
                {/* Top cyan accent line */}
                <div style={{ position:"absolute", top:0, left:0, right:0, height:2, background:"linear-gradient(90deg, transparent, #00F2FF, transparent)", zIndex:2 }}/>

                {/* Photo — full height, face centred */}
                <div style={{ position:"relative", height:320, overflow:"hidden" }}>
                  <Image
                    src="/vasudev-rao.png"
                    alt="Vasudev Rao"
                    fill
                    style={{ objectFit:"cover", objectPosition:"center 35%" }}
                    priority
                  />
                  {/* Bottom fade into card body */}
                  <div style={{ position:"absolute", inset:0, background:"linear-gradient(0deg, #0B1423 0%, rgba(11,20,35,0.15) 55%, transparent 100%)" }}/>
                  {/* Badge overlay — top-left, same as hero */}
                  <div style={{ position:"absolute", top:14, left:14, display:"flex", alignItems:"center", gap:8, padding:"0.35rem 0.75rem", borderRadius:"0.5rem", background:"rgba(8,12,20,0.75)", backdropFilter:"blur(8px)", border:"1px solid rgba(0,242,255,0.22)", zIndex:3 }}>
                    <span style={{ width:6, height:6, borderRadius:"50%", background:CYAN, flexShrink:0 }}/>
                    <span style={{ fontFamily:"JetBrains Mono,monospace", fontSize:10, color:CYAN, letterSpacing:"0.12em" }}>Senior DE</span>
                  </div>
                </div>

                {/* Card body */}
                <div style={{ padding:"1.25rem 1.5rem" }}>
                  <div style={{ marginBottom:"1rem" }}>
                    <h3 style={{ fontFamily:"Inter,sans-serif", fontWeight:700, fontSize:18, color:"#F0F4FF", letterSpacing:"-0.02em" }}>Vasudev Rao</h3>
                    <p style={{ fontFamily:"JetBrains Mono,monospace", fontSize:10, color:"rgba(240,244,255,0.35)", letterSpacing:"0.12em", textTransform:"uppercase", marginTop:"0.2rem" }}>Data Engineer · 6+ Years</p>
                  </div>

                  <div style={{ display:"flex", flexDirection:"column", gap:"0.5rem", marginBottom:"1.25rem" }}>
                    {[
                      { Icon:MapPin,       text:"Bangalore · Remote Worldwide" },
                      { Icon:CheckCircle2, text:"AWS · GCP · Databricks" },
                    ].map(({Icon,text})=>(
                      <div key={text} style={{ display:"flex", alignItems:"center", gap:"0.5rem" }}>
                        <Icon size={11} style={{ color:CYAN+"80", flexShrink:0 }}/>
                        <span style={{ fontFamily:"JetBrains Mono,monospace", fontSize:10, color:"rgba(240,244,255,0.45)" }}>{text}</span>
                      </div>
                    ))}
                  </div>

                  <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:"0.5rem" }}>
                    {[["1B+","Events/Day"],["40%","Cost Saved"],["50+","Unified"]].map(([v,l])=>(
                      <div key={l} style={{ background:"rgba(0,242,255,0.05)", border:"1px solid rgba(0,242,255,0.12)", borderRadius:"0.625rem", padding:"0.625rem 0.25rem", textAlign:"center" }}>
                        <p style={{ fontFamily:"Inter,sans-serif", fontWeight:800, fontSize:14, color:CYAN }}>{v}</p>
                        <p style={{ fontFamily:"JetBrains Mono,monospace", fontSize:8, color:"rgba(240,244,255,0.3)", textTransform:"uppercase", letterSpacing:"0.1em", marginTop:"0.2rem" }}>{l}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating tech pills — matches hero style */}
              {[
                { label:"PySpark",    style:{ top:"25%", left:"-72px" } },
                { label:"Kafka",      style:{ top:"15%", right:"-68px" } },
                { label:"Databricks", style:{ top:"55%", left:"-80px" } },
              ].map(({ label, style }) => (
                <div key={label} className="hidden lg:flex" style={{ position:"absolute", alignItems:"center", gap:6, padding:"0.35rem 0.75rem", borderRadius:"0.5rem", border:"1px solid rgba(255,255,255,0.07)", background:"rgba(11,20,35,0.88)", backdropFilter:"blur(8px)", ...style }}>
                  <span style={{ width:6, height:6, borderRadius:"50%", background:"rgba(0,242,255,0.6)", flexShrink:0 }}/>
                  <span style={{ fontFamily:"JetBrains Mono,monospace", fontSize:10, color:"rgba(240,244,255,0.5)", whiteSpace:"nowrap" }}>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="section-divider" style={{ marginBottom:"5rem" }}/>

        {/* ── Why Me ── */}
        <div style={{ marginBottom:"5rem" }}>
          <p className="eyebrow mb-5">Engineering Philosophy</p>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(260px, 1fr))", gap:"1rem" }}>
            {whyMe.map(({icon:Icon,color,title,desc})=>(
              <div key={title} className="bento" style={{ padding:"1.75rem" }}>
                <div style={{ width:40, height:40, borderRadius:"0.75rem", display:"flex", alignItems:"center", justifyContent:"center", marginBottom:"1rem", background:color+"14", border:"1px solid "+color+"25" }}>
                  <Icon size={18} style={{ color }}/>
                </div>
                <h3 style={{ fontFamily:"Inter,sans-serif", fontWeight:700, fontSize:16, color:"#F0F4FF", marginBottom:"0.5rem" }}>{title}</h3>
                <p style={{ fontSize:14, color:"rgba(240,244,255,0.5)", lineHeight:1.65, fontFamily:"Inter,sans-serif" }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="section-divider" style={{ marginBottom:"5rem" }}/>

        {/* ── Skills ── */}
        <div style={{ marginBottom:"5rem" }}>
          <p className="eyebrow mb-5">Technical Proficiency</p>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))", gap:"1rem" }}>
            {Object.entries(skills).map(([category, skillList])=>(
              <div key={category} className="bento" style={{ padding:"1.75rem" }}>
                <p style={{ fontFamily:"JetBrains Mono,monospace", fontSize:10, color:CYAN+"80", letterSpacing:"0.18em", textTransform:"uppercase", marginBottom:"1.25rem" }}>{category}</p>
                <div style={{ display:"flex", flexDirection:"column", gap:"1rem" }}>
                  {(skillList as {name:string,level:number}[]).map(({name,level})=>(
                    <div key={name}>
                      <div style={{ display:"flex", justifyContent:"space-between", marginBottom:"0.375rem" }}>
                        <span style={{ fontFamily:"JetBrains Mono,monospace", fontSize:11, color:"rgba(240,244,255,0.7)" }}>{name}</span>
                        <span style={{ fontFamily:"JetBrains Mono,monospace", fontSize:10, color:CYAN }}>{level}%</span>
                      </div>
                      <div className="skill-bar-track">
                        <div className="skill-bar-fill" style={{ width:level+"%" }}/>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="section-divider" style={{ marginBottom:"5rem" }}/>

        {/* ── Timeline ── */}
        <div style={{ marginBottom:"5rem" }}>
          <p className="eyebrow mb-5">Experience</p>
          <div style={{ display:"flex", flexDirection:"column", gap:"2rem" }}>
            {timeline.map(({period,role,company,items})=>(
              <div key={period} className="bento" style={{ padding:"2rem" }}>
                <div style={{ display:"flex", flexWrap:"wrap", gap:"0.75rem", alignItems:"baseline", marginBottom:"1.25rem" }}>
                  <h3 style={{ fontFamily:"Inter,sans-serif", fontWeight:700, fontSize:18, color:"#F0F4FF", letterSpacing:"-0.02em" }}>{role}</h3>
                  <span style={{ fontFamily:"JetBrains Mono,monospace", fontSize:11, color:CYAN+"90" }}>— {company}</span>
                  <span style={{ fontFamily:"JetBrains Mono,monospace", fontSize:11, color:"rgba(240,244,255,0.3)", marginLeft:"auto" }}>{period}</span>
                </div>
                <div style={{ display:"flex", flexDirection:"column", gap:"0.625rem" }}>
                  {items.map((item,i)=>(
                    <div key={i} style={{ display:"flex", gap:"0.75rem", alignItems:"flex-start" }}>
                      <span style={{ color:CYAN, fontFamily:"JetBrains Mono,monospace", fontSize:11, marginTop:"0.15rem", flexShrink:0 }}>→</span>
                      <p style={{ fontSize:14, color:"rgba(240,244,255,0.55)", lineHeight:1.65, fontFamily:"Inter,sans-serif" }}>{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>


        <div className="section-divider" style={{ marginBottom:"5rem" }}/>

        {/* ── Certifications ── */}
        <div style={{ marginBottom:"5rem" }}>
          <p className="eyebrow mb-5">Certifications &amp; Recognition</p>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(240px, 1fr))", gap:"1rem" }}>
            {[
              { name:"Databricks Certified Data Engineer Associate", org:"Databricks", year:"2023", color:"#00F2FF" },
              { name:"AWS Certified Data Analytics Specialty", org:"Amazon Web Services", year:"2022", color:"#F5A623" },
              { name:"Google Professional Data Engineer", org:"Google Cloud", year:"2022", color:"#4285F4" },
              { name:"dbt Certified Analytics Engineer", org:"dbt Labs", year:"2023", color:"#C4B5FD" },
            ].map(({ name, org, year, color }) => (
              <div key={name} className="bento" style={{ padding:"1.5rem", position:"relative", overflow:"hidden" }}>
                <div style={{ position:"absolute", top:0, left:0, right:0, height:2, background:`linear-gradient(90deg, transparent, ${color}, transparent)` }}/>
                <div style={{ width:36, height:36, borderRadius:"0.625rem", display:"flex", alignItems:"center", justifyContent:"center", background:color+"14", border:"1px solid "+color+"25", marginBottom:"1rem" }}>
                  <span style={{ color, fontSize:16 }}>✓</span>
                </div>
                <h4 style={{ fontFamily:"Inter,sans-serif", fontWeight:700, fontSize:13, color:"#F0F4FF", lineHeight:1.3, marginBottom:"0.375rem" }}>{name}</h4>
                <p style={{ fontFamily:"JetBrains Mono,monospace", fontSize:10, color:"rgba(240,244,255,0.4)" }}>{org} · {year}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── CTA ── */}
        <div style={{ position:"relative", borderRadius:"1.25rem", overflow:"hidden", background:"linear-gradient(135deg, #000D30 0%, #000824 50%, #000D30 100%)", border:"1px solid rgba(0,242,255,0.18)", padding:"3rem 2rem", textAlign:"center" }}>
          <div style={{ position:"absolute", top:0, left:0, right:0, height:2, background:"linear-gradient(90deg, transparent, #00F2FF, transparent)" }}/>
          <p className="eyebrow" style={{ justifyContent:"center", marginBottom:"1rem" }}>Open to Senior DE Roles & Consulting</p>
          <h2 style={{ fontFamily:"Inter,sans-serif", fontWeight:800, fontSize:"clamp(32px,4vw,48px)", lineHeight:1.0, letterSpacing:"-0.03em", color:"#F0F4FF", marginBottom:"1rem" }}>
            {"Let's"} build something<br/>
            <span style={{ color:"#00F2FF" }}>at scale.</span>
          </h2>
          <p style={{ fontSize:16, color:"rgba(240,244,255,0.5)", maxWidth:480, margin:"0 auto 2rem", fontFamily:"Inter,sans-serif", lineHeight:1.65 }}>
            Interested in distributed data systems, streaming architecture, or lakehouse design? {"Let's"} talk.
          </p>
          <div style={{ display:"flex", flexWrap:"wrap", gap:"1rem", justifyContent:"center" }}>
            <Link href="/contact" className="btn-primary" style={{ fontSize:13, padding:"0.875rem 2rem" }}>Start a Conversation <ArrowRight size={15}/></Link>
            <a href="/Vasudev-Rao-Resume.pdf" className="btn-outline" style={{ fontSize:13, padding:"0.875rem 2rem" }}><Download size={15}/> Download CV</a>
          </div>
        </div>

      </div>
    </div>
  );
}
