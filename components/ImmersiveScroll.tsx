"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ImmersiveScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Track scroll progress of the container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Smoothing states (lerping)
  const currentFrameRef = useRef(0);
  const targetFrameRef = useRef(0);

  // Total frames
  const frameCount = 150;

  // Preload images
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let i = 1; i <= frameCount; i++) {
      const img = new Image();
      const frameIndex = i.toString().padStart(4, "0");
      img.src = `/OSB_frames/frame_${frameIndex}.webp`;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === frameCount) {
          setIsLoaded(true);
        }
      };
      loadedImages.push(img);
    }
    setImages(loadedImages);
  }, []);

  // Update target frame based on scroll
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      targetFrameRef.current = Math.floor(latest * (frameCount - 1));
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  // The RAF Smoothing Loop (Render Engine)
  useEffect(() => {
    let rafId: number;

    const render = () => {
      const canvas = canvasRef.current;
      const context = canvas?.getContext("2d");

      if (canvas && context && isLoaded && images.length > 0) {
        // Lerp factor (0.1 for smooth "chase" feel)
        const delta = targetFrameRef.current - currentFrameRef.current;
        
        if (Math.abs(delta) > 0.1) {
          currentFrameRef.current += delta * 0.1;
        } else {
          currentFrameRef.current = targetFrameRef.current;
        }

        const frameIndex = Math.round(currentFrameRef.current);
        const img = images[frameIndex];

        if (img) {
          const { width, height } = canvas;
          // Cover logic (similar to object-fit: cover)
          const imgRatio = img.width / img.height;
          const canvasRatio = width / height;
          
          let drawWidth = width;
          let drawHeight = height;
          let drawX = 0;
          let drawY = 0;

          if (imgRatio > canvasRatio) {
            drawWidth = height * imgRatio;
            drawX = (width - drawWidth) / 2;
          } else {
            drawHeight = width / imgRatio;
            drawY = (height - drawHeight) / 2;
          }

          context.clearRect(0, 0, width, height);
          context.drawImage(img, drawX, drawY, drawWidth, drawHeight);
        }
      }
      rafId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(rafId);
  }, [isLoaded, images]);

  // Handle Resize
  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div ref={containerRef} className="relative h-[720vh] bg-[#0a0a0f]">
      {/* Sticky Canvas Container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Loading Overlay */}
        {!isLoaded && (
          <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-[#0a0a0f]">
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="w-12 h-12 border-2 border-[#00ff88]/20 border-t-[#00ff88] rounded-full mb-4"
            />
            <div className="font-mono text-xs text-[#00ff88] tracking-widest uppercase">
              initializing_3d_engine...
            </div>
          </div>
        )}

        {/* The Frame Canvas */}
        <canvas
          ref={canvasRef}
          className="w-full h-full object-cover opacity-60"
        />

        {/* Cinematic Overlays to blend with sections */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-transparent to-[#0a0a0f] pointer-events-none" />
        
        {/* Content Overlays (Animated via scrollytelling phases) */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-10 pointer-events-none">
          
          {/* Phase 1: Strategic Architecture */}
          <motion.div
            style={{ 
               opacity: useTransform(scrollYProgress, [0.05, 0.15, 0.25], [0, 1, 0]),
               scale: useTransform(scrollYProgress, [0.05, 0.15, 0.25], [0.8, 1, 1.2]),
               y: useTransform(scrollYProgress, [0.05, 0.25], [50, -50])
            }}
            className="space-y-4 absolute max-w-2xl"
          >
            <div className="inline-block font-mono bg-white/10 border border-white/30 px-3 py-1 text-[10px] text-white tracking-widest uppercase">
               01 // Strategic Architecture
            </div>
            <h2 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter" style={{ fontFamily: "var(--font-orbitron), sans-serif" }}>
               Foundation <span className="text-white/40">of Excellence</span>
            </h2>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed font-sans px-4">
               We architect precision-led digital backbones that serve as the indestructible core for modern, high-performance enterprises.
            </p>
          </motion.div>

          {/* Phase 2: Autonomous Systems */}
          <motion.div
            style={{ 
               opacity: useTransform(scrollYProgress, [0.28, 0.38, 0.48], [0, 1, 0]),
               scale: useTransform(scrollYProgress, [0.28, 0.38, 0.48], [0.8, 1, 1.2]),
               y: useTransform(scrollYProgress, [0.28, 0.48], [50, -50])
            }}
            className="space-y-4 absolute max-w-2xl"
          >
            <div className="inline-block font-mono bg-[#00ff88]/10 border border-[#00ff88]/30 px-3 py-1 text-[10px] text-[#00ff88] tracking-widest uppercase">
               02 // Engineered Efficiency
            </div>
            <h2 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter" style={{ fontFamily: "var(--font-orbitron), sans-serif" }}>
               Autonomous <span className="text-[#00ff88]">Systems</span>
            </h2>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed font-sans px-4">
               Proprietary AI engines and automated workflows designed to eliminate operational friction and accelerate growth exponentially.
            </p>
          </motion.div>

          {/* Phase 3: Visual Intelligence */}
          <motion.div
            style={{ 
               opacity: useTransform(scrollYProgress, [0.51, 0.61, 0.71], [0, 1, 0]),
               scale: useTransform(scrollYProgress, [0.51, 0.61, 0.71], [0.8, 1, 1.2]),
               y: useTransform(scrollYProgress, [0.51, 0.71], [50, -50])
            }}
            className="space-y-4 absolute max-w-2xl"
          >
            <div className="inline-block font-mono bg-[#00d4ff]/10 border border-[#00d4ff]/30 px-3 py-1 text-[10px] text-[#00d4ff] tracking-widest uppercase">
               03 // Creative Optimization
            </div>
            <h2 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter" style={{ fontFamily: "var(--font-orbitron), sans-serif" }}>
               Visual <span className="text-[#00d4ff]">Intelligence</span>
            </h2>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed font-sans px-4">
               VFX-grade cinematic experiences crafted to capture instant attention and drive deep engagement in a competitive digital landscape.
            </p>
          </motion.div>

          {/* Phase 4: Dynamic Scale */}
          <motion.div
            style={{ 
               opacity: useTransform(scrollYProgress, [0.74, 0.84, 0.94], [0, 1, 0]),
               scale: useTransform(scrollYProgress, [0.74, 0.84, 0.94], [0.8, 1, 1.2]),
               y: useTransform(scrollYProgress, [0.74, 0.94], [50, -50])
            }}
            className="space-y-4 absolute max-w-2xl"
          >
            <div className="inline-block font-mono bg-[#ff00ff]/10 border border-[#ff00ff]/30 px-3 py-1 text-[10px] text-[#ff00ff] tracking-widest uppercase">
               04 // Global Integration
            </div>
            <h2 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter" style={{ fontFamily: "var(--font-orbitron), sans-serif" }}>
               Dynamic <span className="text-[#ff00ff]">Evolution</span>
            </h2>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed font-sans px-4">
               A future-ready presence that evolves in real-time, allowing your brand to scale infinitely and dominate emerging global markets.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
