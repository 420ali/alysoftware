"use client";

import { useLocale } from "@/contexts/LocaleContext";

const stepKeys = [
  { titleKey: "architecture.step1Title", descKey: "architecture.step1Desc" },
  { titleKey: "architecture.step2Title", descKey: "architecture.step2Desc" },
  { titleKey: "architecture.step3Title", descKey: "architecture.step3Desc" },
] as const;

export default function Architecture() {
  const { t } = useLocale();

  return (
    <section
      id="integrations"
      aria-labelledby="architecture-heading"
      className="py-20 sm:py-28 md:py-36 lg:py-40 bg-[var(--background)]"
    >
      <div className="mx-auto max-w-6xl px-6">
        <h2
          id="architecture-heading"
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-[var(--foreground)] text-center max-w-3xl mx-auto"
        >
          {t("architecture.title")}
        </h2>
        <p className="mt-4 sm:mt-6 text-lg sm:text-xl text-[var(--muted)] text-center max-w-2xl mx-auto">
          {t("architecture.subtitle")}
        </p>

        <div className="mt-14 sm:mt-20 md:mt-24 flex flex-col md:flex-row items-stretch gap-6 md:gap-8 max-w-4xl mx-auto">
          {stepKeys.map((step, i) => (
            <div
              key={step.titleKey}
              className="flex-1 rounded-2xl border border-black/5 bg-white p-8 sm:p-10 shadow-sm flex flex-col"
            >
              <span className="text-sm font-medium text-[var(--muted)]">
                0{i + 1}
              </span>
              <h3 className="mt-3 text-2xl sm:text-3xl font-semibold tracking-tight text-[var(--foreground)]">
                {t(step.titleKey)}
              </h3>
              <p className="mt-4 text-[var(--muted)] leading-relaxed flex-grow">
                {t(step.descKey)}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 md:mt-16 flex justify-center">
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 rounded-xl border border-black/10 bg-white/80 px-6 py-5 shadow-sm max-w-2xl">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[var(--foreground)]" />
              <span className="text-sm font-medium text-[var(--foreground)]">
                {t("architecture.diagramLegacy")}
              </span>
            </div>
            <span className="text-[var(--muted)] hidden sm:inline" aria-hidden>
              →
            </span>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[var(--accent)]" />
              <span className="text-sm font-medium text-[var(--foreground)]">
                {t("architecture.diagramAly")}
              </span>
            </div>
            <span className="text-[var(--muted)] hidden sm:inline" aria-hidden>
              →
            </span>
            <span className="text-sm text-[var(--muted)]">
              {t("architecture.diagramUnified")}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
