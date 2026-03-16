import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

const socials = [
  { icon: Github,   href: "https://github.com/vasudev-rao",   label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/vasudev-rao", label: "LinkedIn" },
  { icon: Mail,     href: "mailto:vasudev@example.com",       label: "Email" },
];

const cols = [
  {
    title: "Navigate",
    links: [
      { href: "/",        l: "Home" },
      { href: "/about",   l: "About" },
      { href: "/projects",l: "Projects" },
      { href: "/blog",    l: "Blog" },
      { href: "/contact", l: "Contact" },
    ],
  },
  {
    title: "Expertise",
    links: [
      { href: "#", l: "Databricks / PySpark" },
      { href: "#", l: "Kafka / Airflow" },
      { href: "#", l: "Delta Lake / Iceberg" },
      { href: "#", l: "Snowflake / BigQuery" },
      { href: "#", l: "AWS & GCP" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative mt-40 border-t border-white/[0.04]">
      {/* Top glow line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(0,242,255,0.3), transparent)" }}/>

      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

          {/* Brand */}
          <div className="md:col-span-2 space-y-5">
            <div className="flex items-center gap-3">
              <svg viewBox="0 0 36 36" fill="none" className="w-9 h-9 flex-shrink-0">
                <rect x="1" y="1" width="34" height="34" rx="8" stroke="rgba(0,242,255,0.3)" strokeWidth="1"
                  fill="rgba(0,242,255,0.06)"/>
                <path d="M7 10 L13 24 L19 10" stroke="#00F2FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                <path d="M21 10 L21 24 M21 10 L27 10 Q30 10 30 14 Q30 18 27 18 L21 18 M27 18 L30 24"
                  stroke="#00F2FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              </svg>
              <div>
                <p className="font-display font-800 text-base text-white tracking-tight">Vasudev Rao</p>
                <p className="font-mono text-[10px] text-[#00F2FF]/60 tracking-[0.14em] uppercase">Senior Data Engineer</p>
              </div>
            </div>
            <p className="text-sm text-white/45 leading-relaxed max-w-xs">
              6+ years designing distributed data platforms — 1B+ events/day streaming, Databricks lakehouses, and 100TB+ warehouse migrations on AWS & GCP.
            </p>
            <div className="flex gap-2 pt-1">
              {socials.map(({ icon: Icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                  className="w-9 h-9 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-white/40 hover:text-[#00F2FF] hover:border-[rgba(0,242,255,0.25)] hover:bg-[rgba(0,242,255,0.06)] transition-all duration-200">
                  <Icon size={14}/>
                </a>
              ))}
            </div>
          </div>

          {cols.map((col) => (
            <div key={col.title}>
              <p className="font-mono text-[10px] text-white/30 tracking-[0.18em] uppercase mb-5">{col.title}</p>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l.l}>
                    <Link href={l.href}
                      className="text-sm text-white/45 hover:text-white/80 transition-colors font-body">
                      {l.l}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="divider mb-6"/>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[11px] text-white/25 font-mono">
            © {new Date().getFullYear()} Vasudev Rao — Senior Data Engineer · Apache Spark · Kafka · Databricks · Snowflake · AWS · GCP
          </p>
          <div className="flex items-center gap-3">
            {["Next.js", "Tailwind", "TypeScript"].map((t) => (
              <span key={t} className="text-[10px] font-mono text-[#00F2FF]/40 tracking-wider">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
