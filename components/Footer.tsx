const productLinks = [
  { label: "Product", href: "#product" },
  { label: "Architecture", href: "#architecture" },
  { label: "Modules", href: "#modules" },
];

const companyLinks = [
  { label: "About", href: "#" },
  { label: "Careers", href: "#" },
  { label: "Contact", href: "#" },
];

const resourcesLinks = [
  { label: "Documentation", href: "#" },
  { label: "Blog", href: "#" },
  { label: "Support", href: "#" },
];

const legalLinks = [
  { label: "Privacy", href: "#" },
  { label: "Terms", href: "#" },
];

export default function Footer() {
  return (
    <footer id="company" className="border-t border-black/10 py-16 md:py-20">
      <div className="mx-auto max-w-content px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-12">
          <div>
            <h4 className="text-sm font-semibold text-[var(--foreground)] mb-4">
              Product
            </h4>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-[var(--foreground)] mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-[var(--foreground)] mb-4">
              Resources
            </h4>
            <ul className="space-y-3">
              {resourcesLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-[var(--foreground)] mb-4">
              Legal
            </h4>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-black/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <a
            href="#"
            className="text-lg font-semibold tracking-tight text-[var(--foreground)]"
          >
            Aly
          </a>
          <p className="text-sm text-[var(--muted)]">
            © {new Date().getFullYear()} Aly Software. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
