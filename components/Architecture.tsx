export default function Architecture() {
  return (
    <section id="architecture" className="py-32 md:py-40 bg-slate-50/50">
      <div className="mx-auto max-w-content px-6">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-[var(--foreground)] text-center max-w-3xl mx-auto">
          Connect the systems you already use.
        </h2>
        <p className="mt-6 text-xl text-[var(--muted)] text-center max-w-2xl mx-auto">
          Build workflows that scale with you.
        </p>

        <div className="mt-20 flex flex-col items-center gap-4 max-w-2xl mx-auto">
          {["ERP", "CRM", "Legacy systems", "Aly", "One unified layer"].map(
            (layer, i) => (
              <div
                key={layer}
                className="w-full rounded-xl border border-black/10 bg-white px-8 py-6 text-center shadow-sm"
              >
                <span className="text-lg font-medium text-[var(--foreground)]">
                  {layer}
                </span>
              </div>
            )
          )}
        </div>

        <p className="mt-10 text-center text-sm text-[var(--muted)]">
          One flexible operations layer. Your existing tools, connected.
        </p>
      </div>
    </section>
  );
}
