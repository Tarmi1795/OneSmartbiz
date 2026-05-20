"use client";

import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqCategories = [
  { id: "all", label: "All" },
  { id: "web", label: "Web & App" },
  { id: "social", label: "Social" },
  { id: "automation", label: "AI & Automation" },
  { id: "media", label: "Multimedia" },
  { id: "finance", label: "Finance" },
  { id: "setup", label: "Visa & Setup" },
  { id: "general", label: "General" },
];

const faqs = [
  {
    category: "general",
    question: "What digital services does One Smart Biz offer in Qatar?",
    answer:
      "We provide seven core service areas: Web & App Development, Multimedia & VFX Production, Social Media Management, AI & Automation Services, Financial Services, VISA Assistance, and Business Formation. All services are tailored specifically for Qatar's business and regulatory landscape.",
  },
  {
    category: "general",
    question: "What makes One Smart Biz different from other digital agencies in Qatar?",
    answer:
      "We combine engineering, creative, social media, AI automation, financial, visa, and company setup services under one roof - eliminating the need for multiple vendors. Our projects deliver sub-1.2s load times, 98/100 SEO scores, and we've completed 150+ projects with a 98% client satisfaction rate.",
  },
  {
    category: "general",
    question: "Do you work with businesses outside of Qatar?",
    answer:
      "Yes. While we are headquartered in Doha, Qatar, we serve clients across the entire GCC region - Saudi Arabia, UAE, Bahrain, Kuwait, and Oman - as well as international clients. All project coordination is handled digitally with structured milestone check-ins.",
  },
  {
    category: "web",
    question: "How much does website development cost in Qatar?",
    answer:
      "Website development in Qatar can start from QAR 750 for a focused landing page, QAR 1,500-4,500 for a professional business website, and QAR 4,500-9,500 for e-commerce. Custom web apps with dashboards, APIs, or advanced workflows typically start from QAR 9,500+. The exact cost depends on pages, content, integrations, and launch requirements.",
  },
  {
    category: "web",
    question: "How long does it take to build a website?",
    answer:
      "A standard business website takes 2-4 weeks. Custom web applications typically take 6-12 weeks depending on scope and complexity. We've delivered full React Native mobile apps in as little as 8 weeks. Every project begins with a discovery phase where we define exact timelines and milestones.",
  },
  {
    category: "web",
    question: "What technologies do you use for web development?",
    answer:
      "We specialize in modern, high-performance stacks: React and Next.js for web applications, React Native for cross-platform mobile apps, Node.js and Python for backend services, and Supabase/PostgreSQL for databases. All sites are deployed on edge networks (Vercel, Cloudflare) for global performance.",
  },
  {
    category: "web",
    question: "Do you provide website maintenance and support after launch?",
    answer:
      "Yes. Post-launch support is available at QR 100/hour and covers content updates, plugin and dependency management, security patches, and technical support. We also offer retainer maintenance packages for ongoing care. Support does not cover issues caused by unauthorized third-party modifications.",
  },
  {
    category: "web",
    question: "Can you redesign my existing website?",
    answer:
      "Absolutely. We regularly perform full redesigns and migrations - whether you're on WordPress, Wix, Squarespace, or a legacy system. We handle content migration, SEO preservation, and deploy on a modern stack that dramatically improves performance and user experience.",
  },
  {
    category: "media",
    question: "What types of video production services do you offer?",
    answer:
      "We offer corporate videos, product showcases, social media content (Reels, TikTok, YouTube Shorts), brand films, event coverage, motion graphics, 2D/3D animation, and VFX compositing. All production is handled in-house from pre-production through final delivery.",
  },
  {
    category: "media",
    question: "How much does video production cost in Qatar?",
    answer:
      "Video production costs vary by scope. A social media video package starts from QAR 2,000, corporate brand films from QAR 8,000, and full VFX-grade productions from QAR 15,000+. Contact us with your brief for a tailored quote.",
  },
  {
    category: "media",
    question: "Can you create content for social media marketing?",
    answer:
      "Yes. We produce scroll-stopping content optimized for every major platform - Instagram Reels, TikTok, YouTube Shorts, and LinkedIn Video. We handle scripting, filming, editing, motion graphics, and can work with your marketing team on content calendars.",
  },
  {
    category: "social",
    question: "Do you manage social media accounts for Qatar businesses?",
    answer:
      "Yes. We provide social media strategy, monthly content calendars, branded posts, reels coordination, publishing support, community touchpoints, paid campaign coordination, and performance reporting.",
  },
  {
    category: "automation",
    question: "What AI and automation services do you build?",
    answer:
      "We build practical AI assistants, workflow automations, dashboards, CRM handoffs, lead intake systems, document workflows, reporting automations, and integrations that reduce repetitive manual work.",
  },
  {
    category: "finance",
    question: "Does One Smart Biz provide financial services for Qatar companies?",
    answer:
      "Yes. We offer comprehensive financial services including audit preparation, financial statement generation, bookkeeping, tax filing assistance, and financial automation - all compliant with Qatar's MOCI, QFC, and QCB regulatory requirements.",
  },
  {
    category: "finance",
    question: "Can you automate our company's financial workflows?",
    answer:
      "Absolutely. We build custom financial automation systems including automated invoicing, expense tracking, recurring transaction engines, accounts payable/receivable management, and real-time financial dashboards. Our systems integrate with popular accounting platforms and can reduce manual bookkeeping work by up to 80%.",
  },
  {
    category: "finance",
    question: "What is the AI Business Advisor tool?",
    answer:
      "Our AI Business Advisor is a proprietary tool powered by Google Gemini that provides automated business analysis, market insights, and strategic recommendations based on the data you input. It's available for free on our website. Please note that results are for informational purposes only and should not replace professional financial advice.",
  },
  {
    category: "setup",
    question: "Do you provide visa assistance in Qatar?",
    answer:
      "Yes. We support founders, employees, and business teams with visa readiness checklists, document review, application coordination, renewal planning, and business mobility support. We cannot guarantee government approval, but we help reduce avoidable delays by making the file complete and organized.",
  },
  {
    category: "setup",
    question: "Can you help with business formation and company setup?",
    answer:
      "Yes. We help compare setup routes, organize documents, prepare licensing checklists, coordinate company formation steps, and connect setup with visa, finance, website, and launch priorities.",
  },
  {
    category: "general",
    question: "How do I get started with a project?",
    answer:
      "Simply reach out via our WhatsApp at +974 5585 5221, email admin@onesmartbiz.pro, or use the pricing calculator on our website. We'll schedule a free discovery call where we discuss your goals, scope the project, and provide a formal proposal with a detailed timeline and cost breakdown.",
  },
  {
    category: "general",
    question: "What are your payment terms?",
    answer:
      "We typically require a 30-50% deposit before project commencement. Progress payments are tied to agreed milestones, and the final balance is due upon project delivery and acceptance. All payments are in QAR (Qatari Riyal) with optional USD and PHP conversions available.",
  },
];

function FAQItem({ faq, index }: { faq: typeof faqs[0]; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      layout
    >
      <button
        id={`faq-item-${index}`}
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left group"
      >
        <div
          className={`relative p-5 md:p-6 border transition-all duration-300 ${isOpen
            ? "bg-[#12121a] border-[#00ff88]/30 shadow-[0_0_30px_rgba(0,255,136,0.05)]"
            : "bg-[#0c0c14] border-[#1a1a2e] hover:border-[#2a2a4a] hover:bg-[#10101a]"
            }`}
          style={{
            clipPath:
              "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))",
          }}
        >
          {/* Corner accents */}
          <div
            className={`absolute top-0 right-0 w-3 h-3 border-r border-t transition-colors duration-300 ${isOpen ? "border-[#00ff88]/50" : "border-[#2a2a4a]"
              }`}
          />
          <div
            className={`absolute bottom-0 left-0 w-3 h-3 border-l border-b transition-colors duration-300 ${isOpen ? "border-[#00ff88]/50" : "border-[#2a2a4a]"
              }`}
          />

          <div className="flex items-start justify-between gap-4">
            <div className="flex items-start gap-3 md:gap-4">
              <span
                className={`font-mono text-[10px] mt-1.5 tracking-wider transition-colors duration-300 shrink-0 ${isOpen ? "text-[#00ff88]" : "text-[#333]"
                  }`}
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3
                className={`text-sm md:text-base font-medium transition-colors duration-300 ${isOpen ? "text-white" : "text-[#999] group-hover:text-white"
                  }`}
                style={{ fontFamily: "var(--font-inter), sans-serif" }}
              >
                {faq.question}
              </h3>
            </div>

            {/* Toggle icon */}
            <div
              className={`shrink-0 mt-1 w-6 h-6 border flex items-center justify-center transition-all duration-300 ${isOpen
                ? "border-[#00ff88]/40 bg-[#00ff88]/10 rotate-45"
                : "border-[#2a2a4a] group-hover:border-[#444]"
                }`}
              style={{
                clipPath:
                  "polygon(0 0, calc(100% - 4px) 0, 100% 4px, 100% 100%, 0 100%)",
              }}
            >
              <svg
                viewBox="0 0 12 12"
                className={`w-3 h-3 transition-colors duration-300 ${isOpen ? "text-[#00ff88]" : "text-[#555]"
                  }`}
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <line x1="6" y1="2" x2="6" y2="10" />
                <line x1="2" y1="6" x2="10" y2="6" />
              </svg>
            </div>
          </div>

          {/* Answer */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="pt-4 mt-4 border-t border-[#1a1a2e]">
                  <p
                    className="text-[#888] text-sm leading-relaxed pl-7 md:pl-10"
                    style={{ fontFamily: "var(--font-inter), sans-serif" }}
                  >
                    {faq.answer}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </button>
    </motion.div>
  );
}

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredFaqs =
    activeCategory === "all"
      ? faqs
      : faqs.filter((faq) => faq.category === activeCategory);

  return (
    <>
      <Nav />
      <main className="min-h-screen pt-24 md:pt-28 pb-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          {/* Header */}
          <div className="mb-12">
            <Link
              href="/"
              className="text-xs text-[#00ff88] hover:underline mb-4 inline-block"
              style={{ fontFamily: "var(--font-sans), sans-serif" }}
            >
              Back to Home
            </Link>

            <div className="flex items-center gap-3 mt-2 mb-3">
              <div className="w-8 h-px bg-[#00ff88]" />
              <span className="font-mono text-[10px] text-[#00ff88] tracking-[0.3em] uppercase">
                Knowledge Base
              </span>
            </div>

            <h1
              className="text-3xl md:text-5xl font-bold text-white uppercase tracking-wide"
              style={{ fontFamily: "var(--font-orbitron), sans-serif" }}
            >
              Frequently Asked{" "}
              <span className="text-[#00ff88]">Questions</span>
            </h1>

            <p
              className="text-[#666] text-sm md:text-base mt-4 max-w-2xl leading-relaxed"
              style={{ fontFamily: "var(--font-inter), sans-serif" }}
            >
              Everything you need to know about our services, pricing, and
              process. Can&apos;t find what you&apos;re looking for? Reach out
              to our team directly.
            </p>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 mb-10">
            {faqCategories.map((cat) => (
              <button
                key={cat.id}
                id={`faq-filter-${cat.id}`}
                onClick={() => setActiveCategory(cat.id)}
                className={`font-mono text-[10px] tracking-widest uppercase px-4 py-2 border transition-all duration-300 ${activeCategory === cat.id
                  ? "bg-[#00ff88]/10 border-[#00ff88]/40 text-[#00ff88] shadow-[0_0_15px_rgba(0,255,136,0.1)]"
                  : "bg-transparent border-[#1a1a2e] text-[#555] hover:border-[#333] hover:text-[#888]"
                  }`}
                style={{
                  clipPath:
                    "polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 0 100%)",
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* FAQ List */}
          <div className="flex flex-col gap-3">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="flex flex-col gap-3"
              >
                {filteredFaqs.map((faq, i) => (
                  <FAQItem key={faq.question} faq={faq} index={i} />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16 relative"
          >
            <div
              className="p-8 md:p-10 border border-[#1a1a2e] bg-[#0c0c14] relative overflow-hidden"
              style={{
                clipPath:
                  "polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px))",
              }}
            >
              {/* Glow */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-[radial-gradient(circle,rgba(0,255,136,0.06),transparent_70%)]" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-[radial-gradient(circle,rgba(0,212,255,0.04),transparent_70%)]" />

              <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 bg-[#00ff88] rounded-full animate-pulse" />
                    <span className="font-mono text-[10px] text-[#00ff88] tracking-widest uppercase">
                      Still have questions?
                    </span>
                  </div>
                  <h3
                    className="text-xl md:text-2xl font-bold text-white"
                    style={{
                      fontFamily: "var(--font-orbitron), sans-serif",
                    }}
                  >
                    Let&apos;s Talk
                  </h3>
                  <p className="text-[#666] text-sm mt-2 max-w-md">
                    Our team is ready to help you with any questions about our
                    services, pricing, or process.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://wa.me/97431308665"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs tracking-wider uppercase px-6 py-3 bg-[#00ff88]/10 border border-[#00ff88]/30 text-[#00ff88] hover:bg-[#00ff88]/20 transition-all duration-300 text-center"
                    style={{
                      clipPath:
                        "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 0 100%)",
                    }}
                  >
                    WhatsApp Us
                  </a>
                  <a
                    href="mailto:admin@onesmartbiz.pro"
                    className="font-mono text-xs tracking-wider uppercase px-6 py-3 border border-[#2a2a4a] text-[#888] hover:border-[#444] hover:text-white transition-all duration-300 text-center"
                    style={{
                      clipPath:
                        "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 0 100%)",
                    }}
                  >
                    Email Us
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}
