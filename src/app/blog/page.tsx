import { getAllPosts } from "@/lib/blog";
import type { Metadata } from "next";
import { BlogListClient } from "./blog-list-client";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Read my latest blog posts about web development, programming, and technology.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return <BlogListClient posts={posts} />;
}
