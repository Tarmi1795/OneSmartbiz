"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "Business Advisor", href: "/#neural" },
  { label: "Projects", href: "/#portfolio" },
  { label: "Blog", href: "/blog" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "Pricing", href: "/calculator" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 15 }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled
          ? "rgba(10,10,15,0.9)"
          : "transparent",
        borderBottom: scrolled ? "1px solid rgba(0,255,136,0.2)" : "1px solid transparent",
        boxShadow: scrolled ? "0 4px 30px rgba(0,0,0,0.5), 0 0 20px rgba(0,255,136,0.05)" : "none",
        backdropFilter: scrolled ? "blur(16px)" : "none",
      }}
    >
      {/* Aggressive Scanline for Scrolled state */}
      {scrolled && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#00ff88] to-transparent"
        />
      )}

      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-20">
        <motion.a
          href="/"
          className="flex items-center gap-3 group"
          aria-label="One Smart Biz Home"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="relative group p-1">
            <div className="absolute inset-0 bg-gradient-to-r from-[#00ff88]/30 via-[#00d4ff]/30 to-[#ff00ff]/30 rounded-lg blur-md group-hover:blur-xl transition-all duration-500 opacity-60 group-hover:opacity-100" />
            <div className="absolute inset-0 border border-white/20 rounded-lg backdrop-blur-[4px]" />
            <img 
              src="/logo.gif" 
              alt="One Smart Biz Logo" 
              className="h-16 w-auto object-contain relative z-10 brightness-125 drop-shadow-[0_0_15px_rgba(0,255,136,0.5)]"
            />
          </div>
        </motion.a>

        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.href}
              href={link.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.05 }}
              className="relative text-[10px] uppercase tracking-[0.25em] text-gray-400 hover:text-[#00ff88] transition-colors duration-300 group px-2 py-1"
              style={{ fontFamily: "var(--font-mono), monospace" }}
            >
              <span className="relative z-10">{link.label}</span>
              <motion.span 
                className="absolute inset-0 bg-[#00ff88]/5 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 -z-0" 
              />
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#00ff88] group-hover:w-full transition-all duration-300 shadow-[0_0_10px_#00ff88]" />
            </motion.a>
          ))}
          
          <motion.a
            href="/#contact"
            whileHover={{ 
              scale: 1.05, 
              boxShadow: "0 0 25px #00ff88",
              textShadow: "0 0 8px #0a0a0f"
            }}
            whileTap={{ scale: 0.95 }}
            className="ml-4 text-[10px] uppercase tracking-[0.3em] font-black px-6 py-3 text-[#0a0a0f] bg-[#00ff88] transition-all relative overflow-hidden group/btn"
            style={{
              clipPath: "polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px)",
              fontFamily: "var(--font-heading), sans-serif",
            }}
          >
            <span className="relative z-10">Contact Us</span>
            <motion.div 
              className="absolute inset-0 bg-white/20 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-500 skew-x-12"
            />
          </motion.a>
        </div>

        <motion.button
          whileTap={{ scale: 0.8 }}
          className="lg:hidden flex flex-col gap-1.5 p-2 text-[#00ff88] relative"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <div className="absolute inset-0 bg-[#00ff88]/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
          <span className={`block h-[2px] w-6 bg-current transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-2.5 shadow-[0_0_8px_currentColor]" : ""}`} />
          <span className={`block h-[2px] w-6 bg-current transition-all duration-300 ${mobileOpen ? "opacity-0" : "shadow-[0_0_4px_currentColor]"}`} />
          <span className={`block h-[2px] w-6 bg-current transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2 shadow-[0_0_8px_currentColor]" : ""}`} />
        </motion.button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "circOut" }}
            className="lg:hidden border-t border-[#00ff88]/20 overflow-hidden"
            style={{ background: "rgba(10,10,15,0.98)" }}
          >
            <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col gap-4">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => setMobileOpen(false)}
                  className="text-xs uppercase tracking-[0.25em] text-gray-400 hover:text-[#00ff88] transition-colors duration-200 py-3 border-b border-white/5 flex items-center group"
                  style={{ fontFamily: "var(--font-mono), monospace" }}
                >
                  <motion.span 
                    className="w-0 group-hover:w-4 h-[2px] bg-[#00ff88] mr-0 group-hover:mr-3 transition-all duration-300"
                  />
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="/#contact"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                onClick={() => setMobileOpen(false)}
                className="text-xs uppercase tracking-[0.3em] font-black px-5 py-4 text-center text-[#0a0a0f] bg-[#00ff88] mt-4"
                style={{
                  clipPath: "polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px)",
                  fontFamily: "var(--font-heading), sans-serif",
                }}
              >
                Contact Us
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
