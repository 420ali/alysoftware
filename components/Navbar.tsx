"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLocale } from "@/contexts/LocaleContext";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar() {
  const { t, locale } = useLocale();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [heroDemoInView, setHeroDemoInView] = useState(true);
  const pathname = usePathname();
  const pathWithoutLocale = pathname?.replace(/^\/(tr|en)/, "") || "";
  const isHome = pathWithoutLocale === "" || pathWithoutLocale === "/";
  const homeHref = (hash: string) => (isHome ? hash : `/${locale}${hash}`);
  const showNavDemo = !isHome || !heroDemoInView;

  const navLinks = [
    { labelKey: "nav.product", href: "#products" },
    { labelKey: "nav.features", href: "#features" },
    { labelKey: "nav.integrations", href: "#integrations" },
    { labelKey: "nav.company", href: "#company" },
  ];

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    if (!isHome) return;
    const el = document.querySelector("[data-hero-demo]");
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setHeroDemoInView(entry.isIntersecting),
      { threshold: 0, rootMargin: "0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [isHome]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--background)]/80 backdrop-blur-xl border-b border-black/5">
      <nav className="mx-auto max-w-content px-6 py-4 flex items-center">
        <div className="flex flex-1 items-center justify-start min-w-0">
          <Link
            href={`/${locale}`}
            className="text-xl font-semibold tracking-tight text-[var(--foreground)]"
          >
            Aly
          </Link>
        </div>

        <ul className="hidden md:flex items-center justify-center gap-8 md:gap-10 flex-1 min-w-0">
          {navLinks.map((link) => (
            <li key={link.labelKey}>
              <a
                href={homeHref(link.href)}
                className="text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
              >
                {t(link.labelKey)}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex flex-1 items-center justify-end gap-8 md:gap-10 min-w-0">
          <LanguageSwitcher />
          <a
            href={`/${locale}/contact`}
            className={`hidden md:inline-flex items-center justify-center rounded-full bg-[var(--foreground)] text-[var(--background)] px-5 py-2.5 text-sm font-medium hover:opacity-90 transition-opacity duration-300 ${
              showNavDemo ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            {t("nav.requestDemo")}
          </a>
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            className="md:hidden p-2 text-[var(--foreground)] min-h-[44px] min-w-[44px] flex items-center justify-center"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div
          id="mobile-menu"
          className="md:hidden border-t border-black/5 bg-[var(--background)]/95 backdrop-blur-xl px-6 py-6"
          role="navigation"
          aria-label="Mobile menu"
        >
          <ul className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <li key={link.labelKey}>
                <a
                  href={homeHref(link.href)}
                  className="text-lg text-[var(--foreground)]"
                  onClick={() => setMobileOpen(false)}
                >
                  {t(link.labelKey)}
                </a>
              </li>
            ))}
            <li className="flex flex-col gap-3">
              <LanguageSwitcher />
              <a
                href={`/${locale}/contact`}
                className="inline-flex items-center justify-center rounded-full bg-[var(--foreground)] text-[var(--background)] px-5 py-3 text-sm font-medium w-full"
                onClick={() => setMobileOpen(false)}
              >
                {t("nav.requestDemo")}
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
