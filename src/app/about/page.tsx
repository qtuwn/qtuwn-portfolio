import type { Metadata } from "next";
import { AboutIntro } from "./about-client";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn more about Tuan (qtuwn) - a developer passionate about Web, Mobile, .NET, and DevOps.",
};

const techStack = {
  Frontend: [
    "React",
    "Next.js",
    "TypeScript",
    "Vite",
    "React Router",
    "Tailwind CSS",
    "Framer Motion",
    "Accessibility (a11y)",
  ],
  Backend: [
    "Node.js",
    "Express.js",
    "PHP (MVC)",
    "Java",
    "Spring Boot",
    "Spring Security (RBAC)",
    "JWT + Refresh Token (rotate/revoke)",
    "Socket.io",
    "Joi Validation",
    "Mongoose",
    "Redis",
    "Flyway Migrations",
    "REST APIs",
  ],
  Mobile: ["Flutter", "Dart", "Riverpod"],
  Database: ["PostgreSQL", "MongoDB", "Cloud Firestore", "Redis", "MySQL"],
  "Testing & Quality": [
    "Unit Tests",
    "Integration Tests",
    "E2E Tests",
    "ESLint",
    "GitHub Actions (CI/CD)",
  ],
  "Testing Tools": [
    "Jest",
    "Supertest",
    "Spring Boot Test",
    "Postman Collection",
    "Selenium",
    "Flutter integration_test",
  ],
  "Cloud & Deploy": ["Vercel", "Docker Compose", "Firebase", "Google Play Store"],
  Security: [
    "RBAC",
    "Firebase App Check / Play Integrity",
    "Secrets (.env + CI secrets)",
    "Rate limiting",
    "CORS policy",
    "XSS awareness",
  ],
};

const skills = {
  "Tools & Code Management": [
    "Git/GitHub",
    "Docker",
    "VS Code",
    "Cursor",
    "GitHub Actions",
    "Jira",
    "Figma",
    "Gemini API",
    "OpenAI API",
    "GitHub Copilot",
  ],
  "Deployment & Integration": ["Vercel", "Socket.io", "Google OAuth", "LLM"],
  "System Design & Modeling": [
    "Use Case",
    "Class Diagram",
    "Sequence Diagram (UML)",
    "draw.io",
  ],
  "Soft Skills": [
    "Teamwork",
    "Problem-solving",
    "Fast Learner",
    "Technical Communication",
  ],
  Language: ["English: CEFR B1 (improving toward B2)"],
};

export default function AboutPage() {
  // Headings are derived in client intro to avoid duplicating language state on server.
  // Default server render keeps stable markup; labels below are bilingual.

  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <header className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight">Giới thiệu / About</h1>
        </header>

        <AboutIntro />

        <section className="mt-16">
          <h2 className="text-2xl font-semibold mb-8">
            Công nghệ / Tech Stack
          </h2>

          <div className="grid gap-6 sm:grid-cols-2">
            {Object.entries(techStack).map(([category, technologies]) => (
              <div
                key={category}
                className="rounded-xl border border-border bg-card p-5"
              >
                <h3 className="font-semibold text-foreground mb-3">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-muted px-3 py-1 text-sm text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-semibold mb-8">Kỹ năng / Skills</h2>

          <div className="grid gap-6 sm:grid-cols-2">
            {Object.entries(skills).map(([category, items]) => (
              <div
                key={category}
                className="rounded-xl border border-border bg-card p-5"
              >
                <h3 className="font-semibold text-foreground mb-3">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-muted px-3 py-1 text-sm text-muted-foreground"
                    >
                      {item}
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
