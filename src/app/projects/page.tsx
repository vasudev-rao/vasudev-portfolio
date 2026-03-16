import { Metadata } from "next";
import { Container } from "@/components/Container";
import { ProjectCard } from "@/components/ProjectCard";
import projectsData from "@/data/projects.json";
import { Project } from "@/types";

export const metadata: Metadata = {
  title: "Client Work — Vasudev Rao | Senior Data Engineer",
  description: "Real consulting results: 35% infrastructure cost reductions, 100+ manual hours automated, 99.9% pipeline reliability. dbt, Snowflake, Airflow, Python for growing businesses.",
  keywords: ["Senior Data Engineer", "PySpark", "Databricks", "Snowflake", "Apache Kafka", "Delta Lake", "Vasudev Rao"],
  alternates: { canonical: "https://vasudevarao.com/projects" },
  openGraph: {
    type: "website",
    url: "https://vasudevarao.com/projects",
    title: "Client Work — Vasudev Rao | Senior Data Engineer",
    description: "35% cost reductions, 100+ hours automated, 99.9% uptime. Real results for real businesses.",
    siteName: "Vasudev Rao",
  },
  twitter: {
    card: "summary_large_image",
    title: "Client Work — Vasudev Rao | Senior Data Engineer",
    description: "35% cost reductions, 100+ hours automated. Real consulting results.",
    creator: "@vasudevarao",
  },
};
const projects = projectsData as Project[];

export default function ProjectsPage() {
  const featured = projects.filter((p) => p.featured);
  const other = projects.filter((p) => !p.featured);
  return (
    <div className="pt-28 pb-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20 items-end">
          <div className="lg:col-span-7">
            <p className="eyebrow mb-6">Client Work</p>
            <h1 className="display-text text-6xl lg:text-7xl text-ink">All<br /><em>Projects</em></h1>
          </div>
          <div className="lg:col-span-5">
            <p className="text-ink-secondary text-base leading-relaxed">
              Every project below delivered a measurable business outcome — cost savings, hours recovered, or revenue enabled. This is what "Future-Proof" data looks like in practice.
            </p>
          </div>
        </div>

        <div className="mb-5">
          <p className="eyebrow text-[10px] mb-6" style={{ letterSpacing: "0.2em" }}>Featured Engagements</p>
          <div className="space-y-4">
            {featured.map((p, i) => <ProjectCard key={p.id} project={p} featured index={i} />)}
          </div>
        </div>

        <div className="mt-16">
          <p className="eyebrow text-[10px] mb-6" style={{ letterSpacing: "0.2em" }}>More Client Work</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {other.map((p) => <ProjectCard key={p.id} project={p} />)}
          </div>
        </div>
      </div>
    </div>
  );
}
