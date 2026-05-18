import ProjectCard from '@/components/features/projects/ProjectCard'
import Section from '@/components/ui/Section'
import { projects } from '@/lib/data/projects'

export const metadata = {
  title: 'Projects | Vasudevarao',
  description: 'Portfolio of data engineering projects including lakehouses, streaming pipelines, ML infrastructure, and cost optimization platforms.',
}

export default function ProjectsPage() {
  return (
    <div className="pt-24 pb-32">
      <Section>

        {/* ── HEADER ── */}
        <div className="max-w-3xl mx-auto text-center mb-24">
          <p className="text-[11px] text-blue-400 tracking-[0.25em] uppercase font-semibold mb-4">
            Portfolio
          </p>
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight mb-6">
            Projects
          </h1>
          <p className="text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto">
            Production-grade data engineering systems built to handle enterprise-scale workloads.
            Each project solves real business problems with measurable impact.
          </p>
        </div>

        {/* ── GRID ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard
              key={project.slug}
              title={project.title}
              description={project.description}
              tech={project.tech.slice(0, 5)}
              impact={project.impact}
              slug={project.slug}
              github={project.github}
            />
          ))}
        </div>

      </Section>
    </div>
  )
}
