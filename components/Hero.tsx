"use client";

export default function Hero() {
  return (
    <section className="relative pt-28 sm:pt-32 pb-20 sm:pb-24 md:pt-40 md:pb-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-50/80 via-transparent to-transparent pointer-events-none" />

      <div className="relative mx-auto max-w-content px-6 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold tracking-tight text-[var(--foreground)] leading-[1.05] animate-fade-in-up">
          The Operating System for
          <br className="hidden sm:block" />
          Modern Business Operations
        </h1>

        <p className="mt-6 sm:mt-8 md:mt-10 text-base sm:text-lg md:text-xl text-[var(--muted)] max-w-2xl mx-auto leading-relaxed animate-fade-in-up [animation-delay:0.15s] opacity-0 [animation-fill-mode:forwards]">
          Connect systems. Automate workflows. Scale faster.
        </p>

        <div className="mt-10 md:mt-14 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up [animation-delay:0.3s] opacity-0 [animation-fill-mode:forwards]">
          <a
            href="#demo"
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-[var(--foreground)] text-[var(--background)] px-8 py-4 text-base font-medium hover:opacity-90 transition-opacity"
          >
            Request Demo
          </a>
          <a
            href="#integrations"
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-full border border-black/10 bg-transparent text-[var(--foreground)] px-8 py-4 text-base font-medium hover:bg-black/5 transition-colors"
          >
            See How It Works
          </a>
        </div>

        <div className="mt-16 sm:mt-20 md:mt-28 animate-fade-in-up [animation-delay:0.45s] opacity-0 [animation-fill-mode:forwards]">
          <div className="relative mx-auto max-w-4xl rounded-2xl border border-black/10 bg-white shadow-xl shadow-black/5 overflow-hidden">
            <div className="aspect-video min-h-[240px] sm:min-h-[280px] bg-gradient-to-br from-neutral-50 to-neutral-100 flex items-center justify-center p-6 sm:p-8">
              <div className="grid grid-cols-3 gap-3 sm:gap-4 w-full max-w-md">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="rounded-xl bg-white border border-black/5 p-3 sm:p-4 shadow-sm animate-float"
                    style={{ animationDelay: `${i * 0.2}s` }}
                  >
                    <div className="h-2 w-3/4 bg-neutral-200 rounded mb-3" />
                    <div className="h-2 w-1/2 bg-neutral-100 rounded" />
                  </div>
                ))}
              </div>
              <p className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 text-xs text-[var(--muted)]">
                One platform · All operations
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
