'use client';

import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, Save, Plus, MessageSquare, Mail, Clock, GitBranch, 
  MousePointer2, Trash2, Maximize2, Users, Tag as TagIcon, Zap,
  Settings2, Code2, Type, Image as ImageIcon, Video, Mic, Upload, CheckCircle2,
  Server, FileText, Timer, AlertCircle, Globe, ArrowUpRight, Filter, Loader2,
  Layers, ChevronRight, Target
} from 'lucide-react';

interface Node {
  id: string;
  type: 'TRIGGER' | 'WHATSAPP' | 'EMAIL' | 'DELAY' | 'CONDITION' | 'AUDIENCE' | 'TAG' | 'WEBHOOK_OUT' | 'ADD_TAG' | 'ROUTING';
  title: string;
  content: string;
  x: number;
  y: number;
  config: any;
}

interface Connection {
  fromId: string;
  toId: string;
  branch?: 'true' | 'false';
}

const FlowEditor = ({ onBack, onSave }: { onBack: () => void, onSave: (flow: any) => void }) => {
  const [nodes, setNodes] = useState<Node[]>([]);
  const [connections, setConnections] = useState<Connection[]>([]);
  const [availableTags, setAvailableTags] = useState<any[]>([]);
  const [availableAudiences, setAvailableAudiences] = useState<any[]>([]);
  const [smtpAccounts, setSmtpAccounts] = useState<any[]>([]);
  const [campaigns, setCampaigns] = useState<any[]>([]);
  const [queues, setQueues] = useState<any[]>([]);
  
  const [selectedNode, setSelectedNode] = useState<Node | null>(null);
  const [connectingFrom, setConnectingFrom] = useState<{id: string, branch?: 'true' | 'false'} | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [showSaveModal, setShowSaveModal] = useState(false);
  const [flowName, setFlowName] = useState('Estratégia Nexus');
  const [isSaving, setIsSaving] = useState(false);
  const [newTagName, setNewTagName] = useState('');

  const isPanning = useRef(false);
  const isDraggingNode = useRef(false);
  const pathRefs = useRef<{ [key: string]: SVGPathElement | null }>({});

  const fetchData = async () => {
    try {
      const [tagsRes, smtpRes, audRes, campRes, qRes] = await Promise.all([
        fetch('/api/crm/tags'),
        fetch('/api/settings/smtp'),
        fetch('/api/crm/audiences'),
        fetch('/api/email/campaigns'),
        fetch('/api/whatsapp/queues')
      ]);
      
      const tData = await tagsRes.json();
      const sData = await smtpRes.json();
      const aData = await audRes.json();
      const cData = await campRes.json();
      const qData = await qRes.json();

      setAvailableTags(Array.isArray(tData) ? tData : []);
      setSmtpAccounts(Array.isArray(sData) ? sData : []);
      setAvailableAudiences(Array.isArray(aData) ? aData : []);
      setCampaigns(Array.isArray(cData) ? cData : []);
      setQueues(Array.isArray(qData) ? qData : []);
    } catch (err) { console.error("Erro ao carregar dados do editor:", err); }
  };

  useEffect(() => { fetchData(); }, []);

  const handleCreateQuickTag = async () => {
    if (!newTagName) return;
    try {
      const res = await fetch('/api/crm/tags', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: newTagName, color: '#8B5CF6' })
      });
      if (res.ok) {
        await fetchData();
        setNewTagName('');
      }
    } catch (err) { console.error(err); }
  };

  const triggers = [
    {type:'TRIGGER', icon:Zap, label:'Webhook', color:'text-neon-purple'},
    {type:'AUDIENCE', icon:Users, label:'Público', color:'text-neon-purple'},
    {type:'TAG', icon:TagIcon, label:'Tag', color:'text-neon-purple'}
  ];

  const actions = [
    {type:'WHATSAPP', icon:MessageSquare, label:'WhatsApp', color:'text-neon-green'},
    {type:'EMAIL', icon:Mail, label:'E-mail', color:'text-neon-blue'},
    {type:'DELAY', icon:Timer, label:'Delay', color:'text-orange-400'},
    {type:'CONDITION', icon:GitBranch, label:'Condição', color:'text-pink-500'},
    {type:'ROUTING', icon:Server, label:'Fila/Hub', color:'text-neon-purple'},
    {type:'ADD_TAG', icon:TagIcon, label:'Add Tag', color:'text-yellow-400'},
    {type:'WEBHOOK_OUT', icon:Globe, label:'Webhook Out', color:'text-neon-blue'}
  ];

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (connectingFrom) setMousePos({ x: e.clientX, y: e.clientY });
    if (isPanning.current) setPan(prev => ({ x: prev.x + e.movementX, y: prev.y + e.movementY }));
  }, [connectingFrom]);

  useEffect(() => {
    const onUp = () => { isPanning.current = false; };
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', onUp);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', onUp);
    };
  }, [handleMouseMove]);

  const updateLinesInDOM = (nodeId: string, currentX: number, currentY: number) => {
    connections.forEach((conn) => {
      if (conn.fromId === nodeId || conn.toId === nodeId) {
        const key = `${conn.fromId}-${conn.toId}-${conn.branch || 'true'}`;
        const path = pathRefs.current[key];
        if (path) {
          const from = nodes.find(n => n.id === conn.fromId);
          const to = nodes.find(n => n.id === conn.toId);
          const fromNode = from?.id === nodeId ? { x: currentX, y: currentY, type: from?.type } : from;
          const toNode = to?.id === nodeId ? { x: currentX, y: currentY, type: to?.type } : to;
          if (fromNode && toNode) {
            const x1 = fromNode.x + (fromNode.type === 'DELAY' ? 64 : 192);
            const y1 = fromNode.y + (fromNode.type === 'DELAY' ? 32 : (conn.branch === 'false' ? 48 : 32));
            const x2 = toNode.x; 
            const y2 = toNode.y + 32;
            path.setAttribute('d', `M ${x1} ${y1} C ${x1 + 50} ${y1}, ${x2 - 50} ${y2}, ${x2} ${y2}`);
          }
        }
      }
    });
  };

  const handleDrag = (id: string, info: any) => {
    const node = nodes.find(n => n.id === id);
    if (node) {
      const newX = node.x + info.offset.x / zoom;
      const newY = node.y + info.offset.y / zoom;
      updateLinesInDOM(id, newX, newY);
    }
  };

  const handleDragEnd = (id: string, info: any) => {
    setNodes(prev => prev.map(n => 
      n.id === id ? { ...n, x: n.x + info.offset.x / zoom, y: n.y + info.offset.y / zoom } : n
    ));
    setTimeout(() => { isDraggingNode.current = false; }, 50);
  };

  const addNode = (type: any, label: string) => {
    const newNode: Node = {
      id: Math.random().toString(36).substr(2, 9),
      type, title: label, content: '', x: (window.innerWidth / 2 - 250 - pan.x) / zoom, y: (window.innerHeight / 2 - 100 - pan.y) / zoom, 
      config: { delayValue: '30', delayUnit: 's', instance: '', campaignId: '', smtpId: '', audienceId: '', tagId: '', queueId: '', requiredTags: [] }
    };
    setNodes([...nodes, newNode]);
  };

  const handleConnect = (e: React.MouseEvent | React.PointerEvent, nodeId: string, isInput: boolean, branch?: 'true' | 'false') => {
    e.stopPropagation();
    if (!isInput) {
      setConnectingFrom({id: nodeId, branch});
    } else if (connectingFrom && connectingFrom.id !== nodeId) {
      const branchKey = connectingFrom.branch || 'true';
      const exists = connections.find(c => c.fromId === connectingFrom.id && c.toId === nodeId && (c.branch || 'true') === branchKey);
      if (!exists) setConnections([...connections, { fromId: connectingFrom.id, toId: nodeId, branch: connectingFrom.branch }]);
      setConnectingFrom(null);
    }
  };

  const renderConnections = useMemo(() => {
    return connections.map((conn) => {
      const from = nodes.find(n => n.id === conn.fromId);
      const to = nodes.find(n => n.id === conn.toId);
      if (!from || !to) return null;
      const x1 = from.x + (from.type === 'DELAY' ? 64 : 192);
      const y1 = from.y + (from.type === 'DELAY' ? 32 : (conn.branch === 'false' ? 48 : 32));
      const x2 = to.x; 
      const y2 = to.y + 32;
      const key = `${conn.fromId}-${conn.toId}-${conn.branch || 'true'}`;
      return <path key={key} ref={el => { pathRefs.current[key] = el; }} d={`M ${x1} ${y1} C ${x1 + 50} ${y1}, ${x2 - 50} ${y2}, ${x2} ${y2}`} stroke={conn.branch === 'false' ? '#ef4444' : '#3B82F6'} strokeWidth="2" fill="none" className="opacity-60 shadow-[0_0_10px_current]" />;
    });
  }, [nodes, connections]);

  const handleSaveFlow = async () => {
    setIsSaving(true);
    try {
      const res = await fetch('/api/automation/workflows', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: flowName, nodes, connections })
      });
      if (res.ok) { onSave({ name: flowName }); setShowSaveModal(false); }
    } catch (err) { console.error(err); } finally { setIsSaving(false); }
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="fixed inset-0 bg-[#030712] z-[200] flex flex-col overflow-hidden select-none text-white" onPointerDown={() => setConnectingFrom(null)}>
      <header className="h-14 border-b border-white/5 bg-card/50 backdrop-blur-md px-6 flex items-center justify-between">
        <div className="flex items-center gap-4"><button onClick={onBack} className="p-2 hover:bg-white/5 rounded-sm text-white/40"><X size={18} /></button><h2 className="text-[10px] font-bold uppercase tracking-widest text-white/90 font-mono text-neon-blue">Nexus_Engine // v3.2_Orchestrator</h2></div>
        <div className="flex items-center gap-3">
           <div className="flex bg-white/5 border border-white/10 rounded-sm p-1 gap-1 mr-4"><button onClick={() => setZoom(prev => Math.min(1.5, prev + 0.1))} className="p-1 hover:bg-white/5 rounded-sm text-white/40 text-[10px] font-bold px-2">+</button><div className="text-[10px] font-mono text-white/20 flex items-center px-1">{Math.round(zoom * 100)}%</div><button onClick={() => setZoom(prev => Math.max(0.5, prev - 0.1))} className="p-1 hover:bg-white/5 rounded-sm text-white/40 text-[10px] font-bold px-2">-</button></div>
           <button onClick={() => setShowSaveModal(true)} className="flex items-center gap-2 px-6 py-1.5 bg-neon-purple rounded-sm text-[10px] font-bold uppercase shadow-lg"><Save size={14} /> Salvar</button>
        </div>
      </header>

      <div className="flex-1 flex relative">
        <aside className="w-56 border-r border-white/5 bg-[#050914] p-4 flex flex-col gap-6 overflow-y-auto custom-scrollbar">
          <div><h3 className="text-[9px] font-bold text-white/20 uppercase tracking-[0.2em] mb-3">1. Gatilhos</h3><div className="space-y-2">{triggers.map((block) => (<button key={block.type} onClick={(e) => { e.stopPropagation(); addNode(block.type, block.label); }} className="w-full flex items-center gap-3 p-3 bg-white/[0.02] border border-white/5 rounded-sm hover:border-white/20 transition-all text-left uppercase text-[10px] font-bold text-white/60"><block.icon size={14} className={block.color} /><span className="ml-2">{block.label}</span></button>))}</div></div>
          <div><h3 className="text-[9px] font-bold text-white/20 uppercase tracking-[0.2em] mb-3">2. Ações</h3><div className="space-y-2">{actions.map((block) => (<button key={block.type} onClick={(e) => { e.stopPropagation(); addNode(block.type, block.label); }} className="w-full flex items-center gap-3 p-3 bg-white/[0.02] border border-white/5 rounded-sm hover:border-white/20 transition-all text-left uppercase text-[10px] font-bold text-white/60"><block.icon size={14} className={block.color} /><span className="ml-2">{block.label}</span></button>))}</div></div>
        </aside>

        <main className={`flex-1 relative overflow-hidden bg-[#030712] cursor-${isPanning.current ? 'grabbing' : 'crosshair'}`} onMouseDown={(e) => { if (e.button === 0 && e.target === e.currentTarget) isPanning.current = true; }}>
          <div style={{ transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`, transformOrigin: 'center' }} className="w-full h-full relative">
            <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible" style={{ zIndex: 10 }}>
              {renderConnections}
              {connectingFrom && (<path d={`M ${nodes.find(n => n.id === connectingFrom.id)!.x + (nodes.find(n => n.id === connectingFrom.id)!.type === 'DELAY' ? 64 : 192)} ${nodes.find(n => n.id === connectingFrom.id)!.y + (nodes.find(n => n.id === connectingFrom.id)!.type === 'DELAY' ? 32 : (connectingFrom.branch === 'false' ? 48 : 32))} L ${(mousePos.x - 224 - pan.x)/zoom} ${(mousePos.y - 56 - pan.y)/zoom}`} stroke={connectingFrom.branch === 'false' ? '#ef4444' : '#3B82F6'} strokeWidth="2" strokeDasharray="4 4" fill="none" />)}
            </svg>

            {nodes.map((node) => {
              if (node.type === 'DELAY') {
                return (
                  <motion.div key={node.id} drag dragMomentum={false} onDragStart={() => { isDraggingNode.current = true; setSelectedNode(node); }} onDrag={(e, i) => handleDrag(node.id, i)} onDragEnd={(e, i) => handleDragEnd(node.id, i)} onPointerDown={(e) => { e.stopPropagation(); setSelectedNode(node); }} className={`absolute w-16 h-16 rounded-full glass border flex items-center justify-center cursor-grab active:cursor-grabbing z-20 ${selectedNode?.id === node.id ? 'border-orange-400 shadow-[0_0_15px_rgba(251,146,60,0.3)]' : 'border-white/10'}`} style={{ x: node.x, y: node.y, left: 0, top: 0 }}>
                    <Timer size={24} className="text-orange-400" />
                    <div className="absolute -bottom-6 text-[8px] font-bold uppercase text-white/40 tracking-widest">{node.config?.delayValue}{node.config?.delayUnit}</div>
                    <div onPointerDown={(e) => handleConnect(e, node.id, false)} className="absolute -right-1.5 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-orange-400 border-2 border-[#030712] cursor-crosshair hover:scale-125 transition-transform z-30" />
                    <div onPointerDown={(e) => handleConnect(e, node.id, true)} className="absolute -left-1.5 top-1/2 -translate-y-1/2 w-4 h-4 bg-white/20 rounded-full border-2 border-[#030712] cursor-crosshair hover:bg-white/40 z-30" />
                  </motion.div>
                );
              }
              const isTrigger = ['TRIGGER', 'AUDIENCE', 'TAG'].includes(node.type);
              return (
                <motion.div key={node.id} drag dragMomentum={false} onDragStart={() => { isDraggingNode.current = true; setSelectedNode(node); }} onDrag={(e, i) => handleDrag(node.id, i)} onDragEnd={(e, i) => handleDragEnd(node.id, i)} onPointerDown={(e) => { e.stopPropagation(); setSelectedNode(node); }} className={`absolute w-48 glass border rounded-sm p-4 cursor-grab active:cursor-grabbing z-20 ${selectedNode?.id === node.id ? 'border-neon-blue shadow-[0_0_15px_rgba(59,130,246,0.2)]' : isTrigger ? 'border-neon-purple/40 shadow-[0_0_10px_rgba(139,92,246,0.1)]' : 'border-white/10'}`} style={{ x: node.x, y: node.y, left: 0, top: 0 }}>
                  <div className="flex flex-col items-center justify-center gap-1 pointer-events-none text-center">
                     <div className="flex items-center gap-2">
                       <div className={`shrink-0 ${isTrigger ? 'text-neon-purple' : node.type === 'CONDITION' ? 'text-pink-500' : 'text-neon-green'}`}>{node.type === 'WHATSAPP' ? <MessageSquare size={12} /> : node.type === 'CONDITION' ? <GitBranch size={12} /> : <Zap size={12} />}</div>
                       <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-white/30">{node.type}</span>
                     </div>
                     <span className="text-[10px] font-bold uppercase tracking-widest text-white/90 truncate max-w-full">{node.title}</span>
                  </div>
                  <div onPointerDown={(e) => handleConnect(e, node.id, false, 'true')} className="absolute -right-1.5 top-[26px] w-4 h-4 rounded-full bg-neon-blue border-2 border-[#030712] cursor-crosshair z-30 hover:scale-125 transition-transform">{node.type === 'CONDITION' && <span className="absolute -left-6 top-[1px] text-[7px] font-bold text-neon-blue uppercase pointer-events-none">Sim</span>}</div>
                  {node.type === 'CONDITION' && <div onPointerDown={(e) => handleConnect(e, node.id, false, 'false')} className="absolute -right-1.5 top-[48px] w-4 h-4 rounded-full bg-red-500 border-2 border-[#030712] cursor-crosshair z-30 hover:scale-125 transition-transform"><span className="absolute -left-6 top-[1px] text-[7px] font-bold text-red-500 uppercase pointer-events-none">Não</span></div>}
                  <div onPointerDown={(e) => handleConnect(e, node.id, true)} className="absolute -left-1.5 top-[26px] w-4 h-4 bg-white/20 rounded-full border-2 border-[#030712] cursor-crosshair z-30 hover:bg-white/40" />
                </motion.div>
              );
            })}
          </div>
        </main>

        <AnimatePresence>
          {selectedNode && (
            <motion.aside initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} className="w-80 border-l border-white/5 bg-[#050914]/95 backdrop-blur-xl p-6 flex flex-col shadow-2xl overflow-y-auto custom-scrollbar">
              <div className="flex justify-between items-center mb-8"><h3 className="text-[10px] font-bold text-neon-blue uppercase tracking-[0.2em]">Configuração_Nó</h3><button onClick={() => setSelectedNode(null)} className="p-1 text-white/20 hover:text-white transition-colors"><X size={16} /></button></div>
              <div className="space-y-8">
                <section className="space-y-4">
                  <div><label className="text-[9px] uppercase text-white/30 font-bold block mb-1">Identificador</label><input value={selectedNode.title} onChange={(e) => { const val = e.target.value; setNodes(nodes.map(n => n.id === selectedNode.id ? {...n, title: val} : n)); setSelectedNode({...selectedNode, title: val}); }} className="w-full bg-white/5 border border-white/10 rounded-sm p-2 text-xs text-white outline-none focus:border-neon-blue/50" /></div>
                  
                  {selectedNode.type === 'AUDIENCE' && (
                    <div className="space-y-2"><label className="text-[9px] uppercase text-white/30 font-bold block">Selecionar Público-Alvo</label><select value={selectedNode.config.audienceId} onChange={e => { const val = e.target.value; setNodes(nodes.map(n => n.id === selectedNode.id ? {...n, config: {...n.config, audienceId: val}} : n)); setSelectedNode({...selectedNode, config: {...selectedNode.config, audienceId: val}}); }} className="w-full bg-white/5 border border-white/10 rounded-sm p-2 text-xs text-white outline-none appearance-none"><option value="" className="bg-background">Escolha o público...</option>{availableAudiences.map(aud => <option key={aud.id} value={aud.id} className="bg-background">{aud.name}</option>)}</select></div>
                  )}

                  {selectedNode.type === 'TAG' && (
                    <div className="space-y-2"><label className="text-[9px] uppercase text-white/30 font-bold block">Selecionar Etiqueta</label><select value={selectedNode.config.tagId} onChange={e => { const val = e.target.value; setNodes(nodes.map(n => n.id === selectedNode.id ? {...n, config: {...n.config, tagId: val}} : n)); setSelectedNode({...selectedNode, config: {...selectedNode.config, tagId: val}}); }} className="w-full bg-white/5 border border-white/10 rounded-sm p-2 text-xs text-white outline-none appearance-none"><option value="" className="bg-background">Escolha a tag...</option>{availableTags.map(tag => <option key={tag.id} value={tag.id} className="bg-background">{tag.name}</option>)}</select></div>
                  )}

                  {selectedNode.type === 'EMAIL' && (
                    <div className="space-y-4 border-t border-white/5 pt-4">
                      <div className="space-y-1"><label className="text-[9px] uppercase text-white/30 font-bold block">Conta de Envio</label><select value={selectedNode.config.smtpId} onChange={e => { const val = e.target.value; setNodes(nodes.map(n => n.id === selectedNode.id ? {...n, config: {...n.config, smtpId: val}} : n)); setSelectedNode({...selectedNode, config: {...selectedNode.config, smtpId: val}}); }} className="w-full bg-white/5 border border-white/10 rounded-sm p-2 text-xs text-white outline-none appearance-none"><option value="" className="bg-background">Selecionar SMTP...</option>{smtpAccounts.map(acc => <option key={acc.id} value={acc.id} className="bg-background">{acc.name}</option>)}</select></div>
                      <div className="space-y-1"><label className="text-[9px] uppercase text-white/30 font-bold block">Modelo de Campanha</label><select value={selectedNode.config.campaignId} onChange={e => { const val = e.target.value; setNodes(nodes.map(n => n.id === selectedNode.id ? {...n, config: {...n.config, campaignId: val}} : n)); setSelectedNode({...selectedNode, config: {...selectedNode.config, campaignId: val}}); }} className="w-full bg-white/5 border border-white/10 rounded-sm p-2 text-xs text-white outline-none appearance-none"><option value="" className="bg-background">Usar layout de campanha...</option>{campaigns.map(c => <option key={c.id} value={c.id} className="bg-background">{c.name}</option>)}</select></div>
                    </div>
                  )}

                  {selectedNode.type === 'ROUTING' && (
                    <div className="space-y-4 border-t border-white/5 pt-4">
                      <div className="flex items-center gap-2 text-neon-purple"><Layers size={14} /><label className="text-[9px] uppercase font-bold tracking-widest">Distribuição Humana</label></div>
                      <div className="space-y-1"><label className="text-[9px] uppercase text-white/30 font-bold block">Fila de Destino</label><select value={selectedNode.config.queueId} onChange={e => { const val = e.target.value; setNodes(nodes.map(n => n.id === selectedNode.id ? {...n, config: {...n.config, queueId: val}} : n)); setSelectedNode({...selectedNode, config: {...selectedNode.config, queueId: val}}); }} className="w-full bg-white/5 border border-white/10 rounded-sm p-2 text-xs text-white outline-none appearance-none"><option value="" className="bg-background">Selecionar Fila...</option>{queues.map(q => <option key={q.id} value={q.id} className="bg-background">{q.name}</option>)}</select></div>
                    </div>
                  )}

                  {selectedNode.type === 'ADD_TAG' && (
                    <div className="space-y-4 border-t border-white/5 pt-4">
                      <div className="space-y-1"><label className="text-[9px] uppercase text-white/30 font-bold block">Etiqueta Existente</label><select value={selectedNode.config.tag} onChange={e => { const val = e.target.value; setNodes(nodes.map(n => n.id === selectedNode.id ? {...n, config: {...n.config, tag: val}} : n)); setSelectedNode({...selectedNode, config: {...selectedNode.config, tag: val}}); }} className="w-full bg-white/5 border border-white/10 rounded-sm p-2 text-xs text-white appearance-none outline-none"><option value="" className="bg-background">Selecionar Tag...</option>{availableTags.map(t => <option key={t.id} value={t.name} className="bg-background">{t.name}</option>)}</select></div>
                      <div className="pt-4 space-y-2">
                        <label className="text-[9px] uppercase text-white/30 font-bold block">Ou Criar Nova</label>
                        <div className="flex gap-2">
                          <input value={newTagName} onChange={e => setNewTagName(e.target.value)} placeholder="NOVA_TAG..." className="flex-1 bg-white/5 border border-white/10 rounded-sm p-2 text-[10px] text-white outline-none" />
                          <button onClick={handleCreateQuickTag} className="p-2 bg-neon-purple rounded-sm text-white hover:shadow-[0_0_10px_rgba(139,92,246,0.5)] transition-all"><Plus size={14} /></button>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {selectedNode.type === 'DELAY' && (
                    <div className="space-y-4 border-t border-white/5 pt-4">
                      <div className="flex items-center gap-2 text-orange-400 mb-2"><Timer size={14} /><label className="text-[9px] uppercase font-bold tracking-widest">Intervalo Aleatório</label></div>
                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <label className="text-[9px] uppercase text-white/30 font-bold block mb-1">Mínimo</label>
                          <input type="number" value={selectedNode.config?.delayMin || selectedNode.config?.delayValue} onChange={(e) => { 
                            const val = e.target.value; 
                            setNodes(nodes.map(n => n.id === selectedNode.id ? {...n, config: {...n.config, delayMin: val}} : n)); 
                            setSelectedNode({...selectedNode, config: {...selectedNode.config, delayMin: val}}); 
                          }} className="w-full bg-white/5 border border-white/10 rounded-sm p-2 text-xs text-white outline-none focus:border-orange-400/50" />
                        </div>
                        <div>
                          <label className="text-[9px] uppercase text-white/30 font-bold block mb-1">Máximo</label>
                          <input type="number" value={selectedNode.config?.delayMax || selectedNode.config?.delayValue} onChange={(e) => { 
                            const val = e.target.value; 
                            setNodes(nodes.map(n => n.id === selectedNode.id ? {...n, config: {...n.config, delayMax: val}} : n)); 
                            setSelectedNode({...selectedNode, config: {...selectedNode.config, delayMax: val}}); 
                          }} className="w-full bg-white/5 border border-white/10 rounded-sm p-2 text-xs text-white outline-none focus:border-orange-400/50" />
                        </div>
                      </div>
                      <div>
                        <label className="text-[9px] uppercase text-white/30 font-bold block mb-1">Unidade</label>
                        <select value={selectedNode.config?.delayUnit} onChange={(e) => { 
                          const val = e.target.value; 
                          setNodes(nodes.map(n => n.id === selectedNode.id ? {...n, config: {...n.config, delayUnit: val}} : n)); 
                          setSelectedNode({...selectedNode, config: {...selectedNode.config, delayUnit: val}}); 
                        }} className="w-full bg-white/5 border border-white/10 rounded-sm p-2 text-xs text-white appearance-none outline-none focus:border-orange-400/50"><option value="s" className="bg-background">Segundos</option><option value="m" className="bg-background">Minutos</option><option value="h" className="bg-background">Horas</option></select>
                      </div>
                      <p className="text-[8px] text-white/20 uppercase leading-relaxed font-mono">O sistema escolherá um tempo aleatório entre o mínimo e o máximo para cada lead, simulando comportamento humano.</p>
                    </div>
                  )}
                </section>
                <div className="pt-6 border-t border-white/5"><button onClick={() => { setNodes(nodes.filter(n => n.id !== selectedNode.id)); setSelectedNode(null); }} className="w-full py-2.5 text-red-500/50 hover:text-red-500 text-[10px] font-bold uppercase border border-red-500/10 rounded-sm transition-all">Remover Componente</button></div>
              </div>
            </motion.aside>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {showSaveModal && (
            <div className="fixed inset-0 z-[300] flex items-center justify-center p-6 text-white">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} onClick={() => setShowSaveModal(false)} className="absolute inset-0 bg-background/80 backdrop-blur-md" />
              <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="glass w-full max-w-sm rounded-sm p-8 z-[301] border-neon-purple/30 relative text-center">
                <h2 className="text-lg font-bold uppercase tracking-widest mb-6 font-mono text-white">Deploy_Flow_System</h2>
                <input value={flowName} onChange={(e) => setFlowName(e.target.value)} className="w-full bg-white/5 border border-white/10 rounded-sm p-3 text-xs text-white outline-none focus:border-neon-purple/50 mb-6 text-center" />
                <button onClick={handleSaveFlow} disabled={isSaving} className="w-full py-3 bg-neon-purple rounded-sm text-[10px] font-bold uppercase tracking-widest shadow-[0_0_20px_rgba(139,92,246,0.3)] text-white flex items-center justify-center gap-2">
                  {isSaving ? <Loader2 size={16} className="animate-spin" /> : <CheckCircle2 size={16} />}
                  Confirmar e Publicar
                </button>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default FlowEditor;
