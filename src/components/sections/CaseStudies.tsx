// C:\Users\u s u á r i o\Documents\Portfólio\src\components\sections\CaseStudies.tsx
'use client';

import { motion } from 'framer-motion';
import { projectsData } from '@/data/portfolio';

export default function CaseStudies() {
  const sigmaQ = projectsData.find(p => p.id === 'sigma-q');
  const visionX = projectsData.find(p => p.id === 'visionx-neural');

  return (
    <section id="case-studies" className="py-24 relative z-20">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Cabeçalho da Seção */}
        <div className="mb-12 flex flex-col items-center text-center">
          <div className="w-12 h-1.5 bg-speed-yellow mb-6 rounded-full"></div>
          <h2 className="text-4xl font-black text-speed-dark uppercase tracking-tight">Impacto Analítico</h2>
          <p className="text-gray-500 mt-4 font-medium">Plataformas desenvolvidas para a indústria real</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 auto-rows-[minmax(300px,auto)]">
          
          {/* Card Principal: SIGMA-Q */}
          {sigmaQ && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-2 bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100 flex flex-col group hover:shadow-2xl transition-all"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center text-speed-red font-black text-xl">S</div>
                <h4 className="text-3xl font-black text-speed-dark">{sigmaQ.title}</h4>
              </div>
              
              <p className="text-gray-600 mb-8 font-medium leading-relaxed">{sigmaQ.solution}</p>
              
              <div className="flex flex-wrap gap-2 mb-10">
                {sigmaQ.technologies.map(tech => (
                  <span key={tech} className="px-4 py-1.5 text-xs font-bold rounded-lg bg-gray-100 text-gray-600">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-auto pt-6 border-t border-gray-100">
                <p className="text-xs text-speed-red font-black tracking-widest mb-4 uppercase">Resultados Comprovados</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {sigmaQ.results.map(res => (
                    <li key={res} className="flex items-start text-sm font-semibold text-gray-700">
                      <span className="w-2 h-2 mt-1.5 bg-speed-yellow rounded-full mr-3 shrink-0"></span>
                      {res}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}

          {/* Card Secundário: VisionX Neural */}
          {visionX && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="md:col-span-1 bg-speed-red rounded-3xl p-8 md:p-10 shadow-xl border border-red-700 flex flex-col hover:shadow-2xl transition-all text-white"
            >
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-white font-black text-xl mb-6">V</div>
              <h4 className="text-2xl font-black mb-4">{visionX.title}</h4>
              <p className="text-red-100 mb-8 font-medium leading-relaxed">{visionX.solution}</p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {visionX.technologies.slice(0, 3).map(tech => (
                  <span key={tech} className="px-3 py-1 text-xs font-bold rounded-lg bg-red-900/40 text-white">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-auto p-4 bg-red-900/30 rounded-xl">
                 <p className="text-xs text-speed-yellow font-black uppercase tracking-wide flex items-center gap-2">
                   <span className="w-1.5 h-1.5 bg-speed-yellow rounded-full animate-pulse"></span>
                   Status: Produção
                 </p>
              </div>
            </motion.div>
          )}

        </div>
      </div>
    </section>
  );
}