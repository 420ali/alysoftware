"use client";

import { useLocale } from "@/contexts/LocaleContext";

const productKeys = [
  { nameKey: "products.crmName", descKey: "products.crmDesc" },
  { nameKey: "products.salesName", descKey: "products.salesDesc" },
  { nameKey: "products.billingName", descKey: "products.billingDesc" },
  { nameKey: "products.automationName", descKey: "products.automationDesc" },
  { nameKey: "products.integrationsName", descKey: "products.integrationsDesc" },
  { nameKey: "products.analyticsName", descKey: "products.analyticsDesc" },
] as const;

export default function Products() {
  const { t } = useLocale();

  return (
    <section id="products" className="py-20 sm:py-28 md:py-36 lg:py-40">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-[var(--foreground)] text-center max-w-3xl mx-auto">
          {t("products.title")}
        </h2>

        <div className="mt-14 sm:mt-16 md:mt-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {productKeys.map((item) => (
            <div
              key={item.nameKey}
              className="rounded-2xl border border-black/5 bg-white p-8 sm:p-10 hover:border-black/10 hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-[var(--foreground)]">
                {t(item.nameKey)}
              </h3>
              <p className="mt-3 sm:mt-4 text-base sm:text-lg text-[var(--muted)] leading-relaxed">
                {t(item.descKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
