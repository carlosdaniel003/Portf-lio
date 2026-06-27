// src\components\ui\Loader.tsx
"use client";

import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";
import Image from "next/image";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";

const bootSteps = [
  {
    code: "SYS_01",
    label: "Mapeando operação real",
  },
  {
    code: "AI_02",
    label: "Ativando inteligência aplicada",
  },
  {
    code: "DATA_03",
    label: "Carregando projetos e sistemas",
  },
  {
    code: "UI_04",
    label: "Preparando experiência",
  },
] as const;

const expertise = [
  "Eletrônica",
  "Software",
  "Automação",
  "IA aplicada",
  "Visão computacional",
] as const;

type OriginalPageStyles = {
  htmlOverflow: string;
  bodyOverflow: string;
};

export default function Loader() {
  const prefersReducedMotion = useReducedMotion();
  const shouldReduceMotion = Boolean(prefersReducedMotion);

  const [isMounted, setIsMounted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [currentStep, setCurrentStep] = useState(0);

  const originalPageStylesRef =
    useRef<OriginalPageStyles | null>(null);

  const isPageLockedRef = useRef(false);

  const lockPage = useCallback(() => {
    if (isPageLockedRef.current) {
      return;
    }

    originalPageStylesRef.current = {
      htmlOverflow:
        document.documentElement.style.overflow,
      bodyOverflow:
        document.body.style.overflow,
    };

    document.documentElement.style.overflow =
      "hidden";
    document.body.style.overflow = "hidden";

    isPageLockedRef.current = true;
  }, []);

  const unlockPage = useCallback(() => {
    if (!isPageLockedRef.current) {
      return;
    }

    const originalStyles =
      originalPageStylesRef.current;

    document.documentElement.style.overflow =
      originalStyles?.htmlOverflow ?? "";

    document.body.style.overflow =
      originalStyles?.bodyOverflow ?? "";

    originalPageStylesRef.current = null;
    isPageLockedRef.current = false;
  }, []);

  useEffect(() => {
    setIsMounted(true);
    lockPage();

    const stepInterval =
      shouldReduceMotion ? 170 : 360;

    const finishDelay =
      shouldReduceMotion ? 760 : 1850;

    const stepTimers = bootSteps.map(
      (_, index) =>
        window.setTimeout(() => {
          setCurrentStep(index);
        }, index * stepInterval)
    );

    const finishTimer = window.setTimeout(
      () => {
        setIsLoading(false);
      },
      finishDelay
    );

    return () => {
      stepTimers.forEach((timer) => {
        window.clearTimeout(timer);
      });

      window.clearTimeout(finishTimer);
      unlockPage();
    };
  }, [
    lockPage,
    shouldReduceMotion,
    unlockPage,
  ]);

  const progress =
    ((currentStep + 1) /
      bootSteps.length) *
    100;

  if (!isMounted) {
    return null;
  }

  return createPortal(
    <AnimatePresence
      onExitComplete={unlockPage}
    >
      {isLoading && (
        <motion.div
          key="portfolio-loader"
          role="status"
          aria-live="polite"
          aria-label="Carregando portfólio"
          className="
            fixed inset-0
            z-[2147483647]
            overflow-hidden

            bg-[color:var(--bg-deepest)]
            text-[color:var(--text)]
          "
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            filter: shouldReduceMotion
              ? "blur(0px)"
              : "blur(10px)",
          }}
          transition={{
            duration: shouldReduceMotion
              ? 0.2
              : 0.55,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {/* =================================================
              ATMOSFERA
              ================================================= */}

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
              left-1/2 top-1/2

              h-[42rem]
              w-[42rem]

              -translate-x-1/2
              -translate-y-1/2

              rounded-full
              bg-[color:var(--accent)]/[0.09]
              blur-[150px]
            "
          />

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              bottom-[-18rem]
              right-[-14rem]

              h-[38rem]
              w-[38rem]

              rounded-full
              bg-[color:var(--accent-2)]/[0.08]
              blur-[150px]
            "
          />

          {!shouldReduceMotion && (
            <motion.div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute inset-x-0 top-0

                h-px

                bg-gradient-to-r
                from-transparent
                via-[color:var(--accent)]
                to-transparent

                shadow-[0_0_22px_var(--accent)]
              "
              animate={{
                y: ["0vh", "100vh"],
                opacity: [0, 0.75, 0],
              }}
              transition={{
                duration: 1.5,
                ease: [0.7, 0, 0.2, 1],
              }}
            />
          )}

          {/* =================================================
              CABEÇALHO TÉCNICO
              ================================================= */}

          <div
            className="
              absolute
              left-5 right-5 top-5

              flex items-center
              justify-between
              gap-5

              sm:left-8 sm:right-8 sm:top-8
              lg:left-12 lg:right-12 lg:top-10
            "
          >
            <div className="flex items-center gap-3">
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
                  tracking-[0.22em]
                  text-[color:var(--accent)]
                "
              >
                Portfolio system
              </span>
            </div>

            <span
              className="
                font-mono
                text-[8px]
                font-semibold
                uppercase
                tracking-[0.2em]
                text-[color:var(--muted)]
              "
            >
              Boot sequence / 2026
            </span>
          </div>

          {/* =================================================
              CONTEÚDO CENTRAL
              ================================================= */}

          <div
            className="
              relative z-10
              flex min-h-screen
              items-center
              justify-center

              px-5 py-24

              sm:px-8
              lg:px-12
            "
          >
            <motion.div
              initial={{
                opacity: 0,
                y: shouldReduceMotion
                  ? 0
                  : 22,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: shouldReduceMotion
                  ? 0
                  : -16,
              }}
              transition={{
                duration: shouldReduceMotion
                  ? 0.2
                  : 0.55,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                w-full
                max-w-6xl
              "
            >
              <div
                className="
                  grid gap-10

                  lg:grid-cols-[minmax(240px,0.38fr)_minmax(0,0.62fr)]
                  lg:items-center
                  lg:gap-16
                "
              >
                {/* Logo */}
                <div
                  className="
                    relative
                    mx-auto

                    h-52 w-52

                    sm:h-64 sm:w-64
                    lg:h-72 lg:w-72
                  "
                >
                  {!shouldReduceMotion && (
                    <>
                      <motion.div
                        aria-hidden="true"
                        className="
                          absolute inset-[-13%]

                          rounded-full
                          border
                          border-dashed
                          border-[color:var(--accent)]/30
                        "
                        animate={{
                          rotate: 360,
                        }}
                        transition={{
                          duration: 16,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      />

                      <motion.div
                        aria-hidden="true"
                        className="
                          absolute inset-[-4%]

                          rounded-full
                          border
                          border-[color:var(--accent-2)]/20
                        "
                        animate={{
                          rotate: -360,
                        }}
                        transition={{
                          duration: 11,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      />
                    </>
                  )}

                  <motion.div
                    className="
                      absolute inset-0
                      overflow-hidden

                      rounded-full
                      border
                      border-[color:var(--accent)]/55

                      bg-[color:var(--panel-strong)]

                      shadow-[0_0_70px_color-mix(in_srgb,var(--accent)_20%,transparent)]
                    "
                    animate={
                      shouldReduceMotion
                        ? undefined
                        : {
                            scale: [
                              1,
                              1.025,
                              1,
                            ],
                          }
                    }
                    transition={{
                      duration: 2.1,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <Image
                      src="/favicon.svg"
                      alt="Logo de Carlos Daniel"
                      fill
                      priority
                      sizes="(max-width: 640px) 208px, (max-width: 1024px) 256px, 288px"
                      className="
                        object-contain
                        p-10

                        sm:p-12
                        lg:p-14
                      "
                    />

                    <div
                      aria-hidden="true"
                      className="
                        pointer-events-none
                        absolute inset-0

                        bg-gradient-to-br
                        from-white/[0.055]
                        via-transparent
                        to-[color:var(--accent)]/[0.055]
                      "
                    />

                    <div
                      aria-hidden="true"
                      className="
                        pointer-events-none
                        absolute inset-3

                        rounded-full
                        border
                        border-white/10
                      "
                    />
                  </motion.div>

                  <motion.span
                    aria-hidden="true"
                    className="
                      absolute
                      bottom-[8%]
                      right-[3%]

                      h-4 w-4

                      rounded-full
                      border-[3px]
                      border-[color:var(--bg-deepest)]

                      bg-[color:var(--accent)]

                      shadow-[0_0_20px_var(--accent)]
                    "
                    animate={
                      shouldReduceMotion
                        ? undefined
                        : {
                            scale: [
                              0.85,
                              1.15,
                              0.85,
                            ],
                            opacity: [
                              0.7,
                              1,
                              0.7,
                            ],
                          }
                    }
                    transition={{
                      duration: 1.4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </div>

                {/* Identidade e carregamento */}
                <div>
                  <p
                    className="
                      font-mono
                      text-[9px]
                      font-semibold
                      uppercase
                      tracking-[0.24em]
                      text-[color:var(--accent)]
                    "
                  >
                    Carlos Daniel / Technical portfolio
                  </p>

                  <h1
                    className="
                      mt-5

                      font-display
                      text-[clamp(3.2rem,8vw,7.4rem)]
                      font-bold
                      leading-[0.82]
                      tracking-[-0.085em]
                      text-[color:var(--text)]
                    "
                  >
                    CARLOS

                    <span
                      className="
                        block
                        text-gradient
                      "
                    >
                      DANIEL
                    </span>
                  </h1>

                  <div
                    className="
                      mt-8
                      flex flex-wrap
                      gap-x-5
                      gap-y-3
                    "
                  >
                    {expertise.map(
                      (item, index) => (
                        <span
                          key={item}
                          className="
                            flex items-center
                            gap-2

                            font-mono
                            text-[8px]
                            font-semibold
                            uppercase
                            tracking-[0.16em]
                            text-[color:var(--muted)]
                          "
                        >
                          {index > 0 && (
                            <span
                              aria-hidden="true"
                              className="
                                h-1 w-1
                                rounded-full
                                bg-[color:var(--line-strong)]
                              "
                            />
                          )}

                          {item}
                        </span>
                      )
                    )}
                  </div>

                  <div
                    className="
                      mt-10
                      border-t
                      border-[color:var(--line)]

                      pt-6
                    "
                  >
                    <div
                      className="
                        flex items-end
                        justify-between
                        gap-6
                      "
                    >
                      <div>
                        <span
                          className="
                            block
                            font-mono
                            text-[8px]
                            font-semibold
                            uppercase
                            tracking-[0.19em]
                            text-[color:var(--subtle)]
                          "
                        >
                          {
                            bootSteps[
                              currentStep
                            ].code
                          }
                        </span>

                        <AnimatePresence mode="wait">
                          <motion.p
                            key={
                              bootSteps[
                                currentStep
                              ].label
                            }
                            initial={{
                              opacity: 0,
                              y: shouldReduceMotion
                                ? 0
                                : 7,
                            }}
                            animate={{
                              opacity: 1,
                              y: 0,
                            }}
                            exit={{
                              opacity: 0,
                              y: shouldReduceMotion
                                ? 0
                                : -5,
                            }}
                            transition={{
                              duration: 0.2,
                            }}
                            className="
                              mt-2
                              text-sm
                              font-semibold
                              text-[color:var(--text)]
                            "
                          >
                            {
                              bootSteps[
                                currentStep
                              ].label
                            }
                          </motion.p>
                        </AnimatePresence>
                      </div>

                      <span
                        className="
                          font-display
                          text-3xl
                          font-bold
                          tracking-[-0.07em]
                          text-[color:var(--accent)]
                        "
                      >
                        {String(
                          currentStep + 1
                        ).padStart(2, "0")}

                        <span
                          className="
                            text-base
                            text-[color:var(--subtle)]
                          "
                        >
                          /04
                        </span>
                      </span>
                    </div>

                    <div
                      className="
                        relative
                        mt-5

                        h-px
                        overflow-visible

                        bg-[color:var(--line)]
                      "
                    >
                      <motion.div
                        className="
                          absolute
                          left-0 top-0

                          h-px

                          bg-gradient-to-r
                          from-[color:var(--accent)]
                          to-[color:var(--accent-2)]

                          shadow-[0_0_16px_var(--accent)]
                        "
                        initial={{
                          width: "0%",
                        }}
                        animate={{
                          width: `${progress}%`,
                        }}
                        transition={{
                          duration:
                            shouldReduceMotion
                              ? 0.08
                              : 0.32,
                          ease: [
                            0.22,
                            1,
                            0.36,
                            1,
                          ],
                        }}
                      />

                      <motion.span
                        aria-hidden="true"
                        className="
                          absolute
                          top-1/2

                          h-2.5 w-2.5

                          -translate-x-1/2
                          -translate-y-1/2

                          rounded-full
                          bg-[color:var(--accent)]

                          shadow-[0_0_18px_var(--accent)]
                        "
                        initial={{
                          left: "0%",
                        }}
                        animate={{
                          left: `${progress}%`,
                        }}
                        transition={{
                          duration:
                            shouldReduceMotion
                              ? 0.08
                              : 0.32,
                          ease: [
                            0.22,
                            1,
                            0.36,
                            1,
                          ],
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* =================================================
              RODAPÉ DO LOADER
              ================================================= */}

          <div
            className="
              absolute
              bottom-5 left-5 right-5

              flex items-center
              justify-between
              gap-5

              sm:bottom-8 sm:left-8 sm:right-8
              lg:bottom-10 lg:left-12 lg:right-12
            "
          >
            <span
              className="
                font-mono
                text-[7px]
                font-semibold
                uppercase
                tracking-[0.18em]
                text-[color:var(--subtle)]
              "
            >
              Manaus · Amazonas · Brasil
            </span>

            <span
              className="
                font-mono
                text-[7px]
                font-semibold
                uppercase
                tracking-[0.18em]
                text-[color:var(--subtle)]
              "
            >
              Hardware → Software → Intelligence
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
