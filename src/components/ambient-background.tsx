"use client";

import { motion, useReducedMotion } from "framer-motion";
import * as React from "react";

const strokes = [
  "M 0 80 C 180 10 300 150 480 70 S 760 30 960 120",
  "M 40 260 C 220 180 360 320 540 230 S 780 190 980 300",
  "M 80 430 C 240 370 380 470 560 410 S 820 350 1040 450",
];

export function AmbientBackground() {
  const reduceMotion = useReducedMotion();
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (reduceMotion) return;

    const handlePointerMove = (event: PointerEvent) => {
      const root = ref.current;
      if (!root) return;

      root.style.setProperty("--cursor-x", `${event.clientX}px`);
      root.style.setProperty("--cursor-y", `${event.clientY}px`);
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, [reduceMotion]);

  return (
    <div ref={ref} className="ambient-background" aria-hidden="true">
      <div className="ambient-grid" />
      <div className="ambient-cursor" />
      <svg
        className="ambient-sketch"
        viewBox="0 0 1080 520"
        preserveAspectRatio="none"
      >
        {strokes.map((d, index) => (
          <motion.path
            key={d}
            d={d}
            pathLength={1}
            initial={reduceMotion ? false : { pathLength: 0, opacity: 0 }}
            animate={
              reduceMotion
                ? { opacity: 0.18 }
                : { pathLength: [0, 1, 1], opacity: [0, 0.22, 0.1] }
            }
            transition={{
              duration: 9 + index * 2,
              repeat: reduceMotion ? 0 : Infinity,
              repeatDelay: 2,
              ease: "easeInOut",
              delay: index * 1.4,
            }}
          />
        ))}
      </svg>
    </div>
  );
}
