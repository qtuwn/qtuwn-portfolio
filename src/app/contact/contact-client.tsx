"use client";

import { useState } from "react";
import {
  Mail,
  Linkedin,
  Github,
  Facebook,
  Copy,
  Check,
  ExternalLink,
} from "lucide-react";
import {
  MotionDiv,
  MotionSection,
  MotionList,
  MotionArticle,
  fadeInUp,
} from "@/components/motion/Motion";
import { useLanguage } from "@/components/i18n/LanguageProvider";

const EMAIL = "tuquoctuan201@gmail.com";

const contactLinks = [
  {
    name: "LinkedIn",
    value: "Tuấn Quốc",
    href: "https://www.linkedin.com/in/tuấn-quốc-866a63251",
    icon: Linkedin,
    color: "hover:bg-accent/10 hover:border-accent/30 hover:text-accent",
  },
  {
    name: "GitHub",
    value: "@qtuwn",
    href: "https://github.com/qtuwn",
    icon: Github,
    color: "hover:bg-muted hover:border-border",
  },
  {
    name: "Facebook",
    value: "Quốc Tuấn",
    href: "https://www.facebook.com/quoctuan.tu.98/?locale=vi_VN",
    icon: Facebook,
    color: "hover:bg-accent/10 hover:border-accent/30 hover:text-accent",
  },
];

export function ContactClient() {
  const [copied, setCopied] = useState(false);
  const { lang } = useLanguage();

  const t = {
    title: lang === "vi" ? "Liên hệ" : "Contact",
    subtitle:
      lang === "vi"
        ? "Bạn có thể liên hệ với mình qua các kênh dưới đây."
        : "Feel free to reach out through any of the channels below.",
    sendEmail: lang === "vi" ? "Gửi email" : "Send email",
    copyEmail: lang === "vi" ? "Copy email" : "Copy email",
    copied: lang === "vi" ? "Đã copy" : "Copied",
    copiedAria: lang === "vi" ? "Đã copy email" : "Email copied",
    copyAria: lang === "vi" ? "Copy email" : "Copy email",
    letsWork:
      lang === "vi"
        ? "Cùng hợp tác"
        : "Let's work together",
    letsWorkDesc:
      lang === "vi"
        ? "Mình sẵn sàng cho freelance, collaboration hoặc full-time. Cứ nhắn mình nhé."
        : "I'm open to freelance, collaborations, and full-time opportunities. Feel free to reach out!",
    github: "GitHub",
    visitProfile: lang === "vi" ? "Mở trang" : "Visit",
  } as const;

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const textArea = document.createElement("textarea");
      textArea.value = EMAIL;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }

  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <MotionSection>
          <header className="mb-12">
            <h1 className="text-4xl font-bold tracking-tight">{t.title}</h1>
            <p className="mt-4 text-lg text-muted-foreground">{t.subtitle}</p>
          </header>
        </MotionSection>

        <MotionDiv className="mb-6">
          <div className="group rounded-xl border border-border bg-card p-6 transition-all hover:shadow-lg">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-foreground/5 transition-colors group-hover:bg-foreground/10">
                <Mail className="h-6 w-6" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-medium text-lg">Email</p>
                <p className="text-muted-foreground truncate">{EMAIL}</p>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2 text-sm font-medium text-accent-foreground transition-colors hover:opacity-90"
              >
                <Mail className="h-4 w-4" />
                {t.sendEmail}
              </a>

              <button
                onClick={copyEmail}
                className={`inline-flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium transition-colors ${
                  copied
                    ? "border-green-500 bg-green-500/10 text-green-500"
                    : "border-border bg-card hover:bg-muted"
                }`}
                aria-label={copied ? t.copiedAria : t.copyAria}
              >
                {copied ? (
                  <>
                    <Check className="h-4 w-4" />
                    {t.copied}
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4" />
                    {t.copyEmail}
                  </>
                )}
              </button>
            </div>
          </div>
        </MotionDiv>

        <MotionList className="grid gap-4 sm:grid-cols-3">
          {contactLinks.map((link) => {
            const Icon = link.icon;
            return (
              <MotionArticle key={link.name} variants={fadeInUp}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex flex-col items-center gap-3 rounded-xl border border-foreground/10 p-6 text-center transition-all hover:shadow-lg hover:-translate-y-1 ${link.color}`}
                  aria-label={`${t.visitProfile} ${link.name}`}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-foreground/5 transition-colors group-hover:bg-foreground/10">
                    <Icon className="h-6 w-6" />
                  </div>

                  <div>
                    <p className="font-medium">{link.name}</p>
                    <p className="text-sm text-muted-foreground">{link.value}</p>
                  </div>

                  <ExternalLink className="h-4 w-4 text-foreground/30 group-hover:text-foreground/60 transition-colors" />
                </a>
              </MotionArticle>
            );
          })}
        </MotionList>

        <MotionSection className="mt-16">
          <div className="rounded-xl border border-border bg-card p-8 text-center">
            <h2 className="text-2xl font-bold">{t.letsWork}</h2>
            <p className="mt-4 text-muted-foreground max-w-lg mx-auto">
              {t.letsWorkDesc}
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-colors hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-ring"
              >
                <Mail className="h-4 w-4" />
                {t.sendEmail}
              </a>

              <a
                href="https://github.com/qtuwn"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-6 py-3 text-sm font-medium transition-colors hover:bg-muted focus:outline-none focus:ring-2 focus:ring-ring"
              >
                <Github className="h-4 w-4" />
                {t.github}
              </a>
            </div>
          </div>
        </MotionSection>
      </div>
    </main>
  );
}
