import { tutorials } from '@/lib/data/tutorials'
import { getTutorialMDX } from '@/lib/utils/mdx'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Clock, FileDown } from 'lucide-react'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { MDXComponents } from '@/components/ui/MDXComponents'
export async function generateStaticParams() {
  return tutorials.filter(t => !t.comingSoon).map((t) => ({ slug: t.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const tutorial = tutorials.find(t => t.slug === params.slug)
  if (!tutorial) return {}
  return {
    title: `${tutorial.title} | Tutorials`,
    description: tutorial.description,
  }
}

const DIFF_STYLE = {
  Beginner:     'bg-blue-500/10 text-blue-300 border-blue-500/20',
  Intermediate: 'bg-blue-400/10 text-blue-400/80 border-blue-400/20',
  Advanced:     'bg-blue-600/10 text-blue-500 border-blue-600/20',
}

export default function TutorialPage({ params }: { params: { slug: string } }) {
  const tutorial = tutorials.find(t => t.slug === params.slug)
  if (!tutorial) notFound()

  const { content, exists } = getTutorialMDX(params.slug)

  return (
    <div className="pt-24 pb-32">
      <div className="max-w-3xl mx-auto px-6">

        {/* ── Back link ── */}
        <Link
          href="/tutorials"
          className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition mb-10"
        >
          <ArrowLeft size={15} /> Back to Tutorials
        </Link>

        {/* ── Badges ── */}
        <div className="flex items-center gap-3 mb-5">
          <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-medium border ${DIFF_STYLE[tutorial.difficulty]}`}>
            {tutorial.difficulty}
          </span>
          <span className="flex items-center gap-1 text-xs text-gray-500">
            <Clock size={12} /> {tutorial.duration}
          </span>
          <span className="text-xs text-gray-600">{tutorial.topic}</span>
        </div>

        {/* ── Title & description ── */}
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight tracking-tight">
          {tutorial.title}
        </h1>
        <p className="text-gray-400 leading-relaxed mb-8">
          {tutorial.description}
        </p>

        {/* ── PDF download ── */}
        {tutorial.pdf && (
          <a
            href={tutorial.pdf.url}
            download
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl mb-10
              border border-blue-500/20 bg-blue-500/[0.07] hover:bg-blue-500/[0.14]
              text-blue-300 text-sm font-medium transition"
          >
            <FileDown size={15} />
            {tutorial.pdf.label ?? 'Download PDF'}
            {tutorial.pdf.size && (
              <span className="text-gray-500">· {tutorial.pdf.size}</span>
            )}
          </a>
        )}

        {/* ── MDX content or coming soon placeholder ── */}
        {exists ? (
          <article className="prose-none">
            <MDXRemote source={content} components={MDXComponents} />
          </article>
        ) : (
          <div className="relative rounded-2xl border border-white/[0.07] bg-[#080c14] p-12 text-center overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent" />
            <p className="text-gray-500 text-sm">Tutorial content coming soon.</p>
            <p className="text-gray-600 text-xs mt-2">
              Add your MDX file at{' '}
              <code className="text-blue-400/60">
                content/tutorials/{params.slug}.mdx
              </code>
            </p>
          </div>
        )}

        {/* ── Tags ── */}
        <div className="flex flex-wrap gap-1.5 mt-10 pt-8 border-t border-white/[0.06]">
          {tutorial.tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] text-gray-500 px-2.5 py-1 rounded bg-white/[0.03] border border-white/[0.06]"
            >
              {tag}
            </span>
          ))}
        </div>

      </div>
    </div>
  )
}
