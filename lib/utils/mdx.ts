import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const CONTENT_DIR = path.join(process.cwd(), 'content/tutorials')

export interface TutorialMeta {
  title?: string
  description?: string
  date?: string
  [key: string]: unknown
}

export interface TutorialMDX {
  meta: TutorialMeta
  content: string
  exists: boolean
}

export function getTutorialMDX(slug: string): TutorialMDX {
  const filePath = path.join(CONTENT_DIR, `${slug}.mdx`)

  if (!fs.existsSync(filePath)) {
    return { meta: {}, content: '', exists: false }
  }

  const raw = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(raw)

  return {
    meta: data as TutorialMeta,
    content,
    exists: true,
  }
}
