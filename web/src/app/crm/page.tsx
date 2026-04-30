'use client';

import React, { useState, useEffect, useRef } from 'react';
import DashboardLayout from '../../components/DashboardLayout';
import TypewriterTitle from '../../components/TypewriterTitle';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Users, Search, Filter, Plus, MoreHorizontal, 
  Tag as TagIcon, Mail, Smartphone, Download, Upload, 
  Trash2, Edit2, X, CheckCircle2, AlertCircle, FileText,
  UserPlus, Database, CloudUpload, FileSpreadsheet, Palette,
  Loader2, Target, Layers, Zap
} from 'lucide-react';

interface Tag { id: string; name: string; color: string | null; }
interface Audience { id: string; name: string; }

interface Lead {
  id: string;
  name: string;
  email: string | null;
  phone: string;
  status: string;
  obs: string | null;
  tags: Tag[];
  audiences: Audience[];
}

const CRMPage = () => {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [availableTags, setAvailableTags] = useState<Tag[]>([]);
  const [availableAudiences, setAvailableAudiences] = useState<Audience[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeModal, setActiveModal] = useState<'ADD' | 'IMPORT' | 'EXPORT' | 'TAGS' | 'AUDIENCE' | 'TRIGGER' | null>(null);
  const [selectedLeads, setSelectedLeads] = useState<string[]>([]);
  const [availableWorkflows, setAvailableWorkflows] = useState<any[]>([]);
  const [selectedWorkflowId, setSelectedWorkflowId] = useState('');
  const [isTriggering, setIsTriggering] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Estados de Filtro
  const [searchQuery, setSearchQuery] = useState('');
  const [filterAudienceId, setFilterAudienceId] = useState<string | null>(null);
  const [filterTagId, setFilterTagId] = useState<string | null>(null);
  const [showSegmentsDropdown, setShowSegmentsDropdown] = useState(false);

  // Novos estados para formulários
  const [newLead, setNewLead] = useState({ name: '', email: '', phone: '', obs: '', tags: [] as string[], audiences: [] as string[] });
  const [newTagName, setNewTagName] = useState('');
  const [newTagColor, setNewTagColor] = useState('#8B5CF6');
  const [isCreatingTag, setIsCreatingTag] = useState(false);
  const [tagError, setTagError] = useState('');
  
  const [newAudienceName, setNewAudienceName] = useState('');
  const [isCreatingAudience, setIsCreatingAudience] = useState(false);
  const [audienceError, setAudienceError] = useState('');
  
  const [isImporting, setIsImporting] = useState(false);

  const [showInlineTagInput, setShowInlineTagInput] = useState(false);
  const [showInlineAudienceInput, setShowInlineAudienceInput] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const [leadsRes, tagsRes, audRes, wfRes] = await Promise.all([
        fetch('/api/crm/leads'),
        fetch('/api/crm/tags'),
        fetch('/api/crm/audiences'),
        fetch('/api/automation/workflows')
      ]);
      setLeads(await leadsRes.json());
      setAvailableTags(await tagsRes.json());
      setAvailableAudiences(await audRes.json());
      setAvailableWorkflows(await wfRes.json());
    } catch (err) { console.error(err); } finally { setLoading(false); }
  };

  const handleManualTrigger = async () => {
    if (!selectedWorkflowId) return;
    setIsTriggering(true);
    try {
      // Dispara para o primeiro público disponível (protótipo simplificado)
      // No futuro, isso usará o filtro atual da tela
      const res = await fetch('/api/automation/trigger', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          workflowId: selectedWorkflowId, 
          audienceId: availableAudiences[0]?.id 
        })
      });
      if (res.ok) setActiveModal(null);
    } catch (err) { console.error(err); } finally { setIsTriggering(false); }
  };

  useEffect(() => { fetchData(); }, []);

  const handleCreateTag = async () => {
    if (!newTagName) return;
    setIsCreatingTag(true);
    setTagError('');
    try {
      const res = await fetch('/api/crm/tags', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: newTagName, color: newTagColor })
      });
      const data = await res.json();
      if (res.ok) {
        setAvailableTags(prev => [...prev, data]);
        setNewTagName('');
      } else {
        setTagError(data.error || 'Erro ao criar tag');
        setTimeout(() => setTagError(''), 3000);
      }
    } catch (err) { console.error(err); } finally { setIsCreatingTag(false); }
  };

  const handleCreateAudience = async () => {
    if (!newAudienceName) return;
    setIsCreatingAudience(true);
    setAudienceError('');
    try {
      const res = await fetch('/api/crm/audiences', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: newAudienceName })
      });
      const data = await res.json();
      if (res.ok) {
        setAvailableAudiences(prev => [...prev, data]);
        setNewAudienceName('');
      } else {
        setAudienceError(data.error || 'Erro ao criar público');
        setTimeout(() => setAudienceError(''), 3000);
      }
    } catch (err) { console.error(err); } finally { setIsCreatingAudience(false); }
  };

  const handleSaveLead = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/crm/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newLead)
      });
      if (res.ok) {
        fetchData();
        setActiveModal(null);
        setNewLead({ name: '', email: '', phone: '', obs: '', tags: [], audiences: [] });
      }
    } catch (err) { console.error(err); }
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    setIsImporting(true);
    const reader = new FileReader();
    
    reader.onload = async (event) => {
      const text = event.target?.result as string;
      const lines = text.split('\n');
      const headers = lines[0].split(',').map(h => h.trim().toLowerCase());
      
      const newLeads = [];
      for (let i = 1; i < lines.length; i++) {
        if (!lines[i].trim()) continue;
        const values = lines[i].split(',').map(v => v.trim());
        const lead: any = {};
        headers.forEach((header, index) => {
          if (header.includes('nome')) lead.name = values[index];
          if (header.includes('email')) lead.email = values[index];
          if (header.includes('phone') || header.includes('tel') || header.includes('whats')) lead.phone = values[index];
        });
        if (lead.name && lead.phone) newLeads.push(lead);
      }

      try {
        // Envio em lote ou individual para a API
        await Promise.all(newLeads.map(l => 
          fetch('/api/crm/leads', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ ...l, status: 'ACTIVE', tags: [], audiences: [] })
          })
        ));
        fetchData();
        setActiveModal(null);
      } catch (err) {
        console.error("Erro na importação:", err);
      } finally {
        setIsImporting(false);
      }
    };
    
    reader.readAsText(file);
  };

  const filteredLeads = leads.filter(lead => {
    const matchesSearch = !searchQuery || 
      lead.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lead.email?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lead.phone.includes(searchQuery);
    
    const matchesAudience = !filterAudienceId || lead.audiences?.some(a => a.id === filterAudienceId);
    const matchesTag = !filterTagId || lead.tags?.some(t => t.id === filterTagId);

    return matchesSearch && matchesAudience && matchesTag;
  });

  return (
    <DashboardLayout>
      <div className="space-y-6 text-white" onClick={() => showSegmentsDropdown && setShowSegmentsDropdown(false)}>
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <TypewriterTitle text="Central de Leads" className="text-2xl font-bold uppercase tracking-tight" />
            <p className="text-white/40 text-[10px] uppercase tracking-[0.2em] mt-1">Gestão de contatos e segmentação em massa</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative group">
              <button onClick={() => setActiveModal('TRIGGER')} className="flex items-center gap-2 px-4 py-2 bg-neon-purple/20 border border-neon-purple/30 rounded-sm text-[10px] font-bold uppercase hover:bg-neon-purple/30 transition-all text-neon-purple"><Zap size={14} /> Iniciar Automação</button>
              <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-background/90 backdrop-blur-md border border-neon-purple/50 rounded-sm text-[8px] font-bold uppercase text-neon-purple opacity-0 group-hover:opacity-100 transition-all pointer-events-none whitespace-nowrap z-50 shadow-lg shadow-neon-purple/20">
                Disparar Fluxo para Públicos
              </span>
            </div>
            
            <div className="relative group">
              <button onClick={() => setActiveModal('TAGS')} className="p-2.5 bg-white/5 border border-white/10 rounded-sm text-white/40 hover:text-neon-purple transition-all"><TagIcon size={18} /></button>
              <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-background/90 backdrop-blur-md border border-neon-purple/50 rounded-sm text-[8px] font-bold uppercase text-neon-purple opacity-0 group-hover:opacity-100 transition-all pointer-events-none whitespace-nowrap z-50 shadow-lg shadow-neon-purple/20">
                Gerenciar Etiquetas
              </span>
            </div>

            <div className="relative group">
              <button onClick={() => setActiveModal('AUDIENCE')} className="p-2.5 bg-white/5 border border-white/10 rounded-sm text-white/40 hover:text-neon-blue transition-all"><Target size={18} /></button>
              <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-background/90 backdrop-blur-md border border-neon-blue/50 rounded-sm text-[8px] font-bold uppercase text-neon-blue opacity-0 group-hover:opacity-100 transition-all pointer-events-none whitespace-nowrap z-50 shadow-lg shadow-neon-blue/20">
                Segmentar Públicos
              </span>
            </div>

            <div className="relative group">
              <button onClick={() => setActiveModal('IMPORT')} className="p-2.5 bg-white/5 border border-white/10 rounded-sm text-white/40 hover:text-neon-blue transition-all"><Upload size={18} /></button>
              <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-background/90 backdrop-blur-md border border-neon-blue/50 rounded-sm text-[8px] font-bold uppercase text-neon-blue opacity-0 group-hover:opacity-100 transition-all pointer-events-none whitespace-nowrap z-50 shadow-lg shadow-neon-blue/20">
                Importar Contatos
              </span>
            </div>

            <div className="relative group">
              <button onClick={() => setActiveModal('EXPORT')} className="p-2.5 bg-white/5 border border-white/10 rounded-sm text-white/40 hover:text-neon-green transition-all"><Download size={18} /></button>
              <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-background/90 backdrop-blur-md border border-neon-green/50 rounded-sm text-[8px] font-bold uppercase text-neon-green opacity-0 group-hover:opacity-100 transition-all pointer-events-none whitespace-nowrap z-50 shadow-lg shadow-neon-green/20">
                Exportar Base
              </span>
            </div>

            <div className="relative group">
              <button onClick={() => setActiveModal('ADD')} className="flex items-center gap-2.5 px-6 py-2.5 bg-neon-blue rounded-sm text-[10px] font-bold uppercase tracking-widest shadow-lg hover:shadow-neon-blue/50 transition-all group"><UserPlus size={16} className="group-hover:scale-110 transition-transform" /> Novo Registro</button>
              <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-background/90 backdrop-blur-md border border-neon-blue/50 rounded-sm text-[8px] font-bold uppercase text-neon-blue opacity-0 group-hover:opacity-100 transition-all pointer-events-none whitespace-nowrap z-50 shadow-lg shadow-neon-blue/20">
                Adicionar Lead Manualmente
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-3">
            <div className="glass border border-white/10 rounded-sm overflow-hidden">
              <div className="p-4 border-b border-white/5 bg-white/[0.02] flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="relative group">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-neon-blue" size={14} />
                    <input 
                      value={searchQuery}
                      onChange={e => setSearchQuery(e.target.value)}
                      placeholder="FILTRAR LEADS..." 
                      className="bg-background/50 border border-white/10 rounded-sm py-1.5 pl-9 pr-4 text-[10px] text-white outline-none focus:border-neon-blue/50 w-64 transition-all uppercase font-mono" 
                    />
                  </div>
                  <div className="relative">
                    <button 
                      onClick={(e) => { e.stopPropagation(); setShowSegmentsDropdown(!showSegmentsDropdown); }}
                      className={`flex items-center gap-2 px-3 py-1.5 border rounded-sm text-[9px] font-bold uppercase transition-all ${
                        filterAudienceId || filterTagId 
                          ? 'bg-neon-blue/20 border-neon-blue/50 text-white shadow-lg shadow-neon-blue/20' 
                          : 'bg-white/5 border-white/10 text-white/40 hover:text-white'
                      }`}
                    >
                      <Filter size={12} /> {filterAudienceId || filterTagId ? 'Filtros Ativos' : 'Segmentos'}
                    </button>

                    <AnimatePresence>
                      {showSegmentsDropdown && (
                        <motion.div 
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute top-full left-0 mt-2 w-64 glass border border-white/10 rounded-sm p-4 z-[60] shadow-2xl"
                          onClick={e => e.stopPropagation()}
                        >
                          <div className="space-y-4">
                            <div>
                              <label className="text-[8px] font-bold text-white/30 uppercase tracking-[0.2em] mb-2 block">Por Público</label>
                              <div className="space-y-1 max-h-32 overflow-y-auto custom-scrollbar pr-1">
                                <button 
                                  onClick={() => setFilterAudienceId(null)}
                                  className={`w-full text-left px-2 py-1.5 rounded-sm text-[9px] uppercase font-bold transition-colors ${!filterAudienceId ? 'bg-neon-blue text-white' : 'hover:bg-white/5 text-white/40'}`}
                                >
                                  Todos os Públicos
                                </button>
                                {availableAudiences.map(aud => (
                                  <button 
                                    key={aud.id}
                                    onClick={() => setFilterAudienceId(aud.id)}
                                    className={`w-full text-left px-2 py-1.5 rounded-sm text-[9px] uppercase font-bold transition-colors ${filterAudienceId === aud.id ? 'bg-neon-blue text-white' : 'hover:bg-white/5 text-white/40'}`}
                                  >
                                    {aud.name}
                                  </button>
                                ))}
                              </div>
                            </div>

                            <div>
                              <label className="text-[8px] font-bold text-white/30 uppercase tracking-[0.2em] mb-2 block">Por Etiqueta</label>
                              <div className="space-y-1 max-h-32 overflow-y-auto custom-scrollbar pr-1">
                                <button 
                                  onClick={() => setFilterTagId(null)}
                                  className={`w-full text-left px-2 py-1.5 rounded-sm text-[9px] uppercase font-bold transition-colors ${!filterTagId ? 'bg-neon-purple text-white' : 'hover:bg-white/5 text-white/40'}`}
                                >
                                  Todas as Etiquetas
                                </button>
                                {availableTags.map(tag => (
                                  <button 
                                    key={tag.id}
                                    onClick={() => setFilterTagId(tag.id)}
                                    className={`w-full text-left px-2 py-1.5 rounded-sm text-[9px] uppercase font-bold transition-colors ${filterTagId === tag.id ? 'bg-neon-purple text-white' : 'hover:bg-white/5 text-white/40'}`}
                                  >
                                    <div className="flex items-center gap-2">
                                      <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: tag.color || '#8B5CF6' }} />
                                      {tag.name}
                                    </div>
                                  </button>
                                ))}
                              </div>
                            </div>

                            {(filterAudienceId || filterTagId) && (
                              <button 
                                onClick={() => { setFilterAudienceId(null); setFilterTagId(null); }}
                                className="w-full py-1.5 border border-red-500/30 text-red-500 text-[8px] font-bold uppercase rounded-sm hover:bg-red-500/10 transition-colors"
                              >
                                Limpar Filtros
                              </button>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
                <div className="text-[9px] font-mono text-white/20 uppercase tracking-widest">{filteredLeads.length} Registros</div>
              </div>

              <div className="overflow-x-auto custom-scrollbar">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-white/5 bg-white/[0.01]">
                      <th className="p-4 w-10"><input type="checkbox" className="accent-neon-blue" /></th>
                      <th className="p-4 text-[9px] font-bold uppercase text-white/30 tracking-widest">Identification</th>
                      <th className="p-4 text-[9px] font-bold uppercase text-white/30 tracking-widest">E-mail</th>
                      <th className="p-4 text-[9px] font-bold uppercase text-white/30 tracking-widest">Contato</th>
                      <th className="p-4 text-[9px] font-bold uppercase text-white/30 tracking-widest">Etiquetas</th>
                      <th className="p-4 text-[9px] font-bold uppercase text-white/30 tracking-widest">Status</th>
                      <th className="p-4 text-[9px] font-bold uppercase text-white/30 tracking-widest text-right">Ações</th>
                    </tr>
                  </thead>
                  <tbody>
                    {loading ? (
                      <tr><td colSpan={7} className="p-20 text-center"><div className="w-8 h-8 border-2 border-neon-blue/20 border-t-neon-blue rounded-full animate-spin mx-auto" /></td></tr>
                    ) : filteredLeads.map((lead) => (
                      <tr key={lead.id} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors group">
                        <td className="p-4"><input type="checkbox" className="accent-neon-blue" /></td>
                        <td className="p-4 text-xs font-bold uppercase text-white/90">{lead.name}</td>
                        <td className="p-4 text-[10px] text-white/50 font-mono">{lead.email || 'N/A'}</td>
                        <td className="p-4 text-white/60 font-mono text-[10px]">+{lead.phone}</td>
                        <td className="p-4"><div className="flex flex-wrap gap-1">{lead.tags?.map(tag => (<span key={tag.id} className="text-[8px] font-bold px-1.5 py-0.5 rounded-sm uppercase" style={{ backgroundColor: `${tag.color}20`, color: tag.color || '#8B5CF6', border: `1px solid ${tag.color}40` }}>{tag.name}</span>))}</div></td>
                        <td className="p-4">
                          <span className={`text-[8px] font-bold px-2 py-0.5 rounded-sm uppercase border ${
                            lead.status === 'ACTIVE' ? 'bg-neon-green/10 border-neon-green/20 text-neon-green' : 
                            lead.status === 'INACTIVE' ? 'bg-red-500/10 border-red-500/20 text-red-500' :
                            'bg-white/5 border-white/10 text-white/40'
                          }`}>
                            {lead.status || 'PENDING'}
                          </span>
                        </td>
                        <td className="p-4 text-right"><button className="p-2 text-white/20 hover:text-white transition-colors"><MoreHorizontal size={16} /></button></td>
                      </tr>
                    ))}
                    {filteredLeads.length === 0 && !loading && (
                      <tr>
                        <td colSpan={7} className="p-20 text-center">
                          <p className="text-[10px] text-white/20 uppercase font-bold tracking-widest italic">Nenhum registro encontrado para os filtros selecionados</p>
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="glass border border-white/10 rounded-sm p-6 space-y-6">
            <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-neon-blue">Analytics_Hub</h3>
            <div className="space-y-4">
              <div className="p-4 bg-white/5 border border-white/10 rounded-sm"><div className="text-[9px] font-bold text-white/30 uppercase mb-1">Total_Leads</div><div className="text-2xl font-bold font-mono text-white">{leads.length}</div></div>
              <div className="p-4 bg-white/5 border border-white/10 rounded-sm"><div className="text-[9px] font-bold text-white/30 uppercase mb-1">Públicos</div><div className="text-2xl font-bold font-mono text-neon-blue">{availableAudiences.length}</div></div>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {/* MODAL ADICIONAR LEAD */}
          {activeModal === 'ADD' && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 text-white">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setActiveModal(null)} className="absolute inset-0 bg-background/80 backdrop-blur-md" />
              <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="glass w-full max-w-lg rounded-sm p-8 z-10 border-neon-blue/30 relative">
                <button onClick={() => setActiveModal(null)} className="absolute top-4 right-4 text-white/20 hover:text-white"><X size={20} /></button>
                <h2 className="text-lg font-bold uppercase tracking-widest mb-8 flex items-center gap-3 text-white"><UserPlus className="text-neon-blue" /> Inserir_Lead</h2>
                <form onSubmit={handleSaveLead} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2 md:col-span-2">
                      <label className="text-[10px] font-bold uppercase text-white/40 block ml-1">Nome Completo</label>
                      <input required value={newLead.name} onChange={e => setNewLead({...newLead, name: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-sm py-2.5 px-4 text-xs text-white outline-none focus:border-neon-blue/50" />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase text-white/40 block ml-1">E-mail</label>
                      <input type="email" value={newLead.email} onChange={e => setNewLead({...newLead, email: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-sm py-2.5 px-4 text-xs text-white outline-none focus:border-neon-blue/50" placeholder="contato@hubia.com" />
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase text-white/40 block ml-1">WhatsApp</label>
                      <input required value={newLead.phone} onChange={e => setNewLead({...newLead, phone: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-sm py-2.5 px-4 text-xs text-white outline-none focus:border-neon-blue/50 font-mono" placeholder="55..." />
                    </div>
                    
                    <div className="space-y-2 md:col-span-2">
                      <div className="flex items-center justify-between ml-1">
                        <label className="text-[10px] font-bold uppercase text-white/40 block">Vincular Públicos</label>
                        <button type="button" onClick={() => setShowInlineAudienceInput(!showInlineAudienceInput)} className="text-[9px] font-bold text-neon-blue uppercase hover:underline">+ Criar Novo</button>
                      </div>
                      <div className="flex flex-wrap gap-2 p-2 bg-white/5 border border-white/10 rounded-sm min-h-[50px] max-h-32 overflow-y-auto custom-scrollbar">
                        {showInlineAudienceInput && (
                          <div className="flex items-center gap-1 w-full mb-1">
                            <input 
                              autoFocus
                              value={newAudienceName} 
                              onChange={e => setNewAudienceName(e.target.value)}
                              onKeyDown={e => { if(e.key === 'Enter') { e.preventDefault(); handleCreateAudience(); setShowInlineAudienceInput(false); } }}
                              placeholder="NOME DO PÚBLICO..." 
                              className="flex-1 bg-background/50 border border-neon-blue/30 rounded-sm px-2 py-1 text-[9px] text-white outline-none uppercase"
                            />
                            <button type="button" onClick={() => { handleCreateAudience(); setShowInlineAudienceInput(false); }} className="p-1 bg-neon-blue text-white rounded-sm transition-transform active:scale-95"><Plus size={12} /></button>
                          </div>
                        )}
                        {availableAudiences.map(aud => (
                          <button key={aud.id} type="button" onClick={() => setNewLead(prev => ({...prev, audiences: prev.audiences.includes(aud.id) ? prev.audiences.filter(i => i !== aud.id) : [...prev.audiences, aud.id]}))} className={`text-[8px] font-bold px-2 py-1 rounded-sm border transition-all ${newLead.audiences.includes(aud.id) ? 'bg-neon-blue border-neon-blue text-white' : 'border-white/10 text-white/30 hover:border-white/20'}`}>{aud.name}</button>
                        ))}
                        {availableAudiences.length === 0 && !showInlineAudienceInput && (
                          <p className="text-[8px] text-white/20 uppercase italic w-full text-center py-2">Nenhum público encontrado</p>
                        )}
                      </div>
                    </div>

                    <div className="space-y-2 md:col-span-2">
                      <div className="flex items-center justify-between ml-1">
                        <label className="text-[10px] font-bold uppercase text-white/40 block">Etiquetas</label>
                        <button type="button" onClick={() => setShowInlineTagInput(!showInlineTagInput)} className="text-[9px] font-bold text-neon-purple uppercase hover:underline">+ Criar Nova</button>
                      </div>
                      <div className="flex flex-wrap gap-2 p-2 bg-white/5 border border-white/10 rounded-sm min-h-[50px] max-h-32 overflow-y-auto custom-scrollbar">
                        {showInlineTagInput && (
                          <div className="flex items-center gap-1 w-full mb-1">
                            <input 
                              autoFocus
                              value={newTagName} 
                              onChange={e => setNewTagName(e.target.value)}
                              onKeyDown={e => { if(e.key === 'Enter') { e.preventDefault(); handleCreateTag(); setShowInlineTagInput(false); } }}
                              placeholder="NOME DA TAG..." 
                              className="flex-1 bg-background/50 border border-neon-purple/30 rounded-sm px-2 py-1 text-[9px] text-white outline-none uppercase"
                            />
                            <button type="button" onClick={() => { handleCreateTag(); setShowInlineTagInput(false); }} className="p-1 bg-neon-purple text-white rounded-sm transition-transform active:scale-95"><Plus size={12} /></button>
                          </div>
                        )}
                        {availableTags.map(tag => (
                          <button key={tag.id} type="button" onClick={() => setNewLead(prev => ({...prev, tags: prev.tags.includes(tag.id) ? prev.tags.filter(i => i !== tag.id) : [...prev.tags, tag.id]}))} className={`text-[8px] font-bold px-2 py-1 rounded-sm border transition-all ${newLead.tags.includes(tag.id) ? 'bg-neon-purple border-neon-purple text-white' : 'border-white/10 text-white/30 hover:border-white/20'}`}>{tag.name}</button>
                        ))}
                        {availableTags.length === 0 && !showInlineTagInput && (
                          <p className="text-[8px] text-white/20 uppercase italic w-full text-center py-2">Nenhuma tag encontrada</p>
                        )}
                      </div>
                    </div>
                  </div>
                  <button type="submit" className="w-full py-3 bg-neon-blue rounded-sm text-[10px] font-bold uppercase tracking-widest mt-4 hover:shadow-lg hover:shadow-neon-blue/20 transition-all active:scale-[0.98]">Sincronizar_Lead</button>
                </form>
              </motion.div>
            </div>
          )}

          {activeModal === 'IMPORT' && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 text-white">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setActiveModal(null)} className="absolute inset-0 bg-background/80 backdrop-blur-md" />
              <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="glass w-full max-w-md rounded-sm p-8 z-10 border-neon-blue/30 relative">
                <button onClick={() => setActiveModal(null)} className="absolute top-4 right-4 text-white/20 hover:text-white"><X size={20} /></button>
                <h2 className="text-lg font-bold uppercase tracking-widest mb-6">Importar_CSV</h2>
                <input type="file" accept=".csv" ref={fileInputRef} onChange={handleFileUpload} className="hidden" />
                <div onClick={() => fileInputRef.current?.click()} className="border-2 border-dashed border-white/10 rounded-sm p-12 text-center group hover:border-neon-blue transition-all cursor-pointer">
                  {isImporting ? (
                    <div className="flex flex-col items-center gap-4"><Loader2 size={48} className="animate-spin text-neon-blue" /><p className="text-xs font-bold uppercase">Processando Arquivo...</p></div>
                  ) : (
                    <><CloudUpload size={48} className="mx-auto text-white/10 group-hover:text-neon-blue mb-4" /><p className="text-xs text-white/40 font-bold uppercase tracking-widest">Clique para selecionar CSV</p></>
                  )}
                </div>
              </motion.div>
            </div>
          )}

          {activeModal === 'TAGS' && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 text-white">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setActiveModal(null)} className="absolute inset-0 bg-background/80 backdrop-blur-md" />
              <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="glass w-full max-w-md rounded-sm p-8 z-10 border-neon-purple/30 relative">
                <button onClick={() => setActiveModal(null)} className="absolute top-4 right-4 text-white/20 hover:text-white"><X size={20} /></button>
                <h2 className="text-lg font-bold uppercase tracking-widest mb-8 flex items-center gap-3"><Palette className="text-neon-purple" size={20} /> Etiquetas</h2>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <div className="flex gap-2">
                      <input value={newTagName} onChange={e => setNewTagName(e.target.value)} placeholder="NOME DA TAG..." className="flex-1 bg-white/5 border border-white/10 rounded-sm px-4 text-xs text-white outline-none focus:border-neon-purple/50 uppercase" />
                      <input type="color" value={newTagColor} onChange={e => setNewTagColor(e.target.value)} className="w-12 h-10 bg-transparent border-none cursor-pointer" />
                      <button onClick={handleCreateTag} disabled={isCreatingTag || !newTagName} className="px-4 bg-neon-purple rounded-sm text-[10px] font-bold uppercase disabled:opacity-50">{isCreatingTag ? <Loader2 size={16} className="animate-spin" /> : <Plus size={16} />}</button>
                    </div>
                    {tagError && <p className="text-[9px] text-red-500 font-bold uppercase ml-1">{tagError}</p>}
                  </div>
                  <div className="grid grid-cols-2 gap-2 max-h-48 overflow-y-auto pr-2 custom-scrollbar">
                    {availableTags.map(tag => (
                      <div key={tag.id} className="flex items-center justify-between p-2 bg-white/5 border border-white/10 rounded-sm">
                        <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full" style={{ backgroundColor: tag.color || '#8B5CF6' }} /><span className="text-[10px] font-bold uppercase text-white/70">{tag.name}</span></div>
                        <button className="text-white/10 hover:text-red-500 transition-colors"><Trash2 size={12} /></button>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          )}

          {activeModal === 'AUDIENCE' && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 text-white">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setActiveModal(null)} className="absolute inset-0 bg-background/80 backdrop-blur-md" />
              <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="glass w-full max-w-md rounded-sm p-8 z-10 border-neon-blue/30 relative">
                <button onClick={() => setActiveModal(null)} className="absolute top-4 right-4 text-white/20 hover:text-white"><X size={20} /></button>
                <h2 className="text-lg font-bold uppercase tracking-widest mb-8 flex items-center gap-3"><Target className="text-neon-blue" size={20} /> Públicos-Alvo</h2>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <div className="flex gap-2">
                      <input 
                        value={newAudienceName} 
                        onChange={e => setNewAudienceName(e.target.value)} 
                        placeholder="NOME DO PÚBLICO..." 
                        className="flex-1 bg-white/5 border border-white/10 rounded-sm py-2.5 px-4 text-xs text-white outline-none focus:border-neon-blue/50 uppercase" 
                      />
                      <button 
                        type="button"
                        onClick={handleCreateAudience} 
                        disabled={isCreatingAudience || !newAudienceName} 
                        className="px-6 bg-neon-blue rounded-sm text-[10px] font-bold uppercase shadow-lg shadow-neon-blue/20 transition-all disabled:opacity-50"
                      >
                        {isCreatingAudience ? <Loader2 size={18} className="animate-spin" /> : <Plus size={18} />}
                      </button>
                    </div>
                    {audienceError && <p className="text-[9px] text-red-500 font-bold uppercase ml-1">{audienceError}</p>}
                  </div>
                  <div className="grid grid-cols-1 gap-2 max-h-48 overflow-y-auto pr-2 custom-scrollbar">
                    {availableAudiences.map(aud => (
                      <div key={aud.id} className="flex items-center justify-between p-3 bg-white/5 border border-white/10 rounded-sm group">
                        <div className="flex items-center gap-3"><Layers size={14} className="text-neon-blue" /><span className="text-[10px] font-bold uppercase text-white/70">{aud.name}</span></div>
                        <button className="text-white/10 group-hover:text-red-500 transition-colors"><Trash2 size={12} /></button>
                      </div>
                    ))}
                    {availableAudiences.length === 0 && <p className="text-[9px] text-white/20 uppercase text-center py-4 italic">Nenhum público cadastrado</p>}
                  </div>
                </div>
              </motion.div>
            </div>
          )}
          {activeModal === 'TRIGGER' && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 text-white">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setActiveModal(null)} className="absolute inset-0 bg-background/80 backdrop-blur-md" />
              <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="glass w-full max-w-sm rounded-sm p-8 z-10 border-neon-purple/30 relative text-center">
                <button onClick={() => setActiveModal(null)} className="absolute top-4 right-4 text-white/20 hover:text-white"><X size={20} /></button>
                <h2 className="text-lg font-bold uppercase tracking-widest mb-8 flex items-center justify-center gap-2"><Zap className="text-neon-purple" /> Disparar_Fluxo</h2>
                <div className="space-y-6">
                  <div className="space-y-2 text-left">
                    <label className="text-[9px] font-bold uppercase text-white/40 block ml-1">Selecionar Automação</label>
                    <select value={selectedWorkflowId} onChange={e => setSelectedWorkflowId(e.target.value)} className="w-full bg-white/5 border border-white/10 rounded-sm py-2.5 px-4 text-xs text-white outline-none focus:border-neon-purple/50 appearance-none">
                      <option value="" className="bg-background">Escolha o Workflow...</option>
                      {availableWorkflows.map(wf => <option key={wf.id} value={wf.id} className="bg-background">{wf.name}</option>)}
                    </select>
                  </div>
                  <p className="text-[9px] text-white/30 uppercase leading-relaxed">A automação será iniciada para todos os leads do primeiro público cadastrado (protótipo).</p>
                  <button onClick={handleManualTrigger} disabled={isTriggering || !selectedWorkflowId} className="w-full py-3 bg-neon-purple rounded-sm text-[10px] font-bold uppercase tracking-widest shadow-lg disabled:opacity-30">
                    {isTriggering ? <Loader2 size={16} className="animate-spin mx-auto" /> : "Confirmar Início"}
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

export default CRMPage;
