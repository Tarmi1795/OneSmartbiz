"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

export default function BackToHeroButton() {
  const [isVisible, setIsVisible] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 420);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    if (pathname === "/") {
      window.dispatchEvent(new Event("onesmartbiz:scroll-to-home"));
      return;
    }

    router.push("/#home");
  };

  return (
    <button
      type="button"
      aria-label="Back to hero section"
      title="Back to hero"
      onClick={handleClick}
      className={`fixed bottom-24 right-6 z-[9998] flex h-12 w-12 items-center justify-center border border-[#00ff88]/35 bg-[#0a0a0f]/85 text-[#00ff88] shadow-[0_10px_26px_rgba(0,255,136,0.16)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-[#00ff88] hover:text-[#0a0a0f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00ff88] md:bottom-28 md:right-8 ${
        isVisible
          ? "pointer-events-auto translate-y-0 opacity-100"
          : "pointer-events-none translate-y-3 opacity-0"
      }`}
      style={{
        clipPath:
          "polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)",
      }}
    >
      <ArrowUp size={22} strokeWidth={2.4} aria-hidden="true" />
    </button>
  );
}
