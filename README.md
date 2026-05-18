# Vasudevarao Portfolio — Setup Guide

## Quick Start

```bash
npm install
npm run dev
```

## Folder Map

```
app/                    → Next.js 14 App Router pages
components/
  layout/               → Navbar.tsx, Footer.tsx
  ui/                   → Button, Section, MagneticButton, CursorGlow, Parallax, Reveal
  features/
    projects/           → ProjectCard.tsx
    blog/               → BlogCard.tsx
    experience/         → ExperienceTimeline.tsx
    tutorials/          → (add TutorialCard here when needed)
lib/
  data/                 → projects.ts, experience.ts, techstack.ts, blog.ts, tutorials.ts
  utils/                → cn.ts, formatDate.ts
types/                  → project.ts, experience.ts, blog.ts, techstack.ts, tutorial.ts
content/
  blog/                 → *.mdx blog posts
  tutorials/
    pdfs/               → PDF docs (referenced by tutorials.ts pdf.url)
public/
  images/               → profile.png, og-image.png
  pdfs/                 → Vasudev_Rao_Resume.pdf
```

## Adding a Blog Post

Create `content/blog/your-post-slug.mdx`:

```mdx
---
title: "Your Post Title"
date: "2025-01-15"
excerpt: "Short description shown on blog list."
tags: ["Spark", "Delta Lake"]
readTime: "8 min read"
---

Your content here...
```

## Adding a Tutorial PDF

1. Drop the PDF into `public/tutorials/pdfs/your-file.pdf`
2. In `lib/data/tutorials.ts`, uncomment the `pdf` field on the tutorial:

```ts
pdf: {
  url: '/tutorials/pdfs/your-file.pdf',
  label: 'Download Cheat Sheet',
  size: '2.4 MB',
}
```

## Adding AI Tutorials

In `lib/data/tutorials.ts`, uncomment the AI & ML section at the bottom and fill in content.

## Required packages

```bash
npm install gray-matter clsx tailwind-merge lucide-react
```
