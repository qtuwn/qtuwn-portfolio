"use client";

import { ExternalLink, Github, Sparkles } from "lucide-react";
import {
  MotionDiv,
  MotionList,
  MotionArticle,
  fadeInUp,
} from "@/components/motion/Motion";
import type { Project } from "@/data/projects";

interface ProjectsClientProps {
  projects: Project[];
}

export function ProjectsClient({ projects }: ProjectsClientProps) {
  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <MotionDiv>
          <header className="mb-12">
            <h1 className="text-4xl font-bold tracking-tight">Projects</h1>
            <p className="mt-4 text-lg text-foreground/70">
              A collection of projects I&apos;ve built, from mobile apps to web
              platforms.
            </p>
          </header>
        </MotionDiv>

        <MotionList className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <MotionArticle
              key={project.title}
              variants={fadeInUp}
              className="group relative rounded-xl border border-foreground/10 p-6 transition-all hover:border-foreground/20 hover:shadow-xl hover:-translate-y-1 bg-gradient-to-br from-transparent to-foreground/[0.01] overflow-hidden"
            >
              {/* Featured badge for first project */}
              {index === 0 && (
                <div className="absolute top-4 right-4 flex items-center gap-1 rounded-full bg-blue-500/10 px-2.5 py-1 text-xs font-medium text-blue-500">
                  <Sparkles className="h-3 w-3" />
                  Featured
                </div>
              )}

              <h2 className="text-xl font-semibold group-hover:text-blue-500 transition-colors pr-20">
                {project.title}
              </h2>
              <p className="mt-2 text-foreground/70 text-sm leading-relaxed">
                {project.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-foreground/5 px-3 py-1 text-xs font-medium text-foreground/70 transition-colors group-hover:bg-foreground/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {project.highlights && (
                <ul className="mt-4 space-y-1.5">
                  {project.highlights.map((highlight, i) => (
                    <li
                      key={i}
                      className="text-sm text-foreground/60 flex items-start gap-2"
                    >
                      <span className="text-blue-500 mt-0.5 shrink-0">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              )}

              <div className="mt-6 flex gap-3">
                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-foreground/10 bg-foreground/5 px-4 py-2 text-sm font-medium transition-all hover:bg-foreground/10 hover:border-foreground/20 focus:outline-none focus:ring-2 focus:ring-foreground/20"
                    aria-label={`View ${project.title} source code on GitHub`}
                  >
                    <Github className="h-4 w-4" />
                    Source
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-blue-500 px-4 py-2 text-sm font-medium text-white transition-all hover:bg-blue-600 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                    aria-label={`View ${project.title} live demo`}
                  >
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </a>
                )}
              </div>

              {/* Subtle gradient hover effect */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 transition-opacity group-hover:opacity-100" />
            </MotionArticle>
          ))}
        </MotionList>
      </div>
    </main>
  );
}
