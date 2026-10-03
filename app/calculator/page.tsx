import Nav from "@/components/Nav";
import PricingCalculator from "@/components/PricingCalculator";
import Footer from "@/components/Footer";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Website & App Pricing Calculator Qatar | One Smart Biz",
  description:
    "Calculate custom website development, mobile app, VFX, and automation costs in Qatar. Instant transparent project pricing estimates in QAR, USD, and PHP.",
  keywords:
    "website cost qatar, web development pricing doha, app development cost qatar, digital agency pricing qatar, pricing calculator",
  alternates: {
    canonical: "https://www.onesmartbiz.pro/calculator",
  },
  openGraph: {
    title: "Website & App Pricing Calculator Qatar | One Smart Biz",
    description:
      "Instant transparent project pricing estimates in QAR for web, mobile apps, video production, and business setup in Qatar.",
    url: "https://www.onesmartbiz.pro/calculator",
    siteName: "One Smart Biz",
    locale: "en_QA",
    type: "website",
    images: [
      {
        url: "https://iili.io/qN7uhLF.png",
        width: 1200,
        height: 630,
        alt: "One Smart Biz Project Pricing Calculator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Website & App Pricing Calculator Qatar | One Smart Biz",
    description:
      "Instant transparent project pricing estimates in QAR for web, mobile apps, and digital solutions in Qatar.",
    images: ["https://iili.io/qN7uhLF.png"],
  },
};

export default function CalculatorPage() {
  return (
    <>
      <Nav />
      <main className="min-h-screen pt-20">
        <PricingCalculator />
      </main>
      <Footer />
    </>
  );
}
