"use client";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-50/60 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-r from-violet-200/40 to-indigo-200/30 rounded-full blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-content px-6 text-center">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tight text-[var(--foreground)] leading-[1.05] animate-fade-in-up">
          The Operating System
          <br />
          for Modern Companies
        </h1>

        <p className="mt-8 md:mt-10 text-lg md:text-xl text-[var(--muted)] max-w-2xl mx-auto leading-relaxed animate-fade-in-up [animation-delay:0.15s] opacity-0 [animation-fill-mode:forwards]">
          Run your entire business on one flexible platform.
          <br className="hidden sm:block" />
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
            href="#architecture"
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-full border border-black/10 bg-transparent text-[var(--foreground)] px-8 py-4 text-base font-medium hover:bg-black/5 transition-colors"
          >
            See How It Works
          </a>
        </div>

        <div className="mt-20 md:mt-28 animate-fade-in-up [animation-delay:0.45s] opacity-0 [animation-fill-mode:forwards]">
          <div className="relative mx-auto max-w-4xl rounded-2xl border border-black/10 bg-white/80 backdrop-blur-sm shadow-2xl shadow-black/5 overflow-hidden">
            <div className="aspect-video bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-8">
              <div className="grid grid-cols-3 gap-4 w-full max-w-md">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="rounded-xl bg-white border border-black/5 p-4 shadow-sm animate-float"
                    style={{ animationDelay: `${i * 0.2}s` }}
                  >
                    <div className="h-2 w-3/4 bg-slate-200 rounded mb-3" />
                    <div className="h-2 w-1/2 bg-slate-100 rounded" />
                  </div>
                ))}
              </div>
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs text-[var(--muted)]">
                One platform · All operations
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
