"use client";

import Link from "next/link";
import SkipToMain from "@/components/SkipToMain";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLocale } from "@/contexts/LocaleContext";

const CONTACT_EMAIL = "contact@alysoftware.com";

export default function PrivacyPage() {
  const { t, locale } = useLocale();

  const content = (
    <div className="relative mx-auto max-w-3xl px-6">
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-50/80 via-transparent to-transparent pointer-events-none" />
      <div className="relative pt-28 sm:pt-32 pb-20 sm:pb-24 md:pt-40 md:pb-32">
        <div className="mb-16 md:mb-20">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-[var(--foreground)]">
            {t("privacy.title")}
          </h1>
        </div>

        <article className="space-y-10 text-[var(--foreground)]">
          <p className="text-lg text-[var(--muted)] leading-relaxed">
            {t("privacy.intro")}
          </p>

          <section>
            <h2 className="text-xl font-semibold text-[var(--foreground)] mb-3">
              {t("privacy.collectTitle")}
            </h2>
            <ul className="list-disc list-inside space-y-2 text-[var(--muted)] leading-relaxed pl-1">
              <li>{t("privacy.collect1")}</li>
              <li>{t("privacy.collect2")}</li>
              <li>{t("privacy.collect3")}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[var(--foreground)] mb-3">
              {t("privacy.useTitle")}
            </h2>
            <ul className="list-disc list-inside space-y-2 text-[var(--muted)] leading-relaxed pl-1">
              <li>{t("privacy.use1")}</li>
              <li>{t("privacy.use2")}</li>
              <li>{t("privacy.use3")}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[var(--foreground)] mb-3">
              {t("privacy.sharingTitle")}
            </h2>
            <p className="text-[var(--muted)] leading-relaxed">
              {t("privacy.sharingP")}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[var(--foreground)] mb-3">
              {t("privacy.choicesTitle")}
            </h2>
            <p className="text-[var(--muted)] leading-relaxed">
              {t("privacy.choicesP")}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[var(--foreground)] mb-3">
              {t("privacy.securityTitle")}
            </h2>
            <p className="text-[var(--muted)] leading-relaxed">
              {t("privacy.securityP")}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[var(--foreground)] mb-3">
              {t("privacy.contactTitle")}
            </h2>
            <p className="text-[var(--muted)] leading-relaxed">
              {t("privacy.contactP")}{" "}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-[var(--accent)] hover:underline"
              >
                {CONTACT_EMAIL}
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
