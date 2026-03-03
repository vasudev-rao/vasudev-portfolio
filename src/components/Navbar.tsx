"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame: number;

    const update = () => {
      const y = window.scrollY;
      const next = Math.min(y / 80, 1);
      setProgress((prev) => prev + (next - prev) * 0.12);
      frame = requestAnimationFrame(update);
    };

    frame = requestAnimationFrame(update);
    return () => cancelAnimationFrame(frame);
  }, []);

  const blur = 6 + progress * 10;
  const bgOpacity = 0.12 + progress * 0.18;
  const borderOpacity = 0.02 + progress * 0.04;
  const shadowOpacity = 0.15 + progress * 0.25;

  return (
    <header
      style={{
        backdropFilter: `blur(${blur}px)`,
        backgroundColor: `rgba(0,0,0,${bgOpacity})`,
        borderColor: `rgba(255,255,255,${borderOpacity})`,
        boxShadow: `0 4px 24px rgba(0,0,0,${shadowOpacity})`,
      }}
      className="fixed top-0 inset-x-0 z-50 h-20 border-b transition-[background-color,border-color,box-shadow] duration-300"
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-full">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-3">
          <div
            style={{
              transform: `scale(${1 - progress * 0.06})`,
            }}
            className="w-8 h-8 rounded-lg border border-electric-border/70 bg-electric-dim flex items-center justify-center transition-transform duration-300"
          >
            <span className="text-electric font-mono text-xs font-semibold">
              VR
            </span>
          </div>

          <span className="font-label text-[14px] font-semibold tracking-[0.12em] uppercase">
            <span className="text-ink/85">VASUDEVA</span>
            <span className="relative text-ink ml-1.5 group-hover:text-electric transition-colors">
              RAO
              <span className="absolute left-0 -bottom-[3px] h-[1.5px] w-0 bg-electric/70 rounded-full transition-all duration-300 group-hover:w-full" />
            </span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={cn(
                "relative px-4 py-2 rounded-lg text-xs font-label font-600 uppercase tracking-[0.1em] transition-all duration-200",
                pathname === l.href
                  ? "text-electric"
                  : "text-ink-secondary hover:text-ink hover:bg-surface-2"
              )}
            >
              {l.label}
              <span
                className={cn(
                  "absolute left-4 right-4 -bottom-[6px] h-[1.5px] rounded-full transition-all duration-300",
                  pathname === l.href
                    ? "bg-electric/70"
                    : "bg-transparent group-hover:bg-electric/40"
                )}
              />
            </Link>
          ))}

          <Link href="/contact" className="ml-3 btn-primary text-xs py-2 px-5">
            Hire Me
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-ink-secondary hover:text-ink p-2"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>
    </header>
  );
}