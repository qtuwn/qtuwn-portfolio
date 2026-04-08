"use client";

import Link from "next/link";
import { Rss } from "lucide-react";
import {
  MotionDiv,
  MotionList,
  MotionArticle,
  fadeInUp,
} from "@/components/motion/Motion";
import type { BlogPostMeta } from "@/lib/blog";
import { useLanguage } from "@/components/i18n/LanguageProvider";

interface BlogListClientProps {
  posts: BlogPostMeta[];
}

function formatDate(dateString: string): string {
  if (!dateString) return "";
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function BlogListClient({ posts }: BlogListClientProps) {
  const { lang } = useLanguage();

  const t = {
    subtitle:
      lang === "vi"
        ? "Góc chia sẻ về web development, lập trình và những thứ mình đang học."
        : "Thoughts on web development, programming, and more.",
    rss: lang === "vi" ? "RSS" : "RSS",
    rssTitle: lang === "vi" ? "RSS Feed" : "RSS Feed",
    emptyTitle:
      lang === "vi" ? "Chưa có bài viết. Mình sẽ cập nhật sớm!" : "No posts yet. Check back soon!",
    emptyDesc:
      lang === "vi"
        ? "Mình đang chuẩn bị một số nội dung hay."
        : "I'm working on some exciting content.",
    backHome: lang === "vi" ? "← Về trang chủ" : "← Back to Home",
  } as const;

  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <MotionDiv>
          <header className="mb-12">
            <div className="flex items-center justify-between">
              <h1 className="text-4xl font-bold tracking-tight text-foreground">
                Blog
              </h1>
              <a
                href="/rss.xml"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-foreground/60 hover:text-foreground transition-colors"
                title={t.rssTitle}
              >
                <Rss className="h-4 w-4" />
                {t.rss}
              </a>
            </div>
            <p className="mt-4 text-lg text-foreground/70">
              {t.subtitle}
            </p>
          </header>
        </MotionDiv>

        {posts.length === 0 ? (
          <MotionDiv className="text-center py-12">
            <p className="text-foreground/60 text-lg">
              {t.emptyTitle}
            </p>
            <p className="mt-2 text-foreground/40 text-sm">
              {t.emptyDesc}
            </p>
          </MotionDiv>
        ) : (
          <MotionList className="space-y-10">
            {posts.map((post) => (
              <MotionArticle
                key={post.slug}
                variants={fadeInUp}
                className="group border-b border-foreground/10 pb-10 last:border-0"
              >
                <Link href={`/blog/${post.slug}`} className="block">
                  <time className="text-sm text-foreground/50">
                    {formatDate(post.date)}
                  </time>
                  <h2 className="mt-2 text-2xl font-semibold text-foreground group-hover:text-accent transition-colors">
                    {post.title}
                  </h2>
                  <p className="mt-3 text-foreground/70 leading-relaxed">
                    {post.summary}
                  </p>
                  {post.tags.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-foreground/5 px-3 py-1 text-xs text-foreground/60"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </Link>
              </MotionArticle>
            ))}
          </MotionList>
        )}

        <MotionDiv className="mt-12 pt-8 border-t border-foreground/10">
          <Link
            href="/"
            className="text-foreground/60 hover:text-foreground transition-colors"
          >
            {t.backHome}
          </Link>
        </MotionDiv>
      </div>
    </main>
  );
}
