import { LocaleProvider } from "@/contexts/LocaleContext";
import type { Locale } from "@/i18n/config";

const locales: Locale[] = ["en", "tr"];

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const locale = (params.locale === "tr" ? "tr" : "en") as Locale;

  return <LocaleProvider locale={locale}>{children}</LocaleProvider>;
}
