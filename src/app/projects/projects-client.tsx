"use client";

import { ExternalLink, Github, Sparkles } from "lucide-react";
import {
  MotionDiv,
  MotionList,
  MotionArticle,
  fadeInUp,
} from "@/components/motion/Motion";
import type { Project } from "@/data/projects";
import Link from "next/link";
import Image from "next/image";
import { projectImages } from "@/lib/project-images";
import { useLanguage } from "@/components/i18n/LanguageProvider";

interface ProjectsClientProps {
  projects: Project[];
}

export function ProjectsClient({ projects }: ProjectsClientProps) {
  const { lang } = useLanguage();

  const t = {
    title: lang === "vi" ? "Dự án" : "Projects",
    subtitle:
      lang === "vi"
        ? "Tổng hợp các dự án mình đã xây dựng, từ mobile app đến hệ thống web."
        : "A curated list of projects I've built, from mobile apps to web systems.",
    featured: lang === "vi" ? "Nổi bật" : "Featured",
    source: lang === "vi" ? "Mã nguồn" : "Source",
    demo: lang === "vi" ? "Demo" : "Demo",
    caseStudy: lang === "vi" ? "Case study" : "Case study",
    ariaSource: lang === "vi" ? "Xem mã nguồn" : "View source code",
    ariaDemo: lang === "vi" ? "Xem demo" : "View demo",
    ariaCaseStudy: lang === "vi" ? "Xem case study" : "View case study",
  } as const;

  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <MotionDiv>
          <header className="mb-12">
            <h1 className="text-4xl font-bold tracking-tight">{t.title}</h1>
            <p className="mt-4 text-lg text-muted-foreground">{t.subtitle}</p>
          </header>
        </MotionDiv>

        <MotionList className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <MotionArticle
              key={project.title}
              variants={fadeInUp}
              className="group relative rounded-xl border border-border bg-card p-6 transition-all hover:shadow-lg hover:-translate-y-1 overflow-hidden"
            >
              {index === 0 && (
                <div className="absolute top-4 right-4 flex items-center gap-1 rounded-full bg-accent/10 px-2.5 py-1 text-xs font-medium text-accent">
                  <Sparkles className="h-3 w-3" />
                  {t.featured}
                </div>
              )}

              <h2 className="text-xl font-semibold group-hover:text-accent transition-colors pr-20">
                {project.title}
              </h2>

              {project.screenshots?.[0] && (
                <div className="mt-4 overflow-hidden rounded-lg border border-border bg-muted">
                  <Image
                    src={projectImages[project.screenshots[0].key]}
                    alt={project.screenshots[0].alt}
                    className="h-72 w-full object-cover object-top"
                    placeholder="blur"
                  />
                </div>
              )}

              {project.screenshots && project.screenshots.length > 1 && (
                <div className="mt-3 flex gap-2 overflow-x-auto">
                  {project.screenshots.slice(1, 4).map((s) => (
                    <div
                      key={s.key}
                      className="shrink-0 overflow-hidden rounded-md border border-border bg-muted"
                    >
                      <Image
                        src={projectImages[s.key]}
                        alt={s.alt}
                        className="h-16 w-28 object-cover object-top"
                        placeholder="blur"
                      />
                    </div>
                  ))}
                </div>
              )}

              <div className="mt-2 space-y-1">
                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                  {lang === "vi" ? project.descriptionVi : project.descriptionEn}
                </p>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.slice(0, 8).map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground transition-colors group-hover:text-foreground"
                  >
                    {tech}
                  </span>
                ))}
                {project.tech.length > 8 && (
                  <span className="rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
                    +{project.tech.length - 8}
                  </span>
                )}
              </div>

              {(project.highlightsVi || project.highlightsEn) && (
                <ul className="mt-4 space-y-1.5">
                  {(lang === "vi"
                    ? project.highlightsVi ?? []
                    : project.highlightsEn ?? []
                  )
                    .slice(0, 3)
                    .map((highlight, i) => (
                      <li
                        key={i}
                        className="text-sm text-muted-foreground flex items-start gap-2"
                      >
                        <span className="text-accent mt-0.5 shrink-0">•</span>
                        <span className="line-clamp-2">{highlight}</span>
                      </li>
                    ))}
                </ul>
              )}

              <div className="mt-6 flex flex-wrap gap-3">
                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-border bg-muted px-4 py-2 text-sm font-medium transition-colors hover:bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                    aria-label={`${t.ariaSource} ${project.title} (GitHub)`}
                  >
                    <Github className="h-4 w-4" />
                    {t.source}
                  </a>
                )}
                {(project.storeUrl || project.demoUrl || project.videoUrl) && (
                  <a
                    href={project.storeUrl ?? project.demoUrl ?? project.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2 text-sm font-medium text-accent-foreground transition-colors hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-ring"
                    aria-label={`${t.ariaDemo} ${project.title}`}
                  >
                    <ExternalLink className="h-4 w-4" />
                    {t.demo}
                  </a>
                )}
                {project.caseStudyUrl && (
                  <Link
                    href={project.caseStudyUrl}
                    className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium transition-colors hover:bg-muted focus:outline-none focus:ring-2 focus:ring-ring"
                    aria-label={`${t.ariaCaseStudy} ${project.title}`}
                  >
                    <Sparkles className="h-4 w-4" />
                    {t.caseStudy}
                  </Link>
                )}
              </div>

              <div className="pointer-events-none absolute inset-0 -z-10 opacity-0 transition-opacity group-hover:opacity-100 ring-1 ring-inset ring-accent/10" />
            </MotionArticle>
          ))}
        </MotionList>
      </div>
    </main>
  );
}
