"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

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

  return (
    <header className="sticky top-0 z-50 w-full border-b border-foreground/10 bg-background/80 backdrop-blur-lg supports-[backdrop-filter]:bg-background/60">
      <nav
        className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold tracking-tight transition-colors hover:text-blue-500"
        >
          qtuwn
        </Link>

        {/* Desktop Nav Links */}
        <ul className="hidden sm:flex items-center gap-1">
          {navLinks.map(({ href, label }) => {
            const isActive =
              href === "/" ? pathname === "/" : pathname.startsWith(href);

            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-foreground/10 text-foreground"
                      : "text-foreground/60 hover:bg-foreground/5 hover:text-foreground"
                  }`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Right Side: Theme Toggle + Mobile Menu Button */}
        <div className="flex items-center gap-2">
          <div className="border-l border-foreground/10 pl-2">
            <ThemeToggle />
          </div>

          {/* Mobile Hamburger Button */}
          <button
            ref={buttonRef}
            onClick={() => setMenuOpen((v) => !v)}
            className="sm:hidden rounded-lg p-2 text-foreground/60 hover:bg-foreground/5 hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-foreground/20"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      <div
        id="mobile-menu"
        ref={menuRef}
        className={`sm:hidden border-t border-foreground/10 bg-background/95 backdrop-blur-lg transition-all duration-200 ease-in-out ${
          menuOpen
            ? "opacity-100 max-h-80"
            : "opacity-0 max-h-0 overflow-hidden pointer-events-none"
        }`}
      >
        <ul className="px-6 py-4 space-y-1">
          {navLinks.map(({ href, label }) => {
            const isActive =
              href === "/" ? pathname === "/" : pathname.startsWith(href);

            return (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className={`block rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-foreground/10 text-foreground"
                      : "text-foreground/60 hover:bg-foreground/5 hover:text-foreground"
                  }`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
}
