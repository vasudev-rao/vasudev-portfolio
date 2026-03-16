# Vasudev — AI/ML Engineer Portfolio

A production-ready personal portfolio and blog website built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**, inspired by the Developer X Webflow template.

---

## ✨ Features

- 🌑 **Dark theme** with glass-morphism effects
- ⚡ **Next.js 14** App Router with full TypeScript
- 📝 **MDX blog system** with gray-matter + reading-time
- 🎨 **Tailwind CSS** with custom design tokens
- 🔍 **SEO optimized** with metadata API
- 📱 **Fully responsive** layout
- 🎞️ **Smooth animations** and hover effects
- 📧 **Newsletter signup** and contact form

---

## 📁 File Structure

```
portfolio/
├── content/
│   └── blog/                    # MDX blog posts
│       ├── building-production-rag-systems.mdx
│       ├── fine-tuning-llms-dpo-vs-rlhf.mdx
│       └── llm-inference-optimization.mdx
│
├── src/
│   ├── app/
│   │   ├── layout.tsx           # Root layout (Navbar + Footer)
│   │   ├── globals.css          # Global styles + Tailwind
│   │   ├── page.tsx             # Home page
│   │   ├── not-found.tsx        # 404 page
│   │   ├── about/page.tsx
│   │   ├── projects/page.tsx
│   │   ├── blog/
│   │   │   ├── page.tsx         # Blog list
│   │   │   └── [slug]/page.tsx  # Blog post detail
│   │   └── contact/page.tsx
│   │
│   ├── components/
│   │   ├── Navbar.tsx           # Sticky glass navbar
│   │   ├── Footer.tsx           # Footer with social links
│   │   ├── Container.tsx        # Layout wrapper
│   │   ├── ProjectCard.tsx      # Project display card
│   │   ├── BlogCard.tsx         # Blog post card
│   │   └── NewsletterCard.tsx   # Newsletter signup
│   │
│   ├── data/
│   │   ├── projects.json        # Projects data
│   │   └── skills.ts            # Skills + stats data
│   │
│   ├── lib/
│   │   ├── blog.ts              # MDX blog utilities
│   │   └── utils.ts             # cn() helper
│   │
│   └── types/
│       └── index.ts             # TypeScript types
│
├── next.config.mjs
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18.17+
- npm, pnpm, or yarn

### Installation

1. **Create the project directory and copy all files**

2. **Install dependencies**
```bash
npm install
```

3. **Run the development server**
```bash
npm run dev
```

4. **Open** [http://localhost:3000](http://localhost:3000)

---

## ✍️ Adding Blog Posts

Create a new `.mdx` file in `/content/blog/`:

```mdx
---
title: "Your Post Title"
description: "A short description for SEO and previews."
date: "2024-08-01"
tags: ["LLMs", "Python", "Production"]
---

Your markdown content here...

## Section Heading

Paragraph text with **bold** and *italic* formatting.

\`\`\`python
# Code blocks are supported
model = load_model("mistral-7b")
\`\`\`
```

The filename (without `.mdx`) becomes the URL slug:
- `my-first-post.mdx` → `/blog/my-first-post`

### Supported Frontmatter

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `title` | string | ✅ | Post title |
| `description` | string | ✅ | Meta description |
| `date` | string | ✅ | ISO date `YYYY-MM-DD` |
| `tags` | string[] | ✅ | Array of topic tags |

Reading time is **automatically calculated** from the content length.

---

## 🛠 Customization

### Personal Info
Edit these files with your own information:

| File | What to change |
|------|----------------|
| `src/app/page.tsx` | Hero text, social links |
| `src/app/about/page.tsx` | Bio, timeline, location |
| `src/data/projects.json` | Your projects |
| `src/data/skills.ts` | Your tech stack + stats |
| `src/components/Footer.tsx` | Social links |
| `src/app/layout.tsx` | SEO metadata |

### Profile Photo
Replace the Unsplash URL in `src/app/page.tsx` and `src/app/about/page.tsx`:
```tsx
// Replace with your own image
src="/profile.jpg"  // Add your image to /public/profile.jpg
```

### Colors
Edit `tailwind.config.ts` to change the accent color:
```ts
accent: {
  DEFAULT: "#2563eb",  // Change to your preferred color
  light: "#3b82f6",
  glow: "rgba(37, 99, 235, 0.15)",
},
```

### Projects
Edit `src/data/projects.json`:
```json
{
  "id": "unique-id",
  "title": "Project Name",
  "description": "Short description",
  "longDescription": "Longer description for featured view",
  "tags": ["Python", "Next.js"],
  "github": "https://github.com/you/repo",
  "demo": "https://yourdemo.com",
  "image": "https://your-image-url.com/img.jpg",
  "featured": true,
  "year": 2024
}
```

---

## 📦 Tech Stack

| Package | Purpose |
|---------|---------|
| `next@14` | Framework |
| `typescript` | Type safety |
| `tailwindcss` | Styling |
| `gray-matter` | MDX frontmatter parsing |
| `reading-time` | Auto reading time calculation |
| `date-fns` | Date formatting |
| `lucide-react` | Icons |
| `@tailwindcss/typography` | Prose styling |

---

## 🚀 Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### Environment Variables
No environment variables required for the base setup.

---

## 📄 Pages Overview

| Route | Description |
|-------|-------------|
| `/` | Hero, stats, about preview, featured projects, blog preview |
| `/about` | Full bio, skills with progress bars, timeline |
| `/projects` | All projects (featured + grid) |
| `/blog` | Blog list with newsletter sidebar |
| `/blog/[slug]` | Individual blog post with related articles |
| `/contact` | Contact form + info |

---

Built with ❤️ using Next.js 14 + Tailwind CSS
