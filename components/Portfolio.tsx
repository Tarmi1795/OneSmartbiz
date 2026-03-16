"use client";

import { useState } from "react";

const projects = [
  {
    id: "PRJ-001",
    title: "Falcon Group Portal",
    category: "Web Development",
    tags: ["React", "Next.js", "CMS"],
    color: "#00ff88",
    year: "2024",
    outcome: "340% traffic increase",
    description:
      "Enterprise-grade corporate portal for a Doha-based conglomerate. Multi-language, role-based dashboards, and CMS integration delivering sub-1s load times across GCC.",
    status: "DEPLOYED",
  },
  {
    id: "PRJ-002",
    title: "Lusail Brand Film",
    category: "Multimedia & VFX",
    tags: ["Motion Graphics", "VFX", "4K"],
    color: "#ff00ff",
    year: "2024",
    outcome: "2.1M organic views",
    description:
      "Cinematic brand film showcasing Lusail City's futuristic infrastructure. Full motion graphics pipeline, chromatic grading, and drone-assisted VFX compositing.",
    status: "DELIVERED",
  },
  {
    id: "PRJ-003",
    title: "Al Rayyan FinModel",
    category: "Financial Hub",
    tags: ["Business Model", "ROI Analysis"],
    color: "#00d4ff",
    year: "2023",
    outcome: "QAR 12M raised",
    description:
      "Complete financial intelligence package for a retail expansion across 6 Qatar locations. Risk modeling, break-even analysis, and investor-ready projections.",
    status: "EXECUTED",
  },
  {
    id: "PRJ-004",
    title: "NomadEats App",
    category: "Web Development",
    tags: ["React Native", "Node.js", "GPS"],
    color: "#00ff88",
    year: "2023",
    outcome: "50K installs / month 1",
    description:
      "Cross-platform food discovery app for the Doha expat community. Real-time GPS filtering, push notifications, and Stripe payment integration in 8 weeks.",
    status: "LIVE",
  },
  {
    id: "PRJ-005",
    title: "QIPCO Event Reel",
    category: "Multimedia & VFX",
    tags: ["Event Coverage", "Color Grade"],
    color: "#ff00ff",
    year: "2024",
    outcome: "+62% engagement",
    description:
      "Multi-camera event coverage and post-production for Qatar's premium racing season. Color science pipeline tuned for broadcast and social media distribution.",
    status: "DELIVERED",
  },
  {
    id: "PRJ-006",
    title: "GCC SaaS Dashboard",
    category: "Web Development",
    tags: ["TypeScript", "D3.js", "API"],
    color: "#00ff88",
    year: "2024",
    outcome: "98 Lighthouse score",
    description:
      "B2B analytics dashboard for a regional logistics operator. Real-time data visualization, multi-currency reporting, and role-based access across 4 countries.",
    status: "DEPLOYED",
  },
];

const allCategories = ["All", "Web Development", "Multimedia & VFX", "Financial Hub"];

const statusColors: Record<string, string> = {
  DEPLOYED: "#00ff88",
  DELIVERED: "#ff00ff",
  EXECUTED: "#00d4ff",
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
            style={{ fontFamily: "var(--font-sharetech), monospace" }}
          >
            <span className="w-8 h-px bg-[#00ff88] shadow-[0_0_4px_#00ff88]" />
            module_02 :: selected_works
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <h2
              className="text-4xl md:text-5xl font-black uppercase tracking-wide text-[#e0e0e0]"
              style={{ fontFamily: "var(--font-orbitron), monospace" }}
            >
              Selected{" "}
              <span className="neon-text">Works</span>
            </h2>
            <a
              href="#contact"
              className="self-start sm:self-auto text-xs uppercase tracking-[0.2em] text-[#6b7280] border border-[#2a2a3a] px-4 py-2 hover:text-[#00ff88] hover:border-[#00ff88] transition-colors duration-200"
              style={{ fontFamily: "var(--font-sharetech), monospace" }}
            >
              {`>`} View All Projects
            </a>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-10">
          {allCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className="text-[11px] uppercase tracking-[0.2em] px-4 py-2 transition-all duration-150"
              style={{
                fontFamily: "var(--font-sharetech), monospace",
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: "#2a2a3a" }}>
          {filtered.map((proj) => (
            <div
              key={proj.id}
              className="group relative flex flex-col transition-all duration-300 cursor-pointer"
              style={{ background: "#12121a" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.background = "#16161f";
                (e.currentTarget as HTMLDivElement).style.boxShadow = `inset 0 0 40px ${proj.color}08`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.background = "#12121a";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
              }}
            >
              <div
                className="relative h-40 overflow-hidden flex items-center justify-center"
                style={{
                  background: `linear-gradient(135deg, #0a0a0f 0%, ${proj.color}08 100%)`,
                  borderBottom: "1px solid #2a2a3a",
                }}
              >
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    backgroundImage: `linear-gradient(${proj.color}08 1px, transparent 1px), linear-gradient(90deg, ${proj.color}08 1px, transparent 1px)`,
                    backgroundSize: "30px 30px",
                  }}
                />
                <div
                  className="text-6xl font-black opacity-[0.06]"
                  style={{
                    fontFamily: "var(--font-orbitron), monospace",
                    color: proj.color,
                  }}
                >
                  {proj.id.split("-")[1]}
                </div>
                <div
                  className="absolute top-3 right-3 text-[9px] uppercase tracking-[0.2em] px-2 py-1"
                  style={{
                    fontFamily: "var(--font-sharetech), monospace",
                    color: statusColors[proj.status] || "#00ff88",
                    border: `1px solid ${statusColors[proj.status] || "#00ff88"}40`,
                    background: `${statusColors[proj.status] || "#00ff88"}10`,
                    boxShadow: `0 0 6px ${statusColors[proj.status] || "#00ff88"}30`,
                  }}
                >
                  ● {proj.status}
                </div>
                <div
                  className="absolute bottom-3 left-3 text-[10px] uppercase tracking-[0.2em] text-[#6b7280]"
                  style={{ fontFamily: "var(--font-sharetech), monospace" }}
                >
                  {proj.id} / {proj.year}
                </div>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <div className="mb-3">
                  <p
                    className="text-[10px] uppercase tracking-[0.25em] mb-1"
                    style={{ fontFamily: "var(--font-sharetech), monospace", color: proj.color }}
                  >
                    {proj.category}
                  </p>
                  <h3
                    className="text-lg font-bold uppercase tracking-wide text-[#e0e0e0] group-hover:text-[#e0e0e0] transition-colors duration-200"
                    style={{ fontFamily: "var(--font-orbitron), monospace" }}
                  >
                    {proj.title}
                  </h3>
                </div>

                <p
                  className="text-xs text-[#6b7280] leading-relaxed mb-4 flex-1"
                  style={{ fontFamily: "var(--font-jetbrains), monospace" }}
                >
                  {proj.description}
                </p>

                <div className="space-y-3">
                  <div
                    className="flex items-center gap-2 py-2 px-3"
                    style={{
                      background: `${proj.color}08`,
                      border: `1px solid ${proj.color}30`,
                    }}
                  >
                    <span
                      className="text-[10px] uppercase tracking-[0.15em] text-[#6b7280]"
                      style={{ fontFamily: "var(--font-sharetech), monospace" }}
                    >
                      Outcome:
                    </span>
                    <span
                      className="text-[11px] font-bold ml-auto"
                      style={{
                        fontFamily: "var(--font-orbitron), monospace",
                        color: proj.color,
                        textShadow: `0 0 6px ${proj.color}60`,
                      }}
                    >
                      {proj.outcome}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {proj.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[9px] uppercase tracking-[0.15em] px-2 py-0.5"
                        style={{
                          fontFamily: "var(--font-sharetech), monospace",
                          color: "#6b7280",
                          border: "1px solid #2a2a3a",
                          background: "#0a0a0f",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
