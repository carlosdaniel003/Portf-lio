"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Loader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loader"
          className="fixed inset-0 z-[999] flex items-center justify-center overflow-hidden bg-[color:var(--bg)]"
          exit={{ opacity: 0, y: -24 }}
          transition={{ duration: 0.45, ease: "easeInOut" }}
        >
          <motion.div
            initial={{ scaleX: 1 }}
            exit={{ scaleX: 0 }}
            transition={{ duration: 0.55, ease: [0.85, 0, 0.15, 1] }}
            className="absolute inset-0 origin-right bg-[color:var(--accent)]"
          />
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="relative z-10 flex items-center gap-3 rounded-full border border-black/10 bg-black/20 px-6 py-3 text-sm font-black uppercase tracking-[0.22em] text-[#04110d] backdrop-blur-xl"
          >
            <span className="h-2.5 w-2.5 rounded-full bg-[#04110d]" />
            Inicializando Portfólio
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
