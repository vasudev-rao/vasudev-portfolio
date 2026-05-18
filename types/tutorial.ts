export type Difficulty = 'Beginner' | 'Intermediate' | 'Advanced'

export type TopicName =
  | 'Python'
  | 'SQL'
  | 'PySpark'
  | 'Databricks'
  | 'System Design'
  | 'DSA'
  | 'Data Engineering'
  | 'AI & ML'

export interface TutorialPdf {
  url: string
  label?: string
  size?: string
}

export interface Tutorial {
  id: string
  title: string
  description: string
  difficulty: Difficulty
  duration: string
  topic: TopicName
  tags: string[]
  slug: string
  comingSoon?: boolean
  pdf?: TutorialPdf
}
