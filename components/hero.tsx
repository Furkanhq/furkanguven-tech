"use client";

import { motion, useReducedMotion } from "framer-motion";
import { EASE } from "./reveal";

const LINES: { text: string; accent?: boolean }[] = [
  { text: "AI systems that" },
  { text: "answer, book," },
  { text: "and publish —" },
  { text: "unattended.", accent: true },
];

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="top"
      className="relative flex min-h-svh flex-col justify-end px-6 pb-16 pt-32 md:px-10 md:pb-20"
    >
      <div className="mx-auto w-full max-w-7xl">
        <motion.p
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.1 }}
          className="mb-8 font-mono text-[11px] uppercase tracking-[0.3em] text-muted md:mb-12"
        >
          Furkan Güven&nbsp;&nbsp;·&nbsp;&nbsp;AI Systems &amp; Automation
          Engineer&nbsp;&nbsp;·&nbsp;&nbsp;Türkiye&nbsp;(GMT+3)
        </motion.p>

        <h1 className="font-display text-[clamp(2.7rem,10.5vw,9.5rem)] leading-[1.02] tracking-[-0.02em]">
          {LINES.map((line, i) => (
            <span key={line.text} className="block overflow-hidden pb-[0.2em]">
              <motion.span
                className={`block ${
                  line.accent ? "italic text-brass" : "text-bone"
                }`}
                initial={reduce ? false : { y: "115%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1.15, delay: 0.25 + i * 0.12, ease: EASE }}
              >
                {line.text}
              </motion.span>
            </span>
          ))}
        </h1>

        <div className="mt-12 flex flex-col justify-between gap-10 md:mt-16 md:flex-row md:items-end">
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.95, ease: EASE }}
            className="max-w-xl text-base leading-relaxed text-muted md:text-lg"
          >
            Bespoke automation for revenue-critical operations — conversational
            concierges wired into your CRM, content pipelines that run while
            you sleep, and full-stack products polished to the pixel.
          </motion.p>

          <motion.a
            href="#work"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="link-brass inline-flex w-fit items-center gap-3 font-mono text-[11px] uppercase tracking-[0.25em] text-bone"
          >
            Selected work
            <span aria-hidden className="text-brass">
              ↓
            </span>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
