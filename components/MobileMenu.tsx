"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { NAV } from "@/lib/nav";
import { Menu, Close } from "./icons";

const links = [
  { label: "Shop All", href: "/collections/all" },
  ...NAV,
  { label: "About", href: "/about" },
];

const panelItems = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05, delayChildren: 0.08 } },
};
const linkItem = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();
  const spring = reduce
    ? { duration: 0 }
    : { type: "spring" as const, stiffness: 380, damping: 38 };

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        className="grid place-items-center h-11 w-11 rounded-lg text-[var(--color-bone)]/80 hover:text-white hover:bg-white/5 transition-colors"
      >
        <Menu />
      </button>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              key="scrim"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setOpen(false)}
              aria-hidden="true"
              className="fixed inset-0 z-[80] bg-black/70 backdrop-blur-sm"
            />
            <motion.aside
              key="panel"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={spring}
              role="dialog"
              aria-label="Menu"
              className="fixed left-0 top-0 z-[90] h-dvh w-[82vw] max-w-xs bg-[var(--color-surface)] border-r hairline p-6"
            >
              <div className="flex items-center justify-between mb-8">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/rain-logo.png"
                  alt="Rain Alternative"
                  className="logo-invert h-6 w-auto"
                />
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="grid place-items-center h-10 w-10 rounded-lg text-[var(--color-muted)] hover:text-white hover:bg-white/5"
                >
                  <Close />
                </button>
              </div>
              <motion.nav
                variants={panelItems}
                initial="hidden"
                animate="visible"
                className="flex flex-col"
              >
                {links.map((n, i) => (
                  <motion.div key={n.label} variants={linkItem}>
                    <Link
                      href={n.href}
                      onClick={() => setOpen(false)}
                      className={`block font-display text-2xl py-3 hover:text-[var(--color-magenta)] transition-colors ${
                        i < links.length - 1 ? "border-b hairline" : ""
                      }`}
                    >
                      {n.label}
                    </Link>
                  </motion.div>
                ))}
              </motion.nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
