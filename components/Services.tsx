"use client";

import Link from "next/link";
import FeatureCarousel from "@/components/ui/feature-carousel";

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden py-24 md:py-28"
      style={{ background: "#12121a" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 0% 100%, rgba(0,255,136,0.04) 0%, transparent 60%), radial-gradient(ellipse 40% 50% at 100% 0%, rgba(255,0,255,0.05) 0%, transparent 62%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-14 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-3xl space-y-4">
            <div
              className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-[#00ff88]"
              style={{ fontFamily: "var(--font-sharetech), monospace" }}
            >
              <span className="h-px w-8 bg-[#00ff88] shadow-[0_0_4px_#00ff88]" />
              Our service portfolio
            </div>
            <h2
              className="text-4xl font-black uppercase leading-tight tracking-normal text-[#e0e0e0] md:text-6xl"
              style={{ fontFamily: "var(--font-orbitron), monospace" }}
            >
              Built to launch, operate, and grow.
            </h2>
            <p
              className="max-w-2xl text-sm leading-7 text-[#8d94a3] md:text-base"
              style={{ fontFamily: "var(--font-sans), sans-serif" }}
            >
              Digital, social, AI, financial, immigration, and company setup
              services for Qatar businesses that need a polished first
              impression and a practical delivery partner.
            </p>
          </div>

          <Link
            href="/services"
            className="inline-flex w-fit items-center justify-center border border-[#00ff88]/35 bg-[#00ff88]/10 px-5 py-3 text-xs font-bold uppercase tracking-[0.22em] text-[#00ff88] transition-all hover:-translate-y-0.5 hover:bg-[#00ff88]/20"
            style={{
              clipPath:
                "polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)",
              fontFamily: "var(--font-sharetech), monospace",
            }}
          >
            View all services
          </Link>
        </div>

        <FeatureCarousel />
      </div>
    </section>
  );
}
