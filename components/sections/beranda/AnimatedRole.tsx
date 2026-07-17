"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { HERO } from "@/lib/constants/hero";

/** Tahan di setiap role sebelum berganti */
const HOLD_MS = 2000;

export function AnimatedRole() {
  const [index, setIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) return;

    const timeout = window.setTimeout(() => {
      setIndex((prev) => (prev + 1) % HERO.roles.length);
    }, HOLD_MS);

    return () => window.clearTimeout(timeout);
  }, [index, shouldReduceMotion]);

  if (shouldReduceMotion) {
    return (
      <p className="text-hero-role font-semibold tracking-tight text-primary">
        {HERO.roles[0]}
      </p>
    );
  }

  const role = HERO.roles[index];

  return (
    <div className="relative text-hero-role font-semibold tracking-tight text-primary">
      <span aria-hidden="true" className="invisible block select-none">
        Frontend Developer
      </span>

      <div className="absolute inset-0 overflow-hidden" aria-live="polite">
        <AnimatePresence mode="wait" initial={false}>
          <motion.p
            key={role}
            className="absolute inset-0 flex items-center leading-[1.2]"
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            {role}
          </motion.p>
        </AnimatePresence>
      </div>
    </div>
  );
}
