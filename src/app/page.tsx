import { projects } from "@/data/projects";
import { getAllPosts } from "@/lib/blog";
import { HomeClient } from "./home-client";

export default function Home() {
  const featuredProjects = projects.slice(0, 3);
  const latestPosts = getAllPosts().slice(0, 2);

  return (
    <HomeClient
      featuredProjects={featuredProjects}
      latestPosts={latestPosts}
    />
  );
}
