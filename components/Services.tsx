"use client";

const services = [
  {
    id: "01",
    title: "Web & App Development",
    subtitle: "High-Performance Engineering",
    color: "#00ff88",
    description:
      "Cutting-edge websites and mobile applications built with React, Next.js, and Native platforms. Optimized for speed, SEO, and user experience — from corporate portals to bespoke e-commerce systems.",
    stack: ["React", "Next.js", "TypeScript", "Node.js", "React Native"],
    metrics: [{ label: "Avg Load Time", value: "<1.2s" }, { label: "SEO Score", value: "98/100" }],
  },
  {
    id: "02",
    title: "Multimedia & VFX",
    subtitle: "Visual Storytelling",
    color: "#ff00ff",
    description:
      "High-end video production, motion graphics, and visual effects that capture attention in a crowded digital landscape. Compelling narratives that resonate across social media and broadcast channels.",
    stack: ["After Effects", "Cinema 4D", "DaVinci Resolve", "Premiere Pro"],
    metrics: [{ label: "Avg View Rate", value: "+340%" }, { label: "Brand Lift", value: "+62%" }],
  },
  {
    id: "03",
    title: "Financial Hub",
    subtitle: "Strategic Intelligence",
    color: "#00d4ff",
    description:
      "Data-driven financial insights, profitability analysis, and cost-structure modeling. AI-assisted tools that validate business ventures in the Qatar market, minimizing risk and maximizing ROI.",
    stack: ["Business Modeling", "Market Analysis", "Risk Assessment", "ROI Projection"],
    metrics: [{ label: "Risk Reduction", value: "−45%" }, { label: "Avg ROI Lift", value: "+28%" }],
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative py-28 overflow-hidden"
      style={{ background: "#12121a" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 0% 100%, rgba(0,255,136,0.04) 0%, transparent 60%), radial-gradient(ellipse 40% 50% at 100% 0%, rgba(0,212,255,0.03) 0%, transparent 60%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-16 space-y-3">
          <div
            className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-[#00ff88]"
            style={{ fontFamily: "var(--font-sharetech), monospace" }}
          >
            <span className="w-8 h-px bg-[#00ff88] shadow-[0_0_4px_#00ff88]" />
            module_01 :: core_expertise
          </div>
          <h2
            className="text-4xl md:text-5xl font-black uppercase tracking-wide text-[#e0e0e0]"
            style={{ fontFamily: "var(--font-orbitron), monospace" }}
          >
            Our Core{" "}
            <span
              className="neon-text"
            >
              Expertise
            </span>
          </h2>
          <p
            className="text-sm text-[#6b7280] max-w-xl leading-relaxed"
            style={{ fontFamily: "var(--font-jetbrains), monospace" }}
          >
            <span className="text-[#00ff88]">{`>`} </span>
            End-to-end digital solutions engineered to scale your business in the modern GCC economy.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: "#2a2a3a" }}>
          {services.map((svc, i) => (
            <div
              key={svc.id}
              className="group relative flex flex-col p-8 transition-all duration-300 hover:-translate-y-1"
              style={{
                background: "#12121a",
                borderTop: `2px solid ${svc.color}`,
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow = `0 0 30px ${svc.color}15, inset 0 0 20px ${svc.color}05`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
              }}
            >
              <div className="flex items-start justify-between mb-6">
                <span
                  className="text-5xl font-black leading-none opacity-10"
                  style={{
                    fontFamily: "var(--font-orbitron), monospace",
                    color: svc.color,
                  }}
                >
                  {svc.id}
                </span>
                <div
                  className="w-10 h-10 flex items-center justify-center border"
                  style={{
                    borderColor: svc.color,
                    clipPath: "polygon(0 4px,4px 0,calc(100% - 4px) 0,100% 4px,100% calc(100% - 4px),calc(100% - 4px) 100%,4px 100%,0 calc(100% - 4px))",
                    boxShadow: `0 0 8px ${svc.color}40`,
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={svc.color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    {i === 0 && <><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></>}
                    {i === 1 && <><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></>}
                    {i === 2 && <><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></>}
                  </svg>
                </div>
              </div>

              <div className="space-y-2 mb-4">
                <p
                  className="text-[10px] uppercase tracking-[0.25em]"
                  style={{ fontFamily: "var(--font-sharetech), monospace", color: svc.color }}
                >
                  {svc.subtitle}
                </p>
                <h3
                  className="text-xl font-bold uppercase tracking-wide text-[#e0e0e0]"
                  style={{ fontFamily: "var(--font-orbitron), monospace" }}
                >
                  {svc.title}
                </h3>
              </div>

              <p
                className="text-sm text-[#6b7280] leading-relaxed mb-6 flex-1"
                style={{ fontFamily: "var(--font-jetbrains), monospace" }}
              >
                {svc.description}
              </p>

              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {svc.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] uppercase tracking-[0.15em] px-2 py-1 border"
                      style={{
                        fontFamily: "var(--font-sharetech), monospace",
                        borderColor: "#2a2a3a",
                        color: "#6b7280",
                        background: "#0a0a0f",
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-px" style={{ background: "#2a2a3a" }}>
                  {svc.metrics.map((m) => (
                    <div key={m.label} className="flex flex-col items-center py-3 gap-1" style={{ background: "#12121a" }}>
                      <span
                        className="text-lg font-black"
                        style={{
                          fontFamily: "var(--font-orbitron), monospace",
                          color: svc.color,
                          textShadow: `0 0 8px ${svc.color}60`,
                        }}
                      >
                        {m.value}
                      </span>
                      <span
                        className="text-[9px] uppercase tracking-[0.15em] text-[#6b7280] text-center"
                        style={{ fontFamily: "var(--font-sharetech), monospace" }}
                      >
                        {m.label}
                      </span>
                    </div>
                  ))}
                </div>

                <a
                  href="#contact"
                  className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] transition-colors duration-200 group/link"
                  style={{ fontFamily: "var(--font-sharetech), monospace", color: svc.color }}
                >
                  <span className="group-hover/link:translate-x-1 transition-transform duration-200">
                    {`>`} Initialize Service
                  </span>
                  <span className="flex-1 h-px opacity-20 group-hover/link:opacity-60 transition-opacity duration-200" style={{ background: svc.color }} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
