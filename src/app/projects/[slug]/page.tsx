import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { projects } from "@/data/projects";
import Image from "next/image";
import { projectImages } from "@/lib/project-images";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Case study" };

  return {
    title: `${project.title} — Case study`,
    description: project.descriptionEn,
  };
}

export default async function ProjectCaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <header className="mb-10">
          <p className="text-sm font-medium text-accent">Case study</p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight">
            {project.title}
          </h1>
          <div className="mt-4 space-y-2">
            <p className="text-muted-foreground">{project.descriptionVi}</p>
            <p className="text-muted-foreground">{project.descriptionEn}</p>
          </div>
        </header>

        <section className="rounded-xl border border-border bg-card p-6">
          <h2 className="text-xl font-semibold">Links</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-muted px-4 py-2 text-sm font-medium transition-colors hover:bg-background focus:outline-none focus:ring-2 focus:ring-ring"
              >
                GitHub
              </a>
            )}
            {project.storeUrl && (
              <a
                href={project.storeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2 text-sm font-medium text-accent-foreground transition-colors hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-ring"
              >
                Google Play
              </a>
            )}
            {project.videoUrl && (
              <a
                href={project.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium transition-colors hover:bg-muted focus:outline-none focus:ring-2 focus:ring-ring"
              >
                Video demo
              </a>
            )}
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium transition-colors hover:bg-muted focus:outline-none focus:ring-2 focus:ring-ring"
              >
                Demo
              </a>
            )}
          </div>
        </section>

        <section className="mt-6 grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-border bg-card p-6">
            <h2 className="text-xl font-semibold">Highlights (VI)</h2>
            <ul className="mt-4 space-y-2">
              {(project.highlightsVi ?? []).map((h) => (
                <li key={h} className="text-muted-foreground flex gap-2">
                  <span className="text-accent">•</span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-border bg-card p-6">
            <h2 className="text-xl font-semibold">Highlights (EN)</h2>
            <ul className="mt-4 space-y-2">
              {(project.highlightsEn ?? []).map((h) => (
                <li key={h} className="text-muted-foreground flex gap-2">
                  <span className="text-accent">•</span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mt-6 rounded-xl border border-border bg-card p-6">
          <h2 className="text-xl font-semibold">Tech stack</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground"
              >
                {t}
              </span>
            ))}
          </div>
        </section>

        {project.screenshots && project.screenshots.length > 0 && (
          <section className="mt-6 rounded-xl border border-border bg-card p-6">
            <h2 className="text-xl font-semibold">Screenshots</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {project.screenshots.map((s) => (
                <figure
                  key={s.key}
                  className="rounded-lg border border-border overflow-hidden bg-muted"
                >
                  <Image
                    src={projectImages[s.key]}
                    alt={s.alt}
                    className="h-auto w-full"
                    placeholder="blur"
                  />
                </figure>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}

