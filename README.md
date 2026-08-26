# Future Wrights Academy — Website

Static HTML site for **Future Wrights Academy** — AI education for Grade 9–12 students.
Headquartered in Toronto. Core team includes faculty affiliated with the University of
Toronto and Toronto Metropolitan University, alongside AI practitioners from industry.

## Pages

| File | What it is |
|---|---|
| `index.html` | Homepage entry point |
| `pages/` | All secondary site pages |
| `docs/` | Project documentation and operational runbooks |

## Stack

- Plain HTML + CSS (no framework)
- Design tokens in `styles/tokens.css`
- Inter font family (Google Fonts)
- Static assets in `assets/`

## Deployment

Connect this repo to **Cloudflare Pages** (or Netlify / Vercel / GitHub Pages):
- Build command: *none*
- Output directory: `/`
- Auto-deploys on every push to `main`

## Operational setup

Application form (Tally), info-call booking (Calendly), and tuition payment
(Stripe Payment Link) are wired through placeholder URLs in the HTML.
See [`SETUP.md`](docs/SETUP.md) for the full operations runbook.

## Team photos

Drop team member portraits into `assets/team/` as `member-1.jpg` through `member-6.jpg`.
The team section in `index.html` will pick them up automatically.
