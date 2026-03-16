"use client";

import { useEffect, useRef } from "react";
import dynamic from "next/dynamic";

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
      className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-16"
      style={{
        background: "radial-gradient(ellipse 80% 50% at 60% 50%, rgba(0,255,136,0.04) 0%, transparent 70%), radial-gradient(ellipse 50% 60% at 90% 20%, rgba(0,212,255,0.03) 0%, transparent 60%), #0a0a0f",
      }}
    >
      <div className="absolute inset-0 z-0" style={{ width: '100%', height: '100%' }}>
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

      <div className="absolute top-20 right-0 w-px h-64 bg-gradient-to-b from-transparent via-[#00ff8830] to-transparent hidden lg:block" />
      <div className="absolute top-32 left-0 w-px h-48 bg-gradient-to-b from-transparent via-[#00d4ff20] to-transparent hidden lg:block" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full py-20 lg:py-0">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-8 items-center">

          <div className="lg:col-span-3 space-y-8">
            <div className="space-y-2">
              <div
                className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-[#6b7280]"
                style={{ fontFamily: "var(--font-sharetech), monospace" }}
              >
                <span className="w-8 h-px bg-[#00ff88] shadow-[0_0_4px_#00ff88]" />
                <span className="text-[#00ff88]">sys://doha.qatar</span>
                <span className="w-2 h-2 rounded-full bg-[#00ff88] shadow-[0_0_6px_#00ff88] animate-pulse" />
                <span>online</span>
              </div>

              <div className="relative">
                <h1
                  className="text-5xl md:text-7xl lg:text-8xl font-black uppercase leading-none tracking-tight cyber-glitch"
                  data-text="STRATEGIC"
                  style={{ fontFamily: "var(--font-orbitron), monospace" }}
                >
                  <span className="block text-[#e0e0e0]">STRATEGIC</span>
                  <span className="block gradient-text-cyber">DIGITAL</span>
                  <span className="block text-[#e0e0e0]">SOLUTIONS</span>
                </h1>
              </div>
            </div>

            <div
              className="relative border-l-2 border-[#00ff88] pl-6 max-w-xl"
              style={{ boxShadow: "-3px 0 8px #00ff8830" }}
            >
              <p
                className="text-sm md:text-base text-[#6b7280] leading-relaxed tracking-wide"
                style={{ fontFamily: "var(--font-jetbrains), monospace" }}
              >
                <span className="text-[#00ff88]">{`>`} </span>
                The leading digital consultancy in Doha, Qatar. We empower enterprises with high-performance web engineering, multimedia production, and financial intelligence.
                <span ref={cursorRef} className="inline-block w-2 h-4 bg-[#00ff88] ml-1 align-middle" />
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="#services"
                className="group relative text-sm uppercase tracking-[0.2em] font-bold px-8 py-4 text-[#0a0a0f] bg-[#00ff88] transition-all duration-150 hover:brightness-110"
                style={{
                  clipPath: "polygon(0 8px,8px 0,calc(100% - 8px) 0,100% 8px,100% calc(100% - 8px),calc(100% - 8px) 100%,8px 100%,0 calc(100% - 8px))",
                  boxShadow: "0 0 10px #00ff88, 0 0 25px #00ff8840",
                  fontFamily: "var(--font-sharetech), monospace",
                }}
              >
                Our Services
              </a>
              <a
                href="#portfolio"
                className="group text-sm uppercase tracking-[0.2em] font-bold px-8 py-4 text-[#00ff88] border-2 border-[#00ff88] transition-all duration-150 hover:bg-[#00ff88] hover:text-[#0a0a0f]"
                style={{
                  clipPath: "polygon(0 8px,8px 0,calc(100% - 8px) 0,100% 8px,100% calc(100% - 8px),calc(100% - 8px) 100%,8px 100%,0 calc(100% - 8px))",
                  fontFamily: "var(--font-sharetech), monospace",
                }}
              >
                View Portfolio
              </a>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-px border border-[#2a2a3a] overflow-hidden"
              style={{ background: "#2a2a3a" }}
            >
              {stats.map((s, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center justify-center py-5 px-3 gap-1"
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
                    className="text-[10px] uppercase tracking-[0.2em] text-[#6b7280] text-center"
                    style={{ fontFamily: "var(--font-sharetech), monospace" }}
                  >
                    {s.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Estimator CTA Banner */}
            <a 
              href="/calculator"
              className="relative group block overflow-hidden p-[1px]"
              style={{
                clipPath: "polygon(0 0, calc(100% - 15px) 0, 100% 15px, 100% 100%, 0 100%)",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#00ff88]/50 via-[#00d4ff]/50 to-[#ff00ff]/50 opacity-20 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
              <div className="relative bg-[#0a0a0f] p-6 lg:p-8 flex flex-col md:flex-row items-center gap-6 justify-between border border-white/5 group-hover:border-[#00ff88]/30 transition-all duration-500">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#00ff88] animate-pulse shadow-[0_0_8px_#00ff88]" />
                    <span 
                      className="text-[10px] uppercase tracking-[0.3em] text-[#00ff88]"
                      style={{ fontFamily: "var(--font-sharetech), monospace" }}
                    >
                      Project Intelligence :: estimator_v2
                    </span>
                  </div>
                  <h3 
                    className="text-xl md:text-2xl font-bold text-white uppercase tracking-wider"
                    style={{ fontFamily: "var(--font-orbitron), monospace" }}
                  >
                    Estimate your project <span className="text-[#00ff88]">investment</span>
                  </h3>
                  <p 
                    className="text-sm text-[#6b7280] max-w-md leading-relaxed"
                    style={{ fontFamily: "var(--font-jetbrains), monospace" }}
                  >
                    Validate your next venture with our high-fidelity pricing engine. Get a baseline proposal in QAR tailored to your specific tech stack.
                  </p>
                </div>
                <div 
                  className="flex items-center gap-3 px-6 py-3 bg-[#00ff88]/10 border border-[#00ff88]/30 text-[#00ff88] text-xs font-bold uppercase tracking-[0.2em] group-hover:bg-[#00ff88] group-hover:text-[#0a0a0f] transition-all duration-300"
                  style={{
                    fontFamily: "var(--font-sharetech), monospace",
                    clipPath: "polygon(0 4px, 4px 0, calc(100% - 4px) 0, 100% 4px, 100% calc(100% - 4px), calc(100% - 4px) 100%, 4px 100%, 0 calc(100% - 4px))",
                  }}
                >
                  Launch Estimator
                  <span className="group-hover:translate-x-1 transition-transform">{'>'}</span>
                </div>
              </div>
            </a>
          </div>

          <div className="lg:col-span-2 hidden lg:flex items-center justify-center">
            <div
              className="relative w-full max-w-sm corner-accent"
              style={{
                background: "rgba(18,18,26,0.9)",
                border: "1px solid #2a2a3a",
                clipPath: "polygon(0 20px,20px 0,100% 0,100% calc(100% - 20px),calc(100% - 20px) 100%,0 100%)",
                boxShadow: "0 0 30px rgba(0,255,136,0.08), inset 0 0 30px rgba(0,0,0,0.5)",
              }}
            >
              <div
                className="absolute top-0 left-0 right-0 h-8 flex items-center px-4 gap-2 border-b border-[#2a2a3a]"
                style={{ background: "#1c1c2e" }}
              >
                <span className="w-2.5 h-2.5 rounded-full bg-[#ff3366]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#ffaa00]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#00ff88] shadow-[0_0_4px_#00ff88]" />
                <span
                  className="ml-3 text-[10px] uppercase tracking-[0.2em] text-[#6b7280]"
                  style={{ fontFamily: "var(--font-sharetech), monospace" }}
                >
                  osb_terminal_v2.6
                </span>
              </div>

              <div className="pt-10 p-6 space-y-3">
                {[
                  { prefix: "$", text: "connect --host onesmartbiz.pro", color: "#00ff88" },
                  { prefix: ">", text: "Establishing secure channel...", color: "#6b7280" },
                  { prefix: ">", text: "AUTH: Qatar Digital Council ✓", color: "#00d4ff" },
                  { prefix: ">", text: "Loading services manifest...", color: "#6b7280" },
                  { prefix: ">", text: "WEB_DEV........... [OK]", color: "#00ff88" },
                  { prefix: ">", text: "MULTIMEDIA_VFX..... [OK]", color: "#00ff88" },
                  { prefix: ">", text: "FINANCIAL_HUB...... [OK]", color: "#00ff88" },
                  { prefix: ">", text: "NEURAL_ENGINE...... [OK]", color: "#ff00ff" },
                  { prefix: "$", text: "status: READY_TO_BUILD", color: "#00d4ff" },
                ].map((line, i) => (
                  <div key={i} className="flex gap-2 text-xs" style={{ fontFamily: "var(--font-jetbrains), monospace" }}>
                    <span style={{ color: "#00ff88", opacity: 0.6 }}>{line.prefix}</span>
                    <span style={{ color: line.color }}>{line.text}</span>
                  </div>
                ))}
                <div className="flex gap-2 text-xs" style={{ fontFamily: "var(--font-jetbrains), monospace" }}>
                  <span style={{ color: "#00ff88", opacity: 0.6 }}>$</span>
                  <span style={{ color: "#e0e0e0" }}>_</span>
                  <span
                    className="w-1.5 h-4 bg-[#00ff88] inline-block"
                    style={{ animation: "blink 1s step-end infinite" }}
                  />
                </div>
              </div>

              <div
                className="absolute bottom-3 right-4 text-[9px] uppercase tracking-[0.15em] text-[#2a2a3a]"
                style={{ fontFamily: "var(--font-sharetech), monospace" }}
              >
                uptime: 99.98%
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span
          className="text-[10px] uppercase tracking-[0.3em] text-[#6b7280]"
          style={{ fontFamily: "var(--font-sharetech), monospace" }}
        >
          scroll
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-[#00ff88] to-transparent shadow-[0_0_4px_#00ff88]" />
      </div>
    </section>
  );
}
