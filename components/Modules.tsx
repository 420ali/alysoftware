const modules = [
  { name: "CRM", description: "Relationships and pipeline in one place." },
  { name: "Sales", description: "Deals, quotes, and forecasting." },
  { name: "Billing", description: "Invoicing and revenue recognition." },
  { name: "Automation", description: "Workflows that run without you." },
  { name: "Integrations", description: "Connect any system, any API." },
  { name: "Data Layer", description: "Single source of truth across ops." },
];

export default function Modules() {
  return (
    <section id="modules" className="py-32 md:py-40">
      <div className="mx-auto max-w-content px-6">
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-[var(--foreground)] text-center">
          Modules
        </h2>

        <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {modules.map((mod) => (
            <div
              key={mod.name}
              className="group border-b border-black/10 pb-8 hover:border-black/20 transition-colors"
            >
              <h3 className="text-2xl font-semibold tracking-tight text-[var(--foreground)]">
                {mod.name}
              </h3>
              <p className="mt-2 text-[var(--muted)]">{mod.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
