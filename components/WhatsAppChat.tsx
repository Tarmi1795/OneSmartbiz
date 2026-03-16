"use client";

import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { motion, useDragControls } from "framer-motion";

export default function WhatsAppChat() {
  const [isOpen, setIsOpen] = useState(false);
  const controls = useDragControls();

  const whatsappNumber = "97400000000"; // Replace with real number
  const message = encodeURIComponent("Hello One SmartBiz! I'm interested in your services.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <div className="fixed bottom-8 right-8 z-[9999] pointer-events-none">
      <motion.div
        drag
        dragMomentum={false}
        className="pointer-events-auto cursor-grab active:cursor-grabbing"
      >
        <div className="relative">
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              className="absolute bottom-20 right-0 w-72 bg-[#12121a] border border-[#2a2a3a] p-5 shadow-[0_0_30px_rgba(0,255,136,0.1)] cyber-chamfer-sm"
            >
              <button 
                onClick={() => setIsOpen(false)}
                className="absolute top-2 right-2 text-[#6b7280] hover:text-white"
              >
                <X size={16} />
              </button>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#00ff88]/10 flex items-center justify-center">
                  <MessageCircle className="text-[#00ff88]" size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider font-display">System Support</h4>
                  <p className="text-[10px] text-[#00ff88] uppercase tracking-widest animate-pulse">Online & Ready</p>
                </div>
              </div>
              <p className="text-xs text-[#6b7280] mb-4 font-mono leading-relaxed">
                Connect with our strategic advisors via secure WhatsApp channel.
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3 bg-[#00ff88] text-[#0a0a0f] text-center text-xs font-bold uppercase tracking-widest hover:brightness-110 transition-all font-mono"
                style={{ clipPath: "polygon(0 4px, 4px 0, calc(100% - 4px) 0, 100% 4px, 100% calc(100% - 4px), calc(100% - 4px) 100%, 4px 100%, 0 calc(100% - 4px))" }}
              >
                Initialize Chat
              </a>
            </motion.div>
          )}

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-16 h-16 bg-[#00ff88] rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(0,255,136,0.4)] hover:scale-110 transition-transform group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            <MessageCircle className="text-[#0a0a0f] relative z-10" size={32} />
          </button>

          {/* Prompt Label */}
          {!isOpen && (
            <div className="absolute top-1/2 -left-36 -translate-y-1/2 hidden lg:block">
              <div className="bg-[#12121a] border border-[#2a2a3a] px-3 py-1.5 text-[10px] uppercase tracking-[0.2em] text-[#00ff88] font-mono whitespace-nowrap cyber-chamfer-sm shadow-lg">
                Direct Inquiry {">"}
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}
