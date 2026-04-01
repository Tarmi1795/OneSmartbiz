"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ArrowRight, Zap, Shield, Star, Crown } from "lucide-react";
import Link from 'next/link';

// Ripple Button Component
export const RippleButton = ({ children, onClick, className = "", ...props }: any) => {
  const [ripples, setRipples] = useState<any[]>([]);

  const addRipple = (e: any) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    const newRipple = { x, y, size, id: Date.now() };
    setRipples([...ripples, newRipple]);
  };

  useEffect(() => {
    if (ripples.length > 0) {
      const timer = setTimeout(() => {
        setRipples([]);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [ripples]);

  return (
    <button
      className={`relative overflow-hidden ${className}`}
      onClick={(e) => {
        addRipple(e);
        if (onClick) onClick(e);
      }}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="absolute bg-white/30 rounded-full animate-ripple pointer-events-none"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: ripple.size,
            height: ripple.size,
          }}
        />
      ))}
    </button>
  );
};

// Simplified Shader Background
const ShaderCanvas = () => (
  <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
    <div className="absolute inset-0 bg-[#0a0a0f]" />
    <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-[#00ff88]/5 blur-[120px] animate-pulse" />
    <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-[#00d4ff]/5 blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
  </div>
);

const CheckIcon = ({ className = "" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

// Pricing Card Component
export const PricingCard = ({ 
  planName, 
  description, 
  price, 
  features, 
  isPopular, 
  buttonText, 
  buttonLink, 
  buttonVariant = 'secondary' 
}: any) => {
  const cardVariants: any = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <motion.div 
      variants={cardVariants}
      whileHover={{ y: -10, borderColor: "rgba(0,255,136,0.5)", boxShadow: "0 20px 40px rgba(0,255,136,0.15)" }}
      className={`backdrop-blur-xl bg-white/[0.03] border border-white/10 rounded-3xl p-8 flex flex-col transition-all duration-500 relative overflow-hidden group/card shadow-[0_8px_32px_rgba(0,0,0,0.4)] ${isPopular ? 'ring-2 ring-[#00ff88]/20 border-[#00ff88]/30' : ''}`}
    >
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-[#00ff88]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none opacity-0 group-hover/card:opacity-100 transition-opacity duration-700" />

      {isPopular && (
        <div className="absolute -top-4 right-4 px-4 py-1 text-[12px] font-bold tracking-widest uppercase rounded-full bg-[#00ff88] text-[#0a0a0f] font-mono shadow-[0_0_10px_rgba(0,255,136,0.5)]">
          Most Popular
        </div>
      )}
      <div className="mb-4">
        <h2 className="text-2xl font-display font-black uppercase text-white tracking-[0.1em]">{planName}</h2>
        <p className="text-[12px] text-white/40 mt-3 font-sans leading-relaxed">{description}</p>
      </div>
      <div className="my-8 flex items-baseline gap-2">
        <span className="text-[11px] font-mono text-[#00ff88]/60 uppercase tracking-[0.2em]">QAR</span>
        <span className="text-[54px] font-display font-black text-[#00ff88] tracking-tighter">
          {price}
        </span>
        <span className="text-[12px] text-white/30 font-mono uppercase tracking-widest">{price === 'Custom' ? '' : '/ MO'}</span>
      </div>
      <div className="card-divider w-full mb-5 h-px bg-[linear-gradient(90deg,transparent,rgba(0,255,136,0.2)_50%,transparent)]"></div>
      <ul className="flex flex-col gap-4 text-[13px] text-white/60 mb-10 font-sans flex-1">
        {features.map((feature: string, index: number) => (
          <li key={index} className="flex items-start gap-4 group/feature transition-colors hover:text-white/90">
            <CheckIcon className="text-[#00ff88] w-4 h-4 flex-shrink-0 mt-1" /> 
            <span className="leading-relaxed font-medium">{feature}</span>
          </li>
        ))}
      </ul>
      {buttonLink ? (
        <Link href={buttonLink} className="w-full">
          <RippleButton className={`mt-auto w-full py-3.5 rounded-2xl font-mono font-black uppercase tracking-[0.2em] text-[11px] transition-all shadow-lg active:scale-[0.98] ${buttonVariant === 'primary' ? 'bg-[#00ff88] text-black shadow-[#00ff88]/20' : 'bg-white/5 text-white/80 border border-white/10 hover:bg-white/10'}`}>
            {buttonText}
          </RippleButton>
        </Link>
      ) : (
        <RippleButton className={`mt-auto w-full py-3.5 rounded-2xl font-mono font-black uppercase tracking-[0.2em] text-[11px] transition-all shadow-lg active:scale-[0.98] ${buttonVariant === 'primary' ? 'bg-[#00ff88] text-black shadow-[#00ff88]/20' : 'bg-white/5 text-white/80 border border-white/10 hover:bg-white/10'}`}>
          {buttonText}
        </RippleButton>
      )}
    </motion.div>
  );
};

// Main Export Component
export const ModernPricingPage = ({ 
  title, 
  subtitle, 
  plans, 
  showAnimatedBackground = true 
}: any) => {
  const containerVariants: any = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="relative w-full overflow-hidden">
      {showAnimatedBackground && <ShaderCanvas />}
      <div className="relative w-full z-10 flex flex-col items-center justify-center py-28 px-4">
        <div className="w-full max-w-5xl mx-auto text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-7xl font-display font-black text-white uppercase tracking-wider mb-6"
          >
            {title}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[#888] font-mono text-sm uppercase tracking-widest"
          >
            {subtitle}
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {plans.map((plan: any, idx: number) => (
            <PricingCard key={idx} {...plan} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};
