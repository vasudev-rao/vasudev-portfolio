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
  return { title: `${tutorial.title} | Tutorials`, description: tutorial.description }
}

const DIFF_STYLE = {
  Beginner:     'bg-blue-500/10 text-blue-500 dark:text-blue-300 border-blue-500/20',
  Intermediate: 'bg-blue-400/10 text-blue-600 dark:text-blue-400/80 border-blue-400/20',
  Advanced:     'bg-blue-600/10 text-blue-700 dark:text-blue-500 border-blue-600/20',
}

export default function TutorialPage({ params }: { params: { slug: string } }) {
  const tutorial = tutorials.find(t => t.slug === params.slug)
  if (!tutorial) notFound()

  const { content, exists } = getTutorialMDX(params.slug)

  return (
    <div className="pt-24 pb-32">
      <div className="max-w-3xl mx-auto px-6">

        <Link href="/tutorials"
          className="inline-flex items-center gap-2 text-sm dark:text-gray-400 text-gray-500 dark:hover:text-white hover:text-gray-900 transition mb-10">
          <ArrowLeft size={15} /> Back to Tutorials
        </Link>

        <div className="flex items-center gap-3 mb-5">
          <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-medium border ${DIFF_STYLE[tutorial.difficulty]}`}>
            {tutorial.difficulty}
          </span>
          <span className="flex items-center gap-1 text-xs dark:text-gray-500 text-gray-400">
            <Clock size={12} />{tutorial.duration}
          </span>
          <span className="text-xs dark:text-gray-600 text-gray-400">{tutorial.topic}</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold dark:text-white text-gray-900 mb-4 leading-tight tracking-tight">
          {tutorial.title}
        </h1>
        <p className="dark:text-gray-400 text-gray-500 leading-relaxed mb-8">
          {tutorial.description}
        </p>

        {tutorial.pdf && (
          <a href={tutorial.pdf.url} download
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl mb-10
              border border-blue-500/20 bg-blue-500/[0.07] hover:bg-blue-500/[0.14]
              text-blue-500 dark:text-blue-300 text-sm font-medium transition">
            <FileDown size={15} />
            {tutorial.pdf.label ?? 'Download PDF'}
            {tutorial.pdf.size && <span className="dark:text-gray-500 text-gray-400">· {tutorial.pdf.size}</span>}
          </a>
        )}

        {exists ? (
          <article className="prose-none">
            <MDXRemote source={content} components={MDXComponents} />
          </article>
        ) : (
          <div className="relative rounded-2xl dark:border-white/[0.07] border-black/[0.07] border dark:bg-[#080c14] bg-gray-50 p-12 text-center overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent" />
            <p className="dark:text-gray-500 text-gray-400 text-sm">Tutorial content coming soon.</p>
            <p className="dark:text-gray-600 text-gray-400 text-xs mt-2">
              Add your content at{' '}
              <code className="text-blue-500 dark:text-blue-400/60">
                content/tutorials/{params.slug}.mdx
              </code>
            </p>
          </div>
        )}

        <div className="flex flex-wrap gap-1.5 mt-10 pt-8 border-t dark:border-white/[0.06] border-black/[0.06]">
          {tutorial.tags.map((tag) => (
            <span key={tag} className="text-[11px] dark:text-gray-500 text-gray-400 px-2.5 py-1 rounded dark:bg-white/[0.03] bg-black/[0.04] dark:border-white/[0.06] border-black/[0.08] border">
              {tag}
            </span>
          ))}
        </div>

      </div>
    </div>
  )
}
