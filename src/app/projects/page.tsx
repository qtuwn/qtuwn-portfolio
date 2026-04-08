import { projects } from "@/data/projects";
import type { Metadata } from "next";
import { ProjectsClient } from "./projects-client";



export const metadata: Metadata = {
  title: "Dự án / Projects",
  description:
    "Các dự án nổi bật (song ngữ VI/EN) về web, mobile, và hệ thống backend.",
};

export default function ProjectsPage() {
  return <ProjectsClient projects={projects} />;
}
