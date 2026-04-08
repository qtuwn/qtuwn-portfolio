"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Download, Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { useLanguage } from "@/components/i18n/LanguageProvider";

const navLinks = [
  { href: "/", labelKey: "home" },
  { href: "/projects", labelKey: "projects" },
  { href: "/blog", labelKey: "blog" },
  { href: "/about", labelKey: "about" },
  { href: "/contact", labelKey: "contact" },
] as const;

export function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, toggleLang } = useLanguage();

  const t = {
    home: lang === "vi" ? "Trang chủ" : "Home",
    projects: lang === "vi" ? "Dự án" : "Projects",
    blog: lang === "vi" ? "Bài viết" : "Blog",
    about: lang === "vi" ? "Giới thiệu" : "About",
    contact: lang === "vi" ? "Liên hệ" : "Contact",
    cv: lang === "vi" ? "Tải CV" : "Download CV",
    openMenu: lang === "vi" ? "Mở menu" : "Open menu",
    closeMenu: lang === "vi" ? "Đóng menu" : "Close menu",
    toggleLang: lang === "vi" ? "Đổi ngôn ngữ" : "Switch language",
    navLabel: lang === "vi" ? "Điều hướng chính" : "Main navigation",
    logoLabel: lang === "vi" ? "Về trang chủ" : "Go to home",
  } as const;

  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const glassTabsRef = useRef<HTMLUListElement>(null);

  // Close menu on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        menuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  // Close menu on Escape key
  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape" && menuOpen) {
        setMenuOpen(false);
        buttonRef.current?.focus();
      }
    }

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [menuOpen]);

  // Micro-parallax for liquid glass tabs
  useEffect(() => {
    const el = glassTabsRef.current;
    if (!el) return;

    let raf = 0;

    function setVars(clientX: number, clientY: number) {
      const node = glassTabsRef.current;
      if (!node) return;

      const rect = node.getBoundingClientRect();
      const x = (clientX - rect.left) / Math.max(1, rect.width);
      const y = (clientY - rect.top) / Math.max(1, rect.height);

      const cx = Math.min(1, Math.max(0, x));
      const cy = Math.min(1, Math.max(0, y));

      node.style.setProperty("--mx", cx.toFixed(4));
      node.style.setProperty("--my", cy.toFixed(4));
    }

    function onPointerMove(ev: PointerEvent) {
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => setVars(ev.clientX, ev.clientY));
    }

    function onPointerLeave() {
      const node = glassTabsRef.current;
      if (!node) return;
      node.style.removeProperty("--mx");
      node.style.removeProperty("--my");
    }

    el.addEventListener("pointermove", onPointerMove);
    el.addEventListener("pointerleave", onPointerLeave);

    return () => {
      if (raf) cancelAnimationFrame(raf);
      el.removeEventListener("pointermove", onPointerMove);
      el.removeEventListener("pointerleave", onPointerLeave);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/70 backdrop-blur-xl supports-[backdrop-filter]:bg-background/55">
      <nav
        className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6"
        aria-label={t.navLabel}
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-semibold tracking-tight transition-colors hover:text-accent"
          aria-label={t.logoLabel}
        >
          <span className="relative h-9 w-9 overflow-hidden rounded-full border border-border bg-card shadow-sm">
            <Image
              src="/Cafe%20Coffee%20%26%20Eatery%20Logo.png"
              alt="qtuwn logo"
              fill
              sizes="36px"
              className="object-cover"
              priority
            />
          </span>
          <span className="font-mono">qtuwn</span>
        </Link>

        {/* Desktop Nav Links */}
        <ul
          ref={glassTabsRef}
          className="hidden sm:flex items-center gap-1 rounded-full border border-white/10 bg-background/35 px-1 py-1 shadow-[0_10px_30px_rgba(0,0,0,0.12)] backdrop-blur-xl ring-1 ring-inset ring-white/10 glass-tabs"
        >
          {navLinks.map(({ href, labelKey }) => {
            const isActive =
              href === "/" ? pathname === "/" : pathname.startsWith(href);

            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`relative rounded-full px-4 py-2 text-sm font-medium transition-all ${
                    isActive
                      ? "bg-white/55 text-foreground shadow-[0_8px_18px_rgba(0,0,0,0.16)] ring-1 ring-inset ring-white/40 dark:bg-white/10 dark:text-foreground dark:ring-white/20"
                      : "text-muted-foreground hover:text-foreground hover:bg-white/20 dark:hover:bg-white/5"
                  }`}
                >
                  <span aria-hidden="true" className="glass-tab-sheen" />
                  {t[labelKey]}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Right Side: Theme Toggle + Mobile Menu Button */}
        <div className="flex items-center gap-2">
          <a
            href="/cv_tienganh.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download
            className="hidden sm:inline-flex items-center gap-2 rounded-md border border-border bg-card px-3 py-2 text-sm font-medium transition-colors hover:bg-muted focus:outline-none focus:ring-2 focus:ring-ring"
            aria-label={`${t.cv} (PDF)`}
          >
            <Download className="h-4 w-4" />
            {t.cv}
          </a>

          <button
            type="button"
            onClick={toggleLang}
            className="hidden sm:inline-flex items-center justify-center rounded-full border border-border bg-card px-3 py-2 text-sm font-semibold transition-colors hover:bg-muted focus:outline-none focus:ring-2 focus:ring-ring"
            aria-label={t.toggleLang}
            title={t.toggleLang}
          >
            {lang.toUpperCase()}
          </button>

          <div className="pl-0">
            <ThemeToggle />
          </div>

          {/* Mobile Hamburger Button */}
          <button
            ref={buttonRef}
            onClick={() => setMenuOpen((v) => !v)}
            className="sm:hidden rounded-full border border-border bg-card p-2 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-ring"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? t.closeMenu : t.openMenu}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      <div
        id="mobile-menu"
        ref={menuRef}
        className={`sm:hidden border-t border-border bg-background/95 backdrop-blur-lg transition-all duration-200 ease-in-out ${
          menuOpen
            ? "opacity-100 max-h-80"
            : "opacity-0 max-h-0 overflow-hidden pointer-events-none"
        }`}
      >
        <ul className="px-6 py-4 space-y-1">
          <li>
            <a
              href="/cv_tienganh.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              onClick={() => setMenuOpen(false)}
              className="block rounded-lg px-4 py-3 text-sm font-medium transition-colors text-muted-foreground hover:bg-muted hover:text-foreground"
              aria-label={`${t.cv} (PDF)`}
            >
              {t.cv}
            </a>
          </li>

          <li>
            <button
              type="button"
              onClick={() => {
                toggleLang();
                setMenuOpen(false);
              }}
              className="w-full text-left block rounded-lg px-4 py-3 text-sm font-medium transition-colors text-muted-foreground hover:bg-muted hover:text-foreground"
              aria-label={t.toggleLang}
            >
              {t.toggleLang}: {lang.toUpperCase()}
            </button>
          </li>

          {navLinks.map(({ href, labelKey }) => {
            const isActive =
              href === "/" ? pathname === "/" : pathname.startsWith(href);

            return (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className={`block rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-accent text-accent-foreground"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  }`}
                >
                  {t[labelKey]}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
}
