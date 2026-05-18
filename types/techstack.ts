export interface Technology {
  name: string
  proficiency: 'Expert' | 'Advanced' | 'Intermediate'
  yearsOfExperience?: number
}

export interface TechCategory {
  category: string
  icon: string
  technologies: Technology[]
}
