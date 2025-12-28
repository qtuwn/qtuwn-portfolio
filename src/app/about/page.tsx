import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn more about Tuan (qtuwn) - a developer passionate about Web, Mobile, .NET, and DevOps.",
};

const techStack = {
  Frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS"],
  Backend: ["Node.js", "Express", ".NET", "PHP", "REST APIs"],
  Mobile: ["Flutter", "Dart", "React Native"],
  Database: ["PostgreSQL", "MySQL", "MongoDB", "SQL Server", "Firebase"],
  "DevOps & Tools": [
    "Git",
    "Docker",
    "Vercel",
    "GitHub Actions",
    "VS Code",
    "Linux",
  ],
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <header className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight">About Me</h1>
        </header>

        <section className="prose-custom">
          <p className="text-lg leading-relaxed text-foreground/80">
            Hi! I&apos;m <strong>Tuan</strong>, also known as{" "}
            <strong>qtuwn</strong> online. I&apos;m a developer with a passion
            for building applications across multiple platforms—from web and
            mobile to desktop.
          </p>

          <p className="mt-4 text-lg leading-relaxed text-foreground/80">
            My journey in software development has led me through various
            technologies: crafting responsive web applications with{" "}
            <strong>React</strong> and <strong>Next.js</strong>, building mobile
            experiences with <strong>Flutter</strong>, and developing robust
            desktop applications with <strong>.NET</strong>.
          </p>

          <p className="mt-4 text-lg leading-relaxed text-foreground/80">
            I enjoy the challenge of learning new technologies and applying them
            to solve real-world problems. Whether it&apos;s setting up CI/CD
            pipelines, optimizing database queries, or designing intuitive user
            interfaces, I&apos;m always eager to expand my skill set.
          </p>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-semibold mb-8">Tech Stack</h2>

          <div className="grid gap-6 sm:grid-cols-2">
            {Object.entries(techStack).map(([category, technologies]) => (
              <div
                key={category}
                className="rounded-xl border border-foreground/10 p-5"
              >
                <h3 className="font-semibold text-foreground/90 mb-3">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-foreground/5 px-3 py-1 text-sm text-foreground/70"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
