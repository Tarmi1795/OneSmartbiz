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
    doc.text("Web Development Services - Estimate", 14, 30);

    doc.setFontSize(10);
    doc.text(`Date: ${new Date().toLocaleDateString()}`, 14, 40);
    doc.text(`Currency: ${currency} (${symbol})`, 14, 45);
    doc.text(`Customer: ${customerInfo.name}`, 120, 40);
    doc.text(`Contact: ${customerInfo.contact}`, 120, 45);

    // Prepare table data
    const tableData = [];
    if (includeBase) {
      tableData.push([
        "Core Essentials Setup",
        `${symbol}${convert(prices.basePackage)}`,
      ]);
    }
    if (additionalPages > 0) {
      tableData.push([
        `Additional Pages (x${additionalPages})`,
        `${symbol}${convert(prices.additionalPage * additionalPages)}`,
      ]);
    }
    if (toggles.brandKit)
      tableData.push([
        "Logo & Brand Kit",
        `${symbol}${convert(prices.brandKit)}`,
      ]);
    if (toggles.multilingual)
      tableData.push([
        "Multilingual Support",
        `${symbol}${convert(prices.multilingual)}`,
      ]);
    if (toggles.customDashboard)
      tableData.push([
        "Custom Dashboard",
        `${symbol}${convert(prices.customDashboard)}`,
      ]);
    if (toggles.bookingSystem)
      tableData.push([
        "Booking System",
        `${symbol}${convert(prices.bookingSystem)}`,
      ]);
    if (toggles.paymentGateway)
      tableData.push([
        "Payment Gateway",
        `${symbol}${convert(prices.paymentGateway)}`,
      ]);
    if (toggles.speedOptimization)
      tableData.push([
        "Speed Optimization",
        `${symbol}${convert(prices.speedOptimization)}`,
      ]);
    if (toggles.cms)
      tableData.push(["Content Management", `${symbol}${convert(prices.cms)}`]);
    if (toggles.backend)
      tableData.push(["Full Backend", `${symbol}${convert(prices.backend)}`]);
    if (toggles.apiIntegrations)
      tableData.push([
        "API Integrations",
        `${symbol}${convert(prices.apiIntegrations)}`,
      ]);
    if (toggles.database)
      tableData.push([
        "Database Architecture",
        `${symbol}${convert(prices.database)}`,
      ]);
    if (toggles.userAuth)
      tableData.push(["User Authentication", `${symbol}${convert(prices.userAuth)}`]);
    if (toggles.aiChat)
      tableData.push([
        "AI Chat Integration",
        `${symbol}${convert(prices.aiChat)}`,
      ]);
    if (toggles.aiCore)
      tableData.push(["Full AI Task Automation", `${symbol}${convert(prices.aiCore)}`]);

    customItems.forEach((item) => {
      tableData.push([
        `Custom Requirement: ${item.name}`,
        `Dev Analysis Pending`,
      ]);
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
    doc.text(
      `Estimated Total: ${symbol}${convert(currentTotal)}`,
      14,
      finalY + 15,
    );

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

  return (
    <section
      id="pricing"
      className="relative py-24 bg-[#0a0a0f] overflow-hidden"
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
                PRICE CALCULATOR
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-black text-white uppercase tracking-wider">
              Web Development <span className="text-[#00ff88]">Services</span>
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


        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 transition-all duration-500">
          {/* Configurator */}
          <div className="lg:col-span-2 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              className="p-6 bg-[#111] border border-[#222]"
            >
              <h3 className="font-display font-bold text-white mb-2 uppercase tracking-wider text-lg border-b border-[#222] pb-4">
                Core Essentials
              </h3>
              <p className="text-[11px] text-[#888] mb-6 font-mono leading-relaxed italic">
                The foundational tools needed to get your project up and running smoothly.
                <br />
                <span className="text-[#00ff88]/80 not-italic">Examples: Standard Setup, Secure Hosting, Essential Maintenance</span>
              </p>
              <div className="space-y-4">
                <div
                  onClick={() => setIncludeBase(!includeBase)}
                  className={`flex items-center justify-between p-4 border transition-all cursor-pointer ${includeBase ? "border-[#00ff88] bg-[#00ff88]/5" : "border-[#333] bg-[#1a1a1a] hover:border-[#666]"}`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-6 h-6 border flex items-center justify-center ${includeBase ? "border-[#00ff88] bg-[#00ff88]" : "border-[#555]"}`}
                    >
                      {includeBase && <Check className="w-4 h-4 text-black" />}
                    </div>
                    <div>
                      <h4 className="font-mono text-sm text-white">
                        Core Solution Setup
                      </h4>
                      <p className="font-mono text-[10px] text-[#666] mt-1 max-w-sm">
                        A high-performance digital presence designed to attract local customers, featuring secure hosting, mobile-first design, and seamless WhatsApp connectivity for immediate engagement.
                      </p>
                    </div>
                  </div>
                  <span className="font-mono font-bold text-[#00ff88]">
                    {symbol}
                    {convert(prices.basePackage)}
                  </span>
                </div>

                <div className="flex items-center justify-between p-4 border border-[#333] bg-[#1a1a1a]">
                  <div className="flex items-center gap-4">
                    <LayoutTemplate className="w-5 h-5 text-[#888]" />
                    <div>
                      <h4 className="font-mono text-sm text-white">
                        Additional Pages
                      </h4>
                      <p className="font-mono text-xs text-[#666] mt-1">
                        {symbol}
                        {convert(prices.additionalPage)} / each
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      className="w-8 h-8 flex items-center justify-center border border-[#444] text-[#fff] hover:bg-[#333]"
                      onClick={() =>
                        setAdditionalPages(Math.max(0, additionalPages - 1))
                      }
                    >
                      -
                    </button>
                    <span className="font-mono w-6 text-center text-white">
                      {additionalPages}
                    </span>
                    <button
                      className="w-8 h-8 flex items-center justify-center border border-[#444] text-[#fff] hover:bg-[#333]"
                      onClick={() => setAdditionalPages(additionalPages + 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-6 bg-[#111] border border-[#222]"
            >
              <h3 className="font-display font-bold text-[#00d4ff] mb-2 uppercase tracking-wider text-lg border-b border-[#222] pb-4">
                Tailored Enhancements
              </h3>
              <p className="text-[11px] text-[#888] mb-6 font-mono leading-relaxed italic">
                Specific features customized to align with your unique brand and business goals.
                <br />
                <span className="text-[#00d4ff]/80 not-italic">Examples: Custom Brand Styling, Multi-language Support, Specialized User Roles</span>
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    key: "brandKit",
                    label: "Logo & Brand Kit",
                    desc: "Strategic visual identity that builds trust and brand recognition.",
                    icon: LayoutTemplate,
                    price: prices.brandKit,
                  },
                  {
                    key: "multilingual",
                    label: "Multilingual Support",
                    desc: "Expand your reach with seamless Arabic and English integration.",
                    icon: Globe,
                    price: prices.multilingual,
                  },
                  {
                    key: "customDashboard",
                    label: "Custom Dashboard",
                    desc: "Gain full control with a private portal for managing data.",
                    icon: TrendingUp,
                    price: prices.customDashboard,
                  },
                  {
                    key: "bookingSystem",
                    label: "Booking System",
                    desc: "Convert visitors into clients with automated 24/7 scheduling.",
                    icon: Calculator,
                    price: prices.bookingSystem,
                  },
                  {
                    key: "paymentGateway",
                    label: "Payment Gateway",
                    desc: "Enable secure transactions with local and global providers.",
                    icon: BriefcaseBusiness,
                    price: prices.paymentGateway,
                  },
                  {
                    key: "speedOptimization",
                    label: "Speed Optimization",
                    desc: "Keep visitors engaged with lightning-fast load times.",
                    icon: Server,
                    price: prices.speedOptimization,
                  },
                ].map((ft) => (
                  <div
                    key={ft.key}
                    onClick={() =>
                      toggleFeature(ft.key as keyof typeof toggles)
                    }
                    className={`p-4 border transition-all cursor-pointer ${toggles[ft.key as keyof typeof toggles] ? "border-[#00d4ff] bg-[#00d4ff]/5" : "border-[#333] bg-[#1a1a1a] hover:border-[#666]"}`}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <ft.icon
                        className={`w-5 h-5 ${toggles[ft.key as keyof typeof toggles] ? "text-[#00d4ff]" : "text-[#888]"}`}
                      />
                      <span
                        className={`font-mono font-bold ${toggles[ft.key as keyof typeof toggles] ? "text-[#00d4ff]" : "text-[#888]"}`}
                      >
                        {symbol}
                        {convert(ft.price)}
                      </span>
                    </div>
                    <h4 className="font-mono text-sm text-white mb-1">
                      {ft.label}
                    </h4>
                    <p className="font-mono text-[10px] text-[#666] uppercase leading-tight">
                      {ft.desc}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-6 bg-[#111] border border-[#222]"
            >
              <h3 className="font-display font-bold text-[#ff00ff] mb-2 uppercase tracking-wider text-lg border-b border-[#222] pb-4">
                Advanced Tech Solutions
              </h3>
              <p className="text-[11px] text-[#888] mb-6 font-mono leading-relaxed italic">
                Powerful upgrades designed to automate your workflows and scale your operations.
                <br />
                <span className="text-[#ff00ff]/80 not-italic">Examples: AI-Driven Insights, Real-time Data Sync, Custom API Integrations</span>
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    key: "cms",
                    label: "Content Management",
                    desc: "Update your content effortlessly without technical knowledge.",
                    icon: Database,
                    price: prices.cms,
                  },
                  {
                    key: "backend",
                    label: "Full Backend",
                    desc: "Robust infrastructure for complex business logic and traffic.",
                    icon: Terminal,
                    price: prices.backend,
                  },
                  {
                    key: "apiIntegrations",
                    label: "API Integrations",
                    desc: "Sync with external softare like CRM, ERP, or social tools.",
                    icon: Server,
                    price: prices.apiIntegrations,
                  },
                  {
                    key: "database",
                    label: "Database Architecture",
                    desc: "Highly structured data designed for speed and security.",
                    icon: Database,
                    price: prices.database,
                  },
                  {
                    key: "userAuth",
                    label: "User Authentication",
                    desc: "Secure member areas with customized access levels.",
                    icon: Shield,
                    price: prices.userAuth,
                  },
                  {
                    key: "aiChat",
                    label: "AI Chat Integration",
                    desc: "Automate support and leads with 24/7 virtual assistants.",
                    icon: Bot,
                    price: prices.aiChat,
                  },
                  {
                    key: "aiCore",
                    label: "Full AI Task Automation",
                    desc: "Revolutionize operations with custom AI task execution.",
                    icon: Bot,
                    price: prices.aiCore,
                  },
                ].map((ft) => (
                  <div
                    key={ft.key}
                    onClick={() =>
                      toggleFeature(ft.key as keyof typeof toggles)
                    }
                    className={`p-4 border transition-all cursor-pointer ${toggles[ft.key as keyof typeof toggles] ? "border-[#ff00ff] bg-[#ff00ff]/5" : "border-[#333] bg-[#1a1a1a] hover:border-[#666]"}`}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <ft.icon
                        className={`w-5 h-5 ${toggles[ft.key as keyof typeof toggles] ? "text-[#ff00ff]" : "text-[#888]"}`}
                      />
                      <span
                        className={`font-mono font-bold ${toggles[ft.key as keyof typeof toggles] ? "text-[#ff00ff]" : "text-[#888]"}`}
                      >
                        {symbol}
                        {convert(ft.price)}
                      </span>
                    </div>
                    <h4 className="font-mono text-sm text-white mb-1">
                      {ft.label}
                    </h4>
                    <p className="font-mono text-[10px] text-[#666] uppercase leading-tight">
                      {ft.desc}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Custom Extras */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="p-6 bg-[#111] border border-[#222]"
            >
              <h3 className="font-display font-bold text-white mb-6 uppercase tracking-wider text-lg border-b border-[#222] pb-4">
                Custom Requirements
              </h3>

              {customItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between p-3 border border-[#333] bg-[#1a1a1a] mb-3"
                >
                  <span className="font-mono text-sm text-white">
                    {item.name}
                  </span>
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-[10px] text-[#ff00ff] uppercase tracking-tighter bg-[#ff00ff]/10 px-2 py-1">
                      Pending Analysis
                    </span>
                    <button
                      onClick={() =>
                        setCustomItems((prev) =>
                          prev.filter((c) => c.id !== item.id),
                        )
                      }
                      className="text-red-500 hover:text-red-400"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}

              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Item description..."
                  className="flex-1 bg-[#1a1a1a] border border-[#444] p-3 text-sm text-white font-mono placeholder-[#666] focus:border-[#00ff88] outline-none"
                  value={newItemName}
                  onChange={(e) => setNewItemName(e.target.value)}
                />
                <button
                  onClick={handleAddCustomItem}
                  className="bg-[#00ff88]/10 hover:bg-[#00ff88]/20 border border-[#00ff88]/50 p-3 text-[#00ff88] transition-colors flex items-center justify-center"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          </div>

          {/* Ledger / Summary */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.4 }}
              className="sticky top-24 bg-[#0a0a0f] border border-[#00ff88]/30 shadow-[0_0_30px_rgba(0,255,136,0.05)] p-6"
              style={{
                clipPath:
                  "polygon(0 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%)",
              }}
            >
              <h3 className="font-display font-bold text-[#00ff88] mb-6 uppercase tracking-wider text-xl">
                Investment Summary
              </h3>

              <div className="space-y-3 mb-8">
                {includeBase && (
                  <div className="flex justify-between items-center pb-2 border-b border-[#222]">
                    <span className="font-mono text-xs text-[#aaa]">
                      Core Essentials
                    </span>
                    <span className="font-mono text-sm text-white">
                      {symbol}
                      {convert(prices.basePackage)}
                    </span>
                  </div>
                )}
                {additionalPages > 0 && (
                  <div className="flex justify-between items-center pb-2 border-b border-[#222]">
                    <span className="font-mono text-xs text-[#aaa]">
                      Additional Pages (x{additionalPages})
                    </span>
                    <span className="font-mono text-sm text-white">
                      {symbol}
                      {convert(prices.additionalPage * additionalPages)}
                    </span>
                  </div>
                )}

                {toggles.brandKit && (
                  <div className="flex justify-between items-center pb-2 border-b border-[#222]">
                    <span className="font-mono text-xs text-[#00d4ff]">
                      Logo & Brand Kit
                    </span>
                    <span className="font-mono text-sm text-[#00d4ff]">
                      {symbol}
                      {convert(prices.brandKit)}
                    </span>
                  </div>
                )}
                {toggles.multilingual && (
                  <div className="flex justify-between items-center pb-2 border-b border-[#222]">
                    <span className="font-mono text-xs text-[#00d4ff]">
                      Multilingual Support
                    </span>
                    <span className="font-mono text-sm text-[#00d4ff]">
                      {symbol}
                      {convert(prices.multilingual)}
                    </span>
                  </div>
                )}
                {toggles.customDashboard && (
                  <div className="flex justify-between items-center pb-2 border-b border-[#222]">
                    <span className="font-mono text-xs text-[#00d4ff]">
                      Custom Dashboard
                    </span>
                    <span className="font-mono text-sm text-[#00d4ff]">
                      {symbol}
                      {convert(prices.customDashboard)}
                    </span>
                  </div>
                )}
                {toggles.bookingSystem && (
                  <div className="flex justify-between items-center pb-2 border-b border-[#222]">
                    <span className="font-mono text-xs text-[#00d4ff]">
                      Booking System
                    </span>
                    <span className="font-mono text-sm text-[#00d4ff]">
                      {symbol}
                      {convert(prices.bookingSystem)}
                    </span>
                  </div>
                )}
                {toggles.paymentGateway && (
                  <div className="flex justify-between items-center pb-2 border-b border-[#222]">
                    <span className="font-mono text-xs text-[#00d4ff]">
                      Payment Gateway
                    </span>
                    <span className="font-mono text-sm text-[#00d4ff]">
                      {symbol}
                      {convert(prices.paymentGateway)}
                    </span>
                  </div>
                )}
                {toggles.speedOptimization && (
                  <div className="flex justify-between items-center pb-2 border-b border-[#222]">
                    <span className="font-mono text-xs text-[#00d4ff]">
                      Speed Optimization
                    </span>
                    <span className="font-mono text-sm text-[#00d4ff]">
                      {symbol}
                      {convert(prices.speedOptimization)}
                    </span>
                  </div>
                )}

                {toggles.cms && (
                  <div className="flex justify-between items-center pb-2 border-b border-[#222]">
                    <span className="font-mono text-xs text-[#ff00ff]">
                      Content Management
                    </span>
                    <span className="font-mono text-sm text-[#ff00ff]">
                      {symbol}
                      {convert(prices.cms)}
                    </span>
                  </div>
                )}
                {toggles.backend && (
                  <div className="flex justify-between items-center pb-2 border-b border-[#222]">
                    <span className="font-mono text-xs text-[#ff00ff]">
                      Full Backend
                    </span>
                    <span className="font-mono text-sm text-[#ff00ff]">
                      {symbol}
                      {convert(prices.backend)}
                    </span>
                  </div>
                )}
                {toggles.apiIntegrations && (
                  <div className="flex justify-between items-center pb-2 border-b border-[#222]">
                    <span className="font-mono text-xs text-[#ff00ff]">
                      API Integrations
                    </span>
                    <span className="font-mono text-sm text-[#ff00ff]">
                      {symbol}
                      {convert(prices.apiIntegrations)}
                    </span>
                  </div>
                )}
                {toggles.database && (
                  <div className="flex justify-between items-center pb-2 border-b border-[#222]">
                    <span className="font-mono text-xs text-[#ff00ff]">
                      Database Architecture
                    </span>
                    <span className="font-mono text-sm text-[#ff00ff]">
                      {symbol}
                      {convert(prices.database)}
                    </span>
                  </div>
                )}
                {toggles.userAuth && (
                  <div className="flex justify-between items-center pb-2 border-b border-[#222]">
                    <span className="font-mono text-xs text-[#ff00ff]">
                      User Authentication
                    </span>
                    <span className="font-mono text-sm text-[#ff00ff]">
                      {symbol}
                      {convert(prices.userAuth)}
                    </span>
                  </div>
                )}
                {toggles.aiChat && (
                  <div className="flex justify-between items-center pb-2 border-b border-[#222]">
                    <span className="font-mono text-xs text-[#ff00ff]">
                      AI Chat integration
                    </span>
                    <span className="font-mono text-sm text-[#ff00ff]">
                      {symbol}
                      {convert(prices.aiChat)}
                    </span>
                  </div>
                )}
                {toggles.aiCore && (
                  <div className="flex justify-between items-center pb-2 border-b border-[#222]">
                    <span className="font-mono text-xs text-[#ff00ff]">
                      Full AI Task Automation
                    </span>
                    <span className="font-mono text-sm text-[#ff00ff]">
                      {symbol}
                      {convert(prices.aiCore)}
                    </span>
                  </div>
                )}

                {customItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between items-center pb-2 border-b border-[#222]"
                  >
                    <span className="font-mono text-xs text-[#aaa]">
                      {item.name}
                    </span>
                    <span className="font-mono text-[9px] text-[#ff00ff] uppercase tracking-tighter">
                      Pending Analysis
                    </span>
                  </div>
                ))}
                {!includeBase &&
                  additionalPages === 0 &&
                  !Object.values(toggles).some(Boolean) &&
                  customItems.length === 0 && (
                    <div className="text-center py-4">
                      <span className="font-mono text-xs text-[#555] italic">
                        No services selected
                      </span>
                    </div>
                  )}
              </div>

              <div className="pt-6 border-t border-[#00ff88]/30">
                <div className="flex justify-between items-end mb-6">
                  <span className="font-mono text-xs text-[#00ff88] uppercase tracking-wider">
                    Estimated Total
                  </span>
                  <span className="font-display font-black text-3xl text-white">
                    {symbol}
                    {convert(currentTotal)}
                  </span>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-0.5 bg-[#ff0088] text-white text-[9px] font-black uppercase tracking-widest animate-pulse">Hot Action</span>
                    <span className="text-[10px] text-[#555] font-mono uppercase tracking-widest">Select Export Protocol</span>
                  </div>

                  <p className="text-[11px] text-[#666] font-mono leading-relaxed mb-4">
                    Ready to build? Secure your quote as a formal document or initialize a direct strategic consultation via WhatsApp.
                  </p>

                  <div className="flex gap-3">
                    <button
                      onClick={handleExportPDF}
                      className="flex-1 py-4 bg-[#111] text-white border border-[#333] font-mono text-[11px] font-bold uppercase tracking-widest hover:border-[#00ff88] hover:text-[#00ff88] transition-all flex items-center justify-center gap-3 group"
                      style={{
                        clipPath:
                          "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 0 100%)",
                      }}
                    >
                      <FileText className="w-4 h-4" />
                      PDF DOCUMENT
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
                        const waUrl = `https://wa.me/97455855221?text=${encodeURIComponent(summary)}`;
                        window.open(waUrl, '_blank');
                      }}
                      className="flex-[1.5] py-4 bg-[#00ff88] text-black font-mono text-[11px] font-black uppercase tracking-widest hover:brightness-110 transition-all flex items-center justify-center gap-3"
                      style={{
                        clipPath:
                          "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 0 100%)",
                      }}
                    >
                      <MessageCircle className="w-4 h-4" />
                      WHATSAPP INQUIRY
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="mt-20 border-t border-[#222] pt-12">
          <div className="max-w-3xl">
            <h3 className="text-xl font-display font-bold text-white mb-6 uppercase tracking-widest">
              🔄 Support & Maintenance
            </h3>
            <div className="flex items-center gap-4 mb-8">
              <span className="px-4 py-2 bg-[#1a1a1a] border border-[#333] text-white font-mono text-sm">
                Basic Maintenance
              </span>
              <span className="text-[#00ff88] font-mono font-bold">
                {symbol}
                {convert(100)} / Hour
              </span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {[
                "Content updates",
                "Plugin management",
                "Security patches",
                "Technical support",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-xs font-mono text-[#888]"
                >
                  <Check className="w-4 h-4 text-[#333]" /> {item}
                </div>
              ))}
            </div>

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
                        // Small delay to let modal close
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
  );
}
