import { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";

const BASE = "https://vasudevarao.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();

  const staticPages = [
    { url: BASE,               lastModified: new Date(), changeFrequency: "monthly" as const, priority: 1.0 },
    { url: `${BASE}/about`,    lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${BASE}/projects`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${BASE}/blog`,     lastModified: new Date(), changeFrequency: "weekly"  as const, priority: 0.9 },
    { url: `${BASE}/contact`,  lastModified: new Date(), changeFrequency: "yearly"  as const, priority: 0.6 },
  ];

  const blogPages = posts.map((post) => ({
    url: `${BASE}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...blogPages];
}
