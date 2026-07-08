// src/app/page.tsx

import AboutMe from "@/components/sections/AboutMe";
import CaseStudies from "@/components/sections/CaseStudies";
import Contact from "@/components/sections/Contact";
import Hero from "@/components/sections/Hero";
import Technologies from "@/components/sections/Technologies";
import WebDemosCTA from "@/components/sections/WebDemosCTA";

import InteractiveBackground from "@/components/ui/InteractiveBackground";
import Loader from "@/components/ui/Loader";
import SectionDivider from "@/components/ui/SectionDivider";

const editorialTopics = [
  "Eletrônica",
  "Software industrial",
  "Inteligência artificial",
  "Visão computacional",
  "Dashboards",
  "Automação",
];

export default function Home() {
  const repeatedTopics = [
    ...editorialTopics,
    ...editorialTopics,
  ];

  return (
    <main className="relative isolate min-h-screen overflow-x-clip bg-transparent text-[color:var(--text)]">
      <Loader />
      <InteractiveBackground />

      <div className="relative z-10">
        {/* 00 — Apresentação */}
        <Hero />

        <div aria-hidden="true" className="editorial-strip">
          <div className="editorial-strip-track">
            {repeatedTopics.map((topic, index) => (
              <span
                key={`${topic}-${index}`}
                className="editorial-strip-item"
              >
                {topic}
              </span>
            ))}
          </div>
        </div>

        {/* 01 — Projetos */}
        <div className="relative section-glow">
          <div
            aria-hidden="true"
            className="soft-dots pointer-events-none absolute right-[-8rem] top-20 h-[28rem] w-[28rem] opacity-45"
          />

          <SectionDivider
            index="01"
            title="Projetos em destaque"
          />

          <CaseStudies />
        </div>

        {/* 02 — Perfil profissional */}
        <div className="relative border-y border-[color:var(--line-soft)] bg-[color:var(--bg-deep)]/20">
          <div
            aria-hidden="true"
            className="soft-grid pointer-events-none absolute inset-0 opacity-20"
          />

          <div className="relative z-10">
            <SectionDivider
              index="02"
              title="Perfil e trajetória"
            />

            <AboutMe />
          </div>
        </div>

        {/* 03 — Tecnologias */}
        <div className="relative">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-[-14rem] top-[18%] h-[36rem] w-[36rem] rounded-full bg-[color:var(--accent)]/[0.055] blur-[140px]"
          />

          <SectionDivider
            index="03"
            title="Tecnologias e aplicações"
          />

          <Technologies />
        </div>

        {/* Ponte para o site comercial */}
        <WebDemosCTA />

        {/* 04 — Contato profissional */}
        <div className="relative overflow-hidden border-t border-[color:var(--line-soft)]">
          <div
            aria-hidden="true"
            className="soft-grid pointer-events-none absolute inset-0 opacity-20 [mask-image:linear-gradient(to_top,black,transparent_82%)] [-webkit-mask-image:linear-gradient(to_top,black,transparent_82%)]"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-[-18rem] left-1/2 h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-[color:var(--accent)]/[0.09] blur-[140px]"
          />

          <div className="relative z-10">
            <SectionDivider
              index="04"
              title="Contato profissional"
            />

            <Contact />
          </div>
        </div>
      </div>
    </main>
  );
}
