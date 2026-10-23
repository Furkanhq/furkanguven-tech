import { Reveal } from "./reveal";

const CAPABILITIES = [
  {
    index: "01",
    title: "Conversational AI, wired to revenue",
    body: "Agents that answer in seconds — qualifying leads, searching live inventory, booking real calendar slots. Integrated with your CRM, with the rules in code and a human always able to take over, because an agent without a kill switch is a liability.",
    tools: "n8n · LLM agents · WhatsApp Cloud API · Postgres · Airtable · Cal.com",
  },
  {
    index: "02",
    title: "Systems that fail safely",
    body: "Software for operations that can't stop: offline-first, single-writer, hardcoded safety limits, tested against crashes. Engineered so a single failure never takes the whole system down.",
    tools: "Node.js · Electron · SQLite · Python · systemd · Cloudflare R2",
  },
  {
    index: "03",
    title: "Products, polished to the pixel",
    body: "Websites and applications where the craft shows — considered typography, motion that earns its place, measured performance budgets — delivered in phases, with every account in the client's own name.",
    tools: "Next.js · Astro · GSAP · TypeScript · Tailwind · Cloudflare",
  },
];

export function Capabilities() {
  return (
    <section
      id="capabilities"
      className="scroll-mt-20 border-t border-line px-6 py-28 md:px-10 md:py-40"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <h2 className="mb-16 font-display text-5xl tracking-[-0.02em] md:mb-24 md:text-7xl">
            What I <span className="italic text-brass">build</span>
          </h2>
        </Reveal>

        <div className="grid gap-14 md:grid-cols-3 md:gap-10">
          {CAPABILITIES.map((cap, i) => (
            <Reveal key={cap.index} delay={0.1 * i}>
              <div className="flex h-full flex-col">
                <span className="font-mono text-[11px] tracking-[0.3em] text-brass">
                  ({cap.index})
                </span>
                <h3 className="mt-5 font-display text-2xl leading-snug md:text-3xl">
                  {cap.title}
                </h3>
                <p className="mt-5 flex-1 text-[15px] leading-relaxed text-muted">
                  {cap.body}
                </p>
                <p className="mt-8 border-t border-line pt-4 font-mono text-[11px] leading-loose tracking-[0.08em] text-bone/60">
                  {cap.tools}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
