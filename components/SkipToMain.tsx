"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

export default function SkipToMain() {
  const pathname = usePathname();
  const linkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (!linkRef.current) return;
    if (document.activeElement === linkRef.current) {
      (document.activeElement as HTMLElement).blur();
    }
  }, [pathname]);

  return (
    <a ref={linkRef} href="#main-content" className="skip-link">
      Skip to main content
    </a>
  );
}
