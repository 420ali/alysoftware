const problems = [
  {
    title: "Fragmented tools",
    description: "Data scattered across dozens of apps. No single source of truth.",
  },
  {
    title: "Rigid legacy systems",
    description: "Monolithic systems that can’t adapt to how you work today.",
  },
  {
    title: "Manual work",
    description: "Repetitive tasks that slow growth and burn out teams.",
  },
];

export default function Problem() {
  return (
    <section className="py-20 sm:py-28 md:py-36 lg:py-40 bg-neutral-50/70">
      <div className="mx-auto max-w-content px-6">
        <div className="grid md:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
          {problems.map((item, i) => (
            <div
              key={item.title}
              className="rounded-2xl bg-white border border-black/5 p-8 sm:p-10 md:p-12 shadow-sm hover:shadow-md transition-shadow"
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
