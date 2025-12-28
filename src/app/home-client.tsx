"use client";

import Link from "next/link";
import { ArrowRight, Github, Mail } from "lucide-react";
import {
  MotionDiv,
  MotionSection,
  MotionList,
  MotionArticle,
  fadeInUp,
} from "@/components/motion/Motion";
import type { Project } from "@/data/projects";
import type { BlogPostMeta } from "@/lib/blog";

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
  return (
    <main className="min-h-screen">
      {/* Hero Section with subtle animated background */}
      <MotionSection className="relative overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5" />
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="mx-auto max-w-5xl px-6 py-24 sm:py-32">
          <MotionDiv className="max-w-2xl">
            <p className="text-sm font-medium text-blue-500 mb-4">Welcome to my portfolio</p>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                Tuan (qtuwn)
              </span>
            </h1>
            <p className="mt-2 text-2xl font-semibold text-foreground/80 sm:text-3xl">
              Web &amp; Mobile Developer
            </p>
            <p className="mt-6 text-lg leading-8 text-foreground/70">
              Building modern, scalable applications with{" "}
              <span className="font-medium text-foreground">React</span>,{" "}
              <span className="font-medium text-foreground">Next.js</span>,{" "}
              <span className="font-medium text-foreground">Flutter</span>,{" "}
              <span className="font-medium text-foreground">.NET</span>, and DevOps best practices.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 rounded-lg bg-foreground px-6 py-3 text-sm font-medium text-background transition-all hover:bg-foreground/90 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-foreground/50 focus:ring-offset-2"
              >
                View Projects
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg border border-foreground/20 px-6 py-3 text-sm font-medium transition-all hover:bg-foreground/5 hover:border-foreground/40 focus:outline-none focus:ring-2 focus:ring-foreground/50 focus:ring-offset-2"
              >
                <Mail className="h-4 w-4" />
                Contact Me
              </Link>
            </div>
          </MotionDiv>
        </div>
      </MotionSection>

      {/* Featured Projects */}
      <section className="border-t border-foreground/10 bg-foreground/[0.02]">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <MotionDiv className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold">Featured Projects</h2>
            <Link
              href="/projects"
              className="text-sm text-foreground/60 hover:text-foreground transition-colors inline-flex items-center gap-1"
            >
              View all
              <ArrowRight className="h-4 w-4" />
            </Link>
          </MotionDiv>

          <MotionList className="grid gap-6 md:grid-cols-3">
            {featuredProjects.map((project) => (
              <MotionArticle
                key={project.title}
                variants={fadeInUp}
                className="group rounded-xl border border-foreground/10 bg-background p-5 transition-all hover:border-foreground/20 hover:shadow-lg hover:-translate-y-1"
              >
                <h3 className="font-semibold group-hover:text-blue-500 transition-colors">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm text-foreground/60 line-clamp-2">
                  {project.description}
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {project.tech.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-foreground/5 px-2 py-0.5 text-xs text-foreground/60"
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
                    className="mt-4 inline-flex items-center gap-1.5 text-sm text-foreground/60 hover:text-foreground transition-colors"
                    aria-label={`View ${project.title} source code on GitHub`}
                  >
                    <Github className="h-4 w-4" />
                    View Code
                  </a>
                )}
              </MotionArticle>
            ))}
          </MotionList>
        </div>
      </section>

      {/* Latest Posts */}
      <section className="border-t border-foreground/10">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <MotionDiv className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold">Latest Posts</h2>
            <Link
              href="/blog"
              className="text-sm text-foreground/60 hover:text-foreground transition-colors inline-flex items-center gap-1"
            >
              View all
              <ArrowRight className="h-4 w-4" />
            </Link>
          </MotionDiv>

          {latestPosts.length === 0 ? (
            <p className="text-foreground/60">No posts yet. Check back soon!</p>
          ) : (
            <MotionList className="grid gap-6 md:grid-cols-2">
              {latestPosts.map((post) => (
                <MotionArticle key={post.slug} variants={fadeInUp}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group block rounded-xl border border-foreground/10 p-6 transition-all hover:border-foreground/20 hover:shadow-lg hover:-translate-y-1"
                  >
                    <time className="text-sm text-foreground/50">
                      {formatDate(post.date)}
                    </time>
                    <h3 className="mt-2 font-semibold group-hover:text-blue-500 transition-colors">
                      {post.title}
                    </h3>
                    <p className="mt-2 text-sm text-foreground/60 line-clamp-2">
                      {post.summary}
                    </p>
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
