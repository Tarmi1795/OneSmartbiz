"use client";

import React, { useState, useEffect } from "react";
import { KeyRound, Save, RefreshCcw, ShieldCheck, ShieldAlert, ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function AdminPage() {
  const [password, setPassword] = useState("");
  const [isAuth, setIsAuth] = useState(false);
  const [prices, setPrices] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  const fetchPrices = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/prices");
      const data = await res.json();
      if (data.error) throw new Error(data.error);
      setPrices(data);
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
             <button onClick={fetchPrices} className="p-3 border border-[#333] text-[#888] hover:text-white transition-colors">
               <RefreshCcw className={`w-5 h-5 ${loading ? 'animate-spin' : ''}`} />
             </button>
             <Link href="/" className="flex items-center gap-2 px-6 py-3 border border-[#333] text-[#888] font-mono text-xs uppercase hover:text-white transition-colors">
               <ChevronLeft className="w-4 h-4" /> Exit
             </Link>
          </div>
        </div>

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
    </div>
  );
}
