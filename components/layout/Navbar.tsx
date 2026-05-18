"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import ThemeToggle from "@/components/ui/ThemeToggle"

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const links = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/experience", label: "Experience" },
    { href: "/tutorials", label: "Tutorials" },
    { href: "/stack", label: "Stack" },
    { href: "/blog", label: "Blog" },
  ]

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "dark:bg-black/40 bg-white/80 backdrop-blur-2xl dark:shadow-[0_1px_0_rgba(255,255,255,0.05),0_20px_60px_rgba(0,0,0,0.5)] shadow-[0_1px_0_rgba(0,0,0,0.06),0_4px_20px_rgba(0,0,0,0.08)]"
            : "bg-transparent"
        }`}
      >
        {/* top shimmer line */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
        {/* bottom separator */}
        <div className={`absolute bottom-0 left-0 w-full h-px transition-opacity duration-500
          dark:bg-gradient-to-r dark:from-transparent dark:via-white/[0.06] dark:to-transparent
          bg-gradient-to-r from-transparent via-black/[0.06] to-transparent
          ${scrolled ? "opacity-100" : "opacity-0"}`}
        />

        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">

            {/* ===== LOGO ===== */}
            <Link href="/" className="group select-none">
              <h1 className="text-lg sm:text-xl font-bold tracking-tight flex items-center">
                <span className="dark:text-white/90 text-gray-800 font-semibold">Vasudeva</span>
                <span className="relative ml-1">
                  <span className="font-bold bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(135deg, #4d7fd4 0%, #5b8ee8 55%, #7aaaf5 100%)" }}>Rao</span>
                  <span className="absolute left-0 -bottom-0.5 h-[2px] w-0 transition-all duration-300 group-hover:w-full rounded-full" style={{ backgroundImage: "linear-gradient(135deg, #4d7fd4, #7aaaf5)" }} />
                </span>
              </h1>
            </Link>

            {/* ===== DESKTOP NAV ===== */}
            <nav className="hidden md:flex items-center gap-1">
              {links.map((link) => {
                const active = pathname === link.href
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      active
                        ? "dark:text-white text-gray-900"
                        : "dark:text-gray-400 text-gray-500 dark:hover:text-white hover:text-gray-900 dark:hover:bg-white/[0.04] hover:bg-black/[0.04]"
                    }`}
                  >
                    {link.label}
                    {active && (
                      <>
                        <span className="absolute inset-0 rounded-lg dark:bg-white/[0.04] bg-black/[0.04]" />
                        <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-4 h-[2px] bg-blue-400 rounded-full" />
                      </>
                    )}
                  </Link>
                )
              })}

              {/* Theme toggle */}
              <ThemeToggle />

              {/* CTA */}
              <Link
                href="/contact"
                className="group relative ml-2 px-4 py-[7px] rounded-lg text-white text-[12px] font-semibold overflow-hidden transition-all duration-300 hover:brightness-110 flex items-center gap-[5px]"
                style={{
                  background: "linear-gradient(135deg, #1a2f6e 0%, #1e3a8a 55%, #1e40af 100%)",
                  boxShadow: "0 0 0 1px rgba(30,58,138,0.5), 0 2px 8px rgba(26,47,110,0.5)",
                }}
              >
                <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12" />
                <span className="relative">Contact</span>
              </Link>
            </nav>

            {/* ===== MOBILE: toggle + hamburger ===== */}
            <div className="md:hidden flex items-center gap-2">
              <ThemeToggle />
              <button
                onClick={() => setOpen((v) => !v)}
                className="w-9 h-9 flex items-center justify-center rounded-lg
                  dark:border-white/10 border-black/10 border
                  dark:bg-white/[0.04] bg-black/[0.04]
                  dark:text-white text-gray-800
                  dark:hover:bg-white/[0.08] hover:bg-black/[0.08] transition relative z-[60]"
                aria-label={open ? "Close menu" : "Open menu"}
              >
                {open ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ================= MOBILE DRAWER ================= */}
      <div className={`fixed inset-0 z-40 transition-all duration-300 ${open ? "visible opacity-100" : "invisible opacity-0"}`}>
        <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={() => setOpen(false)} />

        <div className={`absolute right-0 top-0 h-full w-[80%] max-w-sm
          dark:bg-[#070a10]/95 bg-white/95 backdrop-blur-2xl
          dark:border-l dark:border-white/[0.07] border-l border-black/[0.07]
          shadow-[-20px_0_60px_rgba(0,0,0,0.6)] p-6 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}>
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-blue-500/40 via-blue-400/20 to-transparent" />

          <div className="flex items-center mb-10 pt-1">
            <span className="text-sm font-semibold dark:text-white/40 text-gray-400 tracking-widest uppercase">Menu</span>
          </div>

          <div className="flex flex-col gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`flex items-center px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                  pathname === link.href
                    ? "dark:text-white text-gray-900 bg-blue-500/10 border border-blue-500/20"
                    : "dark:text-gray-400 text-gray-500 dark:hover:text-white hover:text-gray-900 dark:hover:bg-white/[0.04] hover:bg-black/[0.04]"
                }`}
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="group relative mt-6 px-4 py-2.5 rounded-lg text-center text-[13px] font-semibold text-white overflow-hidden transition hover:brightness-110"
              style={{
                background: "linear-gradient(135deg, #1a2f6e 0%, #1e3a8a 55%, #1e40af 100%)",
                boxShadow: "0 0 0 1px rgba(30,58,138,0.5), 0 2px 8px rgba(26,47,110,0.5)",
              }}
            >
              <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12" />
              <span className="relative">Contact</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
