import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Aly — The Operating System for Modern Companies",
  description:
    "Run your entire business on one flexible platform. Connect systems. Automate workflows. Scale faster.",
  openGraph: {
    title: "Aly — The Operating System for Modern Companies",
    description:
      "Run your entire business on one flexible platform. Connect systems. Automate workflows. Scale faster.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aly — The Operating System for Modern Companies",
    description:
      "Run your entire business on one flexible platform. Connect systems. Automate workflows. Scale faster.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-[var(--background)] font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
