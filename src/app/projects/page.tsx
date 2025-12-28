import { projects } from "@/data/projects";
import type { Metadata } from "next";
import { ProjectsClient } from "./projects-client";



export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore my portfolio of web, mobile, and desktop applications built with modern technologies.",
};

export default function ProjectsPage() {
  return <ProjectsClient projects={projects} />;
}
