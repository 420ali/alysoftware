const problems = [
  {
    title: "Fragmented tools",
    description: "Data scattered across dozens of apps. No single source of truth.",
  },
  {
    title: "Rigid legacy ERP",
    description: "Monolithic systems that can’t adapt to how you work today.",
  },
  {
    title: "Manual workflows",
    description: "Repetitive tasks that slow growth and burn out teams.",
  },
];

export default function Problem() {
  return (
    <section className="py-32 md:py-40 bg-slate-50/50">
      <div className="mx-auto max-w-content px-6">
        <div className="grid md:grid-cols-3 gap-8 md:gap-10">
          {problems.map((item, i) => (
            <div
              key={item.title}
              className="rounded-2xl bg-white border border-black/5 p-10 md:p-12 shadow-sm hover:shadow-md transition-shadow"
            >
              <span className="text-sm font-medium text-[var(--muted)]">
                0{i + 1}
              </span>
              <h3 className="mt-4 text-2xl md:text-3xl font-semibold tracking-tight text-[var(--foreground)]">
                {item.title}
              </h3>
              <p className="mt-4 text-[var(--muted)] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
