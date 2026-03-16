"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { href: "/",        label: "Home" },
  { href: "/about",   label: "About" },
  { href: "/projects",label: "Projects" },
  { href: "/blog",    label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen]       = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Check initial scroll position immediately
    setScrolled(window.scrollY > 20);
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 inset-x-0 z-50 h-[68px] transition-all duration-300"
      style={{
        background: scrolled
          ? "rgba(0,4,18,0.90)"
          : "rgba(0,4,18,0.65)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(255,255,255,0.1)",
        boxShadow: scrolled ? "0 4px 32px rgba(0,0,0,0.6)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-full">

        {/* ── VR Logo ── */}
        <Link href="/" className="group flex items-center gap-3 flex-shrink-0">
          <svg viewBox="0 0 36 36" fill="none" className="w-9 h-9 flex-shrink-0">
            <rect x="0.5" y="0.5" width="35" height="35" rx="8.5"
              fill="rgba(0,242,255,0.08)" stroke="rgba(0,242,255,0.3)" strokeWidth="1"/>
            <path d="M7 11 L13 23 L19 11"
              stroke="#00F2FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M21 11 L21 23 M21 11 L27 11 Q30 11 30 15 Q30 18 27 18 L21 18 M27 18 L30 23"
              stroke="#00F2FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <div className="flex flex-col leading-none">
            <span className="font-body font-700 text-[13px] tracking-[0.06em] text-white/90 uppercase">
              Vasudev Rao
            </span>
            <span className="font-mono text-[9px] text-[#00F2FF]/55 tracking-[0.14em] uppercase mt-[3px]">
              Senior Data Engineer
            </span>
          </div>
        </Link>

        {/* ── Desktop Nav ── */}
        <nav className="hidden md:flex items-center gap-0.5">
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={cn(
                  "relative px-4 py-2 font-mono text-[10.5px] tracking-[0.1em] uppercase transition-colors duration-150 rounded-md",
                  active
                    ? "text-[#00F2FF]"
                    : "text-white/45 hover:text-white/80 hover:bg-white/[0.03]"
                )}
              >
                {l.label}
                {/* Active dot indicator */}
                {active && (
                  <span
                    className="absolute left-1/2 -translate-x-1/2 -bottom-[3px] w-1 h-1 rounded-full bg-[#00F2FF]"
                    style={{ boxShadow: "0 0 6px rgba(0,242,255,0.8)" }}
                  />
                )}
              </Link>
            );
          })}

          <Link
            href="/contact"
            className="ml-5 px-5 py-2 rounded-lg font-body font-700 text-[11px] tracking-[0.06em] uppercase transition-all duration-200"
            style={{
              background: "#00F2FF",
              color: "#000412",
              boxShadow: "0 0 16px rgba(0,242,255,0.25)",
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.background = "#80F8FF";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 0 28px rgba(0,242,255,0.45)";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.background = "#00F2FF";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 0 16px rgba(0,242,255,0.25)";
            }}
          >
            Hire Me
          </Link>
        </nav>

        {/* ── Mobile toggle ── */}
        <button
          className="md:hidden text-white/60 hover:text-white p-2 transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={18}/> : <Menu size={18}/>}
        </button>
      </div>

      {/* ── Mobile menu ── */}
      {open && (
        <div
          className="md:hidden absolute top-[68px] inset-x-0 py-4 px-6 border-b border-white/[0.04]"
          style={{ background: "rgba(8,12,20,0.98)", backdropFilter: "blur(24px)" }}
        >
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={cn(
                "block py-3 font-mono text-[11px] tracking-[0.12em] uppercase border-b border-white/[0.04] transition-colors",
                pathname === l.href ? "text-[#00F2FF]" : "text-white/55 hover:text-white"
              )}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-4 w-full flex items-center justify-center py-3 rounded-lg font-body font-700 text-[11px] tracking-[0.08em] uppercase"
            style={{ background: "#00F2FF", color: "#000412" }}
          >
            Hire Me
          </Link>
        </div>
      )}
    </header>
  );
}
