import Link from 'next/link'
import { Clock, ChevronRight, FileDown } from 'lucide-react'
import type { Tutorial, Difficulty } from '@/lib/data/tutorials'

const DIFF_STYLE: Record<Difficulty, string> = {
  Beginner:     'bg-blue-500/10 text-blue-500 dark:text-blue-300 border-blue-500/20',
  Intermediate: 'bg-blue-400/10 text-blue-600 dark:text-blue-400/80 border-blue-400/20',
  Advanced:     'bg-blue-600/10 text-blue-700 dark:text-blue-500 border-blue-600/20',
}

const DIFF_BAR: Record<Difficulty, string> = {
  Beginner:     'bg-blue-400',
  Intermediate: 'bg-blue-500',
  Advanced:     'bg-blue-600',
}

const TOPIC_ICONS: Record<string, string> = {
  Python: '🐍', SQL: '🗄️', PySpark: '⚡', Databricks: '🔷',
  'System Design': '🏗️', DSA: '🧠', 'Data Engineering': '🔧', 'AI & ML': '🤖',
}

interface TutorialCardProps { tutorial: Tutorial }

export default function TutorialCard({ tutorial }: TutorialCardProps) {
  return (
    <div className={`tutorial-card group relative rounded-2xl border dark:border-white/[0.07] border-black/[0.07]
      overflow-hidden dark:shadow-[0_8px_40px_rgba(0,0,0,0.3)] shadow-sm
      hover:border-blue-500/25 hover:-translate-y-1
      transition-all duration-300 flex flex-col
      ${tutorial.comingSoon ? 'opacity-60' : ''}`}
    >
      {/* top accent on hover */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent
        opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* left difficulty bar */}
      <div className={`absolute left-0 top-4 bottom-4 w-0.5 rounded-full ${DIFF_BAR[tutorial.difficulty]}`} />

      <div className="p-6 flex flex-col flex-1">

        {/* topic + badges */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs dark:text-gray-500 text-gray-400 flex items-center gap-1.5">
            <span>{TOPIC_ICONS[tutorial.topic]}</span>
            {tutorial.topic}
          </span>
          <div className="flex items-center gap-2">
            {tutorial.pdf && (
              <span className="flex items-center gap-1 text-[10px] text-blue-500 dark:text-blue-400 border border-blue-500/20 bg-blue-500/10 px-2 py-0.5 rounded-full">
                <FileDown size={10} /> PDF
              </span>
            )}
            {tutorial.comingSoon && (
              <span className="text-[10px] px-2 py-0.5 rounded-full dark:border-white/10 border-black/10 border dark:text-gray-500 text-gray-400">
                Soon
              </span>
            )}
          </div>
        </div>

        {/* title */}
        <h3 className="text-base font-bold dark:text-white text-gray-900 mb-2 leading-snug tracking-tight
          hover:text-blue-500 dark:hover:text-blue-300 transition-colors duration-200 cursor-pointer">
          {tutorial.title}
        </h3>

        {/* description */}
        <p className="text-sm dark:text-gray-500 text-gray-500 leading-relaxed mb-5 flex-1">
          {tutorial.description}
        </p>

        {/* meta */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-medium border ${DIFF_STYLE[tutorial.difficulty]}`}>
              {tutorial.difficulty}
            </span>
            <span className="flex items-center gap-1 text-[11px] dark:text-gray-500 text-gray-400">
              <Clock size={11} /> {tutorial.duration}
            </span>
          </div>
          {!tutorial.comingSoon && (
            <Link href={`/tutorials/${tutorial.slug}`}
              className="flex items-center gap-1 text-xs text-blue-500 dark:text-blue-400 hover:text-blue-400 dark:hover:text-blue-300 transition-colors font-medium">
              Start <ChevronRight size={13} />
            </Link>
          )}
        </div>

        {/* PDF download */}
        {tutorial.pdf && !tutorial.comingSoon && (
          <a href={tutorial.pdf.url} download
            className="flex items-center justify-center gap-2 w-full py-2 rounded-lg
              border border-blue-500/20 bg-blue-500/[0.07] hover:bg-blue-500/[0.14]
              text-blue-500 dark:text-blue-300 hover:text-blue-400 dark:hover:text-blue-200
              text-xs font-medium transition-all duration-200 mb-4">
            <FileDown size={13} />
            {tutorial.pdf.label ?? 'Download PDF'}
            {tutorial.pdf.size && <span className="dark:text-gray-500 text-gray-400 ml-1">· {tutorial.pdf.size}</span>}
          </a>
        )}

        {/* tags */}
        <div className="flex flex-wrap gap-1.5 pt-4 dark:border-t dark:border-white/[0.05] border-t border-black/[0.05]">
          {tutorial.tags.map((tag) => (
            <span key={tag} className="text-[10px] dark:text-gray-600 text-gray-400 px-2 py-0.5 rounded dark:bg-white/[0.03] bg-black/[0.03] dark:border-white/[0.05] border-black/[0.06] border">
              {tag}
            </span>
          ))}
        </div>

      </div>
    </div>
  )
}
