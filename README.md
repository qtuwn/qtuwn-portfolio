# qtuwn Portfolio

A personal portfolio website built with Next.js 16, TypeScript, Tailwind CSS, and MDX for blogging.

## Features

- ⚡ **Next.js 16** with App Router
- 🎨 **Dark Mode** with next-themes
- 📝 **MDX Blog** with syntax highlighting
- 📱 **Responsive Design** with Tailwind CSS
- 🔍 **SEO Optimized** with metadata API
- 🚀 **Vercel Ready** for instant deployment

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
src/
├── app/              # App Router pages
│   ├── blog/         # Blog routes
│   ├── projects/     # Projects page
│   ├── about/        # About page
│   └── contact/      # Contact page
├── components/       # React components
│   └── site/         # Site-wide components (Navbar, Footer)
├── content/          # MDX content
│   └── blog/         # Blog posts (.mdx)
├── data/             # Static data
│   └── projects.ts   # Projects data
└── lib/              # Utilities
    └── blog.ts       # Blog utilities
```

## Adding a Blog Post

Create a new `.mdx` file in `src/content/blog/` with frontmatter:

```mdx
---
title: "Your Post Title"
date: "2025-01-01"
tags: ["tag1", "tag2"]
summary: "A brief summary of your post."
---

Your content here...
```

## Deploy to Vercel

1. Push your code to GitHub
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import your repository
4. Click **Deploy**

That's it! Vercel will automatically detect Next.js and deploy your site.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/qtuwn/qtuwn-portfolio)

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [MDX](https://mdxjs.com/)
