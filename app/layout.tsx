import type { Metadata } from "next";
import { Orbitron, JetBrains_Mono, Share_Tech_Mono } from "next/font/google";
import "./globals.css";

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const shareTechMono = Share_Tech_Mono({
  variable: "--font-sharetech",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "One Smart Biz — Strategic Digital Solutions | Doha, Qatar",
  description:
    "The leading digital consultancy in Doha, Qatar. High-performance web engineering, multimedia production, and financial intelligence for modern enterprises.",
  keywords: "digital agency doha, web development qatar, multimedia vfx, financial consultancy, GCC digital transformation",
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "One Smart Biz — Strategic Digital Solutions | Doha, Qatar",
    description: "High-performance web engineering, multimedia production, and financial intelligence for modern enterprises.",
    url: "https://onesmartbiz.pro",
    siteName: "One Smart Biz",
    images: [
      {
        url: "https://iili.io/qN7uhLF.png",
        width: 1200,
        height: 630,
        alt: "One Smart Biz - Strategic Digital Solutions",
      },
    ],
    locale: "en_QA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "One Smart Biz — Strategic Digital Solutions",
    description: "Leading digital consultancy in Doha, Qatar.",
    images: ["https://iili.io/qN7uhLF.png"],
  },
};


import WhatsAppChat from "@/components/WhatsAppChat";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${orbitron.variable} ${jetbrainsMono.variable} ${shareTechMono.variable} cyber-scanline-sweep antialiased`}
        style={{ fontFamily: "var(--font-jetbrains), 'JetBrains Mono', monospace" }}
      >
        {children}
        <WhatsAppChat />
      </body>
    </html>
  );
}
