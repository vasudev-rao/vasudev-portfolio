"use client"

import Link from "next/link"
import Image from "next/image"
import Section from "@/components/ui/Section"
import ProjectCard from "@/components/features/projects/ProjectCard"
import MagneticButton from "@/components/ui/MagneticButton"
import Reveal from "@/components/ui/Reveal"
import { getFeaturedProjects } from "@/lib/data/projects"
import { ArrowRight, ArrowUpRight, Shield, Zap, Eye } from "lucide-react"
import { useEffect, useRef, useState } from "react"

function useCounter(target: number, duration = 1800, active = false) {
  const [val, setVal] = useState(0)
  useEffect(() => {
    if (!active) return
    let t0: number
    const tick = (ts: number) => {
      if (!t0) t0 = ts
      const p = Math.min((ts - t0) / duration, 1)
      const ease = 1 - Math.pow(1 - p, 3)
      setVal(Math.floor(ease * target))
      if (p < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [active, target, duration])
  return val
}

function Metric({ value, suffix, label, active }: { value: number; suffix: string; label: string; active: boolean }) {
  const n = useCounter(value, 1600, active)
  return (
    <div className="group relative flex flex-col items-center justify-center gap-1 py-6 px-4 rounded-2xl border dark:border-white/[0.07] border-black/[0.07] dark:bg-white/[0.025] bg-black/[0.02] hover:border-blue-500/25 dark:hover:bg-blue-500/[0.04] hover:bg-blue-500/[0.04] transition-all duration-500 overflow-hidden">
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[radial-gradient(ellipse_at_50%_0%,rgba(59,130,246,0.09),transparent_70%)]" />
      <span className="relative text-3xl sm:text-4xl font-bold tabular-nums tracking-tight dark:text-white text-gray-900">{n}{suffix}</span>
      <span className="relative text-[11px] dark:text-gray-500 text-gray-400 tracking-[0.15em] uppercase font-medium">{label}</span>
    </div>
  )
}

export default function Home() {
  const projects = getFeaturedProjects(3)
  const blobRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const fn = (e: MouseEvent) => {
      if (!blobRef.current) return
      const x = (e.clientX / window.innerWidth - 0.5) * 28
      const y = (e.clientY / window.innerHeight - 0.5) * 28
      blobRef.current.style.transform = `translate(${x}px,${y}px)`
    }
    window.addEventListener("mousemove", fn)
    return () => window.removeEventListener("mousemove", fn)
  }, [])

  const metricsRef = useRef<HTMLDivElement>(null)
  const [go, setGo] = useState(false)
  useEffect(() => {
    const el = metricsRef.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setGo(true); obs.disconnect() } }, { threshold: 0.3 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center px-4 pt-24 overflow-hidden">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-0 dark:opacity-[0.03] opacity-[0.05]"
            style={{ backgroundImage: "linear-gradient(rgba(0,0,0,.5) 1px,transparent 1px),linear-gradient(90deg,rgba(0,0,0,.5) 1px,transparent 1px)", backgroundSize: "56px 56px" }} />
          <div ref={blobRef} className="absolute inset-0 transition-transform duration-100 ease-out pointer-events-none">
            <div className="absolute top-[-18%] left-[-12%] w-[680px] h-[680px] rounded-full dark:bg-blue-600/[0.10] bg-blue-400/[0.14] blur-[160px]" />
            <div className="absolute bottom-[10%] right-[-12%] w-[480px] h-[480px] rounded-full dark:bg-blue-700/[0.07] bg-blue-500/[0.09] blur-[140px]" />
            <div className="absolute top-[38%] left-[48%] -translate-x-1/2 w-[380px] h-[380px] rounded-full dark:bg-blue-500/[0.05] bg-blue-400/[0.07] blur-[110px]" />
          </div>
          <div className="absolute inset-0 dark:bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,transparent_30%,rgba(0,0,0,0.65)_100%)] bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,transparent_30%,rgba(248,250,252,0.75)_100%)]" />
        </div>

        <div className="max-w-4xl w-full text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-300/30 bg-gradient-to-r from-blue-400/10 via-blue-300/10 to-blue-500/10 dark:text-blue-300 text-blue-600 text-xs font-medium tracking-wide mb-8"
            style={{ animation: "fsd .6s ease both" }}>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inset-0 rounded-full bg-blue-400 opacity-60" />
              <span className="relative rounded-full h-2 w-2 bg-blue-400 block" />
            </span>
            Available for senior data engineering roles
          </div>

          <div className="flex justify-center mb-7" style={{ animation: "fsd .65s .08s ease both backwards" }}>
            <div className="relative">
              <div className="absolute -inset-[3px] rounded-full bg-gradient-to-br from-blue-500/50 to-blue-700/40 blur-[6px]" />
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden dark:border-white/10 border-black/10 border shadow-2xl">
                <Image src="/images/profile.png" alt="Vasu" fill className="object-cover" />
              </div>
            </div>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-[1.06] tracking-[-0.03em] dark:text-white text-gray-900"
            style={{ animation: "fsd .7s .16s ease both backwards" }}>
            I build{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-blue-500 via-blue-400 to-blue-600 bg-clip-text text-transparent">data systems</span>
              <span className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-blue-400/0 via-blue-400/50 to-blue-500/0" />
            </span>
            <br />that scale to billions
          </h1>

          <p className="mt-5 dark:text-gray-400 text-gray-500 text-base sm:text-lg max-w-xl mx-auto leading-relaxed"
            style={{ animation: "fsd .7s .24s ease both backwards" }}>
            Senior Data Engineer specialising in real-time pipelines, distributed systems, and lakehouse architectures.
          </p>

          <div ref={metricsRef} className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-10"
            style={{ animation: "fsd .7s .32s ease both backwards" }}>
            <Metric value={7}   suffix="+"   label="Years exp."    active={go} />
            <Metric value={1}   suffix="B+"  label="Events / day"  active={go} />
            <Metric value={100} suffix="TB+" label="Data managed"  active={go} />
            <Metric value={99}  suffix=".9%" label="SLA delivered" active={go} />
          </div>

          <div className="flex flex-col sm:flex-row gap-3 mt-10 justify-center"
            style={{ animation: "fsd .7s .40s ease both backwards" }}>
            <MagneticButton className="group relative px-5 py-2.5 rounded-lg font-semibold transition-all duration-200 overflow-hidden" style={{ background: 'linear-gradient(135deg, #1a2f6e 0%, #1e3a8a 60%, #1e40af 100%)', boxShadow: '0 0 0 1px rgba(30,58,138,0.5), 0 2px 8px rgba(26,47,110,0.5)' }}>
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12" />
              <Link href="/projects" className="relative flex items-center gap-1.5 text-white/90 text-[13px] group-hover:text-white">
                View Work <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </MagneticButton>
            <MagneticButton className="group relative px-5 py-2.5 rounded-lg font-semibold transition-all duration-200 overflow-hidden" style={{ background: 'linear-gradient(135deg, #1a2f6e 0%, #1e3a8a 60%, #1e40af 100%)', boxShadow: '0 0 0 1px rgba(30,58,138,0.5), 0 2px 8px rgba(26,47,110,0.5)' }}>
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12" />
              <a href="/Vasudev_Rao_Resume.pdf" download className="relative flex items-center gap-1.5 text-white/90 text-[13px] group-hover:text-white">
                Download CV <ArrowUpRight size={13} />
              </a>
            </MagneticButton>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <Reveal>
        <div className="relative py-5 overflow-hidden dark:border-y dark:border-white/[0.04] border-y border-black/[0.05]">
          <div className="absolute left-0 top-0 bottom-0 w-20 z-10 dark:bg-gradient-to-r dark:from-[#070a10] bg-gradient-to-r from-[#f8fafc] to-transparent" />
          <div className="absolute right-0 top-0 bottom-0 w-20 z-10 dark:bg-gradient-to-l dark:from-[#070a10] bg-gradient-to-l from-[#f8fafc] to-transparent" />
          <div className="flex gap-0" style={{ animation: "marquee 28s linear infinite", width: "max-content" }}>
            {["Apache Kafka","Delta Lake","Apache Spark","Apache Flink","Kubernetes","Terraform","Airflow","Trino","BigQuery","Redshift","FastAPI","Databricks",
              "Apache Kafka","Delta Lake","Apache Spark","Apache Flink","Kubernetes","Terraform","Airflow","Trino","BigQuery","Redshift","FastAPI","Databricks",
            ].map((t, i) => (
              <span key={i} className="shrink-0 text-[11px] font-medium dark:text-gray-600 text-gray-400 tracking-widest uppercase px-6">
                {t}<span className="ml-6 dark:text-gray-800 text-gray-300">·</span>
              </span>
            ))}
          </div>
        </div>
      </Reveal>

      {/* PROJECTS */}
      <Reveal>
        <Section className="bg-transparent pt-28 sm:pt-32">
          <div className="flex items-end justify-between mb-14">
            <div>
              <p className="text-[11px] dark:text-blue-400 text-blue-600 tracking-[0.18em] uppercase font-semibold mb-3">Portfolio</p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight dark:text-white text-gray-900">Selected Work</h2>
            </div>
            <Link href="/projects" className="hidden sm:inline-flex items-center gap-2 text-sm dark:text-gray-400 text-gray-500 dark:hover:text-white hover:text-gray-900 transition-colors duration-200 group">
              All projects <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-stretch">
            {projects.map((project) => (
              <div key={project.slug} className="h-full"><ProjectCard {...project} /></div>
            ))}
          </div>
          <div className="text-center mt-10 sm:hidden">
            <Link href="/projects" className="inline-flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition">
              View all projects <ArrowRight size={15} />
            </Link>
          </div>
        </Section>
      </Reveal>

      {/* PRINCIPLES */}
      <Reveal>
        <Section className="bg-transparent">
          <div className="text-center mb-14">
            <p className="text-[11px] dark:text-blue-400 text-blue-600 tracking-[0.18em] uppercase font-semibold mb-3">How I work</p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight dark:text-white text-gray-900">Engineering Principles</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-5">
            {[
              { Icon: Shield, title: "Reliability First",  body: "Systems designed for 99.9% SLA. Every pipeline ships with observability, alerting, and a documented recovery path.", grad: "from-blue-500/[0.12] to-blue-600/[0.02]", ring: "group-hover:border-blue-500/25", ic: "text-blue-400 dark:bg-blue-500/10 bg-blue-500/10" },
              { Icon: Zap,    title: "Scalable by Design", body: "Architecture that grows with your data — from gigabytes to petabytes without re-engineering the foundation.",         grad: "from-blue-400/[0.12] to-blue-500/[0.02]", ring: "group-hover:border-blue-400/25", ic: "text-blue-400 dark:bg-blue-400/10 bg-blue-400/10" },
              { Icon: Eye,    title: "Deep Observability", body: "You can't fix what you can't see. Rich metrics, distributed tracing, and cost visibility across every layer.",        grad: "from-blue-500/[0.12] to-blue-700/[0.02]", ring: "group-hover:border-blue-600/25", ic: "text-blue-400 dark:bg-blue-600/10 bg-blue-600/10" },
            ].map(({ Icon, title, body, grad, ring, ic }) => (
              <div key={title} className={`group relative p-7 rounded-2xl border dark:border-white/[0.07] border-black/[0.07] ${ring} dark:bg-white/[0.02] bg-white shadow-sm dark:shadow-none transition-all duration-500 overflow-hidden`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${grad} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className="relative">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-5 ${ic} group-hover:scale-110 transition-transform duration-300`}><Icon size={20} /></div>
                  <h3 className="font-semibold text-lg mb-2 dark:text-white text-gray-900">{title}</h3>
                  <p className="text-sm dark:text-gray-500 text-gray-500 leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>
      </Reveal>

      {/* CTA */}
      <Reveal>
        <Section className="bg-transparent pb-32">
          <div className="relative max-w-2xl mx-auto text-center rounded-3xl px-8 py-16 overflow-hidden">
            <div className="absolute inset-0 rounded-3xl dark:border-white/[0.08] border-black/[0.07] border" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_55%_at_50%_0%,rgba(59,130,246,0.09),transparent_70%)]" />
            <div className="absolute inset-0 dark:bg-transparent bg-white/70 rounded-3xl" />
            <div className="absolute top-0 left-0 w-20 h-px bg-gradient-to-r from-blue-400 via-blue-300 to-transparent" />
            <div className="absolute top-0 left-0 h-20 w-px bg-gradient-to-b from-blue-400 via-blue-300 to-transparent" />
            <div className="absolute bottom-0 right-0 w-20 h-px bg-gradient-to-l from-blue-400 via-blue-300 to-transparent" />
            <div className="absolute bottom-0 right-0 h-20 w-px bg-gradient-to-t from-blue-400 via-blue-300 to-transparent" />
            <div className="relative">
              <p className="text-[11px] dark:text-blue-400 text-blue-600 tracking-[0.18em] uppercase font-semibold mb-4">Let's talk</p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4 dark:text-white text-gray-900">Let's build something scalable</h2>
              <p className="dark:text-gray-400 text-gray-500 mb-10 leading-relaxed">
                Need production-grade data systems that actually scale?<br className="hidden sm:block" />Let's discuss your architecture.
              </p>
              <Link href="/contact" className="group relative inline-flex items-center gap-[5px] px-4 py-[7px] rounded-lg text-white text-[12px] font-semibold overflow-hidden transition-all duration-300 hover:brightness-110"
                style={{ background: "linear-gradient(135deg, #1a2f6e 0%, #1e3a8a 55%, #1e40af 100%)", boxShadow: "0 0 0 1px rgba(30,58,138,0.5), 0 2px 8px rgba(26,47,110,0.5)" }}>
                <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12" />
                <span className="relative">Get in Touch</span>
              </Link>
            </div>
          </div>
        </Section>
      </Reveal>

      <style>{`
        @keyframes fsd { from{opacity:0;transform:translateY(-14px)} to{opacity:1;transform:translateY(0)} }
        @keyframes marquee { from{transform:translateX(0)} to{transform:translateX(-50%)} }
      `}</style>
    </>
  )
}
