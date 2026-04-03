import type { Metadata } from "next";
import { Inter, Orbitron, JetBrains_Mono, Share_Tech_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

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
    url: "https://www.onesmartbiz.pro",
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
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
    nocache: false,
  },
  alternates: {
    canonical: "https://www.onesmartbiz.pro",
  },
};


import WhatsAppChat from "@/components/WhatsAppChat";
import SmoothScroll from "@/components/SmoothScroll";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${orbitron.variable} ${jetbrainsMono.variable} ${shareTechMono.variable} cyber-scanline-sweep antialiased`}
        style={{ fontFamily: "var(--font-inter), system-ui, -apple-system, sans-serif" }}
      >
        <SmoothScroll>
          {children}
          <WhatsAppChat />
        </SmoothScroll>
        {/* Schema.org: LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "@id": "https://www.onesmartbiz.pro/#organization",
              "name": "One Smart Biz",
              "alternateName": "OSB",
              "description": "Strategic digital solutions for modern businesses in Qatar and the GCC. High-performance web engineering, multimedia production, and financial intelligence.",
              "url": "https://www.onesmartbiz.pro",
              "logo": "https://www.onesmartbiz.pro/logo.png",
              "image": "https://iili.io/qN7uhLF.png",
              "telephone": "+974-55855221",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Doha",
                "addressCountry": "QA"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "25.2854",
                "longitude": "51.5310"
              },
              "areaServed": [
                { "@type": "Country", "name": "Qatar" },
                { "@type": "Country", "name": "Saudi Arabia" },
                { "@type": "Country", "name": "UAE" },
                { "@type": "Country", "name": "Bahrain" },
                { "@type": "Country", "name": "Kuwait" },
                { "@type": "Country", "name": "Oman" }
              ],
              "priceRange": "$$",
              "sameAs": [
                "https://www.facebook.com/OneBiz"
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Digital Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Web & App Development",
                      "description": "Cutting-edge websites and mobile applications built with React, Next.js, and Native platforms."
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Multimedia & VFX",
                      "description": "High-end video production, motion graphics, and visual effects for social media and broadcast."
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Financial Services",
                      "description": "Audit, Automation, Financial Statements, Bookkeeping, and Tax Filing for Qatar businesses."
                    }
                  }
                ]
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "150",
                "bestRating": "5"
              }
            })
          }}
        />
        {/* Schema.org: FAQPage */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What digital services does One Smart Biz offer in Qatar?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "One Smart Biz offers Web & App Development (React, Next.js, React Native), Multimedia & VFX Production, and Financial Services (audit, bookkeeping, tax filing) — all tailored for Qatar's business landscape."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How much does website development cost in Qatar?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Website development in Qatar ranges from QAR 5,000 for a basic business site to QAR 50,000+ for custom e-commerce or enterprise platforms. Use our online calculator at onesmartbiz.pro/calculator for instant pricing."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How long does it take to build a website in Doha?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "A standard business website takes 2-4 weeks. Custom web applications typically take 6-12 weeks. One Smart Biz has delivered full React Native apps in 8 weeks."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Does One Smart Biz provide financial services for Qatar companies?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. We offer audit, financial statements, bookkeeping, tax filing, and financial automation — all compliant with Qatar's regulatory requirements."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What makes One Smart Biz different from other digital agencies in Qatar?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We combine engineering, creative, and financial services under one roof. We deliver sub-1.2s load times, 98/100 SEO scores, and 150+ completed projects with 98% client satisfaction."
                  }
                }
              ]
            })
          }}
        />
      </body>
    </html>
  );
}
