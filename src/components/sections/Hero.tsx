// src\components\sections\Hero.tsx
"use client";

import NeuralCircuitCore from "@/components/ui/neural/NeuralCircuitCore";

import { motion } from "framer-motion";

import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";

/*
 * ============================================================
 * PILARES APRESENTADOS NO HERO
 * ============================================================
 */

const technicalPillars = [
  {
    index: "01",
    title: "Eletrônica",
    description:
      "Entendimento do problema físico.",
  },
  {
    index: "02",
    title: "Software",
    description:
      "Sistemas construídos sob medida.",
  },
  {
    index: "03",
    title: "IA",
    description:
      "Análise, visão e automação.",
  },
];

/*
 * ============================================================
 * ANIMAÇÕES
 * ============================================================
 */

const revealTransition = {
  duration: 0.72,
  ease: [0.22, 1, 0.36, 1] as const,
};

export default function Hero() {
  return (
    <section
      id="inicio"
      className="
        relative
        scroll-mt-28
        overflow-hidden
        pb-20
        pt-10

        sm:pb-24
        sm:pt-14

        lg:flex
        lg:min-h-[calc(100svh-96px)]
        lg:items-center
        lg:pb-28
        lg:pt-16
      "
    >
      {/* =====================================================
          FUNDO EDITORIAL
          ===================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute inset-0
          overflow-hidden
        "
      >
        {/* Número da seção */}
        <div
          className="
            editorial-number
            absolute
            right-[-0.04em]
            top-[0.08em]
            opacity-70

            sm:right-[0.01em]
            lg:top-[-0.02em]
          "
        >
          00
        </div>

        {/* Grade localizada */}
        <div
          className="
            soft-grid
            absolute
            left-0 top-0
            h-[44rem]
            w-full
            opacity-25
          "
        />

        {/* Glow principal */}
        <div
          className="
            absolute
            right-[-12rem]
            top-[8rem]

            h-[38rem]
            w-[38rem]

            rounded-full
            bg-[color:var(--accent)]/10
            blur-[150px]
          "
        />

        {/* Glow secundário */}
        <div
          className="
            absolute
            left-[-15rem]
            top-[22rem]

            h-[34rem]
            w-[34rem]

            rounded-full
            bg-[color:var(--accent-2)]/10
            blur-[150px]
          "
        />

        {/* Linha vertical editorial */}
        <div
          className="
            absolute
            bottom-0
            left-[max(1.25rem,calc((100%-1400px)/2))]
            top-0

            hidden w-px
            bg-gradient-to-b
            from-transparent
            via-[color:var(--line)]
            to-transparent

            xl:block
          "
        />
      </div>

      <div
        className="
          portfolio-container
          relative z-10
          w-full
        "
      >
        {/* =====================================================
            METADADOS SUPERIORES
            ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 14,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            ...revealTransition,
            delay: 0.05,
          }}
          className="
            mb-10
            flex flex-col
            gap-4
            border-b
            border-[color:var(--line-soft)]
            pb-5

            sm:flex-row
            sm:items-center
            sm:justify-between

            lg:mb-14
          "
        >
          <div
            className="
              flex items-center
              gap-3
            "
          >
            <span
              className="
                h-2 w-2
                rounded-full
                bg-[color:var(--accent)]
                shadow-[0_0_16px_var(--accent)]
              "
            />

            <p className="tech-label">
              Carlos Daniel / Full Stack
            </p>
          </div>

          <div
            className="
              flex flex-wrap
              items-center
              gap-x-5
              gap-y-2
            "
          >
            <span
              className="
                font-mono
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.2em]
                text-[color:var(--muted)]
              "
            >
              Eletrônica
            </span>

            <span
              aria-hidden="true"
              className="
                hidden h-px
                w-8
                bg-[color:var(--line-strong)]
                sm:block
              "
            />

            <span
              className="
                font-mono
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.2em]
                text-[color:var(--muted)]
              "
            >
              Software
            </span>

            <span
              aria-hidden="true"
              className="
                hidden h-px
                w-8
                bg-[color:var(--line-strong)]
                sm:block
              "
            />

            <span
              className="
                font-mono
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.2em]
                text-[color:var(--muted)]
              "
            >
              Inteligência artificial
            </span>
          </div>
        </motion.div>

        {/* =====================================================
            CONTEÚDO PRINCIPAL
            ===================================================== */}

        <div
          className="
            grid
            items-center
            gap-16

            lg:grid-cols-[minmax(0,1.08fr)_minmax(420px,0.92fr)]
            lg:gap-12

            xl:grid-cols-[minmax(0,1.15fr)_minmax(480px,0.85fr)]
            xl:gap-16
          "
        >
          {/* ===================================================
              TEXTO
              =================================================== */}

          <div className="relative">
            <motion.div
              initial={{
                opacity: 0,
                y: 22,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                ...revealTransition,
                delay: 0.12,
              }}
              className="
                mb-7
                inline-flex
                items-center
                gap-3

                rounded-full
                border
                border-[color:var(--line)]

                bg-[color:var(--panel)]
                px-4
                py-2

                backdrop-blur-xl
              "
            >
              <span
                className="
                  font-mono
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-[color:var(--accent)]
                "
              >
                System / 00
              </span>

              <span
                aria-hidden="true"
                className="
                  h-1 w-1
                  rounded-full
                  bg-[color:var(--line-strong)]
                "
              />

              <span
                className="
                  text-xs
                  font-bold
                  text-[color:var(--muted)]
                "
              >
                Problemas revelam oportunidades
              </span>
            </motion.div>

            <motion.h1
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                ...revealTransition,
                delay: 0.18,
              }}
              className="
                display-title
                relative z-10
                max-w-[9.5ch]
              "
            >
              <span
                className="
                  block
                  text-[color:var(--text)]
                "
              >
                Funcionar
              </span>

              <span
                className="
                  block
                  text-[color:var(--text)]
                "
              >
                é o começo.
              </span>

              <span
                className="
                  text-gradient
                  block
                  pb-[0.08em]
                "
              >
                Evoluir
              </span>

              <span
                className="
                  text-gradient
                  block
                  pb-[0.08em]
                "
              >
                é o objetivo.
              </span>
            </motion.h1>

            <motion.div
              initial={{
                opacity: 0,
                y: 24,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                ...revealTransition,
                delay: 0.28,
              }}
              className="
                mt-8
                grid
                gap-6

                sm:grid-cols-[auto_1fr]
                sm:items-start

                lg:mt-10
              "
            >
              <div
                aria-hidden="true"
                className="
                  hidden
                  pt-2
                  sm:block
                "
              >
                <span
                  className="
                    block h-14
                    w-px
                    bg-gradient-to-b
                    from-[color:var(--accent)]
                    to-transparent
                  "
                />
              </div>

              <p
                className="
                  max-w-2xl
                  text-base
                  leading-8
                  text-[color:var(--muted)]

                  sm:text-lg
                  sm:leading-9
                "
              >
                Desenvolvo sistemas que conectam operação, dados e tecnologia para identificar oportunidades de melhoria e tornar processos mais eficientes, inteligentes e confiáveis.
              </p>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{
                opacity: 0,
                y: 22,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                ...revealTransition,
                delay: 0.36,
              }}
              className="
                mt-9
                flex flex-col
                gap-3

                sm:flex-row
                sm:flex-wrap
              "
            >
              <a
                href="#projetos"
                className="
                  primary-action
                  group
                "
              >
                Explorar projetos

                <ArrowRight
                  size={18}
                  strokeWidth={2.4}
                  className="
                    transition-transform
                    group-hover:translate-x-1
                  "
                />
              </a>

              <a
                href="#contato"
                className="
                  secondary-action
                  group
                "
              >
                Falar sobre uma solução

                <ArrowUpRight
                  size={17}
                  strokeWidth={2.4}
                  className="
                    transition-transform

                    group-hover:
                    translate-x-0.5

                    group-hover:
                    -translate-y-0.5
                  "
                />
              </a>
            </motion.div>

            {/* Pilares */}
            <motion.div
              initial={{
                opacity: 0,
                y: 22,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                ...revealTransition,
                delay: 0.44,
              }}
              className="
                mt-12
                grid
                gap-px
                overflow-hidden

                rounded-[1.6rem]
                border
                border-[color:var(--line)]

                bg-[color:var(--line-soft)]

                sm:grid-cols-3
              "
            >
              {technicalPillars.map(
                (pillar) => (
                  <div
                    key={pillar.index}
                    className="
                      group
                      relative
                      min-h-[128px]
                      overflow-hidden

                      bg-[color:var(--panel)]
                      p-5

                      transition
                      hover:bg-[color:var(--panel-strong)]
                    "
                  >
                    <div
                      aria-hidden="true"
                      className="
                        absolute
                        right-[-2rem]
                        top-[-2rem]

                        h-20 w-20
                        rounded-full

                        bg-[color:var(--accent)]/10
                        blur-2xl

                        opacity-0
                        transition-opacity

                        group-hover:opacity-100
                      "
                    />

                    <div
                      className="
                        relative z-10
                        flex h-full
                        flex-col
                        justify-between
                        gap-5
                      "
                    >
                      <div
                        className="
                          flex items-center
                          justify-between
                          gap-4
                        "
                      >
                        <span
                          className="
                            font-mono
                            text-[9px]
                            font-semibold
                            tracking-[0.2em]
                            text-[color:var(--accent)]
                          "
                        >
                          {pillar.index}
                        </span>

                        <span
                          aria-hidden="true"
                          className="
                            h-px w-8
                            bg-[color:var(--line-strong)]
                          "
                        />
                      </div>

                      <div>
                        <h2
                          className="
                            text-base
                            font-bold
                            tracking-[-0.03em]
                            text-[color:var(--text)]
                          "
                        >
                          {pillar.title}
                        </h2>

                        <p
                          className="
                            mt-2
                            text-xs
                            leading-5
                            text-[color:var(--muted)]
                          "
                        >
                          {pillar.description}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              )}
            </motion.div>
          </div>

          {/* ===================================================
              NÚCLEO VISUAL
              =================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: 32,
              scale: 0.96,
            }}
            animate={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            transition={{
              ...revealTransition,
              delay: 0.24,
            }}
            className="
              relative
              mx-auto
              w-full
              max-w-[650px]

              lg:mx-0
              lg:justify-self-end
            "
          >
            {/* Halo externo */}
            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                inset-[-8%]

                rounded-full
                border
                border-[color:var(--line-soft)]

                opacity-50
              "
            />

            <motion.div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                inset-[-3%]

                rounded-full
                border
                border-dashed
                border-[color:var(--accent)]/25
              "
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 34,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            {/* Glow atrás do núcleo */}
            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                left-1/2
                top-1/2

                h-[85%]
                w-[85%]

                -translate-x-1/2
                -translate-y-1/2

                rounded-full

                bg-[color:var(--accent)]/15
                blur-[90px]
              "
            />

            {/* Objeto tridimensional superior */}
            <motion.div
              aria-hidden="true"
              className="
                tech-object
                tech-object-mid
                tech-object-blue
                tech-orb

                right-[-1rem]
                top-[-2rem]

                z-20
                h-14 w-14

                sm:right-[-2rem]
                sm:h-20 sm:w-20
              "
              animate={{
                y: [0, -10, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Objeto de vidro inferior */}
            <motion.div
              aria-hidden="true"
              className="
                tech-object
                tech-object-near
                tech-object-glass
                tech-cube

                bottom-[8%]
                left-[-1.5rem]

                z-20
                h-16 w-16

                sm:left-[-3rem]
                sm:h-24 sm:w-24
              "
              animate={{
                y: [0, 12, 0],
                rotate: [0, -4, 0],
              }}
              transition={{
                duration: 7.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Etiqueta superior */}
            <div
              className="
                absolute
                left-5
                top-[-1rem]
                z-30

                hidden
                items-center
                gap-3

                rounded-full
                border
                border-[color:var(--line)]

                bg-[color:var(--panel-strong)]
                px-4
                py-2

                shadow-[0_12px_36px_var(--shadow)]
                backdrop-blur-xl

                sm:flex
              "
            >
              <span
                className="
                  h-2 w-2
                  rounded-full

                  bg-[color:var(--accent)]
                  shadow-[0_0_12px_var(--accent)]
                "
              />

              <span
                className="
                  font-mono
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.18em]
                  text-[color:var(--muted)]
                "
              >
                System core / online
              </span>
            </div>

            {/* Entrada lateral */}
            <div
              className="
                absolute
                left-[-2rem]
                top-[28%]
                z-30

                hidden
                items-center
                gap-3

                xl:flex
              "
            >
              <span
                className="
                  font-mono
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.18em]
                  text-[color:var(--muted)]
                "
              >
                Operação
              </span>

              <span
                aria-hidden="true"
                className="
                  h-px w-10
                  bg-gradient-to-r
                  from-[color:var(--line-strong)]
                  to-[color:var(--accent)]
                "
              />
            </div>

            {/* Saída lateral */}
            <div
              className="
                absolute
                right-[-2.5rem]
                top-[62%]
                z-30

                hidden
                items-center
                gap-3

                xl:flex
              "
            >
              <span
                aria-hidden="true"
                className="
                  h-px w-10
                  bg-gradient-to-r
                  from-[color:var(--accent-2)]
                  to-[color:var(--line-strong)]
                "
              />

              <span
                className="
                  font-mono
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.18em]
                  text-[color:var(--muted)]
                "
              >
                Decisão
              </span>
            </div>

            {/* Componente existente */}
            <div
              className="
                relative z-10
                [perspective:1400px]
              "
            >
              <NeuralCircuitCore />
            </div>

            {/* Rodapé do núcleo */}
            <div
              className="
                relative z-20
                mx-auto
                mt-4

                flex max-w-[88%]
                items-center
                justify-between
                gap-4

                rounded-full
                border
                border-[color:var(--line)]

                bg-[color:var(--panel)]
                px-4
                py-3

                backdrop-blur-xl
              "
            >
              <span
                className="
                  font-mono
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.16em]
                  text-[color:var(--muted)]
                "
              >
                Operação
              </span>

              <ArrowRight
                aria-hidden="true"
                size={14}
                className="
                  text-[color:var(--accent)]
                "
              />

              <span
                className="
                  font-mono
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.16em]
                  text-[color:var(--muted)]
                "
              >
                Dados
              </span>

              <ArrowRight
                aria-hidden="true"
                size={14}
                className="
                  text-[color:var(--accent-2)]
                "
              />

              <span
                className="
                  font-mono
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.16em]
                  text-[color:var(--muted)]
                "
              >
                Resultado
              </span>
            </div>
          </motion.div>
        </div>

        {/* =====================================================
            INDICADOR DE ROLAGEM
            ===================================================== */}

        <motion.a
          href="#projetos"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.7,
            delay: 0.9,
          }}
          className="
            mt-16
            hidden
            items-center
            gap-4

            font-mono
            text-[9px]
            font-semibold
            uppercase
            tracking-[0.22em]
            text-[color:var(--muted)]

            lg:flex
          "
        >
          <motion.span
            animate={{
              y: [0, 6, 0],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              grid h-10 w-10
              place-items-center

              rounded-full
              border
              border-[color:var(--line)]

              bg-[color:var(--panel)]
              text-[color:var(--accent)]
            "
          >
            <ArrowDown
              size={15}
              strokeWidth={2.2}
            />
          </motion.span>

          Explorar sistemas desenvolvidos
        </motion.a>
      </div>
    </section>
  );
}