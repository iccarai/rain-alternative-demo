"use client";

import { motion, useReducedMotion } from "framer-motion";

// The neon glow (breathe) is a CSS filter animation on .neon-logo.
// Framer adds a "drops in from above and settles" entrance, on theme with rain.
export default function HeroLogo() {
  const reduce = useReducedMotion();
  return (
    <motion.img
      src="/rain-logo.png"
      alt="Rain Alternative"
      className="neon-logo mx-auto h-32 sm:h-52 w-auto mt-7"
      initial={reduce ? false : { opacity: 0, y: -60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 120, damping: 13, delay: 0.1 }}
    />
  );
}
