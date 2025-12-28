import type { Metadata } from "next";
import { ContactClient } from "./contact-client";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Tuan (qtuwn) via email, LinkedIn, GitHub, or social media.",
};

export default function ContactPage() {
  return <ContactClient />;
}
