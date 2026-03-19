"use client";

import { useState } from "react";

const projects = [
  {
    id: "tarmi-fintrack",
    title: "Tarmi Fintrack",
    category: "Apps",
    description: "Personal finance Web app with mobile wrapper featuring real-time tracking, golden-glow UI, and comprehensive financial management.",
    image: "https://iili.io/qNzbC1S.png",
    link: "https://fintrack.onesmartbiz.pro/",
    tags: ["Fintech", "Web App", "Gold UI", "PWA"],
    color: "#D4AF37",
    year: "2024",
    status: "LIVE"
  },
  {
    id: "showreel-2024",
    title: "Pallete Marketing Explanatory",
    category: "Video Production",
    description: "A comprehensive showcase of motion graphics, cinematic editing, and AI-enhanced visual storytelling techniques.",
    image: "https://iili.io/ftJysus.png",
    videoUrl: "https://www.youtube.com/embed/zq9VvydAs10",
    tags: ["Higgsfield Studio", "After Effects", "AI Motion"],
    color: "#00ff88",
    year: "2024",
    status: "COMPLETE"
  },

  {
    id: "efrenbilliards-site",
    title: "Efren Billiards",
    category: "Web Design",
    description: "A professional web platform dedicated to the legacy of Efren 'Bata' Reyes, featuring tournament highlights and billiards community resources.",
    image: "https://iili.io/qhq6H0B.png",
    link: "https://efrenbilliards.com/",
    tags: ["Web Development", "UI/UX", "Responsive Design"],
    color: "#ff00ff",
    year: "2024",
    status: "LIVE"
  },
  {
    id: "detroitparis",
    title: "detroitparis",
    category: "Web Design",
    description: "Professional corporate platform designed for business consultancy services, focusing on user journey and conversion.",
    image: "https://iili.io/qN3rHdJ.png",
    link: "https://www.detroit.paris/",
    tags: ["Web Development", "Corporate UI", "Responsive"],
    color: "#00d4ff",
    year: "2024",
    status: "LIVE"
  },
  {
    id: "1",
    title: "Well Driven Brand Identity",
    category: "Branding",
    description: "A complete brand overhaul using Generative tools to generate unique visual assets reducing time-to-market by 40%.",
    image: "https://iili.io/ftdWO4n.jpg",
    tags: ["Midjourney", "Photoshop", "Illustrator"],
    color: "#00ff88",
    year: "2024",
    status: "DELIVERED"
  },
  {
    id: "3",
    title: "UGC Style Marketing",
    category: "Video Production",
    description: "High-end video generation of UGC video as product review",
    image: "https://iili.io/ftdSi22.png",
    videoUrl: "https://streamable.com/e/ausch4?autoplay=1",
    tags: ["Higgsfield", "Sora", "Adobe Premiere"],
    color: "#ff00ff",
    year: "2024",
    status: "COMPLETE"
  },
  {
    id: "iertqa",
    title: "iertqa",
    category: "Web Design",
    description: "A premium digital solution for Iertqa, combining high-end web development with responsive architecture and modern visual aesthetics.",
    image: "https://iili.io/qNFYs8x.png",
    link: "https://www.iertqa.com/",
    tags: ["Web Development", "premium", "Responsive"],
    color: "#00d4ff",
    year: "2024",
    status: "LIVE"
  },
  {
    id: "billing-automation",
    title: "End-to-end Billing Automation",
    category: "Automation",
    description: "A fully automated billing solution that synchronizes invoices, payments, and financial records with 99.9% accuracy.",
    image: "https://iili.io/qNTdahF.png",
    tags: ["Automation", "Workflow", "Fintech"],
    color: "#00ff88",
    year: "2024",
    status: "COMPLETE"
  },
  {
    id: "call-whatsapp-agent",
    title: "Call and Whatsapp Agent",
    category: "Automation",
    description: "Intelligent AI agents capable of handling incoming calls and WhatsApp messages with natural language processing.",
    image: "https://iili.io/qNT9eBj.png",
    tags: ["AI Agent", "WhatsApp", "Voice AI"],
    color: "#ff00ff",
    year: "2024",
    status: "COMPLETE"
  }

];

const allCategories = ["All", "Automation", "Apps", "Web Design", "Video Production", "Branding"];

const statusColors: Record<string, string> = {
  DEPLOYED: "#00ff88",
  DELIVERED: "#ff00ff",
  COMPLETE: "#00d4ff",
  LIVE: "#00ff88",
};

export default function Portfolio() {
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section
      id="portfolio"
      className="relative py-28 border-t border-[#1a1a1a] overflow-hidden"
      style={{ background: "#0a0a0f" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 100% 50%, rgba(0,255,136,0.03) 0%, transparent 60%)",
        }}
      />
      <div className="cyber-grid-bg absolute inset-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-12 space-y-3">
          <div
            className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-[#00ff88]"
            style={{ fontFamily: 'var(--font-sharetech), monospace' }}
          >
            <span className="w-8 h-px bg-[#00ff88] shadow-[0_0_4px_#00ff88]" />
            module_02 :: portfolio
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <h2
              className="text-4xl md:text-5xl font-black uppercase tracking-wide text-[#e0e0e0]"
              style={{ fontFamily: 'var(--font-orbitron), monospace' }}
            >
              Selected <span className="neon-text">Works & Inspiration</span>
            </h2>
            <div className="flex flex-col items-start sm:items-end">
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#444] mb-2 px-2 py-0.5 border border-[#1a1a1a] rounded-sm">
                Visual Innovation Portfolio
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-10">
          {allCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className="text-[11px] uppercase tracking-[0.2em] px-4 py-2 transition-all duration-150"
              style={{
                fontFamily: 'var(--font-sharetech), monospace',
                background: active === cat ? "#00ff88" : "transparent",
                color: active === cat ? "#0a0a0f" : "#6b7280",
                border: active === cat ? "1px solid #00ff88" : "1px solid #2a2a3a",
                boxShadow: active === cat ? "0 0 10px #00ff88, 0 0 20px #00ff8840" : "none",
                clipPath: "polygon(0 4px,4px 0,calc(100% - 4px) 0,100% 4px,100% calc(100% - 4px),calc(100% - 4px) 100%,4px 100%,0 calc(100% - 4px))",
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((proj) => (
            <div
              key={proj.id}
              className="group relative flex flex-col transition-all duration-500 cursor-pointer overflow-hidden border border-[#2a2a3a] hover:border-[#00ff88]/50"
              style={{
                background: "#12121a",
                clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%)"
              }}
            >
              <div className="relative h-60 overflow-hidden border-b border-[#2a2a3a]">
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-70 group-hover:opacity-100 grayscale-[0.2] group-hover:grayscale-0"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent opacity-80"
                />

                {/* Links Overlay */}
                <div className="absolute inset-0 z-20 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-[2px]">
                  {proj.videoUrl && (
                    <a
                      href={proj.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-[#00ff88] text-black rounded-full hover:scale-110 transition-transform shadow-[0_0_15px_#00ff88]"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <PlayIcon className="w-5 h-5" />
                    </a>
                  )}
                  {proj.link && (
                    <a
                      href={proj.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white text-black rounded-full hover:scale-110 transition-transform shadow-[0_0_15px_rgba(255,255,255,0.3)]"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLinkIcon className="w-5 h-5" />
                    </a>
                  )}
                </div>

                <div
                  className="absolute top-4 right-4 text-[8px] uppercase tracking-[0.2em] px-2 py-1 z-10"
                  style={{
                    fontFamily: 'var(--font-sharetech), monospace',
                    color: statusColors[proj.status] || "#00ff88",
                    border: `1px solid ${statusColors[proj.status] || "#00ff88"}40`,
                    background: "rgba(0,0,0,0.8)",
                    backdropFilter: "blur(4px)",
                  }}
                >
                  ● {proj.status}
                </div>

                <div className="absolute top-4 left-4 px-2 py-1 bg-black/80 backdrop-blur-md border border-white/5 text-[8px] uppercase tracking-widest text-[#00ff88] z-10">
                  {proj.category}
                </div>
              </div>

              <div className="p-7 flex flex-col flex-1 relative">
                <h3
                  className="text-lg font-bold uppercase tracking-tight text-[#e0e0e0] group-hover:text-[#00ff88] transition-colors duration-300 mb-3"
                  style={{ fontFamily: 'var(--font-orbitron), monospace' }}
                >
                  {proj.title}
                </h3>

                <p
                  className="text-xs text-[#6b7280] leading-relaxed mb-6 flex-1 line-clamp-3"
                  style={{ fontFamily: 'var(--font-body), monospace' }}
                >
                  {proj.description}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#1a1a1a]">
                  {proj.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[8px] uppercase tracking-wider px-2 py-1 bg-[#0d0d12] text-[#4b5563] border border-[#1e1e2d] hover:border-[#00ff88]/40 transition-colors"
                      style={{ fontFamily: 'var(--font-sharetech), monospace' }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Corner accent */}
                <div
                  className="absolute bottom-0 right-0 w-3 h-3 bg-[#00ff88] opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ clipPath: "polygon(100% 0, 100% 100%, 0 100%)" }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="mt-24 flex justify-center opacity-30 hover:opacity-60 transition-opacity duration-700">
          <p className="text-[9px] uppercase tracking-[0.4em] text-[#444] text-center border-t border-[#1a1a1a] pt-10 max-w-2xl px-10 leading-relaxed font-label">
            Note: Some projects displayed are part of our design inspiration and industry case study repertoire to showcase technical capabilities and aesthetic direction.
          </p>
        </div>
      </div>
    </section>
  );
}

function PlayIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M8 5.14v14c0 .86.84 1.4 1.58.97l11-7c.73-.47.73-1.47 0-1.94l-11-7c-.74-.43-1.58.11-1.58.97z" />
    </svg>
  );
}

function ExternalLinkIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  );
}


