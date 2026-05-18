"use client"

import Link from "next/link"
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react"

const NAV = [
  { label: "Projects",   href: "/projects" },
  { label: "Experience", href: "/experience" },
  { label: "Tutorials",  href: "/tutorials" },
  { label: "Blog",       href: "/blog" },
  { label: "Contact",    href: "/contact" },
]

const SOCIAL = [
  { Icon: Github,   href: "#", label: "GitHub" },
  { Icon: Linkedin, href: "#", label: "LinkedIn" },
  { Icon: Mail,     href: "#", label: "Email" },
]

const STACK = [
  "Kafka", "Delta Lake", "Spark", "dbt",
  "Databricks", "Kubernetes", "Flink", "Trino",
]

export default function Footer() {
  return (
    <footer className="relative dark:border-t dark:border-white/[0.05] border-t border-black/[0.06]">

      <div className="max-w-6xl mx-auto px-6 pt-10 pb-6">

        {/* TOP */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pb-8 dark:border-b dark:border-white/[0.06] border-b border-black/[0.06]">

          {/* brand */}
          <div>
            <h2 className="text-xl font-semibold tracking-tight flex items-center">
              <span className="dark:text-white/90 text-gray-800">Vasudeva</span>
              <span className="relative ml-1">
                <span className="font-bold bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(135deg, #4d7fd4 0%, #5b8ee8 55%, #7aaaf5 100%)" }}>
                  Rao
                </span>
              </span>
            </h2>
            <p className="text-xs dark:text-gray-500 text-gray-400 mt-1">
              Senior Data Engineer · Building at scale
            </p>
          </div>

          {/* CTA */}
          <div className="flex items-center gap-3">
            <p className="text-xs dark:text-gray-500 text-gray-400 hidden sm:block">Open to opportunities</p>
            <Link
              href="/contact"
              className="group relative inline-flex items-center gap-[5px] px-4 py-[7px] rounded-lg text-[12px] font-semibold text-white overflow-hidden transition-all duration-300 hover:brightness-110"
              style={{
                background: "linear-gradient(135deg, #1a2f6e 0%, #1e3a8a 55%, #1e40af 100%)",
                boxShadow: "0 0 0 1px rgba(30,58,138,0.5), 0 2px 8px rgba(26,47,110,0.5)",
              }}
            >
              <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12" />
              <span className="relative">Get In Touch</span>
              <ArrowUpRight size={11} className="relative transition-transform duration-200 group-hover:translate-x-[1px] group-hover:-translate-y-[1px]" />
            </Link>
          </div>

        </div>

        {/* MIDDLE */}
        <div className="grid grid-cols-3 gap-6 py-8 dark:border-b dark:border-white/[0.06] border-b border-black/[0.06]">

          {/* NAV */}
          <div>
            <p className="text-[10px] dark:text-gray-500 text-gray-400 tracking-widest uppercase mb-3">Navigation</p>
            <ul className="space-y-2">
              {NAV.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-xs dark:text-gray-400 text-gray-500 dark:hover:text-white hover:text-gray-900 transition">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* STACK */}
          <div>
            <p className="text-[10px] dark:text-gray-500 text-gray-400 tracking-widest uppercase mb-3">Tech Stack</p>
            <div className="flex flex-wrap gap-1.5">
              {STACK.map((t) => (
                <span key={t} className="px-2 py-0.5 text-[11px] dark:border-white/[0.06] border-black/[0.08] border rounded dark:text-gray-400 text-gray-500">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* SOCIAL */}
          <div>
            <p className="text-[10px] dark:text-gray-500 text-gray-400 tracking-widest uppercase mb-3">Connect</p>
            <div className="flex flex-col gap-2">
              {SOCIAL.map(({ Icon, href, label }) => (
                <a key={label} href={href} className="flex items-center gap-2 text-xs dark:text-gray-400 text-gray-500 dark:hover:text-white hover:text-gray-900 transition">
                  <span className="w-6 h-6 rounded dark:border-white/[0.06] border-black/[0.08] border flex items-center justify-center">
                    <Icon size={11} />
                  </span>
                  {label}
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="pt-5 flex flex-col sm:flex-row justify-between items-center gap-2 text-[11px] dark:text-gray-600 text-gray-400">
          <p>© {new Date().getFullYear()} Vasudevarao</p>
          <p>Built with Next.js · Tailwind</p>
        </div>

      </div>
    </footer>
  )
}
