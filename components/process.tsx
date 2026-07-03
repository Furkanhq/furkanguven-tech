import { Reveal } from "./reveal";

const STEPS = [
  {
    index: "01",
    title: "Discovery",
    body: "A short, sharp diagnostic of where value leaks: missed leads, manual hours, systems that don't talk to each other. You receive a written brief before a single line of code is written.",
  },
  {
    index: "02",
    title: "Architecture",
    body: "The system on paper first — every integration, every failure mode, every fallback path. You approve the blueprint before the build begins. No surprises, by design.",
  },
  {
    index: "03",
    title: "Build & integrate",
    body: "Short cycles, working software at every step — wired into your real stack, not a demo environment. Reply-first hot paths, graceful degradation, and human override come standard.",
  },
  {
    index: "04",
    title: "Handover",
    body: "Documentation is a deliverable, not an afterthought: an operations manual, an onboarding checklist, and a kill switch you control. No black boxes. No lock-in.",
  },
];

export function Process() {
  return (
    <section
      id="process"
      className="scroll-mt-20 border-t border-line px-6 py-28 md:px-10 md:py-40"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Reveal>
              <h2 className="font-display text-5xl tracking-[-0.02em] md:text-7xl lg:sticky lg:top-28">
                How it <span className="italic text-brass">runs</span>
              </h2>
            </Reveal>
          </div>

          <div className="lg:col-span-8">
            {STEPS.map((step, i) => (
              <Reveal key={step.index} delay={0.05 * i}>
                <div className="grid gap-3 border-b border-line py-9 first:pt-0 md:grid-cols-12 md:gap-8">
                  <span className="font-mono text-[11px] tracking-[0.3em] text-brass md:col-span-2 md:pt-2">
                    ({step.index})
                  </span>
                  <h3 className="font-display text-2xl md:col-span-3 md:text-3xl">
                    {step.title}
                  </h3>
                  <p className="text-[15px] leading-relaxed text-muted md:col-span-7">
                    {step.body}
                  </p>
                </div>
              </Reveal>
            ))}

            <Reveal delay={0.15}>
              <p className="pt-10 font-display text-xl italic leading-relaxed text-bone/85 md:text-2xl">
                Every system ships with its own operations manual —{" "}
                <span className="text-brass">
                  you own it, understand it, and can switch it off.
                </span>
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
