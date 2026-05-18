import BlogCard from '@/components/features/blog/BlogCard'
import Section from '@/components/ui/Section'
import { getAllPosts } from '@/lib/data/blog'
import { ArrowRight, BookOpen } from 'lucide-react'

export const metadata = {
  title: 'Blog | Vasudevarao',
  description: 'Technical articles on data engineering, Spark optimization, streaming architectures, and building scalable data platforms.',
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <div className="pt-24 pb-32 relative overflow-hidden">

      <Section>

        {/* ── hero header ── */}
        <div className="max-w-3xl mx-auto text-center mb-20">

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
            border border-blue-300/30 bg-gradient-to-r from-blue-400/10 via-blue-300/10 to-blue-500/10
            text-blue-300 text-xs font-medium tracking-widest uppercase mb-6">
            <BookOpen size={13} />
            Writing
          </div>

          <h1 className="text-5xl sm:text-6xl font-bold tracking-[-0.03em] mb-6">
            Blog
          </h1>

          <p className="text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto">
            Deep dives into data engineering patterns, architecture decisions, and lessons learned
            from building production data systems.
          </p>

          {/* stat strip */}
          <div className="flex items-center justify-center gap-8 mt-10 pt-10 border-t border-white/[0.06]">
            <div className="text-center">
              <p className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-blue-300 to-blue-500 bg-clip-text text-transparent">{posts.length}</p>
              <p className="text-xs text-gray-500 tracking-widest uppercase mt-1">Articles</p>
            </div>
            <div className="h-8 w-px bg-white/[0.08]" />
            <div className="text-center">
              <p className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-blue-300 to-blue-500 bg-clip-text text-transparent">10+</p>
              <p className="text-xs text-gray-500 tracking-widest uppercase mt-1">Topics</p>
            </div>
            <div className="h-8 w-px bg-white/[0.08]" />
            <div className="text-center">
              <p className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-blue-300 to-blue-500 bg-clip-text text-transparent">∞</p>
              <p className="text-xs text-gray-500 tracking-widest uppercase mt-1">Coffee consumed</p>
            </div>
          </div>
        </div>

        {/* ── posts grid ── */}
        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {posts.map((post) => (
              <BlogCard
                key={post.slug}
                title={post.title}
                excerpt={post.excerpt}
                date={post.date}
                readTime={post.readTime}
                slug={post.slug}
                tags={post.tags}
              />
            ))}
          </div>
        ) : (
          /* ── empty state ── */
          <div className="max-w-xl mx-auto text-center">
            <div className="relative rounded-3xl border border-white/[0.07] bg-[#080c14] px-10 py-16 overflow-hidden shadow-[0_8px_60px_rgba(0,0,0,0.4)]">
              {/* corner accents */}
              <div className="absolute top-0 left-0 w-16 h-px bg-gradient-to-r from-blue-400 via-blue-300 to-transparent" />
              <div className="absolute top-0 left-0 h-16 w-px bg-gradient-to-b from-blue-400 via-blue-300 to-transparent" />
              <div className="absolute bottom-0 right-0 w-16 h-px bg-gradient-to-l from-blue-400 via-blue-300 to-transparent" />
              <div className="absolute bottom-0 right-0 h-16 w-px bg-gradient-to-t from-blue-400 via-blue-300 to-transparent" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(59,130,246,0.07),transparent_70%)]" />
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent" />

              <div className="relative">
                <div className="w-14 h-14 rounded-2xl border border-blue-500/20 bg-blue-500/[0.08] flex items-center justify-center mx-auto mb-6">
                  <BookOpen size={24} className="text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Articles coming soon</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-8">
                  Currently writing in-depth technical content on Spark optimisation,
                  lakehouse architectures, and streaming patterns.
                </p>
                <a
                  href="/projects"
                  className="group relative inline-flex items-center gap-2 px-6 py-2.5 rounded-lg text-[13px] font-semibold text-white overflow-hidden transition-all duration-300 hover:brightness-110"
                  style={{
                    background: "linear-gradient(135deg, #1a2f6e 0%, #1e3a8a 55%, #1e40af 100%)",
                    boxShadow: "0 0 0 1px rgba(30,58,138,0.5), 0 2px 8px rgba(26,47,110,0.5)",
                  }}
                >
                  <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12" />
                  <span className="relative">View Projects</span>
                  <ArrowRight size={14} className="relative" />
                </a>
              </div>
            </div>
          </div>
        )}

      </Section>
    </div>
  )
}
