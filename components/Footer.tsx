"use client";

import Link from "next/link";
import { useLocale } from "@/contexts/LocaleContext";

export default function Footer() {
  const { t, locale } = useLocale();

  const productLinks = [
    { labelKey: "footer.product", href: "#products" },
    { labelKey: "footer.features", href: "#features" },
    { labelKey: "footer.integrations", href: "#integrations" },
  ];

  const companyLinks = [
    { labelKey: "footer.about", href: `/${locale}/about` },
    { labelKey: "footer.contact", href: `/${locale}/contact` },
  ];

  const legalLinks = [
    { labelKey: "footer.privacy", href: `/${locale}/privacy` },
    { labelKey: "footer.terms", href: `/${locale}/terms` },
  ];

  return (
    <footer id="company" className="border-t border-black/10 py-16 md:py-20">
      <div className="mx-auto max-w-content px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-10 md:gap-12">
          <div className="text-center">
            <h4 className="text-sm font-semibold text-[var(--foreground)] mb-4">
              {t("footer.product")}
            </h4>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.labelKey}>
                  <a
                    href={link.href}
                    className="text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
                  >
                    {t(link.labelKey)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="text-center">
            <h4 className="text-sm font-semibold text-[var(--foreground)] mb-4">
              {t("footer.company")}
            </h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.labelKey}>
                  <a
                    href={link.href}
                    className="text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
                  >
                    {t(link.labelKey)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="text-center">
            <h4 className="text-sm font-semibold text-[var(--foreground)] mb-4">
              {t("footer.legal")}
            </h4>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.labelKey}>
                  <a
                    href={link.href}
                    className="text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
                  >
                    {t(link.labelKey)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-black/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <a
            href="#"
            className="text-lg font-semibold tracking-tight text-[var(--foreground)]"
          >
            Aly
          </a>
          <p className="text-sm text-[var(--muted)]">
            © {new Date().getFullYear()} {t("footer.copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
}
