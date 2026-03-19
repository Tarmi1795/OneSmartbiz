"use client";

import React, { useState, useEffect } from "react";
import { KeyRound, Save, RefreshCcw, ShieldCheck, ShieldAlert, ChevronLeft, Download, FileText, Eye, X } from "lucide-react";
import Link from "next/link";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";

export default function AdminPage() {
  const [password, setPassword] = useState("");
  const [isAuth, setIsAuth] = useState(false);
  const [prices, setPrices] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });
  const [selectedLead, setSelectedLead] = useState<any>(null);

  const [status, setStatus] = useState({ state: "idle", message: "" });

  const checkPulse = async () => {
    setStatus({ state: "checking", message: "Probing database..." });
    try {
      const leadsRes = await fetch(`/api/leads?password=${password}`);
      const leadsData = await leadsRes.json();
      
      if (leadsRes.status === 404) throw new Error("API Route /api/leads not found.");
      if (leadsData.error) throw new Error(`Inquiries Table Error: ${leadsData.error}`);
      
      setStatus({ state: "ok", message: "System operational. 'inquiries' table is reachable." });
    } catch (err: any) {
      setStatus({ state: "error", message: err.message });
    }
  };

  const fetchPrices = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/prices");
      const data = await res.json();
      if (data.error) throw new Error(data.error);
      setPrices({ animated: 2000, ...data });
    } catch (err: any) {
      setMessage({ type: "error", text: "Failed to load prices" });
    } finally {
      setLoading(false);
    }
  };

  const [leads, setLeads] = useState<any[]>([]);

  const fetchLeads = async () => {
    try {
      const res = await fetch(`/api/leads?password=${password}`);
      const data = await res.json();
      if (data.error) throw new Error(data.error);
      setLeads(data);
    } catch (err: any) {
      console.error("Failed to load inquiries:", err);
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password) {
      setIsAuth(true);
      fetchPrices();
      fetchLeads();
    }
  };

  const handleUpdate = async () => {
    setLoading(true);
    setMessage({ type: "", text: "" });
    try {
      const res = await fetch("/api/prices", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prices, password }),
      });
      const data = await res.json();
      if (res.status === 401) throw new Error("Invalid admin password");
      if (data.error) throw new Error(data.error);
      setMessage({ type: "success", text: "Prices updated successfully!" });
    } catch (err: any) {
      setMessage({ type: "error", text: err.message });
    } finally {
      setLoading(false);
    }
  };

  if (!isAuth) {
    return (
      <div className="min-h-screen bg-[#0a0a0f] flex items-center justify-center p-6">
        <div className="max-w-md w-full bg-[#111] border border-[#333] p-8"
          style={{ clipPath: "polygon(0 0, calc(100% - 15px) 0, 100% 15px, 100% 100%, 0 100%)" }}>
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-[#ff0088]/10 border border-[#ff0088]/50 flex items-center justify-center rounded-full">
              <KeyRound className="w-8 h-8 text-[#ff0088]" />
            </div>
          </div>
          <h1 className="text-xl font-display font-bold text-white text-center mb-2 uppercase tracking-widest">Access Restricted</h1>
          <p className="text-[#666] text-xs font-mono text-center mb-8">Enter administrative credentials to proceed.</p>
          
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-[#aaa] text-[10px] uppercase font-mono mb-2">System Password</label>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-[#1a1a1a] border border-[#333] p-4 text-white font-mono focus:border-[#ff0088] outline-none"
              />
            </div>
            <button className="w-full py-4 bg-[#ff0088] text-white font-mono font-bold uppercase tracking-widest hover:brightness-110 transition-all">
              Initiate Session
            </button>
          </form>
          <div className="mt-8">
            <Link href="/" className="flex items-center justify-center gap-2 text-[#555] hover:text-[#aaa] transition-colors text-[10px] font-mono uppercase">
               <ChevronLeft className="w-3 h-3" /> Return to Terminal
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0f] p-8 lg:p-12">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <ShieldCheck className="w-5 h-5 text-[#00ff88]" />
              <h1 className="text-2xl font-display font-black text-white uppercase tracking-widest leading-none">Price Infrastructure</h1>
            </div>
            <p className="text-[#666] text-xs font-mono uppercase">Global baseline configuration engine</p>
          </div>
          <div className="flex gap-4">
             <button 
               onClick={() => { fetchPrices(); fetchLeads(); checkPulse(); }} 
               className="p-3 border border-[#333] text-[#888] hover:text-white transition-colors flex items-center gap-2"
               title="System Diagnostic"
             >
               <RefreshCcw className={`w-5 h-5 ${loading ? 'animate-spin' : ''}`} />
               <span className="font-mono text-[10px] uppercase">Diagnostic</span>
             </button>
             <Link href="/" className="flex items-center gap-2 px-6 py-3 border border-[#333] text-[#888] font-mono text-xs uppercase hover:text-white transition-colors">
               <ChevronLeft className="w-4 h-4" /> Exit
             </Link>
          </div>
        </div>

        {status.message && (
           <div className={`mb-4 p-4 flex items-center gap-4 border ${status.state === 'error' ? 'bg-orange-500/10 border-orange-500/50 text-orange-500' : 'bg-blue-500/10 border-blue-500/50 text-blue-500'}`}>
              <ShieldAlert className="w-5 h-5" />
              <span className="font-mono text-xs uppercase tracking-wider">Pulse Check: {status.message}</span>
           </div>
        )}

        {message.text && (
           <div className={`mb-8 p-4 flex items-center gap-4 border ${message.type === 'error' ? 'bg-red-500/10 border-red-500/50 text-red-500' : 'bg-green-500/10 border-green-500/50 text-green-500'}`}>
              {message.type === 'error' ? <ShieldAlert className="w-5 h-5" /> : <ShieldCheck className="w-5 h-5" />}
              <span className="font-mono text-xs uppercase tracking-wider">{message.text}</span>
           </div>
        )}

        <div className="bg-[#111] border border-[#333] p-8 mb-12 relative overflow-hidden">
           <div className="absolute top-0 right-0 w-32 h-32 bg-[#00ff88]/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl pointer-events-none" />
           
           <h2 className="font-mono text-xs text-[#00ff88] mb-8 flex items-center gap-3 uppercase tracking-[0.3em]">
             <span className="w-8 h-px bg-[#00ff88]" /> Core Pricing Models (Base QAR)
           </h2>

           {!prices ? (
             <div className="h-64 flex items-center justify-center">
                <div className="w-8 h-8 border-2 border-[#00ff88] border-t-transparent rounded-full animate-spin" />
             </div>
           ) : (
             <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                {Object.entries(prices).map(([key, value]: [string, any]) => (
                  <div key={key}>
                    <label className="block text-[#555] text-[10px] uppercase font-mono mb-3 tracking-widest">{key.replace(/([A-Z])/g, ' $1')}</label>
                    <div className="relative group">
                       <span className="absolute left-4 top-4 text-[#888] font-mono text-sm group-focus-within:text-[#00ff88] transition-colors">QR</span>
                       <input 
                         type="number" 
                         value={value}
                         onChange={(e) => setPrices({...prices, [key]: parseFloat(e.target.value) || 0})}
                         className="w-full bg-[#1a1a1a] border border-[#333] p-4 pl-12 text-white font-mono focus:border-[#00ff88] outline-none transition-colors"
                       />
                    </div>
                  </div>
                ))}
             </div>
           )}

           <div className="mt-12 pt-8 border-t border-[#333] flex justify-end">
              <button 
                onClick={handleUpdate}
                disabled={loading}
                className="flex items-center gap-3 px-10 py-4 bg-[#00ff88] text-black font-mono font-black uppercase tracking-widest hover:brightness-110 disabled:opacity-50 transition-all transition-transform active:scale-95"
                style={{ clipPath: "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 0 100%)" }}
              >
                {loading ? <RefreshCcw className="w-5 h-5 animate-spin" /> : <Save className="w-5 h-5" />}
                Commit Schema Changes
              </button>
           </div>
        </div>
         <div className="bg-[#111] border border-[#333] p-8 mb-12 relative overflow-hidden">
            <h2 className="font-mono text-xs text-[#ff00ff] mb-8 flex items-center gap-3 uppercase tracking-[0.3em]">
              <span className="w-8 h-px bg-[#ff00ff]" /> Inquiry Ledger (CRM)
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-[#222]">
                    <th className="py-4 font-mono text-[10px] text-[#555] uppercase">Timestamp</th>
                    <th className="py-4 font-mono text-[10px] text-[#555] uppercase">Name</th>
                    <th className="py-4 font-mono text-[10px] text-[#555] uppercase">Contact</th>
                    <th className="py-4 font-mono text-[10px] text-[#555] uppercase text-right">Estimate</th>
                    <th className="py-4 font-mono text-[10px] text-[#555] uppercase pl-8">Parameters</th>
                    <th className="py-4 font-mono text-[10px] text-[#555] uppercase text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#222]">
                  {leads.map((lead) => (
                    <tr key={lead.id} className="hover:bg-white/5 transition-colors">
                      <td className="py-4 font-mono text-[10px] text-[#888]">
                        {new Date(lead.created_at).toLocaleDateString()}
                      </td>
                      <td className="py-4 font-mono text-xs text-white font-bold">{lead.name}</td>
                      <td className="py-4 font-mono text-xs text-[#00d4ff]">{lead.contact}</td>
                      <td className="py-4 font-mono text-xs text-[#00ff88] text-right font-bold">
                        {lead.currency} {lead.project_total.toLocaleString()}
                      </td>
                      <td className="py-4 pl-8">
                        <div className="flex flex-wrap gap-1">
                          {Object.entries(lead.selections || {})
                            .filter(([_, v]) => v === true || (typeof v === 'number' && v > 0))
                            .map(([k]) => (
                              <span key={k} className="text-[8px] uppercase tracking-tighter bg-[#222] text-[#666] px-1 py-0.5 border border-[#333]">
                                {k}
                              </span>
                            ))}
                          {lead.custom_requirements?.map((req: string) => (
                            <span key={req} className="text-[8px] uppercase tracking-tighter bg-[#ff00ff]/10 text-[#ff00ff] px-1 py-0.5 border border-[#ff00ff]/20">
                              {req}
                            </span>
                          ))}
                        </div>
                      </td>
                      <td className="py-4 text-right">
                        <button
                          onClick={() => setSelectedLead(lead)}
                          className="p-2 bg-blue-500/10 text-blue-500 border border-blue-500/30 hover:bg-blue-500 hover:text-white transition-all mr-2"
                          title="View Breakdown"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => {
                            const doc = new jsPDF();
                            doc.setFontSize(22);
                            doc.text("One SmartBiz Qatar", 14, 20);
                            doc.setFontSize(16);
                            doc.setTextColor(100, 100, 100);
                            doc.text("Project Quotation - Re-generated", 14, 30);
                            
                            doc.setFontSize(10);
                            doc.text(`Lead ID: ${lead.id.substring(0,8)}`, 14, 40);
                            doc.text(`Customer: ${lead.name}`, 14, 45);
                            doc.text(`Contact: ${lead.contact}`, 14, 50);
                            doc.text(`Date of Inquiry: ${new Date(lead.created_at).toLocaleDateString()}`, 14, 55);

                            const tableData = [];
                            const sel = lead.selections || {};
                            if (sel.includeBase) tableData.push(["Base Package: Full Turnkey Solution", "Included"]);
                            if (sel.additionalPages > 0) tableData.push([`Additional Pages (x${sel.additionalPages})`, "Selected"]);
                            
                            Object.entries(sel).forEach(([k, v]) => {
                              if (v === true && k !== 'includeBase') {
                                tableData.push([k.replace(/([A-Z])/g, ' $1').toUpperCase(), "Selected"]);
                              }
                            });

                            lead.custom_requirements?.forEach((req: string) => {
                              tableData.push([`Custom: ${req}`, "Pending Analysis"]);
                            });

                            autoTable(doc, {
                              startY: 65,
                              head: [["Requirement", "Status"]],
                              body: tableData,
                              theme: 'grid',
                              headStyles: { fillColor: [10, 10, 15], textColor: [0, 255, 136] }
                            });

                            const finalY = (doc as any).lastAutoTable.finalY || 70;
                            doc.setFontSize(14);
                            doc.text(`Total Estimate: ${lead.currency} ${lead.project_total.toLocaleString()}`, 14, finalY + 15);
                            
                            doc.save(`Quotation_${lead.name}_${lead.id.substring(0,4)}.pdf`);
                          }}
                          className="p-2 bg-[#00ff88]/10 text-[#00ff88] border border-[#00ff88]/30 hover:bg-[#00ff88] hover:text-black transition-all"
                        >
                          <Download className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                  {leads.length === 0 && (
                    <tr>
                      <td colSpan={5} className="py-12 text-center font-mono text-[10px] text-[#333] uppercase">
                        No inquiries detected in system buffer.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
         </div>

        <div className="bg-[#111] border border-[#333] p-8 opacity-50">
           <h2 className="font-mono text-xs text-[#555] mb-6 flex items-center gap-3 uppercase tracking-[0.3em]">
             <span className="w-8 h-px bg-[#555]" /> Currency Rates (Read Only)
           </h2>
           <p className="text-[#444] text-[10px] font-mono leading-relaxed max-w-xl">
             Currency conversion is currently calculated based on fixed average interbank rates. 1 QAR = 0.274 USD | 1 QAR = 15.30 PHP. Automated exchange rate synchronization is pending future network upgrades.
           </p>
        </div>
      </div>

      {/* Breakdown Modal */}
      {selectedLead && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/80 backdrop-blur-sm">
          <div className="max-w-2xl w-full bg-[#111] border border-[#333] p-8 relative"
            style={{ clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%)" }}>
            <button 
              onClick={() => setSelectedLead(null)}
              className="absolute top-4 right-4 text-[#555] hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <h3 className="text-xl font-display font-black text-white uppercase tracking-widest mb-6 border-b border-[#222] pb-4">
              Project Breakdown: <span className="text-[#00ff88]">{selectedLead.name}</span>
            </h3>
            
            <div className="space-y-3 max-h-[60vh] overflow-y-auto pr-4 mb-8">
              {Object.entries(selectedLead.selections || {}).map(([key, value]) => {
                if (!value) return null;
                const priceKey = key === 'includeBase' ? 'basePackage' : key === 'additionalPages' ? 'additionalPage' : key;
                const price = prices ? prices[priceKey] : 0;
                const label = key.replace(/([A-Z])/g, ' $1').toUpperCase();
                const displayPrice = key === 'additionalPages' ? `x${value}` : `QR ${price?.toLocaleString()}`;
                
                return (
                  <div key={key} className="flex justify-between items-center py-2 border-b border-[#222]">
                    <span className="font-mono text-[10px] text-[#888] uppercase">{label}</span>
                    <span className="font-mono text-xs text-white">{displayPrice}</span>
                  </div>
                );
              })}
              {selectedLead.custom_requirements?.map((req: string) => (
                <div key={req} className="flex justify-between items-center py-2 border-b border-[#222]">
                  <span className="font-mono text-[10px] text-[#ff00ff] uppercase">CUSTOM: {req}</span>
                  <span className="font-mono text-xs text-[#ff00ff]">ANALYSIS PENDING</span>
                </div>
              ))}
            </div>

            <div className="pt-6 border-t border-[#00ff88]/30 flex justify-between items-center">
              <div>
                <p className="text-[10px] font-mono text-[#555] uppercase">Total Captured Estimate</p>
                <p className="text-2xl font-display font-black text-[#00ff88]">
                  {selectedLead.currency} {selectedLead.project_total.toLocaleString()}
                </p>
              </div>
              <p className="text-[10px] font-mono text-[#444] text-right max-w-[200px]">
                Note: Breakdown values are based on current system prices.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
