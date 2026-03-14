import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Aikido Kokikai Berlin",
    template: "%s | Aikido Kokikai Berlin",
  },
  description:
    "Aikido Kokikai Berlin — learn Japanese martial arts in English. Classes Monday and Wednesday in central Berlin. Your first class is free!",
  openGraph: {
    title: "Aikido Kokikai Berlin",
    description:
      "Learn Aikido in English in Berlin. Minimum effort, maximum effect.",
    url: "https://kokikai.de",
    siteName: "Aikido Kokikai Berlin",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-warm-50 text-warm-900 antialiased`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:rounded focus:bg-brand-red focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <Header />
        <main id="main-content" className="min-h-screen">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
