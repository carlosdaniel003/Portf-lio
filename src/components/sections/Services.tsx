// src\components\sections\Services.tsx
"use client";

import type { CommercialService } from "@/core/types";

import {
  aiApplications,
  commercialServices,
  serviceProcess,
} from "@/data/services";

import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";

import type { LucideIcon } from "lucide-react";

import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Bot,
  Check,
  Database,
  Globe2,
  MessageCircle,
  ScanLine,
} from "lucide-react";

import { useState } from "react";

/*
 * ============================================================
 * ÍCONES E IDENTIDADE DE CADA SOLUÇÃO
 * ============================================================
 */

const serviceIcons: Record<
  CommercialService["id"],
  LucideIcon
> = {
  "sistemas-gestao": Database,
  dashboards: BarChart3,
  "visao-computacional": ScanLine,
  "presenca-digital": Globe2,
};

const serviceMeta: Record<
  CommercialService["id"],
  {
    code: string;
    label: string;
    outcome: string;
  }
> = {
  "sistemas-gestao": {
    code: "SYS_01",
    label: "Digitalização interna",
    outcome:
      "Mais organização, rastreabilidade e controle sobre o processo.",
  },

  dashboards: {
    code: "DATA_02",
    label: "Decisão orientada por dados",
    outcome:
      "Indicadores claros para acompanhar resultados e agir mais rápido.",
  },

  "visao-computacional": {
    code: "VISION_03",
    label: "Inspeção automatizada",
    outcome:
      "Validação visual mais consistente, rápida e documentada.",
  },

  "presenca-digital": {
    code: "WEB_04",
    label: "Presença e conversão",
    outcome:
      "Uma apresentação profissional preparada para gerar contatos.",
  },
};

/*
 * ============================================================
 * WHATSAPP
 * ============================================================
 */

const whatsappMessage =
  "Olá, Carlos Daniel. Vi sua seção de soluções e gostaria de avaliar um processo da minha empresa para identificar oportunidades de sistema, automação ou inteligência artificial.";

const whatsappUrl =
  `https://wa.me/5592982890208?text=${encodeURIComponent(
    whatsappMessage
  )}`;

/*
 * ============================================================
 * ANIMAÇÕES
 * ============================================================
 */

const revealTransition = {
  duration: 0.58,
  ease: [0.22, 1, 0.36, 1] as const,
};

export default function Services() {
  const shouldReduceMotion =
    useReducedMotion();

  const [
    activeServiceIndex,
    setActiveServiceIndex,
  ] = useState(0);

  const activeService =
    commercialServices[
      activeServiceIndex
    ] ?? commercialServices[0];

  if (!activeService) {
    return null;
  }

  const ActiveServiceIcon =
    serviceIcons[activeService.id];

  const activeMeta =
    serviceMeta[activeService.id];

  return (
    <section
      id="solucoes"
      className="
        relative
        scroll-mt-28
        overflow-hidden
        py-24

        sm:py-28
        lg:py-36
      "
    >
      {/* =====================================================
          AMBIENTAÇÃO
          ===================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute inset-0
          overflow-hidden
        "
      >
        <div
          className="
            editorial-number
            absolute
            right-[-0.03em]
            top-[0.12em]
            opacity-55
          "
        >
          02
        </div>

        <div
          className="
            soft-grid
            absolute
            right-0 top-0

            h-[46rem]
            w-[60%]

            opacity-20
          "
        />

        <div
          className="
            absolute
            left-[-18rem]
            top-[20%]

            h-[38rem]
            w-[38rem]

            rounded-full
            bg-[color:var(--accent-2)]/[0.065]
            blur-[150px]
          "
        />

        <div
          className="
            absolute
            right-[-16rem]
            top-[54%]

            h-[42rem]
            w-[42rem]

            rounded-full
            bg-[color:var(--accent)]/[0.07]
            blur-[160px]
          "
        />
      </div>

      <div
        className="
          portfolio-container
          relative z-10
        "
      >
        {/* =====================================================
            CABEÇALHO EDITORIAL
            ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 28,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            margin: "-80px",
          }}
          transition={
            revealTransition
          }
          className="
            grid gap-10

            border-b
            border-[color:var(--line-soft)]

            pb-12

            lg:grid-cols-[minmax(0,1.2fr)_minmax(320px,0.8fr)]
            lg:items-end
            lg:pb-16
          "
        >
          <div>
            <div
              className="
                mb-6
                flex items-center
                gap-3
              "
            >
              <span
                className="
                  font-mono
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.22em]
                  text-[color:var(--accent)]
                "
              >
                Solutions / 02
              </span>

              <span
                aria-hidden="true"
                className="
                  h-px w-12
                  bg-gradient-to-r
                  from-[color:var(--accent)]
                  to-transparent
                "
              />
            </div>

            <h2
              className="
                section-title
                max-w-[13ch]
                text-[color:var(--text)]
              "
            >
              Tecnologia construída para o
              <span className="text-gradient">
                {" "}
                processo real.
              </span>
            </h2>
          </div>

          <div
            className="
              lg:border-l
              lg:border-[color:var(--line)]
              lg:pl-10
            "
          >
            <p
              className="
                text-base
                leading-8
                text-[color:var(--muted)]

                sm:text-lg
                sm:leading-9
              "
            >
              Transformo controles manuais,
              dados dispersos e tarefas
              repetitivas em sistemas,
              automações e experiências
              digitais aplicáveis à rotina da
              empresa.
            </p>

            <div
              className="
                mt-6
                flex flex-wrap
                gap-x-7
                gap-y-3
              "
            >
              <span className="tech-label">
                Sistemas
              </span>

              <span className="tech-label">
                Dados
              </span>

              <span className="tech-label">
                Visão
              </span>

              <span className="tech-label">
                Web
              </span>
            </div>
          </div>
        </motion.div>

        {/* =====================================================
            SELETOR E SOLUÇÃO PRINCIPAL
            ===================================================== */}

        <div
          className="
            mt-12
            grid
            gap-6

            lg:mt-16
            lg:grid-cols-[minmax(270px,0.34fr)_minmax(0,0.66fr)]
            lg:gap-8
          "
        >
          {/* Seletor */}
          <motion.div
            initial={{
              opacity: 0,
              x: -24,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              margin: "-80px",
            }}
            transition={{
              ...revealTransition,
              delay: 0.08,
            }}
            className="
              relative
              overflow-hidden

              rounded-[2rem]
              border
              border-[color:var(--line)]

              bg-[color:var(--panel)]
              p-3

              backdrop-blur-xl

              lg:p-4
            "
          >
            <div
              className="
                mb-3
                flex items-center
                justify-between
                gap-4

                px-3 py-2
              "
            >
              <span
                className="
                  font-mono
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-[color:var(--muted)]
                "
              >
                Selecione uma frente
              </span>

              <span
                className="
                  font-mono
                  text-[9px]
                  font-semibold
                  tracking-[0.16em]
                  text-[color:var(--accent)]
                "
              >
                {String(
                  activeServiceIndex + 1
                ).padStart(2, "0")}
                /
                {String(
                  commercialServices.length
                ).padStart(2, "0")}
              </span>
            </div>

            <div
              className="
                grid gap-2
              "
            >
              {commercialServices.map(
                (service, index) => {
                  const Icon =
                    serviceIcons[
                      service.id
                    ];

                  const meta =
                    serviceMeta[
                      service.id
                    ];

                  const isActive =
                    index ===
                    activeServiceIndex;

                  return (
                    <button
                      key={service.id}
                      type="button"
                      aria-pressed={
                        isActive
                      }
                      onClick={() =>
                        setActiveServiceIndex(
                          index
                        )
                      }
                      onFocus={() =>
                        setActiveServiceIndex(
                          index
                        )
                      }
                      className={`
                        group
                        relative
                        overflow-hidden

                        rounded-[1.4rem]
                        border

                        p-4
                        text-left

                        transition-all
                        duration-300

                        ${
                          isActive
                            ? `
                              border-[color:var(--accent)]
                              bg-[color:var(--panel-raised)]
                              shadow-[0_16px_44px_var(--shadow)]
                            `
                            : `
                              border-transparent
                              bg-transparent
                              hover:border-[color:var(--line)]
                              hover:bg-[color:var(--panel-strong)]
                            `
                        }
                      `}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="active-service-background"
                          className="
                            pointer-events-none
                            absolute inset-0

                            bg-[linear-gradient(115deg,color-mix(in_srgb,var(--accent)_9%,transparent),transparent_58%)]
                          "
                          transition={{
                            type: "spring",
                            stiffness: 240,
                            damping: 28,
                          }}
                        />
                      )}

                      <div
                        className="
                          relative z-10
                          flex items-center
                          gap-4
                        "
                      >
                        <span
                          className={`
                            grid h-11 w-11
                            shrink-0
                            place-items-center

                            rounded-[1rem]
                            border

                            transition

                            ${
                              isActive
                                ? `
                                  border-[color:var(--accent)]/55
                                  bg-[color:var(--accent)]/10
                                  text-[color:var(--accent)]
                                `
                                : `
                                  border-[color:var(--line)]
                                  bg-[color:var(--bg-deep)]/45
                                  text-[color:var(--muted)]
                                  group-hover:text-[color:var(--accent)]
                                `
                            }
                          `}
                        >
                          <Icon
                            size={19}
                            strokeWidth={2}
                          />
                        </span>

                        <span className="min-w-0 flex-1">
                          <span
                            className={`
                              block
                              font-mono
                              text-[8px]
                              font-semibold
                              uppercase
                              tracking-[0.18em]

                              ${
                                isActive
                                  ? `
                                    text-[color:var(--accent)]
                                  `
                                  : `
                                    text-[color:var(--subtle)]
                                  `
                              }
                            `}
                          >
                            {meta.code}
                          </span>

                          <span
                            className="
                              mt-1.5 block
                              text-sm
                              font-bold
                              leading-5
                              tracking-[-0.02em]
                              text-[color:var(--text)]
                            "
                          >
                            {service.title}
                          </span>
                        </span>

                        <ArrowRight
                          size={16}
                          strokeWidth={2.2}
                          className={`
                            shrink-0
                            transition-all

                            ${
                              isActive
                                ? `
                                  translate-x-0
                                  text-[color:var(--accent)]
                                `
                                : `
                                  -translate-x-1
                                  text-[color:var(--subtle)]
                                  opacity-0
                                  group-hover:translate-x-0
                                  group-hover:opacity-100
                                `
                            }
                          `}
                        />
                      </div>
                    </button>
                  );
                }
              )}
            </div>
          </motion.div>

          {/* Solução ativa */}
          <motion.div
            initial={{
              opacity: 0,
              x: 24,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              margin: "-80px",
            }}
            transition={{
              ...revealTransition,
              delay: 0.14,
            }}
            className="
              relative
              min-h-[620px]
              overflow-hidden

              rounded-[2.4rem]
              border
              border-[color:var(--line-strong)]

              bg-[color:var(--panel-strong)]

              shadow-[0_32px_100px_var(--shadow-deep)]
            "
          >
            <div
              aria-hidden="true"
              className="
                soft-grid
                pointer-events-none
                absolute inset-0
                opacity-20
              "
            />

            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                right-[-10rem]
                top-[-10rem]

                h-[30rem]
                w-[30rem]

                rounded-full
                bg-[color:var(--accent)]/[0.13]
                blur-[110px]
              "
            />

            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                bottom-[-12rem]
                left-[-8rem]

                h-[28rem]
                w-[28rem]

                rounded-full
                bg-[color:var(--accent-2)]/[0.1]
                blur-[120px]
              "
            />

            <AnimatePresence mode="wait">
              <motion.article
                key={activeService.id}
                initial={
                  shouldReduceMotion
                    ? {
                        opacity: 0,
                      }
                    : {
                        opacity: 0,
                        y: 18,
                        filter:
                          "blur(8px)",
                      }
                }
                animate={{
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                }}
                exit={
                  shouldReduceMotion
                    ? {
                        opacity: 0,
                      }
                    : {
                        opacity: 0,
                        y: -12,
                        filter:
                          "blur(6px)",
                      }
                }
                transition={{
                  duration: 0.28,
                  ease: "easeOut",
                }}
                className="
                  relative z-10
                  flex min-h-[620px]
                  flex-col
                  p-6

                  sm:p-8
                  lg:p-10
                  xl:p-12
                "
              >
                {/* Cabeçalho */}
                <div
                  className="
                    flex items-start
                    justify-between
                    gap-6
                  "
                >
                  <div
                    className="
                      grid h-16 w-16
                      place-items-center

                      rounded-[1.4rem]
                      border
                      border-[color:var(--accent)]/55

                      bg-[color:var(--accent)]/10
                      text-[color:var(--accent)]

                      shadow-[0_0_36px_color-mix(in_srgb,var(--accent)_16%,transparent)]
                    "
                  >
                    <ActiveServiceIcon
                      size={29}
                      strokeWidth={1.8}
                    />
                  </div>

                  <span
                    className="
                      font-display
                      text-5xl
                      font-bold
                      tracking-[-0.08em]
                      text-[color:var(--text)]/[0.08]

                      sm:text-7xl
                    "
                  >
                    {String(
                      activeServiceIndex +
                        1
                    ).padStart(2, "0")}
                  </span>
                </div>

                {/* Título */}
                <div className="mt-10">
                  <div
                    className="
                      flex flex-wrap
                      items-center
                      gap-3
                    "
                  >
                    <span className="tech-label">
                      {activeMeta.code}
                    </span>

                    <span
                      aria-hidden="true"
                      className="
                        h-px w-10
                        bg-[color:var(--line-strong)]
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
                      {activeMeta.label}
                    </span>
                  </div>

                  <h3
                    className="
                      mt-5
                      max-w-[16ch]

                      font-display
                      text-4xl
                      font-bold
                      leading-[0.98]
                      tracking-[-0.06em]
                      text-[color:var(--text)]

                      sm:text-5xl
                      xl:text-6xl
                    "
                  >
                    {activeService.title}
                  </h3>

                  <p
                    className="
                      mt-6
                      max-w-3xl

                      text-base
                      leading-8
                      text-[color:var(--muted)]

                      sm:text-lg
                      sm:leading-9
                    "
                  >
                    {
                      activeService.description
                    }
                  </p>
                </div>

                {/* Entregáveis */}
                <div
                  className="
                    mt-10
                    grid gap-px
                    overflow-hidden

                    rounded-[1.5rem]
                    border
                    border-[color:var(--line)]

                    bg-[color:var(--line-soft)]

                    sm:grid-cols-2
                  "
                >
                  {activeService.deliverables.map(
                    (
                      deliverable,
                      index
                    ) => (
                      <motion.div
                        key={
                          deliverable
                        }
                        initial={{
                          opacity: 0,
                          y: 10,
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                        }}
                        transition={{
                          duration: 0.3,
                          delay:
                            index *
                            0.045,
                        }}
                        className="
                          flex min-h-20
                          items-center
                          gap-4

                          bg-[color:var(--panel)]
                          p-4

                          sm:p-5
                        "
                      >
                        <span
                          className="
                            grid h-8 w-8
                            shrink-0
                            place-items-center

                            rounded-full
                            border
                            border-[color:var(--accent)]/35

                            bg-[color:var(--accent)]/10
                            text-[color:var(--accent)]
                          "
                        >
                          <Check
                            size={14}
                            strokeWidth={2.5}
                          />
                        </span>

                        <span
                          className="
                            text-sm
                            font-semibold
                            leading-6
                            text-[color:var(--text)]
                          "
                        >
                          {deliverable}
                        </span>
                      </motion.div>
                    )
                  )}
                </div>

                {/* Rodapé */}
                <div
                  className="
                    mt-auto
                    pt-10
                  "
                >
                  <div
                    className="
                      flex flex-col
                      gap-6

                      border-t
                      border-[color:var(--line)]

                      pt-7

                      sm:flex-row
                      sm:items-end
                      sm:justify-between
                    "
                  >
                    <div>
                      <p
                        className="
                          font-mono
                          text-[9px]
                          font-semibold
                          uppercase
                          tracking-[0.2em]
                          text-[color:var(--subtle)]
                        "
                      >
                        Resultado esperado
                      </p>

                      <p
                        className="
                          mt-3
                          max-w-xl

                          text-sm
                          font-semibold
                          leading-7
                          text-[color:var(--text-soft)]
                        "
                      >
                        {activeMeta.outcome}
                      </p>

                      <div
                        className="
                          mt-5
                          flex flex-wrap
                          gap-2
                        "
                      >
                        {activeService.tags.map(
                          (tag) => (
                            <span
                              key={tag}
                              className="
                                rounded-full
                                border
                                border-[color:var(--line)]

                                bg-[color:var(--bg-deep)]/25
                                px-3 py-1.5

                                font-mono
                                text-[8px]
                                font-semibold
                                uppercase
                                tracking-[0.14em]
                                text-[color:var(--muted)]
                              "
                            >
                              {tag}
                            </span>
                          )
                        )}
                      </div>
                    </div>

                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="
                        group
                        inline-flex
                        min-h-12
                        shrink-0
                        items-center
                        justify-center
                        gap-3

                        rounded-full
                        border
                        border-[color:var(--line-strong)]

                        bg-[color:var(--panel-raised)]
                        px-5

                        text-[10px]
                        font-extrabold
                        uppercase
                        tracking-[0.14em]
                        text-[color:var(--text)]

                        transition
                        hover:border-[color:var(--accent)]
                        hover:bg-[color:var(--accent)]
                        hover:text-[color:var(--ink)]
                      "
                    >
                      Avaliar solução

                      <ArrowUpRight
                        size={16}
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
                  </div>
                </div>
              </motion.article>
            </AnimatePresence>
          </motion.div>
        </div>

        {/* =====================================================
            IA APLICADA
            ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            margin: "-80px",
          }}
          transition={{
            ...revealTransition,
            delay: 0.08,
          }}
          className="
            relative
            mt-20
            overflow-hidden

            border-y
            border-[color:var(--line)]

            py-14

            sm:py-16
            lg:mt-28
            lg:py-20
          "
        >
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              left-[22%]
              top-1/2

              h-[26rem]
              w-[26rem]

              -translate-y-1/2
              rounded-full

              bg-[color:var(--accent)]/[0.08]
              blur-[120px]
            "
          />

          <div
            className="
              relative z-10
              grid gap-14

              lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]
              lg:items-start
              lg:gap-20
            "
          >
            <div
              className="
                lg:sticky
                lg:top-32
              "
            >
              <div
                className="
                  grid h-16 w-16
                  place-items-center

                  rounded-[1.4rem]
                  border
                  border-[color:var(--accent)]/45

                  bg-[color:var(--accent)]/10
                  text-[color:var(--accent)]

                  shadow-[0_0_38px_color-mix(in_srgb,var(--accent)_16%,transparent)]
                "
              >
                <Bot
                  size={30}
                  strokeWidth={1.8}
                />
              </div>

              <p
                className="
                  mt-8
                  tech-label
                "
              >
                Artificial Intelligence
              </p>

              <h3
                className="
                  mt-5
                  max-w-[12ch]

                  font-display
                  text-4xl
                  font-bold
                  leading-[0.98]
                  tracking-[-0.06em]
                  text-[color:var(--text)]

                  sm:text-5xl
                  lg:text-6xl
                "
              >
                IA entra onde existe
                <span className="text-gradient">
                  {" "}
                  impacto real.
                </span>
              </h3>

              <p
                className="
                  mt-7
                  max-w-xl

                  text-base
                  leading-8
                  text-[color:var(--muted)]

                  sm:text-lg
                  sm:leading-9
                "
              >
                A tecnologia não é adicionada
                apenas para tornar o projeto
                mais moderno. Primeiro é
                identificado onde ela pode
                reduzir esforço manual,
                acelerar análises ou apoiar uma
                decisão.
              </p>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="
                  primary-action
                  group
                  mt-8
                "
              >
                <MessageCircle
                  size={17}
                  strokeWidth={2.2}
                />

                Avaliar meu processo

                <ArrowRight
                  size={16}
                  strokeWidth={2.4}
                  className="
                    transition-transform
                    group-hover:translate-x-1
                  "
                />
              </a>
            </div>

            {/* Aplicações */}
            <div>
              <div
                className="
                  mb-6
                  flex items-center
                  justify-between
                  gap-5

                  border-b
                  border-[color:var(--line-soft)]

                  pb-5
                "
              >
                <p
                  className="
                    font-mono
                    text-[9px]
                    font-semibold
                    uppercase
                    tracking-[0.2em]
                    text-[color:var(--muted)]
                  "
                >
                  Possibilidades de aplicação
                </p>

                <span
                  className="
                    font-display
                    text-3xl
                    font-bold
                    tracking-[-0.07em]
                    text-[color:var(--text)]/[0.12]
                  "
                >
                  {String(
                    aiApplications.length
                  ).padStart(2, "0")}
                </span>
              </div>

              <div
                className="
                  divide-y
                  divide-[color:var(--line-soft)]
                "
              >
                {aiApplications.map(
                  (
                    application,
                    index
                  ) => (
                    <motion.div
                      key={
                        application
                      }
                      initial={{
                        opacity: 0,
                        x: 18,
                      }}
                      whileInView={{
                        opacity: 1,
                        x: 0,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        duration: 0.38,
                        delay:
                          index *
                          0.035,
                      }}
                      className="
                        group
                        flex min-h-20
                        items-center
                        gap-5

                        py-4

                        transition
                        hover:pl-2
                      "
                    >
                      <span
                        className="
                          font-mono
                          text-[9px]
                          font-semibold
                          tracking-[0.18em]
                          text-[color:var(--accent)]
                        "
                      >
                        {String(
                          index + 1
                        ).padStart(
                          2,
                          "0"
                        )}
                      </span>

                      <span
                        aria-hidden="true"
                        className="
                          h-px w-8
                          shrink-0

                          bg-[color:var(--line-strong)]

                          transition-all
                          group-hover:w-14
                          group-hover:bg-[color:var(--accent)]
                        "
                      />

                      <span
                        className="
                          flex-1

                          text-base
                          font-bold
                          tracking-[-0.02em]
                          text-[color:var(--text)]

                          sm:text-lg
                        "
                      >
                        {application}
                      </span>

                      <ArrowUpRight
                        size={17}
                        strokeWidth={2}
                        className="
                          shrink-0
                          text-[color:var(--subtle)]

                          opacity-0
                          transition-all

                          group-hover:
                          -translate-y-0.5

                          group-hover:
                          translate-x-0.5

                          group-hover:
                          text-[color:var(--accent)]

                          group-hover:
                          opacity-100
                        "
                      />
                    </motion.div>
                  )
                )}
              </div>
            </div>
          </div>
        </motion.div>

        {/* =====================================================
            PROCESSO
            ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 28,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            margin: "-80px",
          }}
          transition={
            revealTransition
          }
          className="
            mt-20

            lg:mt-28
          "
        >
          <div
            className="
              grid gap-8

              border-b
              border-[color:var(--line)]

              pb-9

              lg:grid-cols-[minmax(0,0.8fr)_minmax(320px,0.45fr)]
              lg:items-end
              lg:justify-between
            "
          >
            <div>
              <p className="tech-label">
                Processo / 04 etapas
              </p>

              <h3
                className="
                  mt-4

                  font-display
                  text-4xl
                  font-bold
                  leading-none
                  tracking-[-0.06em]
                  text-[color:var(--text)]

                  sm:text-5xl
                "
              >
                Do problema à solução.
              </h3>
            </div>

            <p
              className="
                text-sm
                leading-7
                text-[color:var(--muted)]
              "
            >
              Não é necessário chegar com a
              resposta pronta. O primeiro passo
              é entender como o processo
              funciona hoje e o que precisa
              melhorar.
            </p>
          </div>

          <div
            className="
              relative
              mt-10

              grid gap-8

              md:grid-cols-2
              xl:grid-cols-4
              xl:gap-0
            "
          >
            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                left-0 right-0
                top-[2rem]

                hidden h-px

                bg-gradient-to-r
                from-[color:var(--accent)]
                via-[color:var(--line-strong)]
                to-[color:var(--accent-2)]

                xl:block
              "
            />

            {serviceProcess.map(
              (step, index) => (
                <motion.article
                  key={step.number}
                  initial={{
                    opacity: 0,
                    y: 18,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.42,
                    delay:
                      index * 0.07,
                  }}
                  className="
                    relative

                    xl:px-6
                    xl:first:pl-0
                    xl:last:pr-0
                  "
                >
                  <div
                    className="
                      relative z-10
                      grid h-16 w-16
                      place-items-center

                      rounded-full
                      border
                      border-[color:var(--accent)]

                      bg-[color:var(--bg-deep)]
                      text-[color:var(--accent)]

                      shadow-[0_0_28px_color-mix(in_srgb,var(--accent)_16%,transparent)]
                    "
                  >
                    <span
                      className="
                        font-mono
                        text-[10px]
                        font-semibold
                        tracking-[0.16em]
                      "
                    >
                      {step.number}
                    </span>
                  </div>

                  <h4
                    className="
                      mt-7
                      text-xl
                      font-bold
                      tracking-[-0.035em]
                      text-[color:var(--text)]
                    "
                  >
                    {step.title}
                  </h4>

                  <p
                    className="
                      mt-4
                      max-w-xs

                      text-sm
                      leading-7
                      text-[color:var(--muted)]
                    "
                  >
                    {step.description}
                  </p>
                </motion.article>
              )
            )}
          </div>
        </motion.div>

        {/* =====================================================
            CTA FINAL
            ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 28,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            margin: "-80px",
          }}
          transition={
            revealTransition
          }
          className="
            relative
            mt-20
            overflow-hidden

            rounded-[2.5rem]
            border
            border-[color:var(--line-strong)]

            bg-[color:var(--panel-strong)]
            p-7

            shadow-[0_28px_90px_var(--shadow-deep)]

            sm:p-10
            lg:mt-28
            lg:p-14
          "
        >
          <div
            aria-hidden="true"
            className="
              soft-grid
              pointer-events-none
              absolute inset-0
              opacity-20
            "
          />

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              right-[-8rem]
              top-1/2

              h-[28rem]
              w-[28rem]

              -translate-y-1/2
              rounded-full

              bg-[color:var(--accent)]/[0.13]
              blur-[100px]
            "
          />

          <div
            className="
              relative z-10
              grid gap-10

              lg:grid-cols-[minmax(0,1fr)_auto]
              lg:items-end
            "
          >
            <div>
              <p className="tech-label">
                Starting point
              </p>

              <h3
                className="
                  mt-5
                  max-w-[14ch]

                  font-display
                  text-4xl
                  font-bold
                  leading-[0.98]
                  tracking-[-0.06em]
                  text-[color:var(--text)]

                  sm:text-5xl
                  lg:text-6xl
                "
              >
                Mostre o processo.
                <span className="text-gradient">
                  {" "}
                  A solução começa daí.
                </span>
              </h3>
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="
                primary-action
                group
                min-w-[240px]
              "
            >
              <MessageCircle
                size={18}
                strokeWidth={2.2}
              />

              Iniciar conversa

              <ArrowRight
                size={17}
                strokeWidth={2.4}
                className="
                  transition-transform
                  group-hover:translate-x-1
                "
              />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}