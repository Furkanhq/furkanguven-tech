export type Project = {
  index: string;
  title: string;
  year: string;
  status: string;
  tags: string[];
  lede: string;
  flow: string[];
  highlights: { title: string; body: string }[];
};

export const projects: Project[] = [
  {
    index: "01",
    title: "WhatsApp AI CRM for Real-Estate Agencies",
    year: "2026",
    status: "Pilot build",
    tags: ["Conversational AI", "CRM Integration", "Multi-tenant"],
    lede: "Property leads message at all hours and agencies answer at human speed. This assistant takes the first conversation on WhatsApp — it qualifies the lead, suggests listings from the agency's live portfolio, books viewings, writes everything to the agency's CRM — and steps aside the moment a human takes over.",
    flow: [
      "WhatsApp Cloud API",
      "Signature check",
      "Idempotent ingest (Postgres)",
      "Conversation state machine",
      "LLM agent — listings · lead capture · Cal.com booking",
      "Reply",
      "Agency CRM (Airtable) + Telegram alerts",
    ],
    highlights: [
      {
        title: "Rules in code, language in the model",
        body: "Identity, opt-outs, state transitions, working hours and time zones are deterministic code. The LLM only talks and proposes tool calls — it never decides who a record belongs to or whether it may reply.",
      },
      {
        title: "Human takeover that works",
        body: "When the agent replies from their own phone, the bot sees the echo, goes silent for a window, then resumes. A tenant-wide kill switch sits above every conversation state.",
      },
      {
        title: "Duplicate-proof by construction",
        body: "Webhooks are verified against the raw-body signature, and every inbound message is stored under a unique (tenant, provider message id) key — a redelivered webhook is a no-op, not a second reply.",
      },
      {
        title: "One workflow set, many agencies",
        body: "Multi-tenant from the start: a new agency is a row of configuration plus its own CRM base — no copied workflows, no per-tenant secrets.",
      },
      {
        title: "Audited, then rebuilt",
        body: "A teardown of the first version found six critical flaws, among them an unauthenticated webhook and a STOP keyword that did not actually stop the bot. The multi-tenant rebuild closes each one.",
      },
    ],
  },
  {
    index: "02",
    title: "Nefista POS",
    year: "2026",
    status: "Deployed on-site",
    tags: ["Offline-first", "Electron · Node", "SQLite"],
    lede: "A çiğköfte-and-café business needed one touchscreen to take orders, run eight tables and show the owner the numbers — and it could not stop when the internet did. Nefista POS works fully offline on a single Windows PC, with an owner dashboard reachable from the owner's phone.",
    flow: [
      "Touchscreen kiosk shell (Electron)",
      "Local core (Node, loopback only)",
      "SQLite — single writer",
      "Owner dashboard over TLS on shop Wi-Fi",
      "Nightly offsite backup + status email",
    ],
    highlights: [
      {
        title: "One writer, enforced structurally",
        body: "Only the core's main thread can write to the database. Reporting runs on a read-only connection that throws on any write, so lock contention cannot happen — it is not merely tested for.",
      },
      {
        title: "Isolation is the route surface",
        body: "The till port has no cost or profit routes and the owner port has no order or payment routes. The owner's numbers cannot leak to the counter, even through a bug.",
      },
      {
        title: "Backups nobody has to remember",
        body: "Local snapshots every four hours, an offsite archive each morning, a status email, and a monthly restore-and-verify check. A backup that depends on staff is not a backup.",
      },
      {
        title: "Built for the cloud later",
        body: "The sync outbox has been written since day one, so switching on cloud sync replays the full history — no migration, no data gap.",
      },
    ],
  },
  {
    index: "03",
    title: "PlanB — Concept Café",
    year: "2026",
    status: "In progress",
    tags: ["Client engagement", "Web · Brand", "Phased delivery"],
    lede: "A concept café's whole digital footprint, built in phases and kept in the owner's name: corporate email and an AI-agent mailbox, a cinematic website, then a cloud-connected POS and a QR loyalty app.",
    flow: [
      "Corporate email — live",
      "AI-agent mail on a subdomain — planned",
      "Cinematic website — built, awaiting client copy",
      "Cloud POS — planned",
      "QR loyalty app — planned",
    ],
    highlights: [
      {
        title: "Ownership by design",
        body: "Every account — domains, DNS, mail, hosting — lives under the owner's name with the developer as a member, so the owner keeps everything if the engagement ends.",
      },
      {
        title: "Mail that passes first time",
        body: "Corporate mailboxes are live with SPF, DKIM and DMARC passing and inbound and outbound tested. The AI-agent mailbox is planned on its own subdomain to protect the root domain's reputation.",
      },
      {
        title: "A hero built from AI-generated frames",
        body: "The site opens on a canvas frame sequence scrubbed by scroll, generated with AI image and video models and held to a measured performance budget.",
      },
      {
        title: "A POS that feeds loyalty",
        body: "Phase two reuses Nefista's architecture but is cloud-connected from day one, because a points programme needs one central ledger.",
      },
    ],
  },
  {
    index: "04",
    title: "Grid + DCA Hybrid Trading Bot",
    year: "2026",
    status: "Paper trading",
    tags: ["Trading systems", "Python", "Risk engineering"],
    lede: "A spot-market grid and dollar-cost-averaging bot for Bybit, built the opposite way round to most trading bots: the backtester was written to try to kill the idea first, and a hard pass/fail gate stands between the strategy and real money.",
    flow: [
      "Public candle history",
      "Walk-forward backtest (fees modelled)",
      "Pass/fail gate",
      "Bot core — 60 s reconciliation loop",
      "Hardcoded safety layer",
      "Paper mode on a VPS (systemd)",
    ],
    highlights: [
      {
        title: "Honest backtesting",
        body: "Walk-forward and out-of-sample, with exchange fees and fill rules modelled. Every candidate configuration lost to simply holding cash, so the bot runs on paper only — and the project says so.",
      },
      {
        title: "Fail-safes that can't be configured away",
        body: "Safety limits are hardcoded, not config: a 25% drawdown breaker halts and holds — it never liquidates — and the grid never re-centres downward.",
      },
      {
        title: "Crash-safe by drill",
        body: "The bot reconciles its state against the exchange every 60 seconds and uses unique order IDs, so a retried request cannot place a duplicate order. The test suite includes crash-recovery drills.",
      },
    ],
  },
];
