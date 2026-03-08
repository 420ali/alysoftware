"use client";

import { useLocale } from "@/contexts/LocaleContext";

export default function CTA() {
  const { t } = useLocale();

  return (
    <section id="demo" className="py-20 sm:py-28 md:py-36 lg:py-40">
      <div className="mx-auto max-w-content px-6 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-[var(--foreground)] max-w-3xl mx-auto leading-tight">
          {t("cta.headline")}
        </h2>
        <a
          href="#demo"
          className="mt-10 inline-flex items-center justify-center rounded-full bg-[var(--foreground)] text-[var(--background)] px-10 py-4 text-base font-medium hover:opacity-90 transition-opacity"
        >
          {t("cta.button")}
        </a>
      </div>
    </section>
  );
}
