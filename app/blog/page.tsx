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
  {
    slug: "best-website-design-companies-qatar-2026",
    title: "Best Website Design Companies in Qatar: Top 5 Agencies for 2026",
    excerpt: "A curated list of the top website design agencies in Doha, Qatar. See why OneSmartBiz is leading the market in performance and high-end aesthetics.",
    date: "2026-04-04",
    category: "Web Development",
  },
  {
    slug: "choosing-platform-small-business-websites-guide",
    title: "Choosing a Platform for Small Business Websites: 2026 Comparison Guide",
    excerpt: "Should you use WordPress, Shopify, or a custom Next.js build? We compare the best platforms for small businesses in Qatar.",
    date: "2026-04-04",
    category: "Web Development",
  },
  {
    slug: "top-website-design-software-drag-drop-2026",
    title: "Top Website Design Software with Drag-and-Drop Features for 2026",
    excerpt: "The best tools for building websites without deep coding knowledge, and when it's time to upgrade to a professional custom solution.",
    date: "2026-04-04",
    category: "Design",
  },
  {
    slug: "mobile-first-web-layout-best-practices",
    title: "Mobile-First Web Layouts: Best Practices for 2026 UX",
    excerpt: "Why mobile-first design is non-negotiable in Qatar and the essential best practices for high-converting responsive layouts.",
    date: "2026-04-04",
    category: "Design",
  },
  {
    slug: "cost-build-custom-website-qatar",
    title: "Average Cost to Build a Custom Website in Qatar: 2026 Pricing Report",
    excerpt: "Breakdown of the investment required for custom web development in Doha. From landing pages to enterprise-level platforms.",
    date: "2026-04-04",
    category: "Web Development",
  },
  {
    slug: "professional-website-designers-doha-near-me",
    title: "Website Designer Near Me: Where to Find Professionals in Doha",
    excerpt: "A guide to finding and vetting the best local website designers in Qatar for your next project.",
    date: "2026-04-04",
    category: "Business",
  },
  {
    slug: "how-to-design-website-yourself-2026-guide",
    title: "How to Design a Website by Yourself: The 2026 DIY Guide",
    excerpt: "Step-by-step instructions for entrepreneurs in Qatar looking to build their first digital presence without an agency.",
    date: "2026-04-04",
    category: "Design",
  },
  {
    slug: "cost-20-page-website-qatar-breakdown",
    title: "How Much is a 20-Page Website in Qatar? Detailed Pricing Breakdown",
    excerpt: "Analysis of the investment required for mid-sized corporate websites in Doha. From content creation to advanced SEO.",
    date: "2026-04-04",
    category: "Web Development",
  },
  {
    slug: "build-vs-buy-website-cost-analysis-qatar",
    title: "Is it Cheaper to Build Your Own Website? Build vs. Buy Analysis",
    excerpt: "The true cost of DIY vs. hiring a professional agency in Qatar. Hidden expenses, time investment, and ROI compared.",
    date: "2026-04-04",
    category: "Business",
  },
  {
    slug: "middle-east-website-design-trends-2026",
    title: "Top Trends in Middle East Website Design for 2026: Why You Need a Local Expert",
    excerpt: "Explore the latest trends in Middle East website design for 2026, including mobile-first strategies, cultural localization, and AI-driven personalization.",
    date: "2026-04-08",
    category: "Design",
  },
];

import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { BlogListingClient } from "@/components/ui/blog-client";

export default function BlogPage() {
  return (
    <>
      <Nav />
      <main className="min-h-screen bg-[#0a0a0f] text-white pt-24 overflow-hidden">
        <BlogListingClient posts={posts} />

        {/* Decorative Elements */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute top-1/4 -right-1/4 w-[500px] h-[500px] bg-cyan-500/5 blur-[120px] rounded-full animate-pulse" />
          <div className="absolute bottom-1/4 -left-1/4 w-[500px] h-[500px] bg-purple-500/5 blur-[120px] rounded-full" />
        </div>
      </main>
      <Footer />
    </>
  );
}
