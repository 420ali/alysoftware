"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLocale } from "@/contexts/LocaleContext";
import { localeFlags, type Locale } from "@/i18n/config";

const LOCALE_COOKIE = "NEXT_LOCALE";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 365; // 1 year

function setLocaleCookie(locale: Locale) {
  if (typeof document === "undefined") return;
  document.cookie = `${LOCALE_COOKIE}=${locale}; path=/; max-age=${COOKIE_MAX_AGE}; SameSite=Lax`;
}

export default function LanguageSwitcher() {
  const { locale: currentLocale } = useLocale();
  const pathname = usePathname();
  const pathWithoutLocale = pathname?.replace(/^\/(tr|en)/, "") || "";
  const hrefForLocale = (locale: Locale) =>
    `/${locale}${pathWithoutLocale || ""}`;

  return (
    <div
      className="flex items-center gap-1 rounded-full border border-black/10 bg-white/80 p-1 shadow-sm"
      role="group"
      aria-label="Switch language"
    >
      {(["tr", "en"] as const).map((locale) => (
        <Link
          key={locale}
          href={hrefForLocale(locale)}
          scroll={false}
          onClick={() => setLocaleCookie(locale)}
          title={locale === "tr" ? "Türkçe" : "English"}
          aria-label={locale === "tr" ? "Switch to Turkish" : "Switch to English"}
          aria-current={currentLocale === locale ? "true" : undefined}
          className={`flex h-8 w-9 items-center justify-center rounded-full text-lg transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--foreground)] focus-visible:ring-offset-2 ${
            currentLocale === locale
              ? "bg-neutral-100 shadow-sm pointer-events-none"
              : "hover:bg-neutral-50"
          }`}
        >
          {localeFlags[locale]}
        </Link>
      ))}
    </div>
  );
}
