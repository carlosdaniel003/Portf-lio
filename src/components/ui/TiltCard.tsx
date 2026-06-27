// src\components\ui\TiltCard.tsx
"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";

import {
  type MouseEventHandler,
  type PointerEvent as ReactPointerEvent,
  type ReactNode,
  useEffect,
  useState,
} from "react";

type TiltIntensity = "subtle" | "medium" | "strong";

type TiltCardProps = {
  as?: "div" | "article" | "button" | "a";
  children: ReactNode;
  className?: string;
  intensity?: TiltIntensity;
  glow?: boolean;
  reveal?: boolean;
  revealDelay?: number;
  type?: "button" | "submit" | "reset";
  href?: string;
  target?: string;
  rel?: string;
  ariaLabel?: string;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLElement>;
};

const tiltConfig = {
  subtle: {
    rotateX: 2.5,
    rotateY: 3.5,
    lift: -2,
    scale: 1.004,
    glow: 9,
    perspective: 1200,
  },

  medium: {
    rotateX: 4.25,
    rotateY: 5.5,
    lift: -4,
    scale: 1.008,
    glow: 13,
    perspective: 1050,
  },

  strong: {
    rotateX: 5.75,
    rotateY: 7.25,
    lift: -5,
    scale: 1.012,
    glow: 17,
    perspective: 900,
  },
} as const;

export default function TiltCard({
  as = "div",
  children,
  className = "",
  intensity = "subtle",
  glow = true,
  reveal = true,
  revealDelay = 0,
  type = "button",
  href,
  target,
  rel,
  ariaLabel,
  disabled = false,
  onClick,
}: TiltCardProps) {
  const config = tiltConfig[intensity];
  const shouldReduceMotion = useReducedMotion();

  const [canTilt, setCanTilt] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const interactionStrength = useMotionValue(0);

  const smoothX = useSpring(pointerX, {
    stiffness: 145,
    damping: 26,
    mass: 0.55,
  });

  const smoothY = useSpring(pointerY, {
    stiffness: 145,
    damping: 26,
    mass: 0.55,
  });

  const smoothInteraction = useSpring(interactionStrength, {
    stiffness: 180,
    damping: 24,
    mass: 0.45,
  });

  const rotateX = useTransform(
    smoothY,
    [-0.5, 0.5],
    [config.rotateX, -config.rotateX]
  );

  const rotateY = useTransform(
    smoothX,
    [-0.5, 0.5],
    [-config.rotateY, config.rotateY]
  );

  const primaryGlowX = useTransform(
    smoothX,
    [-0.5, 0.5],
    ["18%", "82%"]
  );

  const primaryGlowY = useTransform(
    smoothY,
    [-0.5, 0.5],
    ["14%", "86%"]
  );

  const secondaryGlowX = useTransform(
    smoothX,
    [-0.5, 0.5],
    ["82%", "18%"]
  );

  const secondaryGlowY = useTransform(
    smoothY,
    [-0.5, 0.5],
    ["78%", "22%"]
  );

  const sheenX = useTransform(
    smoothX,
    [-0.5, 0.5],
    [-22, 22]
  );

  const sheenY = useTransform(
    smoothY,
    [-0.5, 0.5],
    [-16, 16]
  );

  const glowOpacity = useTransform(
    smoothInteraction,
    [0, 1],
    [0, 1]
  );

  const edgeOpacity = useTransform(
    smoothInteraction,
    [0, 1],
    [0.18, 0.9]
  );

  const glowBackground = useMotionTemplate`
    radial-gradient(
      430px circle at ${primaryGlowX} ${primaryGlowY},
      color-mix(
        in srgb,
        var(--accent) ${config.glow}%,
        transparent
      ),
      transparent 58%
    ),
    radial-gradient(
      300px circle at ${secondaryGlowX} ${secondaryGlowY},
      color-mix(
        in srgb,
        var(--accent-2) ${Math.max(config.glow - 4, 5)}%,
        transparent
      ),
      transparent 62%
    )
  `;

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      "(hover: hover) and (pointer: fine)"
    );

    function updateTiltAvailability() {
      setCanTilt(
        mediaQuery.matches && !shouldReduceMotion
      );
    }

    updateTiltAvailability();

    mediaQuery.addEventListener(
      "change",
      updateTiltAvailability
    );

    return () => {
      mediaQuery.removeEventListener(
        "change",
        updateTiltAvailability
      );
    };
  }, [shouldReduceMotion]);

  useEffect(() => {
    if (canTilt) {
      return;
    }

    pointerX.set(0);
    pointerY.set(0);
  }, [canTilt, pointerX, pointerY]);

  function resetTilt() {
    pointerX.set(0);
    pointerY.set(0);
  }

  function handlePointerEnter() {
    if (!canTilt || disabled) {
      return;
    }

    interactionStrength.set(1);
  }

  function handlePointerMove(
    event: ReactPointerEvent<HTMLElement>
  ) {
    if (
      !canTilt ||
      disabled ||
      event.pointerType !== "mouse"
    ) {
      return;
    }

    const bounds =
      event.currentTarget.getBoundingClientRect();

    if (!bounds.width || !bounds.height) {
      return;
    }

    pointerX.set(
      (event.clientX - bounds.left) /
        bounds.width -
        0.5
    );

    pointerY.set(
      (event.clientY - bounds.top) /
        bounds.height -
        0.5
    );
  }

  function handlePointerLeave() {
    resetTilt();

    if (!isFocused) {
      interactionStrength.set(0);
    }
  }

  function handleFocus() {
    if (disabled) {
      return;
    }

    setIsFocused(true);
    interactionStrength.set(1);
  }

  function handleBlur() {
    setIsFocused(false);
    interactionStrength.set(0);
    resetTilt();
  }

  const MotionComponent = motion[as] as any;
  const isInteractive = as === "a" || as === "button";

  return (
    <MotionComponent
      initial={
        reveal
          ? {
              opacity: 0,
              y: 20,
              filter: shouldReduceMotion
                ? "blur(0px)"
                : "blur(7px)",
            }
          : undefined
      }
      whileInView={
        reveal
          ? {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
            }
          : undefined
      }
      viewport={
        reveal
          ? {
              once: true,
              margin: "-70px",
              amount: 0.12,
            }
          : undefined
      }
      whileHover={
        canTilt && !disabled
          ? {
              y: config.lift,
              scale: config.scale,
              transition: {
                type: "spring",
                stiffness: 270,
                damping: 22,
                mass: 0.45,
              },
            }
          : undefined
      }
      whileTap={
        isInteractive && !disabled
          ? {
              scale: 0.992,
              transition: {
                duration: 0.12,
              },
            }
          : undefined
      }
      transition={{
        opacity: {
          duration: 0.5,
          delay: revealDelay,
          ease: [0.22, 1, 0.36, 1],
        },
        y: {
          duration: 0.58,
          delay: revealDelay,
          ease: [0.22, 1, 0.36, 1],
        },
        filter: {
          duration: 0.48,
          delay: revealDelay,
          ease: "easeOut",
        },
      }}
      onPointerEnter={handlePointerEnter}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      onPointerCancel={handlePointerLeave}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onClick={onClick}
      className={`
        relative isolate
        overflow-hidden
        [transform-origin:center_center]

        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-[color:var(--accent)]
        focus-visible:ring-offset-2
        focus-visible:ring-offset-[color:var(--bg-deep)]

        disabled:cursor-not-allowed
        disabled:opacity-60

        ${className}
      `}
      style={{
        rotateX: canTilt ? rotateX : 0,
        rotateY: canTilt ? rotateY : 0,
        transformPerspective: config.perspective,
        transformStyle: canTilt
          ? "preserve-3d"
          : "flat",
        backfaceVisibility: "hidden",
        WebkitBackfaceVisibility: "hidden",
        willChange: canTilt
          ? "transform"
          : "auto",
      }}
      type={as === "button" ? type : undefined}
      href={as === "a" && !disabled ? href : undefined}
      target={as === "a" ? target : undefined}
      rel={as === "a" ? rel : undefined}
      aria-label={ariaLabel}
      aria-disabled={disabled || undefined}
      disabled={as === "button" ? disabled : undefined}
    >
      {/* Luz que acompanha o cursor */}
      {glow && (
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0"
          style={{
            background: glowBackground,
            opacity: glowOpacity,
          }}
        />
      )}

      {/* Reflexo superficial */}
      {glow && (
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute -inset-[28%] z-0 rotate-[18deg] bg-[linear-gradient(110deg,transparent_36%,color-mix(in_srgb,var(--text)_7%,transparent)_49%,transparent_62%)] blur-[2px]"
          style={{
            x: sheenX,
            y: sheenY,
            opacity: glowOpacity,
          }}
        />
      )}

      {/* Contorno editorial */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[1] [border-radius:inherit] border border-white/[0.035]"
        style={{
          opacity: edgeOpacity,
        }}
      />

      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-[10%] top-0 z-[1] h-px bg-gradient-to-r from-transparent via-[color:var(--accent)]/55 to-transparent"
        style={{
          opacity: glowOpacity,
        }}
      />

      {/* Conteúdo elevado */}
      <div
        className="relative z-10"
        style={{
          transform: canTilt
            ? "translateZ(18px)"
            : undefined,
        }}
      >
        {children}
      </div>
    </MotionComponent>
  );
}
