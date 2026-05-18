import { getPostBySlug, getAllPosts } from '@/lib/data/blog'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Calendar, Clock } from 'lucide-react'

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug)
  if (!post) notFound()

  return (
    <div className="pt-24 pb-32">
      <div className="max-w-3xl mx-auto px-6">

        <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition mb-10">
          <ArrowLeft size={15} /> Back to Blog
        </Link>

        <div className="flex flex-wrap gap-2 mb-6">
          {post.tags.map((tag) => (
            <span key={tag} className="px-2.5 py-0.5 text-xs text-blue-300 bg-blue-500/10 border border-blue-500/20 rounded-full font-mono">
              {tag}
            </span>
          ))}
        </div>

        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
          {post.title}
        </h1>

        <div className="flex items-center gap-5 text-sm text-gray-500 mb-10 pb-10 border-b border-white/[0.07]">
          <span className="flex items-center gap-1.5"><Calendar size={14} />{post.date}</span>
          <span className="flex items-center gap-1.5"><Clock size={14} />{post.readTime}</span>
        </div>

        <article className="prose prose-invert max-w-none">
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </article>

      </div>
    </div>
  )
}
