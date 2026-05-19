'use client'

import Section from '@/components/ui/Section'
import { Mail, Github, Linkedin, Send, ArrowUpRight, MapPin, Clock } from 'lucide-react'
import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [sending, setSending] = useState(false)
  const [focused, setFocused] = useState<string | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)
    const mailtoLink = `mailto:contact@vasudevarao.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`
    window.location.href = mailtoLink
    setTimeout(() => setSending(false), 1500)
  }

  const handleChange = (e: any) => setFormData({ ...formData, [e.target.name]: e.target.value })

  const inputBase = `w-full px-4 py-3 rounded-xl text-sm text-white placeholder-gray-600
    bg-[#0a0e1a] border transition-all duration-300 focus:outline-none`

  const inputClass = (name: string) =>
    `${inputBase} ${focused === name ? 'border-blue-500/40 bg-[#0c1120] shadow-[0_0_0_3px_rgba(30,58,138,0.12)]' : 'border-white/[0.06] hover:border-white/[0.1]'}`

  return (
    <div className="pt-24 pb-32 relative overflow-hidden">

      {/* Background ambient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse,rgba(30,58,138,0.12),transparent_70%)]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[radial-gradient(ellipse,rgba(30,58,138,0.06),transparent_70%)]" />
      </div>

      <Section className="bg-transparent">

        {/* ── HEADER ── */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/[0.06] text-blue-400 text-[11px] font-medium tracking-widest uppercase mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            Available for opportunities
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold tracking-[-0.03em] mb-5 leading-[1.05]">
            Let's build something{' '}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-blue-400 via-blue-300 to-blue-500 bg-clip-text text-transparent">
                great
              </span>
              <span className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-blue-400/0 via-blue-400/40 to-blue-500/0" />
            </span>
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed max-w-xl mx-auto">
            Have a data problem, idea, or opportunity? I respond within 24 hours.
          </p>

          {/* quick info strip */}
          <div className="flex items-center justify-center gap-6 mt-8 text-[12px] text-gray-500">
            <span className="flex items-center gap-1.5">
              <MapPin size={12} className="text-blue-400/60" />
              Bengaluru, India
            </span>
            <span className="w-px h-3 bg-white/10" />
            <span className="flex items-center gap-1.5">
              <Clock size={12} className="text-blue-400/60" />
              IST (UTC +5:30)
            </span>
            <span className="w-px h-3 bg-white/10" />
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-emerald-400/80">Open to roles</span>
            </span>
          </div>
        </div>

        {/* ── MAIN GRID ── */}
        <div className="max-w-5xl mx-auto grid lg:grid-cols-[1fr_380px] gap-6">

          {/* ── FORM ── */}
          <div className="relative rounded-2xl overflow-hidden">
            {/* Gradient border */}
            <div className="absolute inset-0 rounded-2xl p-[1px] bg-gradient-to-br from-blue-500/20 via-white/[0.04] to-white/[0.02]">
              <div className="absolute inset-0 rounded-2xl bg-[#070a14]" />
            </div>

            <div className="relative p-8">
              {/* Top accent */}
              <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent" />

              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                  <Send size={14} className="text-blue-400" />
                </div>
                <h2 className="text-lg font-bold text-white tracking-tight">Send a Message</h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[11px] text-gray-500 tracking-wider uppercase">Name</label>
                    <input type="text" name="name" placeholder="Your name"
                      required value={formData.name} onChange={handleChange}
                      onFocus={() => setFocused('name')} onBlur={() => setFocused(null)}
                      className={inputClass('name')} />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[11px] text-gray-500 tracking-wider uppercase">Email</label>
                    <input type="email" name="email" placeholder="you@company.com"
                      required value={formData.email} onChange={handleChange}
                      onFocus={() => setFocused('email')} onBlur={() => setFocused(null)}
                      className={inputClass('email')} />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] text-gray-500 tracking-wider uppercase">Subject</label>
                  <input type="text" name="subject" placeholder="What's this about?"
                    required value={formData.subject} onChange={handleChange}
                    onFocus={() => setFocused('subject')} onBlur={() => setFocused(null)}
                    className={inputClass('subject')} />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] text-gray-500 tracking-wider uppercase">Message</label>
                  <textarea name="message" placeholder="Tell me about your data challenge..."
                    rows={5} required value={formData.message} onChange={handleChange}
                    onFocus={() => setFocused('message')} onBlur={() => setFocused(null)}
                    className={`${inputClass('message')} resize-none`} />
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="group relative w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-white text-[13px] font-semibold overflow-hidden transition-all duration-300 hover:brightness-110 disabled:opacity-60 mt-2"
                  style={{
                    background: "linear-gradient(135deg, #1a2f6e 0%, #1e3a8a 55%, #1e40af 100%)",
                    boxShadow: "0 0 0 1px rgba(30,58,138,0.5), 0 2px 8px rgba(26,47,110,0.5)",
                  }}
                >
                  <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12" />
                  <Send size={13} className="relative" />
                  <span className="relative">{sending ? 'Opening mail client…' : 'Send Message'}</span>
                </button>
              </form>
            </div>
          </div>

          {/* ── RIGHT COLUMN ── */}
          <div className="flex flex-col gap-5">

            {/* Contact links */}
            <div className="relative rounded-2xl bg-[#070a14] border border-white/[0.06] p-6 overflow-hidden">
              <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-blue-400/20 to-transparent" />
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-8 h-px bg-blue-400/40" />
              <div className="absolute top-0 left-0 h-8 w-px bg-blue-400/40" />

              <h2 className="text-[11px] text-gray-500 tracking-[0.2em] uppercase font-medium mb-5">Connect</h2>
              <div className="space-y-2.5">
                {[
                  { Icon: Mail, label: 'contact@vasudevarao.com', sub: 'Email', href: 'mailto:contact@vasudevarao.com' },
                  { Icon: Github, label: 'vasudev-rao', sub: 'GitHub', href: 'https://github.com/vasudev-rao' },
                  { Icon: Linkedin, label: 'vasudevarao', sub: 'LinkedIn', href: 'https://linkedin.com/in/vasudeva-rao-15b44a392' },
                ].map(({ Icon, label, sub, href }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                    className="group flex items-center gap-3 p-3 rounded-xl border border-white/[0.05] bg-white/[0.02] hover:bg-blue-500/[0.06] hover:border-blue-500/20 transition-all duration-200">
                    <span className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center shrink-0 group-hover:border-blue-500/25 group-hover:bg-blue-500/10 transition-all duration-200">
                      <Icon size={13} className="text-gray-400 group-hover:text-blue-400 transition-colors duration-200" />
                    </span>
                    <div className="flex-1 min-w-0">
                      <p className="text-[11px] text-gray-600 uppercase tracking-wider">{sub}</p>
                      <p className="text-[12px] text-gray-300 group-hover:text-white transition-colors truncate">{label}</p>
                    </div>
                    <ArrowUpRight size={12} className="text-gray-600 opacity-0 group-hover:opacity-100 group-hover:text-blue-400 transition-all duration-200 shrink-0" />
                  </a>
                ))}
              </div>
            </div>

            {/* Opportunities */}
            <div className="relative rounded-2xl bg-[#070a14] border border-white/[0.06] p-6 overflow-hidden flex-1">
              <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-blue-400/15 to-transparent" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(30,58,138,0.08),transparent_70%)]" />
              {/* Corner accents */}
              <div className="absolute bottom-0 right-0 w-8 h-px bg-blue-400/40" />
              <div className="absolute bottom-0 right-0 h-8 w-px bg-blue-400/40" />

              <div className="relative">
                <h2 className="text-[11px] text-gray-500 tracking-[0.2em] uppercase font-medium mb-5">Currently seeking</h2>
                <ul className="space-y-3">
                  {[
                    { label: 'Senior / Staff Data Engineering', sub: 'Full-time roles' },
                    { label: 'Data Platform Architecture', sub: 'Consulting' },
                    { label: 'Mentorship & Speaking', sub: 'Community' },
                  ].map(({ label, sub }) => (
                    <li key={label} className="flex items-start gap-3">
                      <span className="mt-1 w-1.5 h-1.5 rounded-full bg-blue-400/60 shrink-0" />
                      <div>
                        <p className="text-[13px] text-gray-300 font-medium leading-snug">{label}</p>
                        <p className="text-[11px] text-gray-600 mt-0.5">{sub}</p>
                      </div>
                    </li>
                  ))}
                </ul>

                {/* Response time */}
                <div className="mt-6 pt-5 border-t border-white/[0.05]">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <p className="text-[11px] text-gray-500">Avg. response time: <span className="text-emerald-400/80">under 24h</span></p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </Section>
    </div>
  )
}
