import { Metadata } from "next";
import { BlogCard } from "@/components/BlogCard";
import { NewsletterCard } from "@/components/NewsletterCard";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog — Vasudev Rao | Data Engineering Articles",
  description: "Technical articles on data engineering — PySpark, Kafka streaming, Delta Lake, Databricks, Snowflake, dbt, and real-time systems by Vasudev Rao.",
  keywords: ["Data Engineering Blog", "PySpark Tutorial", "Kafka Streaming", "Delta Lake Guide", "Databricks", "Snowflake", "dbt", "Vasudev Rao"],
  alternates: { canonical: "https://vasudevarao.com/blog" },
  openGraph: {
    type: "website",
    url: "https://vasudevarao.com/blog",
    title: "Data Engineering Blog — Vasudev Rao",
    description: "Technical articles on PySpark, Kafka, Delta Lake, Databricks, Snowflake, and real-time data systems.",
    siteName: "Vasudev Rao",
  },
  twitter: {
    card: "summary_large_image",
    title: "Data Engineering Blog — Vasudev Rao",
    description: "Technical articles on PySpark, Kafka, Delta Lake, and real-time data systems.",
    creator: "@vasudevarao",
  },
};

export default function BlogPage() {
  const posts = getAllPosts();
  const latest = posts.slice(0, 2);
  const rest = posts.slice(2);
  return (
    <div className="pt-28 pb-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20 items-end">
          <div className="lg:col-span-7">
            <p className="eyebrow mb-6">Writing</p>
            <h1 className="display-text text-6xl lg:text-7xl text-ink">Blog &amp;<br /><em>Articles</em></h1>
          </div>
          <div className="lg:col-span-5">
            <p className="text-ink-secondary text-base leading-relaxed">
              Thoughts on data engineering, streaming architectures, dbt patterns, and building reliable data platforms.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-10">
            {posts.length === 0 ? (
              <div className="card p-20 text-center">
                <p className="font-display text-3xl font-800 text-ink-muted mb-2">No posts yet</p>
                <p className="text-sm text-ink-muted">Articles coming soon.</p>
              </div>
            ) : (
              <>
                {latest.length > 0 && (
                  <div>
                    <p className="eyebrow text-[10px] mb-6" style={{ letterSpacing: "0.2em" }}>Latest Articles</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {latest.map((p) => <BlogCard key={p.slug} post={p} />)}
                    </div>
                  </div>
                )}
                {rest.length > 0 && (
                  <div>
                    <p className="eyebrow text-[10px] mb-6" style={{ letterSpacing: "0.2em" }}>All Articles</p>
                    <div className="card p-6 md:p-8">
                      {rest.map((p) => <BlogCard key={p.slug} post={p} variant="compact" />)}
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
          <div className="space-y-4 lg:sticky lg:top-24 self-start">
            <NewsletterCard />
            {posts.length > 0 && (
              <div className="card p-6">
                <p className="eyebrow text-[10px] mb-5" style={{ letterSpacing: "0.2em" }}>Topics</p>
                <div className="flex flex-wrap gap-2">
                  {Array.from(new Set(posts.flatMap((p) => p.tags))).map((t) => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
