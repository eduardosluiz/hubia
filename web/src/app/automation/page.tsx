'use client';

import React, { useState, useEffect } from 'react';
import DashboardLayout from '../../components/DashboardLayout';
import TypewriterTitle from '../../components/TypewriterTitle';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Plus, Zap, Play, Pause, Trash2, Edit2, 
  Search, Filter, CheckCircle2, AlertCircle, 
  Loader2, Target, Smartphone, MoreHorizontal,
  Activity, BarChart3, Clock, X, FileText, User
} from 'lucide-react';
import FlowEditor from './FlowEditor';

interface Workflow {
  id: string;
  name: string;
  status: 'ACTIVE' | 'PAUSED';
  updatedAt: string;
  stats: {
    total: number;
    queued: number;
    completed: number;
    failed: number;
  }
}

interface WorkflowLog {
  id: string;
  status: string;
  currentNode: string;
  updatedAt: string;
  lead: { name: string, phone: string };
}

const AutomationPage = () => {
  const [workflows, setWorkflows] = useState<Workflow[]>([]);
  const [audiences, setAvailableAudiences] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [showEditor, setShowEditor] = useState(false);
  const [showTriggerModal, setShowTriggerModal] = useState(false);
  const [showLogModal, setShowLogModal] = useState(false);
  
  const [selectedWorkflow, setSelectedWorkflow] = useState<Workflow | null>(null);
  const [selectedWorkflowId, setSelectedWorkflowId] = useState('');
  const [selectedAudienceId, setSelectedAudienceId] = useState('');
  const [triggering, setTriggering] = useState(false);
  
  const [workflowLogs, setWorkflowLogs] = useState<WorkflowLog[]>([]);
  const [loadingLogs, setLoadingLogs] = useState(false);

  const fetchData = async () => {
    try {
      const [wfRes, audRes] = await Promise.all([
        fetch('/api/automation/workflows'),
        fetch('/api/crm/audiences')
      ]);
      const wfData = await wfRes.json();
      const audData = await audRes.json();
      setWorkflows(Array.isArray(wfData) ? wfData : []);
      setAvailableAudiences(Array.isArray(audData) ? audData : []);
    } catch (err) { console.error(err); } finally { setLoading(false); }
  };

  useEffect(() => { 
    fetchData();
    const interval = setInterval(fetchData, 10000);
    return () => clearInterval(interval);
  }, []);

  const openLogs = async (workflow: Workflow) => {
    setSelectedWorkflow(workflow);
    setShowLogModal(true);
    setLoadingLogs(true);
    try {
      const res = await fetch(`/api/automation/workflows/${workflow.id}/logs`);
      const data = await res.json();
      setWorkflowLogs(Array.isArray(data) ? data : []);
    } catch (err) { console.error(err); } finally { setLoadingLogs(false); }
  };

  const handleStartTrigger = async () => {
    if (!selectedWorkflowId || !selectedAudienceId) return;
    setTriggering(true);
    try {
      const res = await fetch('/api/automation/trigger', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ workflowId: selectedWorkflowId, audienceId: selectedAudienceId })
      });
      if (res.ok) { setShowTriggerModal(false); fetchData(); }
    } catch (err) { console.error(err); } finally { setTriggering(false); }
  };

  const toggleStatus = async (id: string, currentStatus: string) => {
    const newStatus = currentStatus === 'ACTIVE' ? 'PAUSED' : 'ACTIVE';
    try {
      await fetch(`/api/automation/workflows/${id}/status`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus })
      });
      fetchData();
    } catch (err) { console.error(err); }
  };

  if (showEditor) {
    return <FlowEditor onBack={() => setShowEditor(false)} onSave={() => { setShowEditor(false); fetchData(); }} />;
  }

  return (
    <DashboardLayout>
      <div className="space-y-6 text-white">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <TypewriterTitle text="Automações Nexus" className="text-2xl font-bold uppercase tracking-tight" />
              <p className="text-white/40 text-xs uppercase tracking-widest mt-1">Gerencie réguas de atendimento e disparos</p>
            </div>
            <div className="flex items-center gap-3">
              <button onClick={() => setShowTriggerModal(true)} className="flex items-center gap-2 px-6 py-2.5 bg-white/5 border border-white/10 rounded-sm text-[10px] font-bold uppercase tracking-widest hover:bg-white/10 transition-all"><Zap size={14} className="text-neon-blue" /> Novo Disparo</button>
              <button onClick={() => setShowEditor(true)} className="flex items-center gap-2 px-6 py-2.5 bg-neon-purple rounded-sm text-[10px] font-bold uppercase tracking-widest shadow-lg shadow-neon-purple/20 hover:shadow-neon-purple/40 transition-all"><Plus size={14} /> Novo Fluxo</button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {loading ? (
              [1,2,3].map(i => <div key={i} className="h-56 glass border border-white/5 animate-pulse rounded-sm" />)
            ) : workflows.map((wf) => (
              <div key={wf.id} className="glass border border-white/10 p-6 rounded-sm relative group hover:border-white/20 transition-all">
                <div className="flex items-center justify-between mb-6">
                  <div className={`flex items-center gap-1.5 px-2 py-0.5 rounded-full border ${wf.status === 'ACTIVE' ? 'bg-neon-green/10 text-neon-green border-neon-green/20' : 'bg-orange-500/10 text-orange-500 border-orange-500/20'}`}>{wf.status === 'ACTIVE' && <div className="w-1.5 h-1.5 bg-neon-green rounded-full animate-pulse" />}<span className="text-[8px] font-bold uppercase">{wf.status === 'ACTIVE' ? 'Rodando' : 'Pausado'}</span></div>
                  <div className="flex items-center gap-2"><button className="p-1.5 text-white/20 hover:text-white transition-colors"><Edit2 size={14} /></button><button className="p-1.5 text-white/20 hover:text-red-500 transition-colors"><Trash2 size={14} /></button></div>
                </div>
                <h3 className="text-sm font-bold uppercase text-white/90 mb-1">{wf.name}</h3>
                <div className="space-y-4 mb-6 mt-6">
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-[9px] font-bold uppercase tracking-widest text-white/40"><span>Taxa de Sucesso</span><span>{wf.stats ? Math.round((wf.stats.completed / (wf.stats.total || 1)) * 100) : 0}%</span></div>
                    <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden flex"><div className="h-full bg-neon-blue shadow-[0_0_10px_rgba(59,130,246,0.5)]" style={{ width: `${wf.stats ? (wf.stats.completed / (wf.stats.total || 1)) * 100 : 0}%` }} /><div className="h-full bg-neon-purple/40" style={{ width: `${wf.stats ? (wf.stats.queued / (wf.stats.total || 1)) * 100 : 0}%` }} /></div>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <div className="text-center p-2 bg-white/[0.02] border border-white/5 rounded-sm"><div className="text-[8px] text-white/20 uppercase mb-1">Fila</div><div className="text-xs font-bold font-mono text-neon-blue">{wf.stats?.queued || 0}</div></div>
                    <div className="text-center p-2 bg-white/[0.02] border border-white/5 rounded-sm"><div className="text-[8px] text-white/20 uppercase mb-1">Ok</div><div className="text-xs font-bold font-mono text-neon-green">{wf.stats?.completed || 0}</div></div>
                    <div className="text-center p-2 bg-white/[0.02] border border-white/5 rounded-sm"><div className="text-[8px] text-white/20 uppercase mb-1">Erro</div><div className="text-xs font-bold font-mono text-red-500">{wf.stats?.failed || 0}</div></div>
                  </div>
                </div>
                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  <button onClick={() => toggleStatus(wf.id, wf.status)} className="flex items-center gap-2 text-[10px] font-bold uppercase transition-all">{wf.status === 'ACTIVE' ? <><Pause size={12} className="text-orange-500" /> Pausar</> : <><Play size={12} className="text-neon-green" /> Ativar</>}</button>
                  <button onClick={() => openLogs(wf)} className="flex items-center gap-2 px-3 py-1 bg-white/5 rounded-sm text-[9px] font-bold uppercase text-white/40 hover:text-white transition-all"><FileText size={12} /> Relatório</button>
                </div>
              </div>
            ))}
          </div>

          {/* MODAL DE RELATÓRIO DETALHADO */}
          <AnimatePresence>
            {showLogModal && selectedWorkflow && (
              <div className="fixed inset-0 z-[150] flex items-center justify-center p-6 text-white">
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setShowLogModal(false)} className="absolute inset-0 bg-background/95 backdrop-blur-xl" />
                <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="glass w-full max-w-4xl max-h-[85vh] rounded-sm p-8 z-10 border-white/10 relative flex flex-col">
                  <div className="flex justify-between items-center mb-8"><div className="flex items-center gap-4"><div className="w-10 h-10 rounded-sm bg-neon-blue/10 flex items-center justify-center text-neon-blue border border-neon-blue/20"><FileText size={20} /></div><div><h2 className="text-lg font-bold uppercase tracking-widest">{selectedWorkflow.name}</h2><p className="text-[10px] text-white/30 uppercase tracking-widest">Logs_Auditoria_Execução</p></div></div><button onClick={() => setShowLogModal(false)} className="p-2 text-white/20 hover:text-white"><X size={24} /></button></div>
                  
                  <div className="flex-1 overflow-y-auto custom-scrollbar border border-white/5 rounded-sm">
                    <table className="w-full text-left border-collapse">
                      <thead className="sticky top-0 bg-[#050914] z-20 shadow-md">
                        <tr className="border-b border-white/10 bg-white/[0.02]">
                          <th className="p-4 text-[9px] font-bold uppercase text-white/30 tracking-widest">Lead_Identificação</th>
                          <th className="p-4 text-[9px] font-bold uppercase text-white/30 tracking-widest">Status_Atual</th>
                          <th className="p-4 text-[9px] font-bold uppercase text-white/30 tracking-widest">Etapa_ID</th>
                          <th className="p-4 text-[9px] font-bold uppercase text-white/30 tracking-widest text-right">Ultima_Sinc</th>
                        </tr>
                      </thead>
                      <tbody>
                        {loadingLogs ? (
                          <tr><td colSpan={4} className="p-20 text-center"><Loader2 className="animate-spin mx-auto text-neon-blue" size={32} /></td></tr>
                        ) : workflowLogs.length === 0 ? (
                          <tr><td colSpan={4} className="p-20 text-center text-[10px] font-bold uppercase text-white/10">Nenhum registro de execução encontrado</td></tr>
                        ) : workflowLogs.map((log) => (
                          <tr key={log.id} className="border-b border-white/5 hover:bg-white/[0.01] transition-colors group text-[10px]">
                            <td className="p-4"><div className="flex items-center gap-3"><User size={14} className="text-white/20" /><div><div className="font-bold text-white/90">{log.lead.name}</div><div className="text-white/30">+{log.lead.phone}</div></div></div></td>
                            <td className="p-4"><span className={`px-2 py-0.5 rounded-full font-bold uppercase text-[8px] border ${log.status === 'COMPLETED' ? 'bg-neon-green/10 text-neon-green border-neon-green/20' : log.status === 'FAILED' ? 'bg-red-500/10 text-red-500 border-red-500/20' : 'bg-neon-blue/10 text-neon-blue border-neon-blue/20'}`}>{log.status}</span></td>
                            <td className="p-4 text-white/40 font-mono">NODE_{log.currentNode?.slice(-6).toUpperCase() || 'START'}</td>
                            <td className="p-4 text-right text-white/20 font-mono">{new Date(log.updatedAt).toLocaleTimeString()}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {showTriggerModal && (
              <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 text-white">
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setShowTriggerModal(false)} className="absolute inset-0 bg-background/80 backdrop-blur-md" />
                <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="glass w-full max-w-sm rounded-sm p-8 z-10 border-neon-blue/30 relative text-center">
                  <button onClick={() => setShowTriggerModal(false)} className="absolute top-4 right-4 text-white/20 hover:text-white"><X size={20} /></button>
                  <h2 className="text-lg font-bold uppercase tracking-widest mb-8 flex items-center justify-center gap-2"><Play className="text-neon-blue" /> Iniciar_Disparo</h2>
                  <div className="space-y-6">
                    <div className="space-y-2 text-left"><label className="text-[9px] font-bold uppercase text-white/40 block ml-1">Selecionar Fluxo</label><select value={selectedWorkflowId} onChange={e => setSelectedWorkflowId(e.target.value)} className="w-full bg-white/5 border border-white/10 rounded-sm py-2.5 px-4 text-xs text-white outline-none focus:border-neon-blue/50 appearance-none"><option value="" className="bg-background">Escolha o Workflow...</option>{workflows.map(wf => <option key={wf.id} value={wf.id} className="bg-background">{wf.name}</option>)}</select></div>
                    <div className="space-y-2 text-left"><label className="text-[9px] font-bold uppercase text-white/40 block ml-1">Público Alvo</label><select value={selectedAudienceId} onChange={e => setSelectedAudienceId(e.target.value)} className="w-full bg-white/5 border border-white/10 rounded-sm py-2.5 px-4 text-xs text-white outline-none focus:border-neon-blue/50 appearance-none"><option value="" className="bg-background">Escolha o Público...</option>{audiences.map(aud => <option key={aud.id} value={aud.id} className="bg-background">{aud.name}</option>)}</select></div>
                    <button onClick={handleStartTrigger} disabled={triggering || !selectedWorkflowId || !selectedAudienceId} className="w-full py-3 bg-neon-blue rounded-sm text-[10px] font-bold uppercase tracking-widest shadow-lg disabled:opacity-30">{triggering ? <Loader2 size={16} className="animate-spin mx-auto" /> : "Confirmar Disparo em Massa"}</button>
                  </div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>
        </div>
    </DashboardLayout>
  );
};

export default AutomationPage;
