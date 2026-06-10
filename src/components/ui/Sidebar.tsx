'use client';

import { motion } from 'framer-motion';

export default function Sidebar() {
  return (
    <aside className="w-64 fixed inset-y-0 left-0 bg-mach-panel border-r border-mach-red/20 z-50 flex flex-col hidden md:flex">
      <div className="p-8 border-b border-mach-red/20">
        <h1 className="text-3xl font-black italic text-mach-red tracking-tighter">SPEED</h1>
        <h2 className="text-3xl font-black italic text-white tracking-tighter -mt-2">RACER</h2>
        <p className="text-xs text-mach-muted mt-2 tracking-widest uppercase">Developer Portfolio</p>
      </div>
      
      <nav className="flex-1 py-8 px-4 flex flex-col gap-2">
        {['Início', 'Sobre Mim', 'Experiência', 'Projetos', 'Habilidades'].map((item, i) => (
          <a key={item} href={`#${item.toLowerCase()}`} className={`px-4 py-3 rounded-md font-bold uppercase tracking-wider text-sm transition-all ${i === 0 ? 'bg-mach-red text-white' : 'text-mach-muted hover:text-white hover:bg-white/5'}`}>
            {item}
          </a>
        ))}
      </nav>

      <div className="p-6 border-t border-mach-red/20">
        <div className="text-center font-black italic text-mach-red tracking-widest text-sm">READY TO CODE!</div>
      </div>
    </aside>
  );
} 