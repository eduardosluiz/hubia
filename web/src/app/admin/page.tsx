'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, Users, Building2, BarChart3, 
  Settings2, LogOut, TrendingUp, AlertTriangle,
  CreditCard, Search, MoreVertical, ExternalLink,
  Zap, Globe, Filter, Loader2
} from 'lucide-react';

interface TenantStats {
  id: string;
  name: string;
  status: string;
  leadsCount: number;
  usersCount: number;
  plan: string;
}

const SuperAdminDashboard = () => {
  const [tenants, setTenants] = useState<TenantStats[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchGlobalStats = async () => {
    // Simulação de dados para o protótipo
    setTimeout(() => {
      setTenants([
        { id: '1', name: 'Nexus Hub', status: 'ACTIVE', leadsCount: 1250, usersCount: 5, plan: 'Enterprise' },
        { id: '2', name: 'Alpha Tech', status: 'TRIAL', leadsCount: 450, usersCount: 2, plan: 'Pro' },
        { id: '3', name: 'Beta Solutions', status: 'SUSPENDED', leadsCount: 8900, usersCount: 12, plan: 'Free' },
      ]);
      setLoading(false);
    }, 1000);
  };

  useEffect(() => { fetchGlobalStats(); }, []);

  const stats = [
    { label: 'Total MRR', value: 'R$ 14.250', icon: CreditCard, color: 'text-amber-500' },
    { label: 'Tenants Ativos', value: '42', icon: Building2, color: 'text-amber-500' },
    { label: 'Leads no Sistema', value: '154k', icon: Users, color: 'text-amber-500' },
    { label: 'Uptime Global', value: '99.9%', icon: Zap, color: 'text-green-500' },
  ];

  return (
    <div className="min-h-screen bg-[#020617] text-white flex">
      {/* Sidebar Admin */}
      <aside className="w-64 border-r border-white/5 bg-black/20 p-6 flex flex-col gap-8">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-amber-500/10 rounded-sm text-amber-500 border border-amber-500/20"><ShieldCheck size={24} /></div>
          <div><h2 className="text-sm font-bold uppercase tracking-widest">Nexus_Mestre</h2><span className="text-[8px] text-amber-500/50 uppercase font-mono tracking-widest">Super_Admin_v1</span></div>
        </div>

        <nav className="flex-1 space-y-2">
          <button className="w-full flex items-center gap-3 p-3 bg-amber-500/10 border border-amber-500/20 rounded-sm text-amber-500 text-[10px] font-bold uppercase tracking-widest"><BarChart3 size={16} /> Visão Geral</button>
          <button className="w-full flex items-center gap-3 p-3 hover:bg-white/5 border border-transparent rounded-sm text-white/40 text-[10px] font-bold uppercase tracking-widest transition-all"><Building2 size={16} /> Gestão de Tenants</button>
          <button className="w-full flex items-center gap-3 p-3 hover:bg-white/5 border border-transparent rounded-sm text-white/40 text-[10px] font-bold uppercase tracking-widest transition-all"><Users size={16} /> Usuários Globais</button>
          <button className="w-full flex items-center gap-3 p-3 hover:bg-white/5 border border-transparent rounded-sm text-white/40 text-[10px] font-bold uppercase tracking-widest transition-all"><Settings2 size={16} /> Planos & Stripe</button>
        </nav>

        <button className="flex items-center gap-3 p-3 text-red-500/50 hover:text-red-500 text-[10px] font-bold uppercase tracking-widest transition-all"><LogOut size={16} /> Encerrar_Sessão</button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 space-y-8 overflow-y-auto custom-scrollbar">
        <header className="flex justify-between items-center">
          <div><h1 className="text-2xl font-bold uppercase tracking-tighter">Command_Center</h1><p className="text-[10px] text-white/30 uppercase tracking-[0.2em] mt-1">Monitoramento de infraestrutura e receita</p></div>
          <div className="flex items-center gap-4">
            <div className="relative"><Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/20" /><input placeholder="BUSCAR TENANT..." className="bg-white/5 border border-white/10 rounded-sm py-2 px-10 text-[10px] text-white outline-none focus:border-amber-500/50 w-64 uppercase font-mono transition-all" /></div>
            <div className="flex items-center gap-3 border-l border-white/10 pl-4"><div className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center border border-amber-500/40"><Users size={16} className="text-amber-500" /></div></div>
          </div>
        </header>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="glass border border-white/10 p-6 rounded-sm space-y-2 relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-20 transition-all"><stat.icon size={48} /></div>
               <div className="flex items-center gap-2 text-white/40 text-[9px] font-bold uppercase tracking-widest"><stat.icon size={12} className={stat.color} /> {stat.label}</div>
               <div className="text-2xl font-bold font-mono text-white">{stat.value}</div>
            </motion.div>
          ))}
        </div>

        {/* Global Tenants Table */}
        <div className="glass border border-white/10 rounded-sm overflow-hidden">
          <div className="p-4 border-b border-white/5 bg-white/[0.02] flex items-center justify-between">
            <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-amber-500">Monitoramento_de_Empresas</h3>
            <button className="flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-sm text-[9px] font-bold uppercase text-white/40 hover:text-white transition-all"><Filter size={12} /> Filtros Avançados</button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/5 bg-white/[0.01]">
                  <th className="p-4 text-[9px] font-bold uppercase text-white/30 tracking-widest">Identificação_Tenant</th>
                  <th className="p-4 text-[9px] font-bold uppercase text-white/30 tracking-widest">Status</th>
                  <th className="p-4 text-[9px] font-bold uppercase text-white/30 tracking-widest">Plano</th>
                  <th className="p-4 text-[9px] font-bold uppercase text-white/30 tracking-widest">Métricas</th>
                  <th className="p-4 text-[9px] font-bold uppercase text-white/30 tracking-widest text-right">Ações</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr><td colSpan={5} className="p-20 text-center"><Loader2 className="animate-spin mx-auto text-amber-500" /></td></tr>
                ) : tenants.map((tenant) => (
                  <tr key={tenant.id} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors group">
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-sm bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-amber-500/30 transition-all text-amber-500"><Building2 size={16} /></div>
                        <div><div className="text-[10px] font-bold uppercase text-white/90">{tenant.name}</div><div className="text-[8px] text-white/20 font-mono tracking-tighter">ID: {tenant.id}</div></div>
                      </div>
                    </td>
                    <td className="p-4">
                      <span className={`text-[8px] font-bold px-2 py-0.5 rounded-sm uppercase border ${
                        tenant.status === 'ACTIVE' ? 'bg-green-500/10 border-green-500/20 text-green-500' : 
                        tenant.status === 'TRIAL' ? 'bg-blue-500/10 border-blue-500/20 text-blue-500' :
                        'bg-red-500/10 border-red-500/20 text-red-500'
                      }`}>
                        {tenant.status}
                      </span>
                    </td>
                    <td className="p-4 text-[9px] font-bold uppercase text-white/40">{tenant.plan}</td>
                    <td className="p-4">
                      <div className="flex items-center gap-4">
                         <div className="text-center"><div className="text-[7px] text-white/20 uppercase">Leads</div><div className="text-[10px] font-bold text-white/70">{tenant.leadsCount}</div></div>
                         <div className="text-center"><div className="text-[7px] text-white/20 uppercase">Users</div><div className="text-[10px] font-bold text-white/70">{tenant.usersCount}</div></div>
                      </div>
                    </td>
                    <td className="p-4 text-right">
                      <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-all">
                        <button className="p-2 text-white/20 hover:text-amber-500 transition-colors"><ExternalLink size={14} /></button>
                        <button className="p-2 text-white/20 hover:text-white transition-colors"><MoreVertical size={14} /></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Global Activity Chart (Placeholder) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pb-8">
           <div className="glass border border-white/10 p-6 rounded-sm h-64 flex flex-col justify-between">
              <h3 className="text-[10px] font-bold uppercase tracking-widest text-white/30">Crescimento_de_Leads_Global</h3>
              <div className="flex-1 flex items-end gap-2 pt-8">
                {[40, 70, 45, 90, 65, 80, 100, 85].map((h, i) => (
                  <div key={i} className="flex-1 bg-amber-500/10 border border-amber-500/20 rounded-t-sm group relative" style={{ height: `${h}%` }}>
                    <div className="absolute inset-0 bg-amber-500 opacity-0 group-hover:opacity-20 transition-all" />
                  </div>
                ))}
              </div>
           </div>
           <div className="glass border border-white/10 p-6 rounded-sm h-64 flex flex-col justify-between">
              <h3 className="text-[10px] font-bold uppercase tracking-widest text-white/30">Saúde_dos_Nós_Nexus</h3>
              <div className="space-y-4 pt-4">
                <div className="flex justify-between items-center"><span className="text-[9px] text-white/40 uppercase">WhatsApp Engine</span><span className="text-[9px] text-green-500 font-bold uppercase">Operacional</span></div>
                <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden"><div className="w-[98%] h-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]" /></div>
                <div className="flex justify-between items-center"><span className="text-[9px] text-white/40 uppercase">Webhook Processor</span><span className="text-[9px] text-green-500 font-bold uppercase">Operacional</span></div>
                <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden"><div className="w-full h-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]" /></div>
              </div>
           </div>
        </div>
      </main>
    </div>
  );
};

export default SuperAdminDashboard;
