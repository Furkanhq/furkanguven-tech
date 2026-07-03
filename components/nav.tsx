"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { EASE } from "./reveal";

const LINKS = [
  { href: "#work", label: "Work" },
  { href: "#capabilities", label: "Capabilities" },
  { href: "#process", label: "Process" },
  { href: "#contact", label: "Contact" },
];

function Clock() {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      timeZone: "Europe/Istanbul",
    });
    const tick = () => setTime(fmt.format(new Date()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="font-mono text-[11px] tracking-[0.18em] text-muted tabular-nums">
      TR&nbsp;{time ?? "--:--:--"}
    </span>
  );
}

export function Nav() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 1.1, ease: EASE }}
      className="fixed inset-x-0 top-0 z-50 bg-ink/55 backdrop-blur-md"
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:px-10">
        <a href="#top" className="font-display text-xl italic leading-none">
          fg<span className="text-brass">.</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="link-brass font-mono text-[11px] uppercase tracking-[0.22em] text-muted transition-colors duration-300 hover:text-bone"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-5">
          <Clock />
          <a
            href="#contact"
            className="hidden items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-bone sm:flex"
          >
            <span className="breathe inline-block h-1.5 w-1.5 rounded-full bg-brass" />
            Booking&nbsp;Q3
          </a>
        </div>
      </div>
    </motion.header>
  );
}
