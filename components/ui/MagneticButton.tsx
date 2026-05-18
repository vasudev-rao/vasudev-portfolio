"use client"

import { useRef } from "react"

type Props = React.ComponentProps<"button"> & {
  strength?: number // 0–1 (how strong the pull feels)
}

export default function MagneticButton({
  children,
  className = "",
  strength = 0.25,
  ...props
}: Props) {
  const ref = useRef<HTMLButtonElement>(null)

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current
    if (!el) return

    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const moveX = (x - rect.width / 2) * strength
    const moveY = (y - rect.height / 2) * strength

    el.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.02)`
  }

  const reset = () => {
    const el = ref.current
    if (!el) return
    el.style.transform = `translate(0,0) scale(1)`
  }

  return (
    <button
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className={`transition-transform duration-200 will-change-transform ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}