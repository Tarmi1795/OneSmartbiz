"use client";

import { useState } from "react";

const industries = [
  "F&B / Restaurant",
  "Retail / E-Commerce",
  "Real Estate",
  "Tech / SaaS",
  "Healthcare",
  "Education",
  "Logistics",
  "Consulting",
];

const metrics = [
  { key: "investment", label: "Initial Investment (QAR)", placeholder: "500,000", prefix: "QAR" },
  { key: "monthly_revenue", label: "Projected Monthly Revenue", placeholder: "150,000", prefix: "QAR" },
  { key: "monthly_costs", label: "Monthly Operating Costs", placeholder: "80,000", prefix: "QAR" },
];

function computeResults(data: Record<string, string>) {
  const inv = parseFloat(data.investment?.replace(/,/g, "") || "0");
  const rev = parseFloat(data.monthly_revenue?.replace(/,/g, "") || "0");
  const costs = parseFloat(data.monthly_costs?.replace(/,/g, "") || "0");
  if (!inv || !rev || !costs) return null;
  const monthlyProfit = rev - costs;
  const annualProfit = monthlyProfit * 12;
  const roi = ((annualProfit / inv) * 100).toFixed(1);
  const breakEven = costs > 0 ? Math.ceil(inv / Math.max(monthlyProfit, 1)) : 0;
  const margin = ((monthlyProfit / rev) * 100).toFixed(1);
  const viable = monthlyProfit > 0 && breakEven <= 36;
  return { monthlyProfit, annualProfit, roi, breakEven, margin, viable };
}

export default function NeuralEngine() {
  const [form, setForm] = useState<Record<string, string>>({});
  const [industry, setIndustry] = useState("");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<any>(null);

  const handleAnalyze = async () => {
    setLoading(true);
    setResults(null);
    try {
      const res = await fetch("/api/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ metrics: form, industry }),
      });
      const data = await res.json();
      if (data.error) throw new Error(data.error);
      setResults(data);
    } catch (err) {
      console.error("AI Analysis failed:", err);
      // Fallback to local computation if API fails
      const localResults = computeResults(form);
      setResults(localResults);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (key: string, val: string) => {
    setForm((p) => ({ ...p, [key]: val }));
  };

  return (
    <section
      id="neural"
      className="relative py-28 overflow-hidden"
      style={{ background: "#0a0a0f" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(255,0,255,0.03) 0%, transparent 70%)",
        }}
      />
      <div className="cyber-grid-bg-dense absolute inset-0 pointer-events-none opacity-60" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-14 space-y-3">
          <div
            className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-[#ff00ff]"
            style={{ fontFamily: "var(--font-sharetech), monospace" }}
          >
            <span className="w-8 h-px bg-[#ff00ff] shadow-[0_0_4px_#ff00ff]" />
            Smart Business Advisor :: AI Analytics
          </div>
          <h2
            className="text-4xl md:text-5xl font-black uppercase tracking-wide text-[#e0e0e0]"
            style={{ fontFamily: "var(--font-orbitron), monospace" }}
          >
            Smart{" "}
            <span
              className="text-[#ff00ff]"
              style={{ textShadow: "0 0 10px rgba(255,0,255,0.5), 0 0 20px rgba(255,0,255,0.3)" }}
            >
              AI Business
            </span>{" "}
            Advisor
          </h2>
          <p
            className="text-sm text-[#6b7280] max-w-xl leading-relaxed"
            style={{ fontFamily: "var(--font-jetbrains), monospace" }}
          >
            <span className="text-[#ff00ff]">{'> '}</span>
            Use our Smart AI to plan your next successful venture. Instantly calculate your profit potential and market viability in Qatar&apos;s growing economy.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div
            className="relative terminal-header"
            style={{
              background: "#12121a",
              border: "1px solid #2a2a3a",
              clipPath: "polygon(0 12px,12px 0,calc(100% - 12px) 0,100% 12px,100% calc(100% - 12px),calc(100% - 12px) 100%,12px 100%,0 calc(100% - 12px))",
            }}
          >
            <div
              className="absolute top-0 left-0 right-0 h-7 flex items-center px-4 gap-2"
              style={{ background: "#1c1c2e", borderBottom: "1px solid #2a2a3a" }}
            >
              <span className="w-2 h-2 rounded-full bg-[#ff3366]" />
              <span className="w-2 h-2 rounded-full bg-[#ffaa00]" />
              <span className="w-2 h-2 rounded-full bg-[#ff00ff] shadow-[0_0_4px_#ff00ff]" />
              <span
                className="ml-2 text-[10px] uppercase tracking-[0.2em] text-[#6b7280]"
                style={{ fontFamily: "var(--font-sharetech), monospace" }}
              >
                SMART ADVISOR :: PROJECT DETAILS
              </span>
            </div>

            <div className="p-6 space-y-5">
              <div>
                <label
                  className="block text-[11px] uppercase tracking-[0.2em] text-[#6b7280] mb-2"
                  style={{ fontFamily: "var(--font-sharetech), monospace" }}
                >
                  {`>`} Industry Sector
                </label>
                <div className="relative">
                  <select
                    value={industry}
                    onChange={(e) => { setIndustry(e.target.value); setResults(null); }}
                    className="w-full appearance-none pl-6 pr-10 py-3 text-sm text-[#00ff88] bg-[#0a0a0f] border border-[#2a2a3a] outline-none focus:border-[#ff00ff] transition-colors duration-200"
                    style={{
                      fontFamily: "var(--font-jetbrains), monospace",
                      clipPath: "polygon(0 6px,6px 0,calc(100% - 6px) 0,100% 6px,100% calc(100% - 6px),calc(100% - 6px) 100%,6px 100%,0 calc(100% - 6px))",
                    }}
                  >
                    <option value="" style={{ background: "#12121a" }}>-- select sector --</option>
                    {industries.map((ind) => (
                      <option key={ind} value={ind} style={{ background: "#12121a" }}>{ind}</option>
                    ))}
                  </select>
                  <span
                    className="absolute left-2 top-1/2 -translate-y-1/2 text-[#ff00ff] text-xs"
                    style={{ fontFamily: "var(--font-sharetech), monospace" }}
                  >
                    {`>`}
                  </span>
                </div>
              </div>

              {metrics.map(({ key, label, placeholder }) => (
                <div key={key}>
                  <label
                    className="block text-[11px] uppercase tracking-[0.2em] text-[#6b7280] mb-2"
                    style={{ fontFamily: "var(--font-sharetech), monospace" }}
                  >
                    {`>`} {label}
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      inputMode="numeric"
                      placeholder={placeholder}
                      value={form[key] || ""}
                      onChange={(e) => handleChange(key, e.target.value)}
                      className="w-full pl-6 pr-4 py-3 text-sm text-[#00ff88] bg-[#0a0a0f] border border-[#2a2a3a] outline-none focus:border-[#ff00ff] placeholder-[#2a2a3a] transition-all duration-200"
                      style={{
                        fontFamily: "var(--font-jetbrains), monospace",
                        clipPath: "polygon(0 6px,6px 0,calc(100% - 6px) 0,100% 6px,100% calc(100% - 6px),calc(100% - 6px) 100%,6px 100%,0 calc(100% - 6px))",
                      }}
                    />
                    <span
                      className="absolute left-2 top-1/2 -translate-y-1/2 text-[#ff00ff] text-xs"
                      style={{ fontFamily: "var(--font-sharetech), monospace" }}
                    >
                      {`>`}
                    </span>
                  </div>
                </div>
              ))}

              <button
                onClick={handleAnalyze}
                disabled={loading}
                className="w-full py-4 text-sm font-bold uppercase tracking-[0.25em] text-[#0a0a0f] bg-[#ff00ff] transition-all duration-150 hover:brightness-110 disabled:opacity-50"
                style={{
                  clipPath: "polygon(0 8px,8px 0,calc(100% - 8px) 0,100% 8px,100% calc(100% - 8px),calc(100% - 8px) 100%,8px 100%,0 calc(100% - 8px))",
                  boxShadow: "0 0 10px #ff00ff, 0 0 25px #ff00ff40",
                  fontFamily: "var(--font-sharetech), monospace",
                }}
              >
                {loading ? "Analyzing My Business..." : "Reveal Business Insights"}
              </button>
            </div>
          </div>

          <div
            className="relative terminal-header min-h-[420px]"
            style={{
              background: "#12121a",
              border: `1px solid ${results ? (results.viable ? "#00ff88" : "#ff3366") : "#2a2a3a"}`,
              clipPath: "polygon(0 12px,12px 0,calc(100% - 12px) 0,100% 12px,100% calc(100% - 12px),calc(100% - 12px) 100%,12px 100%,0 calc(100% - 12px))",
              boxShadow: results
                ? results.viable
                  ? "0 0 20px rgba(0,255,136,0.12)"
                  : "0 0 20px rgba(255,51,102,0.12)"
                : "none",
              transition: "border-color 0.3s, box-shadow 0.3s",
            }}
          >
            <div
              className="absolute top-0 left-0 right-0 h-7 flex items-center px-4 gap-2"
              style={{ background: "#1c1c2e", borderBottom: "1px solid #2a2a3a" }}
            >
              <span className="w-2 h-2 rounded-full bg-[#ff3366]" />
              <span className="w-2 h-2 rounded-full bg-[#ffaa00]" />
              <span className="w-2 h-2 rounded-full" style={{ background: results?.viable ? "#00ff88" : "#2a2a3a", boxShadow: results?.viable ? "0 0 4px #00ff88" : "none" }} />
              <span
                className="ml-2 text-[10px] uppercase tracking-[0.2em] text-[#6b7280]"
                style={{ fontFamily: "var(--font-sharetech), monospace" }}
              >
                SMART ADVISOR :: GROWTH ANALYSIS
              </span>
            </div>

            <div className="p-6">
              {!results ? (
                <div className="flex flex-col items-center justify-center h-72 gap-4 opacity-40">
                  <div
                    className="text-4xl font-black text-[#2a2a3a]"
                    style={{ fontFamily: "var(--font-orbitron), monospace" }}
                  >
                    AWAITING
                  </div>
                  <div
                    className="text-xs uppercase tracking-[0.3em] text-[#2a2a3a]"
                    style={{ fontFamily: "var(--font-sharetech), monospace" }}
                  >
                    {`>`} Provide your details to see the magic...
                  </div>
                  <div
                    className="w-16 h-px bg-[#2a2a3a]"
                    style={{ animation: "borderPulse 2s ease-in-out infinite" }}
                  />
                </div>
              ) : (
                <div className="space-y-4">
                  <div
                    className="flex items-center gap-3 py-3 px-4 border-l-2"
                    style={{
                      borderColor: results.viable ? "#00ff88" : "#ff3366",
                      background: results.viable ? "rgba(0,255,136,0.05)" : "rgba(255,51,102,0.05)",
                    }}
                  >
                    <span
                      className="text-sm font-bold uppercase tracking-[0.15em]"
                      style={{
                        fontFamily: "var(--font-sharetech), monospace",
                        color: results.viable ? "#00ff88" : "#ff3366",
                        textShadow: results.viable ? "0 0 8px rgba(0,255,136,0.5)" : "0 0 8px rgba(255,51,102,0.5)",
                      }}
                    >
                      {results.viable ? "// GREAT POTENTIAL" : "// REVIEW STRATEGY"}
                    </span>
                    {industry && (
                      <span
                        className="ml-auto text-[10px] uppercase tracking-[0.15em] text-[#6b7280]"
                        style={{ fontFamily: "var(--font-sharetech), monospace" }}
                      >
                        [{industry}]
                      </span>
                    )}
                  </div>

                  {[
                    { label: "Monthly Profit", value: `QAR ${results.monthlyProfit.toLocaleString()}`, color: results.monthlyProfit >= 0 ? "#00ff88" : "#ff3366" },
                    { label: "Annual Profit", value: `QAR ${results.annualProfit.toLocaleString()}`, color: results.annualProfit >= 0 ? "#00d4ff" : "#ff3366" },
                    { label: "ROI (Annual)", value: results.roi, color: "#ff00ff" },
                    { label: "Profit Margin", value: results.margin, color: "#00d4ff" },
                    { label: "Break-Even", value: `${results.breakEven} months`, color: results.breakEven <= 24 ? "#00ff88" : results.breakEven <= 36 ? "#ffaa00" : "#ff3366" },
                  ].map(({ label, value, color }) => (
                    <div key={label} className="flex items-center justify-between py-2 border-b border-[#2a2a3a]">
                      <span
                        className="text-[11px] uppercase tracking-[0.15em] text-[#6b7280]"
                        style={{ fontFamily: "var(--font-sharetech), monospace" }}
                      >
                        {">"} {label}
                      </span>
                      <span
                        className="text-sm font-bold"
                        style={{
                          fontFamily: "var(--font-orbitron), monospace",
                          color,
                          textShadow: `0 0 8px ${color}80`,
                        }}
                      >
                        {value}
                      </span>
                    </div>
                  ))}

                  {results.deepInsight && (
                    <div
                      className="mt-4 p-3 text-[11px] text-[#00ff88] leading-relaxed border-l border-[#00ff88]/30"
                      style={{
                        fontFamily: "var(--font-jetbrains), monospace",
                        background: "rgba(0,255,136,0.03)",
                      }}
                    >
                      <span className="text-[#ff00ff] font-bold">EXPERT SUGGESTION:</span> {results.deepInsight}
                    </div>
                  )}

                  <a
                    href="#contact"
                    className="block w-full py-3 text-xs font-bold uppercase tracking-[0.2em] text-center text-[#0a0a0f] bg-[#00ff88] transition-all duration-150 hover:brightness-110"
                    style={{
                      clipPath: "polygon(0 6px,6px 0,calc(100% - 12px) 0,100% 12px,100% calc(100% - 12px),calc(100% - 12px) 100%,12px 100%,0 calc(100% - 12px))",
                      boxShadow: "0 0 10px #00ff88, 0 0 20px #00ff8840",
                      fontFamily: "var(--font-sharetech), monospace",
                    }}
                  >
                    Connect With An Expert
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
