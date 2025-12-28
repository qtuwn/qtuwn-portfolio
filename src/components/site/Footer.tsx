import { Github, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-foreground/10 bg-background">
      <div className="mx-auto max-w-5xl px-6 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-foreground/60">
            © {currentYear} Tuan (qtuwn). All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/qtuwn"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="mailto:tuquoctuan201@gmail.com"
              className="text-foreground/60 hover:text-foreground transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
