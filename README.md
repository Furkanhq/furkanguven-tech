# furkanguven.tech

Premium portfolio for **Furkan Güven — AI Systems & Automation Engineer**.

## Positioning

The site sells one thing: bespoke systems for operations that can't stop, for
clients who pay for outcomes, not hours. Four case studies, nothing else:

| # | System | Status | What it proves |
|---|--------|--------|----------------|
| 01 | WhatsApp AI CRM for Real-Estate Agencies | Pilot build | Conversational AI + CRM integration with the rules in code (signature checks, idempotent ingest, state machine, human takeover) |
| 02 | Nefista POS | Deployed on-site | Offline-first software that cannot stop (single-writer SQLite, route-level isolation, verified backups) |
| 03 | PlanB — Concept Café | In progress | Phased client delivery, owner-owned accounts, cinematic web work |
| 04 | Grid + DCA Hybrid Trading Bot | Paper trading | Risk engineering and honest evaluation (walk-forward backtests, hardcoded fail-safes) |

Statuses are literal. Do not upgrade one without the matching change in the
source project's notes. `lib/projects.ts` is the only place to edit them.

## Design system

**Direction:** private bank meets architectural monograph. Dark, warm,
typographic, one metallic accent. No cards, no shadows, no template DNA.

- **Type** — Fraunces (display serif, optical sizing, italic accents),
  Archivo (body/UI), Fragment Mono (labels, indexes, schematics).
- **Color** — ink `#0c0b09`, bone `#eae3d6`, muted `#98907d`,
  brass `#c2a265`, hairlines at 13% bone.
- **Atmosphere** — fixed film-grain overlay (SVG turbulence), two barely-there
  radial brass glows, brass text selection.
- **Motion** — one orchestrated hero reveal (masked line-by-line), scroll-in
  reveals (`whileInView`, once), CSS-only marquee, brass underlines that draw
  in from the left. `prefers-reduced-motion` respected everywhere.
- **Layout** — 12-column editorial grid, sticky case-study meta rails,
  hairline-ruled rows instead of boxes, aggressive vertical whitespace.

## Stack & rationale

- **Next.js 16 (App Router) + React 19** — same stack proven in production on
  a private client deployment; static-rendered single route, so it ships as
  pure HTML/CSS with a small motion runtime.
- **Tailwind CSS v4** — design tokens live in `@theme` inside
  `app/globals.css`; no config file.
- **Framer Motion 12** — only for the hero orchestration and scroll reveals;
  everything else is CSS.
- **next/font** — self-hosted Google fonts, zero layout shift, no third-party
  requests at runtime.
- Content is data-driven: case studies live in `lib/projects.ts`. Adding a
  project is a data edit, not a layout edit.

## Structure

```
app/
  layout.tsx        fonts, metadata, grain overlay
  page.tsx          section composition (server component)
  globals.css       @theme tokens + custom utilities
  icon.svg          favicon monogram
  robots.ts / sitemap.ts
components/
  nav.tsx           fixed nav, Istanbul clock, availability signal
  hero.tsx          masked staggered reveal
  marquee.tsx       CSS capability ticker
  work.tsx          case studies + schematic panels
  capabilities.tsx  three-column service architecture
  process.tsx       four-step engagement model
  contact.tsx       CTA + footer
lib/projects.ts     curated case-study data
```

## Run

```bash
npm install
npm run dev    # http://localhost:3000
npm run build  # production build
```

## Deploy

Push to a GitHub repo, import in Vercel, add the `furkanguven.tech` domain.
No environment variables required.
