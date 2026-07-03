import { Reveal } from "./reveal";

export function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-20 border-t border-line px-6 pb-12 pt-28 md:px-10 md:pt-44"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="mb-8 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.3em] text-muted">
            <span className="breathe inline-block h-1.5 w-1.5 rounded-full bg-brass" />
            Now booking — Q3 2026
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <h2 className="max-w-5xl font-display text-[clamp(2.6rem,7.5vw,6.5rem)] leading-[1.02] tracking-[-0.02em]">
            Have a system <span className="italic text-brass">in mind?</span>
          </h2>
        </Reveal>

        <Reveal delay={0.16}>
          <p className="mt-10 max-w-xl text-base leading-relaxed text-muted md:text-lg">
            One engagement at a time, taken personally. Tell me what&apos;s
            leaking — leads, hours, or attention — and you&apos;ll get an
            engineer&apos;s diagnosis, not a sales deck.
          </p>
        </Reveal>

        <Reveal delay={0.24}>
          <a
            href="mailto:info@furkanguven.tech"
            className="link-brass mt-14 inline-block break-all font-display text-[clamp(1.4rem,4.2vw,3.4rem)] italic text-bone md:mt-20"
          >
            info@furkanguven.tech
          </a>
        </Reveal>

        <footer className="mt-28 flex flex-col justify-between gap-4 border-t border-line py-8 font-mono text-[11px] uppercase tracking-[0.22em] text-muted md:mt-36 md:flex-row">
          <p>© 2026 Furkan Güven</p>
          <p>Designed &amp; engineered by hand</p>
          <p>Türkiye · GMT+3</p>
        </footer>
      </div>
    </section>
  );
}
