import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { serviceCatalog } from "@/lib/services";

export const metadata: Metadata = {
  title: "Services in Qatar | Digital, Finance, Visa & Business Setup | One Smart Biz",
  description:
    "Explore One Smart Biz services in Qatar: web development, multimedia and VFX, financial services, visa assistance, and business formation support.",
  keywords:
    "business services qatar, digital agency doha, visa assistance qatar, business formation qatar, financial services qatar, web development doha",
  alternates: {
    canonical: "https://www.onesmartbiz.pro/services",
  },
  openGraph: {
    title: "One Smart Biz Services | Qatar Business and Digital Solutions",
    description:
      "Digital, financial, immigration, and company setup services for Qatar and GCC businesses.",
    url: "https://www.onesmartbiz.pro/services",
    type: "website",
    images: [
      {
        url: "https://www.onesmartbiz.pro/services/business-formation.webp",
        width: 1200,
        height: 900,
        alt: "One Smart Biz service portfolio",
      },
    ],
  },
};

const portfolioStats = [
  { value: "5", label: "Core service tracks" },
  { value: "150+", label: "Projects and engagements" },
  { value: "<24h", label: "Typical response" },
  { value: "GCC", label: "Regional delivery context" },
];

const trustPillars = [
  "One partner across launch, operations, and growth",
  "Premium presentation with practical delivery discipline",
  "Structured process, clear milestones, and executive communication",
];

export default function ServicesPage() {
  return (
    <>
      <Nav />
      <main className="min-h-screen bg-[#07070b] text-white">
        <section className="relative min-h-[72vh] overflow-hidden pt-28">
          <Image
            src="/services/business-formation.webp"
            alt="One Smart Biz services overview"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#07070b_0%,rgba(7,7,11,0.94)_42%,rgba(7,7,11,0.68)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_32%,rgba(0,255,136,0.2),transparent_32%),radial-gradient(circle_at_76%_16%,rgba(255,0,255,0.18),transparent_30%)]" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#07070b] to-transparent" />

          <div className="relative z-10 mx-auto flex min-h-[calc(72vh-7rem)] max-w-7xl flex-col justify-end px-6 pb-14 lg:px-8">
            <div className="max-w-5xl">
              <div className="mb-5 inline-flex items-center gap-3 border border-[#00ff88]/35 bg-[#00ff88]/10 px-4 py-2 text-[11px] uppercase tracking-[0.28em] text-[#00ff88] backdrop-blur-md">
                <Sparkles size={14} aria-hidden="true" />
                One Smart Biz portfolio
              </div>
              <h1
                className="text-5xl font-black uppercase leading-[0.95] tracking-normal text-white md:text-7xl lg:text-8xl"
                style={{ fontFamily: "var(--font-orbitron), monospace" }}
              >
                Business services built for serious growth.
              </h1>
              <p className="mt-7 max-w-3xl text-base leading-8 text-white/72 md:text-xl">
                Digital, financial, immigration, and company setup support under
                one coordinated partner. Choose a focused service or combine
                tracks into a launch-ready growth system.
              </p>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/#contact"
                  className="group inline-flex items-center justify-center gap-3 bg-[#00ff88] px-6 py-4 text-sm font-black uppercase tracking-[0.2em] text-[#050509] transition-all hover:-translate-y-0.5 hover:shadow-[0_0_28px_rgba(0,255,136,0.32)]"
                  style={{
                    clipPath:
                      "polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px)",
                  }}
                >
                  Talk to an advisor
                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </Link>
                <a
                  href="https://wa.me/97431308665"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center border border-white/15 bg-white/5 px-6 py-4 text-sm font-bold uppercase tracking-[0.2em] text-white transition-all hover:-translate-y-0.5 hover:border-white/35 hover:bg-white/10"
                  style={{
                    clipPath:
                      "polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px)",
                  }}
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-white/10 bg-white/[0.025]">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-px px-6 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
            {portfolioStats.map((stat) => (
              <div key={stat.label} className="border-x border-white/5 px-4 py-7 text-center">
                <div
                  className="break-words text-2xl font-black text-[#00ff88] sm:text-3xl md:text-4xl"
                  style={{ fontFamily: "var(--font-orbitron), monospace" }}
                >
                  {stat.value}
                </div>
                <div className="mt-2 text-xs uppercase tracking-[0.18em] text-white/45">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mb-12 grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
              <div>
                <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#00ff88]">
                  Service lines
                </p>
                <h2
                  className="text-3xl font-black uppercase leading-tight text-white md:text-5xl"
                  style={{ fontFamily: "var(--font-orbitron), monospace" }}
                >
                  Pick the track that matches your next business move.
                </h2>
              </div>
              <div className="grid gap-3">
                {trustPillars.map((pillar) => (
                  <div key={pillar} className="flex gap-3 text-sm leading-7 text-white/62">
                    <CheckCircle2
                      size={18}
                      className="mt-1 shrink-0 text-[#00ff88]"
                      aria-hidden="true"
                    />
                    {pillar}
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {serviceCatalog.map((service) => (
                <Link
                  key={service.slug}
                  href={service.href}
                  className="group overflow-hidden border border-white/10 bg-[#11111a] transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-[#151520]"
                >
                  <div className="relative aspect-[16/11] overflow-hidden">
                    <Image
                      src={service.image}
                      alt={`${service.title} visual`}
                      fill
                      sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover opacity-72 transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#11111a] via-transparent to-transparent" />
                    <div
                      className="absolute left-5 top-5 border px-3 py-1.5 text-[10px] uppercase tracking-[0.22em] backdrop-blur-md"
                      style={{
                        borderColor: `${service.accent}55`,
                        color: service.accent,
                        backgroundColor: `${service.accent}12`,
                      }}
                    >
                      Service {service.number}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-black uppercase text-white">
                      {service.title}
                    </h3>
                    <p className="mt-3 min-h-[84px] text-sm leading-7 text-white/58">
                      {service.shortDescription}
                    </p>
                    <div
                      className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em]"
                      style={{ color: service.accent }}
                    >
                      View service
                      <ArrowRight
                        size={16}
                        className="transition-transform group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#0c0c13] py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
              <div>
                <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#ff00ff]">
                  Combined delivery
                </p>
                <h2
                  className="text-3xl font-black uppercase text-white md:text-5xl"
                  style={{ fontFamily: "var(--font-orbitron), monospace" }}
                >
                  Need more than one service?
                </h2>
                <p className="mt-6 text-base leading-8 text-white/62">
                  The strongest engagements combine setup, compliance, digital
                  launch, and growth assets into one coordinated roadmap. We can
                  scope a single service or build a staged plan across multiple
                  teams.
                </p>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                {[
                  "Formation plus visa support",
                  "Company setup plus website launch",
                  "Finance setup plus reporting automation",
                  "Brand campaign plus conversion landing page",
                ].map((item) => (
                  <div key={item} className="border border-white/10 bg-white/[0.025] p-6">
                    <CheckCircle2
                      size={22}
                      className="mb-5 text-[#00ff88]"
                      aria-hidden="true"
                    />
                    <div className="text-base font-bold text-white">{item}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
