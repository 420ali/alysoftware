const products = [
  {
    name: "CRM",
    description: "Relationships and pipeline in one place. One source of truth for every customer.",
  },
  {
    name: "Sales",
    description: "Deals, quotes, and forecasting. Close more with less manual work.",
  },
  {
    name: "Billing",
    description: "Invoicing and revenue recognition. Get paid faster, report accurately.",
  },
  {
    name: "Automation",
    description: "Workflows that run without you. Connect steps and remove bottlenecks.",
  },
  {
    name: "Integrations",
    description: "Connect any system, any API. Your stack stays in sync.",
  },
  {
    name: "Analytics",
    description: "Single source of truth across ops. See what matters in one place.",
  },
];

export default function Products() {
  return (
    <section id="products" className="py-20 sm:py-28 md:py-36 lg:py-40">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-[var(--foreground)] text-center max-w-3xl mx-auto">
          Products
        </h2>

        <div className="mt-14 sm:mt-16 md:mt-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {products.map((product) => (
            <div
              key={product.name}
              className="rounded-2xl border border-black/5 bg-white p-8 sm:p-10 hover:border-black/10 hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-[var(--foreground)]">
                {product.name}
              </h3>
              <p className="mt-3 sm:mt-4 text-base sm:text-lg text-[var(--muted)] leading-relaxed">
                {product.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
