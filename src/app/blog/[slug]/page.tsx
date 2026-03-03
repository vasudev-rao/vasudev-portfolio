import { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogCard } from "@/components/BlogCard";
import { NewsletterCard } from "@/components/NewsletterCard";
import { getPostBySlug, getAllPosts, getAllSlugs } from "@/lib/blog";
import { format } from "date-fns";
import { Clock, Calendar, Tag, ArrowLeft } from "lucide-react";
import Link from "next/link";

interface Props { params: Promise<{ slug: string }>; }

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Not Found" };

  const url = `https://vasudevarao.com/blog/${slug}`;

  return {
    title: post.title,
    description: post.description,
    keywords: [...post.tags, "Vasudev Rao", "Data Engineering", "Blog"],
    authors: [{ name: "Vasudev Rao", url: "https://vasudevarao.com" }],
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title: post.title,
      description: post.description,
      siteName: "Vasudev Rao",
      publishedTime: post.date,
      authors: ["Vasudev Rao"],
      tags: post.tags,
      images: [{ url: "https://vasudevarao.com/og-image.png", width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      creator: "@vasudevarao",
      site: "@vasudevarao",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true },
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const allPosts = getAllPosts();
  const related = allPosts.filter((p) => p.slug !== post.slug && p.tags.some((t) => post.tags.includes(t))).slice(0, 2);

  return (
    <div className="pt-28 pb-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-14">
          {/* Article */}
          <article className="lg:col-span-2">
            <Link href="/blog" className="inline-flex items-center gap-2 text-xs font-label font-600 uppercase tracking-[0.12em] text-ink-secondary hover:text-electric transition-colors mb-10 group">
              <ArrowLeft size={13} className="group-hover:-translate-x-1 transition-transform" /> Back to Blog
            </Link>

            {/* Header */}
            <header className="mb-10 space-y-5">
              <div className="flex flex-wrap items-center gap-4">
                <span className="flex items-center gap-1.5 font-mono text-xs text-ink-muted">
                  <Calendar size={11} />{format(new Date(post.date), "MMMM dd, yyyy")}
                </span>
                <span className="flex items-center gap-1.5 font-mono text-xs text-ink-muted">
                  <Clock size={11} />{post.readingTime}
                </span>
              </div>
              <h1 className="display-text text-4xl lg:text-5xl text-ink leading-tight">{post.title}</h1>
              {post.description && <p className="text-base text-ink-secondary leading-relaxed">{post.description}</p>}
              {post.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((t) => (
                    <span key={t} className="tag flex items-center gap-1.5"><Tag size={9} />{t}</span>
                  ))}
                </div>
              )}
            </header>

            {/* JSON-LD Article Schema for Google */}
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Article",
                "headline": post.title,
                "description": post.description,
                "author": { "@type": "Person", "name": "Vasudev Rao", "url": "https://vasudevarao.com" },
                "publisher": { "@type": "Person", "name": "Vasudev Rao" },
                "datePublished": post.date,
                "dateModified": post.date,
                "url": `https://vasudevarao.com/blog/${post.slug}`,
                "keywords": post.tags.join(", "),
                "mainEntityOfPage": { "@type": "WebPage", "@id": `https://vasudevarao.com/blog/${post.slug}` },
              }) }}
            />

            {/* Divider with glow */}
            <div className="h-px mb-10" style={{ background: "linear-gradient(90deg, #4f8ef740, rgba(79,142,247,0.08), transparent)" }} />

            {/* Content */}
            <div className="prose-content" dangerouslySetInnerHTML={{ __html: renderMarkdown(post.content || "") }} />

            {/* Share */}
            <div className="mt-14 pt-8 border-t border-white/[0.05]">
              <p className="font-mono text-[10px] text-ink-muted uppercase tracking-[0.15em] mb-4">Share</p>
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://vasudevarao.com/blog/${post.slug}`)}`}
                target="_blank" rel="noopener noreferrer" className="btn-outline text-xs"
              >
                Share on Twitter / X
              </a>
            </div>

            {related.length > 0 && (
              <div className="mt-16">
                <p className="eyebrow text-[10px] mb-6" style={{ letterSpacing: "0.2em" }}>Related Articles</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {related.map((p) => <BlogCard key={p.slug} post={p} />)}
                </div>
              </div>
            )}
          </article>

          {/* Sidebar */}
          <aside className="space-y-5 lg:sticky lg:top-28 lg:self-start">
            <NewsletterCard />
            <div className="card p-6">
              <p className="eyebrow text-[10px] mb-4" style={{ letterSpacing: "0.2em" }}>Tags</p>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((t) => <span key={t} className="tag">{t}</span>)}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

function renderMarkdown(content: string): string {
  return content
    .replace(/^### (.*$)/gim, "<h3>$1</h3>")
    .replace(/^## (.*$)/gim, "<h2>$1</h2>")
    .replace(/^# (.*$)/gim, "<h1>$1</h1>")
    .replace(/\*\*(.*?)\*\*/gim, "<strong>$1</strong>")
    .replace(/\*(.*?)\*/gim, "<em>$1</em>")
    .replace(/`{3}(\w+)?\n?([\s\S]*?)`{3}/gim, "<pre><code>$2</code></pre>")
    .replace(/`(.*?)`/gim, "<code>$1</code>")
    .replace(/\[([^\]]+)\]\(([^)]+)\)/gim, '<a href="$2">$1</a>')
    .replace(/^> (.*$)/gim, "<blockquote>$1</blockquote>")
    .replace(/^- (.*$)/gim, "<li>$1</li>")
    .replace(/(<li>.*<\/li>\n?)+/gims, (m) => `<ul>${m}</ul>`)
    .replace(/\n\n(?!<)/gm, "</p><p>")
    .replace(/^(?!<)(.+)/gm, "<p>$1</p>")
    .replace(/<p><\/p>/g, "")
    .replace(/<p>(<[hbuopl])/g, "$1")
    .replace(/(<\/[hbuopl][^>]*>)<\/p>/g, "$1")
    .trim();
}
