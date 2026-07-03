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
    title: "AI Concierge for Luxury Real Estate",
    year: "2026",
    status: "In production",
    tags: ["Conversational AI", "CRM Orchestration", "WhatsApp"],
    lede: "Luxury listings generate inquiries at every hour, in more than one language — and agencies answer at human speed. This concierge greets every lead on WhatsApp in seconds: it qualifies, searches the live portfolio, books viewings against real calendars, writes everything to the CRM, and hands the agency a one-tap kill switch.",
    flow: [
      "WhatsApp (Twilio)",
      "Redis spam guard",
      "Opt-out gate",
      "LLM agent — CRM upsert · listing search · Cal.com booking",
      "Instant reply",
      "Async CRM log",
      "Telegram control plane",
    ],
    highlights: [
      {
        title: "Reply-first architecture",
        body: "Database writes were moved off the hot path entirely. The lead hears back first; CRM logging is fire-and-forget. No conversation ever waits on a spreadsheet.",
      },
      {
        title: "A human hand on the wheel",
        body: "Every interaction streams to a Telegram control plane with an inline “stop AI for this client” switch — because an agent without an override is a liability, not an asset.",
      },
      {
        title: "Graceful degradation by design",
        body: "If the CRM or the model fails, the lead receives a bilingual fallback and the operator gets a critical alert. One failure never takes down the other conversations.",
      },
      {
        title: "Compliance at the gate",
        body: "STOP/START opt-outs are enforced before the agent ever runs, backed by per-sender rate limiting and a blacklist path.",
      },
      {
        title: "Ships as a product, not a demo",
        body: "Delivered with an operations manual: client onboarding checklist, webhook security spec, and a five-minute sales demo script.",
      },
    ],
  },
  {
    index: "02",
    title: "The Shorts Factory",
    year: "2026",
    status: "Autonomous pipeline",
    tags: ["Automation Pipeline", "Media Engineering", "Python"],
    lede: "Publishing daily short-form video is a full-time job: script, voice, captions, edit, upload, schedule. This is that job, retired — an end-to-end pipeline that turns a topic into a published, scheduled YouTube Short with no one at the desk.",
    flow: [
      "Topic → script (n8n)",
      "ElevenLabs voiceover",
      "FastAPI render worker",
      "Whisper word-level timestamps",
      "Caption engine (frame-sync)",
      "MoviePy 9:16 assembly",
      "YouTube Data API — scheduled publish",
    ],
    highlights: [
      {
        title: "Frame-accurate captions",
        body: "Whisper word-level timestamps drive a custom PIL caption renderer, so every word lands on screen the frame it is spoken — the retention-style captions, generated, not hand-cut.",
      },
      {
        title: "A clean contract between brains and brawn",
        body: "Orchestration lives in n8n; the media-heavy work lives in a Dockerized FastAPI worker behind bearer-token auth. One POST in, `{ video_id, youtube_url, status }` out.",
      },
      {
        title: "Built to scale sideways",
        body: "The worker is stateless — audio in, video out, nothing retained. Need more throughput? Run more containers behind the same contract.",
      },
    ],
  },
  {
    index: "03",
    title: "Zumra — A Private Product for Two",
    year: "2026",
    status: "Live — private deployment",
    tags: ["Full-Stack Product", "Next.js 16", "Supabase"],
    lede: "A bespoke, mobile-first web app built for an audience of exactly two — and engineered like it serves two million. Memory wall, shared boards, moods, and an admin panel, behind custom-built authentication. Proof that polish and security get the same care at any scale.",
    flow: [
      "Next.js 16 App Router · React 19",
      "Edge auth guard",
      "scrypt-hashed per-user credentials",
      "HMAC-signed scoped sessions",
      "Server actions with per-user authorization",
      "Supabase Postgres + Storage (RLS)",
      "Vercel — custom domain",
    ],
    highlights: [
      {
        title: "Authentication, taken personally",
        body: "No auth SDK shortcuts: scrypt password hashing, HMAC-signed session cookies with separate hub and admin scopes, and authorization enforced inside every server action — not just at the door.",
      },
      {
        title: "Micro-interactions that survive SSR",
        body: "A deterministic, seeded particle system renders identically on server and client — ambience without hydration errors, tunable live from the admin panel.",
      },
      {
        title: "An admin panel as its own product",
        body: "Content, theming, background atmosphere, and per-user credentials are all managed from a custom CMS — no redeploys to change the experience.",
      },
    ],
  },
];

export const lab = [
  {
    title: "Turkish → English live dictation",
    body: "A macOS hold-to-talk utility: speak Turkish, get polished English at the cursor. GPT transcription with automatic model fallback.",
  },
  {
    title: "Self-hosted automation infrastructure",
    body: "A private n8n orchestration server at api.furkanguven.tech — the engine room behind the concierge and the factory.",
  },
  {
    title: "This site",
    body: "Next.js 16, Tailwind v4, Framer Motion. Designed and typeset by hand — no template was harmed, or used.",
  },
];
