// src\components\sections\WebDemosCTA.tsx
"use client";

import Image from "next/image";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";

import {
  ArrowUpRight,
  Globe2,
  LayoutTemplate,
  MonitorSmartphone,
  MousePointerClick,
} from "lucide-react";

import type {
  MouseEvent,
} from "react";

const demosUrl =
  "https://demos.carlosdaniel.dev.br";

const showcaseItems = [
  {
    label: "Landing pages",
    description:
      "Páginas orientadas à apresentação e conversão.",
    icon: LayoutTemplate,
  },
  {
    label: "Websites",
    description:
      "Experiências responsivas para negócios e serviços.",
    icon: MonitorSmartphone,
  },
  {
    label: "Demonstrações",
    description:
      "Modelos visuais para diferentes segmentos.",
    icon: Globe2,
  },
] as const;


const revealTransition = {
  duration: 0.68,
  ease: [0.22, 1, 0.36, 1] as const,
};

export default function WebDemosCTA() {
  const shouldReduceMotion =
    useReducedMotion();

  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const smoothRotateX =
    useSpring(rotateX, {
      stiffness: 150,
      damping: 22,
      mass: 0.45,
    });

  const smoothRotateY =
    useSpring(rotateY, {
      stiffness: 150,
      damping: 22,
      mass: 0.45,
    });

  const lightX =
    useTransform(
      smoothRotateY,
      [-7, 7],
      [32, 68]
    );

  const lightY =
    useTransform(
      smoothRotateX,
      [-6, 6],
      [68, 32]
    );

  const browserReflection =
    useMotionTemplate`
      radial-gradient(
        340px circle at
        ${lightX}%
        ${lightY}%,
        rgba(255,255,255,0.12),
        transparent 66%
      )
    `;

  function handleMouseMove(
    event: MouseEvent<HTMLDivElement>
  ) {
    if (shouldReduceMotion) {
      return;
    }

    const bounds =
      event.currentTarget.getBoundingClientRect();

    const normalizedX =
      (
        event.clientX -
        bounds.left
      ) /
        Math.max(
          bounds.width,
          1
        ) -
      0.5;

    const normalizedY =
      (
        event.clientY -
        bounds.top
      ) /
        Math.max(
          bounds.height,
          1
        ) -
      0.5;

    rotateY.set(
      normalizedX * 12
    );

    rotateX.set(
      normalizedY * -10
    );
  }

  function resetPerspective() {
    rotateX.set(0);
    rotateY.set(0);
  }

  return (
    <section
      aria-labelledby="web-demos-title"
      className="
        relative
        overflow-hidden

        border-b
        border-[color:var(--line-soft)]

        py-24

        sm:py-28
        lg:py-32
      "
    >
      {/* =====================================================
          AMBIENTAÇÃO
          ===================================================== */}

      <div
        aria-hidden="true"
        className="
          soft-grid
          pointer-events-none
          absolute inset-0
          opacity-[0.16]

          [mask-image:linear-gradient(to_bottom,transparent,black_18%,black_82%,transparent)]
          [-webkit-mask-image:linear-gradient(to_bottom,transparent,black_18%,black_82%,transparent)]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-[-13rem]
          top-1/2

          h-[32rem]
          w-[32rem]

          -translate-y-1/2
          rounded-full

          bg-[color:var(--accent-2)]/[0.075]
          blur-[135px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          right-[-11rem]
          top-[42%]

          h-[34rem]
          w-[34rem]

          -translate-y-1/2
          rounded-full

          bg-[color:var(--accent)]/[0.08]
          blur-[145px]
        "
      />

      <div
        className="
          portfolio-container
          relative z-10
        "
      >
        <div
          className="
            grid gap-16

            lg:grid-cols-[minmax(0,0.78fr)_minmax(520px,1.22fr)]
            lg:items-center
            lg:gap-16

            xl:grid-cols-[minmax(0,0.72fr)_minmax(620px,1.28fr)]
            xl:gap-20
          "
        >
          {/* ===================================================
              TEXTO
              =================================================== */}

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
              margin: "-90px",
            }}
            transition={revealTransition}
          >
            <div
              className="
                mb-6
                flex items-center
                gap-3
              "
            >
              <span
                className="
                  grid h-10 w-10
                  place-items-center

                  rounded-full
                  border
                  border-[color:var(--accent)]/40

                  bg-[color:var(--accent)]/10
                  text-[color:var(--accent)]
                "
              >
                <Globe2
                  size={17}
                  strokeWidth={2}
                />
              </span>

              <p className="tech-label">
                Web showcase / Demos
              </p>
            </div>

            <h2
              id="web-demos-title"
              className="
                max-w-[13ch]

                font-display
                text-[clamp(2.8rem,5vw,5.4rem)]
                font-bold
                leading-[0.95]
                tracking-[-0.065em]
                text-[color:var(--text)]
              "
            >
              Além de sistemas,
              <span className="text-gradient">
                {" "}
                desenvolvo experiências para a web.
              </span>
            </h2>

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
              Explore uma vitrine dedicada a websites e landing pages
              desenvolvidos para diferentes negócios, identidades e objetivos
              de conversão.
            </p>

            <div
              className="
                mt-8
                divide-y
                divide-[color:var(--line-soft)]
                border-y
                border-[color:var(--line-soft)]
              "
            >
              {showcaseItems.map(
                (item) => {
                  const Icon =
                    item.icon;

                  return (
                    <div
                      key={
                        item.label
                      }
                      className="
                        group
                        grid
                        grid-cols-[42px_minmax(0,1fr)]
                        gap-4

                        py-4
                      "
                    >
                      <span
                        className="
                          grid h-10 w-10
                          place-items-center

                          rounded-[0.9rem]
                          border
                          border-[color:var(--line)]

                          bg-[color:var(--panel)]
                          text-[color:var(--muted)]

                          transition
                          group-hover:border-[color:var(--accent)]/45
                          group-hover:text-[color:var(--accent)]
                        "
                      >
                        <Icon
                          size={16}
                          strokeWidth={2}
                        />
                      </span>

                      <div>
                        <p
                          className="
                            text-sm
                            font-bold
                            tracking-[-0.025em]
                            text-[color:var(--text)]
                          "
                        >
                          {
                            item.label
                          }
                        </p>

                        <p
                          className="
                            mt-1
                            text-xs
                            leading-6
                            text-[color:var(--muted)]
                          "
                        >
                          {
                            item.description
                          }
                        </p>
                      </div>
                    </div>
                  );
                }
              )}
            </div>

            <div
              className="
                mt-8
                flex flex-col
                gap-4

                sm:flex-row
                sm:items-center
              "
            >
              <a
                href={demosUrl}
                target="_blank"
                rel="noreferrer"
                className="
                  primary-action
                  group
                "
              >
                Explorar demonstrações

                <ArrowUpRight
                  size={17}
                  strokeWidth={2.3}
                  className="
                    transition-transform
                    group-hover:translate-x-0.5
                    group-hover:-translate-y-0.5
                  "
                />
              </a>

              <span
                className="
                  font-mono
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.16em]
                  text-[color:var(--subtle)]
                "
              >
                demos.carlosdaniel.dev.br
              </span>
            </div>
          </motion.div>

          {/* ===================================================
              NAVEGADOR 3D
              =================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: 30,
              scale: 0.96,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            viewport={{
              once: true,
              margin: "-90px",
            }}
            transition={{
              ...revealTransition,
              delay: 0.1,
            }}
            className="
              relative
              mx-auto
              w-full
              max-w-[760px]

              [perspective:1500px]
            "
          >
            {/* Camadas traseiras */}
            <div
              aria-hidden="true"
              className="
                absolute
                inset-x-[8%]
                bottom-[-2rem]
                top-[2rem]

                rotate-[3deg]
                rounded-[2.2rem]
                border
                border-[color:var(--line)]

                bg-[color:var(--panel)]
                opacity-45
              "
            />

            <div
              aria-hidden="true"
              className="
                absolute
                inset-x-[4%]
                bottom-[-1rem]
                top-[1rem]

                -rotate-[2deg]
                rounded-[2.2rem]
                border
                border-[color:var(--line-strong)]

                bg-[color:var(--panel-strong)]
                opacity-60
              "
            />

            <motion.div
              onMouseMove={
                handleMouseMove
              }
              onMouseLeave={
                resetPerspective
              }
              style={{
                rotateX:
                  smoothRotateX,
                rotateY:
                  smoothRotateY,
                transformStyle:
                  "preserve-3d",
              }}
              className="
                group
                relative
                overflow-hidden

                rounded-[2.2rem]
                border
                border-[color:var(--line-strong)]

                bg-[color:var(--panel-strong)]

                shadow-[0_42px_120px_var(--shadow-deep)]

                will-change-transform
              "
            >
              {/* Reflexo guiado pelo cursor */}
              <motion.div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute inset-0
                  z-30
                  opacity-45
                "
                style={{
                  background:
                    browserReflection,
                }}
              />

              {/* Barra do navegador */}
              <div
                className="
                  relative z-20
                  flex h-16
                  items-center
                  gap-4

                  border-b
                  border-[color:var(--line)]

                  bg-[color:var(--bg-deep)]/85
                  px-5

                  backdrop-blur-xl
                "
              >
                <div
                  className="
                    flex items-center
                    gap-2
                  "
                >
                  <span className="h-2.5 w-2.5 rounded-full bg-[color:var(--accent)]/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[color:var(--accent-2)]/55" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[color:var(--text)]/20" />
                </div>

                <div
                  className="
                    flex min-w-0 flex-1
                    items-center
                    gap-3

                    rounded-full
                    border
                    border-[color:var(--line)]

                    bg-[color:var(--panel)]
                    px-4 py-2
                  "
                >
                  <span
                    className="
                      h-1.5 w-1.5
                      shrink-0
                      rounded-full

                      bg-[color:var(--accent)]
                      shadow-[0_0_9px_var(--accent)]
                    "
                  />

                  <span
                    className="
                      truncate
                      font-mono
                      text-[9px]
                      font-semibold
                      tracking-[0.08em]
                      text-[color:var(--muted)]
                    "
                  >
                    demos.carlosdaniel.dev.br
                  </span>
                </div>

                <ArrowUpRight
                  size={16}
                  strokeWidth={2}
                  className="
                    shrink-0
                    text-[color:var(--accent)]
                  "
                />
              </div>

              {/* Preview real do site */}
              <a
                href={demosUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="Abrir catálogo de websites e landing pages"
                className="
                  group/preview
                  relative
                  block
                  overflow-hidden

                  bg-[color:var(--bg-deepest)]
                "
              >
                <Image
                  src="/images/demos-website-preview.webp.jpg"
                  alt="Prévia do site demos.carlosdaniel.dev.br"
                  width={1366}
                  height={768}
                  sizes="
                    (min-width: 1280px) 760px,
                    (min-width: 1024px) 54vw,
                    100vw
                  "
                  className="
                    h-auto
                    w-full

                    object-cover
                    object-top

                    transition-transform
                    duration-700
                    ease-out

                    group-hover/preview:scale-[1.018]
                  "
                />

                {/* Leve proteção visual sobre a captura */}
                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute inset-0

                    bg-[linear-gradient(180deg,transparent_58%,color-mix(in_srgb,var(--bg-deepest)_28%,transparent)_100%)]

                    opacity-75
                  "
                />

                {/* Brilho discreto no hover */}
                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute inset-0

                    bg-[linear-gradient(115deg,transparent_18%,rgba(255,255,255,0.09)_43%,transparent_68%)]

                    -translate-x-full
                    opacity-0

                    transition-all
                    duration-700
                    ease-out

                    group-hover/preview:translate-x-full
                    group-hover/preview:opacity-100
                  "
                />

                {/* Estado de interação */}
                <div
                  className="
                    absolute
                    bottom-4
                    right-4

                    flex items-center
                    gap-2

                    rounded-full
                    border
                    border-[color:var(--line-strong)]

                    bg-[color:var(--bg-deep)]/88
                    px-3 py-2

                    shadow-[0_12px_34px_var(--shadow)]
                    backdrop-blur-xl

                    transition
                    duration-300

                    group-hover/preview:border-[color:var(--accent)]/60
                    group-hover/preview:bg-[color:var(--panel-strong)]
                  "
                >
                  <MousePointerClick
                    size={12}
                    strokeWidth={2}
                    className="
                      text-[color:var(--accent)]
                    "
                  />

                  <span
                    className="
                      font-mono
                      text-[6px]
                      font-semibold
                      uppercase
                      tracking-[0.16em]
                      text-[color:var(--text-soft)]

                      sm:text-[7px]
                    "
                  >
                    Abrir experiência
                  </span>

                  <ArrowUpRight
                    size={11}
                    strokeWidth={2.2}
                    className="
                      text-[color:var(--accent)]
                      transition-transform

                      group-hover/preview:translate-x-0.5
                      group-hover/preview:-translate-y-0.5
                    "
                  />
                </div>
              </a>
            </motion.div>

            <div
              className="
                mt-6
                flex items-center
                justify-between
                gap-5

                border-t
                border-[color:var(--line-soft)]
                pt-5
              "
            >
              <span
                className="
                  font-mono
                  text-[8px]
                  font-semibold
                  uppercase
                  tracking-[0.17em]
                  text-[color:var(--subtle)]
                "
              >
                Interactive website showcase
              </span>

              <span
                className="
                  h-px flex-1
                  bg-gradient-to-r
                  from-[color:var(--line-strong)]
                  to-transparent
                "
              />

              <span
                className="
                  font-mono
                  text-[8px]
                  font-semibold
                  uppercase
                  tracking-[0.17em]
                  text-[color:var(--accent)]
                "
              >
                Online
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
