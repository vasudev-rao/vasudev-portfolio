'use client'

import Section from '@/components/ui/Section'
import { tutorials, topics, type Difficulty } from '@/lib/data/tutorials'
import { useState, useMemo } from 'react'
import { BookOpen, Clock, ChevronRight, Search, GraduationCap, FileDown } from 'lucide-react'
import Link from 'next/link'

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
  Python:             '🐍',
  SQL:                '🗄️',
  PySpark:            '⚡',
  Databricks:         '🔷',
  'System Design':    '🏗️',
  DSA:                '🧠',
  'Data Engineering': '🔧',
  'AI & ML':          '🤖',
}

export default function TutorialsPage() {
  const [activeTopic, setActiveTopic] = useState('All')
  const [activeDiff,  setActiveDiff]  = useState<string>('All')
  const [search,      setSearch]      = useState('')

  const activeTopics = useMemo(() =>
    topics.filter(t => t === 'All' || tutorials.some(tut => tut.topic === t)),
  [])

  const filtered = useMemo(() => {
    return tutorials.filter((t) => {
      const matchTopic  = activeTopic === 'All' || t.topic === activeTopic
      const matchDiff   = activeDiff  === 'All' || t.difficulty === activeDiff
      const matchSearch = search === '' ||
        t.title.toLowerCase().includes(search.toLowerCase()) ||
        t.description.toLowerCase().includes(search.toLowerCase()) ||
        t.tags.some(tag => tag.toLowerCase().includes(search.toLowerCase()))
      return matchTopic && matchDiff && matchSearch
    })
  }, [activeTopic, activeDiff, search])

  const stats = useMemo(() => ({
    total:  tutorials.length,
    topics: activeTopics.length - 1,
    hours:  Math.round(tutorials.reduce((acc, t) => acc + parseInt(t.duration), 0) / 60),
    pdfs:   tutorials.filter(t => t.pdf).length,
  }), [activeTopics])

  return (
    <div className="pt-24 pb-32">
      <Section>

        {/* ── HEADER ── */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
            border border-blue-400/25 bg-blue-500/[0.08] dark:text-blue-300 text-blue-600
            text-xs font-medium tracking-widest uppercase mb-6">
            <GraduationCap size={13} />
            Learning Hub
          </div>

          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight mb-6 dark:text-white text-gray-900">
            Tutorials
          </h1>

          <p className="text-lg dark:text-gray-400 text-gray-500 leading-relaxed max-w-2xl mx-auto">
            Hands-on technical tutorials on Python, SQL, PySpark, Databricks, System Design,
            DSA, Data Engineering — and AI coming soon. Built from real production experience.
          </p>

          {/* stats */}
          <div className="flex items-center justify-center gap-8 mt-10 pt-10 dark:border-t dark:border-white/[0.06] border-t border-black/[0.06]">
            {[
              { val: stats.total,       label: 'Tutorials' },
              { val: stats.topics,      label: 'Topics' },
              { val: `${stats.hours}h`, label: 'Content' },
              { val: stats.pdfs || '—', label: 'PDF Docs' },
            ].map(({ val, label }, i, arr) => (
              <div key={label} className="flex items-center gap-8">
                <div className="text-center">
                  <p className="text-2xl font-bold dark:text-white text-gray-900">{val}</p>
                  <p className="text-xs dark:text-gray-500 text-gray-400 tracking-widest uppercase mt-1">{label}</p>
                </div>
                {i < arr.length - 1 && <div className="h-8 w-px dark:bg-white/[0.08] bg-black/[0.08]" />}
              </div>
            ))}
          </div>
        </div>

        {/* ── FILTERS ── */}
        <div className="max-w-5xl mx-auto mb-10 space-y-4">
          <div className="relative">
            <Search size={15} className="absolute left-4 top-1/2 -translate-y-1/2 dark:text-gray-500 text-gray-400" />
            <input
              type="text"
              placeholder="Search tutorials, tags, topics..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl text-sm dark:text-white text-gray-900
                dark:placeholder-gray-500 placeholder-gray-400
                dark:bg-white/[0.04] bg-black/[0.03]
                dark:border-white/[0.08] border-black/[0.08] border
                focus:border-blue-400/50 focus:outline-none transition-all duration-200"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {activeTopics.map((topic) => (
              <button
                key={topic}
                onClick={() => setActiveTopic(topic)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 border ${
                  activeTopic === topic
                    ? 'bg-blue-500/20 border-blue-400/40 dark:text-blue-300 text-blue-600'
                    : 'dark:border-white/[0.07] border-black/[0.08] dark:text-gray-400 text-gray-500 dark:hover:border-white/20 hover:border-black/20 dark:hover:text-white hover:text-gray-900 dark:bg-white/[0.02] bg-black/[0.02]'
                }`}
              >
                {topic !== 'All' && <span className="mr-1">{TOPIC_ICONS[topic]}</span>}
                {topic}
              </button>
            ))}

            <div className="w-px dark:bg-white/[0.08] bg-black/[0.08] mx-1" />

            {(['All', 'Beginner', 'Intermediate', 'Advanced'] as const).map((d) => (
              <button
                key={d}
                onClick={() => setActiveDiff(d)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 border ${
                  activeDiff === d
                    ? 'bg-blue-500/20 border-blue-400/40 dark:text-blue-300 text-blue-600'
                    : 'dark:border-white/[0.07] border-black/[0.08] dark:text-gray-400 text-gray-500 dark:hover:border-white/20 hover:border-black/20 dark:hover:text-white hover:text-gray-900 dark:bg-white/[0.02] bg-black/[0.02]'
                }`}
              >
                {d}
              </button>
            ))}
          </div>

          <p className="text-xs dark:text-gray-600 text-gray-400">
            Showing <span className="dark:text-gray-400 text-gray-600">{filtered.length}</span> of {tutorials.length} tutorials
          </p>
        </div>

        {/* ── GRID ── */}
        {filtered.length > 0 ? (
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((tutorial) => (
              <div
                key={tutorial.id}
                className={`tutorial-card group relative rounded-2xl border dark:border-white/[0.07] border-black/[0.07]
                  overflow-hidden dark:shadow-[0_8px_40px_rgba(0,0,0,0.3)] shadow-sm
                  hover:border-blue-500/25 hover:-translate-y-1
                  transition-all duration-300 flex flex-col
                  ${tutorial.comingSoon ? 'opacity-60' : ''}`}
              >
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent
                  opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                

                <div className="p-6 flex flex-col flex-1">
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

                  <h3 className="text-base font-bold dark:text-white text-gray-900 mb-2 leading-snug tracking-tight
                    hover:text-blue-500 dark:hover:text-blue-300 transition-colors duration-200 cursor-pointer">
                    {tutorial.title}
                  </h3>

                  <p className="text-sm dark:text-gray-500 text-gray-500 leading-relaxed mb-5 flex-1">
                    {tutorial.description}
                  </p>

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
                        className="flex items-center gap-1 text-xs text-blue-500 dark:text-blue-400 hover:text-blue-400 dark:hover:text-blue-300 transition-colors duration-200 font-medium">
                        Start <ChevronRight size={13} />
                      </Link>
                    )}
                  </div>

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

                  <div className="flex flex-wrap gap-1.5 pt-4 dark:border-t dark:border-white/[0.05] border-t border-black/[0.05]">
                    {tutorial.tags.map((tag) => (
                      <span key={tag} className="text-[10px] dark:text-gray-600 text-gray-400 px-2 py-0.5 rounded dark:bg-white/[0.03] bg-black/[0.03] dark:border-white/[0.05] border-black/[0.06] border">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="max-w-md mx-auto text-center py-20">
            <BookOpen size={32} className="dark:text-gray-600 text-gray-400 mx-auto mb-4" />
            <p className="dark:text-gray-500 text-gray-400 text-sm">No tutorials found. Try adjusting your filters.</p>
          </div>
        )}

        {/* ── AI COMING SOON BANNER ── */}
        <div className="max-w-5xl mx-auto mt-10">
          <div className="tutorials-dark-section relative rounded-2xl border p-6 overflow-hidden flex items-center justify-between gap-6">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/20 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/[0.04] to-transparent" />
            <div className="relative flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-xl shrink-0">🤖</div>
              <div>
                <p className="text-sm font-semibold dark:text-white text-gray-900">AI & ML Tutorials — Coming Soon</p>
                <p className="text-xs dark:text-gray-500 text-gray-400 mt-0.5">LLMs, RAG pipelines, vector databases, feature stores, and AI for data engineers.</p>
              </div>
            </div>
            <span className="relative shrink-0 text-[11px] px-3 py-1.5 rounded-full border border-blue-500/25 bg-blue-500/10 dark:text-blue-400 text-blue-600 font-medium whitespace-nowrap">
              In Progress
            </span>
          </div>
        </div>

        {/* ── CTA ── */}
        <div className="max-w-3xl mx-auto text-center mt-10">
          <div className="tutorials-dark-section relative rounded-2xl border p-12 overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.05] to-transparent" />
            <div className="absolute top-0 left-0 w-12 h-px bg-blue-400/50" />
            <div className="absolute top-0 left-0 h-12 w-px bg-blue-400/50" />
            <div className="absolute bottom-0 right-0 w-12 h-px bg-blue-400/50" />
            <div className="absolute bottom-0 right-0 h-12 w-px bg-blue-400/50" />
            <div className="relative">
              <p className="text-[11px] dark:text-blue-400 text-blue-600 tracking-[0.25em] uppercase font-semibold mb-3">Want more?</p>
              <h3 className="text-2xl font-bold dark:text-white text-gray-900 mb-3">See These Skills in Production</h3>
              <p className="dark:text-gray-400 text-gray-500 text-sm mb-8 leading-relaxed">
                Explore real-world projects where I apply every one of these technologies at scale.
              </p>
              <Link href="/projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white text-sm font-semibold transition-all duration-200 hover:brightness-110"
                style={{ background: 'linear-gradient(135deg, #1a2f6e 0%, #1e3a8a 55%, #1e40af 100%)', boxShadow: '0 0 0 1px rgba(30,58,138,0.5), 0 2px 8px rgba(26,47,110,0.5)' }}>
                View Projects <ChevronRight size={15} />
              </Link>
            </div>
          </div>
        </div>

      </Section>
    </div>
  )
}
