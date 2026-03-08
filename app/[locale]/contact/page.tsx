"use client";

import Link from "next/link";
import SkipToMain from "@/components/SkipToMain";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLocale } from "@/contexts/LocaleContext";

const SUPPORT_EMAIL = "support@alysoftware.com";
const INFO_EMAIL = "info@alysoftware.com";
const CONTACT_EMAIL = "contact@alysoftware.com";
const WHATSAPP_NUMBER = "905077512299"; // +90 507 751 2299, no + or spaces for wa.me

export default function ContactPage() {
  const { t, locale } = useLocale();

  return (
    <>
      <SkipToMain />
      <main id="main-content">
        <Navbar />
        <section className="relative pt-28 sm:pt-32 pb-20 sm:pb-24 md:pt-40 md:pb-32 overflow-hidden min-h-[60vh]">
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-50/80 via-transparent to-transparent pointer-events-none" />
          <div className="relative mx-auto max-w-content px-6">
            <div className="max-w-2xl mx-auto text-center mb-16 md:mb-20">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-[var(--foreground)]">
                {t("contact.title")}
              </h1>
              <p className="mt-4 text-lg text-[var(--muted)]">
                {t("contact.subtitle")}
              </p>
            </div>

            <div className="max-w-xl mx-auto space-y-3">
              <a
                href={`mailto:${SUPPORT_EMAIL}`}
                className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 w-full rounded-2xl border border-black/10 bg-white/60 px-6 py-4 text-left transition-colors hover:bg-neutral-50/80 hover:border-black/15"
              >
                <span className="text-sm font-medium text-[var(--muted)]">
                  {t("contact.support")}
                </span>
                <span className="text-[var(--foreground)] font-medium break-all">
                  {SUPPORT_EMAIL}
                </span>
              </a>
              <a
                href={`mailto:${INFO_EMAIL}`}
                className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 w-full rounded-2xl border border-black/10 bg-white/60 px-6 py-4 text-left transition-colors hover:bg-neutral-50/80 hover:border-black/15"
              >
                <span className="text-sm font-medium text-[var(--muted)]">
                  {t("contact.info")}
                </span>
                <span className="text-[var(--foreground)] font-medium break-all">
                  {INFO_EMAIL}
                </span>
              </a>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 w-full rounded-2xl border border-black/10 bg-white/60 px-6 py-4 text-left transition-colors hover:bg-neutral-50/80 hover:border-black/15"
              >
                <span className="text-sm font-medium text-[var(--muted)]">
                  {t("contact.contactLabel")}
                </span>
                <span className="text-[var(--foreground)] font-medium break-all">
                  {CONTACT_EMAIL}
                </span>
              </a>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 w-full rounded-2xl border border-black/10 bg-white/60 px-6 py-4 text-left transition-colors hover:bg-neutral-50/80 hover:border-black/15"
              >
                <span className="text-sm font-medium text-[var(--muted)]">
                  WhatsApp
                </span>
                <span className="text-[var(--foreground)] font-medium">
                  +90 507 751 2299
                </span>
              </a>
            </div>

            <p className="mt-10 text-center">
              <Link
                href={locale === "tr" ? "/tr" : "/en"}
                className="text-[var(--accent)] hover:underline text-sm font-medium"
              >
                {t("contact.backToHome")}
              </Link>
            </p>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
