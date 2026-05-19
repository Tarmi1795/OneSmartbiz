import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Clock3,
  MessageCircle,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import type { ServiceData } from "@/lib/services";

type ServiceDetailPageProps = {
  service: ServiceData;
};

const trustSignals = [
  "Qatar-ready delivery",
  "GCC business context",
  "Clear scope and milestones",
  "Executive-ready communication",
];

export default function ServiceDetailPage({ service }: ServiceDetailPageProps) {
  const contactHref = `/?service=${encodeURIComponent(service.title)}#contact`;
  const whatsappHref = `https://wa.me/97431308665?text=${encodeURIComponent(
    `Hello One Smart Biz, I am interested in ${service.title}.`
  )}`;

  return (
    <>
      <Nav />
      <main className="min-h-screen bg-[#07070b] text-white">
        <section className="relative min-h-[76vh] overflow-hidden pt-28">
          <Image
            src={service.image}
            alt={`${service.title} service visual`}
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-[0.34]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#07070b_0%,rgba(7,7,11,0.92)_36%,rgba(7,7,11,0.58)_68%,rgba(7,7,11,0.88)_100%)]" />
          <div
            className="absolute inset-0 opacity-30"
            style={{
              background: `radial-gradient(circle at 18% 38%, ${service.accent}30, transparent 34%), radial-gradient(circle at 78% 20%, ${service.secondaryAccent}26, transparent 28%)`,
            }}
          />
          <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#07070b] to-transparent" />

          <div className="relative z-10 mx-auto flex min-h-[calc(76vh-7rem)] max-w-7xl flex-col justify-end px-6 pb-14 lg:px-8">
            <div className="mb-8 flex flex-wrap items-center gap-3 text-[11px] uppercase tracking-[0.24em] text-white/55">
              <Link href="/" className="transition-colors hover:text-white">
                Home
              </Link>
              <ChevronRight size={14} aria-hidden="true" />
              <Link href="/services" className="transition-colors hover:text-white">
                Services
              </Link>
              <ChevronRight size={14} aria-hidden="true" />
              <span style={{ color: service.accent }}>{service.number}</span>
            </div>

            <div className="max-w-4xl">
              <div
                className="mb-5 inline-flex items-center gap-3 border px-4 py-2 text-[11px] uppercase tracking-[0.28em] backdrop-blur-md"
                style={{
                  borderColor: `${service.accent}55`,
                  color: service.accent,
                  backgroundColor: `${service.accent}10`,
                }}
              >
                <Sparkles size={14} aria-hidden="true" />
                {service.eyebrow}
              </div>
              <h1
                className="max-w-4xl text-5xl font-black uppercase leading-[0.95] tracking-normal text-white md:text-7xl lg:text-8xl"
                style={{ fontFamily: "var(--font-orbitron), monospace" }}
              >
                {service.title}
              </h1>
              <p className="mt-7 max-w-3xl text-base leading-8 text-white/72 md:text-xl">
                {service.description}
              </p>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <Link
                  href={contactHref}
                  className="group inline-flex items-center justify-center gap-3 px-6 py-4 text-sm font-black uppercase tracking-[0.2em] text-[#050509] transition-all hover:-translate-y-0.5"
                  style={{
                    backgroundColor: service.accent,
                    boxShadow: `0 0 28px ${service.accent}44`,
                    clipPath:
                      "polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px)",
                  }}
                >
                  {service.primaryCta}
                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </Link>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 border border-white/15 bg-white/5 px-6 py-4 text-sm font-bold uppercase tracking-[0.2em] text-white transition-all hover:-translate-y-0.5 hover:border-white/35 hover:bg-white/10"
                  style={{
                    clipPath:
                      "polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px)",
                  }}
                >
                  <MessageCircle size={18} aria-hidden="true" />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-white/10 bg-white/[0.025]">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-px px-6 py-0 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
            {service.stats.map((stat) => (
              <div
                key={stat.label}
                className="border-x border-white/5 px-4 py-7 text-center transition-colors hover:bg-white/[0.03]"
              >
                <div
                  className="break-words text-2xl font-black sm:text-3xl md:text-4xl"
                  style={{
                    color: service.accent,
                    fontFamily: "var(--font-orbitron), monospace",
                  }}
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

        <section className="relative overflow-hidden py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
              <div className="lg:sticky lg:top-28">
                <p
                  className="mb-4 text-xs uppercase tracking-[0.3em]"
                  style={{ color: service.accent }}
                >
                  Why it works
                </p>
                <h2
                  className="text-3xl font-black uppercase leading-tight text-white md:text-5xl"
                  style={{ fontFamily: "var(--font-orbitron), monospace" }}
                >
                  Built around business outcomes, not loose deliverables.
                </h2>
                <p className="mt-6 text-base leading-8 text-white/62">
                  {service.outcome}
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  {trustSignals.map((signal) => (
                    <span
                      key={signal}
                      className="border border-white/10 bg-white/[0.03] px-4 py-2 text-xs uppercase tracking-[0.16em] text-white/55"
                    >
                      {signal}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {service.valueProps.map((item) => (
                  <div
                    key={item.title}
                    className="group border border-white/10 bg-[#11111a]/78 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-[#151520]"
                    style={{
                      boxShadow: `0 0 0 1px transparent, 0 22px 70px rgba(0,0,0,0.24)`,
                    }}
                  >
                    <div
                      className="mb-5 flex h-11 w-11 items-center justify-center border transition-all duration-300 group-hover:scale-105"
                      style={{
                        borderColor: `${service.accent}55`,
                        color: service.accent,
                        backgroundColor: `${service.accent}10`,
                      }}
                    >
                      <CheckCircle2 size={21} aria-hidden="true" />
                    </div>
                    <h3 className="text-lg font-bold text-white">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-white/55">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#0c0c13] py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div>
                <p
                  className="mb-4 text-xs uppercase tracking-[0.3em]"
                  style={{ color: service.accent }}
                >
                  Delivery process
                </p>
                <h2
                  className="text-3xl font-black uppercase text-white md:text-5xl"
                  style={{ fontFamily: "var(--font-orbitron), monospace" }}
                >
                  Clear path from first call to launch.
                </h2>
              </div>
              <Link
                href={contactHref}
                className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-white/70 transition-colors hover:text-white"
              >
                Start a brief <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {service.process.map((step, index) => (
                <div
                  key={step.title}
                  className="relative min-h-[260px] overflow-hidden border border-white/10 bg-[#11111a] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/20"
                >
                  <div
                    className="absolute -right-6 -top-6 h-24 w-24 rounded-full blur-3xl"
                    style={{ backgroundColor: `${service.accent}22` }}
                  />
                  <div
                    className="mb-12 text-5xl font-black text-white/10"
                    style={{ fontFamily: "var(--font-orbitron), monospace" }}
                  >
                    0{index + 1}
                  </div>
                  <h3 className="text-lg font-bold text-white">{step.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/55">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <p
                  className="mb-4 text-xs uppercase tracking-[0.3em]"
                  style={{ color: service.accent }}
                >
                  Engagement options
                </p>
                <h2
                  className="text-3xl font-black uppercase text-white md:text-5xl"
                  style={{ fontFamily: "var(--font-orbitron), monospace" }}
                >
                  Practical packages with room for custom scope.
                </h2>
                <div className="mt-10 grid gap-4">
                  {service.packages.map((pack) => (
                    <div
                      key={pack.name}
                      className="grid gap-5 border border-white/10 bg-white/[0.025] p-6 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.04] md:grid-cols-[0.9fr_1fr]"
                    >
                      <div>
                        <h3 className="text-xl font-bold text-white">
                          {pack.name}
                        </h3>
                        <div
                          className="mt-3 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.16em]"
                          style={{ color: service.accent }}
                        >
                          <Clock3 size={16} aria-hidden="true" />
                          {pack.price}
                        </div>
                      </div>
                      <p className="text-sm leading-7 text-white/58">
                        {pack.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <div className="border border-white/10 bg-[#11111a] p-7">
                  <div
                    className="mb-5 flex h-12 w-12 items-center justify-center border"
                    style={{
                      borderColor: `${service.secondaryAccent}55`,
                      color: service.secondaryAccent,
                      backgroundColor: `${service.secondaryAccent}10`,
                    }}
                  >
                    <ShieldCheck size={24} aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    Delivery guarantees
                  </h3>
                  <ul className="mt-5 space-y-4">
                    {service.proofPoints.map((point) => (
                      <li key={point} className="flex gap-3 text-sm text-white/62">
                        <CheckCircle2
                          size={18}
                          className="mt-0.5 shrink-0"
                          style={{ color: service.accent }}
                          aria-hidden="true"
                        />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border border-white/10 bg-white/[0.025] p-7">
                  <p className="text-lg leading-8 text-white/78">
                    &quot;{service.testimonial.quote}&quot;
                  </p>
                  <div className="mt-6 border-t border-white/10 pt-5">
                    <div className="font-bold text-white">
                      {service.testimonial.author}
                    </div>
                    <div className="mt-1 text-xs uppercase tracking-[0.18em] text-white/42">
                      {service.testimonial.role}
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {service.tools.map((tool) => (
                    <span
                      key={tool}
                      className="border border-white/10 bg-white/[0.03] px-3 py-2 text-xs uppercase tracking-[0.14em] text-white/48"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#0c0c13] py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
              <div>
                <p
                  className="mb-4 text-xs uppercase tracking-[0.3em]"
                  style={{ color: service.accent }}
                >
                  Common questions
                </p>
                <h2
                  className="text-3xl font-black uppercase text-white md:text-5xl"
                  style={{ fontFamily: "var(--font-orbitron), monospace" }}
                >
                  What clients ask before starting.
                </h2>
              </div>
              <div className="grid gap-4">
                {service.faq.map((item) => (
                  <div
                    key={item.title}
                    className="border border-white/10 bg-[#11111a] p-6"
                  >
                    <h3 className="text-lg font-bold text-white">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-white/58">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden py-20 md:py-28">
          <div
            className="absolute inset-0 opacity-40"
            style={{
              background: `radial-gradient(circle at 50% 0%, ${service.accent}22, transparent 36%)`,
            }}
          />
          <div className="relative z-10 mx-auto max-w-5xl px-6 text-center lg:px-8">
            <h2
              className="text-3xl font-black uppercase leading-tight text-white md:text-6xl"
              style={{ fontFamily: "var(--font-orbitron), monospace" }}
            >
              Ready to make {service.title.toLowerCase()} sharper?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/62">
              Share the goal, deadline, and current blockers. We will respond
              with a practical next step and a clear path forward.
            </p>
            <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href={contactHref}
                className="inline-flex items-center justify-center gap-3 px-7 py-4 text-sm font-black uppercase tracking-[0.2em] text-[#050509] transition-all hover:-translate-y-0.5"
                style={{
                  backgroundColor: service.accent,
                  boxShadow: `0 0 28px ${service.accent}44`,
                  clipPath:
                    "polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px)",
                }}
              >
                {service.primaryCta}
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-3 border border-white/15 bg-white/5 px-7 py-4 text-sm font-bold uppercase tracking-[0.2em] text-white transition-all hover:-translate-y-0.5 hover:border-white/35"
                style={{
                  clipPath:
                    "polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px)",
                }}
              >
                Explore Services
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
