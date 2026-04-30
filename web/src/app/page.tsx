'use client';

import React, { useState, useEffect } from 'react';
import DashboardLayout from '../components/DashboardLayout';
import TypewriterTitle from '../components/TypewriterTitle';
import { motion } from 'framer-motion';
import { 
  Users, Zap, Activity, CheckCircle2, 
  Smartphone, Loader2, TrendingUp, Layers, 
  Bot, PieChart, MousePointer2
} from 'lucide-react';

interface Stats {
  leads: { total: number; bySource: any[] };
  automations: { active: number; executions: any[] };
  whatsapp: { connected: number };
}

const Dashboard = () => {
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await fetch('/api/dashboard/stats');
        if (res.ok) setStats(await res.json());
      } catch (err) { console.error(err); } finally { setLoading(false); }
    };
    fetchStats();
  }, []);

  if (loading) {
    return (
      <DashboardLayout>
        <div className="h-[80vh] flex flex-col items-center justify-center gap-4">
          <Loader2 className="animate-spin text-neon-blue" size={40} />
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/20">Sincronizando_Dados_Globais</p>
        </div>
      </DashboardLayout>
    );
  }

  const completedCount = stats?.automations.executions.find(e => e.status === 'COMPLETED')?._count || 0;
  const sources = stats?.leads.bySource || [];

  return (
    <DashboardLayout>
      <div className="space-y-8 text-white">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div><TypewriterTitle text="Centro de Comando" className="text-2xl font-bold uppercase tracking-tight" /><p className="text-white/40 text-xs uppercase tracking-widest mt-1">Visão geral do ecossistema inteligente</p></div>
          <div className="flex items-center gap-2 px-4 py-2 bg-neon-green/5 border border-neon-green/20 rounded-sm"><div className="w-2 h-2 bg-neon-green rounded-full animate-pulse" /><span className="text-[10px] font-bold text-neon-green uppercase tracking-widest">Sistema_Operacional_Ativo</span></div>
        </div>

        {/* METRICS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: 'Leads Totais', value: stats?.leads.total || 0, icon: Users, color: 'text-neon-blue' },
            { label: 'Canais WhatsApp', value: stats?.whatsapp.connected || 0, icon: Smartphone, color: 'text-neon-green' },
            { label: 'Fluxos Ativos', value: stats?.automations.active || 0, icon: Zap, color: 'text-neon-purple' },
            { label: 'Processados', value: completedCount, icon: CheckCircle2, color: 'text-blue-400' }
          ].map((item, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1 }} className="glass border border-white/10 p-6 rounded-sm relative overflow-hidden group hover:border-white/20 transition-all">
              <div className="flex justify-between items-start mb-4"><div className={`p-2 bg-white/5 rounded-sm ${item.color}`}><item.icon size={20} /></div><div className="w-12 h-4 bg-white/5 rounded-full animate-pulse" /></div>
              <div className="text-3xl font-bold font-mono mb-1">{item.value}</div>
              <p className="text-[10px] font-bold uppercase text-white/30 tracking-widest">{item.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* ANALYTICS DE ORIGEM (GRAFICO) */}
          <div className="lg:col-span-1 glass border border-white/10 p-8 rounded-sm space-y-8">
            <div className="flex items-center gap-3 text-neon-blue"><PieChart size={18} /><h3 className="text-sm font-bold uppercase tracking-widest">Origem_dos_Leads</h3></div>
            <div className="relative flex flex-col items-center justify-center pt-4">
               {/* Gráfico Visual */}
               <div className="w-40 h-40 rounded-full border-8 border-white/5 flex items-center justify-center relative">
                  <div className="absolute inset-0 rounded-full border-8 border-neon-blue border-t-transparent animate-[spin_10s_linear_infinite]" />
                  <div className="flex flex-col items-center">
                    <span className="text-2xl font-bold font-mono">{stats?.leads.total}</span>
                    <span className="text-[8px] text-white/30 uppercase font-bold">Base Total</span>
                  </div>
               </div>
               
               <div className="w-full mt-8 space-y-3">
                  {sources.length > 0 ? sources.map((src: any, i: number) => (
                    <div key={i} className="flex items-center justify-between group">
                      <div className="flex items-center gap-2">
                        <div className={`w-1.5 h-1.5 rounded-full ${i === 0 ? 'bg-neon-blue' : i === 1 ? 'bg-neon-purple' : 'bg-neon-green'}`} />
                        <span className="text-[10px] font-bold uppercase text-white/60">{src.source}</span>
                      </div>
                      <span className="text-[10px] font-mono text-white/40">{Math.round((src._count / (stats?.leads.total || 1)) * 100)}%</span>
                    </div>
                  )) : <p className="text-[10px] text-white/20 uppercase text-center italic">Aguardando Captura...</p>}
               </div>
            </div>
          </div>

          {/* Gráfico de Crescimento */}
          <div className="lg:col-span-2 glass border border-white/10 p-8 rounded-sm space-y-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3 text-neon-green"><TrendingUp size={18} /><h3 className="text-sm font-bold uppercase tracking-widest">Activity_Pulse_7D</h3></div>
            </div>
            <div className="h-48 flex items-end justify-between gap-4 px-4">
              {[45, 62, 38, 85, 54, 72, 95].map((val, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-3 group">
                  <div className="relative w-full">
                    <motion.div initial={{ height: 0 }} animate={{ height: `${val}%` }} className="w-full bg-gradient-to-t from-neon-blue/20 to-neon-blue border-t-2 border-neon-blue rounded-t-sm shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all group-hover:shadow-[0_0_25px_rgba(59,130,246,0.5)]" />
                  </div>
                  <span className="text-[8px] font-bold text-white/20 uppercase">Day_{i+1}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* LOGS DE ATIVIDADE */}
        <div className="glass border border-white/10 rounded-sm overflow-hidden">
          <div className="p-4 border-b border-white/5 bg-white/[0.02] flex items-center justify-between">
            <div className="flex items-center gap-3"><Activity size={16} className="text-neon-blue" /><h3 className="text-[10px] font-bold uppercase tracking-[0.2em]">Fluxo_de_Atividade_Global</h3></div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-[10px] font-mono">
              <thead><tr className="border-b border-white/5 bg-white/[0.01]"><th className="p-4 text-[9px] font-bold uppercase text-white/30 tracking-widest">Horário</th><th className="p-4 text-[9px] font-bold uppercase text-white/30 tracking-widest">Operação</th><th className="p-4 text-[9px] font-bold uppercase text-white/30 tracking-widest">Entidade</th><th className="p-4 text-[9px] font-bold uppercase text-white/30 tracking-widest">Status</th></tr></thead>
              <tbody>
                {[{ time: '14:22:05', op: 'WHATSAPP_SEND', target: 'Lead_ID_992', status: 'SUCCESS' }, { time: '14:21:12', op: 'AI_COGNITIVE', target: 'Triage_Active', status: 'SUCCESS' }].map((log, i) => (
                  <tr key={i} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors"><td className="p-4 text-white/40">{log.time}</td><td className="p-4 font-bold text-white/80 uppercase">{log.op}</td><td className="p-4 text-neon-blue">{log.target}</td><td className="p-4"><span className="px-2 py-0.5 rounded-sm bg-neon-green/10 text-neon-green border border-neon-green/20 text-[8px] font-bold">{log.status}</span></td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
