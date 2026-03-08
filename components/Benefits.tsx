"use client";

import { useLocale } from "@/contexts/LocaleContext";

const benefitKeys = [
  "benefits.item1",
  "benefits.item2",
  "benefits.item3",
  "benefits.item4",
  "benefits.item5",
] as const;

export default function Benefits() {
  const { t } = useLocale();

  return (
    <section id="features" className="py-20 sm:py-28 md:py-36 lg:py-40 bg-neutral-50/70">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[var(--foreground)] text-center">
          {t("benefits.title")}
        </h2>

        <ul className="mt-12 sm:mt-16 space-y-5 sm:space-y-6">
          {benefitKeys.map((key) => (
            <li
              key={key}
              className="flex items-start gap-4 text-lg sm:text-xl text-[var(--foreground)] leading-relaxed"
            >
              <span
                className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-[var(--foreground)]"
                aria-hidden
              />
              <span>{t(key)}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
