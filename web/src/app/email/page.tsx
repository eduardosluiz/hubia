'use client';

import React, { useState, useEffect } from 'react';
import DashboardLayout from '../../components/DashboardLayout';
import TypewriterTitle from '../../components/TypewriterTitle';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, MoreHorizontal, Loader2, Sparkles, Plus, Code2
} from 'lucide-react';
import CampaignWizard from './CampaignWizard';

interface Campaign {
  id: string;
  name: string;
  subject: string;
  status: 'DRAFT' | 'SENT' | 'SCHEDULED';
  sentCount: number;
  openRate: number;
  clickRate: number;
  updatedAt: string;
}

const TEMPLATE_PREVIEWS = {
  PRODUCT_LAUNCH: {
    name: 'Lançamento',
    thumb: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=400',
    blocks: [
      { id: 'p1', type: 'IMAGE', data: { url: 'https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=1000' }, style: { borderRadius: '8px' } },
      { id: 'p2', type: 'HEADER', data: { title: 'NOVA TECNOLOGIA', subtitle: 'DISPONÍVEL_AGORA' }, style: { color: '#0F172A', textAlign: 'center', fontSize: '32px', fontFamily: 'sans-serif', fontWeight: 'bold' } },
      { id: 'p3', type: 'TEXT', data: { content: 'O futuro chegou. Conheça as novas funções de inteligência cognitiva do Hubia.' }, style: { fontSize: '16px', color: '#475569', textAlign: 'center' } },
      { id: 'p4', type: 'BUTTON', data: { label: 'VER DETALHES', url: '#' }, style: { backgroundColor: '#3B82F6', borderRadius: '4px', textAlign: 'center', fontSize: '14px' } },
      { id: 'p5', type: 'FOOTER', data: { content: '© 2026 HUBIA // TODOS OS DIREITOS RESERVADOS' } }
    ]
  },
  NEWSLETTER: {
    name: 'Newsletter Semanal',
    thumb: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=400',
    blocks: [
      { id: 'n1', type: 'HEADER', data: { title: 'INSIGHTS_NEXUS', subtitle: 'RESUMO_DA_SEMANA' }, style: { color: '#8B5CF6', textAlign: 'left', fontSize: '24px', fontFamily: 'monospace', fontWeight: 'bold' } },
      { id: 'n2', type: 'COLUMNS', data: { left: { content: 'O mercado de IA cresceu 40%. Veja como aplicar no seu negócio.' }, right: { url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=500' } }, style: { fontSize: '14px', color: '#334155' } },
      { id: 'n3', type: 'BUTTON', data: { label: 'LER MATÉRIA COMPLETA', url: '#' }, style: { backgroundColor: '#8B5CF6', borderRadius: '99px', textAlign: 'left', fontSize: '12px' } },
      { id: 'n4', type: 'FOOTER', data: { content: 'Você está recebendo este e-mail por ser um parceiro.' } }
    ]
  },
  ALERT: {
    name: 'Aviso de Segurança',
    thumb: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=400',
    blocks: [
      { id: 'a1', type: 'HEADER', data: { title: 'ALERTA_CRÍTICO', subtitle: 'AÇÃO_NECESSÁRIA' }, style: { color: '#EF4444', textAlign: 'center', fontSize: '24px', fontFamily: 'monospace', fontWeight: 'bold' } },
      { id: 'a2', type: 'TEXT', data: { content: 'Sua chave de API expirou. Por favor, gere uma nova para manter as automações ativas.' }, style: { fontSize: '14px', color: '#334155', textAlign: 'center' } },
      { id: 'a3', type: 'BUTTON', data: { label: 'GERAR NOVA CHAVE', url: '#' }, style: { backgroundColor: '#EF4444', borderRadius: '4px', textAlign: 'center', fontSize: '14px' } },
      { id: 'a4', type: 'FOOTER', data: { content: 'HUBIA_SYSTEM_BOT // 2026' } }
    ]
  }
};

const EmailPage = () => {
  const [showWizard, setShowWizard] = useState(false);
  const [initialBlocks, setInitialBlocks] = useState<any[] | null>(null);
  const [isRawMode, setIsRawMode] = useState(false);
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchCampaigns = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/email/campaigns');
      const data = await res.json();
      setCampaigns(Array.isArray(data) ? data : []);
    } catch (err) { console.error(err); } finally { setLoading(false); }
  };

  useEffect(() => { fetchCampaigns(); }, []);

  const openEditor = (templateKey: keyof typeof TEMPLATE_PREVIEWS | null, raw: boolean = false) => {
    setInitialBlocks(templateKey ? TEMPLATE_PREVIEWS[templateKey].blocks : null);
    setIsRawMode(raw);
    setShowWizard(true);
  };

  if (showWizard) {
    return (
      <CampaignWizard 
        initialBlocks={initialBlocks} 
        isRawModeInitial={isRawMode}
        onBack={() => setShowWizard(false)} 
        onSave={() => { setShowWizard(false); fetchCampaigns(); }} 
      />
    );
  }

  return (
    <DashboardLayout>
      <div className="space-y-10 text-white">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <TypewriterTitle text="E-mail Marketing" className="text-2xl font-bold uppercase tracking-tight" />
            <p className="text-white/40 text-xs uppercase tracking-widest mt-1">Galeria de modelos e gestão de envios</p>
          </div>
        </div>

        {/* GALERIA DE TEMPLATES VISUAIS */}
        <div className="space-y-4">
          <h3 className="text-[10px] font-bold text-neon-blue uppercase tracking-[0.3em] flex items-center gap-2">
            <Sparkles size={14} /> Selecione um Design
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            
            {/* Opção: Em Branco */}
            <motion.div whileHover={{ translateY: -5 }} onClick={() => openEditor(null)} className="h-64 glass border border-white/10 rounded-sm cursor-pointer group hover:border-white/30 transition-all flex flex-col relative overflow-hidden">
              <div className="flex-1 flex flex-col items-center justify-center bg-black/40 text-white/20 group-hover:text-white transition-all">
                <Plus size={32} className="mb-2" />
                <span className="text-[10px] font-bold uppercase tracking-widest">Em Branco</span>
              </div>
              <div className="h-12 border-t border-white/5 bg-white/[0.02] flex items-center justify-center text-[9px] uppercase text-white/40 font-bold group-hover:bg-white/5 transition-all">Começar do Zero</div>
            </motion.div>

            {/* Templates Visuais */}
            {(Object.keys(TEMPLATE_PREVIEWS) as Array<keyof typeof TEMPLATE_PREVIEWS>).map(key => (
              <motion.div key={key} whileHover={{ translateY: -5 }} onClick={() => openEditor(key)} className="h-64 glass border border-white/10 rounded-sm cursor-pointer group hover:shadow-[0_10px_30px_rgba(59,130,246,0.2)] hover:border-neon-blue/50 transition-all flex flex-col relative overflow-hidden">
                <div className="flex-1 bg-cover bg-center relative" style={{ backgroundImage: `url(${TEMPLATE_PREVIEWS[key].thumb})` }}>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-neon-blue/20 backdrop-blur-sm transition-all">
                    <span className="px-4 py-2 bg-neon-blue text-white text-[10px] font-bold uppercase rounded-sm shadow-xl">Usar Layout</span>
                  </div>
                </div>
                <div className="h-12 border-t border-white/5 bg-black flex items-center justify-center text-[10px] uppercase text-white/80 font-bold tracking-widest z-10">{TEMPLATE_PREVIEWS[key].name}</div>
              </motion.div>
            ))}

            {/* Opção: HTML */}
            <motion.div whileHover={{ translateY: -5 }} onClick={() => openEditor(null, true)} className="h-64 glass border border-white/10 rounded-sm cursor-pointer group hover:border-neon-green/50 transition-all flex flex-col relative overflow-hidden">
              <div className="flex-1 flex flex-col items-center justify-center bg-black/40 text-white/20 group-hover:text-neon-green transition-all">
                <Code2 size={32} className="mb-2" />
                <span className="text-[10px] font-bold uppercase tracking-widest">Dev Mode</span>
              </div>
              <div className="h-12 border-t border-white/5 bg-white/[0.02] flex items-center justify-center text-[9px] uppercase text-white/40 font-bold group-hover:bg-white/5 transition-all">HTML Customizado</div>
            </motion.div>

          </div>
        </div>

        {/* LISTAGEM DE CAMPANHAS */}
        <div className="glass border border-white/10 rounded-sm overflow-hidden mt-12">
          <div className="p-4 border-b border-white/5 bg-white/[0.02] flex items-center justify-between">
            <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">Histórico de Disparos</h3>
            <div className="relative group"><Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-neon-blue" size={14} /><input placeholder="BUSCAR CAMPANHA..." className="bg-background/50 border border-white/10 rounded-sm py-1.5 pl-9 pr-4 text-[10px] text-white outline-none focus:border-neon-blue/50 w-64 transition-all uppercase font-mono" /></div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/5 bg-white/[0.01]">
                  <th className="p-4 text-[9px] font-bold uppercase text-white/30 tracking-widest">Campanha</th>
                  <th className="p-4 text-[9px] font-bold uppercase text-white/30 tracking-widest">Status</th>
                  <th className="p-4 text-[9px] font-bold uppercase text-white/30 tracking-widest">Volume</th>
                  <th className="p-4 text-[9px] font-bold uppercase text-white/30 tracking-widest text-right">Ações</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr><td colSpan={4} className="p-20 text-center"><Loader2 className="animate-spin mx-auto text-neon-blue" /></td></tr>
                ) : campaigns.map((campaign) => (
                  <tr key={campaign.id} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors group">
                    <td className="p-4">
                      <div><div className="text-[10px] font-bold uppercase text-white/90">{campaign.name}</div><div className="text-[8px] text-white/20 font-mono tracking-tighter truncate max-w-[200px]">{campaign.subject}</div></div>
                    </td>
                    <td className="p-4">
                      <span className={`text-[8px] font-bold px-2 py-0.5 rounded-sm uppercase border ${
                        campaign.status === 'SENT' ? 'bg-neon-green/10 border-neon-green/20 text-neon-green' : 
                        'bg-white/5 border-white/10 text-white/40'
                      }`}>
                        {campaign.status}
                      </span>
                    </td>
                    <td className="p-4 text-[10px] font-mono text-white/60">{campaign.sentCount.toLocaleString()} leads</td>
                    <td className="p-4 text-right"><button className="p-2 text-white/20 hover:text-white transition-colors"><MoreHorizontal size={16} /></button></td>
                  </tr>
                ))}
                {!loading && campaigns.length === 0 && (
                  <tr><td colSpan={4} className="p-20 text-center text-[10px] text-white/20 uppercase font-bold tracking-widest">Nenhuma campanha registrada</td></tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default EmailPage;
