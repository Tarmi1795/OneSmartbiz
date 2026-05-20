"use client";

import { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import FeatureCarousel from "@/components/ui/feature-carousel";

const Antigravity = dynamic(() => import("@/components/Antigravity"), { ssr: false });

const stats = [
  { value: "150+", label: "Projects Delivered" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "8+", label: "Years in Market" },
  { value: "GCC", label: "Regional Reach" },
];

export default function Hero() {
  const cursorRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let visible = true;
    const interval = setInterval(() => {
      if (cursorRef.current) {
        visible = !visible;
        cursorRef.current.style.opacity = visible ? "1" : "0";
      }
    }, 530);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden pt-16"
      style={{
        background:
          "radial-gradient(ellipse 80% 50% at 60% 50%, rgba(0,255,136,0.04) 0%, transparent 70%), radial-gradient(ellipse 50% 60% at 90% 20%, rgba(0,212,255,0.03) 0%, transparent 60%), #0a0a0f",
      }}
    >
      <div className="absolute inset-0 z-0" style={{ width: "100%", height: "100%" }}>
        <Antigravity
          count={300}
          magnetRadius={6}
          ringRadius={7}
          waveSpeed={0.4}
          waveAmplitude={1}
          particleSize={1.5}
          lerpSpeed={0.05}
          color="#9e69ba"
          autoAnimate
          particleVariance={1}
          rotationSpeed={0}
          depthFactor={1}
          pulseSpeed={3}
          particleShape="capsule"
          fieldStrength={10}
        />
      </div>
      <div className="cyber-grid-bg absolute inset-0 z-1 pointer-events-none opacity-40" />

      <div className="absolute right-0 top-20 hidden h-64 w-px bg-gradient-to-b from-transparent via-[#00ff8830] to-transparent lg:block" />
      <div className="absolute left-0 top-32 hidden h-48 w-px bg-gradient-to-b from-transparent via-[#00d4ff20] to-transparent lg:block" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-20 lg:px-8 lg:py-10">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(430px,0.78fr)] lg:gap-10 xl:grid-cols-[minmax(0,1fr)_minmax(500px,0.85fr)]">
          <div className="space-y-8">
            <div className="space-y-2">
              <div
                className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-[#6b7280]"
                style={{ fontFamily: "var(--font-sharetech), monospace" }}
              >
                <span className="h-px w-8 bg-[#00ff88] shadow-[0_0_4px_#00ff88]" />
                <span className="text-[#00ff88]">Doha, Qatar</span>
                <span className="h-2 w-2 animate-pulse rounded-full bg-[#00ff88] shadow-[0_0_6px_#00ff88]" />
                <span>Available Now</span>
              </div>

              <div className="relative">
                <h1
                  className="cyber-glitch text-5xl font-black uppercase leading-none tracking-tight md:text-7xl lg:text-8xl"
                  data-text="PREMIUM"
                  style={{ fontFamily: "var(--font-orbitron), monospace" }}
                >
                  <span className="block text-[#e0e0e0]">PREMIUM</span>
                  <span className="block gradient-text-cyber">DIGITAL</span>
                  <span className="block text-[#e0e0e0]">PARTNER</span>
                </h1>
              </div>
            </div>

            <div
              className="relative max-w-xl border-l-2 border-[#00ff88] pl-6"
              style={{ boxShadow: "-3px 0 8px #00ff8830" }}
            >
              <p
                className="text-sm leading-relaxed tracking-wide text-[#6b7280] md:text-base"
                style={{ fontFamily: "var(--font-sans), sans-serif" }}
              >
                <span className="text-[#00ff88]">{`>`} </span>
                Leading Strategic Digital Agency in Doha, Qatar. We empower
                modern enterprises through high-performance web engineering,
                award-winning multimedia production, social media growth, AI
                automation, and data-driven brand transformation.
                <span
                  ref={cursorRef}
                  className="ml-1 inline-block h-4 w-2 align-middle bg-[#00ff88]"
                />
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="#services"
                className="group relative px-8 py-4 text-sm font-bold uppercase tracking-[0.2em] text-[#0a0a0f] bg-[#00ff88] transition-all duration-150 hover:brightness-110"
                style={{
                  clipPath:
                    "polygon(0 8px,8px 0,calc(100% - 8px) 0,100% 8px,100% calc(100% - 8px),calc(100% - 8px) 100%,8px 100%,0 calc(100% - 8px))",
                  boxShadow: "0 0 10px #00ff88, 0 0 25px #00ff8840",
                  fontFamily: "var(--font-sharetech), monospace",
                }}
              >
                Our Services
              </a>
              <a
                href="#portfolio"
                className="group border-2 border-[#00ff88] px-8 py-4 text-sm font-bold uppercase tracking-[0.2em] text-[#00ff88] transition-all duration-150 hover:bg-[#00ff88] hover:text-[#0a0a0f]"
                style={{
                  clipPath:
                    "polygon(0 8px,8px 0,calc(100% - 8px) 0,100% 8px,100% calc(100% - 8px),calc(100% - 8px) 100%,8px 100%,0 calc(100% - 8px))",
                  fontFamily: "var(--font-sharetech), monospace",
                }}
              >
                View Portfolio
              </a>
            </div>

            <div
              className="grid grid-cols-2 gap-px overflow-hidden border border-[#2a2a3a] sm:grid-cols-4"
              style={{ background: "#2a2a3a" }}
            >
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="flex flex-col items-center justify-center gap-1 px-3 py-5"
                  style={{ background: "#0a0a0f" }}
                >
                  <span
                    className="text-2xl font-black text-[#00ff88]"
                    style={{
                      fontFamily: "var(--font-orbitron), monospace",
                      textShadow: "0 0 10px rgba(0,255,136,0.5)",
                    }}
                  >
                    {s.value}
                  </span>
                  <span
                    className="text-center text-[10px] uppercase tracking-[0.2em] text-[#6b7280]"
                    style={{ fontFamily: "var(--font-sharetech), monospace" }}
                  >
                    {s.label}
                  </span>
                </div>
              ))}
            </div>

            <a
              href="/calculator"
              className="group relative block overflow-hidden p-[1px]"
              style={{
                clipPath:
                  "polygon(0 0, calc(100% - 15px) 0, 100% 15px, 100% 100%, 0 100%)",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#00ff88]/50 via-[#00d4ff]/50 to-[#ff00ff]/50 opacity-20 blur-sm transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative flex flex-col items-center justify-between gap-6 border border-white/5 bg-[#0a0a0f] p-6 transition-all duration-500 group-hover:border-[#00ff88]/30 md:flex-row lg:p-8">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-[#00ff88] shadow-[0_0_8px_#00ff88]" />
                    <span
                      className="text-[10px] uppercase tracking-[0.3em] text-[#00ff88]"
                      style={{ fontFamily: "var(--font-sharetech), monospace" }}
                    >
                      Instant Project Guide :: pricing
                    </span>
                  </div>
                  <h3
                    className="text-xl font-bold uppercase tracking-wider text-white md:text-2xl"
                    style={{ fontFamily: "var(--font-orbitron), monospace" }}
                  >
                    Estimate your project <span className="text-[#00ff88]">investment</span>
                  </h3>
                  <p
                    className="max-w-md text-sm leading-relaxed text-[#6b7280]"
                    style={{ fontFamily: "var(--font-sans), sans-serif" }}
                  >
                    Get a personalized estimate in QAR for web apps, multimedia
                    campaigns, social growth, automation, or business support
                    tailored to Qatar market realities.
                  </p>
                </div>
                <div
                  className="flex items-center gap-3 border border-[#00ff88]/30 bg-[#00ff88]/10 px-6 py-3 text-xs font-bold uppercase tracking-[0.2em] text-[#00ff88] transition-all duration-300 group-hover:bg-[#00ff88] group-hover:text-[#0a0a0f]"
                  style={{
                    fontFamily: "var(--font-sharetech), monospace",
                    clipPath:
                      "polygon(0 4px, 4px 0, calc(100% - 4px) 0, 100% 4px, 100% calc(100% - 4px), calc(100% - 4px) 100%, 4px 100%, 0 calc(100% - 4px))",
                  }}
                >
                  Estimate your Project
                  <span className="transition-transform group-hover:translate-x-1">{">"}</span>
                </div>
              </div>
            </a>
          </div>

          <div id="services">
            <FeatureCarousel variant="hero" />
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2">
        <span
          className="text-[10px] uppercase tracking-[0.3em] text-[#6b7280]"
          style={{ fontFamily: "var(--font-sharetech), monospace" }}
        >
          scroll
        </span>
        <div className="h-12 w-px bg-gradient-to-b from-[#00ff88] to-transparent shadow-[0_0_4px_#00ff88]" />
      </div>
    </section>
  );
}
