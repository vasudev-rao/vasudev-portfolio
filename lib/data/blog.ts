import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { compileMDX } from 'next-mdx-remote/rsc'
import rehypePrettyCode from 'rehype-pretty-code'
import remarkGfm from 'remark-gfm'

export interface BlogPost {
  slug: string
  title: string
  date: string
  excerpt: string
  content: React.ReactNode
  tags: string[]
  readTime: string
}

const postsDirectory = path.join(process.cwd(), 'content/blog')

const prettyCodeOptions = {
  theme: 'github-dark',
}

export function getAllPosts(): Omit<BlogPost, 'content'>[] {
  if (!fs.existsSync(postsDirectory)) {
    console.log('❌ Blog folder not found:', postsDirectory)
    return []
  }

  const fileNames = fs.readdirSync(postsDirectory)

  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, '')
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data } = matter(fileContents)

      return {
        slug,
        title: data.title || '',
        date: data.date || '',
        excerpt: data.excerpt || '',
        tags: data.tags || [],
        readTime: data.readTime || '5 min read',
      }
    })

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1))
}

export async function getPostBySlug(
  slug: string
): Promise<BlogPost | undefined> {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`)

  if (!fs.existsSync(fullPath)) {
    console.log('❌ Post not found:', fullPath)
    return undefined
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const { content: mdxContent } = await compileMDX({
    source: content,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [
          [rehypePrettyCode, prettyCodeOptions],
        ],
      },
    },
  })

  return {
    slug,
    title: data.title || '',
    date: data.date || '',
    excerpt: data.excerpt || '',
    content: mdxContent,
    tags: data.tags || [],
    readTime: data.readTime || '5 min read',
  }
}