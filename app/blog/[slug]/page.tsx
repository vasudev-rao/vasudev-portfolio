import { getPostBySlug, getAllPosts } from '@/lib/data/blog'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Calendar, Clock } from 'lucide-react'

export async function generateStaticParams() {
  const posts = getAllPosts()

  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string }
}) {
  const post = await getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div
      className="
        pt-24
        pb-32
        min-h-screen

        bg-gray-50
        dark:bg-[#050816]

        transition-colors
      "
    >
      <div className="max-w-4xl mx-auto px-6">

        {/* Back Button */}
        <Link
          href="/blog"
          className="
            inline-flex items-center gap-2
            text-sm
            text-gray-500
            dark:text-gray-400

            hover:text-black
            dark:hover:text-white

            transition
            mb-10
          "
        >
          <ArrowLeft size={15} />
          Back to Blog
        </Link>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {post.tags?.map((tag) => (
            <span
              key={tag}
              className="
                px-2.5 py-0.5
                text-xs
                rounded-full
                font-mono

                text-blue-700
                dark:text-blue-300

                bg-blue-500/10
                border border-blue-500/20
              "
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h1
          className="
            text-4xl sm:text-5xl
            font-bold
            leading-tight
            tracking-tight
            mb-6

            text-gray-900
            dark:text-white
          "
        >
          {post.title}
        </h1>

        {/* Meta */}
        <div
          className="
            flex items-center gap-5
            text-sm
            mb-10 pb-10

            text-gray-500
            dark:text-gray-500

            border-b
            border-black/[0.08]
            dark:border-white/[0.07]
          "
        >
          <span className="flex items-center gap-1.5">
            <Calendar size={14} />
            {post.date}
          </span>

          <span className="flex items-center gap-1.5">
            <Clock size={14} />
            {post.readTime}
          </span>
        </div>

        {/* Blog Content */}
        <article
          className="
            prose
            dark:prose-invert
            prose-zinc
            max-w-none

            prose-headings:text-gray-900
            dark:prose-headings:text-white

            prose-p:text-gray-700
            dark:prose-p:text-gray-300

            prose-li:text-gray-700
            dark:prose-li:text-gray-300

            prose-strong:text-gray-900
            dark:prose-strong:text-white

            prose-code:text-blue-600
            dark:prose-code:text-blue-300

            prose-code:before:hidden
            prose-code:after:hidden

            prose-a:text-blue-600
            dark:prose-a:text-blue-400

            prose-hr:border-black/[0.08]
            dark:prose-hr:border-white/[0.08]
          "
        >
          {post.content}
        </article>

      </div>
    </div>
  )
}