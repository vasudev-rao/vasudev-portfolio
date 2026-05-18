import { getProject, projects } from '@/lib/data/projects'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Github, ArrowUpRight, Zap } from 'lucide-react'

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProject(params.slug)
  if (!project) notFound()

  return (
    <div className="pt-24 pb-32">
      <div className="max-w-4xl mx-auto px-6">

        <Link href="/projects" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition mb-10">
          <ArrowLeft size={15} /> Back to Projects
        </Link>

        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-medium mb-4">
            <Zap size={12} />
            {project.impact}
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight tracking-tight">
            {project.title}
          </h1>
          <p className="text-gray-400 leading-relaxed text-lg">{project.description}</p>

          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 px-4 py-2 rounded-lg border border-white/10 text-sm text-gray-300 hover:text-white hover:border-white/20 transition">
              <Github size={15} /> View on GitHub <ArrowUpRight size={13} />
            </a>
          )}
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Problem */}
          <div className="relative rounded-2xl border border-white/[0.07] bg-[#080c14] p-7 overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/20 to-transparent" />
            <h2 className="text-sm font-semibold text-gray-500 tracking-widest uppercase mb-3">Problem</h2>
            <p className="text-gray-300 text-sm leading-relaxed">{project.problem}</p>
          </div>

          {/* Solution */}
          <div className="relative rounded-2xl border border-white/[0.07] bg-[#080c14] p-7 overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/20 to-transparent" />
            <h2 className="text-sm font-semibold text-gray-500 tracking-widest uppercase mb-3">Solution</h2>
            <p className="text-gray-300 text-sm leading-relaxed">{project.solution}</p>
          </div>
        </div>

        {/* Architecture */}
        {project.architecture && (
          <div className="relative rounded-2xl border border-blue-500/20 bg-blue-500/[0.04] p-7 mb-6 overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent" />
            <h2 className="text-sm font-semibold text-gray-500 tracking-widest uppercase mb-3">Architecture</h2>
            <p className="text-blue-200/80 text-sm font-mono leading-relaxed">{project.architecture}</p>
          </div>
        )}

        {/* Challenges */}
        {project.challenges && (
          <div className="relative rounded-2xl border border-white/[0.07] bg-[#080c14] p-7 mb-6 overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/20 to-transparent" />
            <h2 className="text-sm font-semibold text-gray-500 tracking-widest uppercase mb-4">Key Challenges</h2>
            <ul className="space-y-3">
              {project.challenges.map((c, i) => (
                <li key={i} className="flex gap-3 text-sm text-gray-400 leading-relaxed">
                  <span className="text-blue-400 shrink-0 mt-0.5">▸</span>{c}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Tech Stack */}
        <div className="relative rounded-2xl border border-white/[0.07] bg-[#080c14] p-7 overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/20 to-transparent" />
          <h2 className="text-sm font-semibold text-gray-500 tracking-widest uppercase mb-4">Tech Stack</h2>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span key={t} className="px-3 py-1 text-xs text-gray-300 bg-white/[0.04] border border-white/[0.08] rounded-full font-mono">
                {t}
              </span>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
