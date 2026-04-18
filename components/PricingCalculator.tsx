"use client";

import React, { useState, useMemo, useEffect } from "react";
import {
  Plus,
  Trash2,
  Settings,
  X,
  Check,
  Calculator,
  KeyRound,
  Server,
  Shield,
  Database,
  LayoutTemplate,
  BriefcaseBusiness,
  Globe,
  Terminal,
  Bot,
  TrendingUp,
  MessageCircle,
  FileText,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import { ModernPricingPage } from "./ui/animated-glassy-pricing";

interface Prices {
  basePackage: number;
  brandKit: number;
  multilingual: number;
  customDashboard: number;
  bookingSystem: number;
  paymentGateway: number;
  speedOptimization: number;
  additionalPage: number;
  cms: number;
  backend: number;
  apiIntegrations: number;
  database: number;
  userAuth: number;
  aiChat: number;
  aiCore: number;
  animated: number;
  maintenance: number;
}

const DEFAULT_PRICES: Prices = {
  basePackage: 600,
  brandKit: 500,
  multilingual: 800,
  customDashboard: 1200,
  bookingSystem: 700,
  paymentGateway: 600,
  speedOptimization: 300,
  additionalPage: 100,
  cms: 1500,
  backend: 1500,
  apiIntegrations: 1500,
  database: 1000,
  userAuth: 800,
  aiChat: 200,
  aiCore: 2500,
  animated: 2000,
  maintenance: 300,
};

const CURRENCIES = {
  QAR: { symbol: "QR", rate: 1, label: "Qatari Riyal" },
  USD: { symbol: "$", rate: 0.274, label: "US Dollar" },
  PHP: { symbol: "₱", rate: 15.3, label: "Philippine Peso" },
};

type CurrencyKey = keyof typeof CURRENCIES;

interface CustomItem {
  id: string;
  name: string;
  price: number;
}

export default function PricingCalculator() {
  const [prices, setPrices] = useState<Prices>(DEFAULT_PRICES);
  const [currency, setCurrency] = useState<CurrencyKey>("QAR");

  // User selections
  const [includeBase, setIncludeBase] = useState(true);
  const [additionalPages, setAdditionalPages] = useState(0);
  const [toggles, setToggles] = useState({
    brandKit: false,
    multilingual: false,
    customDashboard: false,
    bookingSystem: false,
    paymentGateway: false,
    speedOptimization: false,
    cms: false,
    backend: false,
    apiIntegrations: false,
    database: false,
    userAuth: false,
    aiChat: false,
    aiCore: false,
    animated: false,
    maintenance: false,
  });

  const [customItems, setCustomItems] = useState<CustomItem[]>([]);
  const [newItemName, setNewItemName] = useState("");
  const [customerInfo, setCustomerInfo] = useState({ name: "", contact: "" });
  const [showLeadModal, setShowLeadModal] = useState(false);
  const [pendingAction, setPendingAction] = useState<"pdf" | "wa" | null>(null);

  const saveLead = async () => {
    if (!customerInfo.name || !customerInfo.contact) return false;
    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: customerInfo.name,
          contact: customerInfo.contact,
          total: currentTotal,
          currency,
          selections: {
            includeBase,
            additionalPages,
            ...toggles
          },
          customRequirements: customItems.map(i => i.name)
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        alert(`Lead Capture Error: ${data.error || 'Check Supabase table/RLS'}`);
        console.error("Server error during lead capture:", data.error);
        return false;
      }

      return true;
    } catch (err: any) {
      alert(`Network Error: ${err.message}`);
      console.error("Network error during lead capture:", err);
      return false;
    }
  };

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const res = await fetch("/api/prices");
        const data = await res.json();
        if (!data.error) {
          setPrices(data);
        }
      } catch (err) {
        console.error("Failed to fetch prices:", err);
      }
    };
    fetchPrices();
  }, []);

  const convert = (price: number) => {
    return (price * CURRENCIES[currency].rate).toLocaleString(undefined, {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });
  };

  const symbol = CURRENCIES[currency].symbol;

  const toggleFeature = (key: keyof typeof toggles) => {
    setToggles((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleAddCustomItem = () => {
    if (!newItemName.trim()) return;
    setCustomItems((prev) => [
      ...prev,
      { id: Date.now().toString(), name: newItemName, price: 0 },
    ]);
    setNewItemName("");
  };

  const currentTotal = useMemo(() => {
    let total = 0;
    if (includeBase) total += prices.basePackage;
    total += additionalPages * prices.additionalPage;
    if (toggles.brandKit) total += prices.brandKit;
    if (toggles.multilingual) total += prices.multilingual;
    if (toggles.customDashboard) total += prices.customDashboard;
    if (toggles.bookingSystem) total += prices.bookingSystem;
    if (toggles.paymentGateway) total += prices.paymentGateway;
    if (toggles.speedOptimization) total += prices.speedOptimization;
    if (toggles.cms) total += prices.cms;
    if (toggles.backend) total += prices.backend;
    if (toggles.apiIntegrations) total += prices.apiIntegrations;
    if (toggles.database) total += prices.database;
    if (toggles.userAuth) total += prices.userAuth;
    if (toggles.aiChat) total += prices.aiChat;
    if (toggles.aiCore) total += prices.aiCore;
    if (toggles.animated) total += prices.animated;
    if (toggles.maintenance) total += prices.maintenance;

    return total;
  }, [prices, includeBase, additionalPages, toggles, customItems]);

  const updatePrice = (key: keyof Prices, val: number) => {
    setPrices((prev) => ({ ...prev, [key]: val }));
  };

  const handleExportPDF = async () => {
    if (!customerInfo.name || !customerInfo.contact) {
      setPendingAction("pdf");
      setShowLeadModal(true);
      return;
    }

    const leadSaved = await saveLead();
    if (!leadSaved) {
      alert("Lead capture failed. Please try again.");
      return;
    }

    const doc = new jsPDF();

    // Header
    doc.setFontSize(22);
    doc.setTextColor(0, 0, 0);
    doc.text("One SmartBiz Qatar", 14, 20);

    doc.setFontSize(16);
    doc.setTextColor(100, 100, 100);
    doc.text("Project Services - Estimate", 14, 30);

    doc.setFontSize(10);
    doc.text(`Date: ${new Date().toLocaleDateString()}`, 14, 40);
    doc.text(`Currency: ${currency} (${symbol})`, 14, 45);
    doc.text(`Customer: ${customerInfo.name}`, 120, 40);
    doc.text(`Contact: ${customerInfo.contact}`, 120, 45);

    // Prepare table data
    const tableData = [];
    if (includeBase) {
      tableData.push([
        "Base Website Design",
        `${symbol}${convert(prices.basePackage)}`,
      ]);
    }
    if (additionalPages > 0) {
      tableData.push([
        `Additional Pages (x${additionalPages})`,
        `${symbol}${convert(prices.additionalPage * additionalPages)}`,
      ]);
    }
    if (toggles.brandKit) tableData.push(["Logo & Brand Kit", `${symbol}${convert(prices.brandKit)}`]);
    if (toggles.multilingual) tableData.push(["Multilingual Support", `${symbol}${convert(prices.multilingual)}`]);
    if (toggles.customDashboard) tableData.push(["Custom Dashboard", `${symbol}${convert(prices.customDashboard)}`]);
    if (toggles.bookingSystem) tableData.push(["Booking System", `${symbol}${convert(prices.bookingSystem)}`]);
    if (toggles.paymentGateway) tableData.push(["Payment Gateway", `${symbol}${convert(prices.paymentGateway)}`]);
    if (toggles.speedOptimization) tableData.push(["Speed Optimization", `${symbol}${convert(prices.speedOptimization)}`]);
    if (toggles.cms) tableData.push(["Content Management", `${symbol}${convert(prices.cms)}`]);
    if (toggles.backend) tableData.push(["Full Backend", `${symbol}${convert(prices.backend)}`]);
    if (toggles.apiIntegrations) tableData.push(["API Integrations", `${symbol}${convert(prices.apiIntegrations)}`]);
    if (toggles.database) tableData.push(["Database Architecture", `${symbol}${convert(prices.database)}`]);
    if (toggles.userAuth) tableData.push(["User Authentication", `${symbol}${convert(prices.userAuth)}`]);
    if (toggles.aiChat) tableData.push(["AI Chat Integration", `${symbol}${convert(prices.aiChat)}`]);
    if (toggles.aiCore) tableData.push(["Full AI Task Automation", `${symbol}${convert(prices.aiCore)}`]);
    if (toggles.animated) tableData.push(["Immersive 3D Animation", `${symbol}${convert(prices.animated)}`]);
    if (toggles.maintenance) tableData.push(["Support & Maintenance", `${symbol}${convert(prices.maintenance)}`]);

    customItems.forEach((item) => {
      tableData.push([`Custom Requirement: ${item.name}`, `Dev Analysis Pending`]);
    });

    autoTable(doc, {
      startY: 55,
      head: [["Service Description", "Estimated Cost"]],
      body: tableData,
      theme: "grid",
      headStyles: { fillColor: [10, 10, 15], textColor: [0, 255, 136] },
      styles: { font: "helvetica", fontSize: 10 },
      alternateRowStyles: { fillColor: [245, 245, 245] },
    });

    const finalY = (doc as any).lastAutoTable.finalY || 55;

    doc.setFontSize(14);
    doc.setTextColor(0, 0, 0);
    doc.text(`Estimated Total: ${symbol}${convert(currentTotal)}`, 14, finalY + 15);

    doc.setFontSize(10);
    doc.setTextColor(120, 120, 120);
    const splitTerms = doc.splitTextToSize(
      "Terms & Conditions: The prices presented are estimates and serve as a baseline for discussion. Final project costs may vary depending on the specific nuances, scale, and timeline of your requirements. A formal discovery phase and official proposal will dictate the final agreement.",
      180,
    );
    doc.text(splitTerms, 14, finalY + 30);
    doc.text("onesmartbiz.pro", 14, 280);
    doc.save("OneSmartBiz_Proposal.pdf");
  };

  const myPricingPlans: any[] = [
    {
      planName: 'Professional',
      description: 'Establish a strong social presence.',
      price: '2000',
      features: ['LinkedIn, Facebook, Instagram', '12 posts/month', 'Branded B2B templates', 'Monthly performance report'],
      buttonText: 'Get Started',
      buttonVariant: 'secondary',
      buttonLink: '#calculator'
    },
    {
      planName: 'Lead Gen',
      description: 'Drive traffic and generate active leads.',
      price: '3000',
      features: ['Everything in Professional', '20 posts/month', 'LinkedIn articles', 'Paid ads management'],
      buttonText: 'Choose Lead Gen',
      isPopular: true,
      buttonVariant: 'primary',
      buttonLink: '#calculator'
    },
    {
      planName: 'Full Brand',
      description: 'Comprehensive digital leadership mapping.',
      price: '5000',
      features: ['Everything in Lead Gen', 'Video content (Reels/Shorts)', 'Google Business Profile', 'Quarterly strategy review'],
      buttonText: 'Let\'s Talk',
      buttonVariant: 'secondary',
      buttonLink: '#calculator'
    },
  ];

  return (
    <>
      <ModernPricingPage
        title={
          <>
            Social Media <span className="text-[#00ff88]">Growth</span>
          </>
        }
        subtitle="Strategic packages for dominance in the digital attention economy."
        plans={myPricingPlans}
        showAnimatedBackground={true}
      />
      <section
        id="calculator"
        className="relative py-28 bg-[#0a0a0f] border-t border-white/5"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,255,136,0.03),transparent_70%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <div
                className="inline-flex items-center gap-2 px-3 py-1 bg-[#00ff88]/10 border border-[#00ff88]/30 mb-6"
                style={{
                  clipPath:
                    "polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 0 100%)",
                }}
              >
                <Calculator className="w-3.5 h-3.5 text-[#00ff88]" />
                <span className="font-mono text-xs text-[#00ff88] tracking-widest uppercase">
                  CUSTOM PROJECT CONFIGURATOR
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-black text-white uppercase tracking-wider">
                Website and <span className="text-[#00ff88]">Web App</span> Price Calculator
              </h2>
            </div>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-1 bg-[#111] p-1 border border-[#333]">
                {(Object.keys(CURRENCIES) as CurrencyKey[]).map((c) => (
                  <button
                    key={c}
                    onClick={() => setCurrency(c)}
                    className={`px-3 py-1 font-mono text-[10px] uppercase transition-all ${currency === c ? "bg-[#00ff88] text-black font-bold" : "text-[#555] hover:text-white"}`}
                  >
                    {c}
                  </button>
                ))}
              </div>
              <Link
                href="/admin"
                className="flex items-center gap-2 border border-[#333] px-4 py-2 text-xs font-mono uppercase text-[#777] hover:text-[#fff] hover:border-[#777] transition-all bg-[#111]"
                title="Admin Configuration"
                style={{
                  clipPath:
                    "polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 0 100%)",
                }}
              >
                <KeyRound className="w-4 h-4" /> Admin Configuration
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 transition-all duration-500 items-start">
            {/* Configurator */}
            <div className="lg:col-span-2 backdrop-blur-xl bg-white/[0.03] border border-white/10 rounded-3xl p-8 relative overflow-hidden group/config">
              <div className="absolute top-0 left-0 w-64 h-64 bg-[#00ff88]/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2 pointer-events-none" />

              <h3 className="font-display font-black text-white mb-2 uppercase tracking-[0.2em] text-sm border-b border-white/5 pb-6">
                Project Features & Add-ons
              </h3>
              <p className="text-[11px] text-white/40 mb-8 font-mono leading-relaxed uppercase tracking-widest italic">
                Select required components to initialize cost analysis
              </p>

              <div className="space-y-4 relative z-10">
                {/* Optional Base Setup */}
                <label className="flex items-center justify-between p-5 border border-white/5 hover:border-[#00ff88]/30 transition-all cursor-pointer bg-white/[0.02] rounded-2xl group/item">
                  <div className="flex items-center gap-5">
                    <input
                      type="checkbox"
                      className="w-5 h-5 accent-[#00ff88] bg-transparent border-white/20"
                      checked={includeBase}
                      onChange={() => setIncludeBase(!includeBase)}
                    />
                    <div>
                      <h4 className="font-display font-bold text-xs text-white uppercase tracking-wider">Base Website Design</h4>
                      <p className="font-mono text-[9px] text-white/30 mt-1 uppercase tracking-widest">High-Performance setup · up to 5 pages</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="block font-mono font-bold text-[#00ff88] text-sm">{symbol}{convert(prices.basePackage)}</span>
                  </div>
                </label>

                {/* Toggles */}
                {[
                  { key: "brandKit", label: "Logo & Brand Kit", desc: "Strategic visual identity", color: "text-[#00d4ff]" },
                  { key: "speedOptimization", label: "Performance & SEO", desc: "Page speed & on-page tuning", color: "text-[#00d4ff]" },
                  { key: "multilingual", label: "Multilingual", desc: "Arabic & English implementation", color: "text-[#00d4ff]" },
                  { key: "bookingSystem", label: "Booking System", desc: "Automated 24/7 scheduling", color: "text-[#00d4ff]" },
                  { key: "paymentGateway", label: "Payment Gateway", desc: "Secure transaction protocols", color: "text-[#00d4ff]" },
                  { key: "animated", label: "3D Animation", desc: "State-of-the-art WebGL visuals", color: "text-[#00d4ff]" },
                  { key: "cms", label: "CMS Engine", desc: "Content management interface", color: "text-[#00ff88]" },
                  { key: "backend", label: "Full Backend", desc: "Robust API infrastructure", color: "text-[#00ff88]" },
                  { key: "apiIntegrations", label: "API Integrations", desc: "External software handshake", color: "text-[#00ff88]" },
                  { key: "database", label: "Database Layer", desc: "Scalable data architecture", color: "text-[#00ff88]" },
                  { key: "userAuth", label: "User Auth", desc: "Secure login & permission levels", color: "text-[#00ff88]" },
                  { key: "aiChat", label: "AI Integration", desc: "LLM support & task automation", color: "text-[#00ff88]" },
                  { key: "maintenance", label: "Maint. Retainer", desc: "Technical support & updates", color: "text-[#00ff88]" },
                ].map((ft) => (
                  <label key={ft.key} className="flex items-center justify-between p-5 border border-white/5 hover:border-[#00ff88]/30 transition-all cursor-pointer bg-white/[0.02] rounded-2xl group/item">
                    <div className="flex items-center gap-5">
                      <input
                        type="checkbox"
                        className="w-5 h-5 accent-[#00ff88] bg-transparent border-white/20"
                        checked={toggles[ft.key as keyof typeof toggles]}
                        onChange={() => toggleFeature(ft.key as keyof typeof toggles)}
                      />
                      <div>
                        <h4 className="font-display font-bold text-xs text-white uppercase tracking-wider">{ft.label}</h4>
                        <p className="font-mono text-[9px] text-white/30 mt-1 uppercase tracking-widest">{ft.desc}</p>
                      </div>
                    </div>
                    <span className="font-mono font-bold text-white/80 group-hover:text-white transition-colors text-sm">{symbol}{convert(prices[ft.key as keyof typeof prices])}</span>
                  </label>
                ))}

                {/* Additional Pages Counter */}
                <div className="flex items-center justify-between p-5 border border-white/5 bg-white/[0.02] rounded-2xl">
                  <div className="flex items-center gap-5">
                    <div>
                      <h4 className="font-display font-bold text-xs text-white uppercase tracking-wider">Additional Modules</h4>
                      <p className="font-mono text-[9px] text-white/30 mt-1 uppercase tracking-widest">{symbol}{convert(prices.additionalPage)} / per page</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 bg-white/5 rounded-xl p-1 px-2 border border-white/10">
                    <button
                      className="w-8 h-8 flex items-center justify-center text-white/40 hover:text-white transition-colors"
                      onClick={() => setAdditionalPages(Math.max(0, additionalPages - 1))}
                    >
                      <X className="w-3 h-3 rotate-45" />
                    </button>
                    <span className="font-mono text-sm text-white min-w-[20px] text-center">{additionalPages}</span>
                    <button
                      className="w-8 h-8 flex items-center justify-center text-white/40 hover:text-white transition-colors"
                      onClick={() => setAdditionalPages(additionalPages + 1)}
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>
                </div>

                {/* Custom Items */}
                <div className="pt-8 mt-4 border-t border-white/5">
                  <h4 className="font-display font-black text-white/40 text-[10px] uppercase tracking-[0.3em] mb-4">Strategic Requirements</h4>
                  {customItems.map((item) => (
                    <div key={item.id} className="flex items-center justify-between p-4 border border-white/5 bg-white/[0.01] rounded-xl mb-3 group/custom">
                      <span className="font-mono text-[11px] text-white/60 tracking-wider font-medium">{item.name}</span>
                      <button onClick={() => setCustomItems((prev) => prev.filter((c) => c.id !== item.id))} className="text-white/20 hover:text-[#ff3e3e] transition-colors p-2">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                  <div className="flex gap-3">
                    <input
                      type="text"
                      placeholder="DESCRIBE CUSTOM FEATURE PROTOCOL..."
                      className="flex-1 bg-white/5 border border-white/5 rounded-2xl px-5 py-4 text-[10px] text-white font-mono placeholder-white/20 focus:border-[#00ff88]/30 outline-none transition-all"
                      value={newItemName}
                      onChange={(e) => setNewItemName(e.target.value)}
                    />
                    <button onClick={handleAddCustomItem} className="w-14 h-14 bg-white/5 border border-white/5 rounded-2xl flex items-center justify-center hover:bg-[#00ff88] hover:text-black transition-all group/add">
                      <Plus className="w-6 h-6 transition-transform group-hover/add:rotate-90" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Ledger / Summary */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="sticky top-24 backdrop-blur-xl bg-white/[0.03] border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)] rounded-3xl p-8 overflow-hidden group/card"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#00ff88]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#ff0088]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/5">
                    <h3 className="font-display font-black text-[#00ff88] uppercase tracking-[0.2em] text-sm">
                      Investment Summary
                    </h3>
                    <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center border border-white/10">
                      <Calculator className="w-4 h-4 text-[#00ff88]" />
                    </div>
                  </div>

                  <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar mb-8">
                    {includeBase && (
                      <div className="flex justify-between items-center group/item transition-all hover:translate-x-1">
                        <span className="font-mono text-[11px] text-white/50 group-hover/item:text-white/80 transition-colors">Base Website</span>
                        <span className="font-mono text-xs text-white font-medium">{symbol}{convert(prices.basePackage)}</span>
                      </div>
                    )}
                    {additionalPages > 0 && (
                      <div className="flex justify-between items-center group/item transition-all hover:translate-x-1">
                        <span className="font-mono text-[11px] text-white/50 group-hover/item:text-white/80 transition-colors">Add. Pages (x{additionalPages})</span>
                        <span className="font-mono text-xs text-white font-medium">{symbol}{convert(prices.additionalPage * additionalPages)}</span>
                      </div>
                    )}

                    {Object.entries(toggles).filter(([_, v]) => v).map(([k, _]) => {
                      const feature = [
                        { key: "brandKit", label: "Logo & Brand Kit", color: "text-[#00d4ff]" },
                        { key: "multilingual", label: "Multilingual", color: "text-[#00d4ff]" },
                        { key: "customDashboard", label: "Dashboard", color: "text-[#00d4ff]" },
                        { key: "bookingSystem", label: "Booking System", color: "text-[#00d4ff]" },
                        { key: "paymentGateway", label: "Payment Gateway", color: "text-[#00d4ff]" },
                        { key: "speedOptimization", label: "Performance", color: "text-[#00d4ff]" },
                        { key: "animated", label: "3D Animation", color: "text-[#00d4ff]" },
                        { key: "cms", label: "CMS", color: "text-[#ff00ff]" },
                        { key: "backend", label: "Backend", color: "text-[#ff00ff]" },
                        { key: "apiIntegrations", label: "APIs", color: "text-[#ff00ff]" },
                        { key: "database", label: "Database", color: "text-[#ff00ff]" },
                        { key: "userAuth", label: "User Auth", color: "text-[#ff00ff]" },
                        { key: "aiChat", label: "AI Chat", color: "text-[#ff00ff]" },
                        { key: "aiCore", label: "AI Automation", color: "text-[#ff00ff]" },
                        { key: "maintenance", label: "Maint. Retainer", color: "text-[#00ff88]" },
                      ].find(f => f.key === k);

                      return feature ? (
                        <div key={k} className="flex justify-between items-center group/item transition-all hover:translate-x-1">
                          <span className={`font-mono text-[11px] ${feature.color} opacity-70 group-hover/item:opacity-100 transition-opacity`}>{feature.label}</span>
                          <span className="font-mono text-xs text-white font-medium">{symbol}{convert(prices[k as keyof Prices])}</span>
                        </div>
                      ) : null;
                    })}

                    {customItems.map((item) => (
                      <div key={item.id} className="flex justify-between items-center group/item transition-all hover:translate-x-1 italic">
                        <span className="font-mono text-[11px] text-white/30 group-hover/item:text-white/50">{item.name}</span>
                        <span className="font-mono text-[9px] text-[#ff00ff] uppercase">Analysis Pending</span>
                      </div>
                    ))}

                    {!includeBase && additionalPages === 0 && !Object.values(toggles).some(Boolean) && customItems.length === 0 && (
                      <div className="py-8 text-center border border-dashed border-white/5 rounded-2xl">
                        <p className="font-mono text-[10px] text-white/20 uppercase tracking-widest leading-relaxed">
                          Initializing configuration...<br />select components to proceed
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="pt-8 border-t border-white/5 space-y-6">
                    <div className="flex justify-between items-start">
                      <div className="flex flex-col">
                        <span className="font-mono text-[10px] text-white/40 uppercase tracking-wider mb-1">Total Estimated</span>
                        <span className="font-mono text-[9px] text-[#00ff88]/50 uppercase tracking-[0.2em]">{currency} · {CURRENCIES[currency].label}</span>
                      </div>
                      <div className="text-right">
                        <span className="block font-display font-black text-4xl text-white tracking-tighter">
                          {symbol}{convert(currentTotal)}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <button
                        onClick={handleExportPDF}
                        className="w-full py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl font-mono text-[10px] font-bold text-white uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-2 group/btn"
                      >
                        <FileText className="w-4 h-4 text-white/40 group-hover/btn:text-[#00ff88] transition-colors" />
                        Generate Proposal
                      </button>

                      <button
                        id="wa-btn"
                        onClick={async () => {
                          if (!customerInfo.name || !customerInfo.contact) {
                            setPendingAction("wa");
                            setShowLeadModal(true);
                            return;
                          }
                          const leadSaved = await saveLead();
                          if (!leadSaved) return;
                          const customSummary = customItems.map(i => `\n- ${i.name} (Pending Analysis)`).join('');
                          const summary = `*Project Estimate Summary*\n` +
                            `Customer: ${customerInfo.name}\n` +
                            `Contact: ${customerInfo.contact}\n` +
                            `Total: ${symbol}${convert(currentTotal)}\n\n` +
                            `Interested in: ${includeBase ? 'Base Package, ' : ''}${additionalPages > 0 ? additionalPages + ' Add. Pages, ' : ''}` +
                            Object.entries(toggles).filter(([_, v]) => v).map(([k]) => k).join(', ') +
                            (customItems.length > 0 ? `\n\n*Custom Requirements:*${customSummary}` : '') +
                            `\n\nGenerated via onesmartbiz.pro`;
                          const waUrl = `https://wa.me/97431308665?text=${encodeURIComponent(summary)}`;
                          window.open(waUrl, '_blank');
                        }}
                        className="w-full py-4 bg-[#00ff88] hover:bg-[#00e67a] active:scale-[0.98] rounded-2xl font-mono text-[10px] font-black text-black uppercase tracking-[0.2em] transition-all shadow-[0_10px_20px_rgba(0,255,136,0.2)] flex items-center justify-center gap-2"
                      >
                        <MessageCircle className="w-4 h-4" />
                        Initialize Inquiry
                      </button>
                    </div>

                    <p className="text-[9px] text-white/20 font-mono text-center uppercase tracking-widest px-4">
                      Estimates serve as a baseline for strategic planning
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          <div className="mt-20 border-t border-[#222] pt-12">
            <div className="max-w-3xl">
              <div className="bg-[#111] p-6 border border-[#222]">
                <h4 className="text-sm font-bold text-[#555] uppercase tracking-wider mb-2">
                  Terms & Conditions
                </h4>
                <p className="text-xs font-mono text-[#666] leading-relaxed">
                  The prices presented in this calculator are estimates and serve
                  as a baseline for discussion. Final project costs may vary
                  depending on the specific nuances, scale, and timeline of your
                  requirements. A formal discovery phase and official proposal
                  will dictate the final agreement.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Identity Modal Overlay */}
        <AnimatePresence>
          {showLeadModal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[10000] flex items-center justify-center p-6 bg-[#0a0a0f]/90 backdrop-blur-md"
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                className="max-w-md w-full bg-[#111] border border-[#ff0088]/30 p-8 shadow-[0_0_50px_rgba(255,0,136,0.2)]"
                style={{ clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%)" }}
              >
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-xl font-display font-black text-white uppercase tracking-widest">
                      Ready to Connect?
                    </h3>
                    <p className="text-[10px] font-mono text-[#ff0088] uppercase tracking-[0.2em] mt-1">
                      Just one last step
                    </p>
                  </div>
                  <button onClick={() => setShowLeadModal(false)} className="text-[#555] hover:text-white transition-colors">
                    <X />
                  </button>
                </div>

                <div className="space-y-6">
                  <p className="text-xs font-mono text-[#888] leading-relaxed">
                    Please share your contact details so we can send you your personalized {pendingAction === 'pdf' ? 'PDF proposal' : 'WhatsApp inquiry'}.
                  </p>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-[10px] uppercase font-mono text-[#555] mb-2"> Your Name </label>
                      <input
                        type="text"
                        placeholder="E.G. ABDULLAH / OSB"
                        value={customerInfo.name}
                        onChange={(e) => setCustomerInfo({ ...customerInfo, name: e.target.value })}
                        className="w-full bg-[#1a1a1a] border border-[#333] p-4 text-white font-mono text-sm focus:border-[#ff0088] outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase font-mono text-[#555] mb-2">Contact Number</label>
                      <input
                        type="text"
                        placeholder="+974 ..."
                        value={customerInfo.contact}
                        onChange={(e) => setCustomerInfo({ ...customerInfo, contact: e.target.value })}
                        className="w-full bg-[#1a1a1a] border border-[#333] p-4 text-white font-mono text-sm focus:border-[#ff0088] outline-none"
                      />
                    </div>
                  </div>

                  <button
                    onClick={async () => {
                      if (customerInfo.name && customerInfo.contact) {
                        setShowLeadModal(false);
                        if (pendingAction === 'pdf') handleExportPDF();
                        if (pendingAction === 'wa') {
                          setTimeout(() => {
                            const btn = document.getElementById('wa-btn');
                            if (btn) (btn as any).click();
                          }, 100);
                        }
                      }
                    }}
                    className={`w-full py-4 font-mono font-bold text-xs uppercase tracking-widest transition-all ${customerInfo.name && customerInfo.contact ? 'bg-[#ff0088] text-white' : 'bg-[#1a1a1a] text-[#333] cursor-not-allowed'}`}
                  >
                    Send My Estimate
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </>
  );
}
