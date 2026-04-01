"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { AnimatedMarqueeHero } from "./ui/hero-3";

const projects = [
  {
    id: "tarmi-fintrack",
    title: "Tarmi Fintrack",
    category: "Apps",
    description: "Enterprise-grade financial intelligence and asset tracking solution for Qatar-based businesses. Built with a high-performance golden-glow UI for precise financial management.",
    image: "https://iili.io/qNzbC1S.png",
    link: "https://fintrack.onesmartbiz.pro/",
  },
  {
    id: "showreel-2024",
    title: "Pallete Marketing Explanatory",
    category: "Video",
    description: "A comprehensive showcase of motion graphics, cinematic editing, and AI-enhanced visual storytelling techniques.",
    image: "https://iili.io/ftJysus.png",
    videoUrl: "https://www.youtube.com/embed/zq9VvydAs10",
  },
  {
    id: "efrenbilliards-site",
    title: "Efren Billiards",
    category: "Web Design",
    description: "A premium digital archive and community portal for the Efren Reyes legacy, featuring technical tournament analysis and sports history within the billiard community.",
    image: "https://iili.io/qhq6H0B.png",
    link: "https://efrenbilliards.com/",
  },
  {
    id: "detroitparis",
    title: "detroitparis",
    category: "Web Design",
    description: "Professional corporate platform designed for business consultancy services, focusing on user journey and conversion.",
    image: "https://iili.io/qN3rHdJ.png",
    link: "https://www.detroit.paris/",
  },
  {
    id: "1",
    title: "Well Driven Identity",
    category: "Branding",
    description: "A complete brand overhaul using generative tools to create unique visual assets reducing time-to-market.",
    image: "https://iili.io/ftdWO4n.jpg",
  },
  {
    id: "3",
    title: "UGC Marketing",
    category: "Video",
    description: "High-end video generation of UGC video as product review using cutting edge AI models.",
    image: "https://iili.io/ftdSi22.png",
    videoUrl: "https://streamable.com/e/ausch4?autoplay=1",
  },
  {
    id: "iertqa",
    title: "iertqa",
    category: "Web Design",
    description: "A premium digital solution combining high-end web development with responsive architecture.",
    image: "https://iili.io/qNFYs8x.png",
    link: "https://www.iertqa.com/",
  },
  {
    id: "billing-automation",
    title: "End-to-end Billing",
    category: "Automation",
    description: "A fully automated billing solution that synchronizes invoices, payments, and financial records with 99.9% accuracy.",
    image: "https://iili.io/qNTdahF.png",
  },
  {
    id: "call-whatsapp-agent",
    title: "Call & Whatsapp Agent",
    category: "Automation",
    description: "Intelligent AI agents capable of handling incoming calls and WhatsApp messages with natural language processing.",
    image: "https://iili.io/qNT9eBj.png",
  }
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter((p) => p.category === activeCategory);

  return (
    <div id="portfolio" className="bg-[#0a0a0f]">
      <AnimatedMarqueeHero
        tagline="module_02 :: projects"
        title={<>Selected <span className="neon-text">Works</span></>}
        description="Visual Innovation Projects & industry case study repertoire to showcase technical capabilities and aesthetic direction."
        ctaText="View Portfolio"
        items={filteredProjects}
        className="pb-28 pt-20 border-t border-[#1a1a1a]"
      >
        {/* Category Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all duration-300 border",
                activeCategory === category
                  ? "bg-[#00ff88] text-[#0a0a0f] border-[#00ff88] shadow-[0_0_15px_#00ff8840]"
                  : "bg-transparent text-white/60 border-white/10 hover:border-[#00ff88]/50 hover:text-white"
              )}
              style={{ fontFamily: 'var(--font-sharetech), monospace' }}
            >
              {category}
            </button>
          ))}
        </div>
      </AnimatedMarqueeHero>
    </div>
  );
}
