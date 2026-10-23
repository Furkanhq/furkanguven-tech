import type { Metadata, Viewport } from "next";
import { Fraunces, Archivo, Fragment_Mono } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz"],
  variable: "--font-fraunces",
  display: "swap",
});

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
});

const fragment = Fragment_Mono({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-fragment",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://furkanguven.tech"),
  title: {
    default: "Furkan Güven — AI Systems & Automation Engineer",
    template: "%s — Furkan Güven",
  },
  description:
    "Bespoke systems for operations that can't stop: conversational agents wired into your CRM, software engineered to fail safely, and products polished to the pixel.",
  keywords: [
    "AI automation",
    "LLM agents",
    "WhatsApp assistant",
    "CRM integration",
    "n8n",
    "Next.js",
    "automation engineer",
  ],
  authors: [{ name: "Furkan Güven", url: "https://furkanguven.tech" }],
  creator: "Furkan Güven",
  openGraph: {
    type: "website",
    url: "https://furkanguven.tech",
    siteName: "Furkan Güven",
    title: "Furkan Güven — AI Systems & Automation Engineer",
    description:
      "Bespoke systems for operations that can't stop. Conversational AI, failure-safe software, polished products.",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "Furkan Güven — AI Systems & Automation Engineer",
    description:
      "Bespoke systems for operations that can't stop. Conversational AI, failure-safe software, polished products.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0c0b09",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${fraunces.variable} ${archivo.variable} ${fragment.variable} font-body bg-ink text-bone`}
      >
        {children}
        <div aria-hidden className="grain" />
      </body>
    </html>
  );
}
