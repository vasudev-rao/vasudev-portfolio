import Link from "next/link";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";

const socials = [
  { icon: Github, href: "https://github.com/yourgithub", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/yourlinkedin", label: "LinkedIn" },
  { icon: Mail, href: "mailto:vasudev@example.com", label: "Email" },
];

const cols = [
  { title: "Navigate", links: [{ href: "/", l: "Home" },{ href: "/about", l: "About" },{ href: "/projects", l: "Projects" },{ href: "/blog", l: "Blog" },{ href: "/contact", l: "Contact" }] },
  { title: "Expertise", links: [{ href: "#", l: "Databricks / PySpark" },{ href: "#", l: "Kafka / Airflow" },{ href: "#", l: "Delta Lake / Iceberg" },{ href: "#", l: "Snowflake / BigQuery" },{ href: "#", l: "AWS & GCP" }] },
];

export function Footer() {
  return (
    <footer className="relative mt-40 border-t border-white/[0.04]">
      {/* top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-electric/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-2 space-y-5">
            <div>
              <p className="font-label font-700 text-xs tracking-[0.2em] uppercase text-electric mb-1">VASUDEV RAO</p>
              <p className="font-display text-2xl font-800 text-ink leading-tight">
                Senior Data<br/>Engineer
              </p>
            </div>
            <p className="text-sm text-ink-secondary leading-relaxed max-w-xs">
              Building scalable batch & streaming data platforms, lakehouse architectures, and AI-ready pipelines that teams trust.
            </p>
            <div className="flex gap-2 pt-2">
              {socials.map(({ icon: Icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                  className="w-9 h-9 rounded-xl bg-surface-2 border border-white/[0.05] flex items-center justify-center text-ink-muted hover:text-electric hover:border-electric-border hover:bg-electric-dim transition-all duration-200">
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {cols.map((col) => (
            <div key={col.title}>
              <p className="font-label font-600 text-xs tracking-[0.15em] uppercase text-ink-muted mb-5">{col.title}</p>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l.l}>
                    <Link href={l.href} className="text-sm text-ink-secondary hover:text-ink transition-colors group flex items-center gap-1">
                      {l.l}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="divider mb-6" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-ink-muted font-mono">© {new Date().getFullYear()} Vasudev Rao · Built with precision, scaled for impact</p>
          <p className="text-xs text-ink-muted">
            <span className="text-electric/60">Next.js</span> · <span className="text-electric/60">Tailwind CSS</span> · <span className="text-electric/60">TypeScript</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
