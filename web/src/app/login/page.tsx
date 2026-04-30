'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Mail, ChevronRight, Zap } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';

const LoginPage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const result = await signIn('credentials', {
      redirect: false,
      email,
      password,
    });

    if (result?.error) {
      setError('Credenciais inválidas. Tente novamente.');
      setLoading(false);
    } else {
      router.push('/');
    }
  };

  return (
    <div className="min-h-screen bg-[#030712] flex items-center justify-center relative overflow-hidden font-sans selection:bg-neon-purple/30">
      {/* Elementos de Fundo Futurista */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.1),transparent_50%)] pointer-events-none" />
      <div className="fixed top-[-10%] right-[-10%] w-[40%] h-[40%] bg-neon-purple/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="fixed bottom-[-10%] left-[-10%] w-[30%] h-[30%] bg-neon-blue/10 blur-[100px] rounded-full pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-[400px] z-10 px-6"
      >
        {/* LOGO GIF CENTRALIZADO NO TOPO - Margem reduzida */}
        <div className="text-center mb-2">
          <div className="inline-flex items-center justify-center relative group">
            <img 
              src="/login-logo.gif" 
              alt="Hubia Nexus" 
              className="w-52 h-52 object-contain relative z-10 drop-shadow-[0_0_20px_rgba(139,92,246,0.6)]" 
            />
          </div>
        </div>

        {/* CARD DE LOGIN */}
        <div className="glass p-8 rounded-sm border border-white/10 backdrop-blur-2xl relative overflow-hidden mb-8">
          <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-neon-blue to-transparent opacity-50" />
          
          <form className="space-y-6" onSubmit={handleLogin}>
            {error && (
              <div className="bg-red-500/10 border border-red-500/30 text-red-500 text-[10px] p-3 rounded-sm text-center font-bold uppercase tracking-widest">
                {error}
              </div>
            )}
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-white/40 block ml-1">Acesso do Operador</label>
              <div className="relative group">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-neon-blue transition-colors">
                  <Mail size={16} />
                </div>
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="ID_USUARIO@HUBIA.SYS"
                  className="w-full bg-white/5 border border-white/10 rounded-sm py-3 pl-10 pr-4 text-xs text-white outline-none focus:border-neon-blue/50 focus:bg-white/[0.08] transition-all placeholder:text-white/10"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center px-1">
                <label className="text-[10px] font-bold uppercase tracking-widest text-white/40 block">Chave de Segurança</label>
                <button type="button" className="text-[9px] text-neon-blue/60 uppercase font-bold hover:text-neon-blue transition-colors">Recuperar</button>
              </div>
              <div className="relative group">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-neon-blue transition-colors">
                  <Lock size={16} />
                </div>
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full bg-white/5 border border-white/10 rounded-sm py-3 pl-10 pr-4 text-xs text-white outline-none focus:border-neon-blue/50 focus:bg-white/[0.08] transition-all"
                  required
                />
              </div>
            </div>

            <button 
              type="submit"
              disabled={loading}
              className="w-full bg-neon-purple py-3.5 rounded-sm text-xs font-bold uppercase tracking-[0.2em] text-white shadow-[0_0_20px_rgba(139,92,246,0.4)] hover:shadow-[0_0_30px_rgba(139,92,246,0.6)] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
            >
              {loading ? (
                <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
              ) : (
                <>Iniciar_Sessão <ChevronRight size={16} /></>
              )}
            </button>
          </form>
        </div>

        {/* NOVO SLOGAN E URL REPOSICIONADOS PARA BAIXO */}
        <div className="text-center">
          <h1 className="text-xl font-bold tracking-tighter text-white uppercase">Command <span className="text-neon-blue">Center</span></h1>
          <p className="text-white/30 text-[9px] uppercase tracking-[0.4em] mt-2 font-mono tracking-widest">www.hubianexus.com.br</p>
        </div>
      </motion.div>
    </div>
  );
};

export default LoginPage;
