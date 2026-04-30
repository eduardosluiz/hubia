'use client';

import React, { useState, useEffect } from 'react';
import DashboardLayout from '../../components/DashboardLayout';
import TypewriterTitle from '../../components/TypewriterTitle';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Plus, MessageSquare, Shield, Zap, Settings2, RefreshCw, 
  Smartphone, CheckCircle2, AlertCircle, X, Search, Bot, 
  Layers, ArrowRight, Trash2, UserPlus,
  ChevronLeft, ChevronRight, Loader2, BrainCircuit
} from 'lucide-react';
import AIConfigView from './AIConfigView';

interface Instance {
  id: string;
  name: string;
  number: string;
  status: 'CONNECTED' | 'DISCONNECTED' | 'CONNECTING';
  type: 'MAIN_IA' | 'AGENT';
  chatsCount?: number;
}

interface Queue {
  id: string;
  name: string;
  mainInstanceId: string;
  mainInstance?: Instance;
  agents: any[];
}

const WhatsAppPage = () => {
  const [activeTab, setActiveTab] = useState<'INSTANCES' | 'QUEUES' | 'TRAINING'>('INSTANCES');
  const [loading, setLoading] = useState(true);
  const [instances, setInstances] = useState<Instance[]>([]);
  const [queues, setQueues] = useState<Queue[]>([]);
  
  const [showQRModal, setShowQRModal] = useState(false);
  const [showQueueModal, setShowQueueModal] = useState(false);
  const [selectedInstanceForAI, setSelectedInstanceForAI] = useState<Instance | null>(null);
  
  const [qrCodeData, setQrCodeData] = useState<string | null>(null);
  const [isGeneratingQR, setIsGeneratingQR] = useState(false);
  const [newInstanceName, setNewInstanceName] = useState('');
  const [isAIInstance, setIsAIInstance] = useState(false);
  
  const [instanceToDelete, setInstanceToDelete] = useState<Instance | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const [newQueueName, setNewQueueName] = useState('');
  const [selectedMainId, setSelectedMainId] = useState('');
  const [selectedAgentIds, setSelectedAgentIds] = useState<string[]>([]);
  
  const [modalMessage, setModalMessage] = useState<{ type: 'error' | 'success', text: string } | null>(null);

  // Poll for connection success when QR code is visible
  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (qrCodeData && showQRModal) {
      interval = setInterval(async () => {
        try {
          const res = await fetch('/api/whatsapp/instances');
          if (!res.ok) return;
          const data = await res.json();
          
          if (Array.isArray(data)) {
            // Verifica se a instância que estamos tentando conectar agora está 'open'
            const currentInst = data.find(inst => 
              inst.instanceName.toLowerCase() === newInstanceName.toLowerCase() || 
              inst.instanceName.replace(/\s+/g, '_').toLowerCase() === newInstanceName.replace(/\s+/g, '_').toLowerCase()
            );
            
            if (currentInst && (currentInst.status === 'open' || currentInst.status === 'CONNECTED')) {
              setQrCodeData(null);
              setShowQRModal(false);
              setModalMessage(null);
              setNewInstanceName('');
              fetchData();
              clearInterval(interval);
            }
          }
        } catch (err) {
          console.error("Erro no polling de conexão:", err);
        }
      }, 3000); // Polling a cada 3 segundos
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [qrCodeData, showQRModal, newInstanceName]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const [instRes, queueRes] = await Promise.all([
        fetch('/api/whatsapp/instances'),
        fetch('/api/whatsapp/queues')
      ]);
      const instData = await instRes.json();
      const queueData = await queueRes.json();

      if (Array.isArray(instData)) {
        setInstances(instData.map((inst: any) => {
          const name = inst.instanceName || 'Instância Sem Nome';
          
          return {
            id: inst.instanceId || inst.instanceName || Math.random().toString(),
            name: name,
            number: inst.owner || 'Não vinculado',
            status: inst.status === 'open' || inst.status === 'CONNECTED' ? 'CONNECTED' : 'DISCONNECTED',
            type: inst.type || 'AGENT',
            chatsCount: 0
          };
        }));
      }
      if (Array.isArray(queueData)) setQueues(queueData);
    } catch (err) { console.error(err); } finally { setLoading(false); }
  };

  useEffect(() => { fetchData(); }, []);

  const handleCreateQueue = async () => {
    if (!newQueueName || !selectedMainId) return;
    try {
      const res = await fetch('/api/whatsapp/queues', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: newQueueName, mainInstanceId: selectedMainId, agentIds: selectedAgentIds })
      });
      if (res.ok) {
        fetchData();
        setShowQueueModal(false);
        setNewQueueName(''); setSelectedMainId(''); setSelectedAgentIds([]);
      }
    } catch (err) { console.error(err); }
  };

  const handleCreateConnection = async () => {
    if (!newInstanceName) return;
    setIsGeneratingQR(true);
    setModalMessage(null);
    try {
      const res = await fetch('/api/whatsapp/connect', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          instanceName: newInstanceName,
          isAI: isAIInstance 
        })
      });
      const data = await res.json();
      
      if (res.ok) {
        if (data.qrcode?.base64) {
          setQrCodeData(data.qrcode.base64);
          setModalMessage({ type: 'success', text: 'Instância criada! Escaneie o QR Code abaixo.' });
        } else {
          setModalMessage({ type: 'success', text: 'Instância conectada com sucesso!' });
          fetchData();
          setTimeout(() => {
            setShowQRModal(false);
            setModalMessage(null);
            setNewInstanceName('');
          }, 2500);
        }
      } else {
        const errorText = data?.details ? `${data.error}: ${data.details}` : (data?.error || 'Falha ao criar conexão');
        setModalMessage({ type: 'error', text: errorText });
      }
    } catch (err) { 
      setModalMessage({ type: 'error', text: 'Falha de conexão com o servidor' });
      console.error(err); 
    } finally { setIsGeneratingQR(false); }
  };

  const confirmDeleteInstance = async () => {
    if (!instanceToDelete) return;
    setIsDeleting(true);
    try {
      const res = await fetch(`/api/whatsapp/instance/${instanceToDelete.id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: instanceToDelete.name })
      });
      if (res.ok) {
        setInstanceToDelete(null);
        fetchData();
      } else {
        const errorData = await res.json().catch(() => ({}));
        setModalMessage({ type: 'error', text: errorData.error || "Erro ao excluir a instância." });
        setInstanceToDelete(null);
        setShowQRModal(true); // Re-use the QR modal to show the error message in standard style
      }
    } catch (err) {
      console.error(err);
      setModalMessage({ type: 'error', text: "Falha de conexão com o servidor." });
      setInstanceToDelete(null);
      setShowQRModal(true);
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-6 text-white">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <TypewriterTitle text="WhatsApp e IA" className="text-2xl font-bold uppercase tracking-tight" />
            <p className="text-white/40 text-xs uppercase tracking-widest mt-1">Gestão de canais e inteligência cognitiva</p>
          </div>
          <div className="flex bg-white/5 border border-white/10 p-1 rounded-sm">
            {[
              { id: 'INSTANCES', label: 'Instâncias', color: 'bg-neon-blue' },
              { id: 'QUEUES', label: 'Filas de Atendimento', color: 'bg-neon-purple' },
              { id: 'TRAINING', label: 'Treinamento IA', color: 'bg-neon-green' }
            ].map(tab => (
              <button 
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-1.5 text-[10px] font-bold uppercase transition-all ${activeTab === tab.id ? `${tab.color} text-white shadow-lg` : 'text-white/40 hover:text-white'}`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          {activeTab === 'INSTANCES' && (
            <motion.div key="instances" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-6">
              <div className="flex items-center justify-between gap-4">
                <div className="relative flex-1 max-w-md group"><Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-neon-blue" size={16} /><input placeholder="PESQUISAR..." className="w-full bg-white/5 border border-white/10 rounded-sm py-2 pl-10 pr-4 text-xs text-white outline-none focus:border-neon-blue/50 uppercase transition-all" /></div>
                <button onClick={() => setShowQRModal(true)} className="flex items-center gap-2 px-6 py-2 bg-neon-blue rounded-sm text-[10px] font-bold uppercase tracking-widest shadow-lg"><Plus size={14} /> Nova Conexão</button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {instances.map((instance) => (
                  <motion.div key={instance.id} whileHover={{ translateY: -4 }} className="glass border border-white/10 p-5 rounded-sm relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-3 flex gap-2 items-center">
                      <div className={`flex items-center gap-1.5 px-2 py-0.5 rounded-full border ${instance.status === 'CONNECTED' ? 'bg-neon-green/10 text-neon-green border-neon-green/20' : 'bg-red-500/10 text-red-500 border-red-500/20'}`}>
                        {instance.status === 'CONNECTED' && <div className="w-1.5 h-1.5 bg-neon-green rounded-full animate-pulse" />}
                        <span className="text-[8px] font-bold uppercase">{instance.status}</span>
                      </div>
                      <button onClick={() => setInstanceToDelete(instance)} className="text-white/20 hover:text-red-400 transition-colors p-1" title="Excluír Instância e IA">
                        <Trash2 size={14} />
                      </button>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-sm flex items-center justify-center border ${instance.type === 'MAIN_IA' ? 'bg-neon-purple/10 border-neon-purple/30 text-neon-purple' : 'bg-white/5 border-white/10 text-white/40'}`}>{instance.type === 'MAIN_IA' ? <Bot size={24} /> : <Smartphone size={24} />}</div>
                      <div className="space-y-1"><h3 className="text-xs font-bold uppercase text-white/90">{instance.name}</h3><p className="text-[10px] font-mono text-white/30">{instance.number}</p><span className={`text-[8px] font-bold uppercase px-1.5 py-0.5 rounded-sm inline-block mt-2 ${instance.type === 'MAIN_IA' ? 'bg-neon-purple text-white' : 'bg-white/10 text-white/40'}`}>{instance.type === 'MAIN_IA' ? 'Filtro IA' : 'Agente'}</span></div>
                    </div>
                    <div className="grid grid-cols-2 gap-2 mt-6 pt-4 border-t border-white/5"><button onClick={() => { setSelectedInstanceForAI(instance); setActiveTab('TRAINING'); }} className="flex items-center justify-center gap-2 py-2 bg-white/5 hover:bg-white/10 rounded-sm text-[9px] font-bold uppercase text-white/60 border border-transparent hover:border-white/10 transition-all"><BrainCircuit size={12} /> Treinar IA</button><button className="flex items-center justify-center gap-2 py-2 bg-white/5 hover:bg-white/10 rounded-sm text-[9px] font-bold uppercase text-white/60 border border-transparent hover:border-white/10 transition-all"><RefreshCw size={12} /> Reiniciar</button></div>
                  </motion.div>
                ))}
                <button onClick={() => setShowQRModal(true)} className="border-2 border-dashed border-white/5 hover:border-neon-blue/30 rounded-sm p-5 flex flex-col items-center justify-center gap-3 group transition-all text-white/20 hover:text-white"><Plus size={24} /><span className="text-[10px] font-bold uppercase tracking-widest">Adicionar_Instância</span></button>
              </div>
            </motion.div>
          )}

          {activeTab === 'QUEUES' && (
            <motion.div key="queues" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-6">
              <div className="flex items-center justify-between"><h2 className="text-sm font-bold uppercase tracking-[0.2em] text-neon-purple">Estrutura de Transferência</h2><button onClick={() => setShowQueueModal(true)} className="flex items-center gap-2 px-6 py-2 bg-neon-purple rounded-sm text-[10px] font-bold uppercase tracking-widest shadow-lg shadow-neon-purple/20"><Plus size={14} /> Criar Nova Fila</button></div>
              <div className="space-y-4">
                {queues.map((queue) => (
                  <div key={queue.id} className="glass border border-white/10 p-6 rounded-sm">
                    <div className="flex items-center justify-between mb-6"><div className="flex items-center gap-3"><div className="w-10 h-10 bg-neon-purple/10 rounded-sm flex items-center justify-center text-neon-purple border border-neon-purple/20"><Layers size={20} /></div><div><h3 className="text-sm font-bold uppercase text-white">{queue.name}</h3><p className="text-[10px] text-white/30 uppercase tracking-widest">IA Inteligente &gt; Transferência Circular</p></div></div><button className="p-2 text-white/20 hover:text-white"><Trash2 size={16} /></button></div>
                    <div className="flex items-center gap-4 overflow-x-auto pb-4 pt-8 custom-scrollbar">
                      <div className="flex-shrink-0 w-48 p-4 bg-neon-purple/5 border border-neon-purple/20 rounded-sm relative"><div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-neon-purple text-[8px] font-bold px-2.5 py-1 rounded-full uppercase z-20 shadow-lg text-white">Filtro IA</div><div className="flex flex-col items-center gap-2 text-center"><Bot size={20} className="text-neon-purple" /><span className="text-[10px] font-bold text-white uppercase">{queue.mainInstance?.instanceName}</span></div></div>
                      <ArrowRight className="flex-shrink-0 text-white/10" size={24} />
                      {queue.agents?.map((agent: any, idx: number) => (
                        <React.Fragment key={agent.id}><div className="flex-shrink-0 w-48 p-4 bg-white/5 border border-white/10 rounded-sm relative"><div className="absolute -top-3 left-4 bg-white/10 text-[8px] font-bold px-2.5 py-1 rounded-full text-white/60 uppercase z-20 border border-white/5">Ordem: {idx + 1}</div><div className="flex flex-col items-center gap-2 text-center"><Smartphone size={20} className="text-white/40" /><span className="text-[10px] font-bold text-white/70 uppercase">{agent.instance?.instanceName}</span></div></div>{idx < queue.agents.length - 1 && <ArrowRight className="flex-shrink-0 text-white/10" size={24} />}</React.Fragment>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'TRAINING' && (
            <motion.div key="training" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="h-full">
              {!selectedInstanceForAI ? (
                <div className="py-20 text-center glass border border-white/5 rounded-sm">
                  <BrainCircuit size={48} className="mx-auto text-white/5 mb-4" />
                  <p className="text-xs font-bold uppercase text-white/20 mb-6">Selecione uma instância para configurar o cérebro</p>
                  <div className="flex flex-wrap justify-center gap-3 px-6">
                    {instances.map(inst => (
                      <button key={inst.id} onClick={() => setSelectedInstanceForAI(inst)} className="px-4 py-2 bg-white/5 border border-white/10 rounded-sm text-[10px] font-bold uppercase hover:border-neon-green/50 transition-all">{inst.name}</button>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="relative">
                  <button onClick={() => setSelectedInstanceForAI(null)} className="absolute top-4 left-4 z-50 text-[9px] font-bold uppercase text-white/40 hover:text-white flex items-center gap-1"><ChevronLeft size={14} /> Voltar à Seleção</button>
                  <div className="pt-10 h-[calc(100vh-250px)]">
                    <AIConfigView onBack={() => setSelectedInstanceForAI(null)} instanceId={selectedInstanceForAI.id} instanceName={selectedInstanceForAI.name} />
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {showQRModal && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 text-white">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setShowQRModal(false)} className="absolute inset-0 bg-background/80 backdrop-blur-md" />
              <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="glass w-full max-w-sm rounded-sm p-8 z-10 border-neon-blue/30 relative text-center">
                <button onClick={() => { setShowQRModal(false); setQrCodeData(null); setModalMessage(null); }} className="absolute top-4 right-4 text-white/20 hover:text-white"><X size={20} /></button>
                <h2 className="text-lg font-bold uppercase tracking-widest mb-6 flex items-center justify-center gap-2"><Zap className="text-neon-blue" size={20} /> Conexão_Real</h2>
                
                {modalMessage && (
                  <div className={`mb-4 p-3 rounded-sm border text-[10px] font-bold uppercase tracking-widest ${modalMessage.type === 'error' ? 'bg-red-500/10 border-red-500/50 text-red-500' : 'bg-neon-green/10 border-neon-green/50 text-neon-green'}`}>
                    {modalMessage.text}
                  </div>
                )}

                {!qrCodeData ? (
                  <div className="space-y-6">
                    <div className="space-y-2 text-left"><label className="text-[9px] font-bold uppercase text-white/40 block ml-1">Nome da Instância</label><input value={newInstanceName} onChange={e => setNewInstanceName(e.target.value)} placeholder="EX: ATENDIMENTO_01" className="w-full bg-white/5 border border-white/10 rounded-sm py-3 px-4 text-xs text-white outline-none focus:border-neon-blue/50 uppercase font-mono" /></div>
                    
                    <div 
                      onClick={() => setIsAIInstance(!isAIInstance)}
                      className={`flex items-center gap-3 p-3 border rounded-sm cursor-pointer transition-all ${isAIInstance ? 'bg-neon-purple/10 border-neon-purple/50' : 'bg-white/5 border-white/10 hover:bg-white/10'}`}
                    >
                      <div className={`w-4 h-4 border rounded-sm flex items-center justify-center ${isAIInstance ? 'bg-neon-purple border-neon-purple' : 'border-white/20'}`}>
                        {isAIInstance && <CheckCircle2 size={12} />}
                      </div>
                      <div className="text-left">
                        <span className="text-[10px] font-bold uppercase text-white/90 block">Usar como Filtro IA?</span>
                        <span className="text-[8px] text-white/30 uppercase">Esta instância será o "Cérebro" inicial do atendimento.</span>
                      </div>
                    </div>

                    <button onClick={handleCreateConnection} disabled={isGeneratingQR || !newInstanceName} className="w-full py-3 bg-neon-blue rounded-sm text-[10px] font-bold uppercase tracking-widest shadow-lg shadow-neon-blue/20">{isGeneratingQR ? <Loader2 className="animate-spin mx-auto" size={18} /> : "Gerar QR Code Vivo"}</button>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <div className="bg-white p-4 rounded-sm inline-block shadow-[0_0_30px_rgba(59,130,246,0.3)]"><img src={qrCodeData} alt="QR Code" className="w-48 h-48" /></div>
                    <p className="text-[10px] text-white/40 uppercase leading-relaxed font-mono px-4">Escaneie para ativar a integração Nexus.</p>
                    <button onClick={() => { setShowQRModal(false); setQrCodeData(null); setModalMessage(null); fetchData(); }} className="w-full py-3 bg-neon-green border border-neon-green/30 hover:bg-neon-green/80 text-white rounded-sm text-[10px] font-bold uppercase tracking-widest transition-all">
                      Concluído / Atualizar Lista
                    </button>
                  </div>
                )}
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {showQueueModal && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 text-white">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setShowQueueModal(false)} className="absolute inset-0 bg-background/80 backdrop-blur-md" />
              <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="glass w-full max-w-md rounded-sm p-8 z-10 border-neon-purple/30 relative">
                <button onClick={() => setShowQueueModal(false)} className="absolute top-4 right-4 text-white/20 hover:text-white"><X size={20} /></button>
                <h2 className="text-lg font-bold uppercase tracking-widest mb-6">Configurar_Nova_Fila</h2>
                <div className="space-y-6">
                  <div className="space-y-2"><label className="text-[9px] font-bold uppercase text-white/40 block">Nome da Fila</label><input value={newQueueName} onChange={(e) => setNewQueueName(e.target.value)} placeholder="EX: TIME COMERCIAL" className="w-full bg-white/5 border border-white/10 rounded-sm py-3 px-4 text-xs text-white outline-none focus:border-neon-purple/50 transition-all uppercase" /></div>
                  <div className="space-y-2"><label className="text-[9px] font-bold uppercase text-white/40 block">Instância Principal (IA)</label><select value={selectedMainId} onChange={(e) => setSelectedMainId(e.target.value)} className="w-full bg-white/5 border border-white/10 rounded-sm py-3 px-4 text-xs text-white outline-none focus:border-neon-purple/50 appearance-none"><option value="" className="bg-background">Selecionar Instância...</option>{instances.filter(i => i.type === 'MAIN_IA').map(i => (<option key={i.id} value={i.id} className="bg-background">{i.name}</option>))}</select></div>
                  <div className="space-y-2"><label className="text-[9px] font-bold uppercase text-white/40 block">Atendentes Humano (Transferência)</label><div className="space-y-2 max-h-40 overflow-y-auto pr-2 custom-scrollbar">{instances.filter(i => i.type === 'AGENT').map(i => (<div key={i.id} onClick={() => setSelectedAgentIds(prev => prev.includes(i.id) ? prev.filter(a => a !== i.id) : [...prev, i.id])} className={`flex items-center gap-3 p-3 border rounded-sm cursor-pointer transition-all ${selectedAgentIds.includes(i.id) ? 'bg-neon-purple/10 border-neon-purple/50' : 'bg-white/5 border-white/10 hover:bg-white/10'}`}><div className={`w-4 h-4 border rounded-sm flex items-center justify-center ${selectedAgentIds.includes(i.id) ? 'bg-neon-purple border-neon-purple' : 'border-white/20'}`}>{selectedAgentIds.includes(i.id) && <CheckCircle2 size={12} />}</div><span className="text-[10px] font-bold uppercase text-white/70">{i.name}</span></div>))}</div></div>
                  <button onClick={handleCreateQueue} disabled={!newQueueName || !selectedMainId} className="w-full py-3 bg-neon-purple disabled:opacity-30 rounded-sm text-[10px] font-bold uppercase tracking-[0.2em] shadow-lg shadow-neon-purple/20 hover:shadow-neon-purple/40 transition-all mt-4">Criar_Fila_Nexus</button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {instanceToDelete && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 text-white">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setInstanceToDelete(null)} className="absolute inset-0 bg-background/80 backdrop-blur-md" />
              <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="glass w-full max-w-sm rounded-sm p-8 z-10 border-red-500/30 relative text-center">
                <button onClick={() => setInstanceToDelete(null)} className="absolute top-4 right-4 text-white/20 hover:text-white"><X size={20} /></button>
                <div className="mx-auto w-12 h-12 bg-red-500/10 text-red-500 rounded-full flex items-center justify-center mb-4"><Trash2 size={24} /></div>
                <h2 className="text-lg font-bold uppercase tracking-widest mb-2">Excluir Instância?</h2>
                <p className="text-[10px] text-white/40 uppercase leading-relaxed font-mono px-2 mb-6">
                  Atenção: Esta ação irá remover o WhatsApp de forma definitiva da plataforma.
                  <br/><br/>
                  <span className="text-red-400 font-bold border-b border-red-500/30 pb-0.5">O conhecimento e o cérebro de IA atrelados a ela também serão destruídos permanentemente.</span>
                </p>
                <div className="grid grid-cols-2 gap-3">
                  <button onClick={() => setInstanceToDelete(null)} className="py-3 bg-white/5 hover:bg-white/10 rounded-sm text-[10px] font-bold uppercase tracking-widest transition-all">Cancelar</button>
                  <button onClick={confirmDeleteInstance} disabled={isDeleting} className="py-3 bg-red-500/20 border border-red-500/50 hover:bg-red-500 text-red-400 hover:text-white rounded-sm text-[10px] font-bold uppercase tracking-widest shadow-lg shadow-red-500/20 transition-all flex justify-center items-center">
                    {isDeleting ? <Loader2 size={16} className="animate-spin" /> : "Sim, Excluir"}
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </DashboardLayout>
  );
};

export default WhatsAppPage;
