import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Web Development in Doha, Qatar | React, Next.js & Mobile Apps | One Smart Biz",
  description: "Professional web development in Doha. React, Next.js, TypeScript, and React Native. Sub-1.2s load times, 98/100 SEO scores. 150+ projects delivered across Qatar and the GCC.",
  keywords: "web development doha, website design qatar, react developer qatar, next.js doha, mobile app development qatar, web developer qatar",
  openGraph: {
    title: "Web Development in Doha, Qatar | One Smart Biz",
    description: "Professional web development in Doha. React, Next.js, TypeScript, and React Native. Sub-1.2s load times, 98/100 SEO scores.",
    url: "https://www.onesmartbiz.pro/services/web-development",
    type: "website",
  },
};

export default function WebDevelopmentPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-5xl mx-auto px-6 py-20">
        <Link href="/" className="text-cyan-400 text-sm hover:underline mb-8 block">← Back to Home</Link>

        <span className="text-xs text-cyan-400 uppercase tracking-wider">Service 01</span>
        <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-6" style={{ fontFamily: "var(--font-orbitron)" }}>
          Web & App Development
        </h1>
        <p className="text-gray-400 text-lg max-w-3xl mb-12">
          Cutting-edge websites and mobile applications built with React, Next.js, and Native platforms. Optimized for speed, SEO, and user experience — from corporate portals to bespoke e-commerce systems.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            { value: "<1.2s", label: "Avg Load Time" },
            { value: "98/100", label: "SEO Score" },
            { value: "150+", label: "Projects Delivered" },
            { value: "98%", label: "Client Satisfaction" },
          ].map((stat) => (
            <div key={stat.label} className="border border-gray-800 rounded-lg p-5 text-center">
              <div className="text-2xl font-bold text-cyan-400" style={{ fontFamily: "var(--font-orbitron)" }}>{stat.value}</div>
              <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Tech Stack */}
        <h2 className="text-2xl font-bold mb-6">Technology Stack</h2>
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {[
            { title: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
            { title: "Backend", items: ["Node.js", "Python", "PostgreSQL", "Supabase"] },
            { title: "Mobile", items: ["React Native", "iOS & Android", "Push Notifications", "GPS & Payments"] },
          ].map((col) => (
            <div key={col.title} className="border border-gray-800 rounded-lg p-6">
              <h3 className="text-cyan-400 font-semibold mb-4">{col.title}</h3>
              <ul className="space-y-2">
                {col.items.map((item) => (
                  <li key={item} className="text-gray-300 text-sm flex items-center gap-2">
                    <span className="text-cyan-500">›</span> {item}
                  </li>
                ))}
              </ul>
            </div>
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
                <th className="px-6 py-3 text-left text-cyan-400">Timeline</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Landing Page", "2,000 – 5,000", "1–2 weeks"],
                ["Business Website", "5,000 – 15,000", "2–4 weeks"],
                ["E-Commerce", "15,000 – 50,000", "4–8 weeks"],
                ["Custom Web App", "50,000 – 200,000+", "8–16 weeks"],
                ["Mobile App (React Native)", "50,000 – 150,000", "8–12 weeks"],
              ].map(([type, price, time]) => (
                <tr key={type} className="border-b border-gray-800/50">
                  <td className="px-6 py-3 text-gray-300">{type}</td>
                  <td className="px-6 py-3 text-white font-semibold">{price}</td>
                  <td className="px-6 py-3 text-gray-400">{time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* CTA */}
        <div className="border border-cyan-500/30 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Build?</h2>
          <p className="text-gray-400 mb-6">Get instant pricing for your project or contact us for a custom quote.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/calculator" className="bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-8 py-3 rounded-lg transition-colors">
              Get Instant Quote →
            </Link>
            <a href="https://wa.me/97455855221" target="_blank" rel="noopener noreferrer" className="border border-gray-700 hover:border-cyan-500/50 text-white px-8 py-3 rounded-lg transition-colors">
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
