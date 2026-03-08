"use client";

import { useLocale } from "@/contexts/LocaleContext";

export default function Testimonials() {
  const { t } = useLocale();

  return (
    <section id="testimonials" className="py-20 sm:py-28 md:py-36">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="sr-only">{t("testimonials.srTitle")}</h2>
        <div className="grid sm:grid-cols-2 gap-8 sm:gap-10">
          <blockquote className="rounded-2xl border border-black/5 bg-white p-8 sm:p-10">
            <p className="text-lg sm:text-xl text-[var(--foreground)] leading-relaxed">
              &ldquo;{t("testimonials.quote1")}&rdquo;
            </p>
            <footer className="mt-5 text-sm text-[var(--muted)]">
              — {t("testimonials.attribution1")}
            </footer>
          </blockquote>
          <blockquote className="rounded-2xl border border-black/5 bg-white p-8 sm:p-10">
            <p className="text-lg sm:text-xl text-[var(--foreground)] leading-relaxed">
              &ldquo;{t("testimonials.quote2")}&rdquo;
            </p>
            <footer className="mt-5 text-sm text-[var(--muted)]">
              — {t("testimonials.attribution2")}
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
