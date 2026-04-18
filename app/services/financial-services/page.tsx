import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Financial Services in Qatar | Audit, Bookkeeping & Tax Filing | One Smart Biz",
  description: "Comprehensive financial services for Qatar businesses. Audit, automation, bookkeeping, VAT compliance, and tax filing. 100% accuracy. QFC-compliant.",
  keywords: "financial services qatar, bookkeeping doha, audit qatar, tax filing qatar, VAT qatar, financial automation qatar",
  openGraph: {
    title: "Financial Services in Qatar | One Smart Biz",
    description: "Comprehensive financial services for Qatar businesses. Audit, automation, bookkeeping, VAT compliance, and tax filing.",
    url: "https://www.onesmartbiz.pro/services/financial-services",
    type: "website",
  },
};

export default function FinancialServicesPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-5xl mx-auto px-6 py-20">
        <Link href="/" className="text-cyan-400 text-sm hover:underline mb-8 block">← Back to Home</Link>

        <span className="text-xs text-cyan-400 uppercase tracking-wider">Service 03</span>
        <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-6" style={{ fontFamily: "var(--font-orbitron)" }}>
          Financial Services
        </h1>
        <p className="text-gray-400 text-lg max-w-3xl mb-12">
          Comprehensive financial solutions including Audit, Automation, Financial Statements, Bookkeeping, and Tax Filing services tailored for Qatar's business landscape.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            { value: "100%", label: "Accuracy" },
            { value: "-80%", label: "Processing Time" },
            { value: "-92%", label: "Error Reduction" },
            { value: "QFC", label: "Compliant" },
          ].map((stat) => (
            <div key={stat.label} className="border border-gray-800 rounded-lg p-5 text-center">
              <div className="text-2xl font-bold text-cyan-400" style={{ fontFamily: "var(--font-orbitron)" }}>{stat.value}</div>
              <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Services */}
        <h2 className="text-2xl font-bold mb-6">What We Handle</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {[
            { title: "Audit Services", desc: "Independent audit and assurance services compliant with Qatar regulations and international standards (ISA/IFRS).", icon: "🔍" },
            { title: "Financial Statements", desc: "Preparation of P&L, Balance Sheet, Cash Flow statements — formatted per QFC or mainland requirements.", icon: "📊" },
            { title: "Bookkeeping", desc: "Day-to-day transaction recording, bank reconciliation, vendor management, and ledger maintenance. Real-time or monthly.", icon: "📒" },
            { title: "Tax Filing & VAT", desc: "Qatar 5% VAT quarterly filing, input/output VAT reconciliation, and QTA-compliant invoice formatting.", icon: "📋" },
            { title: "Financial Automation", desc: "Replace manual processes with automated invoice processing, reporting dashboards, and workflow systems.", icon: "⚡" },
            { title: "CFO Advisory", desc: "Strategic financial guidance, budgeting, forecasting, and cost optimization for growing Qatar businesses.", icon: "🎯" },
          ].map((service) => (
            <div key={service.title} className="border border-gray-800 rounded-lg p-6">
              <span className="text-2xl mb-3 block">{service.icon}</span>
              <h3 className="text-white font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-400 text-sm">{service.desc}</p>
            </div>
          ))}
        </div>

        {/* Qatar Specifics */}
        <h2 className="text-2xl font-bold mb-6">Qatar Compliance Expertise</h2>
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {[
            { title: "QFC Entities", items: ["IFRS compliance", "QFC regulatory filings", "Annual returns", "License renewals"] },
            { title: "Mainland Companies", items: ["MOCI compliance", "Commercial Companies Law", "Trade license renewals", "MOI reporting"] },
            { title: "VAT & Tax", items: ["QTA registration", "Quarterly VAT filing", "Input/output reconciliation", "10-year record retention"] },
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

        {/* CTA */}
        <div className="border border-cyan-500/30 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Automate Your Finances</h2>
          <p className="text-gray-400 mb-6">Get a free assessment of your current financial processes. We'll identify automation opportunities.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/calculator" className="bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-8 py-3 rounded-lg transition-colors">
              Get Free Assessment →
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
