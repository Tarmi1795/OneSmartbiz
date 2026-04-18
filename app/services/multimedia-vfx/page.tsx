import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Video Production & VFX in Qatar | Multimedia Services | One Smart Biz",
  description: "Professional video production, motion graphics, and VFX in Doha. +340% view rate increase. From brand films to social media reels — content that performs.",
  keywords: "video production qatar, VFX doha, motion graphics qatar, social media video doha, video production doha, multimedia qatar",
  openGraph: {
    title: "Video Production & VFX in Qatar | One Smart Biz",
    description: "Professional video production, motion graphics, and VFX in Doha. +340% view rate increase. Content that performs.",
    url: "https://www.onesmartbiz.pro/services/multimedia-vfx",
    type: "website",
  },
};

export default function MultimediaVFXPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-5xl mx-auto px-6 py-20">
        <Link href="/" className="text-cyan-400 text-sm hover:underline mb-8 block">← Back to Home</Link>

        <span className="text-xs text-cyan-400 uppercase tracking-wider">Service 02</span>
        <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-6" style={{ fontFamily: "var(--font-orbitron)" }}>
          Multimedia & VFX
        </h1>
        <p className="text-gray-400 text-lg max-w-3xl mb-12">
          High-end video production, motion graphics, and visual effects that capture attention in a crowded digital landscape. Compelling narratives that resonate across social media and broadcast channels.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            { value: "+340%", label: "Avg View Rate" },
            { value: "+62%", label: "Brand Lift" },
            { value: "2.1M", label: "Organic Views (Best)" },
            { value: "85%", label: "Video Traffic Share" },
          ].map((stat) => (
            <div key={stat.label} className="border border-gray-800 rounded-lg p-5 text-center">
              <div className="text-2xl font-bold text-cyan-400" style={{ fontFamily: "var(--font-orbitron)" }}>{stat.value}</div>
              <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Services */}
        <h2 className="text-2xl font-bold mb-6">What We Create</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {[
            { title: "Brand Films", desc: "2-5 minute cinematic stories that showcase your vision. Perfect for websites, investor presentations, and social media anchors.", icon: "🎬" },
            { title: "Social Media Reels", desc: "15-60 second vertical videos optimized for Instagram, TikTok, and Facebook. Trending audio, fast cuts, local relevance.", icon: "📱" },
            { title: "Product Videos", desc: "Professional demos and explainers that convert viewers into buyers. Show your product in action.", icon: "📦" },
            { title: "Motion Graphics", desc: "Animated infographics, data visualizations, and UI animations that make complex information engaging.", icon: "✨" },
            { title: "VFX & Compositing", desc: "Green screen, 3D visualization, virtual backgrounds, and visual effects that elevate your production value.", icon: "🎥" },
            { title: "Event Coverage", desc: "Professional capture of conferences, launches, and corporate events across Qatar and the GCC.", icon: "🎪" },
          ].map((service) => (
            <div key={service.title} className="border border-gray-800 rounded-lg p-6">
              <span className="text-2xl mb-3 block">{service.icon}</span>
              <h3 className="text-white font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-400 text-sm">{service.desc}</p>
            </div>
          ))}
        </div>

        {/* Tools */}
        <h2 className="text-2xl font-bold mb-6">Our Tools</h2>
        <div className="flex flex-wrap gap-3 mb-16">
          {["After Effects", "Cinema 4D", "DaVinci Resolve", "Premiere Pro", "Photoshop", "Illustrator", "Blender"].map((tool) => (
            <span key={tool} className="border border-gray-700 text-gray-300 text-sm px-4 py-2 rounded-full">{tool}</span>
          ))}
        </div>

        {/* Pricing */}
        <h2 className="text-2xl font-bold mb-6">Pricing</h2>
        <div className="overflow-x-auto mb-16">
          <table className="min-w-full border border-gray-800 text-sm">
            <thead>
              <tr className="border-b border-gray-800">
                <th className="px-6 py-3 text-left text-cyan-400">Type</th>
                <th className="px-6 py-3 text-left text-cyan-400">Price (QAR)</th>
                <th className="px-6 py-3 text-left text-cyan-400">Deliverables</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Social Media Reel", "500 – 2,000", "15-60s, edited, music, captions"],
                ["Product Video", "3,000 – 8,000", "1-2 min, scripted, professional"],
                ["Brand Film", "10,000 – 50,000", "2-5 min, cinematic, VFX, music"],
                ["Full Campaign", "30,000 – 150,000", "Multiple videos, strategy, distribution"],
              ].map(([type, price, deliverables]) => (
                <tr key={type} className="border-b border-gray-800/50">
                  <td className="px-6 py-3 text-gray-300">{type}</td>
                  <td className="px-6 py-3 text-white font-semibold">{price}</td>
                  <td className="px-6 py-3 text-gray-400">{deliverables}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* CTA */}
        <div className="border border-cyan-500/30 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Create?</h2>
          <p className="text-gray-400 mb-6">Tell us about your project and we'll get back to you within 24 hours.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/calculator" className="bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-8 py-3 rounded-lg transition-colors">
              Get Instant Quote →
            </Link>
            <a href="https://wa.me/97431308665" target="_blank" rel="noopener noreferrer" className="border border-gray-700 hover:border-cyan-500/50 text-white px-8 py-3 rounded-lg transition-colors">
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
