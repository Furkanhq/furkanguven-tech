const ITEMS = [
  "WhatsApp Concierges",
  "LLM Agent Design",
  "CRM Orchestration",
  "Booking Automation",
  "Content Pipelines",
  "Media Engineering",
  "Next.js Products",
  "Self-Hosted Infrastructure",
];

function Row() {
  return (
    <div className="flex shrink-0 items-center">
      {ITEMS.map((item) => (
        <span key={item} className="flex items-center">
          <span className="px-8 font-display text-2xl italic text-bone/80 md:text-3xl">
            {item}
          </span>
          <span aria-hidden className="text-sm text-brass">
            ✦
          </span>
        </span>
      ))}
    </div>
  );
}

export function Marquee() {
  return (
    <div
      aria-hidden
      className="overflow-hidden border-y border-line py-6 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]"
    >
      <div className="animate-marquee flex w-max">
        <Row />
        <Row />
      </div>
    </div>
  );
}
