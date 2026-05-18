"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "#services" },
  { label: "Business Advisor", href: "#neural" },
  { label: "Projects", href: "#portfolio" },
  { label: "About", href: "#about" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Pricing", href: "/calculator" },
];

const serviceLinks = [
  {
    label: "Web & App Development",
    href: "/services/web-development",
    description: "Sites, apps, and digital platforms",
  },
  {
    label: "Multimedia & VFX",
    href: "/services/multimedia-vfx",
    description: "Video, motion, and visual storytelling",
  },
  {
    label: "Financial Services",
    href: "/services/financial-services",
    description: "Audit, bookkeeping, tax, and automation",
  },
  {
    label: "VISA Assistance",
    href: "/#services",
    description: "Documentation and mobility support",
  },
  {
    label: "Business Formation",
    href: "/#services",
    description: "Company setup, licensing, and launch guidance",
  },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setMobileOpen(false);
    
    if (href === "/") {
      if (pathname === "/") {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } else if (href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.replace("#", "");
      const element = document.getElementById(targetId);
      
      if (pathname === "/") {
        if (element) {
          const offset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      } else {
        router.push(`/${href}`);
      }
    }
  };

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
          {navLinks.map((link, i) => {
            const isHash = link.href.startsWith("#");
            const Tag = isHash ? motion.a : Link;
            const hasServiceDropdown = link.label === "Services";

            if (hasServiceDropdown) {
              return (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                  className="relative group/services"
                >
                  <motion.a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="relative text-[10px] uppercase tracking-[0.25em] text-gray-400 hover:text-[#00ff88] transition-colors duration-300 group px-2 py-1 flex items-center gap-1.5"
                    style={{ fontFamily: "var(--font-mono), monospace" }}
                  >
                    <span className="relative z-10">{link.label}</span>
                    <ChevronDown
                      size={12}
                      strokeWidth={2}
                      className="relative z-10 transition-transform duration-300 group-hover/services:rotate-180"
                      aria-hidden="true"
                    />
                    <motion.span
                      className="absolute inset-0 bg-[#00ff88]/5 scale-x-0 transition-transform duration-300 origin-left"
                      whileHover={{ scaleX: 1 }}
                    />
                    <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#00ff88] group-hover:w-full transition-all duration-300 shadow-[0_0_10px_#00ff88]" />
                  </motion.a>

                  <div className="absolute left-1/2 top-full z-50 w-[380px] -translate-x-1/2 pt-5 opacity-0 translate-y-2 pointer-events-none transition-all duration-300 group-hover/services:opacity-100 group-hover/services:translate-y-0 group-hover/services:pointer-events-auto group-focus-within/services:opacity-100 group-focus-within/services:translate-y-0 group-focus-within/services:pointer-events-auto">
                    <div
                      className="relative overflow-hidden border border-[#00ff88]/20 bg-[#0a0a0f]/95 p-2 shadow-[0_18px_60px_rgba(0,0,0,0.45),0_0_35px_rgba(0,255,136,0.08)] backdrop-blur-xl"
                      style={{
                        clipPath:
                          "polygon(14px 0, 100% 0, 100% calc(100% - 14px), calc(100% - 14px) 100%, 0 100%, 0 14px)",
                      }}
                    >
                      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#00ff88] to-transparent opacity-70" />
                      <a
                        href="#services"
                        onClick={(e) => handleNavClick(e, "#services")}
                        className="mb-1 flex items-center justify-between border-b border-white/5 px-4 py-3 text-[10px] uppercase tracking-[0.25em] text-[#00ff88] transition-colors hover:text-white"
                        style={{ fontFamily: "var(--font-mono), monospace" }}
                      >
                        <span>All Services</span>
                        <span className="h-px w-8 bg-[#00ff88]/70" />
                      </a>
                      {serviceLinks.map((service) => (
                        <Link
                          key={service.label}
                          href={service.href}
                          className="group/item block px-4 py-3 transition-colors hover:bg-[#00ff88]/8 focus-visible:bg-[#00ff88]/8 focus-visible:outline-none"
                        >
                          <span
                            className="block text-[11px] uppercase tracking-[0.22em] text-gray-200 transition-colors group-hover/item:text-[#00ff88]"
                            style={{ fontFamily: "var(--font-mono), monospace" }}
                          >
                            {service.label}
                          </span>
                          <span className="mt-1 block text-xs leading-relaxed text-gray-500">
                            {service.description}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            }

            return (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.05 }}
              >
                <Tag
                  href={link.href}
                  onClick={(e: any) => isHash && handleNavClick(e, link.href)}
                  className="relative text-[10px] uppercase tracking-[0.25em] text-gray-400 hover:text-[#00ff88] transition-colors duration-300 group px-2 py-1 flex items-center"
                  style={{ fontFamily: "var(--font-mono), monospace" }}
                >
                  <span className="relative z-10">{link.label}</span>
                  <motion.span 
                    className="absolute inset-0 bg-[#00ff88]/5 scale-x-0 transition-transform duration-300 origin-left" 
                    whileHover={{ scaleX: 1 }}
                  />
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#00ff88] group-hover:w-full transition-all duration-300 shadow-[0_0_10px_#00ff88]" />
                </Tag>
              </motion.div>
            );
          })}
          
          <motion.a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
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
              {navLinks.map((link, i) => {
                const isHash = link.href.startsWith("#");
                const isHome = link.href === "/";
                const hasServiceDropdown = link.label === "Services";

                if (hasServiceDropdown) {
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: i * 0.05 }}
                      className="border-b border-white/5 pb-3"
                    >
                      <a
                        href={link.href}
                        onClick={(e) => handleNavClick(e, link.href)}
                        className="text-xs uppercase tracking-[0.25em] text-gray-400 hover:text-[#00ff88] transition-colors duration-200 py-3 flex items-center justify-between group"
                        style={{ fontFamily: "var(--font-mono), monospace" }}
                      >
                        <span className="flex items-center">
                          <motion.span
                            className="w-0 group-hover:w-4 h-[2px] bg-[#00ff88] mr-0 group-hover:mr-3 transition-all duration-300"
                          />
                          {link.label}
                        </span>
                        <ChevronDown size={14} className="text-[#00ff88]" aria-hidden="true" />
                      </a>

                      <div className="ml-4 mt-1 flex flex-col border-l border-[#00ff88]/20 pl-4">
                        {serviceLinks.map((service) => (
                          <Link
                            key={service.label}
                            href={service.href}
                            onClick={() => setMobileOpen(false)}
                            className="py-2.5 text-[11px] uppercase tracking-[0.2em] text-gray-500 transition-colors hover:text-[#00ff88]"
                            style={{ fontFamily: "var(--font-mono), monospace" }}
                          >
                            {service.label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  );
                }

                if (isHash || isHome) {
                  return (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: i * 0.05 }}
                      className="text-xs uppercase tracking-[0.25em] text-gray-400 hover:text-[#00ff88] transition-colors duration-200 py-3 border-b border-white/5 flex items-center group"
                      style={{ fontFamily: "var(--font-mono), monospace" }}
                    >
                      <motion.span 
                        className="w-0 group-hover:w-4 h-[2px] bg-[#00ff88] mr-0 group-hover:mr-3 transition-all duration-300"
                      />
                      {link.label}
                    </motion.a>
                  );
                }

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-xs uppercase tracking-[0.25em] text-gray-400 hover:text-[#00ff88] transition-colors duration-200 py-3 border-b border-white/5 flex items-center group"
                    style={{ fontFamily: "var(--font-mono), monospace" }}
                  >
                    <motion.span 
                      className="w-0 group-hover:w-4 h-[2px] bg-[#00ff88] mr-0 group-hover:mr-3 transition-all duration-300"
                    />
                    {link.label}
                  </Link>
                );
              })}
              <motion.a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
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
