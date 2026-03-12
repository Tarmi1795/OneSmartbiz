"use client";

import { useState } from "react";

const testimonials = [
  {
    id: "CLT-001",
    name: "Khalid Al-Mansoori",
    role: "CEO",
    company: "Al-Mansoori Retail Group",
    sector: "Retail / GCC",
    quote:
      "One Smart Biz transformed our entire digital presence in under 3 months. The new platform drives 4x the lead volume of our previous site. Their financial modeling also gave us the clarity to greenlight our 6th location.",
    metrics: { label: "Lead Volume", value: "+400%" },
    color: "#00ff88",
  },
  {
    id: "CLT-002",
    name: "Fatima Al-Rashidi",
    role: "Marketing Director",
    company: "Lusail Development Co.",
    sector: "Real Estate / Qatar",
    quote:
      "The brand film they produced for Lusail reached 2.1 million organic views — no paid media. Their VFX work is genuinely world-class. We get compliments on it from international clients constantly.",
    metrics: { label: "Organic Views", value: "2.1M" },
    color: "#ff00ff",
  },
  {
    id: "CLT-003",
    name: "James Okafor",
    role: "Founder",
    company: "NomadEats",
    sector: "F&B Tech / Doha",
    quote:
      "We needed an app built fast. OSB delivered a React Native product with GPS, payments, and push notifications in 8 weeks flat. 50,000 installs in month one speaks for itself. These guys are the real deal.",
    metrics: { label: "Month-1 Installs", value: "50K" },
    color: "#00d4ff",
  },
  {
    id: "CLT-004",
    name: "Rania Habib",
    role: "CFO",
    company: "Horizon Logistics Qatar",
    sector: "Logistics / GCC",
    quote:
      "Their Financial Hub team dissected our cost structure and found inefficiencies we'd missed for years. Combined with the new analytics dashboard, we cut operating costs by 18% in Q1. Exceptional ROI.",
    metrics: { label: "Cost Reduction", value: "−18%" },
    color: "#00ff88",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const t = testimonials[active];

  return (
    <section
      id="testimonials"
      className="relative py-28 overflow-hidden"
      style={{ background: "#12121a" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 100%, rgba(0,212,255,0.03) 0%, transparent 60%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-14 space-y-3">
          <div
            className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-[#00d4ff]"
            style={{ fontFamily: "var(--font-sharetech), monospace" }}
          >
            <span className="w-8 h-px bg-[#00d4ff] shadow-[0_0_4px_#00d4ff]" />
            module_04 :: client_stories
          </div>
          <h2
            className="text-4xl md:text-5xl font-black uppercase tracking-wide text-[#e0e0e0]"
            style={{ fontFamily: "var(--font-orbitron), monospace" }}
          >
            Client{" "}
            <span
              className="neon-text-tertiary"
            >
              Stories
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          <div className="space-y-2">
            {testimonials.map((item, i) => (
              <button
                key={item.id}
                onClick={() => setActive(i)}
                className="w-full text-left flex items-center gap-4 px-4 py-4 transition-all duration-200"
                style={{
                  background: active === i ? `${item.color}08` : "transparent",
                  border: active === i ? `1px solid ${item.color}40` : "1px solid transparent",
                  borderLeft: active === i ? `2px solid ${item.color}` : "2px solid #2a2a3a",
                  boxShadow: active === i ? `0 0 15px ${item.color}10` : "none",
                }}
              >
                <div className="flex-1 min-w-0">
                  <div
                    className="text-xs font-bold uppercase tracking-[0.15em] truncate"
                    style={{
                      fontFamily: "var(--font-sharetech), monospace",
                      color: active === i ? item.color : "#e0e0e0",
                    }}
                  >
                    {item.name}
                  </div>
                  <div
                    className="text-[10px] uppercase tracking-[0.1em] text-[#6b7280] truncate mt-0.5"
                    style={{ fontFamily: "var(--font-sharetech), monospace" }}
                  >
                    {item.company}
                  </div>
                </div>
                <div
                  className="text-[10px] uppercase tracking-[0.1em] shrink-0"
                  style={{
                    fontFamily: "var(--font-sharetech), monospace",
                    color: active === i ? item.color : "#2a2a3a",
                  }}
                >
                  {item.id}
                </div>
              </button>
            ))}
          </div>

          <div className="lg:col-span-2">
            <div
              key={active}
              className="relative terminal-header"
              style={{
                background: "#0a0a0f",
                border: `1px solid ${t.color}30`,
                clipPath: "polygon(0 16px,16px 0,calc(100% - 16px) 0,100% 16px,100% calc(100% - 16px),calc(100% - 16px) 100%,16px 100%,0 calc(100% - 16px))",
                boxShadow: `0 0 30px ${t.color}10`,
              }}
            >
              <div
                className="absolute top-0 left-0 right-0 h-7 flex items-center justify-between px-4"
                style={{ background: "#1c1c2e", borderBottom: "1px solid #2a2a3a" }}
              >
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#ff3366]" />
                  <span className="w-2 h-2 rounded-full bg-[#ffaa00]" />
                  <span className="w-2 h-2 rounded-full" style={{ background: t.color, boxShadow: `0 0 4px ${t.color}` }} />
                </div>
                <div className="flex items-center gap-3">
                  <span
                    className="text-[9px] uppercase tracking-[0.2em] text-[#6b7280]"
                    style={{ fontFamily: "var(--font-sharetech), monospace" }}
                  >
                    {t.id} :: {t.sector}
                  </span>
                </div>
              </div>

              <div className="p-8 space-y-6">
                <div
                  className="text-3xl leading-none opacity-20"
                  style={{ color: t.color, fontFamily: "var(--font-orbitron), monospace" }}
                >
                  “
                </div>

                <blockquote
                  className="text-sm md:text-base text-[#e0e0e0] leading-relaxed tracking-wide"
                  style={{ fontFamily: "var(--font-jetbrains), monospace" }}
                >
                  <span style={{ color: t.color, opacity: 0.6 }}>{">"} </span>
                  {t.quote}
                </blockquote>

                <div
                  className="flex items-center gap-2 py-3 px-4"
                  style={{
                    background: `${t.color}08`,
                    border: `1px solid ${t.color}20`,
                  }}
                >
                  <div>
                    <div
                      className="text-[10px] uppercase tracking-[0.15em] text-[#6b7280]"
                      style={{ fontFamily: "var(--font-sharetech), monospace" }}
                    >
                      Key Outcome
                    </div>
                    <div
                      className="text-lg font-black"
                      style={{
                        fontFamily: "var(--font-orbitron), monospace",
                        color: t.color,
                        textShadow: `0 0 10px ${t.color}60`,
                      }}
                    >
                      {t.metrics.value}
                    </div>
                    <div
                      className="text-[9px] uppercase tracking-[0.15em] text-[#6b7280]"
                      style={{ fontFamily: "var(--font-sharetech), monospace" }}
                    >
                      {t.metrics.label}
                    </div>
                  </div>
                  <div className="ml-auto text-right">
                    <div
                      className="font-bold text-sm uppercase tracking-[0.1em]"
                      style={{
                        fontFamily: "var(--font-sharetech), monospace",
                        color: t.color,
                      }}
                    >
                      {t.name}
                    </div>
                    <div
                      className="text-[10px] text-[#6b7280] uppercase tracking-[0.1em]"
                      style={{ fontFamily: "var(--font-sharetech), monospace" }}
                    >
                      {t.role} — {t.company}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-2 mt-4">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className="h-1 transition-all duration-300"
                  style={{
                    background: i === active ? testimonials[i].color : "#2a2a3a",
                    width: i === active ? "2rem" : "0.5rem",
                    boxShadow: i === active ? `0 0 6px ${testimonials[i].color}` : "none",
                  }}
                  aria-label={`View testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
