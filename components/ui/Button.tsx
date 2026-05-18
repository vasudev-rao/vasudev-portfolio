"use client"

import Link from "next/link"

type Variant = "primary" | "secondary" | "ghost"

interface ButtonProps {
  children: React.ReactNode
  href?: string
  onClick?: () => void
  className?: string
  variant?: Variant
}

export default function Button({
  children,
  href,
  onClick,
  className = "",
  variant = "primary",
}: ButtonProps) {

  const base =
    "group relative inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold transition-all duration-200 overflow-hidden"

  const variants: Record<Variant, string> = {
    primary:
      "bg-blue-600 hover:bg-blue-500 text-white shadow-[0_6px_20px_rgba(37,99,235,0.25)]",

    secondary:
      "border border-white/15 text-white hover:bg-white/[0.06] hover:border-white/25",

    ghost:
      "text-gray-400 hover:text-white hover:bg-white/[0.04]",
  }

  const classes = `${base} ${variants[variant]} ${className}`

  const content = (
    <>
      {/* subtle shine */}
      <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <span className="relative flex items-center gap-2">
        {children}
      </span>
    </>
  )

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    )
  }

  return (
    <button onClick={onClick} className={classes}>
      {content}
    </button>
  )
}