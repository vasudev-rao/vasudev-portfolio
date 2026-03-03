import { BlogPost } from "@/types";
import Link from "next/link";
import { format } from "date-fns";
import { Clock, ArrowUpRight, Tag } from "lucide-react";

interface BlogCardProps {
  post: BlogPost;
  variant?: "default" | "compact";
}

export function BlogCard({ post, variant = "default" }: BlogCardProps) {
  if (variant === "compact") {
    return (
      <Link href={`/blog/${post.slug}`} className="group blog-row block">
        <div className="flex items-start gap-4">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-3 mb-1.5">
              <span className="font-mono text-[10px] text-ink-muted uppercase tracking-[0.12em]">
                {format(new Date(post.date), "MMM dd, yyyy")}
              </span>
              {post.tags[0] && (
                <span className="font-mono text-[10px] text-electric/60 uppercase tracking-wider">{post.tags[0]}</span>
              )}
              <span className="flex items-center gap-1 font-mono text-[10px] text-ink-muted ml-auto">
                <Clock size={9} />{post.readingTime}
              </span>
            </div>
            <h3 className="blog-row-title pr-6">{post.title}</h3>
          </div>
          <ArrowUpRight size={14} className="blog-row-arrow mt-1 flex-shrink-0" />
        </div>
      </Link>
    );
  }

  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <article className="card p-6 flex flex-col gap-5 h-full">
        <div className="flex items-center gap-3">
          <span className="font-mono text-[10px] text-ink-muted uppercase tracking-wider">
            {format(new Date(post.date), "MMM dd, yyyy")}
          </span>
          <span className="w-0.5 h-0.5 rounded-full bg-ink-muted" />
          <span className="flex items-center gap-1 font-mono text-[10px] text-ink-muted">
            <Clock size={9} />{post.readingTime}
          </span>
        </div>
        <div className="flex-1">
          <h3 className="font-display font-800 text-base text-ink group-hover:text-white transition-colors mb-2 leading-snug">
            {post.title}
          </h3>
          <p className="text-xs text-ink-secondary leading-relaxed line-clamp-2">{post.description}</p>
        </div>
        <div className="flex items-center justify-between pt-4 border-t border-white/[0.04]">
          <div className="flex flex-wrap gap-1.5">
            {post.tags.slice(0, 2).map((t) => <span key={t} className="tag text-[10px]"><Tag size={8} />{t}</span>)}
          </div>
          <ArrowUpRight size={14} className="text-ink-muted group-hover:text-electric transition-colors" />
        </div>
      </article>
    </Link>
  );
}
