// src\components\sections\AboutMe.tsx
"use client";

import { aboutProfile } from "@/data/about";
import { stackGroups } from "@/data/stack";

import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";

import type { LucideIcon } from "lucide-react";

import {
  ArrowRight,
  BriefcaseBusiness,
  BrainCircuit,
  Check,
  CircuitBoard,
  Code2,
  Cpu,
  Database,
  Factory,
  GraduationCap,
  Layers3,
  MapPin,
  MonitorCog,
} from "lucide-react";

import { useState } from "react";

/*
 * ============================================================
 * ÍCONES
 * ============================================================
 */

const technicalBaseIcons: LucideIcon[] = [
  CircuitBoard,
  Code2,
  BrainCircuit,
  Factory,
];

const stackIcons: LucideIcon[] = [
  MonitorCog,
  Database,
  BrainCircuit,
  Layers3,
];

/*
 * ============================================================
 * ANIMAÇÕES
 * ============================================================
 */

const revealTransition = {
  duration: 0.58,
  ease: [0.22, 1, 0.36, 1] as const,
};

export default function AboutMe() {
  const shouldReduceMotion =
    useReducedMotion();

  const [
    activeStackIndex,
    setActiveStackIndex,
  ] = useState(0);

  const [
    activeTechnologyIndex,
    setActiveTechnologyIndex,
  ] = useState(0);

  const activeStackGroup =
    stackGroups[activeStackIndex] ??
    stackGroups[0];

  const activeTechnology =
    activeStackGroup?.technologies[
      activeTechnologyIndex
    ] ??
    activeStackGroup?.technologies[0];

  function selectStackGroup(
    index: number
  ) {
    setActiveStackIndex(index);
    setActiveTechnologyIndex(0);
  }

  return (
    <section
      id="sobre"
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
            right-[-0.04em]
            top-[0.06em]
            opacity-55
          "
        >
          03
        </div>

        <div
          className="
            soft-dots
            absolute
            left-[-8rem]
            top-[8%]

            h-[34rem]
            w-[34rem]

            opacity-35
          "
        />

        <div
          className="
            absolute
            left-[-17rem]
            top-[30%]

            h-[40rem]
            w-[40rem]

            rounded-full
            bg-[color:var(--accent-2)]/10
            blur-[155px]
          "
        />

        <div
          className="
            absolute
            right-[-18rem]
            top-[62%]

            h-[44rem]
            w-[44rem]

            rounded-full
            bg-[color:var(--accent)]/10
            blur-[165px]
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
            y: 26,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            margin: "-80px",
          }}
          transition={revealTransition}
          className="
            grid gap-10

            border-b
            border-[color:var(--line-soft)]

            pb-12

            lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)]
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
                Profile / 03
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
              Entre o problema físico e a
              <span className="text-gradient">
                {" "}
                solução digital.
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
              Minha trajetória conecta
              eletrônica, operação industrial,
              desenvolvimento de sistemas,
              automação e inteligência
              artificial.
            </p>

            <div
              className="
                mt-7
                grid grid-cols-3
                gap-3
              "
            >
              <div>
                <span
                  className="
                    block
                    font-display
                    text-3xl
                    font-bold
                    tracking-[-0.07em]
                    text-[color:var(--text)]
                  "
                >
                  {String(
                    aboutProfile.experiences
                      .length
                  ).padStart(2, "0")}
                </span>

                <span
                  className="
                    mt-1 block
                    font-mono
                    text-[8px]
                    font-semibold
                    uppercase
                    tracking-[0.17em]
                    text-[color:var(--muted)]
                  "
                >
                  Experiências
                </span>
              </div>

              <div>
                <span
                  className="
                    block
                    font-display
                    text-3xl
                    font-bold
                    tracking-[-0.07em]
                    text-[color:var(--text)]
                  "
                >
                  {String(
                    aboutProfile.technicalBase
                      .length
                  ).padStart(2, "0")}
                </span>

                <span
                  className="
                    mt-1 block
                    font-mono
                    text-[8px]
                    font-semibold
                    uppercase
                    tracking-[0.17em]
                    text-[color:var(--muted)]
                  "
                >
                  Bases técnicas
                </span>
              </div>

              <div>
                <span
                  className="
                    block
                    font-display
                    text-3xl
                    font-bold
                    tracking-[-0.07em]
                    text-[color:var(--text)]
                  "
                >
                  {String(
                    stackGroups.length
                  ).padStart(2, "0")}
                </span>

                <span
                  className="
                    mt-1 block
                    font-mono
                    text-[8px]
                    font-semibold
                    uppercase
                    tracking-[0.17em]
                    text-[color:var(--muted)]
                  "
                >
                  Grupos de stack
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* =====================================================
            PERFIL PRINCIPAL
            ===================================================== */}

        <div
          className="
            mt-12
            grid gap-8

            lg:mt-16
            lg:grid-cols-[minmax(330px,0.42fr)_minmax(0,0.58fr)]
            lg:items-stretch
          "
        >
          {/* Retrato */}
          <motion.div
            initial={{
              opacity: 0,
              x: -26,
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
              min-h-[620px]
              overflow-hidden

              rounded-[2.5rem]
              border
              border-[color:var(--line-strong)]

              bg-[color:var(--panel-strong)]

              shadow-[0_34px_100px_var(--shadow-deep)]
            "
          >
            <img
              src={aboutProfile.image}
              alt={aboutProfile.name}
              className="
                absolute inset-0
                h-full w-full
                object-cover
                object-[center_38%]
              "
            />

            <div
              className="
                absolute inset-0

                bg-gradient-to-t
                from-[color:var(--bg-deepest)]
                via-[color:var(--bg-deepest)]/20
                to-transparent
              "
            />

            <div
              className="
                absolute inset-0

                bg-gradient-to-r
                from-[color:var(--bg-deepest)]/30
                via-transparent
                to-transparent
              "
            />

            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute inset-5

                rounded-[2rem]
                border
                border-white/10
              "
            />

            <div
              className="
                absolute
                left-6 top-6

                flex items-center
                gap-3

                rounded-full
                border
                border-white/15

                bg-black/25
                px-4 py-2

                backdrop-blur-xl
              "
            >
              <span
                className="
                  h-2 w-2
                  rounded-full
                  bg-[color:var(--accent)]
                  shadow-[0_0_14px_var(--accent)]
                "
              />

              <span
                className="
                  font-mono
                  text-[8px]
                  font-semibold
                  uppercase
                  tracking-[0.19em]
                  text-white/75
                "
              >
                Profile active
              </span>
            </div>

            <div
              className="
                absolute
                bottom-0 left-0 right-0

                p-7

                sm:p-8
              "
            >
              <div
                className="
                  flex items-center
                  gap-3
                "
              >
                <MapPin
                  size={16}
                  strokeWidth={2}
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
                    tracking-[0.17em]
                    text-white/65
                  "
                >
                  Localização
                </span>
              </div>

              <p
                className="
                  mt-3
                  font-display
                  text-2xl
                  font-bold
                  tracking-[-0.04em]
                  text-white
                "
              >
                {aboutProfile.location}
              </p>

              <div
                className="
                  mt-6
                  flex items-center
                  gap-3

                  border-t
                  border-white/10

                  pt-5
                "
              >
                <span
                  className="
                    font-mono
                    text-[8px]
                    font-semibold
                    uppercase
                    tracking-[0.18em]
                    text-white/45
                  "
                >
                  Hardware
                </span>

                <ArrowRight
                  size={13}
                  className="
                    text-[color:var(--accent)]
                  "
                />

                <span
                  className="
                    font-mono
                    text-[8px]
                    font-semibold
                    uppercase
                    tracking-[0.18em]
                    text-white/45
                  "
                >
                  Software
                </span>

                <ArrowRight
                  size={13}
                  className="
                    text-[color:var(--accent-2)]
                  "
                />

                <span
                  className="
                    font-mono
                    text-[8px]
                    font-semibold
                    uppercase
                    tracking-[0.18em]
                    text-white/45
                  "
                >
                  IA
                </span>
              </div>
            </div>
          </motion.div>

          {/* Identidade profissional */}
          <motion.div
            initial={{
              opacity: 0,
              x: 26,
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
              overflow-hidden

              rounded-[2.5rem]
              border
              border-[color:var(--line)]

              bg-[color:var(--panel)]

              p-7
              backdrop-blur-xl

              sm:p-9
              lg:p-11
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
                top-[-8rem]

                h-[26rem]
                w-[26rem]

                rounded-full
                bg-[color:var(--accent)]/10
                blur-[100px]
              "
            />

            <div className="relative z-10">
              <p className="tech-label">
                About / Identity
              </p>

              <h3
                className="
                  mt-6
                  max-w-[14ch]

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
                {aboutProfile.name}
              </h3>

              <p
                className="
                  mt-6
                  max-w-3xl

                  font-mono
                  text-[10px]
                  font-semibold
                  uppercase
                  leading-6
                  tracking-[0.16em]
                  text-[color:var(--accent)]
                "
              >
                {aboutProfile.role}
              </p>

              <p
                className="
                  mt-8
                  max-w-3xl

                  text-base
                  leading-8
                  text-[color:var(--muted)]

                  sm:text-lg
                  sm:leading-9
                "
              >
                {aboutProfile.summary}
              </p>

              {/* Entregas */}
              <div
                className="
                  mt-10
                  border-t
                  border-[color:var(--line)]
                  pt-8
                "
              >
                <div
                  className="
                    mb-6
                    flex items-center
                    justify-between
                    gap-5
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
                    O que entrego
                  </p>

                  <span
                    className="
                      font-display
                      text-3xl
                      font-bold
                      tracking-[-0.07em]
                    "
                    style={{
                      color:
                        "color-mix(in srgb, var(--text) 12%, transparent)",
                    }}
                  >
                    {String(
                      aboutProfile.deliveries
                        .length
                    ).padStart(2, "0")}
                  </span>
                </div>

                <div
                  className="
                    divide-y
                    divide-[color:var(--line-soft)]
                  "
                >
                  {aboutProfile.deliveries.map(
                    (delivery, index) => (
                      <motion.div
                        key={delivery}
                        initial={{
                          opacity: 0,
                          x: 14,
                        }}
                        whileInView={{
                          opacity: 1,
                          x: 0,
                        }}
                        viewport={{
                          once: true,
                        }}
                        transition={{
                          duration: 0.36,
                          delay:
                            index * 0.045,
                        }}
                        className="
                          group
                          flex items-start
                          gap-4

                          py-4
                        "
                      >
                        <span
                          className="
                            mt-0.5
                            grid h-7 w-7
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
                            size={13}
                            strokeWidth={2.5}
                          />
                        </span>

                        <p
                          className="
                            text-sm
                            font-semibold
                            leading-7
                            text-[color:var(--text-soft)]
                          "
                        >
                          {delivery}
                        </p>
                      </motion.div>
                    )
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* =====================================================
            FORMAÇÃO
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
          transition={revealTransition}
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

              lg:grid-cols-[minmax(0,0.75fr)_minmax(320px,0.45fr)]
              lg:items-end
              lg:justify-between
            "
          >
            <div>
              <p className="tech-label">
                Formação / Education
              </p>

              <h3
                className="
                  mt-4

                  font-display
                  text-4xl
                  font-bold
                  tracking-[-0.06em]
                  text-[color:var(--text)]

                  sm:text-5xl
                "
              >
                Formação que conecta duas áreas.
              </h3>
            </div>

            <p
              className="
                text-sm
                leading-7
                text-[color:var(--muted)]
              "
            >
              Eletrônica fornece a leitura do
              problema físico. Desenvolvimento
              de sistemas fornece os recursos
              para transformá-lo em uma solução
              digital.
            </p>
          </div>

          <div
            className="
              mt-8
              divide-y
              divide-[color:var(--line)]

              border-y
              border-[color:var(--line)]
            "
          >
            {aboutProfile.education.map(
              (item, index) => (
                <motion.article
                  key={item.title}
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
                    delay: index * 0.07,
                  }}
                  className="
                    group
                    grid gap-6
                    py-7

                    transition

                    sm:grid-cols-[72px_minmax(0,1fr)_auto]
                    sm:items-center

                    lg:py-9
                  "
                >
                  <div
                    className="
                      grid h-14 w-14
                      place-items-center

                      rounded-[1.1rem]
                      border
                      border-[color:var(--line)]

                      bg-[color:var(--panel)]
                      text-[color:var(--accent)]

                      transition
                      group-hover:border-[color:var(--accent)]
                    "
                  >
                    <GraduationCap
                      size={23}
                      strokeWidth={1.9}
                    />
                  </div>

                  <div>
                    <p
                      className="
                        font-mono
                        text-[8px]
                        font-semibold
                        uppercase
                        tracking-[0.19em]
                        text-[color:var(--accent)]
                      "
                    >
                      Education /
                      {String(
                        index + 1
                      ).padStart(2, "0")}
                    </p>

                    <h4
                      className="
                        mt-3
                        text-xl
                        font-bold
                        tracking-[-0.035em]
                        text-[color:var(--text)]

                        sm:text-2xl
                      "
                    >
                      {item.title}
                    </h4>

                    <p
                      className="
                        mt-2
                        text-sm
                        font-semibold
                        text-[color:var(--muted)]
                      "
                    >
                      {item.institution}
                    </p>

                    <p
                      className="
                        mt-4
                        max-w-3xl

                        text-sm
                        leading-7
                        text-[color:var(--muted)]
                      "
                    >
                      {item.description}
                    </p>
                  </div>

                  <span
                    className="
                      w-fit
                      rounded-full
                      border
                      border-[color:var(--line)]

                      bg-[color:var(--panel)]
                      px-4 py-2

                      font-mono
                      text-[8px]
                      font-semibold
                      uppercase
                      tracking-[0.16em]
                      text-[color:var(--text-soft)]
                    "
                  >
                    {item.period}
                  </span>
                </motion.article>
              )
            )}
          </div>
        </motion.div>

        {/* =====================================================
            BASE TÉCNICA
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
          transition={revealTransition}
          className="
            mt-20

            lg:mt-28
          "
        >
          <div
            className="
              mb-10
              max-w-4xl
            "
          >
            <p className="tech-label">
              Technical foundation
            </p>

            <h3
              className="
                mt-5

                font-display
                text-4xl
                font-bold
                leading-[1]
                tracking-[-0.06em]
                text-[color:var(--text)]

                sm:text-5xl
              "
            >
              Uma base técnica,
              <span className="text-gradient">
                {" "}
                quatro perspectivas.
              </span>
            </h3>
          </div>

          <div
            className="
              grid gap-px
              overflow-hidden

              rounded-[2rem]
              border
              border-[color:var(--line)]

              bg-[color:var(--line-soft)]

              md:grid-cols-2
              xl:grid-cols-4
            "
          >
            {aboutProfile.technicalBase.map(
              (item, index) => {
                const Icon =
                  technicalBaseIcons[
                    index
                  ] ?? Cpu;

                return (
                  <motion.article
                    key={item.title}
                    initial={{
                      opacity: 0,
                      y: 20,
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
                        index * 0.065,
                    }}
                    className="
                      group
                      relative
                      min-h-[310px]
                      overflow-hidden

                      bg-[color:var(--panel)]
                      p-6

                      transition
                      duration-300

                      hover:bg-[color:var(--panel-strong)]

                      sm:p-7
                    "
                  >
                    <div
                      aria-hidden="true"
                      className="
                        pointer-events-none
                        absolute
                        right-[-5rem]
                        top-[-5rem]

                        h-48 w-48

                        rounded-full
                        bg-[color:var(--accent)]/10
                        blur-[65px]

                        opacity-0
                        transition-opacity
                        duration-300

                        group-hover:opacity-100
                      "
                    />

                    <div
                      className="
                        relative z-10
                        flex h-full
                        flex-col
                      "
                    >
                      <div
                        className="
                          flex items-start
                          justify-between
                          gap-5
                        "
                      >
                        <div
                          className="
                            grid h-14 w-14
                            place-items-center

                            rounded-[1.2rem]
                            border
                            border-[color:var(--line)]

                            bg-[color:var(--bg-deep)]/50
                            text-[color:var(--accent)]

                            transition
                            group-hover:border-[color:var(--accent)]
                          "
                        >
                          <Icon
                            size={23}
                            strokeWidth={1.8}
                          />
                        </div>

                        <span
                          className="
                            font-display
                            text-4xl
                            font-bold
                            tracking-[-0.08em]
                          "
                          style={{
                            color:
                              "color-mix(in srgb, var(--text) 8%, transparent)",
                          }}
                        >
                          {String(
                            index + 1
                          ).padStart(2, "0")}
                        </span>
                      </div>

                      <div className="mt-auto pt-12">
                        <p
                          className="
                            font-mono
                            text-[8px]
                            font-semibold
                            uppercase
                            tracking-[0.18em]
                            text-[color:var(--accent)]
                          "
                        >
                          Base /
                          {String(
                            index + 1
                          ).padStart(2, "0")}
                        </p>

                        <h4
                          className="
                            mt-3
                            text-xl
                            font-bold
                            tracking-[-0.035em]
                            text-[color:var(--text)]
                          "
                        >
                          {item.title}
                        </h4>

                        <p
                          className="
                            mt-4
                            text-sm
                            leading-7
                            text-[color:var(--muted)]
                          "
                        >
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </motion.article>
                );
              }
            )}
          </div>
        </motion.div>

        {/* =====================================================
            STACK INTERATIVA
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
          transition={revealTransition}
          className="
            relative
            mt-20
            overflow-hidden

            rounded-[2.5rem]
            border
            border-[color:var(--line-strong)]

            bg-[color:var(--panel-strong)]

            shadow-[0_32px_105px_var(--shadow-deep)]

            lg:mt-28
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
              right-[-12rem]
              top-[-12rem]

              h-[34rem]
              w-[34rem]

              rounded-full
              bg-[color:var(--accent)]/10
              blur-[125px]
            "
          />

          <div
            className="
              relative z-10
              p-6

              sm:p-8
              lg:p-11
            "
          >
            <div
              className="
                grid gap-8

                border-b
                border-[color:var(--line)]

                pb-9

                lg:grid-cols-[minmax(0,0.9fr)_minmax(320px,0.55fr)]
                lg:items-end
              "
            >
              <div>
                <p className="tech-label">
                  Stack / Application
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
                  "
                >
                  Tecnologias organizadas pela
                  <span className="text-gradient">
                    {" "}
                    função no sistema.
                  </span>
                </h3>
              </div>

              <p
                className="
                  text-sm
                  leading-7
                  text-[color:var(--muted)]
                "
              >
                A tecnologia não aparece apenas
                como uma lista de ferramentas.
                Cada grupo representa uma função
                dentro das soluções que
                desenvolvo.
              </p>
            </div>

            <div
              className="
                mt-9
                grid gap-6

                lg:grid-cols-[minmax(245px,0.32fr)_minmax(0,0.68fr)]
              "
            >
              {/* Seletor de grupos */}
              <div
                className="
                  rounded-[1.7rem]
                  border
                  border-[color:var(--line)]

                  bg-[color:var(--panel)]
                  p-3
                "
              >
                <div
                  className="
                    mb-2
                    flex items-center
                    justify-between
                    gap-4

                    px-3 py-2
                  "
                >
                  <span
                    className="
                      font-mono
                      text-[8px]
                      font-semibold
                      uppercase
                      tracking-[0.19em]
                      text-[color:var(--muted)]
                    "
                  >
                    Grupos
                  </span>

                  <span
                    className="
                      font-mono
                      text-[8px]
                      font-semibold
                      tracking-[0.16em]
                      text-[color:var(--accent)]
                    "
                  >
                    {String(
                      activeStackIndex + 1
                    ).padStart(2, "0")}
                    /
                    {String(
                      stackGroups.length
                    ).padStart(2, "0")}
                  </span>
                </div>

                <div className="grid gap-2">
                  {stackGroups.map(
                    (group, index) => {
                      const Icon =
                        stackIcons[index] ??
                        Cpu;

                      const isActive =
                        index ===
                        activeStackIndex;

                      return (
                        <button
                          key={group.title}
                          type="button"
                          aria-pressed={
                            isActive
                          }
                          onClick={() =>
                            selectStackGroup(
                              index
                            )
                          }
                          onFocus={() =>
                            selectStackGroup(
                              index
                            )
                          }
                          className={`
                            group
                            relative
                            overflow-hidden

                            rounded-[1.3rem]
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
                              layoutId="active-stack-group"
                              className="
                                pointer-events-none
                                absolute inset-0

                                bg-[linear-gradient(115deg,color-mix(in_srgb,var(--accent)_9%,transparent),transparent_60%)]
                              "
                              transition={{
                                type: "spring",
                                stiffness: 240,
                                damping: 28,
                              }}
                            />
                          )}

                          <span
                            className="
                              relative z-10
                              flex items-center
                              gap-4
                            "
                          >
                            <span
                              className={`
                                grid h-10 w-10
                                shrink-0
                                place-items-center

                                rounded-[0.9rem]
                                border

                                ${
                                  isActive
                                    ? `
                                      border-[color:var(--accent)]/50
                                      bg-[color:var(--accent)]/10
                                      text-[color:var(--accent)]
                                    `
                                    : `
                                      border-[color:var(--line)]
                                      bg-[color:var(--bg-deep)]/30
                                      text-[color:var(--muted)]
                                    `
                                }
                              `}
                            >
                              <Icon
                                size={18}
                                strokeWidth={1.9}
                              />
                            </span>

                            <span
                              className="
                                min-w-0 flex-1
                              "
                            >
                              <span
                                className={`
                                  block
                                  font-mono
                                  text-[7px]
                                  font-semibold
                                  uppercase
                                  tracking-[0.17em]

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
                                Stack /
                                {String(
                                  index + 1
                                ).padStart(
                                  2,
                                  "0"
                                )}
                              </span>

                              <span
                                className="
                                  mt-1.5 block
                                  text-sm
                                  font-bold
                                  leading-5
                                  text-[color:var(--text)]
                                "
                              >
                                {group.title}
                              </span>
                            </span>
                          </span>
                        </button>
                      );
                    }
                  )}
                </div>
              </div>

              {/* Grupo selecionado */}
              <div
                className="
                  relative
                  min-h-[510px]
                  overflow-hidden

                  rounded-[1.8rem]
                  border
                  border-[color:var(--line)]

                  bg-[color:var(--bg-deep)]/35
                  p-6

                  sm:p-8
                "
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={
                      activeStackGroup.title
                    }
                    initial={
                      shouldReduceMotion
                        ? {
                            opacity: 0,
                          }
                        : {
                            opacity: 0,
                            y: 16,
                            filter:
                              "blur(7px)",
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
                            y: -10,
                            filter:
                              "blur(5px)",
                          }
                    }
                    transition={{
                      duration: 0.27,
                      ease: "easeOut",
                    }}
                  >
                    <p className="tech-label">
                      {
                        activeStackGroup.title
                      }
                    </p>

                    <h4
                      className="
                        mt-5
                        max-w-[17ch]

                        font-display
                        text-3xl
                        font-bold
                        leading-[1]
                        tracking-[-0.05em]
                        text-[color:var(--text)]

                        sm:text-4xl
                      "
                    >
                      {
                        activeStackGroup.description
                      }
                    </h4>

                    <div
                      className="
                        mt-8
                        flex flex-wrap
                        gap-2
                      "
                    >
                      {activeStackGroup.technologies.map(
                        (
                          technology,
                          index
                        ) => {
                          const isActive =
                            index ===
                            activeTechnologyIndex;

                          return (
                            <button
                              key={
                                technology.name
                              }
                              type="button"
                              aria-pressed={
                                isActive
                              }
                              onClick={() =>
                                setActiveTechnologyIndex(
                                  index
                                )
                              }
                              className={`
                                flex items-center
                                gap-3

                                rounded-full
                                border

                                px-3 py-2

                                transition-all

                                ${
                                  isActive
                                    ? `
                                      border-[color:var(--accent)]
                                      bg-[color:var(--accent)]/10
                                    `
                                    : `
                                      border-[color:var(--line)]
                                      bg-[color:var(--panel)]
                                      hover:border-[color:var(--accent)]
                                    `
                                }
                              `}
                            >
                              <span
                                className="
                                  grid h-7
                                  min-w-7
                                  place-items-center

                                  rounded-full
                                  bg-[color:var(--accent)]/10
                                  px-2

                                  font-mono
                                  text-[8px]
                                  font-semibold
                                  text-[color:var(--accent)]
                                "
                              >
                                {
                                  technology.badge
                                }
                              </span>

                              <span
                                className="
                                  text-[10px]
                                  font-bold
                                  uppercase
                                  tracking-[0.12em]
                                  text-[color:var(--text)]
                                "
                              >
                                {
                                  technology.name
                                }
                              </span>
                            </button>
                          );
                        }
                      )}
                    </div>

                    {activeTechnology && (
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={
                            activeTechnology.name
                          }
                          initial={{
                            opacity: 0,
                            y: 12,
                          }}
                          animate={{
                            opacity: 1,
                            y: 0,
                          }}
                          exit={{
                            opacity: 0,
                            y: -8,
                          }}
                          transition={{
                            duration: 0.22,
                          }}
                          className="
                            mt-10
                            border-t
                            border-[color:var(--line)]
                            pt-8
                          "
                        >
                          <div
                            className="
                              flex items-start
                              gap-5
                            "
                          >
                            <span
                              className="
                                grid h-14
                                min-w-14
                                place-items-center

                                rounded-[1.1rem]
                                border
                                border-[color:var(--accent)]/40

                                bg-[color:var(--accent)]/10
                                px-2

                                font-mono
                                text-xs
                                font-semibold
                                text-[color:var(--accent)]
                              "
                            >
                              {
                                activeTechnology.badge
                              }
                            </span>

                            <div>
                              <p
                                className="
                                  font-mono
                                  text-[8px]
                                  font-semibold
                                  uppercase
                                  tracking-[0.19em]
                                  text-[color:var(--muted)]
                                "
                              >
                                Aplicação real
                              </p>

                              <h5
                                className="
                                  mt-2
                                  text-xl
                                  font-bold
                                  tracking-[-0.035em]
                                  text-[color:var(--text)]
                                "
                              >
                                {
                                  activeTechnology.name
                                }
                              </h5>

                              <p
                                className="
                                  mt-4
                                  max-w-2xl

                                  text-sm
                                  leading-7
                                  text-[color:var(--muted)]
                                "
                              >
                                {
                                  activeTechnology.usage
                                }
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      </AnimatePresence>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Eixo técnico */}
            <div
              className="
                mt-8
                grid gap-px
                overflow-hidden

                rounded-[1.6rem]
                border
                border-[color:var(--line)]

                bg-[color:var(--line-soft)]

                md:grid-cols-3
              "
            >
              {[
                {
                  code: "HW",
                  title: "Eletrônica",
                  description:
                    "Entendimento do circuito, equipamento e falha física.",
                },
                {
                  code: "SW",
                  title: "Software",
                  description:
                    "Transformação do processo em lógica, dados e interface.",
                },
                {
                  code: "AI",
                  title: "Inteligência",
                  description:
                    "Análise, automação e apoio técnico à decisão.",
                },
              ].map((axis) => (
                <div
                  key={axis.code}
                  className="
                    bg-[color:var(--panel)]
                    p-5

                    sm:p-6
                  "
                >
                  <span
                    className="
                      font-display
                      text-2xl
                      font-bold
                      tracking-[-0.05em]
                      text-[color:var(--accent)]
                    "
                  >
                    {axis.code}
                  </span>

                  <h5
                    className="
                      mt-4
                      text-base
                      font-bold
                      text-[color:var(--text)]
                    "
                  >
                    {axis.title}
                  </h5>

                  <p
                    className="
                      mt-2
                      text-xs
                      leading-6
                      text-[color:var(--muted)]
                    "
                  >
                    {axis.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* =====================================================
            TRAJETÓRIA PROFISSIONAL
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
          transition={revealTransition}
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
                Experience / Timeline
              </p>

              <h3
                className="
                  mt-5

                  font-display
                  text-4xl
                  font-bold
                  leading-none
                  tracking-[-0.06em]
                  text-[color:var(--text)]

                  sm:text-5xl
                "
              >
                Trajetória técnica.
              </h3>
            </div>

            <p
              className="
                text-sm
                leading-7
                text-[color:var(--muted)]
              "
            >
              Da organização de dados e rotina
              produtiva até eletrônica,
              engenharia de processos,
              automação e desenvolvimento de
              software.
            </p>
          </div>

          <div
            className="
              relative
              mt-10
            "
          >
            <div
              aria-hidden="true"
              className="
                absolute
                bottom-0 left-[25px]
                top-0

                w-px

                bg-gradient-to-b
                from-[color:var(--accent)]
                via-[color:var(--line-strong)]
                to-transparent

                lg:left-[155px]
              "
            />

            <div
              className="
                divide-y
                divide-[color:var(--line-soft)]
              "
            >
              {aboutProfile.experiences.map(
                (experience, index) => (
                  <motion.article
                    key={`${experience.company}-${experience.period}`}
                    initial={{
                      opacity: 0,
                      y: 22,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                      margin: "-70px",
                    }}
                    transition={{
                      duration: 0.44,
                      delay:
                        index * 0.045,
                    }}
                    className="
                      group
                      relative

                      grid gap-5
                      py-8
                      pl-16

                      lg:grid-cols-[130px_minmax(0,0.58fr)_minmax(280px,0.42fr)]
                      lg:gap-10
                      lg:pl-0
                    "
                  >
                    {/* Marcador */}
                    <div
                      className="
                        absolute
                        left-[18px] top-[2.2rem]
                        z-10

                        grid h-4 w-4
                        place-items-center

                        rounded-full
                        border
                        border-[color:var(--accent)]

                        bg-[color:var(--bg-deep)]

                        shadow-[0_0_22px_color-mix(in_srgb,var(--accent)_35%,transparent)]

                        lg:left-[148px]
                      "
                    >
                      <span
                        className="
                          h-1.5 w-1.5
                          rounded-full
                          bg-[color:var(--accent)]
                        "
                      />
                    </div>

                    {/* Período */}
                    <div
                      className="
                        lg:pr-5
                        lg:text-right
                      "
                    >
                      <span
                        className="
                          font-mono
                          text-[8px]
                          font-semibold
                          uppercase
                          tracking-[0.16em]
                          text-[color:var(--muted)]
                        "
                      >
                        {experience.period}
                      </span>

                      <span
                        className="
                          mt-2 block
                          font-mono
                          text-[8px]
                          font-semibold
                          uppercase
                          tracking-[0.16em]
                          text-[color:var(--accent)]
                        "
                      >
                        Step /
                        {String(
                          index + 1
                        ).padStart(2, "0")}
                      </span>
                    </div>

                    {/* Empresa e função */}
                    <div
                      className="
                        lg:pl-10
                      "
                    >
                      <div
                        className="
                          flex items-center
                          gap-3
                        "
                      >
                        <BriefcaseBusiness
                          size={16}
                          strokeWidth={1.9}
                          className="
                            text-[color:var(--accent)]
                          "
                        />

                        <span
                          className="
                            font-mono
                            text-[8px]
                            font-semibold
                            uppercase
                            tracking-[0.17em]
                            text-[color:var(--muted)]
                          "
                        >
                          Experiência profissional
                        </span>
                      </div>

                      <h4
                        className="
                          mt-4
                          text-2xl
                          font-bold
                          tracking-[-0.045em]
                          text-[color:var(--text)]

                          sm:text-3xl
                        "
                      >
                        {experience.company}
                      </h4>

                      <p
                        className="
                          mt-3
                          text-sm
                          font-bold
                          leading-6
                          text-[color:var(--accent)]
                        "
                      >
                        {experience.role}
                      </p>
                    </div>

                    {/* Descrição */}
                    <div
                      className="
                        lg:border-l
                        lg:border-[color:var(--line)]
                        lg:pl-9
                      "
                    >
                      <p
                        className="
                          text-sm
                          leading-7
                          text-[color:var(--muted)]
                        "
                      >
                        {experience.description}
                      </p>
                    </div>
                  </motion.article>
                )
              )}
            </div>
          </div>
        </motion.div>

        {/* =====================================================
            FECHAMENTO
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
          transition={revealTransition}
          className="
            relative
            mt-20
            overflow-hidden

            rounded-[2.4rem]
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

              bg-[color:var(--accent)]/10
              blur-[105px]
            "
          />

          <div
            className="
              relative z-10
              grid gap-10

              lg:grid-cols-[minmax(0,1fr)_minmax(280px,0.42fr)]
              lg:items-end
            "
          >
            <div>
              <p className="tech-label">
                Diferencial técnico
              </p>

              <h3
                className="
                  mt-5
                  max-w-[15ch]

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
                Primeiro entendo a falha.
                <span className="text-gradient">
                  {" "}
                  Depois construo o sistema.
                </span>
              </h3>
            </div>

            <p
              className="
                text-sm
                leading-8
                text-[color:var(--muted)]

                sm:text-base
              "
            >
              Minha base em eletrônica ajuda a
              interpretar o equipamento, o
              processo e a falha física antes da
              definição da solução digital. Isso
              aproxima software, engenharia,
              qualidade e operação.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}