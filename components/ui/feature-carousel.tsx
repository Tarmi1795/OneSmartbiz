"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion"; // Changed to framer-motion due to nextjs
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  CommandFreeIcons,
  GlobalSearchIcon,
  AiCloudIcon,
  SmartPhone01Icon,
  DashboardSquare01Icon,
  MagicWandIcon,
  DocumentValidationIcon,
  Building04Icon,
  ArrowUp01Icon,
  ArrowDown01Icon,
} from "@hugeicons/core-free-icons";
import { cn } from "@/lib/utils";
import { HugeiconsIcon } from "@hugeicons/react";

const FEATURES = [
  {
    id: "web-dev",
    label: "Web Development",
    icon: CommandFreeIcons,
    image: "https://iili.io/BxFPDzb.md.jpg",
    href: "/services/web-development",
    description: "Cutting-edge websites built with React, Next.js and more .",
  },
  {
    id: "mobile-apps",
    label: "Mobile Native Apps",
    icon: SmartPhone01Icon,
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1200",
    href: "/services/web-development",
    description: "A world-class experience on every single device.",
  },
  {
    id: "multimedia-vfx",
    label: "Multimedia & VFX",
    icon: MagicWandIcon,
    image: "/projects/artefakt.png",
    href: "/services/multimedia-vfx",
    description: "Video production, motion graphics, and premium visual storytelling.",
  },
  {
    id: "social-media",
    label: "Social Media Management",
    icon: GlobalSearchIcon,
    image: "https://iili.io/BxKOKZP.jpg",
    href: "/services/social-media-management",
    description: "Content calendars, reels, and lead-focused social growth.",
  },
  {
    id: "financial",
    label: "Financial and Auditing Services",
    icon: DashboardSquare01Icon,
    image: "https://iili.io/BxFF4VV.jpg",
    href: "/services/financial-services",
    description: "Accurate auditing and bookkeeping in real-time.",
  },
  {
    id: "visa-assistance",
    label: "Visa Assistance",
    icon: DocumentValidationIcon,
    image: "/services/visa-assistance.webp",
    href: "/services/visa-assistance",
    description: "End-to-end Qatar visa support for founders, teams, and business mobility.",
  },
  {
    id: "business-formation",
    label: "Business Formation",
    icon: Building04Icon,
    image: "/services/business-formation.webp",
    href: "/services/business-formation",
    description: "Company setup, licensing, documentation, and launch guidance for Qatar businesses.",
  },
  {
    id: "ai-systems",
    label: "AI & Automation Services",
    icon: AiCloudIcon,
    image: "https://iili.io/BxdoSP2.jpg",
    href: "/services/ai-automation",
    description: "AI assistants, workflow automation, and smarter operations.",
  },
  {
    id: "branding",
    label: "Brand Identity",
    icon: MagicWandIcon,
    image: "https://iili.io/Bx3XhJI.jpg",
    href: "/#contact",
    description: "Designing memorable digital footprints.",
  },
];

const AUTO_PLAY_INTERVAL = 3000;

const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

type FeatureCarouselProps = {
  variant?: "section" | "hero";
  className?: string;
};

export default function FeatureCarousel({
  variant = "section",
  className,
}: FeatureCarouselProps) {
  const [step, setStep] = useState(0);
  const [itemHeight, setItemHeight] = useState(65);
  const [isMobile, setIsMobile] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const heroMenuScrollerRef = React.useRef<HTMLDivElement | null>(null);
  const heroMenuRefs = React.useRef<(HTMLButtonElement | null)[]>([]);
  const isHero = variant === "hero";

  useEffect(() => {
    const handleResize = () => {
      setItemHeight(window.innerWidth < 768 ? 55 : 65);
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const currentIndex =
    ((step % FEATURES.length) + FEATURES.length) % FEATURES.length;

  useEffect(() => {
    if (!isHero) return;

    const scroller = heroMenuScrollerRef.current;
    const activeItem = heroMenuRefs.current[currentIndex];

    if (!scroller || !activeItem) return;

    const targetLeft =
      activeItem.offsetLeft - scroller.clientWidth / 2 + activeItem.offsetWidth / 2;

    scroller.scrollTo({
      left: Math.max(0, targetLeft),
      behavior: "smooth",
    });
  }, [currentIndex, isHero]);

  const nextStep = useCallback(() => {
    setStep((prev) => prev + 1);
  }, []);

  const prevStep = useCallback(() => {
    setStep((prev) => prev - 1);
  }, []);

  const handleChipClick = (index: number) => {
    const forwardDiff = (index - currentIndex + FEATURES.length) % FEATURES.length;
    const backwardDiff = forwardDiff - FEATURES.length;
    const diff =
      Math.abs(backwardDiff) < forwardDiff ? backwardDiff : forwardDiff;

    if (diff !== 0) setStep((s) => s + diff);
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextStep, AUTO_PLAY_INTERVAL);
    return () => clearInterval(interval);
  }, [nextStep, isPaused]);

  const getCardStatus = (index: number) => {
    const diff = index - currentIndex;
    const len = FEATURES.length;

    let normalizedDiff = diff;
    if (diff > len / 2) normalizedDiff -= len;
    if (diff < -len / 2) normalizedDiff += len;

    if (normalizedDiff === 0) return "active";
    if (normalizedDiff === -1) return "prev";
    if (normalizedDiff === 1) return "next";
    return "hidden";
  };

  return (
    <div
      className={cn(
        "w-full mx-auto",
        isHero ? "max-w-full md:p-0" : "max-w-7xl md:p-8",
        className
      )}
    >
      <div
        className={cn(
          "relative overflow-hidden flex flex-col lg:flex-row border border-[#2a2a3a]",
          isHero
            ? "min-h-[540px] rounded-[1.75rem] shadow-[0_0_34px_rgba(0,255,136,0.08)]"
            : "min-h-[600px] rounded-[2.5rem] lg:aspect-video lg:rounded-[4rem]"
        )}
      >
        <div
          className={cn(
            "w-full relative z-30 flex flex-col items-start justify-center overflow-hidden bg-[#0a0a0f]",
            isHero
              ? "hidden"
              : "min-h-[450px] px-8 md:min-h-[450px] md:px-16 lg:h-full lg:w-[40%] lg:pl-16"
          )}
        >
          <div className="absolute inset-x-0 top-0 h-12 md:h-20 lg:h-16 bg-gradient-to-b from-[#0a0a0f] via-[#0a0a0f]/80 to-transparent z-40" />
          <div className="absolute inset-x-0 bottom-0 h-12 md:h-20 lg:h-16 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/80 to-transparent z-40" />

          <div
            className={cn(
              "absolute flex flex-col gap-2 z-50",
              isHero ? "right-5 top-5" : "right-10 top-10"
            )}
          >
            <button
              onClick={prevStep}
              className="p-2 rounded-full border border-white/10 bg-white/5 hover:bg-[#00ff88]/20 hover:border-[#00ff88]/50 text-white/50 hover:text-[#00ff88] transition-all"
            >
              <HugeiconsIcon icon={ArrowUp01Icon} size={20} />
            </button>
            <button
              onClick={nextStep}
              className="p-2 rounded-full border border-white/10 bg-white/5 hover:bg-[#00ff88]/20 hover:border-[#00ff88]/50 text-white/50 hover:text-[#00ff88] transition-all"
            >
              <HugeiconsIcon icon={ArrowDown01Icon} size={20} />
            </button>
          </div>

          <div className="relative w-full h-full flex items-center justify-center lg:justify-start z-20">
            {FEATURES.map((feature, index) => {
              const isActive = index === currentIndex;
              const distance = index - currentIndex;
              const wrappedDistance = wrap(
                -(FEATURES.length / 2),
                FEATURES.length / 2,
                distance
              );

              return (
                <motion.div
                  key={feature.id}
                  style={{
                    height: itemHeight,
                    width: "fit-content",
                  }}
                  animate={{
                    y: wrappedDistance * itemHeight,
                    opacity: 1 - Math.abs(wrappedDistance) * 0.25,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 90,
                    damping: 22,
                    mass: 1,
                  }}
                  className="absolute flex items-center justify-start pb-2"
                >
                  <button
                    onClick={() => handleChipClick(index)}
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                    className={cn(
                      "relative flex items-center rounded-full transition-all duration-700 text-left group border",
                      isHero
                        ? "gap-2 px-3 py-2 md:px-5 md:py-3 lg:px-3"
                        : "gap-3 px-4 py-2 md:gap-4 md:px-10 md:py-5 lg:px-8 lg:py-4",
                      isActive
                        ? "bg-[#1c1c2e] text-[#00ff88] border-[#00ff88] z-10 shadow-[0_0_15px_#00ff8840]"
                        : "bg-transparent text-white/60 border-white/10 hover:border-[#00ff88]/50 hover:text-white"
                    )}
                  >
                    <div
                      className={cn(
                        "flex items-center justify-center transition-colors duration-500",
                        isActive ? "text-[#00ff88]" : "text-white/40"
                      )}
                    >
                      <HugeiconsIcon
                        icon={feature.icon}
                        size={isMobile ? 14 : 18}
                        strokeWidth={2}
                      />
                    </div>
 
                    <span
                      className={cn(
                        "font-bold tracking-widest whitespace-nowrap uppercase",
                        isHero ? "text-[9px] md:text-xs" : "text-[10px] md:text-[15px]"
                      )}
                      style={{ fontFamily: "var(--font-sharetech), monospace" }}
                    >
                      {feature.label}
                    </span>
                  </button>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div
          className={cn(
            "flex-1 relative bg-[#12121a] flex items-center justify-center overflow-hidden border-[#2a2a3a]",
            isHero
              ? "min-h-[600px] border-0 px-5 pb-8 pt-24 md:min-h-[640px] md:px-8 md:pt-24 lg:h-full lg:px-8"
              : "min-h-[500px] border-t px-6 py-16 md:min-h-[600px] md:px-12 md:py-24 lg:h-full lg:border-l lg:border-t-0 lg:px-10 lg:py-16"
          )}
        >
          {isHero && (
            <div className="absolute inset-x-4 top-4 z-50 overflow-hidden rounded-2xl border border-white/10 bg-[#07070b]/86 p-2 shadow-[0_12px_35px_rgba(0,0,0,0.35)] backdrop-blur-xl">
              <div
                ref={heroMenuScrollerRef}
                className="flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              >
                {FEATURES.map((feature, index) => {
                  const isActive = index === currentIndex;

                  return (
                    <button
                      key={feature.id}
                      ref={(node) => {
                        heroMenuRefs.current[index] = node;
                      }}
                      type="button"
                      onClick={() => handleChipClick(index)}
                      onMouseEnter={() => setIsPaused(true)}
                      onMouseLeave={() => setIsPaused(false)}
                      className={cn(
                        "group/menu flex shrink-0 items-center gap-2 rounded-full border px-3 py-2 text-left text-[9px] font-bold uppercase tracking-[0.18em] transition-all duration-300 md:px-4 md:text-[10px]",
                        isActive
                          ? "border-[#00ff88] bg-[#00ff88]/14 text-[#00ff88] shadow-[0_0_18px_rgba(0,255,136,0.18)]"
                          : "border-white/10 bg-white/[0.03] text-white/48 hover:border-[#00ff88]/40 hover:text-white"
                      )}
                      style={{ fontFamily: "var(--font-sharetech), monospace" }}
                      aria-label={`Show ${feature.label}`}
                    >
                      <HugeiconsIcon
                        icon={feature.icon}
                        size={14}
                        strokeWidth={2}
                        className={cn(
                          "transition-colors",
                          isActive ? "text-[#00ff88]" : "text-white/35 group-hover/menu:text-[#00ff88]"
                        )}
                      />
                      <span>{feature.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {isHero && (
            <>
              <button
                type="button"
                onClick={prevStep}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                className="absolute left-3 top-1/2 z-50 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/55 text-white/70 shadow-[0_12px_30px_rgba(0,0,0,0.35)] backdrop-blur-md transition-all hover:border-[#00ff88]/55 hover:bg-[#00ff88]/14 hover:text-[#00ff88] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00ff88] md:left-5 md:h-14 md:w-14"
                aria-label="Previous service"
              >
                <ChevronLeft size={26} strokeWidth={2.4} aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={nextStep}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                className="absolute right-3 top-1/2 z-50 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/55 text-white/70 shadow-[0_12px_30px_rgba(0,0,0,0.35)] backdrop-blur-md transition-all hover:border-[#00ff88]/55 hover:bg-[#00ff88]/14 hover:text-[#00ff88] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00ff88] md:right-5 md:h-14 md:w-14"
                aria-label="Next service"
              >
                <ChevronRight size={26} strokeWidth={2.4} aria-hidden="true" />
              </button>
            </>
          )}

          <div
            className={cn(
              "relative w-full aspect-[4/5] flex items-center justify-center",
              isHero ? "max-w-[430px] md:max-w-[490px]" : "max-w-[500px]"
            )}
          >
            {FEATURES.map((feature, index) => {
              const status = getCardStatus(index);
              const isActive = status === "active";
              const isPrev = status === "prev";
              const isNext = status === "next";

              return (
                <motion.div
                  key={feature.id}
                  initial={false}
                  animate={{
                    x: isActive ? 0 : isPrev ? -100 : isNext ? 100 : 0,
                    scale: isActive ? 1 : isPrev || isNext ? 0.85 : 0.7,
                    opacity: isActive ? 1 : isPrev || isNext ? 0.4 : 0,
                    rotate: isPrev ? -3 : isNext ? 3 : 0,
                    zIndex: isActive ? 20 : isPrev || isNext ? 10 : 0,
                    pointerEvents: isActive ? "auto" : "none",
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 25,
                    mass: 0.8,
                  }}
                  className={cn(
                    "absolute inset-0 rounded-[2rem] md:rounded-[2.8rem] overflow-hidden border-4 md:border-8 border-[#0a0a0f] bg-[#0a0a0f] origin-center",
                    isActive ? "cursor-zoom-in" : "cursor-default"
                  )}
                  onClick={() => {
                    if (isActive) setSelectedImage(feature.image);
                  }}
                >
                  <img
                    src={feature.image}
                    alt={feature.label}
                    className={cn(
                      "w-full h-full object-cover transition-all duration-700",
                      isActive
                        ? "grayscale-0 blur-0 opacity-80"
                        : "grayscale blur-[4px] brightness-50 opacity-40"
                    )}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-[#00ff88]/10" />

                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className={cn(
                          "absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent flex flex-col justify-end pointer-events-none",
                          isHero ? "p-6 pt-24" : "p-10 pt-32"
                        )}
                      >
                        <div className="bg-[#1c1c2e] text-[#00ff88] border border-[#00ff88]/30 px-4 py-1.5 rounded-sm text-[11px] font-bold uppercase tracking-[0.2em] w-fit shadow-[0_0_10px_#00ff8820] mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-sharetech), monospace" }}>
                          0{index + 1}
                          <span className="w-3 h-px bg-[#00ff88]"></span>
                          {feature.label}
                        </div>
                        <p
                          className={cn(
                            "text-[#e0e0e0] font-medium leading-relaxed tracking-wide",
                            isHero ? "text-sm md:text-base" : "text-lg md:text-xl"
                          )}
                          style={{ fontFamily: "var(--font-sans), sans-serif" }}
                        >
                          {feature.description}
                        </p>
                        <Link
                          href={feature.href}
                          onClick={(event) => event.stopPropagation()}
                          className="mt-5 pointer-events-auto w-fit border border-[#00ff88]/40 bg-[#00ff88]/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.22em] text-[#00ff88] transition-all hover:bg-[#00ff88]/20"
                          style={{ fontFamily: "var(--font-sharetech), monospace" }}
                        >
                          View Service
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div
                    className={cn(
                      "absolute top-8 left-8 flex items-center gap-3 transition-opacity duration-300 bg-black/60 px-3 py-1.5 rounded-full border border-white/10 backdrop-blur-md",
                      isHero ? "hidden" : isActive ? "opacity-100" : "opacity-0"
                    )}
                  >
                    <div className="w-2 h-2 rounded-full bg-[#00ff88] shadow-[0_0_10px_#00ff88]" />
                    <span className="text-[#00ff88] text-[10px] font-bold uppercase tracking-[0.3em]" style={{ fontFamily: "var(--font-sharetech), monospace" }}>
                      Sys. Active
                    </span>
                  </div>

                  {/* Expand Hint Icon */}
                  <div
                    className={cn(
                      "absolute top-8 right-8 w-10 h-10 flex items-center justify-center transition-all duration-300 bg-black/60 rounded-full border border-white/10 backdrop-blur-md text-[#00ff88]",
                      isHero
                        ? "hidden"
                        : isActive
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-[-10px]"
                    )}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                      />
                    </svg>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 bg-black/95 backdrop-blur-xl cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative max-w-5xl w-full aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)]"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage}
                alt="Full preview"
                className="w-full h-full object-cover"
              />

              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-6 right-6 w-12 h-12 rounded-full bg-black/50 border border-white/10 flex items-center justify-center text-white hover:bg-[#00ff88] hover:text-[#0a0a0f] transition-all duration-300 z-50 group"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 transform group-hover:rotate-90 transition-transform duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              <div className="absolute bottom-6 left-6 px-4 py-2 bg-black/50 backdrop-blur-md border border-white/10 rounded-full">
                <span className="text-[#00ff88] text-[10px] font-bold uppercase tracking-[0.3em]" style={{ fontFamily: "var(--font-sharetech), monospace" }}>
                  Full System View
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
