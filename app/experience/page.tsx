import Section from '@/components/ui/Section'
import { experiences } from '@/lib/data/experience'
import { Briefcase, MapPin, Calendar, ArrowUpRight } from 'lucide-react'

export default function ExperiencePage() {
  return (
    <div className="pt-24 pb-32 relative overflow-hidden">

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 dark:bg-blue-500/5 bg-blue-500/[0.06] rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 dark:bg-blue-500/5 bg-blue-500/[0.06] rounded-full blur-3xl" />
      </div>

      <Section>

        {/* ── HEADER ── */}
        <div className="relative max-w-3xl mx-auto text-center mb-20">
          <p className="text-[11px] dark:text-blue-400 text-blue-600 tracking-[0.25em] uppercase font-semibold mb-4">
            Career Journey
          </p>
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight mb-6 dark:text-white text-gray-900">
            Experience
          </h1>
          <p className="text-lg dark:text-gray-400 text-gray-500 leading-relaxed max-w-2xl mx-auto">
            Building scalable data systems with measurable impact across{' '}
            <span className="dark:text-blue-400 text-blue-600 font-semibold">7+ years</span> of production experience.
          </p>
        </div>

        {/* ── TIMELINE ── */}
        <div className="relative max-w-6xl mx-auto">

          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 md:-translate-x-px overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-400/70 via-blue-500/40 to-transparent" />
            <div className="absolute inset-0 w-full h-32 bg-gradient-to-b from-blue-400 to-transparent animate-pulse"
              style={{ animationDuration: '3s' }} />
          </div>

          <div className="space-y-20">
            {experiences.map((exp, index) => (
              <div key={index} className="relative group/item">

                {/* Dot */}
                <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-8 z-10">
                  <div className="relative">
                    <div className="absolute inset-0 w-6 h-6 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full bg-blue-400/20 animate-ping"
                      style={{ animationDuration: '2s' }} />
                    <div className="absolute inset-0 w-5 h-5 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full bg-blue-400/30 blur-md
                      group-hover/item:bg-blue-300/50 transition-all duration-300" />
                    <div className="timeline-dot relative w-4 h-4 rounded-full border-2 border-blue-400
                      shadow-[0_0_20px_rgba(59,130,246,0.6)]
                      group-hover/item:scale-125 group-hover/item:border-blue-300
                      group-hover/item:shadow-[0_0_30px_rgba(59,130,246,0.8)]
                      transition-all duration-500">
                      <div className="absolute inset-0.5 rounded-full bg-blue-400/50" />
                    </div>
                  </div>
                </div>

                {/* Card */}
                <div className={`ml-16 md:ml-0 ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-20 md:w-[46%]' : 'md:ml-auto md:pl-20 md:w-[46%]'
                }`}>
                  <div className="experience-card group/card relative rounded-2xl border dark:border-white/[0.07] border-black/[0.07]
                    overflow-hidden hover:border-blue-400/30
                    dark:hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.1)]
                    transition-all duration-500 hover:-translate-y-1">

                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.03] via-transparent to-transparent
                      opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />

                    <div className="absolute top-0 left-0 right-0 h-px overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/50 to-transparent" />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/80 to-transparent
                        translate-x-[-100%] group-hover/card:translate-x-[100%] transition-transform duration-1000" />
                    </div>

                    <div className="absolute inset-0 dark:opacity-[0.015] opacity-[0.025]"
                      style={{
                        backgroundImage: 'linear-gradient(rgba(59,130,246,.3) 1px,transparent 1px),linear-gradient(90deg,rgba(59,130,246,.3) 1px,transparent 1px)',
                        backgroundSize: '32px 32px'
                      }} />

                    <div className="relative p-8">
                      <div className="mb-6">
                        <h3 className="text-2xl font-bold mb-2 dark:text-white text-gray-900 tracking-tight">{exp.role}</h3>
                        <div className="flex items-center gap-2 text-sm font-semibold mb-4 dark:text-blue-400 text-blue-600">
                          <Briefcase size={15} className="opacity-80" />
                          <span>{exp.company}</span>
                        </div>
                        <div className="flex flex-wrap gap-4 text-xs dark:text-gray-500 text-gray-400 font-medium">
                          <span className="flex items-center gap-1.5 px-3 py-1 rounded-full dark:bg-white/[0.03] bg-black/[0.04] dark:border-white/[0.05] border-black/[0.07] border">
                            <Calendar size={12} />{exp.period}
                          </span>
                          <span className="flex items-center gap-1.5 px-3 py-1 rounded-full dark:bg-white/[0.03] bg-black/[0.04] dark:border-white/[0.05] border-black/[0.07] border">
                            <MapPin size={12} />{exp.location}
                          </span>
                        </div>
                      </div>

                      <div className="relative h-px mb-6 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent dark:via-white/10 via-black/10 to-transparent" />
                      </div>

                      <ul className="space-y-3 mb-6">
                        {exp.achievements.map((a, i) => (
                          <li key={i} className="dark:text-gray-400 text-gray-500 text-sm flex gap-3 leading-relaxed">
                            <span className="dark:text-blue-400 text-blue-500 mt-1 shrink-0 text-xs">▸</span>
                            <span>{a}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2">
                        {exp.tech.map((t) => (
                          <span key={t}
                            className="px-2.5 py-1 text-[11px] font-mono dark:text-gray-400 text-gray-500
                              dark:bg-white/[0.03] bg-black/[0.04] dark:border-white/[0.07] border-black/[0.08] border rounded-lg
                              dark:hover:bg-white/[0.06] hover:bg-black/[0.07] dark:hover:border-blue-400/30 hover:border-blue-400/40
                              dark:hover:text-blue-300 hover:text-blue-600 transition-all duration-200 cursor-default">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* ── CTA ── */}
        <div className="max-w-3xl mx-auto text-center mt-24">
          <div className="experience-cta relative rounded-2xl border dark:border-white/[0.07] border-black/[0.07] p-12 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.06] to-transparent" />
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent" />
            <div className="absolute top-0 left-0 w-12 h-px bg-blue-400/40" />
            <div className="absolute top-0 left-0 h-12 w-px bg-blue-400/40" />
            <div className="absolute bottom-0 right-0 w-12 h-px bg-blue-400/40" />
            <div className="absolute bottom-0 right-0 h-12 w-px bg-blue-400/40" />
            <div className="relative z-10">
              <div className="flex items-center justify-center gap-2 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <p className="text-[11px] dark:text-blue-400 text-blue-600 tracking-[0.25em] uppercase font-semibold">Available Now</p>
              </div>
              <h3 className="text-3xl font-bold mb-4 dark:text-white text-gray-900 tracking-tight">Let's Build Something Scalable</h3>
              <p className="dark:text-gray-400 text-gray-500 mb-8 leading-relaxed max-w-xl mx-auto">
                Open to solving complex data engineering challenges and building systems that don't break at scale.
              </p>
              <a href="/contact"
                className="group/btn relative inline-flex items-center gap-2 px-6 py-2.5 rounded-lg
                  text-white font-semibold text-[13px] overflow-hidden transition-all duration-300 hover:brightness-110"
                style={{
                  background: "linear-gradient(135deg, #1a2f6e 0%, #1e3a8a 55%, #1e40af 100%)",
                  boxShadow: "0 0 0 1px rgba(30,58,138,0.5), 0 2px 8px rgba(26,47,110,0.5)",
                }}>
                <span className="absolute inset-0 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-500 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12" />
                <span className="relative">Contact Me</span>
                <ArrowUpRight size={14} className="relative transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
              </a>
              <p className="mt-5 text-xs dark:text-gray-500 text-gray-400">Typically respond within 24 hours</p>
            </div>
          </div>
        </div>

      </Section>
    </div>
  )
}
