"use client";
import FeatureCarousel from "@/components/ui/feature-carousel";

const services = [
  {
    id: "01",
    title: "Web & App Development",
    subtitle: "High-Performance Engineering",
    color: "#00ff88",
    description:
      "Enterprise-grade web engineering and bespoke mobile applications optimized for rapid growth in the Qatar market. We deliver sub-1.2s load times and 98/100 SEO scores through strategic Next.js and React implementations.",
    stack: ["React", "Next.js", "TypeScript", "Node.js", "React Native"],
    metrics: [{ label: "Avg Load Time", value: "<1.2s" }, { label: "SEO Score", value: "98/100" }],
  },
  {
    id: "02",
    title: "Multimedia & VFX",
    subtitle: "Visual Storytelling",
    color: "#ff00ff",
    description:
      "Award-winning video production and high-end VFX that dominate the digital attention economy. We produce high-impact motion graphics and cinematic narratives that amplify brand authority across GCC social and broadcast channels.",
    stack: ["After Effects", "Cinema 4D", "DaVinci Resolve", "Premiere Pro"],
    metrics: [{ label: "Avg View Rate", value: "+340%" }, { label: "Brand Lift", value: "+62%" }],
  },
  {
    id: "03",
    title: "Financial Services",
    subtitle: "Precision & Compliance",
    color: "#00d4ff",
    description:
      "Automated financial intelligence systems and professional audit compliance tailored specifically for Qatar’s regulatory landscape. Enhance business accuracy with bookkeeping, financial statements, and seamless tax filing integrations.",
    stack: ["Audit", "Automation", "Financial Statement", "Bookkeeping", "Tax Filing"],
    metrics: [{ label: "Accuracy", value: "100%" }, { label: "Compliance", value: "Verified" }],
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative py-28 overflow-hidden"
      style={{ background: "#12121a" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 0% 100%, rgba(0,255,136,0.04) 0%, transparent 60%), radial-gradient(ellipse 40% 50% at 100% 0%, rgba(0,212,255,0.03) 0%, transparent 60%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-16 space-y-3">
          <div
            className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-[#00ff88]"
            style={{ fontFamily: "var(--font-sharetech), monospace" }}
          >
            <span className="w-8 h-px bg-[#00ff88] shadow-[0_0_4px_#00ff88]" />
            OUR SERVICE PORTFOLIO
          </div>
          <h2
            className="text-4xl md:text-5xl font-black uppercase tracking-wide text-[#e0e0e0]"
            style={{ fontFamily: "var(--font-orbitron), monospace" }}
          >
            Our Complete{" "}
            <span
              className="neon-text"
            >
              Expertise
            </span>
          </h2>
          <p
            className="text-sm text-[#6b7280] max-w-xl leading-relaxed"
            style={{ fontFamily: "var(--font-sans), sans-serif" }}
          >
            <span className="text-[#00ff88]">{`>`} </span>
            Digital, financial, immigration, and company setup services designed to help your business launch, operate, and grow in Qatar and beyond.
          </p>
        </div>

        <FeatureCarousel />
      </div>
    </section>
  );
}
