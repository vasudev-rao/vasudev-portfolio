import Section from '@/components/ui/Section'
import { techStack } from '@/lib/data/techstack'

export default function TechStackPage() {
  return (
    <div className="pt-24 pb-32">
      <Section>

        {/* ── HEADER ── */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <p className="text-[11px] dark:text-blue-400 text-blue-600 tracking-[0.25em] uppercase font-semibold mb-4">
            Engineering Arsenal
          </p>
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 dark:text-white text-gray-900 leading-[1.08] tracking-tight">
            Tech{" "}
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Stack
            </span>
          </h1>
          <p className="text-lg dark:text-gray-400 text-gray-500 leading-relaxed max-w-xl mx-auto">
            Production-proven technologies I use to build scalable data platforms.
            Expert-level proficiency in the modern data engineering ecosystem.
          </p>
        </div>

        {/* ── GRID ── */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {techStack.map((category) => (
            <div key={category.category}
              className="group relative rounded-2xl transition-all duration-500 hover:-translate-y-1">

              {/* outer glow */}
              <div className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500
                bg-gradient-to-br from-blue-500/20 via-transparent to-blue-600/10 blur-sm" />

              {/* card */}
              <div className="stack-card relative rounded-2xl border dark:border-white/[0.07] border-black/[0.07]
                overflow-hidden group-hover:border-blue-500/20 transition-colors duration-500">

                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-5 right-5 w-1.5 h-1.5 rounded-full bg-blue-500/40 group-hover:bg-blue-400/80 transition-colors duration-300" />
                <div className="absolute inset-0 dark:opacity-[0.025] opacity-[0.03]"
                  style={{
                    backgroundImage: "linear-gradient(rgba(0,0,0,0.5) 1px,transparent 1px),linear-gradient(90deg,rgba(0,0,0,0.5) 1px,transparent 1px)",
                    backgroundSize: "32px 32px"
                  }} />

                <div className="relative p-8">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-11 h-11 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-2xl
                      group-hover:bg-blue-500/15 group-hover:border-blue-500/30 transition-all duration-300">
                      {category.icon}
                    </div>
                    <div>
                      <h2 className="text-lg font-semibold dark:text-white text-gray-900 tracking-tight">
                        {category.category}
                      </h2>
                      <p className="text-xs dark:text-gray-500 text-gray-400 mt-0.5">
                        {category.technologies.length} technologies
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {category.technologies.map((tech) => (
                      <div key={tech.name}
                        className="flex justify-between items-center py-3 dark:border-b dark:border-white/[0.04] border-b border-black/[0.05] last:border-0">
                        <div className="flex items-center gap-3">
                          <div className={`w-0.5 h-8 rounded-full ${
                            tech.proficiency === 'Expert'   ? 'bg-blue-500' :
                            tech.proficiency === 'Advanced' ? 'bg-blue-400/50' : 'bg-gray-400/50'
                          }`} />
                          <div>
                            <span className="text-sm dark:text-white/90 text-gray-800 font-medium block">{tech.name}</span>
                            {tech.yearsOfExperience && (
                              <span className="text-[11px] dark:text-gray-500 text-gray-400 font-mono">{tech.yearsOfExperience}y exp</span>
                            )}
                          </div>
                        </div>
                        <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-mono tracking-wide ${
                          tech.proficiency === 'Expert'
                            ? 'bg-blue-500/15 dark:text-blue-300 text-blue-600 border border-blue-500/25'
                            : tech.proficiency === 'Advanced'
                            ? 'bg-blue-400/10 dark:text-blue-400/80 text-blue-500 border border-blue-400/20'
                            : 'dark:bg-white/[0.05] bg-black/[0.04] dark:text-gray-400 text-gray-500 dark:border-white/[0.08] border-black/[0.08] border'
                        }`}>
                          {tech.proficiency}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── PROFICIENCY LEGEND ── */}
        <div className="max-w-4xl mx-auto mt-10">
          <div className="dark-section rounded-2xl border dark:border-white/[0.07] border-black/[0.07] p-6">
            <p className="text-[10px] dark:text-gray-500 text-gray-400 tracking-widest uppercase mb-5">Proficiency Legend</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { label: "Expert",       desc: "Production deployment & architecture decisions", bar: "bg-blue-500",    badge: "bg-blue-500/15 dark:text-blue-300 text-blue-600 border-blue-500/25" },
                { label: "Advanced",     desc: "Complex implementations & optimizations",        bar: "bg-blue-400/50", badge: "bg-blue-400/10 dark:text-blue-400/80 text-blue-500 border-blue-400/20" },
                { label: "Intermediate", desc: "Working knowledge & active learning",            bar: "bg-gray-400/50", badge: "dark:bg-white/[0.05] bg-black/[0.04] dark:text-gray-400 text-gray-500 dark:border-white/[0.08] border-black/[0.08]" },
              ].map((level) => (
                <div key={level.label} className="flex items-start gap-3">
                  <div className={`w-0.5 h-10 rounded-full mt-1 shrink-0 ${level.bar}`} />
                  <div>
                    <span className={`inline-block px-2.5 py-0.5 rounded-full text-[11px] font-mono border mb-1.5 ${level.badge}`}>
                      {level.label}
                    </span>
                    <p className="text-xs dark:text-gray-500 text-gray-400 leading-relaxed">{level.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── CTA ── */}
        <div className="max-w-3xl mx-auto text-center mt-20">
          <div className="dark-section relative rounded-2xl border dark:border-white/[0.07] border-black/[0.07] p-12 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.05] via-transparent to-transparent" />
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
            <div className="absolute top-0 left-0 w-12 h-px bg-blue-500/40" />
            <div className="absolute top-0 left-0 w-px h-12 bg-blue-500/40" />
            <div className="absolute bottom-0 right-0 w-12 h-px bg-blue-500/40" />
            <div className="absolute bottom-0 right-0 w-px h-12 bg-blue-500/40" />
            <div className="relative">
              <p className="text-[11px] dark:text-blue-400 text-blue-600 tracking-[0.25em] uppercase font-semibold mb-4">
                See it in practice
              </p>
              <h3 className="text-3xl font-bold mb-3 dark:text-white text-gray-900 tracking-tight">See These in Action</h3>
              <p className="dark:text-gray-400 text-gray-500 mb-8 leading-relaxed">
                Explore real-world projects built using these technologies.
              </p>
              <a href="/projects"
                className="group/btn relative inline-flex items-center gap-2 px-6 py-2.5 rounded-lg
                  text-white font-semibold text-[13px] overflow-hidden transition-all duration-300 hover:brightness-110"
                style={{
                  background: "linear-gradient(135deg, #1a2f6e 0%, #1e3a8a 55%, #1e40af 100%)",
                  boxShadow: "0 0 0 1px rgba(30,58,138,0.5), 0 2px 8px rgba(26,47,110,0.5)",
                }}>
                <span className="absolute inset-0 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-500 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12" />
                <span className="relative">View Projects</span>
                <svg className="w-3.5 h-3.5 relative transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </a>
            </div>
          </div>
        </div>

      </Section>
    </div>
  )
}
