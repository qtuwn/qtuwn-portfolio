import fs from "fs";
import path from "path";
import matter from "gray-matter";

const BLOG_DIR = path.join(process.cwd(), "src/content/blog");

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  summary: string;
  content: string;
}

export interface BlogPostMeta {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  summary: string;
}

function getMDXFiles(): string[] {
  if (!fs.existsSync(BLOG_DIR)) {
    return [];
  }
  return fs.readdirSync(BLOG_DIR).filter((file) => file.endsWith(".mdx"));
}

export function getAllPosts(): BlogPostMeta[] {
  const files = getMDXFiles();

  const posts = files.map((file) => {
    const slug = file.replace(/\.mdx$/, "");
    const filePath = path.join(BLOG_DIR, file);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(fileContent);

    return {
      slug,
      title: data.title || "Untitled",
      date: data.date || "",
      tags: data.tags || [],
      summary: data.summary || "",
    };
  });

  // Sort by date (newest first)
  return posts.sort((a, b) => {
    if (!a.date || !b.date) return 0;
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
}

export function getPostBySlug(slug: string): BlogPost | null {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  return {
    slug,
    title: data.title || "Untitled",
    date: data.date || "",
    tags: data.tags || [],
    summary: data.summary || "",
    content,
  };
}

export function getAllPostSlugs(): string[] {
  const files = getMDXFiles();
  return files.map((file) => file.replace(/\.mdx$/, ""));
}
