const testimonials = [
  {
    quote: "Finally, one place for our operations. We scaled without the usual chaos.",
    attribution: "Operations lead, B2B SaaS",
  },
  {
    quote: "We connected legacy ERP and modern tools in weeks, not months.",
    attribution: "CTO, mid-market",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 sm:py-28 md:py-36">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="sr-only">What teams say about Aly</h2>
        <div className="grid sm:grid-cols-2 gap-8 sm:gap-10">
          {testimonials.map((t) => (
            <blockquote
              key={t.attribution}
              className="rounded-2xl border border-black/5 bg-white p-8 sm:p-10"
            >
              <p className="text-lg sm:text-xl text-[var(--foreground)] leading-relaxed">
                &ldquo;{t.quote}&rdquo;
              </p>
              <footer className="mt-5 text-sm text-[var(--muted)]">
                — {t.attribution}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
