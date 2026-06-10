// C:\Users\u s u á r i o\Documents\Portfólio\src\components\sections\Hero.tsx
'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center p-6">
      {/* O "Card" central com sombra suave, estilo SkillMap */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.5 }} // Espera o loader sair
        className="relative z-10 w-full max-w-5xl bg-white rounded-[2rem] shadow-2xl p-10 md:p-20 flex flex-col items-center text-center border border-gray-100"
      >
        
        {/* Badge superior amarelo/vermelho */}
        <div className="flex items-center gap-3 px-5 py-2 mb-8 rounded-full bg-red-50 border border-red-100 text-sm font-bold tracking-widest uppercase text-speed-red">
          <span className="w-2 h-2 bg-speed-yellow rounded-full animate-pulse"></span>
          Engenharia & Automação
        </div>

        <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6 text-speed-dark">
          Inteligência Operacional <br className="hidden md:block" />
          <span className="text-speed-red">Em Escala</span>
        </h1>

        <p className="text-lg text-gray-500 max-w-2xl mb-10 font-medium">
          Desenvolvedor de soluções avançadas unindo IA, Visão Computacional e Arquiteturas Full Stack para automação de processos industriais.
        </p>

        {/* Botões inspirados no Mach 5 */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <a 
            href="#case-studies" 
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-speed-red hover:bg-red-700 text-white font-bold uppercase tracking-wider transition-all shadow-[0_8px_20px_rgba(220,38,38,0.3)] hover:-translate-y-1"
          >
            Estudos de Caso
          </a>
          <a 
            href="#contato" 
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white border-2 border-speed-yellow text-speed-dark font-bold uppercase tracking-wider transition-all hover:bg-yellow-50 hover:-translate-y-1"
          >
            Iniciar Diagnóstico
          </a>
        </div>
      </motion.div>
    </section>
  );
}