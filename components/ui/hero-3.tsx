"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

// Props interface for the component
interface AnimatedMarqueeHeroProps {
  tagline: string;
  title: React.ReactNode;
  description: string;
  ctaText?: string;
  items: {
    id: string;
    image: string;
    title: string;
    description: string;
    link?: string;
    videoUrl?: string;
    category?: string;
  }[];
  className?: string;
  children?: React.ReactNode;
}

// Reusable Button component styled like in the image
const ActionButton = ({ children, onClick }: { children: React.ReactNode; onClick?: () => void }) => (
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
    className="mt-8 px-8 py-3 rounded-md bg-[#00ff88] text-[#0a0a0f] font-bold shadow-[0_0_15px_#00ff8840] transition-colors hover:bg-[#00d4ff] focus:outline-none"
    style={{ fontFamily: 'var(--font-sharetech), monospace', textTransform: 'uppercase', letterSpacing: '0.2rem' }}
  >
    {children}
  </motion.button>
);

// The main hero component
export const AnimatedMarqueeHero: React.FC<AnimatedMarqueeHeroProps> = ({
  tagline,
  title,
  description,
  ctaText,
  items,
  className,
  children,
}) => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  // Animation variants for the text content
  const FADE_IN_ANIMATION_VARIANTS: any = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } },
  };

  // Duplicate images for a seamless loop
  const duplicatedImages = [...items, ...items];

  return (
    <section
      className={cn(
        "relative w-full overflow-hidden flex flex-col items-center justify-start text-center px-4",
        className
      )}
      style={{ background: "#0a0a0f" }}
    >
      <div className="z-10 flex flex-col items-center mb-16 pt-12">
        {/* Tagline */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={FADE_IN_ANIMATION_VARIANTS}
          className="mb-4 inline-block font-mono bg-[#1c1c2e] border border-[#2a2a3a] px-4 py-1.5 text-xs font-bold text-[#00ff88] tracking-widest uppercase"
        >
          {tagline}
        </motion.div>

        {/* Main Title */}
        <div
          className="text-4xl md:text-6xl font-black tracking-tighter text-[#e0e0e0] uppercase"
          style={{ fontFamily: 'var(--font-orbitron), monospace' }}
        >
          <motion.div
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            {typeof title === 'string' ? (
              title.split(" ").map((word, i) => (
                <motion.span
                  key={i}
                  variants={FADE_IN_ANIMATION_VARIANTS}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              ))
            ) : (
              title
            )}
          </motion.div>
        </div>

        {/* Description */}
        <motion.p
          initial="hidden"
          animate="show"
          variants={FADE_IN_ANIMATION_VARIANTS}
          transition={{ delay: 0.5 }}
          className="mt-6 max-w-2xl text-base text-[#6b7280] leading-relaxed"
          style={{ fontFamily: 'var(--font-sans), sans-serif' }}
        >
          {description}
        </motion.p>

        {/* Call to Action Button */}
        {ctaText && (
          <motion.div
            initial="hidden"
            animate="show"
            variants={FADE_IN_ANIMATION_VARIANTS}
            transition={{ delay: 0.6 }}
          >
            <ActionButton onClick={() => window.location.href = "/portfolio"}>{ctaText}</ActionButton>
          </motion.div>
        )}

        {/* Children (e.g. Filters) */}
        {children && (
          <motion.div
            initial="hidden"
            animate="show"
            variants={FADE_IN_ANIMATION_VARIANTS}
            transition={{ delay: 0.7 }}
            className="mt-10"
          >
            {children}
          </motion.div>
        )}
      </div>

      {/* Animated Image Marquee */}
      <div className="relative w-full h-80 md:h-96 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] mt-8 overflow-hidden z-20 cursor-grab active:cursor-grabbing">
        <motion.div
          className="flex gap-6 absolute left-0"
          drag="x"
          dragConstraints={{ left: -((items.length * 400) + (items.length * 24)), right: 0 }}
          animate={hoveredItem ? "paused" : "running"}
          variants={{
            running: {
              x: ["0%", "-50%"],
              transition: {
                ease: "linear",
                duration: 60,
                repeat: Infinity,
              },
            },
            paused: {
              transition: { duration: 0.5 }
            }
          }}
        >
          {duplicatedImages.map((item, index) => {
            const isHovered = hoveredItem === `${item.id}-${index}`;
            const isAnyHovered = hoveredItem !== null;
            
            return (
            <motion.div
              key={`${item.id}-${index}`}
              className={cn(
                "relative h-64 md:h-80 w-[300px] md:w-[400px] flex-shrink-0 rounded-xl overflow-hidden cursor-pointer",
                isAnyHovered && !isHovered ? "opacity-30 grayscale" : "opacity-100"
              )}
              onMouseEnter={() => setHoveredItem(`${item.id}-${index}`)}
              onMouseLeave={() => setHoveredItem(null)}
              onClick={() => {
                if (item.link) window.open(item.link, '_blank');
              }}
              whileHover={{ scale: 1.02, zIndex: 30 }}
              style={{
                border: '1px solid #2a2a3a',
                boxShadow: isHovered ? '0 0 30px rgba(0, 255, 136, 0.2)' : 'none'
              }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-6 select-none border-t border-transparent">
                  <div className="transform transition-transform duration-300">
                    <h3 className="text-xl font-bold text-white mb-2" style={{ fontFamily: 'var(--font-orbitron), monospace' }}>{item.title}</h3>
                    <AnimatePresence>
                      {isHovered && (
                        <motion.div
                           initial={{ opacity: 0, height: 0 }}
                           animate={{ opacity: 1, height: 'auto' }}
                           exit={{ opacity: 0, height: 0 }}
                           className="overflow-hidden"
                        >
                          <p className="text-sm text-gray-300 mb-3 line-clamp-2">{item.description}</p>
                          <div className="flex items-center gap-2">
                             <span className="text-xs bg-[#00ff88]/20 text-[#00ff88] px-2 py-1 border border-[#00ff88]/30 uppercase tracking-widest rounded-sm font-mono">
                                EXPLORE
                             </span>
                             {item.category && (
                                <span className="text-xs bg-white/10 text-white px-2 py-1 border border-white/20 uppercase tracking-widest rounded-sm font-mono">
                                   {item.category}
                                </span>
                             )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
              </div>
            </motion.div>
          )})}
        </motion.div>
      </div>
    </section>
  );
};
