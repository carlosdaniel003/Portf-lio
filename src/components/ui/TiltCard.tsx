// src\components\ui\TiltCard.tsx
"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import {
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
  onClick?: React.MouseEventHandler<HTMLElement>;
};

const tiltConfig = {
  subtle: {
    rotateX: 4,
    rotateY: 5,
    lift: -3,
    glow: 12,
  },

  medium: {
    rotateX: 6,
    rotateY: 8,
    lift: -5,
    glow: 16,
  },

  strong: {
    rotateX: 7,
    rotateY: 9,
    lift: -6,
    glow: 22,
  },
};

export default function TiltCard({
  as = "div",
  children,
  className = "",
  intensity = "medium",
  glow = true,
  reveal = true,
  revealDelay = 0,
  type = "button",
  href,
  target,
  rel,
  ariaLabel,
  disabled,
  onClick,
}: TiltCardProps) {
  const config = tiltConfig[intensity];
  const [canTilt, setCanTilt] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, {
    stiffness: 90,
    damping: 24,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 90,
    damping: 24,
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

  const glowX = useTransform(
    smoothX,
    [-0.5, 0.5],
    ["24%", "76%"]
  );

  const glowY = useTransform(
    smoothY,
    [-0.5, 0.5],
    ["20%", "80%"]
  );

  const glowBackground = useMotionTemplate`
    radial-gradient(
      circle at ${glowX} ${glowY},
      color-mix(in srgb, var(--accent) ${config.glow}%, transparent),
      transparent 42%
    )
  `;

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      "(hover: hover) and (pointer: fine)"
    );

    function updateTiltAvailability() {
      setCanTilt(mediaQuery.matches);
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
  }, []);

  function handleMouseMove(
    event: React.MouseEvent<HTMLElement>
  ) {
    if (!canTilt) {
      return;
    }

    const rect =
      event.currentTarget.getBoundingClientRect();

    const x =
      (event.clientX - rect.left) / rect.width - 0.5;

    const y =
      (event.clientY - rect.top) / rect.height - 0.5;

    mouseX.set(x);
    mouseY.set(y);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  const MotionComponent = motion[as] as any;

  return (
    <MotionComponent
      initial={
        reveal
          ? {
              opacity: 0,
              y: 22,
            }
          : undefined
      }
      whileInView={
        reveal
          ? {
              opacity: 1,
              y: 0,
            }
          : undefined
      }
      viewport={
        reveal
          ? {
              once: true,
              margin: "-60px",
              amount: 0.12,
            }
          : undefined
      }
      onMouseMove={
        canTilt ? handleMouseMove : undefined
      }
      onMouseLeave={
        canTilt ? handleMouseLeave : undefined
      }
      onClick={onClick}
      whileHover={
        canTilt
          ? {
              y: config.lift,
            }
          : undefined
      }
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: revealDelay,
      }}
      className={`relative overflow-hidden ${className}`}
      style={
        canTilt
          ? {
              rotateX,
              rotateY,
              transformStyle: "preserve-3d",
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
            }
          : {
              transformStyle: "flat",
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
            }
      }
      type={as === "button" ? type : undefined}
      href={as === "a" ? href : undefined}
      target={as === "a" ? target : undefined}
      rel={as === "a" ? rel : undefined}
      aria-label={ariaLabel}
      disabled={as === "button" ? disabled : undefined}
    >
      {glow && canTilt && (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: glowBackground,
          }}
        />
      )}

      <div className="relative z-10">
        {children}
      </div>
    </MotionComponent>
  );
}
