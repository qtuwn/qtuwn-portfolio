"use client";

import { useLanguage } from "@/components/i18n/LanguageProvider";

export function AboutIntro() {
  const { lang } = useLanguage();

  if (lang === "vi") {
    return (
      <section className="prose-custom">
        <p className="text-lg leading-relaxed text-foreground/80">
          Xin chào! Mình là <strong>Tuan</strong> (hay <strong>qtuwn</strong>).
          Mình đam mê xây dựng sản phẩm đa nền tảng từ web, mobile đến hệ thống
          backend.
        </p>

        <p className="mt-4 text-lg leading-relaxed text-foreground/80">
          Hành trình phát triển phần mềm của mình đi qua nhiều công nghệ: xây UI
          với <strong>React</strong>/<strong>Next.js</strong>, phát triển mobile
          với <strong>Flutter</strong>, và thiết kế hệ thống chú trọng kiến trúc,
          bảo mật, CI/CD.
        </p>

        <p className="mt-4 text-lg leading-relaxed text-foreground/80">
          Mình thích học cái mới và áp dụng để giải quyết bài toán thực tế—từ
          tối ưu truy vấn, thiết kế API, đến cải thiện trải nghiệm người dùng.
        </p>
      </section>
    );
  }

  return (
    <section className="prose-custom">
      <p className="text-lg leading-relaxed text-foreground/80">
        Hi! I&apos;m <strong>Tuan</strong>, also known as <strong>qtuwn</strong>.
        I enjoy building cross-platform products—from web and mobile to backend
        systems.
      </p>

      <p className="mt-4 text-lg leading-relaxed text-foreground/80">
        My journey has taken me across various technologies: crafting UIs with{" "}
        <strong>React</strong>/<strong>Next.js</strong>, building mobile
        experiences with <strong>Flutter</strong>, and designing systems with a
        strong focus on architecture, security, and CI/CD.
      </p>

      <p className="mt-4 text-lg leading-relaxed text-foreground/80">
        I love learning new tools and applying them to real-world problems—from
        optimizing queries and designing APIs to improving user experience.
      </p>
    </section>
  );
}

export function AboutHeadings() {
  const { lang } = useLanguage();

  return {
    about: lang === "vi" ? "Giới thiệu" : "About",
    techStack: lang === "vi" ? "Công nghệ" : "Tech Stack",
    skills: lang === "vi" ? "Kỹ năng" : "Skills",
  } as const;
}

