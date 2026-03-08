"use client";

import { useLocale } from "@/contexts/LocaleContext";

export default function Hero() {
  const { t } = useLocale();

  return (
    <section className="relative pt-28 sm:pt-32 pb-20 sm:pb-24 md:pt-40 md:pb-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-50/80 via-transparent to-transparent pointer-events-none" />

      <div className="relative mx-auto max-w-content px-6 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold tracking-tight text-[var(--foreground)] leading-[1.05] animate-fade-in-up">
          {t("hero.titleLine1")}
          <br className="hidden sm:block" />
          <span className="block sm:inline mt-1.5 sm:mt-0">
            {t("hero.titleLine2")}
          </span>
        </h1>

        <p className="mt-6 sm:mt-8 md:mt-10 text-base sm:text-lg md:text-xl text-[var(--muted)] max-w-2xl mx-auto leading-relaxed animate-fade-in-up [animation-delay:0.15s] opacity-0 [animation-fill-mode:forwards]">
          {t("hero.subtitle")}
        </p>

        <div className="mt-10 md:mt-14 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up [animation-delay:0.3s] opacity-0 [animation-fill-mode:forwards]">
          <a
            href="#demo"
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-[var(--foreground)] text-[var(--background)] px-8 py-4 text-base font-medium hover:opacity-90 transition-opacity"
          >
            {t("hero.requestDemo")}
          </a>
          <a
            href="#integrations"
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-full border border-black/10 bg-transparent text-[var(--foreground)] px-8 py-4 text-base font-medium hover:bg-black/5 transition-colors"
          >
            {t("hero.seeHowItWorks")}
          </a>
        </div>
      </div>
    </section>
  );
}
