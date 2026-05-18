"use client"

import { useRef, useState } from "react"
import Link from "next/link"
import { ArrowUpRight, Github, Zap } from "lucide-react"

interface ProjectCardProps {
  title: string
  description: string
  tech: string[]
  impact: string
  slug: string
  github?: string
  featured?: boolean
}

export default function ProjectCard({ title, description, tech, impact, slug, github, featured = false }: ProjectCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    setMousePosition({ x, y })
    const midX = rect.width / 2, midY = rect.height / 2
    el.style.transform = `perspective(1200px) rotateX(${((y - midY) / midY) * -4}deg) rotateY(${((x - midX) / midX) * 4}deg) translateZ(10px)`
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    const el = ref.current
    if (el) el.style.transform = `perspective(1200px) rotateX(0) rotateY(0) translateZ(0)`
  }

  return (
    <div className="group relative h-full">
      {/* Glow */}
      <div className="absolute -inset-[1px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl"
        style={{ background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59,130,246,0.15), rgba(147,51,234,0.1), transparent 40%)` }} />

      {/* Card */}
      <div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        className={`
          project-card
          relative h-full ${featured ? "min-h-[440px]" : "min-h-[360px]"}
          rounded-2xl border
          dark:border-white/5 border-black/[0.07]
          backdrop-blur-2xl p-8 flex flex-col
          transition-all duration-500 ease-out will-change-transform overflow-hidden
          dark:shadow-none shadow-sm
        `}
      >
        {/* Mesh bg */}
        <div className="absolute inset-0 dark:opacity-20 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10" />
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
            style={{ background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59,130,246,0.1), transparent 50%)` }} />
        </div>

        <div className="relative z-10 flex flex-col h-full">
          {/* Header */}
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20">
              <Zap size={12} className="text-blue-400" />
              <span className="text-xs font-medium text-blue-500 dark:text-blue-300">{impact}</span>
            </div>
            {featured && (
              <div className="px-3 py-1 rounded-full bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20">
                <span className="text-xs font-medium text-yellow-600 dark:text-yellow-300">Featured</span>
              </div>
            )}
          </div>

          {/* Title */}
          <Link href={`/projects/${slug}`} className="group/title">
            <h3 className="text-2xl font-bold mb-3 leading-tight">
              <span className="bg-gradient-to-r dark:from-white dark:to-white/80 from-gray-900 to-gray-700 bg-clip-text text-transparent dark:group-hover/title:from-blue-200 dark:group-hover/title:to-purple-200 group-hover/title:from-blue-600 group-hover/title:to-purple-600 transition-all duration-300">
                {title}
              </span>
              <ArrowUpRight size={20} className="inline-block ml-2 text-blue-400 opacity-0 group-hover/title:opacity-100 group-hover/title:translate-x-1 group-hover/title:-translate-y-1 transition-all duration-300" />
            </h3>
          </Link>

          {/* Description */}
          <p className="dark:text-gray-400 text-gray-500 text-sm leading-relaxed mb-6 flex-grow">{description}</p>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent dark:via-white/10 via-black/10 to-transparent mb-6" />

          {/* Tech */}
          <div className="flex flex-wrap gap-2 mb-6">
            {tech.slice(0, 5).map((t) => (
              <span key={t} className="text-xs px-3 py-1.5 rounded-lg dark:bg-white/5 bg-black/[0.04] dark:border-white/10 border-black/[0.08] border dark:text-gray-300 text-gray-600 dark:hover:bg-white/10 hover:bg-black/[0.08] dark:hover:text-white hover:text-gray-900 transition-all duration-300 cursor-default">
                {t}
              </span>
            ))}
            {tech.length > 5 && (
              <span className="text-xs px-3 py-1.5 rounded-lg dark:bg-white/5 bg-black/[0.04] dark:border-white/10 border-black/[0.08] border dark:text-gray-400 text-gray-500">
                +{tech.length - 5} more
              </span>
            )}
          </div>

          {/* Actions */}
          <div className="flex items-center justify-between pt-4 dark:border-t dark:border-white/5 border-t border-black/[0.05]">
            <Link href={`/projects/${slug}`} className="group/link flex items-center gap-2 text-sm font-medium text-blue-500 dark:text-blue-400 hover:text-blue-400 dark:hover:text-blue-300 transition-colors duration-300">
              <span>View Case Study</span>
              <ArrowUpRight size={14} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-300" />
            </Link>
            {github && (
              <a href={github} target="_blank" rel="noopener noreferrer"
                className="group/github flex items-center gap-2 px-3 py-1.5 rounded-lg dark:border-white/10 border-black/[0.08] border text-xs dark:text-gray-400 text-gray-500 dark:hover:text-white hover:text-gray-900 dark:hover:bg-white/5 hover:bg-black/[0.04] transition-all duration-300">
                <Github size={14} /><span>Code</span>
                <ArrowUpRight size={12} className="opacity-0 group-hover/github:opacity-100 transition-opacity" />
              </a>
            )}
          </div>
        </div>

        {/* Shine */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
          style={{ background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.06), transparent 40%)` }} />

        {/* Corner */}
        <div className="absolute top-0 right-0 w-32 h-32 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent rounded-bl-full" />
        </div>
      </div>
    </div>
  )
}
