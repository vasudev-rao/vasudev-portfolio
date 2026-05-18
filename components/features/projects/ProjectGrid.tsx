import ProjectCard from './ProjectCard'
import type { Project } from '@/lib/data/projects'

interface ProjectGridProps {
  projects: Project[]
}

export default function ProjectGrid({ projects }: ProjectGridProps) {
  return (
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
  )
}
