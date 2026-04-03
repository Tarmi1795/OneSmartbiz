"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { cn } from "@/lib/utils";

export default function About() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="about" className="relative py-32 bg-[#0a0a0f] overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00ff88] rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left Side: About Text */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="inline-block font-mono bg-[#1c1c2e] border border-[#2a2a3a] px-4 py-1.5 text-xs font-bold text-[#00ff88] tracking-widest uppercase">
              about_us :: profile
            </div>
            
            <h2 
              className="text-4xl md:text-5xl font-black tracking-tighter text-[#e0e0e0] uppercase leading-tight"
              style={{ fontFamily: 'var(--font-orbitron), monospace' }}
            >
              Strategic <span className="text-[#00ff88]">Digital Consultancy</span> in Doha
            </h2>
            
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed font-sans">
              <p>
                One Smart Biz is a premier high-performance digital collective in Doha, Qatar, dedicated to redefining the intersection of technology, creative art, and business intelligence. We curate immersive digital experiences that resonate at the speed of the modern web across the GCC.
              </p>
              <p>
                Our strategic approach integrates next-gen web engineering and VFX-grade multimedia production with automated financial intelligence, creating high-conversion ecosystems for visionary brands.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/5">
              <div className="space-y-2">
                <div className="text-[#00ff88] font-bold text-2xl font-mono">150+</div>
                <div className="text-gray-500 text-xs uppercase tracking-widest font-mono">deployments</div>
              </div>
              <div className="space-y-2">
                <div className="text-[#00d4ff] font-bold text-2xl font-mono">99.9%</div>
                <div className="text-gray-500 text-xs uppercase tracking-widest font-mono">precision</div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Motto & Vision */}
          <motion.div variants={itemVariants} className="relative group">
            {/* Glassmorphic Cards */}
            <div className="space-y-6">
              {/* Motto Card */}
              <div 
                className="p-8 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md transition-all duration-500 hover:border-[#00ff88]/30 hover:bg-white/[0.05]"
              >
                <div className="flex items-start gap-6">
                  <div className="h-12 w-12 rounded-lg bg-[#00ff88]/10 flex items-center justify-center border border-[#00ff88]/20 text-[#00ff88]">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-[#00ff88] font-mono text-xs uppercase tracking-[0.2em] mb-3">Our Motto</h3>
                    <p className="text-2xl font-bold text-white italic leading-tight" style={{ fontFamily: 'var(--font-sharetech), monospace' }}>
                      "Precision Architecture. Visual Velocity. Infinite Scale."
                    </p>
                  </div>
                </div>
              </div>

              {/* Vision Card */}
              <div 
                className="p-8 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md transition-all duration-500 hover:border-[#00d4ff]/30 hover:bg-white/[0.05]"
              >
                <div className="flex items-start gap-6">
                  <div className="h-12 w-12 rounded-lg bg-[#00d4ff]/10 flex items-center justify-center border border-[#00d4ff]/20 text-[#00d4ff]">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-[#00d4ff] font-mono text-xs uppercase tracking-[0.2em] mb-3">Our Vision</h3>
                    <p className="text-gray-300 leading-relaxed">
                      To empower visionary businesses with autonomous digital infrastructures that self-evolve, ensuring they remain at the absolute vanguard of their industry.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Glowing orbs for visual interest */}
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#00ff88]/20 rounded-full blur-[80px] -z-10 group-hover:bg-[#00ff88]/30 transition-all duration-700" />
            <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-[#00d4ff]/20 rounded-full blur-[80px] -z-10 group-hover:bg-[#00d4ff]/30 transition-all duration-700" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
