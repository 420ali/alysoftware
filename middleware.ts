import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const locales = ["en", "tr"] as const;

function getPreferredLocale(request: NextRequest): "en" | "tr" {
  const cookie = request.cookies.get("NEXT_LOCALE")?.value;
  if (cookie === "tr" || cookie === "en") return cookie;

  const acceptLanguage = request.headers.get("accept-language") ?? "";
  const first = acceptLanguage.split(",")[0]?.trim().toLowerCase() ?? "";
  if (first.startsWith("tr")) return "tr";
  return "en";
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  if (pathname === "/") {
    const locale = getPreferredLocale(request);
    const url = request.nextUrl.clone();
    url.pathname = `/${locale}`;
    const res = NextResponse.redirect(url);
    res.cookies.set("NEXT_LOCALE", locale, {
      path: "/",
      maxAge: 60 * 60 * 24 * 365,
      sameSite: "lax",
    });
    return res;
  }

  const segment = pathname.split("/")[1];
  if (locales.includes(segment as (typeof locales)[number])) {
    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/"],
};
