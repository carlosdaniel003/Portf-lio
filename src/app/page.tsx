// src\app\page.tsx

import AboutMe from "@/components/sections/AboutMe";
import CaseStudies from "@/components/sections/CaseStudies";
import Contact from "@/components/sections/Contact";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";

import InteractiveBackground from "@/components/ui/InteractiveBackground";
import Loader from "@/components/ui/Loader";
import SectionDivider from "@/components/ui/SectionDivider";

const editorialTopics = [
  "Software industrial",
  "Inteligência artificial",
  "Visão computacional",
  "Automação",
  "Dashboards",
  "Sistemas reais",
];

export default function Home() {
  const repeatedTopics = [
    ...editorialTopics,
    ...editorialTopics,
  ];

  return (
    <main
      className="
        relative isolate
        min-h-screen
        overflow-x-clip
        bg-transparent
        text-[color:var(--text)]
      "
    >
      <Loader />

      <InteractiveBackground />

      {/* =====================================================
          OBJETOS GLOBAIS DE PROFUNDIDADE

          Estes elementos são uma primeira camada visual.
          Posteriormente serão substituídos pelo TechScene,
          que reagirá ao scroll e à velocidade da página.
          ===================================================== */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute inset-0
          z-0
          overflow-hidden
        "
      >
        {/* Objeto azul próximo ao Hero */}
        <div
          className="
            tech-object
            tech-object-near
            tech-object-blue
            tech-orb
            tech-float-slow

            right-[-5rem]
            top-[7rem]

            h-52 w-52

            sm:right-[-3rem]
            sm:h-64 sm:w-64

            xl:right-[3%]
            xl:top-[10rem]
          "
        />

        {/* Objeto verde entre projetos e soluções */}
        <div
          className="
            tech-object
            tech-object-mid
            tech-object-green
            tech-orb
            tech-float-reverse

            left-[-4rem]
            top-[38%]

            h-32 w-32

            lg:left-[-2rem]
            lg:h-44 lg:w-44
          "
        />

        {/* Objeto de vidro distante */}
        <div
          className="
            tech-object
            tech-object-far
            tech-object-glass
            tech-orb
            tech-float-slow

            right-[-5rem]
            top-[68%]

            h-60 w-60

            xl:right-[2%]
            xl:h-80 xl:w-80
          "
        />

        {/* Glow central da página */}
        <div
          className="
            absolute
            left-1/2
            top-[46%]

            h-[38rem]
            w-[38rem]

            -translate-x-1/2
            rounded-full

            bg-[color:var(--accent)]/[0.045]
            blur-[130px]
          "
        />
      </div>

      {/* =====================================================
          CONTEÚDO PRINCIPAL
          ===================================================== */}
      <div className="relative z-10">
        {/* 00 — Abertura */}
        <Hero />

        {/* Faixa editorial pós-Hero */}
        <div
          aria-hidden="true"
          className="editorial-strip"
        >
          <div className="editorial-strip-track">
            {repeatedTopics.map(
              (topic, index) => (
                <span
                  key={`${topic}-${index}`}
                  className="editorial-strip-item"
                >
                  {topic}
                </span>
              )
            )}
          </div>
        </div>

        {/* 01 — Projetos */}
        <div
          className="
            relative
            section-glow
          "
        >
          <div
            aria-hidden="true"
            className="
              soft-dots
              pointer-events-none
              absolute
              right-[-8rem]
              top-20
              h-[28rem]
              w-[28rem]
              opacity-45
            "
          />

          <SectionDivider
            index="01"
            title="Projetos em operação"
          />

          <CaseStudies />
        </div>

        {/* 02 — Soluções */}
        <div
          className="
            relative
            border-y
            border-[color:var(--line-soft)]
            bg-[color:var(--bg-deep)]/20
          "
        >
          <div
            aria-hidden="true"
            className="
              soft-grid
              pointer-events-none
              absolute inset-0
              opacity-25
            "
          />

          <div className="relative z-10">
            <SectionDivider
              index="02"
              title="Soluções para empresas"
            />

            <Services />
          </div>
        </div>

        {/* 03 — Identidade técnica */}
        <div className="relative">
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              left-[-12rem]
              top-[20%]

              h-[34rem]
              w-[34rem]

              rounded-full

              bg-[color:var(--accent-2)]/[0.055]
              blur-[130px]
            "
          />

          <SectionDivider
            index="03"
            title="Base técnica e trajetória"
          />

          <AboutMe />
        </div>

        {/* 04 — Contato */}
        <div
          className="
            relative
            overflow-hidden
            border-t
            border-[color:var(--line-soft)]
          "
        >
          <div
            aria-hidden="true"
            className="
              soft-grid
              pointer-events-none
              absolute inset-0
              opacity-20

              [mask-image:linear-gradient(to_top,black,transparent_82%)]
              [-webkit-mask-image:linear-gradient(to_top,black,transparent_82%)]
            "
          />

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              bottom-[-18rem]
              left-1/2

              h-[42rem]
              w-[42rem]

              -translate-x-1/2
              rounded-full

              bg-[color:var(--accent)]/[0.09]
              blur-[140px]
            "
          />

          <div className="relative z-10">
            <SectionDivider
              index="04"
              title="Vamos construir algo real"
            />

            <Contact />
          </div>
        </div>
      </div>
    </main>
  );
}