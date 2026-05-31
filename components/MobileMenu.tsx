"use client";

import { useState } from "react";
import Link from "next/link";
import { NAV } from "@/lib/nav";
import { Menu, Close } from "./icons";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        className="grid place-items-center h-11 w-11 rounded-lg text-[var(--color-bone)]/80 hover:text-white hover:bg-white/5 transition-colors"
      >
        <Menu />
      </button>

      <div
        onClick={() => setOpen(false)}
        aria-hidden="true"
        className={`fixed inset-0 z-[80] bg-black/70 backdrop-blur-sm transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />
      <aside
        role="dialog"
        aria-label="Menu"
        aria-hidden={!open}
        className={`fixed left-0 top-0 z-[90] h-dvh w-[82vw] max-w-xs bg-[var(--color-surface)] border-r hairline p-6 transition-transform duration-300 ease-out ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between mb-8">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/rain-logo.png" alt="Rain Alternative" className="logo-invert h-6 w-auto" />
          <button
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="grid place-items-center h-10 w-10 rounded-lg text-[var(--color-muted)] hover:text-white hover:bg-white/5"
          >
            <Close />
          </button>
        </div>
        <nav className="flex flex-col">
          <Link
            href="/collections/all"
            onClick={() => setOpen(false)}
            className="font-display text-2xl py-3 border-b hairline hover:text-[var(--color-magenta)] transition-colors"
          >
            Shop All
          </Link>
          {NAV.map((n) => (
            <Link
              key={n.label}
              href={n.href}
              onClick={() => setOpen(false)}
              className="font-display text-2xl py-3 border-b hairline hover:text-[var(--color-magenta)] transition-colors"
            >
              {n.label}
            </Link>
          ))}
          <Link
            href="/about"
            onClick={() => setOpen(false)}
            className="font-display text-2xl py-3 hover:text-[var(--color-magenta)] transition-colors"
          >
            About
          </Link>
        </nav>
      </aside>
    </div>
  );
}
