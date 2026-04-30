'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  LayoutDashboard, 
  MessageSquare, 
  Mail, 
  Users, 
  Zap, 
  Settings, 
  ChevronLeft, 
  ChevronRight,
  Bell,
  Search,
  User
} from 'lucide-react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useSession, signOut } from 'next-auth/react';

// Componente de Sidebar Colapsável com Glassmorphism
const Sidebar = ({ isOpen, toggle }: { isOpen: boolean, toggle: () => void }) => {
  const pathname = usePathname();

  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/' },
    { icon: MessageSquare, label: 'WhatsApp & IA', path: '/whatsapp' },
    { icon: Mail, label: 'E-mail Marketing', path: '/email' },
    { icon: Zap, label: 'Automações', path: '/automation' },
    { icon: Users, label: 'CRM & Leads', path: '/crm' },
    { icon: Settings, label: 'Configurações', path: '/settings' },
  ];

  return (
    <motion.aside
    initial={false}
    animate={{ width: isOpen ? 260 : 80 }}
    className="fixed left-0 top-0 h-full glass z-50 flex flex-col transition-all duration-300"
    >      <div className="pt-2 pb-0 flex flex-col items-center justify-center relative min-h-[100px]">
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div 
              key="logo-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex items-center justify-center w-full px-4"
            >
              <img src="/hubn.png" alt="Hubia Nexus" className="w-48 h-auto object-contain" />
            </motion.div>
          ) : (
            <motion.div 
              key="logo-collapsed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex items-center justify-center w-full mt-4"
            >
              <img src="/faverde.png" alt="H" className="w-10 h-10 object-contain" />
            </motion.div>
          )}
        </AnimatePresence>

        <button 
          onClick={toggle} 
          className={`p-1.5 hover:bg-white/5 rounded-sm transition-colors text-white/30 hover:text-white absolute ${isOpen ? 'right-2 top-2' : 'relative mt-4'}`}
        >
          {isOpen ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
        </button>
      </div>

      <nav className="flex-1 px-4 mt-0">
        {menuItems.map((item, idx) => {
          const isActive = pathname === item.path;
          return (
            <Link key={idx} href={item.path} className="block mb-2">
              <button className={`w-full flex items-center p-2.5 rounded-md transition-all duration-200 
                ${isActive ? 'bg-white/10 text-white shadow-[0_0_10px_rgba(139,92,246,0.2)] border border-white/10' : 'text-white/50 hover:bg-white/5 hover:text-white'}`}
              >
                <item.icon size={18} className={isActive ? 'text-neon-purple' : ''} />
                <AnimatePresence>
                  {isOpen && (
                    <motion.span 
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      className="ml-3 text-sm font-medium whitespace-nowrap"
                    >
                      {item.label}
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            </Link>
          );
        })}
      </nav>
    </motion.aside>
  );
};

// Layout Principal
export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const { data: session } = useSession();

  // Função para tocar a vinheta após login
  useEffect(() => {
    if (session) {
      const hasPlayedVignette = sessionStorage.getItem('vignette_played');
      if (!hasPlayedVignette) {
        const audio = new Audio('/vinheta.MP3');
        audio.volume = 0.5;
        audio.play().catch(err => console.log("Auto-play bloqueado pelo navegador. Interaja com a página primeiro."));
        sessionStorage.setItem('vignette_played', 'true');
      }
    }
  }, [session]);

  return (
    <div className="min-h-screen bg-background text-white font-sans selection:bg-neon-purple/30 overflow-hidden text-sm">
      {/* Elementos Visuais de Fundo (Futurista) */}
      <div className="fixed inset-0 bg-[image:var(--background-image-mesh-gradient)] pointer-events-none z-0" />
      <div className="fixed top-[-10%] right-[-10%] w-[40%] h-[40%] bg-neon-purple/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="fixed bottom-[-10%] left-[-10%] w-[30%] h-[30%] bg-neon-blue/10 blur-[100px] rounded-full pointer-events-none" />

      <Sidebar isOpen={sidebarOpen} toggle={() => setSidebarOpen(!sidebarOpen)} />

      <main className={`transition-all duration-300 ${sidebarOpen ? 'pl-[260px]' : 'pl-[80px]'} w-full relative z-10`}>
        {/* Header Superior */}
        <header className="h-16 border-b border-white/5 backdrop-blur-md px-6 flex items-center justify-between sticky top-0 bg-background/50 z-40">
          <div className="flex items-center bg-white/5 border border-white/10 rounded-md px-3 py-1.5 w-80 group focus-within:border-neon-blue/50 transition-all">
            <Search size={16} className="text-white/40 mr-2 group-focus-within:text-neon-blue" />
            <input 
              placeholder="Pesquisar no sistema..." 
              className="bg-transparent border-none outline-none text-xs text-white w-full placeholder:text-white/20 uppercase font-mono"
            />
          </div>

          <div className="flex items-center gap-4">
            <button className="relative p-1.5 text-white/60 hover:text-white transition-colors border border-white/5 rounded-sm hover:border-white/20 bg-white/[0.02]">
              <Bell size={18} />
              <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-neon-purple rounded-full shadow-[0_0_5px_#8B5CF6]" />
            </button>
            <div 
              onClick={() => signOut()}
              className="flex items-center gap-2.5 bg-white/5 border border-white/10 rounded-sm pl-1.5 pr-3 py-1 hover:bg-white/10 hover:border-red-500/50 cursor-pointer transition-all group"
              title="Sair do Sistema"
            >
              <div className="w-7 h-7 rounded-sm bg-gradient-to-br from-neon-purple to-neon-blue flex items-center justify-center shadow-lg group-hover:shadow-red-500/20 transition-all">
                <User size={16} className="text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold uppercase tracking-tight group-hover:text-red-400 transition-colors">
                  {session?.user?.name || 'Operador'}
                </span>
                <span className="text-[8px] text-white/40 font-mono tracking-widest uppercase">
                  {(session?.user as any)?.tenantName || 'Nexus_Guest'}
                </span>
              </div>
            </div>
          </div>
        </header>

        {/* Área de Conteúdo Segura */}
        <div className="p-8 max-w-[1600px] mx-auto min-h-[calc(100vh-64px)]">
          {children}
        </div>
      </main>
    </div>
  );
}
