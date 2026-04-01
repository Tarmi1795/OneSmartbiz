import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

// Blog post metadata registry
const posts: Record<string, { title: string; description: string; keywords: string; date: string; category: string; content: string[] }> = {
  "web-development-doha-guide-2026": {
    title: "Web Development in Doha: The Complete 2026 Guide for Qatar Businesses",
    description: "Everything you need to know about building a high-performance website in Doha, Qatar. Costs, technologies, timelines, and how to choose the right partner.",
    keywords: "web development doha, website design qatar, web developer qatar, website cost qatar",
    date: "2026-04-01",
    category: "Web Development",
    content: [
      "Your website is your digital storefront in Qatar's rapidly growing economy. Whether you're a startup in Lusail or an established enterprise in West Bay, your online presence directly impacts revenue.",
      "## Why Web Development Matters More Than Ever in Qatar",
      "Qatar's digital economy is projected to reach **$5.7 billion by 2026**. With the government's Smart Qatar initiative pushing digital transformation across every sector, businesses without a strong web presence are falling behind.",
      "- **94% of Qatar residents** use the internet daily",
      "- **68% of B2B purchases** in the GCC start with a Google search",
      "- **Mobile traffic accounts for 73%** of all web visits in Doha",
      "## How Much Does a Website Cost in Qatar?",
      "| Type | Price Range (QAR) | Timeline |",
      "|------|-------------------|----------|",
      "| Landing Page | 2,000 - 5,000 | 1-2 weeks |",
      "| Business Website | 5,000 - 15,000 | 2-4 weeks |",
      "| E-Commerce | 15,000 - 50,000 | 4-8 weeks |",
      "| Custom Web App | 50,000 - 200,000+ | 8-16 weeks |",
      "## What Technology Stack Should You Choose?",
      "**For most businesses:** Next.js + React — Blazing fast, SEO-friendly, scales from startup to enterprise.",
      "**For e-commerce:** Next.js + Shopify headless — Handles Qatar payment gateways, Arabic RTL support, VAT compliance.",
      "**For mobile apps:** React Native — One codebase for iOS + Android, faster time-to-market.",
      "## How to Choose a Web Development Partner in Doha",
      "Look for: Portfolio with Qatar/GCC clients, performance metrics, post-launch support, local presence, and full-stack capability.",
      "## The One Smart Biz Approach",
      "We've delivered 150+ projects across Qatar and the GCC with **<1.2s average load time**, **98/100 SEO scores**, and **React, Next.js, TypeScript** — modern stack, future-proof.",
    ],
  },
  "video-production-qatar-social-media": {
    title: "Video Production in Qatar: How to Create Content That Goes Viral on Social Media",
    description: "How Qatar businesses are using professional video production and VFX to dominate social media. Costs, formats, and proven strategies.",
    keywords: "video production qatar, VFX doha, social media video qatar, content creation doha",
    date: "2026-04-01",
    category: "Multimedia",
    content: [
      "In Qatar's competitive digital landscape, video isn't optional — it's the primary currency of attention.",
      "## The State of Video in Qatar (2026)",
      "- **85% of Qatar's internet traffic** is video",
      "- **Reels and short-form video** get 2.5x more engagement than static posts",
      "- **Arabic-first video content** outperforms English by 40% in local reach",
      "- **B2B video** on LinkedIn generates 5x more engagement than text posts",
      "## Types of Video Content That Work in Qatar",
      "**1. Brand Films (2-3 minutes)** — Premium storytelling for company profiles, investor presentations, website hero sections.",
      "**2. Social Media Reels (15-60 seconds)** — Before/After transformations, behind-the-scenes, quick tips, trending audio with local twist.",
      "**3. Product Demos & Explainers** — Software walkthroughs, service explanations, process visualizations.",
      "## What Does Video Production Cost in Qatar?",
      "| Type | Price Range (QAR) |",
      "|------|-------------------|",
      "| Social Media Reel | 500 - 2,000 |",
      "| Product Video | 3,000 - 8,000 |",
      "| Brand Film | 10,000 - 50,000 |",
      "| Full Campaign | 30,000 - 150,000 |",
      "## Results We've Delivered",
      "- **+340%** average view rate increase",
      "- **+62%** brand lift",
      "- **2.1 million** organic views on a single brand film (no paid media)",
    ],
  },
  "financial-automation-qatar-business": {
    title: "Financial Automation for Qatar Businesses: Save 20+ Hours Per Month",
    description: "How Qatar companies are automating invoice processing, bookkeeping, and VAT compliance to cut costs by 80%.",
    keywords: "financial services qatar, bookkeeping doha, tax filing qatar, financial automation qatar",
    date: "2026-04-01",
    category: "Financial Services",
    content: [
      "Manual financial processes are costing Qatar businesses thousands of riyals annually — not in direct expenses, but in lost time, compliance risk, and missed insights.",
      "## The Hidden Cost of Manual Finance in Qatar",
      "For a typical SME in Doha with 20-50 employees:",
      "- Invoice processing: 15-25 hrs/month → QAR 3,000-5,000",
      "- Bank reconciliation: 8-12 hrs/month → QAR 1,600-2,400",
      "- Financial reporting: 10-15 hrs/month → QAR 2,000-3,000",
      "- VAT compliance: 5-8 hrs/month → QAR 1,000-1,600",
      "- **Total: 38-60 hrs/month = QAR 91,000 - 144,000/year**",
      "## ROI of Financial Automation",
      "- Invoice processing time: **-80%** (25 hrs → 5 hrs/month)",
      "- Reporting errors: **-92%** (12/quarter → 1/quarter)",
      "- Month-end close: **-70%** (10 days → 3 days)",
      "- Audit preparation: **-80%** (2 weeks → 2 days)",
      "## Qatar-Specific Considerations",
      "Qatar's 5% VAT requires proper invoice formatting per QTA standards, quarterly filing, and digital record retention for 10 years. QFC and mainland entities have different compliance frameworks.",
      "## Why One Smart Biz for Financial Services",
      "We're not just accountants — we're engineers. Deep Qatar regulatory knowledge + technology-first approach + 100% accuracy record.",
    ],
  },
  "start-business-qatar-step-by-step": {
    title: "How to Start a Business in Qatar: Step-by-Step Guide (2026)",
    description: "Complete guide to starting a business in Qatar. Company registration, licensing, office setup, and everything you need to launch.",
    keywords: "start business qatar, company registration doha, business setup qatar, QFC registration",
    date: "2026-04-01",
    category: "Business",
    content: [
      "Qatar's economy is booming — and the barrier to entry for new businesses has never been lower.",
      "## Why Start a Business in Qatar?",
      "- **0% personal income tax**",
      "- **Strategic location** — gateway to 2+ billion consumers across MEASA",
      "- **$88,000 GDP per capita** — one of the world's highest",
      "- **Qatar National Vision 2030** — massive government investment in diversification",
      "## Step 1: Choose Your Business Structure",
      "| Structure | Ownership | Min Capital |",
      "|-----------|-----------|-------------|",
      "| WLL | Up to 50% foreign | QAR 200,000 |",
      "| QFC Company | 100% foreign | Varies |",
      "| Free Zone | 100% foreign | Varies |",
      "| Branch Office | 100% foreign | None |",
      "## Step 2: Register Your Company",
      "**Mainland (MOCI):** Reserve trade name → Draft Articles of Association → Notarize → Deposit capital → Register → Obtain computer card.",
      "**QFC:** Apply online at qfc.qa → Submit documents → Pay fee → Obtain license (2-4 weeks).",
      "## Step 3: Build Your Digital Presence",
      "Professional website + Google Business Profile + Social media + Financial systems.",
      "## Common Mistakes to Avoid",
      "1. Choosing the wrong structure (QFC vs mainland matters)",
      "2. Skipping digital setup (68% of consumers research online)",
      "3. Ignoring Arabic (bilingual is essential)",
      "4. Manual finance from day one (automate bookkeeping)",
    ],
  },
  "seo-company-qatar-what-to-look-for": {
    title: "How to Choose an SEO Company in Qatar: 7 Questions to Ask Before Hiring",
    description: "Not all SEO agencies deliver results. Here are 7 critical questions to ask before hiring an SEO company in Doha.",
    keywords: "SEO company qatar, SEO agency doha, SEO services qatar, digital marketing qatar",
    date: "2026-04-01",
    category: "SEO",
    content: [
      "Qatar has 60+ agencies claiming to do SEO. Most deliver reports, not results. Here's how to tell the difference.",
      "## The Qatar SEO Landscape in 2026",
      "- **Bilingual search** — Arabic and English keywords both matter",
      "- **Local intent dominates** — 'near me' searches growing 40% YoY",
      "- **Mobile-first** — 73% of Qatar searches on mobile",
      "- **Low competition niches** — many industries still have weak SEO",
      "## 7 Questions to Ask Any SEO Company",
      "**1. Show me a case study with measurable results** — Want before/after data. Red flag: vague claims.",
      "**2. What's your approach to bilingual SEO?** — Want Arabic + English strategy. Red flag: just translating.",
      "**3. How do you handle technical SEO?** — Want Core Web Vitals, schema, site architecture. Red flag: only content + backlinks.",
      "**4. What reporting do you provide?** — Want monthly reports with conversions. Red flag: vanity metrics only.",
      "**5. What's your link building strategy?** — Want local directories + guest posts. Red flag: buying links or PBNs.",
      "**6. How long until I see results?** — Want: 3-6 months. Red flag: 'guaranteed #1 in 30 days'.",
      "**7. What happens if I cancel?** — Want: you keep everything. Red flag: they own your content.",
      "## What Real Results Look Like",
      "Month 1: Technical fixes. Month 3: +40-80% organic traffic. Month 6: +150-300% traffic, 50-100 keywords ranking.",
    ],
  },
};

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) return {};

  return {
    title: `${post.title} | One Smart Biz`,
    description: post.description,
    keywords: post.keywords,
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://www.onesmartbiz.pro/blog/${slug}`,
      type: "article",
      publishedTime: post.date,
      authors: ["One Smart Biz"],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

export async function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }));
}

import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) notFound();

  return (
    <>
      <Nav />
      <main className="min-h-screen bg-black text-white pt-20">
        <article className="max-w-3xl mx-auto px-6 py-20">
        <Link href="/blog" className="text-cyan-400 text-sm hover:underline mb-8 block">← Back to Blog</Link>

        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs text-cyan-400 uppercase tracking-wider">{post.category}</span>
          <span className="text-xs text-gray-600">•</span>
          <span className="text-xs text-gray-500">{post.date}</span>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold mb-8" style={{ fontFamily: "var(--font-orbitron)" }}>
          {post.title}
        </h1>

        <div className="prose prose-invert prose-cyan max-w-none">
          {(() => {
            const elements: React.ReactNode[] = [];
            let i = 0;
            while (i < post.content.length) {
              const block = post.content[i];
              const key = `block-${i}`;

              // Headings
              if (block.startsWith("## ")) {
                elements.push(<h2 key={key} className="text-2xl font-bold mt-10 mb-4 text-white">{block.replace("## ", "")}</h2>);
                i++;
                continue;
              }

              // Tables
              if (block.startsWith("|")) {
                const tableLines: string[] = [];
                while (i < post.content.length && post.content[i].startsWith("|")) {
                  tableLines.push(post.content[i]);
                  i++;
                }
                const rows = tableLines.filter((l) => !l.match(/^\|[-\s|]+\|$/));
                const headers = rows[0]?.split("|").filter(Boolean).map((h) => h.trim()) || [];
                const dataRows = rows.slice(1);
                elements.push(
                  <div key={key} className="overflow-x-auto my-6">
                    <table className="min-w-full border border-gray-800 text-sm">
                      <thead>
                        <tr className="border-b border-gray-800">
                          {headers.map((h, j) => (
                            <th key={j} className="px-4 py-2 text-left text-cyan-400 font-semibold">{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {dataRows.map((row, j) => (
                          <tr key={j} className="border-b border-gray-800/50">
                            {row.split("|").filter(Boolean).map((cell, k) => (
                              <td key={k} className="px-4 py-2 text-gray-300">{cell.trim()}</td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                );
                continue;
              }

              // Bullet lists
              if (block.startsWith("- ")) {
                const items: string[] = [];
                while (i < post.content.length && post.content[i].startsWith("- ")) {
                  items.push(post.content[i]);
                  i++;
                }
                elements.push(
                  <ul key={key} className="list-disc list-inside space-y-2 text-gray-300 my-4">
                    {items.map((item, j) => (
                      <li key={j} dangerouslySetInnerHTML={{ __html: item.replace(/^- /, "").replace(/\*\*(.*?)\*\*/g, "<strong class='text-white'>$1</strong>") }} />
                    ))}
                  </ul>
                );
                continue;
              }

              // Bold-only lines
              if (block.startsWith("**") && block.endsWith("**") && !block.includes(" — ")) {
                elements.push(<p key={key} className="font-semibold text-white mt-6 mb-2">{block.replace(/\*\*/g, "")}</p>);
                i++;
                continue;
              }

              // Regular paragraphs (with inline bold)
              elements.push(
                <p
                  key={key}
                  className="text-gray-300 leading-relaxed my-4"
                  dangerouslySetInnerHTML={{ __html: block.replace(/\*\*(.*?)\*\*/g, "<strong class='text-white'>$1</strong>") }}
                />
              );
              i++;
            }
            return elements;
          })()}
        </div>

        <div className="mt-16 border-t border-gray-800 pt-8">
          <p className="text-gray-400 mb-4">Ready to get started?</p>
          <Link
            href="/calculator"
            className="inline-block bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Get a Free Quote →
          </Link>
        </div>
      </article>
    </main>
    <Footer />
  </>
);
}
