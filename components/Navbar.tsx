"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "Product", href: "#product" },
  { label: "Architecture", href: "#architecture" },
  { label: "Modules", href: "#modules" },
  { label: "Company", href: "#company" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--background)]/80 backdrop-blur-xl border-b border-black/5">
      <nav className="mx-auto max-w-content px-6 py-4 flex items-center justify-between">
        <a
          href="#"
          className="text-xl font-semibold tracking-tight text-[var(--foreground)]"
        >
          Aly
        </a>

        <ul className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <a
            href="#demo"
            className="hidden md:inline-flex items-center justify-center rounded-full bg-[var(--foreground)] text-[var(--background)] px-5 py-2.5 text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Request Demo
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
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-lg text-[var(--foreground)]"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#demo"
                className="inline-flex items-center justify-center rounded-full bg-[var(--foreground)] text-[var(--background)] px-5 py-3 text-sm font-medium w-full"
                onClick={() => setMobileOpen(false)}
              >
                Request Demo
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
