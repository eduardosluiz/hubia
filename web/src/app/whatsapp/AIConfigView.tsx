'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  X, Save, Bot, Database, Sparkles, 
  Loader2, Shield, Upload, Trash2, CheckCircle2,
  FileText, FileCheck
} from 'lucide-react';

const AIConfigView = ({ onBack, instanceId, instanceName }: { onBack: () => void, instanceId: string, instanceName: string }) => {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [success, setSuccess] = useState(false);
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Estados da IA
  const [aiEnabled, setAiEnabled] = useState(false);
  const [aiPrompt, setAiPrompt] = useState('');
  const [aiModel, setAiModel] = useState('gpt-4o');
  const [knowledgeBase, setKnowledgeBase] = useState('');

  useEffect(() => {
    const loadConfig = async () => {
      try {
        const res = await fetch(`/api/whatsapp/instance/${instanceId}/ai`);
        if (res.ok) {
          const data = await res.json();
          if (data) {
            setAiEnabled(data.aiEnabled || false);
            setAiPrompt(data.aiPrompt || '');
            setAiModel(data.aiModel || 'gpt-4o');
            setKnowledgeBase(data.knowledgeBase || '');
          }
        }
      } catch (err) { console.error(err); } finally { setLoading(false); }
    };
    if (instanceId) loadConfig();
  }, [instanceId]);

  const handleSave = async () => {
    setSaving(true);
    try {
      const res = await fetch(`/api/whatsapp/instance/${instanceId}/ai`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ aiEnabled, aiPrompt, aiModel, knowledgeBase })
      });
      if (res.ok) { setSuccess(true); setTimeout(() => setSuccess(false), 3000); }
    } catch (err) { console.error(err); } finally { setSaving(false); }
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await fetch(`/api/whatsapp/instance/${instanceId}/knowledge/file`, {
        method: 'POST',
        body: formData
      });
      const data = await res.json();
      if (res.ok) {
        setKnowledgeBase(prev => (prev ? prev + "\n\n" : "") + "CONTEÚDO DO ARQUIVO:\n" + data.preview);
        alert('Conhecimento extraído e adicionado com sucesso!');
      }
    } catch (err) { console.error(err); } finally { setUploading(false); }
  };

  if (loading) return <div className="h-full flex items-center justify-center"><Loader2 className="animate-spin text-neon-purple" size={32} /></div>;

  return (
    <div className="h-full flex flex-col bg-[#030712] border border-white/10 rounded-sm overflow-hidden text-white">
      <header className="h-16 border-b border-white/5 bg-white/[0.02] px-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button onClick={onBack} className="p-2 hover:bg-white/5 rounded-sm text-white/40"><X size={18} /></button>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-sm bg-neon-purple/20 flex items-center justify-center text-neon-purple border border-neon-purple/30 shadow-[0_0_10px_rgba(139,92,246,0.2)]"><Bot size={18} /></div>
            <div><h2 className="text-sm font-bold uppercase tracking-tight">Treinamento_IA // {instanceName}</h2><p className="text-[9px] text-white/30 uppercase tracking-widest font-mono">Cognitive_Engine_v4.0</p></div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-sm">
            <span className="text-[10px] font-bold uppercase text-white/40">Status IA</span>
            <button onClick={() => setAiEnabled(!aiEnabled)} className={`w-10 h-5 rounded-full relative transition-all ${aiEnabled ? 'bg-neon-green' : 'bg-white/10'}`}><motion.div animate={{ x: aiEnabled ? 22 : 2 }} className="absolute top-1 w-3 h-3 bg-white rounded-full shadow-lg" /></button>
          </div>
          <button onClick={handleSave} disabled={saving} className="flex items-center gap-2 px-6 py-2 bg-neon-purple rounded-sm text-[10px] font-bold uppercase shadow-lg shadow-neon-purple/20 transition-all">{saving ? <Loader2 size={14} className="animate-spin" /> : <Save size={14} />} {success ? 'Sincronizado' : 'Salvar Treino'}</button>
        </div>
      </header>

      <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 text-white">
          <section className="space-y-6">
            <div className="flex items-center gap-3 text-neon-purple"><Sparkles size={18} /><h3 className="text-xs font-bold uppercase tracking-widest">Personalidade_e_Diretrizes</h3></div>
            <div className="glass border border-white/10 p-6 rounded-sm space-y-4">
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase text-white/40 block ml-1">Modelo de Processamento</label>
                <select value={aiModel} onChange={e => setAiModel(e.target.value)} className="w-full bg-white/5 border border-white/10 rounded-sm p-3 text-xs outline-none focus:border-neon-purple/50 appearance-none text-white"><option value="gpt-4o" className="bg-background">GPT-4o (Alta Performance)</option><option value="gpt-3.5-turbo" className="bg-background">GPT-3.5 (Velocidade)</option></select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase text-white/40 block ml-1">Prompt de Instrução (System)</label>
                <textarea value={aiPrompt} onChange={e => setAiPrompt(e.target.value)} rows={12} className="w-full bg-white/5 border border-white/10 rounded-sm p-4 text-xs outline-none focus:border-neon-purple/50 resize-none font-mono leading-relaxed text-white" placeholder="Descreva como a IA deve agir..." />
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <div className="flex items-center gap-3 text-neon-blue"><Database size={18} /><h3 className="text-xs font-bold uppercase tracking-widest">Base_de_Conhecimento</h3></div>
            <div className="glass border border-white/10 p-6 rounded-sm space-y-6">
              <input type="file" ref={fileInputRef} onChange={handleFileUpload} className="hidden" accept=".pdf,.txt" />
              <div 
                onClick={() => fileInputRef.current?.click()}
                className="border-2 border-dashed border-white/10 rounded-sm p-10 text-center group hover:border-neon-blue transition-all cursor-pointer"
              >
                {uploading ? (
                  <div className="flex flex-col items-center gap-4"><Loader2 size={32} className="animate-spin text-neon-blue" /><p className="text-xs font-bold uppercase">Extraindo Conhecimento...</p></div>
                ) : (
                  <>
                    <Upload size={32} className="mx-auto text-white/10 group-hover:text-neon-blue mb-4" />
                    <p className="text-[10px] text-white/40 font-bold uppercase">Upload de PDF ou TXT</p>
                    <p className="text-[8px] text-white/20 mt-2 uppercase italic text-white">A IA aprenderá com este documento</p>
                  </>
                )}
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between items-center px-1"><label className="text-[10px] font-bold uppercase text-white/40 block">Cérebro Atual (Contexto)</label><button onClick={() => setKnowledgeBase('')} className="text-[8px] font-bold uppercase text-red-500/50 hover:text-red-500 transition-colors">Limpar Tudo</button></div>
                <textarea value={knowledgeBase} onChange={e => setKnowledgeBase(e.target.value)} rows={6} className="w-full bg-white/5 border border-white/10 rounded-sm p-4 text-xs outline-none focus:border-neon-blue/50 resize-none font-sans text-white" placeholder="O conteúdo dos arquivos aparecerá aqui..." />
              </div>

              <div className="bg-neon-blue/5 border border-neon-blue/20 p-4 rounded-sm flex items-start gap-4">
                <div className="p-2 bg-neon-blue/10 rounded-sm text-neon-blue"><Shield size={18} /></div>
                <div><h4 className="text-[10px] font-bold text-neon-blue uppercase tracking-widest">Memória Blindada</h4><p className="text-[8px] text-white/40 uppercase leading-relaxed text-white">Os dados extraídos são processados e armazenados no seu banco de dados privado.</p></div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AIConfigView;
