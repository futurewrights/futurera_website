# Future Wrights — Design Context

This file is the source of truth for the website's design direction. It has two parts:

- **Part A — Master Design Prompt:** the original brief, captured verbatim.
- **Part B — Implementation Status & Decisions:** a living log of what we've actually
  built, where we've deviated from the brief (and why), and what's pending.

Keep Part B updated as the design evolves.

---

# Part A — Master Website Design Prompt

## 1. Project
Redesign the website for Future Wrights (futurewrights.ai), an AI education company for
high school students (Grades 9–12, ages 13–17).

## 2. Brand Positioning
- **Mission:** Help high school students enter the AI era as creators, not passive
  consumers.
- **Core message:** "Students should enter the AI era prepared — not surprised."
- **What students gain:**
  - Deep understanding of AI
  - Real, shippable AI projects
  - Future-ready thinking and confidence before university
  - Creative and entrepreneurial mindset
- **What this brand is NOT:** a coding bootcamp, a STEM summer camp, a tutoring service.

## 3. Audience
- **Primary:** High school students, Grades 9–12, ambitious and curious.
- **Secondary:** Parents evaluating meaningful, future-oriented education.
- Tone must work for both without talking down to teens or alienating parents.

## 4. Design Philosophy
The site should feel: **cinematic, intelligent, minimal, premium, confident, futuristic,
emotionally aspirational** — the way a modern Silicon Valley product launch feels.

**Reference aesthetic:** Apple, Linear, Arc Browser, OpenAI, Vercel, Stripe.

**Hard avoids:**
- Childish STEM-camp visuals (primary colors, cartoon robots, kids-with-laptops stock)
- Generic "learn to code" imagery
- Corporate education stock photography
- Heavy neon / cyberpunk
- Excessive gradients or glow
- Cluttered, busy layouts
- Cheesy AI imagery (humanoid robots, glowing brains, binary code rain)

## 5. Visual System

### Color palette
- Background: deep navy `#0A1B3D`
- Primary accent: soft gold `#F4C430`
- Secondary accent: cyan `#00E5FF`
- Neutrals: off-white text, subtle layered glass surfaces
- Verify contrast ratios for WCAG AA on all text combinations

### Typography
- A premium geometric sans for display (e.g., Inter Display, Söhne, or General Sans),
  paired with a clean body sans
- Generous line height, large display sizes, tight letter spacing on headlines

### Surfaces & effects
- Soft glassmorphism panels (low opacity, subtle blur)
- Layered glow used sparingly as emphasis, not decoration
- Floating AI-inspired UI elements (cards, status chips, prompt previews) as ambient
  detail
- Large spacing, lots of negative space

### Motion
- Subtle, purposeful — fade-ups, parallax on hero, micro-interactions on hover
- No bouncy or playful animation; cinematic, not cute

## 6. Page Sections

### 6a. Hero (Priority)
- **Headline** — pick one and commit:
  - "Prepare for the AI Era Before University."
  - "Real AI Education Built for What Comes Next."
  - "Where Students Rise to Meet the AI Era."
- **Subheadline** — covers: students build real AI projects · no prior experience
  required · mentorship, creativity, and future-ready skills.
- **CTAs:** Primary — Apply Now / Join Summer Program; Secondary — Explore Programs /
  View Student Projects.
- **Hero visual:** cinematic photography of high-school-age students (ambitious,
  intelligent, curious, diverse); realistic modern workspace (not a classroom);
  holographic AI UI overlays floating around the scene (prompt windows, project cards,
  chat snippets); collaborative, authentic teen energy — not posed. No robots, no clichéd
  AI imagery.

### 6b. Programs (to be detailed)
Anchor offerings, format, age groups, outcomes.

### 6c. Student Projects / Proof (to be detailed)
Showcase real work — chatbots, AI tools, study buddies — with student attribution.

### 6d. For Parents (to be detailed)
Outcomes, safety, pedagogy, tuition, FAQ.

### 6e. About / Why Future Wrights (to be detailed)
Founding story, philosophy, instructors, credibility markers.

### 6f. Footer / CTA band (to be detailed)
Newsletter, contact, social, secondary nav.

## 7. Copy Voice
- Confident, never hype-y
- Speaks to teens as capable adults-in-training, not kids
- Speaks to parents with substance, not buzzwords
- Short sentences. Strong verbs. No jargon walls.

---

# Part B — Implementation Status & Decisions

**Branch:** `redesign` (isolated; the minimal site on `main` is untouched).
**Scope so far:** Hero section on `index.html` only, as a proof of the visual language.
**Isolation:** all new styles are scoped under `.fw-*` classes in an inline `<style>`
block on `index.html`, so the rest of the site is unaffected until approved.

### Design system — LOCKED (2026-05)
Decided with the client; **to be applied to the rest of the site later** (this turn only
records the decision).

- **Theme:** dark navy is used for the **hero** and the **"Why Future Wrights" pillars
  section** (a deliberate dark band); the rest of the site stays **light/clean** (the
  existing white / lavender-surface look). Dark navy is used as accent bands, not rolled
  out to every section. (Originally "hero-only"; revised when the dark Why-Future-Wrights
  section was added.)
- **Typography (roll out site-wide):** **General Sans** for display/headings, **Inter**
  for body. Currently the site is Inter-only — the rollout adds General Sans to headings
  on every page (works on both light and dark sections).
- **Colors:** three only — navy + gold + cyan.
  - **Gold scale (one gold, two tones + a hover) — do not add more golds:**
    - `#F4B400` — bright **brand/logo gold**: fills/buttons, glow, and text/accents **on
      dark** backgrounds (hero). Also used for soft tints via `rgba(244,180,0,…)`.
    - `#b8860a` — **deep gold**: all gold **text & icons on light** backgrounds (passes
      WCAG AA). (Consolidated `#d6a51a` into this.)
    - `#D19A00` — button **hover** state only.
  - **Cyan = secondary accent** `#00E5FF` (bright, on dark). On **light** backgrounds use the
    deeper teal tones `#1192ad` / `#0e8fa8` / `#12a5c4` for text/icons (bright cyan fails
    contrast on white).
  - **Cyan = secondary accent**: highlights, status dots, UI chips, links — mainly on the
    dark hero. ⚠ On light backgrounds `#00E5FF` fails contrast for text/borders; use a
    deeper teal there, or keep cyan to small fills/glows only.
  - Dark-hero palette: bg navy `#0A1B3D` (+ deep `#050e1c`), text off-white `#F5F7FB` /
    muted `rgba(245,247,251,.62)`, glass surfaces `rgba(255,255,255,.05)` + hairline
    borders `rgba(255,255,255,.13)`.
  - Light-section palette: keep the existing tokens (white / `--surface` lavender / `--ink`
    text), with gold as the shared accent.
- **Rollout note:** when applying later — (1) load General Sans on all pages and set
  headings to it; (2) standardize gold/cyan accent usage; (3) retire the conflicting
  `tokens.css` (navy/Fraunces) vs `site.css` (slate/Inter) palettes in favor of this one.
- **Buttons — LOCKED (2026-05):** one button system across the site.
  - **Shape:** rounded-rect, **14px** radius (`--radius-btn`). No pills.
  - **Primary** (`.btn-primary`; `.btn-accent` is a gold alias): solid brand gold `#F4B400`
    + near-black/navy text (`--ink`), soft gold drop-shadow. (`.btn-primary` was flipped
    from slate `#353447` to gold.)
  - **Secondary** (`.btn-ghost`): transparent + 1px outline — ink on light, white on dark
    (`.section--dark`, hero).
  - **Hover (all):** lift `translateY(-2px)` + shadow **deepens**; **no color change** on the
    primary (gold stays gold — not the old darken-to-`#D19A00`). Removed the
    `.final-cta`/`.article-cta` darken-on-hover overrides.
  - **Nav CTA** (`.btn-chip`): same 14px shape; translucent-white over the dark hero,
    flips to gold primary when the header turns solid on scroll.
  - **Hero CTAs** reuse `.btn` via a `.fw-hero .btn` scope (larger 16px/15×30, dark-bg ghost
    with a cyan-glow hover). The old `.fw-btn*` classes were **retired**.
  - **Out of scope:** `for-partners.html` / `industry-track.html` keep their own parked
    button styles (separate `tokens.css` system).

### Visual system as built
- **Palette:** navy `#0A1B3D`, gold `#F4B400` (logo gold), cyan `#00E5FF`, off-white text
  `#F5F7FB`. Contrast verified: gold-on-navy ≈ 10.5:1, cyan-on-navy ≈ 11:1 (both pass
  WCAG AA). Rule: body text stays off-white; gold/cyan are for headlines, accents, and
  UI chips only.
- **Type:** General Sans (display, via Fontshare) + Inter (body). Headline uses tight
  tracking and `clamp()` sizing.
- **Hero background:** radial navy gradient with soft gold + cyan glow orbs and a masked
  grid texture. Hero extends up behind the sticky header (`margin-top: -95px`) so the
  header blends into the navy.

### Decisions / deviations from the brief
- **Eyebrow:** "AI education for high schoolers." (uppercase, **cyan** `#00E5FF` + cyan dot
  — secondary accent, leaving gold for the headline emphasis).
- **Headline (style = "Refined"):** "Prepare for the **AI era** before your future career
  begins." — General Sans **Semibold 600**, **sentence case** (not all-caps), large
  **clamp(38px, 4.8vw, 60px)**, line-height 1.08, letter-spacing −0.02em (~720px column;
  forced breaks make three lines — "Prepare for the" / "AI era before your" / "future career
  begins."). **"AI era" in solid gold `#F4B400`** (not a gradient). Chosen over an all-caps "Impact" variant for the
  Apple/Linear premium feel. (Parked wordings: "…before university.", "…your
  future career.", "…university and work", original "AI education for high schoolers…".)
- **Lede / description:** "Most teens are AI consumers. Future Wrights helps high schoolers
  understand AI deeply, build real projects, and develop the creativity and confidence to
  lead the AI era — prepared, not surprised." Merges the consumer→creator hook
  (`EVIDENCE-BASE.md` §1) and "prepared, not surprised" with the reference mockup's three
  pillars (understand deeply · build real projects · creativity + confidence to lead). The
  longer "fluency, judgment, portfolio universities and employers expect" tail and the 80%
  Gen Z opener [1] are parked.
- **Hero CTAs:** "Book a 20-minute session" (primary, → calendar) + "See our programs"
  (ghost, → #ecosystem) — original CTAs retained.
- **Hero layout:** **text left, photo right** — copy (eyebrow/headline/lede/CTAs) on the
  navy at left; the student photo **fills the entire hero** (`object-fit: cover; inset:0;
  height:100%`) so it always covers the section at any viewport size, with a gentle radial
  edge-feather and a **left-weighted navy scrim** so the copy stays readable while the
  students show on the right. Tradeoff: cover zooms the students on tall/narrow viewports.
  NOTE: judge size/scrim in a real browser. A subtle bottom
  scrim grounds it. (Earlier iterations: full-bleed cover photo; two-column with a framed
  photo; floating AI-UI cards — all superseded.)
- **Photography:** hero student photo now in place —
  `assets/aa6ac14a0380591cfa7c419fdc7a30ea27c3f87fca74c6328f04c708aee7b1e3.png` (three
  diverse high-schoolers around a laptop, navy-toned with subtle data-glow). Matches the
  brief (cinematic, diverse teens, no stock clichés) and blends with the navy hero. Other
  sections are still text/color only.
- **Header behavior:** transparent on load so it blends with the hero navy (white logo +
  nav links visible); swaps to the white bar with dark nav on scroll (color change only).
  Right-side CTA = **"Summer Bootcamp"** → `bootcamp-summer-2026.html`.
- **Motion:** staggered fade-up on load, gentle float loops (on remaining elements), and
  subtle pointer parallax on the hero background. All disabled under
  `prefers-reduced-motion`.

### Pending / next
- [x] Real student photography for the hero — added (`assets/aa6ac14…png`).
- [ ] Decide whether to roll the navy/glass system site-wide or keep it homepage-only.
- [ ] Clean up now-unused floating-card CSS before committing.
- [ ] Sections 6b–6f still to be designed once the hero direction is locked.
- [ ] Reconcile on-page stats with `EVIDENCE-BASE.md` (single source of truth for claims).

### Related context files
- `EVIDENCE-BASE.md` — research/citations supporting all factual claims and stats.

### Change log
- **2026-05** — Established cinematic navy/gold/cyan direction; built hero proof on
  `redesign`; removed floating UI cards; set header to blend with hero on load and turn
  white on scroll; right CTA set to "Summer Bootcamp".
- **2026-05** — Explored an evidence-grounded hero message (consumer→creator headline +
  80% Gen Z lede from `EVIDENCE-BASE.md`), then reverted the headline to the original.
  Final: original headline + evidence-grounded **description/lede**.
- **2026-05** — Condensed the hero description to a tighter two-sentence version
  ("Most teens are AI consumers → Future Wrights turns high schoolers into builders;
  prepared, not surprised").
- **2026-05** — Re-added the "fluency, judgment, and portfolio universities and employers
  now expect" tail to the hero description.
- **2026-05** — Added the student hero photo on the right and switched the hero to a
  two-column copy-left / image-right layout.
- **2026-05** — Removed the photo frame and feathered its edges (radial mask) to blend
  into the navy; enlarged it and let it bleed toward the right edge.
- **2026-05** — Shifted the hero gradient highlight to the left (copy side) and darkened
  the image side so the hero background matches the photo's dark background; strengthened
  the photo's edge feather for a more continuous blend.
- **2026-05** — Built a reference-mockup hero (uppercase "PREPARE FOR THE AI ERA…"
  headline, 4-item feature row, three CTAs, two floating glass UI panels), then
  **reverted** it back to the original headline + evidence-grounded description + blended
  photo at client request. (Reference mockup kept on file for future reference.)
- **2026-05** — Switched the hero to a **full-bleed background photo** with a navy scrim
  and overlaid text (from the two-column copy-left / photo-right layout).
- **2026-05** — Set eyebrow to "AI education for high schoolers."; changed the headline to
  "Prepare for the AI era before university and work." (gold "AI era").
- **2026-05** — Merged the hero description with the reference subhead — consumer→builder
  hook + three pillars (understand deeply · build real projects · creativity + confidence)
  + "prepared, not surprised".
- **2026-05** — **Locked the design system** (see "Design system — LOCKED"): dark theme
  hero-only; General Sans (display) + Inter (body) to roll out site-wide; gold primary +
  cyan secondary accents. Rollout to other pages deferred.
- **2026-05** — Switched the gold to the **logo gold `#F4B400`** (from the brief's
  `#F4C430`) across the hero; matches the existing site brand gold.
- **2026-05** — Styled the hero headline **uppercase + bold** (General Sans 700,
  ~clamp 38–66px) to match the reference mockup; "AI era" → gold.
- **2026-05** — Headline forced to **three lines** and **font reduced** (clamp 32–54px),
  dropped "and work" to match the reference; **photo moved to the right, sized down and
  vertically centered** (heads aligned to the headline) and blended into the navy.
- **2026-05** — Headline ending changed to "…before your future career." (replacing
  "…before university.") to cover both university and work; kept to three lines.
- **2026-05** — Reduced headline font (clamp 28–46px) and added `white-space:nowrap` on
  desktop (relaxed on mobile) to lock the headline at exactly three lines.
- **2026-05** — Enlarged the hero photo (~56%→~68%) and softened the feather so it bleeds
  to cover the right side without making the students giant.
- **2026-05** — Widened the photo further (~92%) so it **bleeds across the page**, with the
  feather focal shifted right (~72%) to keep the left/text area clear.
- **2026-05** — Extended the photo to **full page width** (100%, edge to edge) and added a
  left-weighted navy scrim for text legibility.
- **2026-05** — Switched the hero photo to `object-fit: cover` (inset:0, height:100%) so it
  **always fills the whole hero at any viewport size** (no gaps on resize); gentler
  edge-feather; mobile fades it to ~0.45 opacity.
- **2026-05** — Headline updated to "Prepare for the AI Era before your future career
  begins." (3 lines; font trimmed to clamp 26–42px to fit the longer last line).
- **2026-05** — Adopted the **"Refined" headline style**: General Sans Semibold 600,
  sentence case, clamp 38–60px, −0.02em, natural wrap (dropped all-caps + forced 3 lines);
  widened the text column to ~720px.
- **2026-05** — Forced "AI era" to start line 2 (break after "Prepare for the") and made
  "AI era" **solid gold** instead of the gradient.
- **2026-05** — Began the design-system rollout to body sections: **"Why it matters"**
  aligned (light refine) — General Sans headings + stat numbers, unified
  gold `#F4B400`; added a global `--cyan` token to `site.css`. (Section stays light per the
  locked hero-only-dark decision.)
- **2026-05** — Reshaped the stat cards to a premium spec: radius-md, soft shadow, removed
  the gold top-stripe in favor of a short gold accent bar, left-aligned editorial layout,
  larger General Sans numbers, softer hover lift.
- **2026-05** — Added a dark **"Why Future Wrights"** section above Mission & Vision —
  headline ("AI is redefining the future. Education should *lead the way*.") + 4 pillars
  (Future-Ready Skills · Creative Problem Solvers · Mentorship That Matters · Confidence to
  Lead) with cyan icons in glass badges. Renamed the Mission/Vision eyebrow to "Our mission
  & vision". (Second dark band — revised the hero-only-dark rule.)
- **2026-05** — Explored consolidating Mission & Vision into the "Why Future Wrights"
  section (centered intro → glass cards → M&V two-column), then **reverted** to the separate
  layout: the dark Why Future Wrights pillars section (intro left, 4 pillars right) +
  standalone light **Mission & Vision** section (#about, eyebrow "Our mission & vision").
- **2026-05** — Rolled **General Sans** out to **all homepage section headings**
  (`.section-head h2`, `.mv-intro h2`) so heading type is consistent across every section
  (was mixed: some General Sans, some Inter).
- **2026-05** — Aligned the **Mission & Vision** cards with the premium spec: soft shadow +
  hover lift, short gold accent bar, removed the gold "splash" label backgrounds (clean
  uppercase kickers), General Sans card headings, refined 16px body.
- **2026-05** — Gave the **Why Future Wrights** section the hero's cinematic backdrop:
  navy radial gradient + masked grid texture + soft gold/cyan glow orbs (was flat navy).
- **2026-05** — Rebuilt the **Ecosystem** section from a client reference (light, gold +
  cyan): eyebrow "The Future Wrights ecosystem", 2-line headline, intro + a callout box,
  then a **4-step timeline** (01 Foundation/AI Labs · 02 Specialize/University+Industry ·
  03 Create/AI Studio · 04 Connect/community) with status badges, 4-up feature-icon grids,
  abstract UI-window mockups, a community card (dark) with a node cluster, and a 4-item
  bottom strip. AI Labs = gold, the rest = cyan. (Old `.eco-journey/.eco-stage/.eco-card`
  CSS in `site.css` is now dead — clean up before commit.)
- **2026-05** — Tried recoloring the Ecosystem section to the reference's full multi-accent
  palette (gold/violet/blue/teal + blue→violet headline gradient, light community card),
  then **reverted** to the gold + cyan version (AI Labs gold, the rest cyan, dark community
  card, plain headline) per client. Multi-color kept on file as an option.
- **2026-05** — **Removed the dark "Why Future Wrights" pillars section** entirely and
  renamed the **Mission & Vision** eyebrow to "Why Future Wrights" (that section keeps its
  "Filling the gap…" headline + vision/mission cards and the `#about` anchor). The `.fw-why*`
  / `.fw-pillar*` CSS in the index `<style>` is now dead — clean up before commit.
- **2026-05** — **Rebuilt the Vision & Mission section** from a client reference: centered
  header (headline "Filling the gap between school and the **future.**" with "future." in a
  blue→violet gradient; subhead with gold/blue/violet keywords), then two premium cards —
  **Our Vision (gold, telescope icon)** and **Our Mission (violet, puzzle icon)** — each
  with a pill badge, colored headline emphasis, description, and a 4-up feature-chip row.
  Kept the eyebrow "Why Future Wrights" (reference showed "Our Vision & Mission") and
  changed "curriculum"→"school" per the reference. Uses gold + violet/blue (multi-color)
  **for this section**. Old `.mv-*` CSS is now dead. Decorative line-art / gold underline
  swoosh omitted; feature-chip icons are approximations.
- **2026-05** — **Design-philosophy decision: stay with the 3-color system** (navy + gold +
  cyan), *not* the multi-color (violet/blue/teal) from the references — for premium
  Apple/Linear-style restraint and cross-section cohesion. Re-unified the **Vision &
  Mission** section accordingly: **Vision = gold, Mission = cyan/teal** (readable
  darker shades — `#1192ad`/`#0e8fa8`/`#12a5c4` — since bright gold/cyan are low-contrast
  on white); headline "future." set in solid gold `#b8860a`. (Rule of thumb: multi-color is
  only OK as a *consistent site-wide* program-color system, not section-by-section.)
- **2026-05** — **Gradient philosophy:** gradients are for **background depth/glow only**
  (hero navy gradient, glow orbs, faint card-surface tints) — **never gradient text**.
  Text emphasis uses **solid accent colors** (gold/cyan). Avoid loud multi-stop gradients
  and heavy glows (per the brief's hard-avoids). Converted the "future." gradient text to
  solid gold to follow this.
- **2026-05** — Added a second break so "future career begins." sits on line 3 (final
  3-line layout: "Prepare for the" / "AI era before your" / "future career begins.").
- **2026-05** — Cleaned the accumulated dead CSS/JS (floating AI cards, `.fw-why*`/`.fw-pillar*`,
  `.mv-*`, `.eco-journey/.eco-stage` blocks, hero-media parallax leftovers) and committed the
  redesign checkpoint to `redesign`.
- **2026-05** — **Vision & Mission polish:** both card headlines set **fully black** (removed
  the gold/teal emphasis spans); enlarged the card icons 48→**60px**; swapped the Mission
  icon from a single puzzle piece to a **4-piece jigsaw**; removed the feature-chip icons,
  then the chips entirely (client: icons "not clean").
- **2026-05** — **Reworked the "Why Future Wrights" (#about) section into a split layout:**
  intro on the **left** (eyebrow + headline + description, left-aligned, lightly sticky) with
  **Vision over Mission stacked on the right**; chips removed. Text kept simple/black with a
  **single gold highlight** — headline "future." + the three adverbs unified to deep gold
  `#b8860a` (dropped the gold/teal/gold mix). Confirmed gold-on-light stays `#b8860a` (the
  hero's `#F4B400` is the same gold, just the dark-bg tone; logo gold sampled = `#F4B400`).
- **2026-05** — **Locked the button system** (see "Buttons — LOCKED"): rounded-rect 14px,
  gold primary with navy text, lift −2px + shadow-deepen hover. Unified the hero `.fw-btn`
  into the shared `.btn` (`.fw-hero .btn` scope for size + dark ghost), flipped
  `.btn-primary` slate→gold, retired darken-on-hover overrides, nav CTA shape → 14px.
