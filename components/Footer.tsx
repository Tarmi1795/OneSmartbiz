"use client";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "Estimator", href: "/calculator" },
  { label: "Portfolio", href: "/#portfolio" },
  { label: "Contact", href: "/#contact" },
];

const services = [
  "Web Development",
  "Multimedia Production",
  "Financial Systems",
  "Full-Stack Solutions",
  "Business Consulting",
];

const socialLinks = [
  {
    label: "WhatsApp",
    href: "https://wa.me/97455855221",
    color: "#00ff88",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    color: "#00d4ff",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "Twitter",
    href: "#",
    color: "#ff00ff",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/OneBiz",
    color: "#1877F2",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-[#1a1a1a] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,255,136,0.03),transparent_50%)]" />

      <div className="max-w-6xl mx-auto px-4 pt-16 pb-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="relative group p-1">
                <div className="absolute inset-0 bg-white/5 border border-white/10 rounded-md blur-[1px]" />
                <img 
                  src="/logo.gif" 
                  alt="One Smart Biz Logo" 
                  className="h-10 w-auto object-contain relative z-10 brightness-110"
                />
              </div>
            </div>
            <p className="font-mono text-xs text-[#555] leading-relaxed mb-6">
              Transforming businesses through intelligent digital solutions. Web development, multimedia, and financial systems.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-8 h-8 border border-[#1a1a1a] flex items-center justify-center transition-all hover:scale-110"
                  style={{
                    color: s.color,
                    borderColor: `${s.color}33`,
                    clipPath: "polygon(0 0, calc(100% - 4px) 0, 100% 4px, 100% 100%, 0 100%)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = `${s.color}11`;
                    (e.currentTarget as HTMLElement).style.boxShadow = `0 0 12px ${s.color}44`;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "";
                    (e.currentTarget as HTMLElement).style.boxShadow = "";
                  }}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <div className="font-mono text-xs text-[#00ff88] tracking-widest mb-4 flex items-center gap-2">
              <span className="w-4 h-px bg-[#00ff88]" />
              NAVIGATION
            </div>
            <ul className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-mono text-xs text-[#555] hover:text-[#00ff88] transition-colors flex items-center gap-2 group">
                    <span className="text-[#333] group-hover:text-[#00ff88] transition-colors">›</span>
                    {link.label.toUpperCase()}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <div className="font-mono text-xs text-[#ff00ff] tracking-widest mb-4 flex items-center gap-2">
              <span className="w-4 h-px bg-[#ff00ff]" />
              SERVICES
            </div>
            <ul className="flex flex-col gap-2">
              {services.map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="font-mono text-xs text-[#555] hover:text-[#ff00ff] transition-colors flex items-center gap-2 group">
                    <span className="text-[#333] group-hover:text-[#ff00ff] transition-colors">›</span>
                    {s.toUpperCase()}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Status */}
          <div>
            <div className="font-mono text-xs text-[#00d4ff] tracking-widest mb-4 flex items-center gap-2">
              <span className="w-4 h-px bg-[#00d4ff]" />
              SYSTEM STATUS
            </div>
            <div className="flex flex-col gap-3">
              {[
                { label: "SERVERS", status: "OPERATIONAL", color: "#00ff88" },
                { label: "UPTIME", status: "99.9%", color: "#00ff88" },
                { label: "RESPONSE TIME", status: "< 24H", color: "#00d4ff" },
                { label: "PROJECTS ACTIVE", status: "12", color: "#ff00ff" },
              ].map((item) => (
                <div key={item.label} className="flex items-center justify-between">
                  <span className="font-mono text-xs text-[#444]">{item.label}</span>
                  <span className="font-mono text-xs font-bold" style={{ color: item.color }}
                    dangerouslySetInnerHTML={{ __html: item.status }} />
                </div>
              ))}
            </div>

            <div className="mt-6 p-3 border border-[#00ff88]/20 bg-[#00ff88]/5"
              style={{ clipPath: "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 0 100%)" }}>
              <div className="font-mono text-xs text-[#00ff88] mb-1">ACCEPTING PROJECTS</div>
              <div className="font-mono text-[10px] text-[#555]">Available for new engagements. Contact us today.</div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#1a1a1a] to-transparent mb-6" />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-mono text-xs text-[#333]">
            © {year} ONE SMART BIZ. ALL SYSTEMS OPERATIONAL.
          </div>
          <div className="flex items-center gap-4">
            <span className="font-mono text-xs text-[#333]">BUILT WITH</span>
            {["NEXT.JS", "TAILWIND", "TYPESCRIPT"].map((tech, i) => (
              <span key={tech} className="font-mono text-[10px] px-2 py-0.5 border"
                style={{
                  color: ["#00ff88", "#ff00ff", "#00d4ff"][i],
                  borderColor: `${["#00ff88", "#ff00ff", "#00d4ff"][i]}33`,
                  clipPath: "polygon(0 0, calc(100% - 4px) 0, 100% 4px, 100% 100%, 0 100%)",
                }}>
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
