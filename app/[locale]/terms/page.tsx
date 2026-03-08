"use client";

import Link from "next/link";
import SkipToMain from "@/components/SkipToMain";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLocale } from "@/contexts/LocaleContext";

const SUPPORT_EMAIL = "support@alysoftware.com";

export default function TermsPage() {
  const { t, locale } = useLocale();

  const sections = [
    { titleKey: "terms.s1Title", bodyKey: "terms.s1P" },
    { titleKey: "terms.s2Title", bodyKey: "terms.s2P" },
    { titleKey: "terms.s3Title", bodyKey: "terms.s3P" },
    { titleKey: "terms.s4Title", bodyKey: "terms.s4P" },
    { titleKey: "terms.s5Title", bodyKey: "terms.s5P" },
    { titleKey: "terms.s6Title", bodyKey: "terms.s6P" },
    { titleKey: "terms.s7Title", bodyKey: "terms.s7P" },
  ];

  const content = (
    <div className="relative mx-auto max-w-3xl px-6">
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-50/80 via-transparent to-transparent pointer-events-none" />
      <div className="relative pt-28 sm:pt-32 pb-20 sm:pb-24 md:pt-40 md:pb-32">
        <div className="mb-16 md:mb-20">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-[var(--foreground)]">
            {t("terms.title")}
          </h1>
        </div>

        <article className="space-y-10 text-[var(--foreground)]">
          <p className="text-lg text-[var(--muted)] leading-relaxed">
            {t("terms.intro")}
          </p>

          {sections.map(({ titleKey, bodyKey }) => (
            <section key={titleKey}>
              <h2 className="text-xl font-semibold text-[var(--foreground)] mb-3">
                {t(titleKey)}
              </h2>
              <p className="text-[var(--muted)] leading-relaxed">
                {t(bodyKey)}
              </p>
            </section>
          ))}

          <section>
            <h2 className="text-xl font-semibold text-[var(--foreground)] mb-3">
              {t("terms.contactTitle")}
            </h2>
            <p className="text-[var(--muted)] leading-relaxed">
              {t("terms.contactP")}{" "}
              <a
                href={`mailto:${SUPPORT_EMAIL}`}
                className="text-[var(--accent)] hover:underline"
              >
                {SUPPORT_EMAIL}
              </a>
            </p>
          </section>
        </article>

        <p className="mt-14 text-center">
          <Link
            href={locale === "tr" ? "/tr" : "/en"}
            className="text-[var(--accent)] hover:underline text-sm font-medium"
          >
            {t("contact.backToHome")}
          </Link>
        </p>
      </div>
    </div>
  );

  return (
    <>
      <SkipToMain />
      <main id="main-content">
        <Navbar />
        <section className="relative overflow-hidden min-h-[60vh]">
          {content}
        </section>
        <Footer />
      </main>
    </>
  );
}
