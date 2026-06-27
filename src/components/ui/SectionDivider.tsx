// src\components\ui\SectionDivider.tsx
"use client";

import {
  motion,
  useReducedMotion,
} from "framer-motion";

type SectionDividerProps = {
  index: string;
  title: string;
};

export default function SectionDivider({
  index,
  title,
}: SectionDividerProps) {
  const shouldReduceMotion =
    useReducedMotion();

  return (
    <div
      className="
        portfolio-container
        relative
        py-8

        sm:py-10
        lg:py-12
      "
    >
      <motion.div
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
          margin: "-80px",
        }}
        transition={{
          duration: 0.58,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          relative
          overflow-hidden

          border-y
          border-[color:var(--line-soft)]

          py-5

          sm:py-6
        "
      >
        {/* ===================================================
            ATMOSFERA
            =================================================== */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            left-[-5rem]
            top-1/2

            h-32 w-32

            -translate-y-1/2
            rounded-full

            bg-[color:var(--accent)]/10
            blur-[55px]
          "
        />

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            right-[-4rem]
            top-1/2

            h-28 w-28

            -translate-y-1/2
            rounded-full

            bg-[color:var(--accent-2)]/10
            blur-[50px]
          "
        />

        <div
          className="
            relative z-10

            grid gap-5

            md:grid-cols-[auto_minmax(80px,1fr)_minmax(240px,auto)]
            md:items-center
            md:gap-8
          "
        >
          {/* =================================================
              ÍNDICE
              ================================================= */}

          <div
            className="
              flex items-center
              gap-4
            "
          >
            <div
              className="
                relative
                grid h-14 w-14
                shrink-0
                place-items-center

                rounded-full
                border
                border-[color:var(--line-strong)]

                bg-[color:var(--panel)]
                backdrop-blur-xl
              "
            >
              <motion.span
                aria-hidden="true"
                className="
                  absolute inset-[5px]

                  rounded-full
                  border
                  border-dashed
                  border-[color:var(--accent)]/35
                "
                animate={
                  shouldReduceMotion
                    ? undefined
                    : {
                        rotate: 360,
                      }
                }
                transition={{
                  duration: 18,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              <span
                className="
                  relative z-10

                  font-mono
                  text-[10px]
                  font-semibold
                  tracking-[0.16em]
                  text-[color:var(--accent)]
                "
              >
                {index}
              </span>
            </div>

            <div>
              <span
                className="
                  block

                  font-mono
                  text-[8px]
                  font-semibold
                  uppercase
                  tracking-[0.22em]
                  text-[color:var(--subtle)]
                "
              >
                Section
              </span>

              <span
                className="
                  mt-1 block

                  font-display
                  text-3xl
                  font-bold
                  leading-none
                  tracking-[-0.07em]
                "
                style={{
                  color:
                    "color-mix(in srgb, var(--text) 10%, transparent)",
                }}
              >
                {index}
              </span>
            </div>
          </div>

          {/* =================================================
              LINHA DE CONEXÃO
              ================================================= */}

          <div
            aria-hidden="true"
            className="
              relative
              hidden h-px
              overflow-visible

              bg-[color:var(--line-soft)]

              md:block
            "
          >
            <motion.div
              initial={{
                scaleX: 0,
              }}
              whileInView={{
                scaleX: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.9,
                delay: 0.18,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                absolute inset-0
                origin-left

                bg-gradient-to-r
                from-[color:var(--accent)]
                via-[color:var(--line-strong)]
                to-[color:var(--accent-2)]
              "
            />

            {!shouldReduceMotion && (
              <motion.span
                className="
                  absolute
                  left-0 top-1/2

                  h-2 w-2

                  -translate-x-1/2
                  -translate-y-1/2

                  rounded-full
                  bg-[color:var(--accent)]

                  shadow-[0_0_18px_var(--accent)]
                "
                animate={{
                  left: [
                    "0%",
                    "100%",
                  ],
                  opacity: [
                    0,
                    1,
                    1,
                    0,
                  ],
                  scale: [
                    0.7,
                    1,
                    1,
                    0.7,
                  ],
                }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  times: [
                    0,
                    0.15,
                    0.85,
                    1,
                  ],
                }}
              />
            )}

            <span
              className="
                absolute
                right-0 top-1/2

                h-2 w-2

                translate-x-1/2
                -translate-y-1/2

                rounded-full
                border
                border-[color:var(--accent-2)]

                bg-[color:var(--bg-deep)]

                shadow-[0_0_14px_color-mix(in_srgb,var(--accent-2)_45%,transparent)]
              "
            />
          </div>

          {/* =================================================
              TÍTULO
              ================================================= */}

          <div
            className="
              border-t
              border-[color:var(--line-soft)]

              pt-5

              md:border-l
              md:border-t-0
              md:pl-8
              md:pt-0
              md:text-right
            "
          >
            <div
              className="
                mb-2
                flex items-center
                gap-2

                md:justify-end
              "
            >
              <span
                className="
                  h-1.5 w-1.5

                  rounded-full
                  bg-[color:var(--accent)]

                  shadow-[0_0_12px_var(--accent)]
                "
              />

              <span
                className="
                  font-mono
                  text-[8px]
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-[color:var(--accent)]
                "
              >
                Portfolio / {index}
              </span>
            </div>

            <p
              className="
                font-display
                text-xl
                font-bold
                tracking-[-0.035em]
                text-[color:var(--text)]

                sm:text-2xl
              "
            >
              {title}
            </p>
          </div>
        </div>

        {/* Linha inferior móvel */}
        <motion.div
          aria-hidden="true"
          initial={{
            scaleX: 0,
          }}
          whileInView={{
            scaleX: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
            delay: 0.08,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            absolute
            bottom-[-1px]
            left-0

            h-px w-28
            origin-left

            bg-gradient-to-r
            from-[color:var(--accent)]
            to-transparent
          "
        />
      </motion.div>
    </div>
  );
}