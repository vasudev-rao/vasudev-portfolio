import React from "react";
import { Project } from "@/types";
import { Github, ExternalLink, ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
  index?: number;
}

/* ─────────────────────────────────────────────────────────────────
   SVG props — no xmlns spread (causes TS error in JSX),
   no object spread on <svg> (triggers "unknown prop" warning).
   Use explicit props on every <svg> tag instead.
───────────────────────────────────────────────────────────────── */
const VB = "0 0 400 220";
const SVG_STYLE: React.CSSProperties = {
  display: "block",
  width: "100%",
  height: "100%",
};

/* ═══════════════════════════════════════════════════════════════
   6 unique centered SVG illustrations — one per project ID
   400×220 viewBox, preserveAspectRatio="xMidYMid slice"
═══════════════════════════════════════════════════════════════ */
function Illustration({ id }: { id: string }) {

  /* ── 1. Real-Time Streaming Pipeline ── */
  if (id === "realtime-streaming-pipeline") return (
    <svg viewBox={VB} style={SVG_STYLE} preserveAspectRatio="xMidYMid slice">
      <defs>
        <radialGradient id="s1bg" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="#0d1e3a"/>
          <stop offset="100%" stopColor="#060b18"/>
        </radialGradient>
        <radialGradient id="s1g1" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#4f8ef7" stopOpacity="0.18"/>
          <stop offset="100%" stopColor="#4f8ef7" stopOpacity="0"/>
        </radialGradient>
        <radialGradient id="s1g2" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.2"/>
          <stop offset="100%" stopColor="#a78bfa" stopOpacity="0"/>
        </radialGradient>
        <radialGradient id="s1g3" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#10b981" stopOpacity="0.18"/>
          <stop offset="100%" stopColor="#10b981" stopOpacity="0"/>
        </radialGradient>
        <filter id="s1blur"><feGaussianBlur stdDeviation="6"/></filter>
        <filter id="s1glow">
          <feGaussianBlur stdDeviation="3" result="b"/>
          <feComposite in="SourceGraphic" in2="b" operator="over"/>
        </filter>
      </defs>

      <rect width="400" height="220" fill="url(#s1bg)"/>
      {Array.from({length:12},(_,c)=>Array.from({length:8},(_,r)=>(
        <circle key={`${c}-${r}`} cx={c*36+18} cy={r*30+10} r="1" fill="#4f8ef7" opacity="0.08"/>
      )))}
      <ellipse cx="68"  cy="110" rx="55" ry="55" fill="url(#s1g1)" filter="url(#s1blur)"/>
      <ellipse cx="200" cy="110" rx="55" ry="55" fill="url(#s1g2)" filter="url(#s1blur)"/>
      <ellipse cx="332" cy="110" rx="55" ry="55" fill="url(#s1g3)" filter="url(#s1blur)"/>

      {/* KAFKA */}
      <g filter="url(#s1glow)">
        <rect x="22" y="70" width="92" height="80" rx="14" fill="#07122a" stroke="#4f8ef7" strokeWidth="1.8"/>
      </g>
      <line x1="60" y1="96" x2="60" y2="124" stroke="#4f8ef7" strokeWidth="3" strokeLinecap="round"/>
      <line x1="60" y1="108" x2="74" y2="96"  stroke="#4f8ef7" strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="60" y1="112" x2="74" y2="124" stroke="#4f8ef7" strokeWidth="2.5" strokeLinecap="round"/>
      <text x="68" y="141" textAnchor="middle" fill="#4f8ef7" fontSize="8" fontWeight="700" fontFamily="monospace" letterSpacing="1">KAFKA</text>
      <circle cx="68" cy="110" r="46" fill="none" stroke="#4f8ef7" strokeWidth="0.7" opacity="0.15">
        <animate attributeName="r"       values="46;60;46"         dur="3s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0.15;0;0.15"      dur="3s" repeatCount="indefinite"/>
      </circle>

      {/* Kafka→Spark connector */}
      <line x1="116" y1="110" x2="176" y2="110" stroke="#4f8ef7" strokeWidth="1" strokeDasharray="4 4" opacity="0.3"/>
      {[0,1,2,3].map(i=>(
        <circle key={i} cx={124+i*14} cy="110" r="3.5" fill="#4f8ef7" opacity={0.9-i*0.15}>
          <animate attributeName="opacity"
            values={`${0.9-i*0.15};0.2;${0.9-i*0.15}`}
            dur="1.4s" begin={`${i*0.35}s`} repeatCount="indefinite"/>
        </circle>
      ))}

      {/* SPARK */}
      <g filter="url(#s1glow)">
        <rect x="154" y="58" width="92" height="104" rx="14" fill="#0e0a2a" stroke="#a78bfa" strokeWidth="2"/>
      </g>
      <path d="M208 80 L193 112 L202 112 L192 140 L214 106 L204 106 Z" fill="#a78bfa" opacity="0.9"/>
      <text x="200" y="154" textAnchor="middle" fill="#a78bfa" fontSize="8" fontWeight="700" fontFamily="monospace" letterSpacing="1">SPARK</text>

      {/* Spark→Delta connector */}
      <line x1="248" y1="110" x2="308" y2="110" stroke="#a78bfa" strokeWidth="1" strokeDasharray="4 4" opacity="0.3"/>
      {[0,1,2,3].map(i=>(
        <circle key={i} cx={256+i*14} cy="110" r="3.5" fill="#a78bfa" opacity={0.9-i*0.15}>
          <animate attributeName="opacity"
            values={`${0.9-i*0.15};0.2;${0.9-i*0.15}`}
            dur="1.4s" begin={`${i*0.35+0.7}s`} repeatCount="indefinite"/>
        </circle>
      ))}

      {/* DELTA */}
      <g filter="url(#s1glow)">
        <rect x="286" y="70" width="92" height="80" rx="14" fill="#071a10" stroke="#10b981" strokeWidth="1.8"/>
      </g>
      <polygon points="332,88 312,128 352,128" fill="none" stroke="#10b981" strokeWidth="2.5" strokeLinejoin="round"/>
      <polygon points="332,98 318,124 346,124" fill="#10b981" opacity="0.2"/>
      <text x="332" y="141" textAnchor="middle" fill="#10b981" fontSize="8" fontWeight="700" fontFamily="monospace" letterSpacing="1">DELTA</text>

      {/* Stats bar */}
      <rect x="22" y="170" width="356" height="32" rx="8" fill="#07101e" stroke="#ffffff06" strokeWidth="1"/>
      {([["<5s","LATENCY",72],["10M+","EVENTS/DAY",168],["0","DATA LOSS",264],["3×","SPIKE PROOF",354]] as [string,string,number][]).map(([v,l,x])=>(
        <g key={l}>
          <text x={x} y="183" textAnchor="middle" fill="#4f8ef7" fontSize="10" fontWeight="800" fontFamily="monospace">{v}</text>
          <text x={x} y="196" textAnchor="middle" fill="#3d5070" fontSize="6"  fontFamily="monospace" letterSpacing="0.5">{l}</text>
        </g>
      ))}
    </svg>
  );

  /* ── 2. Enterprise Lakehouse on Databricks ── */
  if (id === "enterprise-lakehouse-databricks") return (
    <svg viewBox={VB} style={SVG_STYLE} preserveAspectRatio="xMidYMid slice">
      <defs>
        <radialGradient id="s2bg" cx="50%" cy="60%" r="65%">
          <stop offset="0%" stopColor="#130f00"/>
          <stop offset="100%" stopColor="#060b18"/>
        </radialGradient>
        <linearGradient id="s2bronze" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#f59e0b" stopOpacity="0.35"/>
          <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.06"/>
        </linearGradient>
        <linearGradient id="s2silver" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#94a3b8" stopOpacity="0.4"/>
          <stop offset="100%" stopColor="#94a3b8" stopOpacity="0.06"/>
        </linearGradient>
        <linearGradient id="s2gold" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#fbbf24" stopOpacity="0.45"/>
          <stop offset="100%" stopColor="#fbbf24" stopOpacity="0.06"/>
        </linearGradient>
        <filter id="s2glow">
          <feGaussianBlur stdDeviation="5" result="b"/>
          <feComposite in="SourceGraphic" in2="b" operator="over"/>
        </filter>
        <filter id="s2blur"><feGaussianBlur stdDeviation="8"/></filter>
      </defs>

      <rect width="400" height="220" fill="url(#s2bg)"/>
      <ellipse cx="90"  cy="120" rx="60" ry="80"  fill="#f59e0b" opacity="0.04" filter="url(#s2blur)"/>
      <ellipse cx="200" cy="110" rx="60" ry="90"  fill="#94a3b8" opacity="0.05" filter="url(#s2blur)"/>
      <ellipse cx="310" cy="100" rx="60" ry="100" fill="#fbbf24" opacity="0.05" filter="url(#s2blur)"/>

      {/* BRONZE */}
      <g filter="url(#s2glow)">
        <rect x="28" y="96" width="100" height="100" rx="10" fill="url(#s2bronze)" stroke="#f59e0b" strokeWidth="1.6"/>
      </g>
      <ellipse cx="78" cy="96" rx="50" ry="12" fill="#f59e0b" opacity="0.22" stroke="#f59e0b" strokeWidth="1"/>
      <text x="78" y="120" textAnchor="middle" fill="#f59e0b" fontSize="10" fontWeight="800" fontFamily="monospace">BRONZE</text>
      {[0,1,2].map(i=>(
        <rect key={i} x={38+i*4} y={130+i*14} width={64-i*8} height="9" rx="3" fill="#f59e0b" opacity={0.3+i*0.08}/>
      ))}
      <text x="78" y="184" textAnchor="middle" fill="#f59e0b" fontSize="7" fontFamily="monospace" opacity="0.8">RAW · 50+ SOURCES</text>

      {/* Arrow B→S */}
      <line x1="132" y1="130" x2="146" y2="130" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="3 2" opacity="0.7"/>
      <polygon points="143,126 151,130 143,134" fill="#94a3b8" opacity="0.7"/>

      {/* SILVER */}
      <g filter="url(#s2glow)">
        <rect x="150" y="56" width="100" height="140" rx="10" fill="url(#s2silver)" stroke="#94a3b8" strokeWidth="1.6"/>
      </g>
      <ellipse cx="200" cy="56" rx="50" ry="12" fill="#94a3b8" opacity="0.2" stroke="#94a3b8" strokeWidth="1"/>
      <text x="200" y="82" textAnchor="middle" fill="#e2e8f0" fontSize="10" fontWeight="800" fontFamily="monospace">SILVER</text>
      <text x="200" y="96" textAnchor="middle" fill="#94a3b8" fontSize="7" fontFamily="monospace">dbt transforms</text>
      {[0,1,2,3].map(i=>(
        <rect key={i} x="162" y={106+i*16} width={76-i*6} height="8" rx="3" fill="#94a3b8" opacity={0.18+i*0.04}/>
      ))}
      <text x="200" y="178" textAnchor="middle" fill="#94a3b8" fontSize="7" fontFamily="monospace">Great Expectations</text>
      <text x="200" y="190" textAnchor="middle" fill="#64748b" fontSize="7" fontFamily="monospace">contracts · schema</text>

      {/* Arrow S→G */}
      <line x1="254" y1="120" x2="268" y2="120" stroke="#fbbf24" strokeWidth="1.5" strokeDasharray="3 2" opacity="0.7"/>
      <polygon points="265,116 273,120 265,124" fill="#fbbf24" opacity="0.7"/>

      {/* GOLD */}
      <g filter="url(#s2glow)">
        <rect x="272" y="26" width="100" height="170" rx="10" fill="url(#s2gold)" stroke="#fbbf24" strokeWidth="2"/>
      </g>
      <ellipse cx="322" cy="26" rx="50" ry="12" fill="#fbbf24" opacity="0.25" stroke="#fbbf24" strokeWidth="1.2"/>
      <text x="322" y="50" textAnchor="middle" fill="#fbbf24" fontSize="10" fontWeight="800" fontFamily="monospace">GOLD</text>
      <text x="322" y="64" textAnchor="middle" fill="#fbbf24" fontSize="7" fontFamily="monospace">Analytics Ready</text>
      {[50,70,45,85,60,78].map((v,i)=>(
        <rect key={i} x={280+i*14} y={192-v*0.7} width="11" height={v*0.7} rx="2" fill="#fbbf24" opacity={0.25+i*0.06}/>
      ))}
      <text x="322" y="168" textAnchor="middle" fill="#fbbf24" fontSize="8" fontWeight="700" fontFamily="monospace">-60% runtime</text>
      <text x="322" y="180" textAnchor="middle" fill="#fbbf24" fontSize="7" fontFamily="monospace">Photon · Unity Catalog</text>

      <rect x="110" y="202" width="180" height="14" rx="7" fill="#4f8ef7" opacity="0.1" stroke="#4f8ef7" strokeWidth="0.6"/>
      <text x="200" y="212" textAnchor="middle" fill="#6fa8ff" fontSize="6.5" fontFamily="monospace" fontWeight="600">UNITY CATALOG · LINEAGE · dbt</text>
    </svg>
  );

  /* ── 3. Warehouse Modernization — Snowflake & BigQuery ── */
  if (id === "snowflake-bigquery-modernization") return (
    <svg viewBox={VB} style={SVG_STYLE} preserveAspectRatio="xMidYMid slice">
      <defs>
        <radialGradient id="s3bg" cx="50%" cy="50%" r="65%">
          <stop offset="0%" stopColor="#06101a"/>
          <stop offset="100%" stopColor="#060b18"/>
        </radialGradient>
        {/* migGrad MUST live in defs — never inside a <g> */}
        <linearGradient id="migGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%"   stopColor="#ef4444"/>
          <stop offset="100%" stopColor="#38bdf8"/>
        </linearGradient>
        <filter id="s3glow">
          <feGaussianBlur stdDeviation="4" result="b"/>
          <feComposite in="SourceGraphic" in2="b" operator="over"/>
        </filter>
        <filter id="s3blur"><feGaussianBlur stdDeviation="8"/></filter>
      </defs>

      <rect width="400" height="220" fill="url(#s3bg)"/>
      <ellipse cx="72"  cy="110" rx="56" ry="70" fill="#ef4444" opacity="0.04" filter="url(#s3blur)"/>
      <ellipse cx="220" cy="110" rx="80" ry="90" fill="#38bdf8" opacity="0.04" filter="url(#s3blur)"/>

      {/* Legacy cylinder */}
      <g filter="url(#s3glow)">
        <rect x="14" y="60" width="90" height="120" rx="10" fill="#1a0808" stroke="#ef4444" strokeWidth="1.6"/>
        <ellipse cx="59" cy="60"  rx="45" ry="13" fill="#ef4444" opacity="0.2"  stroke="#ef4444" strokeWidth="1.2"/>
        <ellipse cx="59" cy="180" rx="45" ry="13" fill="#ef4444" opacity="0.1"/>
      </g>
      <text x="59" y="90"  textAnchor="middle" fill="#ef4444" fontSize="8" fontWeight="700" fontFamily="monospace">LEGACY</text>
      <text x="59" y="104" textAnchor="middle" fill="#f87171" fontSize="7" fontFamily="monospace">Redshift</text>
      <text x="59" y="116" textAnchor="middle" fill="#f87171" fontSize="7" fontFamily="monospace">Oracle</text>
      <text x="59" y="134" textAnchor="middle" fill="#ef4444" fontSize="7" fontFamily="monospace" opacity="0.7">T+1 refresh</text>
      <text x="59" y="146" textAnchor="middle" fill="#ef4444" fontSize="7" fontFamily="monospace" opacity="0.6">full scans</text>
      <text x="59" y="161" textAnchor="middle" fill="#ef4444" fontSize="7" fontFamily="monospace" opacity="0.5">100 TB</text>

      {/* Migration arrow */}
      <line x1="108" y1="110" x2="168" y2="110" stroke="url(#migGrad)" strokeWidth="2.5"/>
      <polygon points="165,105 176,110 165,115" fill="#38bdf8"/>
      <rect x="118" y="97" width="40" height="12" rx="6" fill="#4f8ef7" opacity="0.15"/>
      <text x="138" y="107" textAnchor="middle" fill="#6fa8ff" fontSize="6.5" fontFamily="monospace">100 TB</text>

      {/* Snowflake box */}
      <g filter="url(#s3glow)">
        <rect x="176" y="28" width="110" height="84" rx="12" fill="#00080f" stroke="#38bdf8" strokeWidth="1.8"/>
      </g>
      <text x="231" y="48" textAnchor="middle" fill="#38bdf8" fontSize="8.5" fontWeight="700" fontFamily="monospace">SNOWFLAKE</text>
      <g transform="translate(231,78)">
        {([0,60,120] as number[]).map(a=>{
          const rad=a*Math.PI/180, c=Math.cos(rad), s=Math.sin(rad);
          const px=Math.cos(rad+Math.PI/2)*7, py=Math.sin(rad+Math.PI/2)*7;
          return (
            <g key={a} stroke="#38bdf8" strokeWidth="2" strokeLinecap="round">
              <line x1={c*20}    y1={s*20}    x2={-c*20}   y2={-s*20}/>
              <line x1={c*10+px} y1={s*10+py} x2={c*10-px} y2={s*10-py}/>
              <line x1={-c*10+px} y1={-s*10+py} x2={-c*10-px} y2={-s*10-py}/>
            </g>
          );
        })}
        <circle cx="0" cy="0" r="4" fill="#38bdf8"/>
      </g>
      <text x="231" y="100" textAnchor="middle" fill="#7dd3fc" fontSize="7" fontFamily="monospace">micro-partition clustering</text>

      {/* BigQuery box */}
      <g filter="url(#s3glow)">
        <rect x="176" y="122" width="110" height="76" rx="12" fill="#000f08" stroke="#34d399" strokeWidth="1.8"/>
      </g>
      <text x="231" y="142" textAnchor="middle" fill="#34d399" fontSize="8.5" fontWeight="700" fontFamily="monospace">BIGQUERY</text>
      <g transform="translate(231,168)">
        <circle cx="0" cy="0" r="16" fill="none" stroke="#34d399" strokeWidth="1" opacity="0.3"/>
        <path d="M0,-16 A16,16 0 0,1 13.8,8 L0,0Z"    fill="#34d399" opacity="0.6"/>
        <path d="M13.8,8 A16,16 0 0,1 -13.8,8 L0,0Z"  fill="#34d399" opacity="0.3"/>
        <path d="M-13.8,8 A16,16 0 0,1 0,-16 L0,0Z"   fill="#34d399" opacity="0.15"/>
      </g>
      <text x="231" y="190" textAnchor="middle" fill="#6ee7b7" fontSize="7" fontFamily="monospace">42s → 11s p95</text>

      {/* Results panel */}
      <g filter="url(#s3glow)">
        <rect x="298" y="42" width="94" height="148" rx="12" fill="#080d1a" stroke="#a78bfa" strokeWidth="1.4"/>
      </g>
      <text x="345" y="60" textAnchor="middle" fill="#a78bfa" fontSize="8" fontWeight="700" fontFamily="monospace">RESULTS</text>
      {([["QUERY","70%","#10b981",0.70],["COST","40%","#38bdf8",0.40],["SPEED","3x","#f59e0b",0.75]] as [string,string,string,number][]).map(([label,val,color,ratio],i)=>(
        <g key={label}>
          <text x="306" y={80+i*38}  fill="#64748b" fontSize="6.5" fontFamily="monospace">{label}</text>
          <rect x="306" y={84+i*38}  width="78" height="8" rx="3" fill="#0d1326"/>
          <rect x="306" y={84+i*38}  width={78*ratio} height="8" rx="3" fill={color} opacity="0.75"/>
          <text x="386" y={92+i*38}  textAnchor="end" fill={color} fontSize="9" fontWeight="700" fontFamily="monospace">{val}</text>
        </g>
      ))}
      <text x="345" y="178" textAnchor="middle" fill="#a78bfa" fontSize="6.5" fontFamily="monospace">zero downtime</text>
      <text x="345" y="188" textAnchor="middle" fill="#6b7ab8" fontSize="6.5" fontFamily="monospace">dual-write valid.</text>
    </svg>
  );

  /* ── 4. ML Feature Store ── */
  if (id === "mlops-feature-store") return (
    <svg viewBox={VB} style={SVG_STYLE} preserveAspectRatio="xMidYMid slice">
      <defs>
        <radialGradient id="s4bg" cx="50%" cy="50%" r="65%">
          <stop offset="0%" stopColor="#0d0820"/>
          <stop offset="100%" stopColor="#060b18"/>
        </radialGradient>
        <radialGradient id="s4hub" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#1a1040"/>
          <stop offset="100%" stopColor="#0a0620"/>
        </radialGradient>
        <filter id="s4glow">
          <feGaussianBlur stdDeviation="5" result="b"/>
          <feComposite in="SourceGraphic" in2="b" operator="over"/>
        </filter>
        <filter id="s4blur"><feGaussianBlur stdDeviation="10"/></filter>
      </defs>

      <rect width="400" height="220" fill="url(#s4bg)"/>
      <circle cx="200" cy="110" r="80" fill="#a78bfa" opacity="0.04" filter="url(#s4blur)"/>
      <circle cx="200" cy="110" r="50" fill="#4f8ef7" opacity="0.05" filter="url(#s4blur)"/>
      <ellipse cx="200" cy="110" rx="118" ry="90" fill="none" stroke="#4f8ef7" strokeWidth="0.6" strokeDasharray="6 5" opacity="0.18"/>

      {/* Central hex hub */}
      <g filter="url(#s4glow)">
        <polygon points="200,58 245,84 245,136 200,162 155,136 155,84" fill="url(#s4hub)" stroke="#a78bfa" strokeWidth="2"/>
        <polygon points="200,65 238,88 238,132 200,155 162,132 162,88" fill="none" stroke="#a78bfa" strokeWidth="0.6" opacity="0.4"/>
      </g>
      <text x="200" y="102" textAnchor="middle" fill="#a78bfa" fontSize="8" fontWeight="700" fontFamily="monospace">FEATURE</text>
      <text x="200" y="114" textAnchor="middle" fill="#a78bfa" fontSize="8" fontWeight="700" fontFamily="monospace">STORE</text>
      <text x="200" y="128" textAnchor="middle" fill="#6fa8ff" fontSize="6.5" fontFamily="monospace">1,000+ features</text>
      <text x="200" y="140" textAnchor="middle" fill="#10b981" fontSize="6.5" fontFamily="monospace">p99 &lt;8ms</text>

      {/* Left sources */}
      {([
        {label:"DATABRICKS",color:"#f59e0b",y:62},
        {label:"DELTA LAKE",color:"#a78bfa",y:110},
        {label:"AIRFLOW",   color:"#38bdf8",y:158},
      ]).map(({label,color,y})=>(
        <g key={label}>
          <line x1="92" y1={y} x2="154" y2="110" stroke={color} strokeWidth="0.9" strokeDasharray="5 3" opacity="0.4"/>
          <circle cx="92" cy={y} r="3.5" fill={color} opacity="0.8"/>
          <g filter="url(#s4glow)">
            <rect x="10" y={y-18} width="80" height="36" rx="8" fill="#0a1020" stroke={color} strokeWidth="1.3"/>
          </g>
          <text x="50" y={y+5} textAnchor="middle" fill={color} fontSize="7" fontWeight="600" fontFamily="monospace">{label}</text>
        </g>
      ))}

      {/* Right consumers */}
      {([
        {label:"TRAINING",  color:"#10b981",y:62},
        {label:"INFERENCE", color:"#ef4444",y:110},
        {label:"MLFLOW",    color:"#fbbf24",y:158},
      ]).map(({label,color,y})=>(
        <g key={label}>
          <line x1="246" y1="110" x2="308" y2={y} stroke={color} strokeWidth="0.9" strokeDasharray="5 3" opacity="0.4"/>
          <circle cx="308" cy={y} r="3.5" fill={color} opacity="0.8"/>
          <g filter="url(#s4glow)">
            <rect x="310" y={y-18} width="80" height="36" rx="8" fill="#0a1020" stroke={color} strokeWidth="1.3"/>
          </g>
          <text x="350" y={y+5} textAnchor="middle" fill={color} fontSize="7" fontWeight="600" fontFamily="monospace">{label}</text>
        </g>
      ))}

      <rect x="130" y="192" width="140" height="20" rx="10" fill="#ef4444" opacity="0.1" stroke="#ef4444" strokeWidth="0.7"/>
      <text x="200" y="205" textAnchor="middle" fill="#ef4444" fontSize="7" fontFamily="monospace" fontWeight="600">REDIS · ONLINE SERVING</text>
    </svg>
  );

  /* ── 5. Fintech Credit Risk Pipeline ── */
  if (id === "fintech-credit-risk-pipeline") return (
    <svg viewBox={VB} style={SVG_STYLE} preserveAspectRatio="xMidYMid slice">
      <defs>
        <radialGradient id="s5bg" cx="50%" cy="50%" r="65%">
          <stop offset="0%" stopColor="#001a0a"/>
          <stop offset="100%" stopColor="#060b18"/>
        </radialGradient>
        <filter id="s5glow">
          <feGaussianBlur stdDeviation="4" result="b"/>
          <feComposite in="SourceGraphic" in2="b" operator="over"/>
        </filter>
        <filter id="s5blur"><feGaussianBlur stdDeviation="8"/></filter>
      </defs>

      <rect width="400" height="220" fill="url(#s5bg)"/>
      {Array.from({length:10},(_,i)=>(
        <line key={`v${i}`} x1={i*44} y1="0" x2={i*44} y2="220" stroke="#10b981" strokeWidth="0.4" opacity="0.05"/>
      ))}
      {Array.from({length:6},(_,i)=>(
        <line key={`h${i}`} x1="0" y1={i*44} x2="400" y2={i*44} stroke="#10b981" strokeWidth="0.4" opacity="0.05"/>
      ))}

      {([
        {label:"APPLICANT", sub:"100K+/day", color:"#4f8ef7",  x:10,  w:60, icon:"person"},
        {label:"KAFKA",     sub:"events",    color:"#f59e0b",  x:88,  w:60, icon:"kafka"},
        {label:"ENRICHMENT",sub:"PySpark",   color:"#a78bfa",  x:166, w:68, icon:"enrich"},
        {label:"ML SCORE",  sub:"95% acc",   color:"#10b981",  x:252, w:68, icon:"score"},
        {label:"DECISION",  sub:"<2min",     color:"#10b981",  x:338, w:54, icon:"check"},
      ] as {label:string;sub:string;color:string;x:number;w:number;icon:string}[]).map(({label,sub,color,x,w,icon},i)=>{
        const cx = x+w/2, cy = 96;
        return (
          <g key={label}>
            <ellipse cx={cx} cy={cy} rx={w/2+10} ry="55" fill={color} opacity="0.03" filter="url(#s5blur)"/>
            <g filter="url(#s5glow)">
              <rect x={x} y={cy-44} width={w} height="88" rx="12" fill="#071220" stroke={color} strokeWidth="1.6"/>
            </g>
            {icon==="person" && <>
              <circle cx={cx} cy={cy-20} r="9" fill={color} opacity="0.7"/>
              <path d={`M${cx-14},${cy+2} Q${cx},${cy-8} ${cx+14},${cy+2}`} fill={color} opacity="0.4"/>
            </>}
            {icon==="kafka" && <>
              <circle cx={cx} cy={cy-18} r="7" fill={color} opacity="0.75"/>
              <circle cx={cx-9} cy={cy-4} r="5" fill={color} opacity="0.5"/>
              <circle cx={cx+9} cy={cy-4} r="5" fill={color} opacity="0.5"/>
              <line x1={cx} y1={cy-11} x2={cx-9} y2={cy-9} stroke={color} strokeWidth="1.8"/>
              <line x1={cx} y1={cy-11} x2={cx+9} y2={cy-9} stroke={color} strokeWidth="1.8"/>
            </>}
            {icon==="enrich" && [0,1,2,3].map(j=>(
              <rect key={j} x={x+8} y={cy-28+j*16} width={w-16-j*4} height="10" rx="3" fill={color} opacity={0.18+j*0.05}/>
            ))}
            {icon==="score" && <>
              <circle cx={cx} cy={cy-12} r="22" fill="none" stroke={color} strokeWidth="1" opacity="0.2"/>
              <path d={`M${cx-22},${cy-12} A22,22 0 0,1 ${cx+22},${cy-12}`} fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" opacity="0.8"/>
              <text x={cx} y={cy-6} textAnchor="middle" fill={color} fontSize="10" fontWeight="800" fontFamily="monospace">95%</text>
            </>}
            {icon==="check" && <>
              <circle cx={cx} cy={cy-14} r="18" fill={color} opacity="0.12" stroke={color} strokeWidth="1.5"/>
              <path d={`M${cx-10},${cy-14} L${cx-3},${cy-6} L${cx+12},${cy-24}`} fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            </>}
            <text x={cx} y={cy+28} textAnchor="middle" fill={color} fontSize="7"   fontWeight="700" fontFamily="monospace">{label}</text>
            <text x={cx} y={cy+40} textAnchor="middle" fill={color} fontSize="6.5" fontFamily="monospace" opacity="0.7">{sub}</text>
            {i<4 && <>
              <line x1={x+w} y1={cy} x2={x+w+8} y2={cy} stroke={color} strokeWidth="1.2" strokeDasharray="3 2" opacity="0.4"/>
              {[0,1].map(p=>(
                <circle key={p} cx={x+w+4+p*7} cy={cy} r="2.5" fill={color} opacity={0.7-p*0.2}>
                  <animate attributeName="opacity"
                    values={`${0.7-p*0.2};0.1;${0.7-p*0.2}`}
                    dur="1.2s" begin={`${i*0.25+p*0.3}s`} repeatCount="indefinite"/>
                </circle>
              ))}
            </>}
          </g>
        );
      })}

      {/* Latency callout */}
      <rect x="14" y="168" width="372" height="36" rx="9" fill="#071220" stroke="#10b981" strokeWidth="0.8" opacity="0.8"/>
      <text x="118" y="182" textAnchor="middle" fill="#ef4444" fontSize="11" fontWeight="800" fontFamily="monospace">48 HRS</text>
      <text x="200" y="182" textAnchor="middle" fill="#445070" fontSize="10" fontFamily="monospace">to</text>
      <text x="282" y="182" textAnchor="middle" fill="#10b981" fontSize="11" fontWeight="800" fontFamily="monospace">&lt;2 MIN</text>
      <text x="200" y="196" textAnchor="middle" fill="#3d5a40" fontSize="6.5" fontFamily="monospace">DECISION LATENCY · 100K+ APPLICATIONS/DAY · 95%+ ACCURACY</text>
    </svg>
  );

  /* ── 6. Cloud Cost Governance Framework ── */
  if (id === "cloud-cost-optimization") return (
    <svg viewBox={VB} style={SVG_STYLE} preserveAspectRatio="xMidYMid slice">
      <defs>
        <radialGradient id="s6bg" cx="50%" cy="40%" r="65%">
          <stop offset="0%" stopColor="#050f0a"/>
          <stop offset="100%" stopColor="#060b18"/>
        </radialGradient>
        <linearGradient id="redArea" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#ef4444" stopOpacity="0.15"/>
          <stop offset="100%" stopColor="#ef4444" stopOpacity="0"/>
        </linearGradient>
        <linearGradient id="greenArea" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#10b981" stopOpacity="0.15"/>
          <stop offset="100%" stopColor="#10b981" stopOpacity="0"/>
        </linearGradient>
        <filter id="s6glow">
          <feGaussianBlur stdDeviation="4" result="b"/>
          <feComposite in="SourceGraphic" in2="b" operator="over"/>
        </filter>
        <filter id="s6blur"><feGaussianBlur stdDeviation="8"/></filter>
      </defs>

      <rect width="400" height="220" fill="url(#s6bg)"/>
      <rect x="34" y="16" width="330" height="136" rx="8" fill="#060b18" stroke="#1e2a40" strokeWidth="1"/>
      {[0,1,2,3,4].map(i=>(
        <g key={i}>
          <line x1="34" y1={28+i*26} x2="364" y2={28+i*26} stroke="#1a2535" strokeWidth="0.8"/>
          <text x="28" y={32+i*26} textAnchor="end" fill="#334155" fontSize="6" fontFamily="monospace">{100-i*25}%</text>
        </g>
      ))}

      {/* Rising red cost */}
      <path d="M44,136 66,118 100,96 134,72 166,52 190,40 190,136 Z" fill="url(#redArea)"/>
      <polyline points="44,136 66,118 100,96 134,72 166,52 190,40"
        fill="none" stroke="#ef4444" strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round"/>

      {/* Enforcement line */}
      <line x1="190" y1="18" x2="190" y2="150" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="5 3" opacity="0.8"/>
      <rect x="158" y="18" width="64" height="14" rx="7" fill="#f59e0b" opacity="0.15"/>
      <text x="190" y="28" textAnchor="middle" fill="#f59e0b" fontSize="6.5" fontFamily="monospace" fontWeight="700">DAY 0</text>

      {/* Dropping green cost */}
      <path d="M190,40 220,56 258,76 300,96 340,110 358,118 358,136 190,136 Z" fill="url(#greenArea)"/>
      <polyline points="190,40 220,56 258,76 300,96 340,110 358,118"
        fill="none" stroke="#10b981" strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round"/>

      {/* -40% callout */}
      <g filter="url(#s6glow)">
        <rect x="256" y="24" width="98" height="52" rx="10" fill="#051a10" stroke="#10b981" strokeWidth="1.6"/>
      </g>
      <text x="305" y="50" textAnchor="middle" fill="#10b981" fontSize="24" fontWeight="800" fontFamily="monospace">-40%</text>
      <text x="305" y="67" textAnchor="middle" fill="#6ee7b7" fontSize="7" fontFamily="monospace">cloud spend</text>

      <rect x="34" y="148" width="80" height="14" rx="7" fill="#10b981" opacity="0.1" stroke="#10b981" strokeWidth="0.7"/>
      <text x="74" y="158" textAnchor="middle" fill="#10b981" fontSize="6.5" fontFamily="monospace">90 days</text>
      <text x="280" y="158" textAnchor="middle" fill="#445070" fontSize="6.5" fontFamily="monospace">20+ workspaces · Terraform auto-remediation</text>

      {/* Source nodes */}
      {([
        {l:"AWS",        c:"#f59e0b", x:14},
        {l:"GCP",        c:"#38bdf8", x:94},
        {l:"DATABRICKS", c:"#a78bfa", x:174},
        {l:"BIGQUERY",   c:"#34d399", x:262},
        {l:"TERRAFORM",  c:"#4f8ef7", x:340},
      ] as {l:string;c:string;x:number}[]).map(({l,c,x})=>(
        <g key={l} filter="url(#s6glow)">
          <rect x={x} y="172" width="54" height="34" rx="8" fill="#0a1020" stroke={c} strokeWidth="1.2"/>
          <text x={x+27} y="186" textAnchor="middle" fill={c} fontSize="6.5" fontWeight="700" fontFamily="monospace">{l}</text>
          <text x={x+27} y="198" textAnchor="middle" fill={c} fontSize="5.5" fontFamily="monospace" opacity="0.65">API</text>
        </g>
      ))}

      <text x="200" y="216" textAnchor="middle" fill="#2d4a35" fontSize="6.5" fontFamily="monospace">Anomaly Detection · Isolation Forest · Slack Alerts · Chargeback</text>
    </svg>
  );

  /* Fallback */
  return (
    <svg viewBox={VB} style={SVG_STYLE} preserveAspectRatio="xMidYMid slice">
      <rect width="400" height="220" fill="#060b18"/>
      <text x="200" y="114" textAnchor="middle" fill="#4f8ef7" fontSize="14" fontFamily="monospace" fontWeight="700">DATA ENGINEERING</text>
    </svg>
  );
}

/* ════════════════════════════════════
   ProjectCard — v17 layout
════════════════════════════════════ */
export function ProjectCard({ project, featured, index = 0 }: ProjectCardProps) {

  if (featured) {
    return (
      <article className="group card overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">

          {/* Illustration panel */}
          <div className="lg:col-span-4 flex-shrink-0"
            style={{ position:"relative", minHeight:"208px" }}>
            <div style={{ position:"absolute", inset:0, background:"#060b18" }}>
              <Illustration id={project.id}/>
            </div>
            <div style={{
              position:"absolute", inset:0, pointerEvents:"none",
              background:"linear-gradient(to right, transparent 60%, #0d1326 100%)",
            }}/>
          </div>

          {/* Content */}
          <div className="lg:col-span-8 p-5 lg:p-6 flex flex-col justify-between gap-4">
            <div>
              <p className="font-label font-600 text-[10px] tracking-[0.2em] uppercase text-electric mb-2">
                {project.year}
              </p>
              <h3 className="font-display font-800 text-lg text-ink group-hover:text-white transition-colors mb-2">
                {project.title}
              </h3>
              <p className="text-xs text-ink-secondary leading-relaxed line-clamp-3">
                {project.description}
              </p>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {project.tags.slice(0, 5).map((t) => <span key={t} className="tag">{t}</span>)}
            </div>
            <div className="flex items-center gap-3 pt-2 border-t border-white/[0.04]">
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer"
                  className="btn-outline text-xs py-1.5 px-3">
                  <Github size={12}/> Source
                </a>
              )}
              {project.demo && (
                <a href={project.demo} target="_blank" rel="noopener noreferrer"
                  className="btn-primary text-xs py-1.5 px-3">
                  Live Demo <ArrowUpRight size={12}/>
                </a>
              )}
            </div>
          </div>
        </div>
      </article>
    );
  }

  /* Grid card */
  return (
    <article className="group card p-5 flex flex-col gap-3 h-full">

      {/* Illustration */}
      <div style={{
        position:     "relative",
        height:       "148px",
        marginLeft:   "-21px",
        marginRight:  "-21px",
        marginTop:    "-21px",
        overflow:     "hidden",
        background:   "#060b18",
        borderRadius: "1.5rem 1.5rem 0 0",
        flexShrink:   0,
      }}>
        <div style={{ position:"absolute", inset:0 }}>
          <Illustration id={project.id}/>
        </div>
        <div style={{
          position:"absolute", inset:0, pointerEvents:"none",
          background:"linear-gradient(to bottom, transparent 55%, #0d1326 100%)",
        }}/>
        <div className="absolute top-2.5 right-2.5">
          <span className="font-mono text-[10px] text-electric bg-electric-dim border border-electric-border rounded-lg px-2 py-0.5">
            {project.year}
          </span>
        </div>
      </div>

      <div className="flex-1">
        <h3 className="font-display font-800 text-sm text-ink group-hover:text-white transition-colors mb-1.5">
          {project.title}
        </h3>
        <p className="text-xs text-ink-secondary leading-relaxed line-clamp-2">{project.description}</p>
      </div>

      <div className="flex flex-wrap gap-1">
        {project.tags.slice(0, 3).map((t) => (
          <span key={t} className="tag text-[10px] py-0.5 px-1.5">{t}</span>
        ))}
      </div>

      <div className="flex items-center justify-between pt-2.5 border-t border-white/[0.04]">
        <div className="flex gap-1.5">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"
              className="w-7 h-7 rounded-lg bg-surface-2 border border-white/[0.05] flex items-center justify-center text-ink-muted hover:text-electric hover:border-electric-border transition-all duration-200 hover:shadow-[0_0_12px_rgba(79,142,247,0.15)]">
              <Github size={12}/>
            </a>
          )}
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noopener noreferrer" aria-label="Demo"
              className="w-7 h-7 rounded-lg bg-surface-2 border border-white/[0.05] flex items-center justify-center text-ink-muted hover:text-electric hover:border-electric-border transition-all duration-200 hover:shadow-[0_0_12px_rgba(79,142,247,0.15)]">
              <ExternalLink size={12}/>
            </a>
          )}
        </div>
        <ArrowUpRight size={13} className="text-ink-muted group-hover:text-electric group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"/>
      </div>
    </article>
  );
}
