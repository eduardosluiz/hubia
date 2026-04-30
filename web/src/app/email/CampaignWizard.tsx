'use client';

import React, { useState, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, Save, Mail, Layout, Type, Image as ImageIcon, 
  MousePointer2, Trash2, ChevronLeft,
  Smartphone, Monitor, Loader2,
  Globe, Wifi, Battery, Upload, FileText,
  AlignCenter, AlignLeft, AlignRight, Columns, Type as FontIcon,
  Bold, Terminal, Braces, Plus, Code2
} from 'lucide-react';

interface Block {
  id: string;
  type: 'HEADER' | 'TEXT' | 'BUTTON' | 'IMAGE' | 'FOOTER' | 'COLUMNS' | 'HTML';
  data: any;
  style?: any;
}

const CampaignWizard = ({ initialBlocks, isRawModeInitial, onBack, onSave }: any) => {
  const [name, setName] = useState('Campanha Elite');
  const [subject, setSubject] = useState('Assunto do E-mail');
  const [blocks, setBlocks] = useState<Block[]>(initialBlocks || []);
  const [selectedBlockId, setSelectedBlockId] = useState<string | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const [previewMode, setPreviewMode] = useState<'DESKTOP' | 'MOBILE'>('DESKTOP');
  const [isRawMode, setIsRawMode] = useState(isRawModeInitial);
  const [rawHtml, setRawHtml] = useState('<!DOCTYPE html><html><body><h1>HTML Customizado</h1></body></html>');
  
  const fileInputRef = useRef<HTMLInputElement>(null);
  const selectedBlock = useMemo(() => blocks.find(b => b.id === selectedBlockId), [blocks, selectedBlockId]);

  const updateBlockData = (id: string, newData: any) => {
    setBlocks(prev => prev.map(b => b.id === id ? { ...b, data: { ...b.data, ...newData } } : b));
  };

  const updateBlockStyle = (id: string, newStyle: any) => {
    setBlocks(prev => prev.map(b => b.id === id ? { ...b, style: { ...b.style, ...newStyle } } : b));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !selectedBlockId) return;

    console.log(`Iniciando upload: ${file.name} (${(file.size/1024).toFixed(2)}KB)`);
    
    if (file.size > 2 * 1024 * 1024) {
      alert("Imagem muito grande! Por favor, use imagens de até 2MB para evitar erros de salvamento.");
      if (fileInputRef.current) fileInputRef.current.value = '';
      return;
    }

    const targetBlockId = selectedBlockId;
    const reader = new FileReader();
    
    reader.onloadstart = () => console.log("Lendo arquivo...");
    
    reader.onload = (event) => {
      const result = event.target?.result as string;
      if (!result) {
        console.error("Falha ao gerar Base64 da imagem.");
        return;
      }

      console.log("Base64 gerado com sucesso. Atualizando blocos...");

      setBlocks(prev => {
        const index = prev.findIndex(b => b.id === targetBlockId);
        if (index === -1) {
          console.warn(`Bloco ${targetBlockId} não encontrado para atualização.`);
          return prev;
        }

        const newBlocks = [...prev];
        const block = { ...newBlocks[index] };
        const data = { ...block.data };

        if (block.type === 'COLUMNS') {
          const currentRight = data.right || {};
          data.right = { ...currentRight, url: result };
          console.log("Bloco COLUMNS atualizado.");
        } else {
          data.url = result;
          console.log("Bloco IMAGE atualizado.");
        }

        block.data = data;
        newBlocks[index] = block;
        return newBlocks;
      });
    };
    
    reader.onerror = (err) => {
      console.error("Erro no FileReader:", err);
      alert("Erro ao processar a imagem.");
    };
    
    reader.readAsDataURL(file);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const addBlock = (type: Block['type']) => {
    console.log(`Adicionando bloco: ${type}`);
    const newBlock: Block = {
      id: Math.random().toString(36).substr(2, 9),
      type,
      data: type === 'TEXT' ? { content: 'Clique para editar o texto...' } : 
            type === 'BUTTON' ? { label: 'BOTÃO DE AÇÃO', url: '#' } : 
            type === 'IMAGE' ? { url: 'https://placehold.co/600x300/0f172a/3b82f6?text=Upload+Necessário' } :
            type === 'COLUMNS' ? { left: { content: 'Edite este texto lateral.' }, right: { url: 'https://placehold.co/300x300/0f172a/3b82f6?text=Img' } } :
            type === 'HEADER' ? { title: 'TITULO_PROJETO', subtitle: 'SUB_INFO' } :
            type === 'HTML' ? { code: '<div style="background:#f1f5f9; padding:20px; text-align:center;">HTML Snip</div>' } :
            { content: '© 2026 HUBIA // TODOS OS DIREITOS RESERVADOS' },
      style: { fontSize: '14px', fontFamily: 'sans-serif', borderRadius: '4px', textAlign: 'left', color: '#334155' }
    };
    setBlocks(prev => [...prev, newBlock]);
    setSelectedBlockId(newBlock.id);
  };

  const generateHtml = () => {
    if (isRawMode) return rawHtml;
    let bodyHtml = blocks.map(block => {
      const s = block.style || {};
      const commonStyle = `color:${s.color}; font-size:${s.fontSize}; font-family:${s.fontFamily}; text-align:${s.textAlign}; padding:${s.padding || '10px 0'};`;
      switch (block.type) {
        case 'HEADER': return `<div style="${commonStyle} border-bottom:1px solid #e2e8f0; margin-bottom:20px;"><h1 style="margin:0; font-size:${s.fontSize || '28px'};">${block.data.title}</h1><p style="margin:5px 0; font-size:12px; color:#64748b;">${block.data.subtitle}</p></div>`;
        case 'TEXT': return `<p style="${commonStyle} line-height:1.6; margin-bottom:15px;">${block.data.content}</p>`;
        case 'BUTTON': return `<div style="text-align:${s.textAlign}; margin:25px 0;"><a href="${block.data.url}" style="background-color:${s.backgroundColor || '#8B5CF6'}; color:#ffffff; padding:14px 35px; text-decoration:none; border-radius:${s.borderRadius}; font-weight:bold; font-size:${s.fontSize}; display:inline-block; font-family:sans-serif;">${block.data.label}</a></div>`;
        case 'IMAGE': return `<div style="margin-bottom:20px; text-align:center;"><img src="${block.data.url}" style="width:100%; max-width:100%; border-radius:${s.borderRadius};"></div>`;
        case 'COLUMNS': return `<table width="100%" cellspacing="0" cellpadding="0" style="margin-bottom:20px;"><tr><td width="50%" style="padding-right:10px; color:${s.color}; line-height:1.6;">${block.data.left.content}</td><td width="50%" style="padding-left:10px;"><img src="${block.data.right?.url}" style="width:100%; border-radius:4px;"></td></tr></table>`;
        case 'FOOTER': return `<div style="margin-top:40px; padding-top:20px; border-top:1px solid #e2e8f0; text-align:center;"><p style="color:#94a3b8; font-size:11px; font-family:sans-serif;">${block.data.content}</p></div>`;
        case 'HTML': return block.data.code;
        default: return '';
      }
    }).join('');
    return `<!DOCTYPE html><html><body style="background-color:#f8fafc; padding:40px 20px; margin:0;"><div style="max-width:600px; margin:0 auto; background-color:#ffffff; border:1px solid #e2e8f0; padding:40px; border-radius:8px;">${bodyHtml}</div></body></html>`;
  };

  const handleSave = async () => {
    if (isSaving) return;
    setIsSaving(true);
    try {
      const htmlContent = generateHtml();
      
      // Validação de segurança para payloads gigantes (Next.js limita em ~4MB)
      const payloadSize = new Blob([htmlContent]).size;
      console.log(`Tamanho final do e-mail: ${(payloadSize / 1024 / 1024).toFixed(2)}MB`);
      
      if (payloadSize > 4 * 1024 * 1024) {
        throw new Error("O e-mail está pesado demais (acima de 4MB). Remova ou diminua o tamanho das imagens.");
      }

      const payload = { name, subject, content: htmlContent, status: 'DRAFT' };
      const res = await fetch('/api/email/campaigns', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      
      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.details || errorData.error || "Erro desconhecido no servidor");
      }
      
      onSave();
    } catch (err: any) { 
      console.error("Erro ao salvar:", err); 
      alert(err.message || "Falha ao salvar. Verifique se o e-mail não está pesado demais.");
    } finally { setIsSaving(false); }
  };

  const renderBlock = (block: Block) => {
    const s = block.style || {};
    const inlineStyle: any = { color: s.color, fontSize: s.fontSize, fontFamily: s.fontFamily, textAlign: s.textAlign, borderRadius: s.borderRadius, backgroundColor: s.backgroundColor };
    // Usamos uma key que muda se a URL mudar para forçar o React a re-renderizar a imagem
    const blockKey = `${block.id}-${block.data.url?.length || 0}`;
    
    return (
      <motion.div key={block.id} onClick={(e) => { e.stopPropagation(); setSelectedBlockId(block.id); }} className={`relative p-4 cursor-pointer border-2 border-transparent transition-all hover:bg-gray-100/50 mb-2 ${selectedBlockId === block.id ? 'border-blue-500 bg-blue-50/50 ring-4 ring-blue-500/10' : ''}`}>
        {block.type === 'HEADER' && <div style={{ textAlign: inlineStyle.textAlign }} className="border-b border-gray-200 pb-6 mb-6"><h1 style={{ color: inlineStyle.color, fontSize: inlineStyle.fontSize }}>{block.data.title}</h1><p className="text-[10px] text-gray-400 uppercase tracking-widest mt-1 font-sans">{block.data.subtitle}</p></div>}
        {block.type === 'TEXT' && <p style={inlineStyle} className="leading-relaxed whitespace-pre-wrap">{block.data.content}</p>}
        {block.type === 'BUTTON' && <div style={{ textAlign: inlineStyle.textAlign }} className="my-8"><div style={{ backgroundColor: inlineStyle.backgroundColor, borderRadius: inlineStyle.borderRadius, fontSize: inlineStyle.fontSize }} className="px-8 py-3 font-bold uppercase tracking-widest text-white shadow-md inline-block">{block.data.label}</div></div>}
        {block.type === 'IMAGE' && <div className="mb-6 overflow-hidden shadow-md" style={{ borderRadius: inlineStyle.borderRadius }}><img src={block.data.url} alt="asset" className="w-full h-auto" key={blockKey} /></div>}
        {block.type === 'COLUMNS' && <div className="grid grid-cols-2 gap-4 items-center mb-6"><div style={inlineStyle} className="leading-relaxed">{block.data.left?.content}</div><img src={block.data.right?.url} className="w-full rounded-sm shadow-sm" alt="asset" key={blockKey} /></div>}
        {block.type === 'HTML' && <div dangerouslySetInnerHTML={{ __html: block.data.code }} />}
        {block.type === 'FOOTER' && <div className="mt-12 pt-6 border-t border-gray-200 text-center opacity-60"><p className="text-[9px] uppercase tracking-tight text-gray-400 font-sans">{block.data.content}</p></div>}
      </motion.div>
    );
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="fixed inset-0 bg-[#020617] z-[200] flex flex-col overflow-hidden text-white font-sans" onClick={() => setSelectedBlockId(null)}>
      <header className="h-16 border-b border-white/5 bg-black/40 backdrop-blur-md px-6 flex items-center justify-between" onClick={e => e.stopPropagation()}>
        <div className="flex items-center gap-6">
          <button onClick={onBack} className="p-2 hover:bg-white/5 rounded-sm text-white/40 transition-all"><ChevronLeft size={20} /></button>
          <div className="space-y-1"><input value={name} onChange={e => setName(e.target.value)} className="bg-transparent border-none outline-none text-sm font-bold uppercase tracking-widest text-neon-blue w-80" /><p className="text-[10px] text-white/20 uppercase font-mono tracking-tighter">Premium_Designer // v2.8</p></div>
        </div>
        <div className="flex items-center gap-4">
          {!isRawMode && (<div className="flex bg-white/5 border border-white/10 rounded-sm p-1"><button onClick={() => setPreviewMode('DESKTOP')} className={`p-2 rounded-sm transition-all ${previewMode === 'DESKTOP' ? 'bg-white text-black shadow-lg' : 'text-white/20'}`}><Monitor size={16} /></button><button onClick={() => setPreviewMode('MOBILE')} className={`p-2 rounded-sm transition-all ${previewMode === 'MOBILE' ? 'bg-white text-black shadow-lg' : 'text-white/20'}`}><Smartphone size={16} /></button></div>)}
          <button onClick={handleSave} disabled={isSaving} className="flex items-center gap-2 px-6 py-2 bg-neon-blue rounded-sm text-[10px] font-bold uppercase tracking-widest shadow-lg hover:shadow-neon-blue/40 transition-all">{isSaving ? <Loader2 size={14} className="animate-spin" /> : <Save size={14} />} Salvar Modelo</button>
        </div>
      </header>

      <div className="flex-1 flex overflow-hidden">
        <aside className="w-64 border-r border-white/5 bg-black/20 p-6 space-y-8 overflow-y-auto custom-scrollbar" onClick={e => e.stopPropagation()}>
          {isRawMode ? (
            <div className="space-y-4"><h3 className="text-[10px] font-bold text-neon-green uppercase flex items-center gap-2"><Terminal size={14} /> Dev_Env</h3><p className="text-[9px] text-white/30 uppercase leading-relaxed">Cole seu HTML completo abaixo.</p></div>
          ) : (
            <div className="space-y-4">
              <h3 className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em]">Injetar_Módulo</h3>
              <div className="grid grid-cols-1 gap-2">
                {[
                  { type: 'HEADER', icon: Layout, label: 'Cabeçalho' },
                  { type: 'TEXT', icon: Type, label: 'Parágrafo' },
                  { type: 'BUTTON', icon: MousePointer2, label: 'Botão CTA' },
                  { type: 'IMAGE', icon: ImageIcon, label: 'Imagem Full' },
                  { type: 'COLUMNS', icon: Columns, label: 'Colunas (Img+Txt)' },
                  { type: 'HTML', icon: Code2, label: 'Snippet HTML' },
                  { type: 'FOOTER', icon: FileText, label: 'Rodapé' }
                ].map(item => (<button key={item.type} onClick={() => addBlock(item.type as any)} className="flex items-center gap-3 p-3 bg-white/[0.02] border border-white/5 rounded-sm hover:border-neon-blue/50 transition-all text-left group"><div className="p-2 bg-white/5 rounded-sm text-white/40 group-hover:text-neon-blue"><item.icon size={16} /></div><span className="text-[9px] font-bold uppercase text-white/60 group-hover:text-white">{item.label}</span></button>))}
              </div>
            </div>
          )}
        </aside>

        <main className="flex-1 bg-[#030712] overflow-hidden p-12 flex justify-center items-center relative">
          <AnimatePresence mode="wait">
            {isRawMode ? (
              <motion.div key="raw" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="w-full max-w-4xl h-[600px] rounded-lg overflow-hidden shadow-2xl border border-white/10 flex flex-col bg-[#1e1e1e]/90 backdrop-blur-xl">
                <div className="h-10 bg-[#323232] flex items-center px-4 gap-2"><div className="flex gap-1.5"><div className="w-3 h-3 rounded-full bg-[#ff5f56]" /><div className="w-3 h-3 rounded-full bg-[#ffbd2e]" /><div className="w-3 h-3 rounded-full bg-[#27c93f]" /></div><div className="flex-1 text-center"><span className="text-[10px] text-white/40 font-mono">Terminal_Nexus // index.html</span></div></div>
                <textarea value={rawHtml} onChange={e => setRawHtml(e.target.value)} className="flex-1 bg-transparent p-6 outline-none text-green-400 caret-white resize-none font-mono text-xs" spellCheck={false} />
              </motion.div>
            ) : (
              previewMode === 'DESKTOP' ? (
                <motion.div key="browser" initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} className="w-full max-w-[850px] h-full bg-white rounded-lg shadow-2xl flex flex-col overflow-hidden text-gray-800">
                  <div className="h-10 bg-gray-100 border-b border-gray-200 px-4 flex items-center gap-4 text-gray-400">
                    <div className="flex gap-1.5"><div className="w-2.5 h-2.5 rounded-full bg-red-400" /><div className="w-2.5 h-2.5 rounded-full bg-amber-400" /><div className="w-2.5 h-2.5 rounded-full bg-green-400" /></div>
                    <div className="flex-1 max-w-md bg-white border border-gray-300 rounded-sm px-3 py-1 text-[9px] font-sans flex items-center gap-2"><Globe size={10} /> De: Hubia Nexus &lt;mkt@hubia.com&gt;</div>
                  </div>
                  <div className="flex-1 overflow-y-auto p-12 custom-scrollbar bg-gray-50"><div className="max-w-[600px] mx-auto bg-white border border-gray-200 p-10 rounded-sm shadow-sm">{blocks.map(block => renderBlock(block))}</div></div>
                </motion.div>
              ) : (
                <motion.div key="phone" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="w-[320px] h-[600px] bg-white border-[8px] border-gray-800 rounded-[40px] shadow-2xl relative flex flex-col overflow-hidden text-gray-800"><div className="h-6 flex justify-between items-center px-8 pt-4"><span className="text-[10px] font-bold">09:41</span><div className="flex items-center gap-1.5"><Wifi size={12} /><Battery size={12} /></div></div><div className="flex-1 overflow-y-auto p-4 pt-10 custom-scrollbar scrollbar-hide"><div className="bg-white border border-gray-100 p-4 rounded-lg shadow-sm">{blocks.map(block => renderBlock(block))}</div></div><div className="h-1 bg-gray-300 w-24 mx-auto mb-2 rounded-full" /></motion.div>
              )
            )}
          </AnimatePresence>
        </main>

        <aside className="w-80 border-l border-white/5 bg-black/20 p-6 flex flex-col gap-8 overflow-y-auto custom-scrollbar" onClick={e => e.stopPropagation()}>
          <AnimatePresence>
            {selectedBlock ? (
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-8">
                <div className="flex justify-between items-center border-b border-white/5 pb-4"><h3 className="text-[10px] font-bold text-neon-blue uppercase tracking-[0.2em]">Ajustar_Bloco</h3><button onClick={() => setSelectedBlockId(null)}><X size={16} /></button></div>
                
                <div className="space-y-4">
                  <div className="grid grid-cols-3 gap-2">
                    {['left', 'center', 'right'].map(align => (<button key={align} onClick={() => updateBlockStyle(selectedBlockId!, { textAlign: align })} className={`p-2 rounded-sm flex justify-center transition-all ${selectedBlock.style?.textAlign === align ? 'bg-neon-blue text-white' : 'bg-white/5 text-white/40'}`}>{align === 'left' ? <AlignLeft size={14} /> : align === 'center' ? <AlignCenter size={14} /> : <AlignRight size={14} />}</button>))}
                  </div>
                  <div className="space-y-1"><label className="text-[9px] uppercase text-white/30 font-bold">Tamanho Fonte</label><select value={selectedBlock.style?.fontSize} onChange={e => updateBlockStyle(selectedBlockId!, { fontSize: e.target.value })} className="w-full bg-white/5 border border-white/10 rounded-sm p-2 text-xs text-white outline-none">{['10px', '12px', '14px', '16px', '18px', '24px', '32px'].map(s => <option key={s} value={s} className="bg-background">{s}</option>)}</select></div>
                </div>

                <div className="space-y-4 border-t border-white/5 pt-6">
                  {selectedBlock.type === 'TEXT' && <textarea value={selectedBlock.data.content} onChange={e => updateBlockData(selectedBlockId!, { content: e.target.value })} className="w-full bg-white/5 border border-white/10 rounded-sm p-3 text-xs text-white outline-none h-40 focus:border-neon-blue/50" />}
                  {selectedBlock.type === 'FOOTER' && <textarea value={selectedBlock.data.content} onChange={e => updateBlockData(selectedBlockId!, { content: e.target.value })} className="w-full bg-white/5 border border-white/10 rounded-sm p-3 text-xs text-white outline-none h-24 focus:border-neon-blue/50 font-sans" />}
                  {selectedBlock.type === 'HEADER' && (<div className="space-y-4"><div className="space-y-1"><label className="text-[9px] uppercase text-white/30 font-bold">Título Principal</label><input value={selectedBlock.data.title} onChange={e => updateBlockData(selectedBlockId!, { title: e.target.value })} className="w-full bg-white/5 border border-white/10 rounded-sm p-2 text-xs text-white outline-none" /></div><div className="space-y-1"><label className="text-[9px] uppercase text-white/30 font-bold">Subtítulo</label><input value={selectedBlock.data.subtitle} onChange={e => updateBlockData(selectedBlockId!, { subtitle: e.target.value })} className="w-full bg-white/5 border border-white/10 rounded-sm p-2 text-xs text-white outline-none" /></div></div>)}
                  {selectedBlock.type === 'BUTTON' && (<div className="space-y-4"><div className="space-y-1"><label className="text-[9px] uppercase text-white/30 font-bold">Texto</label><input value={selectedBlock.data.label} onChange={e => updateBlockData(selectedBlockId!, { label: e.target.value })} className="w-full bg-white/5 border border-white/10 rounded-sm p-2 text-xs text-white outline-none" /></div><div className="space-y-1"><label className="text-[9px] uppercase text-white/30 font-bold">Cor Fundo</label><input type="color" value={selectedBlock.style?.backgroundColor || '#8B5CF6'} onChange={e => updateBlockStyle(selectedBlockId!, { backgroundColor: e.target.value })} className="w-full h-10 bg-white/5 border border-white/10 rounded-sm p-1 cursor-pointer" /></div></div>)}
                  {selectedBlock.type === 'HTML' && <textarea value={selectedBlock.data.code} onChange={e => updateBlockData(selectedBlockId!, { code: e.target.value })} className="w-full bg-white/5 border border-white/10 rounded-sm p-3 text-[10px] text-green-400 font-mono h-40 outline-none" />}
                  {(selectedBlock.type === 'IMAGE' || selectedBlock.type === 'COLUMNS') && (<div className="space-y-4">{selectedBlock.type === 'COLUMNS' && <div className="space-y-1"><label className="text-[9px] uppercase text-white/30 font-bold">Texto Lateral</label><textarea value={selectedBlock.data.left.content} onChange={e => updateBlockData(selectedBlockId!, { left: { ...selectedBlock.data.left, content: e.target.value } })} className="w-full bg-white/5 border border-white/10 rounded-sm p-2 text-xs text-white outline-none h-24 focus:border-neon-blue/50" /></div>}<button onClick={() => fileInputRef.current?.click()} className="w-full py-4 border-2 border-dashed border-white/10 rounded-sm text-[10px] font-bold uppercase text-white/40 hover:border-neon-blue/50 hover:text-white transition-all flex flex-col items-center gap-2"><Upload size={16} /> Fazer Upload da Imagem</button></div>)}
                </div>
                <div className="pt-6 border-t border-white/5"><button onClick={() => { setBlocks(prev => prev.filter(b => b.id !== selectedBlockId)); setSelectedBlockId(null); }} className="w-full py-2.5 text-red-500/50 hover:text-red-500 text-[10px] font-bold uppercase border border-red-500/10 rounded-sm transition-all flex justify-center items-center gap-2"><Trash2 size={14} /> Remover Bloco</button></div>
              </motion.div>
            ) : (<div className="h-full flex flex-col justify-center items-center text-center space-y-4 opacity-20"><MousePointer2 size={48} /><p className="text-[10px] font-bold uppercase tracking-widest px-10">Selecione um bloco no visualizador para configurar</p></div>)}
          </AnimatePresence>
        </aside>
      </div>
      <input type="file" ref={fileInputRef} onChange={handleImageUpload} className="hidden" accept="image/*" />
    </motion.div>
  );
};

export default CampaignWizard;
