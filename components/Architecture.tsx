const steps = [
  {
    number: "01",
    title: "Connect",
    description: "Bring your existing systems and data into one place.",
  },
  {
    number: "02",
    title: "Unify",
    description: "One operations layer. No more silos or duplicate data.",
  },
  {
    number: "03",
    title: "Automate",
    description: "Workflows that scale with you and run without manual steps.",
  },
];

export default function Architecture() {
  return (
    <section id="integrations" aria-labelledby="architecture-heading" className="py-20 sm:py-28 md:py-36 lg:py-40 bg-[var(--background)]">
      <div className="mx-auto max-w-6xl px-6">
        <h2 id="architecture-heading" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-[var(--foreground)] text-center max-w-3xl mx-auto">
          How it works
        </h2>
        <p className="mt-4 sm:mt-6 text-lg sm:text-xl text-[var(--muted)] text-center max-w-2xl mx-auto">
          Three steps to one unified operations platform.
        </p>

        <div className="mt-14 sm:mt-20 md:mt-24 flex flex-col md:flex-row items-stretch gap-6 md:gap-8 max-w-4xl mx-auto">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className="flex-1 rounded-2xl border border-black/5 bg-white p-8 sm:p-10 shadow-sm flex flex-col"
            >
              <span className="text-sm font-medium text-[var(--muted)]">
                {step.number}
              </span>
              <h3 className="mt-3 text-2xl sm:text-3xl font-semibold tracking-tight text-[var(--foreground)]">
                {step.title}
              </h3>
              <p className="mt-4 text-[var(--muted)] leading-relaxed flex-grow">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 md:mt-16 flex justify-center">
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 rounded-xl border border-black/10 bg-white/80 px-6 py-5 shadow-sm max-w-2xl">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[var(--foreground)]" />
              <span className="text-sm font-medium text-[var(--foreground)]">
                ERP · CRM · Legacy
              </span>
            </div>
            <span className="text-[var(--muted)] hidden sm:inline" aria-hidden>
              →
            </span>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[var(--accent)]" />
              <span className="text-sm font-medium text-[var(--foreground)]">
                Aly
              </span>
            </div>
            <span className="text-[var(--muted)] hidden sm:inline" aria-hidden>
              →
            </span>
            <span className="text-sm text-[var(--muted)]">
              One unified layer
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
