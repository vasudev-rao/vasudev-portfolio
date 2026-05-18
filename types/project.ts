export interface Project {
  slug: string
  title: string
  description: string
  problem: string
  solution: string
  tech: string[]
  impact: string
  github?: string
  architecture?: string
  challenges?: string[]
  dataFlow?: string
  featured?: boolean
}
