// C:\Users\u s u á r i o\Documents\Portfólio\src\components\ui\Loader.tsx
// O que é: Tela de carregamento inicial 100% fluída.
// O que fiz de novo: Criei animações encadeadas de painéis (Vermelho e Amarelo) que sobem revelando o site.
// Por que escolhi assim: Garante a percepção de alta performance logo no primeiro milissegundo de acesso.
 
'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Loader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simula o tempo de calibração do sistema (1.5 segundos)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loader"
          className="fixed inset-0 z-[999] flex items-center justify-center overflow-hidden"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {/* Painel Amarelo (Fundo) */}
          <motion.div 
            initial={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.6, ease: [0.85, 0, 0.15, 1], delay: 0.1 }}
            className="absolute inset-0 bg-yellow-400 z-10"
          />
          
          {/* Painel Vermelho (Frente) */}
          <motion.div 
            initial={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.6, ease: [0.85, 0, 0.15, 1] }}
            className="absolute inset-0 bg-red-600 z-20 flex flex-col items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-white font-extrabold text-4xl tracking-widest uppercase flex items-center gap-2"
            >
              <div className="w-4 h-4 bg-yellow-400 rounded-full animate-pulse" />
              Calibrando Motores
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}