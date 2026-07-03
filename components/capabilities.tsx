import { Reveal } from "./reveal";

const CAPABILITIES = [
  {
    index: "01",
    title: "Conversational AI, wired to revenue",
    body: "Concierge agents that answer in seconds, in the client's language — qualifying leads, searching live inventory, booking real calendar slots. Integrated with your CRM, with a human override built in, because an agent without a kill switch is a liability.",
    tools: "n8n · LLM agents · Twilio · Airtable · Cal.com · Redis · Telegram",
  },
  {
    index: "02",
    title: "Pipelines that run unattended",
    body: "End-to-end automation for work that used to be a job: script, voice, render, publish. Stateless services behind authenticated contracts, engineered to degrade gracefully — a single failure never takes the system down.",
    tools: "Python · FastAPI · Docker · Whisper · MoviePy · ElevenLabs · YouTube API",
  },
  {
    index: "03",
    title: "Products, polished to the pixel",
    body: "Full-stack web applications with security taken personally — hardened authentication, row-level security, scoped sessions — and the kind of micro-interactions enterprise users rarely get to enjoy.",
    tools: "Next.js · React · TypeScript · Tailwind · Framer Motion · Supabase · Vercel",
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
