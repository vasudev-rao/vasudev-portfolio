'use client'

import { experiences } from '@/lib/data/experience'

export default function ExperienceSection() {
  return (
    <section className="relative py-24">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold dark:text-white text-gray-900 mb-3">Experience</h2>
        <p className="dark:text-gray-400 text-gray-500">Real-world systems. Measurable impact.</p>
      </div>

      <div className="relative max-w-5xl mx-auto">
        <div className="absolute left-4 top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-500/40 to-transparent" />

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-12 group">
              <div className="absolute left-0 top-2 w-4 h-4 rounded-full bg-blue-500" />

              <div className="rounded-xl dark:bg-[#0b0f19]/90 bg-white p-6 dark:border-white/10 border-black/[0.07] border dark:shadow-none shadow-sm">
                <div className="flex justify-between mb-3">
                  <div>
                    <h3 className="text-xl dark:text-white text-gray-900 font-semibold">{exp.role}</h3>
                    <p className="text-blue-500 dark:text-blue-400 text-sm">{exp.company}</p>
                  </div>
                  <div className="dark:text-gray-400 text-gray-500 text-sm">{exp.period}</div>
                </div>

                <ul className="space-y-2 mb-4">
                  {exp.achievements.map((a, i) => (
                    <li key={i} className="dark:text-gray-400 text-gray-500 text-sm">• {a}</li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((t) => (
                    <span key={t} className="px-2 py-1 text-xs dark:bg-white/5 bg-black/[0.04] dark:border-white/10 border-black/[0.08] border rounded dark:text-gray-400 text-gray-500">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
