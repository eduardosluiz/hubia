'use client';

import React, { useState, useEffect } from 'react';
import DashboardLayout from '../../components/DashboardLayout';
import TypewriterTitle from '../../components/TypewriterTitle';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Plus, Trash2, Globe, Shield, Key, Zap, 
  CheckCircle2, AlertCircle, Loader2, Copy,
  ExternalLink, Settings, Database, Cloud, Mail, Server, X
} from 'lucide-react';

interface Integration {
  id: string;
  name: string;
  platform: string;
  webhookKey: string;
  autoTag: string | null;
}

interface SmtpAccount {
  id: string;
  name: string;
  user: string;
  host: string;
}

const IntegrationsPage = () => {
  const [integrations, setIntegrations] = useState<Integration[]>([]);
  const [smtpAccounts, setSmtpAccounts] = useState<SmtpAccount[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showSmtpModal, setShowSmtpModal] = useState(false);
  
  const [newIntegration, setNewIntegration] = useState({ name: '', platform: 'KIWIFY' });
  const [newSmtp, setNewSmtp] = useState({ name: '', host: '', port: 465, user: '', pass: '', secure: true });
  
  const [copySuccess, setCopySuccess] = useState<string | null>(null);

  const fetchSettings = async () => {
    try {
      const [intRes, smtpRes] = await Promise.all([
        fetch('/api/settings/integrations'),
        fetch('/api/settings/smtp')
      ]);
      
      const intData = await intRes.json();
      const smtpData = await smtpRes.json();
      
      setIntegrations(Array.isArray(intData) ? intData : []);
      setSmtpAccounts(Array.isArray(smtpData) ? smtpData : []);
    } catch (err) { 
      console.error("Erro ao buscar configurações:", err);
      setIntegrations([]);
      setSmtpAccounts([]);
    } finally { 
      setLoading(false); 
    }
  };

  useEffect(() => { fetchSettings(); }, []);

  const openAddModal = () => {
    setNewIntegration({ name: '', platform: 'KIWIFY' });
    setShowAddModal(true);
  };

  const openSmtpModal = () => {
    setNewSmtp({ name: '', host: '', port: 465, user: '', pass: '', secure: true });
    setShowSmtpModal(true);
  };

  const handleAddSmtp = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/settings/smtp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newSmtp)
      });
      if (res.ok) { fetchSettings(); setShowSmtpModal(false); }
    } catch (err) { console.error(err); }
  };

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/settings/integrations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newIntegration)
      });
      if (res.ok) { fetchSettings(); setShowAddModal(false); }
    } catch (err) { console.error(err); }
  };

  const handleDeleteIntegration = async (id: string) => {
    if (!confirm('Tem certeza que deseja excluir esta integração? Esta ação é irreversível.')) return;
    try {
      const res = await fetch(`/api/settings/integrations/${id}`, { method: 'DELETE' });
      if (res.ok) fetchSettings();
    } catch (err) { console.error(err); }
  };

  const handleDeleteSmtp = async (id: string) => {
    if (!confirm('Tem certeza que deseja excluir esta conta SMTP? Isso pode afetar automações em andamento.')) return;
    try {
      const res = await fetch(`/api/settings/smtp/${id}`, { method: 'DELETE' });
      if (res.ok) fetchSettings();
    } catch (err) { console.error(err); }
  };

  const copyToClipboard = (key: string) => {
    const url = `${window.location.origin}/api/webhooks/${key}`;
    navigator.clipboard.writeText(url);
    setCopySuccess(key);
    setTimeout(() => setCopySuccess(null), 2000);
  };

  return (
    <DashboardLayout>
      <div className="space-y-12 text-white">
        <div className="flex justify-between items-center border-b border-white/5 pb-6">
          <div>
            <TypewriterTitle text="Configurações" className="text-2xl font-bold uppercase tracking-tight" />
            <p className="text-white/40 text-[10px] uppercase tracking-[0.2em] mt-1">Gestão de infraestrutura e conectores</p>
          </div>
        </div>

        {/* SEÇÃO SMTP */}
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <Mail className="text-neon-purple" size={20} />
              <h2 className="text-sm font-bold uppercase tracking-widest">Contas de E-mail (SMTP)</h2>
            </div>
            <button onClick={openSmtpModal} className="flex items-center gap-2 px-4 py-1.5 bg-neon-purple/20 border border-neon-purple/30 rounded-sm text-[9px] font-bold uppercase hover:bg-neon-purple/30 transition-all text-neon-purple"><Plus size={14} /> Conectar E-mail</button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {smtpAccounts.map((item) => (
              <div key={item.id} className="glass border border-white/10 rounded-sm p-6 space-y-4">
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-white/5 rounded-sm text-neon-purple"><Server size={18} /></div>
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-widest">{item.name}</h3>
                      <span className="text-[8px] text-white/40 uppercase font-mono">{item.user}</span>
                    </div>
                  </div>
                  <button onClick={() => handleDeleteSmtp(item.id)} className="text-white/10 hover:text-red-500 transition-colors"><Trash2 size={14} /></button>
                </div>
                <div className="text-[9px] text-white/20 font-mono">HOST: {item.host}</div>
              </div>
            ))}
            {smtpAccounts.length === 0 && !loading && (
              <div className="col-span-full py-10 border border-dashed border-white/5 rounded-sm text-center">
                <p className="text-[9px] text-white/20 uppercase font-bold">Nenhuma conta SMTP configurada</p>
              </div>
            )}
          </div>
        </div>

        {/* SEÇÃO WEBHOOKS */}
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <Globe className="text-neon-blue" size={20} />
              <h2 className="text-sm font-bold uppercase tracking-widest">Webhooks de Entrada</h2>
            </div>
            <button onClick={openAddModal} className="flex items-center gap-2 px-4 py-1.5 bg-neon-blue/20 border border-neon-blue/30 rounded-sm text-[9px] font-bold uppercase hover:bg-neon-blue/30 transition-all text-neon-blue"><Plus size={14} /> Novo Conector</button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {integrations.map((item) => (
                <motion.div key={item.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="glass border border-white/10 rounded-sm p-6 space-y-4 hover:border-neon-blue/30 transition-all relative group">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-white/5 rounded-sm text-neon-blue"><Globe size={20} /></div>
                      <div>
                        <h3 className="text-xs font-bold uppercase tracking-widest">{item.name}</h3>
                        <span className="text-[8px] text-white/40 uppercase font-mono">{item.platform}</span>
                      </div>
                    </div>
                    <button onClick={() => handleDeleteIntegration(item.id)} className="text-white/10 hover:text-red-500 transition-colors"><Trash2 size={14} /></button>
                  </div>
                  
                  <div className="space-y-2 pt-2">
                    <label className="text-[9px] uppercase text-white/30 font-bold block ml-1">Webhook URL</label>
                    <div className="flex items-center gap-2 bg-black/40 border border-white/5 rounded-sm p-2">
                      <input readOnly value={`${window.location.origin}/api/webhooks/${item.webhookKey}`} className="flex-1 bg-transparent text-[9px] font-mono text-white/60 outline-none" />
                      <button onClick={() => copyToClipboard(item.webhookKey)} className={`p-1 transition-colors ${copySuccess === item.webhookKey ? 'text-neon-green' : 'text-white/20 hover:text-white'}`}>{copySuccess === item.webhookKey ? <CheckCircle2 size={14} /> : <Copy size={14} />}</button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        <AnimatePresence>
          {/* MODAL ADICIONAR CONTA SMTP */}
          {showSmtpModal && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 text-white">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setShowSmtpModal(false)} className="absolute inset-0 bg-background/80 backdrop-blur-md" />
              <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="glass w-full max-w-lg rounded-sm p-8 z-10 border-neon-purple/30 relative">
                <button onClick={() => setShowSmtpModal(false)} className="absolute top-4 right-4 text-white/20 hover:text-white transition-colors"><X size={20} /></button>
                <h2 className="text-lg font-bold uppercase tracking-widest mb-8 flex items-center gap-3"><Mail className="text-neon-purple" /> Configurar_SMTP</h2>
                <form onSubmit={handleAddSmtp} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1"><label className="text-[9px] uppercase text-white/40 font-bold block ml-1">Nome da Conta</label><input required value={newSmtp.name} onChange={e => setNewSmtp({...newSmtp, name: e.target.value})} placeholder="PROJETO ALPHA..." className="w-full bg-white/5 border border-white/10 rounded-sm py-2 px-4 text-xs text-white outline-none focus:border-neon-purple/50 uppercase" /></div>
                    <div className="space-y-1"><label className="text-[9px] uppercase text-white/40 font-bold block ml-1">Host SMTP</label><input required value={newSmtp.host} onChange={e => setNewSmtp({...newSmtp, host: e.target.value})} placeholder="smtp.gmail.com" className="w-full bg-white/5 border border-white/10 rounded-sm py-2 px-4 text-xs text-white outline-none focus:border-neon-purple/50" /></div>
                    <div className="space-y-1"><label className="text-[9px] uppercase text-white/40 font-bold block ml-1">Porta</label><input required type="number" value={newSmtp.port} onChange={e => setNewSmtp({...newSmtp, port: parseInt(e.target.value)})} className="w-full bg-white/5 border border-white/10 rounded-sm py-2 px-4 text-xs text-white outline-none focus:border-neon-purple/50" /></div>
                    <div className="space-y-1"><label className="text-[9px] uppercase text-white/40 font-bold block ml-1">Usuário / E-mail</label><input required value={newSmtp.user} onChange={e => setNewSmtp({...newSmtp, user: e.target.value})} placeholder="login@google.com" className="w-full bg-white/5 border border-white/10 rounded-sm py-2 px-4 text-xs text-white outline-none focus:border-neon-purple/50" /></div>
                    <div className="space-y-1 col-span-2"><label className="text-[9px] uppercase text-white/40 font-bold block ml-1">Senha / App Password</label><input required type="password" value={newSmtp.pass} onChange={e => setNewSmtp({...newSmtp, pass: e.target.value})} placeholder="••••••••••••" className="w-full bg-white/5 border border-white/10 rounded-sm py-2 px-4 text-xs text-white outline-none focus:border-neon-purple/50" /></div>
                  </div>
                  <button type="submit" className="w-full py-3 bg-neon-purple rounded-sm text-[10px] font-bold uppercase tracking-widest mt-4 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] transition-all">Vincular Conta SMTP</button>
                </form>
              </motion.div>
            </div>
          )}

          {/* MODAL ADICIONAR WEBHOOK */}
          {showAddModal && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 text-white">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setShowAddModal(false)} className="absolute inset-0 bg-background/80 backdrop-blur-md" />
              <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="glass w-full max-w-md rounded-sm p-8 z-10 border-neon-blue/30 relative">
                <button onClick={() => setShowAddModal(false)} className="absolute top-4 right-4 text-white/20 hover:text-white transition-colors"><X size={20} /></button>
                <h2 className="text-lg font-bold uppercase tracking-widest mb-8 flex items-center gap-3"><Zap className="text-neon-blue" /> Criar_Conector</h2>
                <form onSubmit={handleAdd} className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase text-white/40 block ml-1">Nome da Integração</label>
                    <input required value={newIntegration.name} onChange={e => setNewIntegration({...newIntegration, name: e.target.value})} placeholder="EX: VENDAS PRODUTO X..." className="w-full bg-white/5 border border-white/10 rounded-sm py-2.5 px-4 text-xs text-white outline-none focus:border-neon-blue/50 uppercase" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase text-white/40 block ml-1">Plataforma</label>
                    <select value={newIntegration.platform} onChange={e => setNewIntegration({...newIntegration, platform: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-sm py-2.5 px-4 text-xs text-white outline-none appearance-none">
                      <option value="KIWIFY" className="bg-background">KIWIFY</option>
                      <option value="HOTMART" className="bg-background">HOTMART</option>
                      <option value="SITE_WEBHOOK" className="bg-background">SITE / FORMULÁRIO PERSONALIZADO</option>
                    </select>
                  </div>
                  <button type="submit" className="w-full py-3 bg-neon-blue rounded-sm text-[10px] font-bold uppercase tracking-widest mt-4 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all">Ativar_Sincronização</button>
                </form>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </DashboardLayout>
  );
};

export default IntegrationsPage;
