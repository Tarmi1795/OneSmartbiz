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
    icon: [
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/favicon.png",
    shortcut: "/favicon.png",
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
import BackToHeroButton from "@/components/BackToHeroButton";

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
          <BackToHeroButton />
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
              "telephone": "+974-31308665",
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
                "name": "Business and Digital Services",
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
                      "name": "Social Media Management",
                      "description": "Content calendars, branded posts, reels, paid campaign support, community touchpoints, and reporting."
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "AI & Automation Services",
                      "description": "AI assistants, workflow automation, dashboards, integrations, and operational process improvement."
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Financial Services",
                      "description": "Audit, Automation, Financial Statements, Bookkeeping, and Tax Filing for Qatar businesses."
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "VISA Assistance",
                      "description": "Visa assistance and documentation support for Qatar founders, employees, and business mobility."
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Business Formation and Setup",
                      "description": "Company formation, licensing, documentation, and setup guidance for businesses launching in Qatar."
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
                    "text": "We provide seven core service areas: Web & App Development, Multimedia & VFX Production, Social Media Management, AI & Automation Services, Financial Services, VISA Assistance, and Business Formation and Setup. All services are tailored specifically for Qatar's business and regulatory landscape."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What makes One Smart Biz different from other digital agencies in Qatar?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We combine engineering, creative, financial, visa, and business setup services under one roof. Our projects deliver sub-1.2s load times, 98/100 SEO scores, and we've completed 150+ projects with a 98% client satisfaction rate. We also offer proprietary AI-powered business analysis tools."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do you work with businesses outside of Qatar?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. While headquartered in Doha, Qatar, we serve clients across the entire GCC region — Saudi Arabia, UAE, Bahrain, Kuwait, and Oman — as well as international clients."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How much does website development cost in Qatar?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Website development in Qatar can start from QAR 750 for a focused landing page, QAR 1,500-4,500 for a professional business website, and QAR 4,500-9,500 for e-commerce. Custom web apps typically start from QAR 9,500+ depending on integrations and workflows."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How long does it take to build a website?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "A standard business website takes 2–4 weeks. Custom web applications typically take 6–12 weeks. We've delivered full React Native apps in 8 weeks."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What technologies do you use for web development?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We specialize in React and Next.js for web, React Native for mobile, Node.js and Python for backend, and Supabase/PostgreSQL for databases. All deployed on edge networks for global performance."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do you provide website maintenance and support after launch?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. Post-launch support is available at QR 100/hour covering content updates, plugin management, security patches, and technical support. Retainer packages are also available."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can you redesign my existing website?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Absolutely. We perform full redesigns and migrations from WordPress, Wix, Squarespace, or legacy systems. We handle content migration, SEO preservation, and deploy on a modern high-performance stack."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What types of video production services do you offer?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Corporate videos, product showcases, social media content (Reels, TikTok, YouTube Shorts), brand films, event coverage, motion graphics, 2D/3D animation, and VFX compositing."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How much does video production cost in Qatar?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Social media video packages start from QAR 2,000, corporate brand films from QAR 8,000, and full VFX-grade productions from QAR 15,000+."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can you create content for social media marketing?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. We provide social media strategy, monthly content calendars, branded posts, reels coordination, publishing support, community touchpoints, paid campaign coordination, and performance reporting."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What AI and automation services do you build?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We build practical AI assistants, workflow automations, dashboards, CRM handoffs, lead intake systems, document workflows, reporting automations, and integrations that reduce repetitive manual work."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Does One Smart Biz provide financial services for Qatar companies?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. We offer audit preparation, financial statement generation, bookkeeping, tax filing assistance, and financial automation - all compliant with Qatar's MOCI, QFC, and QCB regulatory requirements."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can you automate our company's financial workflows?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. We build custom financial automation including automated invoicing, expense tracking, recurring transaction engines, AP/AR management, and real-time dashboards that can reduce manual bookkeeping by up to 80%."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do you provide visa assistance in Qatar?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. We support founders, employees, and business teams with visa readiness checklists, document review, coordination, renewal planning, and business mobility support."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can you help with business formation and company setup?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. We help compare setup routes, organize documents, prepare licensing checklists, coordinate company formation steps, and connect setup with visa, finance, website, and launch priorities."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is the AI Business Advisor tool?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our AI Business Advisor is a proprietary tool powered by Google Gemini that provides automated business analysis, market insights, and strategic recommendations. It's free to use on our website."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How do I get started with a project?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Reach out via WhatsApp at +974 5585 5221, email admin@onesmartbiz.pro, or use our pricing calculator. We'll schedule a free discovery call to discuss your goals and provide a formal proposal."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What are your payment terms?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We require a 30-50% deposit before project commencement. Progress payments are tied to milestones, and the final balance is due upon delivery. All payments are in QAR with optional USD and PHP conversions."
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
