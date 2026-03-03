import { Metadata } from "next";
import { Container } from "@/components/Container";
import { ProjectCard } from "@/components/ProjectCard";
import projectsData from "@/data/projects.json";
import { Project } from "@/types";

export const metadata: Metadata = {
  title: "Projects — Vasudev Rao",
  description: "Data engineering projects by Vasudev Rao — real-time streaming pipelines, Delta Lake lakehouses, Snowflake migrations, and ML feature platforms built on AWS and GCP.",
  keywords: ["Data Engineering Projects", "PySpark Projects", "Kafka Streaming", "Delta Lake", "Databricks", "Vasudev Rao"],
  alternates: { canonical: "https://vasudevarao.com/projects" },
  openGraph: {
    type: "website",
    url: "https://vasudevarao.com/projects",
    title: "Projects — Vasudev Rao | Data Engineer",
    description: "Real-time streaming pipelines, Delta Lake lakehouses, Snowflake migrations, and ML feature platforms.",
    siteName: "Vasudev Rao",
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects — Vasudev Rao | Data Engineer",
    description: "Real-time streaming pipelines, Delta Lake lakehouses, and ML feature platforms.",
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
            <p className="eyebrow mb-6">Portfolio</p>
            <h1 className="display-text text-6xl lg:text-7xl text-ink">Projects &amp;<br /><em>Work</em></h1>
          </div>
          <div className="lg:col-span-5">
            <p className="text-ink-secondary text-base leading-relaxed">
              Production-grade data engineering projects showcasing end-to-end expertise in streaming platforms, lakehouse architectures, warehouse modernization, and MLOps.
            </p>
          </div>
        </div>

        <div className="mb-5">
          <p className="eyebrow text-[10px] mb-6" style={{ letterSpacing: "0.2em" }}>Featured Projects</p>
          <div className="space-y-4">
            {featured.map((p, i) => <ProjectCard key={p.id} project={p} featured index={i} />)}
          </div>
        </div>

        <div className="mt-16">
          <p className="eyebrow text-[10px] mb-6" style={{ letterSpacing: "0.2em" }}>Other Projects</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {other.map((p) => <ProjectCard key={p.id} project={p} />)}
          </div>
        </div>
      </div>
    </div>
  );
}
