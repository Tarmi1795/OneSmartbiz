"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Neural Engine", href: "#neural" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
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
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? "rgba(10,10,15,0.95)"
          : "transparent",
        borderBottom: scrolled ? "1px solid #2a2a3a" : "1px solid transparent",
        boxShadow: scrolled ? "0 0 30px rgba(0,255,136,0.05)" : "none",
        backdropFilter: scrolled ? "blur(12px)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-16">
        <a
          href="#"
          className="flex items-center gap-3 group"
          aria-label="One Smart Biz Home"
        >
          <div className="relative group p-1">
            {/* Smooth Frame */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#00ff88]/20 via-[#00d4ff]/20 to-[#ff00ff]/20 rounded-lg blur-sm group-hover:blur-md transition-all duration-500 opacity-50 group-hover:opacity-100" />
            <div className="absolute inset-0 border border-white/10 rounded-lg backdrop-blur-[2px]" />
            <img 
              src="/logo.gif" 
              alt="One Smart Biz Logo" 
              className="h-14 w-auto object-contain relative z-10 brightness-110 drop-shadow-[0_0_10px_rgba(0,255,136,0.3)] transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </a>

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-xs uppercase tracking-[0.2em] text-[#6b7280] hover:text-[#00ff88] transition-colors duration-200 group"
              style={{ fontFamily: "var(--font-sharetech), monospace" }}
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#00ff88] group-hover:w-full transition-all duration-300 shadow-[0_0_4px_#00ff88]" />
            </a>
          ))}
          <a
            href="#contact"
            className="text-xs uppercase tracking-[0.2em] font-bold px-5 py-2 text-[#0a0a0f] bg-[#00ff88] transition-all duration-150 hover:brightness-110"
            style={{
              clipPath: "polygon(0 6px,6px 0,calc(100% - 6px) 0,100% 6px,100% calc(100% - 6px),calc(100% - 6px) 100%,6px 100%,0 calc(100% - 6px))",
              boxShadow: "0 0 10px #00ff88, 0 0 20px #00ff8840",
              fontFamily: "var(--font-sharetech), monospace",
            }}
          >
            Init Project
          </a>
        </div>

        <button
          className="lg:hidden flex flex-col gap-1.5 p-2 text-[#00ff88]"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block h-px w-6 bg-current transition-all duration-200 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block h-px w-6 bg-current transition-all duration-200 ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`block h-px w-6 bg-current transition-all duration-200 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {mobileOpen && (
        <div
          className="lg:hidden border-t border-[#2a2a3a]"
          style={{ background: "rgba(10,10,15,0.98)" }}
        >
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-xs uppercase tracking-[0.2em] text-[#6b7280] hover:text-[#00ff88] transition-colors duration-200 py-2 border-b border-[#2a2a3a]"
                style={{ fontFamily: "var(--font-sharetech), monospace" }}
              >
                <span className="text-[#00ff88] mr-2">{`>`}</span>{link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="text-xs uppercase tracking-[0.2em] font-bold px-5 py-3 text-center text-[#0a0a0f] bg-[#00ff88] mt-2"
              style={{
                clipPath: "polygon(0 6px,6px 0,calc(100% - 6px) 0,100% 6px,100% calc(100% - 6px),calc(100% - 6px) 100%,6px 100%,0 calc(100% - 6px))",
                fontFamily: "var(--font-sharetech), monospace",
              }}
            >
              Init Project
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
