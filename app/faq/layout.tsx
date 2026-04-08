import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ — Frequently Asked Questions | One Smart Biz Qatar",
  description:
    "Find answers to common questions about One Smart Biz services, pricing, timelines, web development, video production, and financial solutions in Doha, Qatar.",
  keywords:
    "faq, frequently asked questions, one smart biz, web development qatar, digital agency doha, pricing, video production qatar",
  openGraph: {
    title: "FAQ — Frequently Asked Questions | One Smart Biz Qatar",
    description:
      "Find answers to common questions about One Smart Biz services, pricing, timelines, and digital solutions in Doha, Qatar.",
    url: "https://www.onesmartbiz.pro/faq",
    siteName: "One Smart Biz",
    locale: "en_QA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQ — One Smart Biz Qatar",
    description:
      "Find answers about our digital services, pricing, and process.",
  },
  alternates: {
    canonical: "https://www.onesmartbiz.pro/faq",
  },
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
