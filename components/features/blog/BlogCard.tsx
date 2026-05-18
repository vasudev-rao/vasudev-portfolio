import Link from 'next/link'
import { Calendar, Clock, ArrowRight } from 'lucide-react'

interface BlogCardProps {
  title: string
  excerpt: string
  date: string
  readTime: string
  slug: string
  tags?: string[]
}

export default function BlogCard({ title, excerpt, date, readTime, slug, tags = [] }: BlogCardProps) {
  return (
    <div className="relative rounded-xl p-[1px] bg-gradient-to-br from-blue-500/30 via-purple-500/20 to-red-500/30 hover:scale-[1.02] transition-all duration-300">
      <div className="h-full rounded-xl blog-card backdrop-blur-xl p-6 dark:border-white/10 border-black/[0.06] border hover:border-blue-400/40 transition-all group">

        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.slice(0, 3).map((tag) => (
              <span key={tag} className="px-2 py-1 text-xs font-mono text-blue-500 dark:text-blue-300 bg-blue-500/10 border border-blue-500/30 rounded-full">{tag}</span>
            ))}
          </div>
        )}

        <h3 className="text-xl font-bold dark:text-white text-gray-900 mb-2 leading-snug group-hover:text-blue-500 dark:group-hover:text-blue-300 transition">
          {title}
        </h3>

        <p className="dark:text-gray-400 text-gray-500 text-sm mb-4 leading-relaxed line-clamp-3">{excerpt}</p>

        <div className="flex items-center gap-4 text-xs dark:text-gray-500 text-gray-400 mb-5 font-mono">
          <span className="flex items-center gap-1"><Calendar size={14} />{date}</span>
          <span className="flex items-center gap-1"><Clock size={14} />{readTime}</span>
        </div>

        <Link href={`/blog/${slug}`} className="inline-flex items-center gap-2 text-blue-500 dark:text-blue-300 hover:text-blue-400 dark:hover:text-blue-200 font-medium transition">
          Read Article <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  )
}
