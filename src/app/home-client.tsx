"use client";

import Link from "next/link";
import { ArrowRight, Coffee, Github, Mail, Terminal } from "lucide-react";
import {
  MotionDiv,
  MotionSection,
  MotionList,
  MotionArticle,
  fadeInUp,
} from "@/components/motion/Motion";
import type { Project } from "@/data/projects";
import type { BlogPostMeta } from "@/lib/blog";
import { useLanguage } from "@/components/i18n/LanguageProvider";

interface HomeClientProps {
  featuredProjects: Project[];
  latestPosts: BlogPostMeta[];
}

function formatDate(dateString: string): string {
  if (!dateString) return "";
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export function HomeClient({
  featuredProjects,
  latestPosts,
}: HomeClientProps) {
  const { lang } = useLanguage();

  const t = {
    welcome: lang === "vi" ? "Xin chào" : "Welcome",
    hiIm: lang === "vi" ? "Mình là" : "Hi, I'm",
    role: lang === "vi" ? "Indie Developer • Code & Cafe" : "Indie Developer • Code & Cafe",
    intro:
      lang === "vi"
        ? "Một thằng dev indie thích ngồi quán, viết code sạch, ship sản phẩm đều, và tối ưu trải nghiệm người dùng."
        : "An indie dev who loves coffee, clean code, shipping consistently, and crafting great UX.",
    viewProjects: lang === "vi" ? "Xem dự án" : "View projects",
    contact: lang === "vi" ? "Liên hệ" : "Contact",
    downloadCv: lang === "vi" ? "Tải CV" : "Download CV",
    featuredProjects: lang === "vi" ? "Dự án nổi bật" : "Featured Projects",
    latestPosts: lang === "vi" ? "Bài viết mới" : "Latest Posts",
    viewAll: lang === "vi" ? "Xem tất cả" : "View all",
    noPosts:
      lang === "vi"
        ? "Chưa có bài viết. Mình sẽ cập nhật sớm!"
        : "No posts yet. Check back soon!",
    viewCode: lang === "vi" ? "Xem code" : "View code",
    brewed: lang === "vi" ? "Brewed in" : "Brewed in",
    tagline:
      lang === "vi"
        ? "Build • Test • Ship"
        : "Build • Test • Ship",
  } as const;

  return (
    <main className="min-h-screen">
      <MotionSection className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-background" />

        <div className="mx-auto max-w-5xl px-6 py-24 sm:py-32">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
            <MotionDiv className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-muted-foreground">
                <Coffee className="h-4 w-4 text-accent" />
                <span>{t.brewed} HCMC</span>
                <span className="h-3 w-px bg-border" />
                <span className="font-mono text-foreground">{t.tagline}</span>
              </div>

              <h1 className="font-display mt-6 text-6xl leading-[0.95] tracking-tight sm:text-7xl">
                <span className="block">{t.hiIm}</span>
                <span className="block">
                  <span className="text-accent">Tuan</span>{" "}
                  <span className="text-muted-foreground">(qtuwn)</span>
                </span>
              </h1>

              <p className="mt-4 text-xl font-semibold text-foreground/90">
                {t.role}
              </p>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                {t.intro}
              </p>

              <div className="mt-10 flex flex-wrap gap-3">
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-colors hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  <Terminal className="h-4 w-4" />
                  {t.viewProjects}
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href="/cv_tienganh.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold transition-colors hover:bg-muted focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  {t.downloadCv}
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold transition-colors hover:bg-muted focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  <Mail className="h-4 w-4" />
                  {t.contact}
                </Link>
              </div>
            </MotionDiv>

            <MotionDiv className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs text-muted-foreground">
                    {lang === "vi" ? "Hôm nay" : "Today"}
                  </span>
                  <span className="h-3 w-px bg-border" />
                  <span className="font-mono text-xs text-muted-foreground">
                    {lang === "vi" ? "Sổ tay indie" : "Indie notebook"}
                  </span>
                </div>
                <span className="font-mono rounded-full border border-border bg-muted px-3 py-1 text-[11px] text-muted-foreground">
                  {lang === "vi" ? "COFFEE + CODE" : "COFFEE + CODE"}
                </span>
              </div>

              <div className="mt-5 space-y-3">
                <div className="rounded-xl border border-border bg-muted p-4">
                  <div className="flex items-center justify-between gap-3">
                    <p className="font-mono text-[11px] uppercase tracking-wide text-muted-foreground">
                      {lang === "vi" ? "Đang Pha" : "In progress"}
                    </p>
                    <span className="font-mono rounded-lg border border-border bg-card px-2 py-1 text-[11px] text-muted-foreground">
                      {lang === "vi" ? "v1.0" : "v1.0"}
                    </span>
                  </div>
                  <p className="mt-2 font-semibold leading-snug">
                    {lang === "vi"
                      ? "Landing page (indie dev • code & cafe)"
                      : "Landing page (indie dev • code & cafe)"}
                  </p>
                </div>

                <div className="rounded-xl border border-border bg-muted p-4">
                  <p className="font-mono text-[11px] uppercase tracking-wide text-muted-foreground">
                    {lang === "vi" ? "Stack" : "Stack"}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {["Next.js", "Tailwind", "Framer Motion", "Vercel"].map(
                      (tag) => (
                        <span
                          key={tag}
                          className="font-mono rounded-full border border-border bg-card px-2.5 py-1 text-[11px] text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ),
                    )}
                  </div>
                </div>
              </div>
            </MotionDiv>
          </div>
        </div>
      </MotionSection>

      {/* Featured Projects */}
      <section className="border-t border-border bg-muted">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <MotionDiv className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold">{t.featuredProjects}</h2>
            <Link
              href="/projects"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1"
            >
              {t.viewAll}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </MotionDiv>

          <MotionList className="grid gap-6 md:grid-cols-3">
            {featuredProjects.map((project) => (
              <MotionArticle
                key={project.title}
                variants={fadeInUp}
                className="group rounded-xl border border-border bg-card p-5 transition-all hover:shadow-lg hover:-translate-y-1"
              >
                <h3 className="font-semibold group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                  {lang === "vi" ? project.descriptionVi : project.descriptionEn}
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {project.tech.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-muted px-2 py-0.5 text-xs text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    aria-label={`View ${project.title} source code on GitHub`}
                  >
                    <Github className="h-4 w-4" />
                    {t.viewCode}
                  </a>
                )}
              </MotionArticle>
            ))}
          </MotionList>
        </div>
      </section>

      {/* Latest Posts */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <MotionDiv className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold">{t.latestPosts}</h2>
            <Link
              href="/blog"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1"
            >
              {t.viewAll}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </MotionDiv>

          {latestPosts.length === 0 ? (
            <p className="text-muted-foreground">{t.noPosts}</p>
          ) : (
            <MotionList className="grid gap-6 md:grid-cols-2">
              {latestPosts.map((post) => (
                <MotionArticle key={post.slug} variants={fadeInUp}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group flex h-full flex-col rounded-xl border border-border bg-card p-6 transition-all hover:shadow-lg hover:-translate-y-1"
                  >
                    <time className="text-sm text-muted-foreground">
                      {formatDate(post.date)}
                    </time>
                    <h3 className="mt-2 font-semibold group-hover:text-accent transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground line-clamp-3">
                      {post.summary}
                    </p>
                    <div className="mt-auto pt-4" />
                  </Link>
                </MotionArticle>
              ))}
            </MotionList>
          )}
        </div>
      </section>
    </main>
  );
}
