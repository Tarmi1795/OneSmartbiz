"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { CheckCheck, MessageCircle, SendHorizontal, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const whatsappNumber = "97431308665";
const defaultMessage =
  "Hello One Smart Biz, I would like to inquire about your services.";

export default function WhatsAppChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState(defaultMessage);

  const openWhatsApp = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const text = message.trim() || defaultMessage;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="pointer-events-none fixed bottom-8 right-8 z-[9999]">
      <motion.div
        drag
        dragMomentum={false}
        dragElastic={0.08}
        className="pointer-events-auto cursor-grab active:cursor-grabbing"
      >
        <div className="relative">
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 22 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.92, y: 16 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="absolute bottom-20 right-0 w-[min(340px,calc(100vw-3rem))] overflow-hidden border border-[#1f5f42]/60 bg-[#0b1511] shadow-[0_24px_70px_rgba(0,0,0,0.45),0_0_40px_rgba(37,211,102,0.16)]"
                style={{
                  clipPath:
                    "polygon(14px 0, 100% 0, 100% calc(100% - 14px), calc(100% - 14px) 100%, 0 100%, 0 14px)",
                }}
              >
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  aria-label="Close WhatsApp chat"
                  className="absolute right-3 top-3 z-20 rounded-full p-1.5 text-white/70 transition-colors hover:bg-white/10 hover:text-white"
                >
                  <X size={17} />
                </button>

              <div className="relative flex items-center gap-3 bg-[#075e54] px-4 py-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#25D366] shadow-[0_0_18px_rgba(37,211,102,0.35)]">
                  <MessageCircle className="text-white" size={21} />
                </div>
                <div className="min-w-0 pr-7">
                  <h4 className="truncate text-sm font-bold text-white">One Smart Biz</h4>
                  <p className="text-[11px] text-white/75">online now | replies on WhatsApp</p>
                </div>
              </div>

              <div className="relative min-h-[270px] bg-[#0b141a] px-4 py-4">
                <div
                  className="absolute inset-0 opacity-[0.05]"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)",
                    backgroundSize: "18px 18px",
                  }}
                />
                <div className="relative space-y-3">
                  <div className="mx-auto w-fit rounded-full bg-[#182229] px-3 py-1 text-[10px] font-medium uppercase tracking-[0.14em] text-white/45">
                    Today
                  </div>
                  <div className="max-w-[84%] rounded-lg rounded-tl-none bg-[#202c33] px-3 py-2 text-sm leading-relaxed text-white shadow-lg">
                    Hi, welcome to One Smart Biz. How can we help your business today?
                    <div className="mt-1 text-right text-[10px] text-white/40">09:24</div>
                  </div>
                  <div className="ml-auto max-w-[86%] rounded-lg rounded-tr-none bg-[#005c4b] px-3 py-2 text-sm leading-relaxed text-white shadow-lg">
                    I need help with a project inquiry.
                    <div className="mt-1 flex items-center justify-end gap-1 text-[10px] text-[#9ad8c8]">
                      09:25 <CheckCheck size={13} />
                    </div>
                  </div>
                  <div className="max-w-[88%] rounded-lg rounded-tl-none bg-[#202c33] px-3 py-2 text-sm leading-relaxed text-white shadow-lg">
                    Send us your details and we&apos;ll continue the conversation in WhatsApp.
                    <div className="mt-1 text-right text-[10px] text-white/40">09:25</div>
                  </div>
                </div>
              </div>

              <form onSubmit={openWhatsApp} className="flex items-end gap-2 bg-[#111b21] p-3">
                <label className="sr-only" htmlFor="whatsapp-message">
                  WhatsApp message
                </label>
                <textarea
                  id="whatsapp-message"
                  rows={2}
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  className="min-h-[46px] flex-1 resize-none rounded-2xl border border-white/10 bg-[#202c33] px-4 py-3 text-sm leading-relaxed text-white outline-none transition-colors placeholder:text-white/35 focus:border-[#25D366]/70"
                  placeholder="Type your message..."
                />
                <button
                  type="submit"
                  aria-label="Send message on WhatsApp"
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_22px_rgba(37,211,102,0.28)] transition-all hover:-translate-y-0.5 hover:bg-[#20bf5a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]"
                >
                  <SendHorizontal size={21} />
                </button>
              </form>
            </motion.div>
            )}
          </AnimatePresence>

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close WhatsApp chat" : "Open WhatsApp chat"}
            className="group relative flex h-16 w-16 items-center justify-center overflow-hidden rounded-full bg-[#25D366] shadow-[0_10px_25px_rgba(37,211,102,0.4)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(37,211,102,0.6)]"
          >
            <div className="absolute inset-0 translate-y-full bg-white/20 transition-transform duration-300 group-hover:translate-y-0" />
            {isOpen ? (
              <X className="relative z-10 text-white drop-shadow-md" size={30} />
            ) : (
              <svg viewBox="0 0 24 24" fill="white" className="relative z-10 h-9 w-9 drop-shadow-md">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            )}
          </button>

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
