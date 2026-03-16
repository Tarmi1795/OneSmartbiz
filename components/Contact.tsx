"use client";

import { useState } from "react";

const services = [
  "Web Development",
  "Multimedia Production",
  "Financial Systems",
  "Full-Stack Solutions",
  "Consulting",
];

const contactInfo = [
  {
    label: "WHATSAPP",
    value: "+97455855221",
    href: "https://wa.me/97455855221",
    color: "#00ff88",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
  {
    label: "EMAIL",
    value: "onebizfam@gmail.com",
    href: "mailto:onebizfam@gmail.com",
    color: "#ff00ff",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
  {
    label: "LOCATION",
    value: "Remote • Worldwide",
    href: null,
    color: "#00d4ff",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", service: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    
    // Construct WhatsApp message
    const message = `Hello One Smart Biz! I'm interested in your services.
Name: ${form.name}
Service: ${form.service}
Message: ${form.message}`;
    
    const whatsappUrl = `https://wa.me/97455855221?text=${encodeURIComponent(message)}`;
    
    // Wait for animation
    await new Promise((r) => setTimeout(r, 1200));
    
    // Open WhatsApp
    window.open(whatsappUrl, "_blank");
    
    setStatus("sent");
  };

  return (
    <section id="contact" className="relative py-24 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(0,255,136,0.06),transparent_60%)]" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-xs text-[#00ff88] tracking-widest">[04]</span>
            <div className="h-px flex-1 bg-gradient-to-r from-[#00ff88]/40 to-transparent" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-black text-white mb-4 uppercase tracking-tight">
            TALK TO{" "}
            <span className="bg-gradient-to-r from-[#00ff88] via-[#00d4ff] to-[#ff00ff] bg-clip-text text-transparent">
              OSB
            </span>
          </h2>
          <p className="font-mono text-[#888] text-sm max-w-xl">
            Ready to grow your business? Send us a message and our team in Doha will respond within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-1">
          {/* Left: Contact Info */}
          <div className="lg:col-span-2 bg-[#0a0a0a] border border-[#1a1a1a] p-6 flex flex-col gap-6"
            style={{ clipPath: "polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 0 100%)" }}>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <div className="w-2 h-2 rounded-full bg-[#00ff88] animate-pulse" />
                <span className="font-mono text-xs text-[#00ff88] tracking-widest">STATUS: ONLINE</span>
              </div>
              <div className="font-mono text-xs text-[#444] mt-2">TRANSMISSION CHANNELS</div>
            </div>

            <div className="flex flex-col gap-4">
              {contactInfo.map((item) => (
                <div key={item.label} className="border border-[#1a1a1a] p-4 hover:border-opacity-60 transition-colors"
                  style={{ borderColor: `${item.color}22` }}>
                  <div className="flex items-center gap-2 mb-2">
                    <span style={{ color: item.color }}>{item.icon}</span>
                    <span className="font-mono text-xs tracking-widest" style={{ color: item.color }}>
                      {item.label}
                    </span>
                  </div>
                  {item.href ? (
                    <a href={item.href} className="font-mono text-sm text-white hover:underline transition-all"
                      style={{ textShadow: `0 0 8px ${item.color}66` }}>
                      {item.value}
                    </a>
                  ) : (
                    <span className="font-mono text-sm text-white">{item.value}</span>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-auto border border-[#00ff88]/20 p-4"
              style={{ clipPath: "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 0 100%)" }}>
              <div className="font-mono text-xs text-[#00ff88] mb-2">FASTEST RESPONSE</div>
              <a
                href="https://wa.me/97455855221"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 w-full justify-center py-3 bg-[#00ff88]/10 border border-[#00ff88]/40 text-[#00ff88] font-mono text-sm font-bold tracking-widest hover:bg-[#00ff88]/20 transition-all"
                style={{ clipPath: "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 0 100%)" }}>
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                MESSAGE ON WHATSAPP
              </a>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-3 bg-[#0a0a0a] border border-[#1a1a1a]"
            style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 20px 100%, 0 calc(100% - 20px))" }}>
            <div className="terminal-header px-4 py-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                <div className="w-3 h-3 rounded-full bg-[#28c840]" />
              </div>
              <span className="font-mono text-xs text-[#444] ml-3">contact_form</span>
            </div>

            {status === "sent" ? (
              <div className="p-8 flex flex-col items-center justify-center min-h-[400px] text-center">
                <div className="w-16 h-16 border-2 border-[#00ff88] flex items-center justify-center mb-6"
                  style={{ clipPath: "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 0 100%)", boxShadow: "0 0 30px #00ff8866" }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="#00ff88" strokeWidth="2" className="w-8 h-8">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <div className="font-display text-2xl text-[#00ff88] mb-2 tracking-widest">MESSAGE RECEIVED</div>
                <div className="font-mono text-sm text-[#888]">Thank you! Our experts will get back to you soon.</div>
                <button onClick={() => { setStatus("idle"); setForm({ name: "", service: "", message: "" }); }}
                  className="mt-6 font-mono text-xs text-[#444] hover:text-[#00ff88] transition-colors tracking-widest">
                  SEND ANOTHER →
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="p-6 flex flex-col gap-5">
                <div className="font-mono text-xs text-[#444] mb-2">
                  <span className="text-[#00ff88]">$</span> Fill in the form below
                </div>

                <div className="flex flex-col gap-1.5">
                   <label className="font-mono text-xs text-[#666] tracking-widest">YOUR NAME</label>
                  <div className="flex items-center border border-[#1a1a1a] focus-within:border-[#00ff88]/50 transition-colors"
                    style={{ clipPath: "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 0 100%)" }}>
                    <span className="font-mono text-[#00ff88] px-3 text-sm select-none">›</span>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name..."
                      className="flex-1 bg-transparent py-3 pr-3 font-mono text-sm text-white placeholder-[#333] outline-none"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="font-mono text-xs text-[#666] tracking-widest">SERVICE INTEREST</label>
                  <div className="flex items-center border border-[#1a1a1a] focus-within:border-[#ff00ff]/50 transition-colors"
                    style={{ clipPath: "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 0 100%)" }}>
                    <span className="font-mono text-[#ff00ff] px-3 text-sm select-none">›</span>
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      required
                      className="flex-1 bg-transparent py-3 pr-3 font-mono text-sm text-white outline-none appearance-none cursor-pointer"
                      style={{ color: form.service ? "white" : "#333" }}>
                      <option value="" disabled style={{ background: "#0a0a0a" }}>Select a service...</option>
                      {services.map((s) => (
                        <option key={s} value={s} style={{ background: "#0a0a0a", color: "white" }}>{s}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                   <label className="font-mono text-xs text-[#666] tracking-widest">YOUR MESSAGE</label>
                  <div className="flex border border-[#1a1a1a] focus-within:border-[#00d4ff]/50 transition-colors"
                    style={{ clipPath: "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 0 100%)" }}>
                    <span className="font-mono text-[#00d4ff] px-3 pt-3 text-sm select-none">›</span>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Describe your project or inquiry..."
                      className="flex-1 bg-transparent py-3 pr-3 font-mono text-sm text-white placeholder-[#333] outline-none resize-none"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="mt-2 w-full py-4 bg-[#00ff88]/10 border border-[#00ff88]/40 text-[#00ff88] font-display font-black text-sm tracking-widest uppercase hover:bg-[#00ff88]/20 hover:border-[#00ff88]/70 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ clipPath: "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 0 100%)", boxShadow: status === "sending" ? "none" : "0 0 20px #00ff8833" }}>
                   {status === "sending" ? (
                    <span className="flex items-center justify-center gap-2">
                      <span className="inline-block w-3 h-3 border border-[#00ff88] border-t-transparent rounded-full animate-spin" />
                      SENDING...
                    </span>
                  ) : (
                    "SEND MESSAGE →"
                  )}
                </button>

                <p className="font-mono text-xs text-[#333] text-center">
                  Or reach us directly on{" "}
                  <a href="https://wa.me/97455855221" className="text-[#00ff88] hover:underline">WhatsApp</a>
                  {" "}for instant response
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
