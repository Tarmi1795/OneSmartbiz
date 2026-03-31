"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

import { cn } from "@/lib/utils";

export interface Stat {
  value: string;
  label: string;
}

export interface Testimonial {
  name: string;
  title: string;
  quote?: string;
  avatarSrc: string;
  rating: number;
}

export interface ClientsSectionProps {
  tagLabel: string;
  title: string;
  description: string;
  stats: Stat[];
  testimonials: Testimonial[];
  primaryActionLabel: string;
  secondaryActionLabel: string;
  className?: string;
}

const StatCard = ({ value, label }: Stat) => (
  <div className="bg-muted/50 border border-border text-center p-4" style={{ clipPath: "polygon(0 6px,6px 0,calc(100% - 6px) 0,100% 6px,100% calc(100% - 6px),calc(100% - 6px) 100%,6px 100%,0 calc(100% - 6px))" }}>
    <p className="text-3xl font-bold text-[#00ff88]" style={{ fontFamily: "var(--font-heading), sans-serif" }}>{value}</p>
    <p className="text-sm text-muted-foreground mt-1" style={{ fontFamily: "var(--font-sans), sans-serif" }}>{label}</p>
  </div>
);

const StickyTestimonialCard = ({ testimonial, index }: { testimonial: Testimonial; index: number }) => {
  return (
    <motion.div
      className="sticky w-full"
      style={{ top: `${20 + index * 24}px` }}
    >
      <div className={cn(
        "p-6 shadow-lg flex flex-col h-auto w-full",
        "bg-[#12121a] border border-[#2a2a3a]"
      )} style={{ clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%)", borderRadius: "0" }}>
        <div className="flex items-center gap-4">
          <div
            className="w-14 h-14 rounded-xl bg-cover bg-center flex-shrink-0"
            style={{ backgroundImage: `url(${testimonial.avatarSrc})` }}
            aria-label={`Photo of ${testimonial.name}`}
          />
          <div className="flex-grow">
            <p className="font-semibold text-lg text-foreground" style={{ fontFamily: "var(--font-heading), sans-serif" }}>{testimonial.name}</p>
            <p className="text-sm text-muted-foreground" style={{ fontFamily: "var(--font-sans), sans-serif" }}>{testimonial.title}</p>
          </div>
        </div>

        <div className="flex items-center gap-2 my-4">
          <span className="font-bold text-base text-foreground" style={{ fontFamily: "var(--font-heading), sans-serif" }}>{testimonial.rating.toFixed(1)}</span>
          <div className="flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={cn(
                  "h-4 w-4",
                  i < Math.floor(testimonial.rating)
                    ? "text-yellow-400 fill-yellow-400"
                    : "text-muted-foreground/30"
                )}
              />
            ))}
          </div>
        </div>

        {testimonial.quote && (
          <p className="text-base text-muted-foreground leading-relaxed" style={{ fontFamily: "var(--font-sans), sans-serif" }}>&ldquo;{testimonial.quote}&rdquo;</p>
        )}
      </div>
    </motion.div>
  );
};

export const ClientsSection = ({
  tagLabel,
  title,
  description,
  stats,
  testimonials,
  primaryActionLabel,
  secondaryActionLabel,
  className,
}: ClientsSectionProps) => {
  const scrollContainerHeight = `calc(100vh + ${testimonials.length * 100}px)`;

  return (
    <section className={cn("w-full text-foreground py-24 md:py-28", className)} style={{ background: "#12121a" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

        <div className="flex flex-col gap-6 lg:sticky lg:top-20">
          <div className="inline-flex items-center gap-2 self-start px-3 py-1 text-sm" style={{ fontFamily: "var(--font-sans), sans-serif", border: "1px solid #2a2a3a", background: "#1c1c2e", clipPath: "polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 0 100%)" }}>
            <div className="h-2 w-2 rounded-full bg-[#00ff88] animate-pulse" />
            <span className="text-muted-foreground">{tagLabel}</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold tracking-tight" style={{ fontFamily: "var(--font-heading), sans-serif" }}>{title}</h2>
          <p className="text-lg text-muted-foreground leading-relaxed" style={{ fontFamily: "var(--font-sans), sans-serif" }}>{description}</p>
          <div className="grid grid-cols-3 gap-4 mt-4">
            {stats.map((stat) => (
              <StatCard key={stat.label} {...stat} />
            ))}
          </div>
          <div className="flex items-center gap-4 mt-6">
            <a
              href="#portfolio"
              className="group text-xs uppercase tracking-[0.2em] font-bold px-8 py-4 text-[#00ff88] border-2 border-[#00ff88] transition-all duration-150 hover:bg-[#00ff88] hover:text-[#0a0a0f]"
              style={{
                clipPath: "polygon(0 8px,8px 0,calc(100% - 8px) 0,100% 8px,100% calc(100% - 8px),calc(100% - 8px) 100%,8px 100%,0 calc(100% - 8px))",
                fontFamily: "var(--font-sans), sans-serif",
              }}
            >
              {secondaryActionLabel}
            </a>
            <a
              href="#contact"
              className="group relative text-xs uppercase tracking-[0.2em] font-bold px-8 py-4 text-[#0a0a0f] bg-[#00ff88] transition-all duration-150 hover:brightness-110"
              style={{
                clipPath: "polygon(0 8px,8px 0,calc(100% - 8px) 0,100% 8px,100% calc(100% - 8px),calc(100% - 8px) 100%,8px 100%,0 calc(100% - 8px))",
                boxShadow: "0 0 10px #00ff88, 0 0 25px #00ff8840",
                fontFamily: "var(--font-sans), sans-serif",
              }}
            >
              {primaryActionLabel}
            </a>
          </div>
        </div>

        <div className="relative flex flex-col gap-4" style={{ height: scrollContainerHeight }}>
          {testimonials.map((testimonial, index) => (
            <StickyTestimonialCard
              key={testimonial.name}
              index={index}
              testimonial={testimonial}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
