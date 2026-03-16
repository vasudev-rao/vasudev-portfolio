"use client";
import React, { useState } from "react";
import { Project } from "@/types";
import { Github, ExternalLink, ArrowUpRight, TrendingUp, Zap, CheckCircle2, Activity } from "lucide-react";

type Intent = "green" | "cyan" | "amber" | "violet";

const OUTCOMES: Record<string, { label: string; intent: Intent }> = {
  "realtime-streaming-pipeline":    { label: "< 5s Latency · 0 Data Loss",    intent: "cyan"   },
  "enterprise-lakehouse-databricks":{ label: "-60% Pipeline Runtime",          intent: "green"  },
  "warehouse-modernization":        { label: "70% Faster Queries",             intent: "amber"  },
  "ml-feature-store":               { label: "p99 < 8ms · 4 Teams Served",    intent: "violet" },
  "fintech-credit-risk-pipeline":   { label: "48h → < 2min Decisioning",      intent: "cyan"   },
  "cost-governance-framework":      { label: "-40% Cloud Spend in 90 Days",   intent: "green"  },
};

const COLORS: Record<Intent, { color: string; bg: string; border: string }> = {
  green:  { color: "#10b981", bg: "rgba(16,185,129,0.11)",  border: "rgba(16,185,129,0.28)"  },
  cyan:   { color: "#00F2FF", bg: "rgba(0,242,255,0.10)",   border: "rgba(0,242,255,0.28)"   },
  amber:  { color: "#F5A623", bg: "rgba(245,166,35,0.10)",  border: "rgba(245,166,35,0.28)"  },
  violet: { color: "#C4B5FD", bg: "rgba(196,181,253,0.10)", border: "rgba(196,181,253,0.28)" },
};

function getSvgStyle(hovered: boolean): React.CSSProperties {
  return {
    display: "block", width: "100%", height: "100%",
    transition: "transform 0.5s cubic-bezier(0.16,1,0.3,1)",
    transform: hovered ? "scale(1.04)" : "scale(1)",
  };
}

function OutcomeBadge({ id, corner }: { id: string; corner?: boolean }) {
  const cfg = OUTCOMES[id];
  if (!cfg) return null;
  const s = COLORS[cfg.intent];
  const pos: React.CSSProperties = corner ? { position: "absolute", top: 12, right: 12, backdropFilter: "blur(10px)" } : {};
  return (
    <div style={{ display: "inline-flex", alignItems: "center", gap: "0.35rem", padding: corner ? "0.22rem 0.55rem" : "0.28rem 0.75rem", borderRadius: "9999px", background: s.bg, border: "1px solid " + s.border, ...pos }}>
      {cfg.intent === "green"  && <CheckCircle2 size={9} style={{ color: s.color }} />}
      {cfg.intent === "cyan"   && <Activity     size={9} style={{ color: s.color }} />}
      {cfg.intent === "amber"  && <TrendingUp   size={9} style={{ color: s.color }} />}
      {cfg.intent === "violet" && <Zap          size={9} style={{ color: s.color }} />}
      <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 9.5, fontWeight: 600, color: s.color, letterSpacing: "0.04em" }}>{cfg.label}</span>
    </div>
  );
}

/* ── SVG 1: Real-Time Kafka Streaming ── */
function SvgStreaming({ hovered }: { hovered: boolean }) {
  const s = getSvgStyle(hovered);
  const c = hovered ? "#00F2FF" : "rgba(0,242,255,0.45)";
  const sw = hovered ? 2.5 : 1.5;
  return (
    <svg viewBox="0 0 460 300" style={s} preserveAspectRatio="xMidYMid slice">
      <defs>
        <radialGradient id="bg-ks" cx="50%" cy="40%" r="70%">
          <stop offset="0%" stopColor="#040D1A" /><stop offset="100%" stopColor="#000412" />
        </radialGradient>
        <filter id="glow-ks">
          <feGaussianBlur stdDeviation="3" result="b" />
          <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="460" height="300" fill="url(#bg-ks)" />
      <text x="20" y="22" fill="rgba(255,255,255,0.18)" fontSize="7.5" fontFamily="JetBrains Mono,monospace" letterSpacing="0.1em">STREAMING PIPELINE — EXACTLY-ONCE</text>
      {[
        { l: "Kafka", x: 60, c: "#F5A623", sub: "10M+ events/day" },
        { l: "Spark SS", x: 185, c: "#00F2FF", sub: "late-event · dedup" },
        { l: "Delta Lake", x: 320, c: "#10b981", sub: "exactly-once writes" },
        { l: "Looker", x: 420, c: "#C4B5FD", sub: "< 5s fresh" },
      ].map(({ l, x, c: col, sub }, i) => (
        <g key={l}>
          <rect x={x - 46} y="48" width="92" height="52" rx="10"
            fill={col + "12"} stroke={col}
            strokeWidth={hovered ? 2 : 1.5} strokeOpacity={hovered ? 1 : 0.55}
            filter="url(#glow-ks)" />
          <text x={x} y="72" textAnchor="middle" fill={col} fontSize="10.5" fontFamily="JetBrains Mono,monospace" fontWeight="700">{l}</text>
          <text x={x} y="86" textAnchor="middle" fill={col + "70"} fontSize="6.5" fontFamily="JetBrains Mono,monospace">{sub}</text>
          {i < 3 && (
            <g>
              <line x1={x + 46} y1="74" x2={x + 93} y2="74" stroke={c} strokeWidth={sw} />
              <polygon points={x+90+",69 "+( x+97)+",74 "+(x+90)+",79"} fill={hovered ? "#00F2FF" : "rgba(0,242,255,0.5)"} />
              {hovered && [0, 1, 2].map(j => (
                <circle key={j} r="3" fill="#00F2FF" filter="url(#glow-ks)">
                  <animate attributeName="cx" values={x+46+";"+(x+93)} dur="0.9s" begin={i*0.25+j*0.3+"s"} repeatCount="indefinite" />
                  <animate attributeName="cy" values="74;74" dur="0.9s" begin={i*0.25+j*0.3+"s"} repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0;1;0" dur="0.9s" begin={i*0.25+j*0.3+"s"} repeatCount="indefinite" />
                </circle>
              ))}
            </g>
          )}
        </g>
      ))}
      <rect x="80" y="120" width="300" height="32" rx="8" fill="rgba(0,242,255,0.05)" stroke="rgba(0,242,255,0.15)" strokeWidth="1" />
      <text x="230" y="140" textAnchor="middle" fill="rgba(0,242,255,0.5)" fontSize="8" fontFamily="JetBrains Mono,monospace">Spark Structured Streaming · late-event watermark · idempotent upserts</text>
      <rect x="40" y="168" width="380" height="76" rx="10" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
      <text x="60" y="188" fill="rgba(255,255,255,0.35)" fontSize="8" fontFamily="JetBrains Mono,monospace" fontWeight="600">Key Guarantees</text>
      {[
        { x: 80,  c: "#00F2FF", l: "Exactly-Once" },
        { x: 210, c: "#10b981", l: "Late Events OK" },
        { x: 330, c: "#F5A623", l: "Auto-Dedup" },
      ].map(({ x, c: col, l }) => (
        <g key={l}>
          <circle cx={x - 20} cy="208" r="5" fill={col + "20"} stroke={col + "80"} strokeWidth="1.5" />
          <text x={x - 20} y="212" textAnchor="middle" fill={col} fontSize="7" fontFamily="JetBrains Mono,monospace">✓</text>
          <text x={x} y="212" fill={col + "CC"} fontSize="8.5" fontFamily="JetBrains Mono,monospace">{l}</text>
        </g>
      ))}
      <text x="230" y="265" textAnchor="middle" fill="rgba(0,242,255,0.6)" fontSize="8.5" fontFamily="JetBrains Mono,monospace">Minutes → {"< 5s"} latency · 10M+ events/day · 0 data loss</text>
    </svg>
  );
}

/* ── SVG 2: Databricks Medallion Lakehouse ── */
function SvgLakehouse({ hovered }: { hovered: boolean }) {
  const s = getSvgStyle(hovered);
  const sw = hovered ? 2 : 1.5;
  return (
    <svg viewBox="0 0 460 300" style={s} preserveAspectRatio="xMidYMid slice">
      <defs>
        <filter id="glow-lh">
          <feGaussianBlur stdDeviation="2.5" result="b" />
          <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="460" height="300" fill="#000412" />
      <text x="20" y="22" fill="rgba(255,255,255,0.18)" fontSize="7.5" fontFamily="JetBrains Mono,monospace" letterSpacing="0.1em">DELTA LAKE MEDALLION ARCHITECTURE</text>
      {["Kafka Events", "S3 Raw", "DB CDC", "50+ APIs"].map((src, i) => (
        <g key={src}>
          <rect x="14" y={38 + i * 42} width="78" height="26" rx="5" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.07)" strokeWidth="1" />
          <text x="53" y={38 + i * 42 + 16} textAnchor="middle" fill="rgba(255,255,255,0.28)" fontSize="7.5" fontFamily="JetBrains Mono,monospace">{src}</text>
          <line x1="92" y1={38 + i * 42 + 13} x2="136" y2="116" stroke="rgba(255,255,255,0.06)" strokeWidth="1" strokeDasharray="3 4" />
        </g>
      ))}
      {[
        { l: "Bronze", x: 148, c: "#CD7F32", sub: "raw · CDC · ingest" },
        { l: "Silver",  x: 248, c: "#B0B8C8", sub: "clean · typed · tested" },
        { l: "Gold",    x: 348, c: "#F5A623", sub: "KPIs · features · marts" },
      ].map(({ l, x, c, sub }, i) => (
        <g key={l}>
          <rect x={x - 52} y="88" width="104" height="68" rx="10"
            fill={c + "10"} stroke={c}
            strokeWidth={sw} strokeOpacity={hovered ? 1 : 0.55}
            filter="url(#glow-lh)" />
          <text x={x} y="118" textAnchor="middle" fill={c} fontSize="13" fontFamily="JetBrains Mono,monospace" fontWeight="800">{l}</text>
          <text x={x} y="132" textAnchor="middle" fill={c + "80"} fontSize="7" fontFamily="JetBrains Mono,monospace">Delta Lake</text>
          <text x={x} y="145" textAnchor="middle" fill={c + "55"} fontSize="6.5" fontFamily="JetBrains Mono,monospace">{sub}</text>
          {i < 2 && (
            <g>
              <line x1={x + 52} y1="122" x2={x + 96} y2="122" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
              {hovered && [0, 1].map(j => (
                <circle key={j} r="3" fill={c} filter="url(#glow-lh)">
                  <animate attributeName="cx" values={x+52+";"+(x+96)} dur="1s" begin={i*0.4+j*0.5+"s"} repeatCount="indefinite" />
                  <animate attributeName="cy" values="122;122" dur="1s" begin={i*0.4+j*0.5+"s"} repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0;1;0" dur="1s" begin={i*0.4+j*0.5+"s"} repeatCount="indefinite" />
                </circle>
              ))}
            </g>
          )}
        </g>
      ))}
      {[
        { x: 80,  l: "Unity Catalog",  c: "#00F2FF" },
        { x: 200, l: "dbt Models",     c: "#F5A623" },
        { x: 310, l: "Photon Engine",  c: "#10b981" },
        { x: 410, l: "Databricks SQL", c: "#C4B5FD" },
      ].map(({ x, l, c }) => (
        <g key={l}>
          <rect x={x - 46} y="192" width="92" height="40" rx="7" fill={c + "08"} stroke={c + "30"} strokeWidth="1" />
          <text x={x} y="216" textAnchor="middle" fill={c + "BB"} fontSize="8.5" fontFamily="JetBrains Mono,monospace" fontWeight="600">{l}</text>
          <line x1={x} y1="156" x2={x} y2="192" stroke={c + "20"} strokeWidth="1" strokeDasharray="3 4" />
        </g>
      ))}
      <text x="60"  y="262" fill="rgba(0,242,255,0.6)"  fontSize="8.5" fontFamily="JetBrains Mono,monospace">-60% runtime</text>
      <text x="190" y="262" fill="rgba(245,166,35,0.6)" fontSize="8.5" fontFamily="JetBrains Mono,monospace">50+ sources unified</text>
      <text x="340" y="262" fill="rgba(16,185,129,0.6)" fontSize="8.5" fontFamily="JetBrains Mono,monospace">0 schema conflicts</text>
    </svg>
  );
}

/* ── SVG 3: Warehouse Modernization ── */
function SvgWarehouse({ hovered }: { hovered: boolean }) {
  const s = getSvgStyle(hovered);
  const sw = hovered ? 2 : 1.5;
  return (
    <svg viewBox="0 0 460 300" style={s} preserveAspectRatio="xMidYMid slice">
      <defs>
        <filter id="glow-wh">
          <feGaussianBlur stdDeviation="2.5" result="b" />
          <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="460" height="300" fill="#000412" />
      <text x="20" y="22" fill="rgba(255,80,80,0.4)" fontSize="7.5" fontFamily="JetBrains Mono,monospace" letterSpacing="0.1em">BEFORE — Redshift + Oracle · T+1 · full scans · 100TB</text>
      {["Redshift", "Oracle"].map((l, i) => (
        <g key={l}>
          <rect x={60 + i * 120} y="32" width="100" height="30" rx="7" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5" />
          <text x={110 + i * 120} y="51" textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="9" fontFamily="JetBrains Mono,monospace">{l}</text>
        </g>
      ))}
      <line x1="20" y1="80" x2="440" y2="80" stroke="rgba(0,242,255,0.12)" strokeWidth="1" />
      <text x="20" y="96" fill="rgba(0,242,255,0.65)" fontSize="7.5" fontFamily="JetBrains Mono,monospace" letterSpacing="0.1em">AFTER — DUAL-WRITE MIGRATION · ZERO DOWNTIME</text>
      <rect x="44" y="108" width="148" height="72" rx="12" fill="rgba(0,242,255,0.09)" stroke={hovered ? "#00F2FF" : "rgba(0,242,255,0.45)"} strokeWidth={sw} filter="url(#glow-wh)" />
      <text x="118" y="140" textAnchor="middle" fill="#00F2FF" fontSize="14" fontFamily="JetBrains Mono,monospace" fontWeight="800">Snowflake</text>
      <text x="118" y="155" textAnchor="middle" fill="rgba(0,242,255,0.55)" fontSize="7.5" fontFamily="JetBrains Mono,monospace">micro-partition clustering</text>
      <text x="118" y="168" textAnchor="middle" fill="rgba(0,242,255,0.35)" fontSize="6.5" fontFamily="JetBrains Mono,monospace">auto-suspend · zero-copy clone</text>
      <rect x="268" y="108" width="148" height="72" rx="12" fill="rgba(66,133,244,0.09)" stroke={hovered ? "#4285F4" : "rgba(66,133,244,0.45)"} strokeWidth={sw} filter="url(#glow-wh)" />
      <text x="342" y="140" textAnchor="middle" fill="#4285F4" fontSize="14" fontFamily="JetBrains Mono,monospace" fontWeight="800">BigQuery</text>
      <text x="342" y="155" textAnchor="middle" fill="rgba(66,133,244,0.55)" fontSize="7.5" fontFamily="JetBrains Mono,monospace">columnar + partitioned</text>
      <text x="342" y="168" textAnchor="middle" fill="rgba(66,133,244,0.35)" fontSize="6.5" fontFamily="JetBrains Mono,monospace">42s → 11s p95 queries</text>
      <rect x="170" y="118" width="120" height="52" rx="8" fill="rgba(245,166,35,0.07)" stroke="rgba(245,166,35,0.3)" strokeWidth="1" />
      <text x="230" y="140" textAnchor="middle" fill="#F5A623" fontSize="9" fontFamily="JetBrains Mono,monospace" fontWeight="600">dbt + Airflow</text>
      <text x="230" y="153" textAnchor="middle" fill="rgba(245,166,35,0.5)" fontSize="7" fontFamily="JetBrains Mono,monospace">incremental ELT</text>
      <text x="230" y="164" textAnchor="middle" fill="rgba(245,166,35,0.35)" fontSize="6.5" fontFamily="JetBrains Mono,monospace">dual-write validation</text>
      {hovered && [0,1,2].map(i => (
        <circle key={i} r="3" fill="#00F2FF" filter="url(#glow-wh)">
          <animate attributeName="cx" values="230;118" dur="1.1s" begin={i*0.37+"s"} repeatCount="indefinite" />
          <animate attributeName="cy" values="144;144" dur="1.1s" begin={i*0.37+"s"} repeatCount="indefinite" />
          <animate attributeName="opacity" values="0;1;0" dur="1.1s" begin={i*0.37+"s"} repeatCount="indefinite" />
        </circle>
      ))}
      <rect x="20" y="204" width="420" height="52" rx="8" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
      {[
        { x: 90,  c: "#00F2FF", v: "70%",  l: "Query Perf" },
        { x: 230, c: "#10b981", v: "40%",  l: "Cost Saved" },
        { x: 370, c: "#F5A623", v: "100TB",l: "Migrated"  },
      ].map(({ x, c, v, l }) => (
        <g key={l}>
          <text x={x} y="228" textAnchor="middle" fill={c} fontSize="18" fontFamily="Inter,sans-serif" fontWeight="800">{v}</text>
          <text x={x} y="244" textAnchor="middle" fill={c + "70"} fontSize="8" fontFamily="JetBrains Mono,monospace">{l}</text>
        </g>
      ))}
      <text x="230" y="278" textAnchor="middle" fill="rgba(245,166,35,0.6)" fontSize="8.5" fontFamily="JetBrains Mono,monospace">100TB migrated · zero downtime · dual-write validated</text>
    </svg>
  );
}

/* ── SVG 4: ML Feature Store ── */
function SvgFeatureStore({ hovered }: { hovered: boolean }) {
  const s = getSvgStyle(hovered);
  const sw = hovered ? 2 : 1.5;
  return (
    <svg viewBox="0 0 460 300" style={s} preserveAspectRatio="xMidYMid slice">
      <defs>
        <filter id="glow-fs">
          <feGaussianBlur stdDeviation="2.5" result="b" />
          <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="460" height="300" fill="#000412" />
      <text x="20" y="22" fill="rgba(255,255,255,0.18)" fontSize="7.5" fontFamily="JetBrains Mono,monospace" letterSpacing="0.1em">ML FEATURE STORE — DUAL-MODE SERVING</text>
      <rect x="160" y="36" width="140" height="56" rx="12" fill="rgba(196,181,253,0.09)" stroke={hovered ? "#C4B5FD" : "rgba(196,181,253,0.45)"} strokeWidth={sw} filter="url(#glow-fs)" />
      <text x="230" y="60" textAnchor="middle" fill="#C4B5FD" fontSize="12" fontFamily="JetBrains Mono,monospace" fontWeight="700">Feature Store</text>
      <text x="230" y="74" textAnchor="middle" fill="rgba(196,181,253,0.55)" fontSize="7.5" fontFamily="JetBrains Mono,monospace">Databricks · 1,000+ features</text>
      <text x="230" y="85" textAnchor="middle" fill="rgba(196,181,253,0.35)" fontSize="6.5" fontFamily="JetBrains Mono,monospace">point-in-time correct</text>
      {[
        { x: 80,  y: 160, l: "Offline Store", sub: "Delta Lake · PySpark", c: "#10b981" },
        { x: 380, y: 160, l: "Online Store",  sub: "Redis · p99 < 8ms",    c: "#00F2FF" },
      ].map(({ x, y, l, sub, c }) => (
        <g key={l}>
          <rect x={x-64} y={y} width="128" height="52" rx="10" fill={c+"09"} stroke={c} strokeWidth={hovered?2:1.5} strokeOpacity={hovered?1:0.5} filter="url(#glow-fs)" />
          <text x={x} y={y+24} textAnchor="middle" fill={c} fontSize="10" fontFamily="JetBrains Mono,monospace" fontWeight="600">{l}</text>
          <text x={x} y={y+38} textAnchor="middle" fill={c+"70"} fontSize="7" fontFamily="JetBrains Mono,monospace">{sub}</text>
          <line x1={x} y1="92" x2={x} y2={y} stroke={c+"30"} strokeWidth="1.5" />
          {hovered && [0,1].map(j => (
            <circle key={j} r="3" fill={c} filter="url(#glow-fs)">
              <animate attributeName="cx" values={"230;"+x} dur="1s" begin={j*0.5+"s"} repeatCount="indefinite" />
              <animate attributeName="cy" values={"92;"+y} dur="1s" begin={j*0.5+"s"} repeatCount="indefinite" />
              <animate attributeName="opacity" values="0;1;0" dur="1s" begin={j*0.5+"s"} repeatCount="indefinite" />
            </circle>
          ))}
        </g>
      ))}
      {[
        { x: 80,  y: 246, l: "Training Jobs", c: "#10b981" },
        { x: 230, y: 246, l: "MLflow Tracking",c: "#F5A623"},
        { x: 380, y: 246, l: "Inference API",  c: "#00F2FF"},
      ].map(({ x, y, l, c }) => (
        <g key={l}>
          <rect x={x-52} y={y} width="104" height="32" rx="6" fill={c+"08"} stroke={c+"25"} strokeWidth="1" />
          <text x={x} y={y+20} textAnchor="middle" fill={c+"BB"} fontSize="8.5" fontFamily="JetBrains Mono,monospace">{l}</text>
        </g>
      ))}
      <text x="230" y="296" textAnchor="middle" fill="rgba(196,181,253,0.6)" fontSize="8.5" fontFamily="JetBrains Mono,monospace">1,000+ features · 4 ML teams · p99 {"<"} 8ms online serving</text>
    </svg>
  );
}

/* ── SVG 5: Fintech Credit Risk ── */
function SvgCredit({ hovered }: { hovered: boolean }) {
  const s = getSvgStyle(hovered);
  const sw = hovered ? 2 : 1.5;
  return (
    <svg viewBox="0 0 460 300" style={s} preserveAspectRatio="xMidYMid slice">
      <defs>
        <filter id="glow-cr">
          <feGaussianBlur stdDeviation="2.5" result="b" />
          <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="460" height="300" fill="#000412" />
      <text x="20" y="22" fill="rgba(255,80,80,0.4)" fontSize="7.5" fontFamily="JetBrains Mono,monospace" letterSpacing="0.1em">BEFORE — overnight batch · 48h decision latency</text>
      <rect x="20" y="30" width="420" height="24" rx="6" fill="rgba(255,80,80,0.06)" stroke="rgba(255,80,80,0.2)" strokeWidth="1" />
      <text x="230" y="46" textAnchor="middle" fill="rgba(255,100,100,0.45)" fontSize="8" fontFamily="JetBrains Mono,monospace">Batch scoring job · runs at 2am · 48 hours until decision</text>
      <line x1="20" y1="72" x2="440" y2="72" stroke="rgba(0,242,255,0.12)" strokeWidth="1" />
      <text x="20" y="88" fill="rgba(0,242,255,0.65)" fontSize="7.5" fontFamily="JetBrains Mono,monospace" letterSpacing="0.1em">AFTER — REAL-TIME DECISIONING · {"< 2 MINUTES"}</text>
      {[
        { l: "Applicants", x: 60, c: "rgba(255,255,255,0.4)", sub: "100K+/day" },
        { l: "Kafka",      x: 160, c: "#F5A623",              sub: "events" },
        { l: "PySpark",    x: 270, c: "#00F2FF",              sub: "feature eng." },
        { l: "ML Score",   x: 380, c: "#10b981",              sub: "95% accuracy" },
      ].map(({ l, x, c, sub }, i) => (
        <g key={l}>
          <rect x={x-46} y="96" width="92" height="48" rx="9" fill={c.includes("rgba") ? "rgba(255,255,255,0.03)" : c+"12"} stroke={c.includes("rgba") ? "rgba(255,255,255,0.1)" : c} strokeWidth={hovered&&!c.includes("rgba")?2:1.5} strokeOpacity={hovered?1:0.6} filter="url(#glow-cr)" />
          <text x={x} y="118" textAnchor="middle" fill={c} fontSize="10" fontFamily="JetBrains Mono,monospace" fontWeight="700">{l}</text>
          <text x={x} y="132" textAnchor="middle" fill={c+(c.includes("rgba")?"":"70")} fontSize="7" fontFamily="JetBrains Mono,monospace">{sub}</text>
          {i<3 && (
            <g>
              <line x1={x+46} y1="120" x2={x+68} y2="120" stroke={hovered?"rgba(0,242,255,0.5)":"rgba(0,242,255,0.2)"} strokeWidth={sw} />
              {hovered && (
                <circle r="3" fill="#00F2FF" filter="url(#glow-cr)">
                  <animate attributeName="cx" values={x+46+";"+(x+68)} dur="0.7s" begin={i*0.22+"s"} repeatCount="indefinite" />
                  <animate attributeName="cy" values="120;120" dur="0.7s" begin={i*0.22+"s"} repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0;1;0" dur="0.7s" begin={i*0.22+"s"} repeatCount="indefinite" />
                </circle>
              )}
            </g>
          )}
        </g>
      ))}
      <rect x="40" y="166" width="380" height="80" rx="10" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
      <text x="50" y="186" fill="rgba(255,255,255,0.3)" fontSize="7.5" fontFamily="JetBrains Mono,monospace" fontWeight="600">Latency Reduction</text>
      <text x="400" y="186" textAnchor="end" fill="rgba(16,185,129,0.7)" fontSize="7.5" fontFamily="JetBrains Mono,monospace">48h → {"< 2 min"}</text>
      <rect x="56" y="196" width="344" height="10" rx="4" fill="rgba(255,80,80,0.15)" />
      <rect x="56" y="196" width={hovered ? 4 : 344} height="10" rx="4" fill="rgba(16,185,129,0.6)" />
      <text x="50" y="226" fill="rgba(255,255,255,0.3)" fontSize="7.5" fontFamily="JetBrains Mono,monospace" fontWeight="600">Throughput</text>
      <text x="400" y="226" textAnchor="end" fill="rgba(0,242,255,0.7)" fontSize="7.5" fontFamily="JetBrains Mono,monospace">100K+ apps/day</text>
      <rect x="56" y="236" width={hovered ? 320 : 180} height="10" rx="4" fill="rgba(0,242,255,0.35)" />
      <text x="230" y="278" textAnchor="middle" fill="rgba(0,242,255,0.6)" fontSize="8.5" fontFamily="JetBrains Mono,monospace">48h → {"< 2min"} · 100K+/day · 95%+ model accuracy maintained</text>
    </svg>
  );
}

/* ── SVG 6: Cost Governance Framework ── */
function SvgCostGov({ hovered }: { hovered: boolean }) {
  const s = getSvgStyle(hovered);
  const sw = hovered ? 2 : 1.5;
  return (
    <svg viewBox="0 0 460 300" style={s} preserveAspectRatio="xMidYMid slice">
      <defs>
        <filter id="glow-cg">
          <feGaussianBlur stdDeviation="2.5" result="b" />
          <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="460" height="300" fill="#000412" />
      <text x="20" y="22" fill="rgba(255,255,255,0.18)" fontSize="7.5" fontFamily="JetBrains Mono,monospace" letterSpacing="0.1em">COST GOVERNANCE · 20+ DATABRICKS WORKSPACES</text>
      {[
        { l: "AWS API",      x: 54,  c: "#F5A623" },
        { l: "GCP API",      x: 134, c: "#4285F4" },
        { l: "Databricks",   x: 214, c: "#00F2FF" },
        { l: "BigQuery",     x: 294, c: "#4285F4" },
        { l: "Terraform",    x: 374, c: "#C4B5FD" },
      ].map(({ l, x, c }) => (
        <g key={l}>
          <rect x={x-38} y="36" width="76" height="32" rx="7" fill={c+"0D"} stroke={c+"40"} strokeWidth="1" />
          <text x={x} y="56" textAnchor="middle" fill={c+"BB"} fontSize="8" fontFamily="JetBrains Mono,monospace">{l}</text>
          <line x1={x} y1="68" x2="230" y2="100" stroke={c+"25"} strokeWidth="1" strokeDasharray="3 4" />
          {hovered && (
            <circle r="2.5" fill={c} filter="url(#glow-cg)">
              <animate attributeName="cx" values={x+";230"} dur="0.9s" begin="0s" repeatCount="indefinite" />
              <animate attributeName="cy" values={"68;100"} dur="0.9s" begin="0s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0;1;0" dur="0.9s" begin="0s" repeatCount="indefinite" />
            </circle>
          )}
        </g>
      ))}
      <rect x="140" y="100" width="180" height="60" rx="12" fill="rgba(16,185,129,0.09)" stroke={hovered?"#10b981":"rgba(16,185,129,0.45)"} strokeWidth={sw} filter="url(#glow-cg)" />
      <text x="230" y="126" textAnchor="middle" fill="#10b981" fontSize="11" fontFamily="JetBrains Mono,monospace" fontWeight="700">Anomaly Engine</text>
      <text x="230" y="140" textAnchor="middle" fill="rgba(16,185,129,0.55)" fontSize="7.5" fontFamily="JetBrains Mono,monospace">Isolation Forest · Python · Terraform</text>
      <text x="230" y="152" textAnchor="middle" fill="rgba(16,185,129,0.35)" fontSize="6.5" fontFamily="JetBrains Mono,monospace">auto-remediate · storage tier · rightsize</text>
      {[
        { x: 80,  l: "Runaway Cluster", c: "#F5A623", action: "auto-terminate" },
        { x: 230, l: "Storage Tiering", c: "#00F2FF", action: "S3 → Glacier"    },
        { x: 380, l: "Slack Alert",     c: "#C4B5FD", action: "+ chargeback"    },
      ].map(({ x, l, c, action }) => (
        <g key={l}>
          <rect x={x-52} y="186" width="104" height="48" rx="8" fill={c+"09"} stroke={c+"30"} strokeWidth="1" />
          <text x={x} y="208" textAnchor="middle" fill={c+"CC"} fontSize="8.5" fontFamily="JetBrains Mono,monospace" fontWeight="600">{l}</text>
          <text x={x} y="222" textAnchor="middle" fill={c+"60"} fontSize="7" fontFamily="JetBrains Mono,monospace">{action}</text>
          <line x1={x} y1="160" x2={x} y2="186" stroke={c+"25"} strokeWidth="1.5" strokeDasharray="3 3" />
        </g>
      ))}
      <text x="40"  y="268" fill="rgba(16,185,129,0.7)" fontSize="8.5" fontFamily="JetBrains Mono,monospace">-40% cloud spend</text>
      <text x="186" y="268" fill="rgba(0,242,255,0.7)"  fontSize="8.5" fontFamily="JetBrains Mono,monospace">90 days</text>
      <text x="280" y="268" fill="rgba(196,181,253,0.6)" fontSize="8.5" fontFamily="JetBrains Mono,monospace">20+ workspaces automated</text>
    </svg>
  );
}

const SVG_MAP: Record<string, React.ComponentType<{ hovered: boolean }>> = {
  "realtime-streaming-pipeline":     SvgStreaming,
  "enterprise-lakehouse-databricks": SvgLakehouse,
  "warehouse-modernization":         SvgWarehouse,
  "ml-feature-store":                SvgFeatureStore,
  "fintech-credit-risk-pipeline":    SvgCredit,
  "cost-governance-framework":       SvgCostGov,
};

function ProjectIllustration({ id, hovered }: { id: string; hovered: boolean }) {
  const Comp = SVG_MAP[id];
  if (!Comp) return <div style={{ width: "100%", height: "100%", background: "#000412" }} />;
  return <Comp hovered={hovered} />;
}

interface ProjectExt extends Project { subtitle?: string; }

function FeaturedCard({ project }: { project: ProjectExt }) {
  const [hovered, setHovered] = useState(false);
  const featuredStyle: React.CSSProperties = {
      display: "grid", gridTemplateColumns: "1fr 1fr", background: "#000824",
      border: hovered ? "1px solid rgba(0,242,255,0.22)" : "1px solid rgba(255,255,255,0.07)",
      borderRadius: "1.25rem", overflow: "hidden",
      transition: "border-color 0.35s, box-shadow 0.35s",
      boxShadow: hovered ? "0 0 0 1px rgba(0,242,255,0.08), 0 0 80px rgba(0,242,255,0.07), 0 32px 80px rgba(0,0,0,0.8)" : "0 8px 48px rgba(0,0,0,0.6)",
      position: "relative" as const,
    };
    return (
    <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} style={featuredStyle}>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, zIndex: 1, background: "linear-gradient(90deg, transparent, rgba(0,242,255,0.6) 40%, rgba(196,181,253,0.35) 70%, transparent)", opacity: hovered ? 1 : 0.4, transition: "opacity 0.35s" }} />
      <div style={{ padding: "2.25rem 2rem", display: "flex", flexDirection: "column", justifyContent: "space-between", borderRight: "1px solid rgba(255,255,255,0.055)" }}>
        <div>
          <OutcomeBadge id={project.id} />
          <h3 style={{ fontFamily: "Inter, sans-serif", fontWeight: 800, fontSize: "clamp(17px,2vw,22px)", color: "#F0F4FF", letterSpacing: "-0.03em", lineHeight: 1.2, marginTop: "1rem", marginBottom: "0.5rem" }}>{project.title}</h3>
          {project.subtitle && <p style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 10.5, color: "rgba(0,242,255,0.5)", letterSpacing: "0.04em", marginBottom: "1rem", lineHeight: 1.5 }}>{project.subtitle}</p>}
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: 14, color: "rgba(240,244,255,0.5)", lineHeight: 1.72, marginBottom: "1.5rem" }}>{project.description}</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
            {project.tags.map(t => <span key={t} style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "0.59rem", letterSpacing: "0.07em", padding: "0.28rem 0.65rem", borderRadius: "0.375rem", background: "rgba(0,242,255,0.07)", border: "1px solid rgba(0,242,255,0.14)", color: "rgba(0,242,255,0.72)" }}>{t}</span>)}
          </div>
        </div>
        <div style={{ display: "flex", gap: "0.625rem", marginTop: "1.75rem", alignItems: "center", flexWrap: "wrap" }}>
          <a href="#" style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", padding: "0.5rem 1.1rem", borderRadius: "0.5rem", background: "rgba(0,242,255,0.09)", border: "1px solid rgba(0,242,255,0.22)", color: "#00F2FF", fontFamily: "JetBrains Mono, monospace", fontSize: 11, fontWeight: 500, textDecoration: "none" }}>
            <ArrowUpRight size={12} /> Case Study
          </a>
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem",
                padding: "0.5rem 1rem", borderRadius: "0.5rem",
                border: "1px solid rgba(255,255,255,0.09)",
                color: "rgba(240,244,255,0.45)",
                fontFamily: "JetBrains Mono, monospace", fontSize: 11, textDecoration: "none" }}>
              <Github size={12} /> Source
            </a>
          )}
          <span style={{ marginLeft: "auto", fontFamily: "JetBrains Mono, monospace", fontSize: 10, color: "rgba(240,244,255,0.22)" }}>{project.year}</span>
        </div>
      </div>
      <div style={{ position: "relative", overflow: "hidden", background: "#000412", minHeight: 420 }}>
        <ProjectIllustration id={project.id} hovered={hovered} />
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none", background: "linear-gradient(90deg, rgba(0,8,36,0.4) 0%, transparent 20%, transparent 80%, rgba(0,4,18,0.2) 100%)" }} />
      </div>
    </div>
  );
}

function RegularCard({ project }: { project: ProjectExt }) {
  const [hovered, setHovered] = useState(false);
  const regularStyle: React.CSSProperties = {
      background: "#000824",
      border: hovered ? "1px solid rgba(0,242,255,0.20)" : "1px solid rgba(255,255,255,0.07)",
      borderRadius: "1.1rem", overflow: "hidden",
      transition: "border-color 0.3s, box-shadow 0.3s, transform 0.35s cubic-bezier(0.16,1,0.3,1)",
      boxShadow: hovered ? "0 0 50px rgba(0,242,255,0.06), 0 20px 60px rgba(0,0,0,0.8)" : "0 4px 30px rgba(0,0,0,0.6)",
      transform: hovered ? "translateY(-4px)" : "translateY(0)",
      display: "flex", flexDirection: "column", position: "relative" as const,
    };
    return (
    <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} style={regularStyle}>
      <div style={{ position: "relative", height: 250, overflow: "hidden", flexShrink: 0 }}>
        <ProjectIllustration id={project.id} hovered={hovered} />
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none", background: "linear-gradient(0deg, #000824 0%, rgba(0,8,36,0.3) 45%, transparent 100%)" }} />
        <OutcomeBadge id={project.id} corner />
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1.5, background: "linear-gradient(90deg, transparent, rgba(0,242,255,0.4), transparent)", opacity: hovered ? 1 : 0.3, transition: "opacity 0.3s" }} />
      </div>
      <div style={{ padding: "1.25rem 1.5rem", display: "flex", flexDirection: "column", flex: 1 }}>
        <h3 style={{ fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: 15, color: "#F0F4FF", letterSpacing: "-0.025em", lineHeight: 1.3, marginBottom: "0.35rem" }}>{project.title}</h3>
        {project.subtitle && <p style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 10, color: "rgba(0,242,255,0.45)", letterSpacing: "0.04em", marginBottom: "0.625rem", lineHeight: 1.4 }}>{project.subtitle}</p>}
        <p style={{ fontSize: 12.5, color: "rgba(240,244,255,0.42)", lineHeight: 1.65, fontFamily: "Inter, sans-serif", marginBottom: "1rem", flex: 1 }}>{project.description}</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem", marginBottom: "1rem" }}>
          {project.tags.slice(0,4).map(t => <span key={t} style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "0.575rem", letterSpacing: "0.07em", padding: "0.22rem 0.55rem", borderRadius: "0.3rem", background: "rgba(0,242,255,0.06)", border: "1px solid rgba(0,242,255,0.12)", color: "rgba(0,242,255,0.62)" }}>{t}</span>)}
        </div>
        <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
          <a href="#" style={{ display: "inline-flex", alignItems: "center", gap: "0.35rem", padding: "0.38rem 0.85rem", borderRadius: "0.5rem", background: "rgba(0,242,255,0.07)", border: "1px solid rgba(0,242,255,0.18)", color: "#00F2FF", fontFamily: "JetBrains Mono, monospace", fontSize: 10, textDecoration: "none" }}><ExternalLink size={10} /> Case Study</a>
          {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer" style={{ width: 30, height: 30, borderRadius: "0.5rem", display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "rgba(240,244,255,0.38)", textDecoration: "none" }}><Github size={12} /></a>}
          <span style={{ marginLeft: "auto", fontFamily: "JetBrains Mono, monospace", fontSize: 9, color: "rgba(240,244,255,0.22)" }}>{project.year}</span>
        </div>
      </div>
    </div>
  );
}

export function ProjectCard({ project, featured }: { project: Project; featured?: boolean; index?: number }) {
  if (featured) return <FeaturedCard project={project as ProjectExt} />;
  return <RegularCard project={project as ProjectExt} />;
}
