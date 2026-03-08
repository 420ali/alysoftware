"use client";

import Link from "next/link";
import SkipToMain from "@/components/SkipToMain";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLocale } from "@/contexts/LocaleContext";

export default function AboutPage() {
  const { t, locale } = useLocale();

  const content = (
    <div className="relative mx-auto max-w-3xl px-6">
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-50/80 via-transparent to-transparent pointer-events-none" />
      <div className="relative pt-28 sm:pt-32 pb-20 sm:pb-24 md:pt-40 md:pb-32">
        <div className="mb-16 md:mb-20">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-[var(--foreground)]">
            {t("about.title")}
          </h1>
        </div>

        <article className="space-y-8 text-[var(--foreground)]">
          <p className="text-lg text-[var(--muted)] leading-relaxed">
            {t("about.intro")}
          </p>
          <p className="text-[var(--muted)] leading-relaxed">
            {t("about.mission")}
          </p>
          <p className="text-[var(--muted)] leading-relaxed">
            {t("about.challenge")}
          </p>
          <p className="text-[var(--muted)] leading-relaxed">
            {t("about.technology")}
          </p>

          <section>
            <h2 className="text-xl font-semibold text-[var(--foreground)] mb-4">
              {t("about.commitmentTitle")}
            </h2>
            <ul className="space-y-4 text-[var(--muted)] leading-relaxed">
              <li>
                <span className="font-medium text-[var(--foreground)]">
                  {t("about.innovationTitle")}
                </span>{" "}
                {t("about.innovationDesc")}
              </li>
              <li>
                <span className="font-medium text-[var(--foreground)]">
                  {t("about.clarityTitle")}
                </span>{" "}
                {t("about.clarityDesc")}
              </li>
              <li>
                <span className="font-medium text-[var(--foreground)]">
                  {t("about.reliabilityTitle")}
                </span>{" "}
                {t("about.reliabilityDesc")}
              </li>
            </ul>
          </section>

          <p className="text-[var(--muted)] leading-relaxed pt-2">
            {t("about.closing")}
          </p>
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
