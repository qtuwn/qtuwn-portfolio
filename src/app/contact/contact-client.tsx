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

const EMAIL = "tuquoctuan201@gmail.com";

const contactLinks = [
  {
    name: "LinkedIn",
    value: "Tuấn Quốc",
    href: "https://www.linkedin.com/in/tuấn-quốc-866a63251",
    icon: Linkedin,
    color: "hover:bg-blue-500/10 hover:border-blue-500/30 hover:text-blue-500",
  },
  {
    name: "GitHub",
    value: "@qtuwn",
    href: "https://github.com/qtuwn",
    icon: Github,
    color: "hover:bg-gray-500/10 hover:border-gray-500/30",
  },
  {
    name: "Facebook",
    value: "Quốc Tuấn",
    href: "https://www.facebook.com/quoctuan.tu.98/?locale=vi_VN",
    icon: Facebook,
    color:
      "hover:bg-blue-600/10 hover:border-blue-600/30 hover:text-blue-600",
  },
];

export function ContactClient() {
  const [copied, setCopied] = useState(false);

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
            <h1 className="text-4xl font-bold tracking-tight">Get in Touch</h1>
            <p className="mt-4 text-lg text-foreground/70">
              I&apos;d love to hear from you! Feel free to reach out through any
              of the channels below.
            </p>
          </header>
        </MotionSection>

        <MotionDiv className="mb-6">
          <div className="group rounded-xl border border-foreground/10 p-6 transition-all hover:border-foreground/20 hover:shadow-lg bg-gradient-to-br from-blue-500/5 to-purple-500/5">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-foreground/5 transition-colors group-hover:bg-foreground/10">
                <Mail className="h-6 w-6" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-medium text-lg">Email</p>
                <p className="text-foreground/60 truncate">{EMAIL}</p>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex items-center gap-2 rounded-lg bg-foreground px-4 py-2 text-sm font-medium text-background transition-all hover:bg-foreground/90 hover:scale-105"
              >
                <Mail className="h-4 w-4" />
                Send Email
              </a>

              <button
                onClick={copyEmail}
                className={`inline-flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium transition-all hover:scale-105 ${
                  copied
                    ? "border-green-500 bg-green-500/10 text-green-500"
                    : "border-foreground/20 hover:bg-foreground/5"
                }`}
                aria-label={copied ? "Email copied!" : "Copy email to clipboard"}
              >
                {copied ? (
                  <>
                    <Check className="h-4 w-4" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4" />
                    Copy Email
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
                  aria-label={`Visit ${link.name} profile`}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-foreground/5 transition-colors group-hover:bg-foreground/10">
                    <Icon className="h-6 w-6" />
                  </div>

                  <div>
                    <p className="font-medium">{link.name}</p>
                    <p className="text-sm text-foreground/60">{link.value}</p>
                  </div>

                  <ExternalLink className="h-4 w-4 text-foreground/30 group-hover:text-foreground/60 transition-colors" />
                </a>
              </MotionArticle>
            );
          })}
        </MotionList>

        <MotionSection className="mt-16">
          <div className="rounded-xl border border-foreground/10 p-8 text-center bg-gradient-to-br from-foreground/[0.02] to-transparent">
            <h2 className="text-2xl font-bold">Let&apos;s Work Together</h2>
            <p className="mt-4 text-foreground/70 max-w-lg mx-auto">
              I&apos;m open to freelance projects, collaborations, and full-time
              opportunities. Don&apos;t hesitate to reach out!
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex items-center gap-2 rounded-lg bg-foreground px-6 py-3 text-sm font-medium text-background transition-all hover:bg-foreground/90 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-foreground/50 focus:ring-offset-2"
              >
                <Mail className="h-4 w-4" />
                Send me an email
              </a>

              <a
                href="https://github.com/qtuwn"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-foreground/20 px-6 py-3 text-sm font-medium transition-all hover:bg-foreground/5 hover:border-foreground/40 focus:outline-none focus:ring-2 focus:ring-foreground/50 focus:ring-offset-2"
              >
                <Github className="h-4 w-4" />
                Check my GitHub
              </a>
            </div>
          </div>
        </MotionSection>
      </div>
    </main>
  );
}
