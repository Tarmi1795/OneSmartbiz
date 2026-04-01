import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog | Digital Insights for Qatar Businesses | One Smart Biz",
  description: "Expert articles on web development, video production, SEO, and financial automation for businesses in Qatar and the GCC.",
  keywords: "qatar business blog, digital marketing qatar, technology doha, web development tips",
  openGraph: {
    title: "Blog | One Smart Biz Qatar",
    description: "Expert articles on web development, video production, SEO, and financial automation for Qatar businesses.",
    url: "https://www.onesmartbiz.pro/blog",
    type: "website",
  },
};

const posts = [
  {
    slug: "web-development-doha-guide-2026",
    title: "Web Development in Doha: The Complete 2026 Guide for Qatar Businesses",
    excerpt: "Everything you need to know about building a high-performance website in Doha, Qatar. Costs, technologies, timelines, and how to choose the right partner.",
    date: "2026-04-01",
    category: "Web Development",
  },
  {
    slug: "video-production-qatar-social-media",
    title: "Video Production in Qatar: How to Create Content That Goes Viral on Social Media",
    excerpt: "How Qatar businesses are using professional video production and VFX to dominate social media. Costs, formats, and proven strategies.",
    date: "2026-04-01",
    category: "Multimedia",
  },
  {
    slug: "financial-automation-qatar-business",
    title: "Financial Automation for Qatar Businesses: Save 20+ Hours Per Month",
    excerpt: "How Qatar companies are automating invoice processing, bookkeeping, and VAT compliance to cut costs by 80%.",
    date: "2026-04-01",
    category: "Financial Services",
  },
  {
    slug: "start-business-qatar-step-by-step",
    title: "How to Start a Business in Qatar: Step-by-Step Guide (2026)",
    excerpt: "Complete guide to starting a business in Qatar. Company registration, licensing, office setup, and everything you need to launch.",
    date: "2026-04-01",
    category: "Business",
  },
  {
    slug: "seo-company-qatar-what-to-look-for",
    title: "How to Choose an SEO Company in Qatar: 7 Questions to Ask Before Hiring",
    excerpt: "Not all SEO agencies deliver results. Here are 7 critical questions to ask before hiring an SEO company in Doha.",
    date: "2026-04-01",
    category: "SEO",
  },
];

import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function BlogPage() {
  return (
    <>
      <Nav />
      <main className="min-h-screen bg-black text-white pt-20">
        <div className="max-w-4xl mx-auto px-6 py-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "var(--font-orbitron)" }}>
            Digital Insights
          </h1>
        <p className="text-gray-400 text-lg mb-12">
          Expert articles on web development, video production, SEO, and financial automation for businesses in Qatar and the GCC.
        </p>
        <div className="space-y-8">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block border border-gray-800 rounded-lg p-6 hover:border-cyan-500/50 transition-colors"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs text-cyan-400 uppercase tracking-wider">{post.category}</span>
                <span className="text-xs text-gray-600">•</span>
                <span className="text-xs text-gray-500">{post.date}</span>
              </div>
              <h2 className="text-xl font-semibold mb-2 hover:text-cyan-400 transition-colors">
                {post.title}
              </h2>
              <p className="text-gray-400 text-sm">{post.excerpt}</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
      <Footer />
    </>
  );
}
