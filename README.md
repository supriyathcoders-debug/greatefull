# Grateful Marketing™ Website

Marketing website for **Grateful Marketing™** — a North American, human-first AI marketing consultancy. Built with Next.js, Tailwind CSS v4, and Framer Motion.

**Live preview (latest deploy):** [new-website-seven-blond.vercel.app](https://new-website-seven-blond.vercel.app)

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | Next.js 16 (App Router) |
| UI | React 19, Tailwind CSS v4 |
| Animation | Framer Motion |
| Fonts | Outfit, Cormorant Garamond, Playfair Display |
| Hosting | Vercel |
| Repo | [supriyathcoders-debug/newWebsite](https://github.com/supriyathcoders-debug/newWebsite) |

---

## Getting Started

```bash
npm install
npm run dev        # Webpack dev server (recommended — stable)
npm run dev:turbo  # Turbopack dev server (optional)
npm run build      # Production build
npm run start      # Run production server locally
npm run lint       # ESLint
```

Open [http://localhost:3000](http://localhost:3000).

---

## Project Structure

```
app/
  page.tsx                 # Homepage (9 sections in client-specified order)
  layout.tsx               # Root layout, fonts, metadata, chat widget
  globals.css              # Tailwind + brand design tokens
  ai-voice-agents/         # AI Voice Agents landing page
  ai-revenue-audit/        # Revenue audit funnel page
  pre-booking/             # Pre-booking funnel page
  contact/                 # Contact page
  about/                   # About page
  services/                # Services page
  testimonials/            # Full testimonials page
  privacy-policy/          # Privacy policy

components/
  home/                    # Homepage section components
  ui/                      # Reusable UI (buttons, cards, animations)
  navbar.tsx               # Fixed navigation
  footer.tsx               # Site footer
  site-shell.tsx           # Layout wrapper (nav + main + footer)
  testimonials-section.tsx # Filterable testimonial carousel

lib/
  content/home.ts          # Homepage copy (Hero, Services, Industries, etc.)
  testimonials.ts          # All client testimonials (22 entries)
  constants.ts             # Booking URL, brand image paths
  crm/                     # Form submission helpers

public/images/brand/       # Client handoff brand images (15+ assets)
```

---

## Homepage Sections

The homepage follows the client visual map in this order:

1. **Hero** — Full-viewport background, headline, CTAs  
2. **Gratitude™ Framework** — 9-pillar methodology with heart-circuit visual  
3. **About** — Founder-led agency story  
4. **Services** — Four pillars of purpose-driven growth  
5. **Testimonials** — Filterable carousel by service category  
6. **Who We Serve (Industries)** — Six industry cards  
7. **Founder Quote** — Andrea's signature quote  
8. **AI Platform** — Platform features and compliance  
9. **Final CTA** — Closing call to action  

All section copy lives in `lib/content/home.ts` for easy updates without touching layout code.

---

## Work Completed

### 1. Visual Asset Integration

Integrated 15 client handoff images from the developer README into the correct sections:

| Image | Section |
|-------|---------|
| `hero_gold_silhouette_woman_chin_bob.png` | Hero background |
| `heart_circuit_gratitude.png` | Gratitude Framework |
| `agency_professional_woman.png` | About |
| `hero_human_spark.png` | Service 01 — AI Business Consulting |
| `bridge_motif_strategy.png` | Service 02 — Marketing Strategy |
| `cupped_hands_spark.png` | Service 03 — Team Training |
| `client_growth_transformation.png` | Service 04 — AI Voice Agents |
| `hands_meeting_minimalist.png` | Testimonials header |
| `footprints_turning_to_light.png` | Who We Serve |
| `founder_strategic_reflection.png` | Founder Quote |
| `ai_platform_data_confidence.png` | AI Platform |
| `writing_next_chapter.png` | Final CTA |

Image paths are centralized in `lib/constants.ts` under the `IMAGES` object.

---

### 2. Human First Copy Updates

Updated website copy to the **Human First. AI Second. Always.** brand voice:

- **Services section** — New intro and all four service card descriptions  
- **Who We Serve section** — New intro and all six industry card descriptions  

Source: client copy documents, applied in `lib/content/home.ts`.

---

### 3. AI Voice Agents Testimonials

Added a new **AI Voice Agents** testimonial category with three client stories:

| Client | Use Case | Industry |
|--------|----------|----------|
| Priya Nair | Inbound overflow | Retail & E-Commerce |
| Dr. James Osei | Patient intake | Primary Care & Allied Health |
| Adrienne Kowalski | After-hours lead capture | Real Estate & Property Services |

- Testimonials live in `lib/testimonials.ts` (22 total entries)  
- **AI Voice Agents** is the first filter tab on the homepage  
- Button label shows **AI Voice Agents** (not stripped to "Voice Agents")  
- `/ai-voice-agents` page includes a filtered testimonials section  

---

### 4. Hero Section Fixes

Multiple iterations to get the hero background working correctly:

- Replaced letterboxed hero asset with full purple background version  
- Removed heavy dark overlays; added lighter left-only gradients for text readability  
- **Mobile:** `object-contain` so the gold G logo is not cropped in half  
- **Desktop:** `object-cover` with right-weighted positioning for full-bleed look  
- Hero starts at top of viewport (no extra padding above fold)  

---

### 5. Build & Dev Environment Fixes

**Tailwind CSS resolution error** (`Can't resolve 'tailwindcss' in '/Users/supriya/Documents'`):

- Set explicit project root in `postcss.config.mjs` (`base: projectRoot`)  
- Set `turbopack.root` in `next.config.ts`  
- Added `@source` directives in `app/globals.css` so Tailwind scans all components  
- Moved `tailwindcss` and `@tailwindcss/postcss` to `dependencies` for Vercel builds  
- Default `dev` script uses `--webpack` for stability; `dev:turbo` available separately  

**Vercel unstyled deployment:**

- Removed conflicting `output: "export"` and `vercel.json` output directory override  
- Build script uses `next build --webpack` for reliable CSS generation on Vercel  

---

### 6. Testimonials Component Enhancements

- Added `categoryFilter` prop for page-specific filtering (used on AI Voice Agents page)  
- Category tabs hidden when a filter is preset  
- Carousel with auto-advance, pagination dots, and prev/next controls  
- Responsive: 1 / 2 / 3 cards per view on mobile / tablet / desktop  

---

## Brand & Design

| Token | Value |
|-------|-------|
| Background | `#0b0b2b` / `#23004c` (hero) |
| Brand gold | `#c9a84c` |
| Foreground | `#f5f3ef` |
| Heading font | Cormorant Garamond |
| Body font | Outfit |

Philosophy: **Human First. AI Second. Always.**

---

## Deployment

### Vercel Projects

| Project | Purpose | Domain |
|---------|---------|--------|
| `new-website` | **Current codebase** — latest changes | `new-website-seven-blond.vercel.app` |
| `greatefull` | Legacy project | `grateful-marketing.com` (still pointed here) |

> **Important:** Pushes to GitHub deploy to the **`new-website`** Vercel project. The custom domain `grateful-marketing.com` is still attached to the older **`greatefull`** project. To show latest changes on the live domain, move the domain in Vercel: **Settings → Domains** from `greatefull` to `new-website`.

### Deploy workflow

```bash
git add .
git commit -m "Your message"
git pull --rebase origin main   # if push is rejected
git push origin main
```

Vercel auto-deploys on push to `main`.

---

## Key Files to Edit

| What to change | File |
|----------------|------|
| Homepage copy | `lib/content/home.ts` |
| Testimonials | `lib/testimonials.ts` |
| Image paths | `lib/constants.ts` |
| Hero layout | `components/home/hero-section.tsx` |
| Nav links | `components/navbar.tsx` |
| Site metadata | `app/layout.tsx` |
| Booking URL | `lib/constants.ts` → `BOOKING_URL` |

---

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage |
| `/ai-voice-agents` | AI Voice Agents landing + testimonials |
| `/ai-revenue-audit` | Revenue audit funnel |
| `/pre-booking` | Pre-booking funnel |
| `/contact` | Contact form |
| `/about` | About page |
| `/services` | Services overview |
| `/testimonials` | Full testimonials page |
| `/privacy-policy` | Privacy policy |

---

## External Integrations

- **Booking widget:** GrowthHub365 (`BOOKING_URL` in `lib/constants.ts`)  
- **Chat widget:** LeadConnector HQ (loaded in `app/layout.tsx`)  
- **Google Search Console:** Verification meta tag in `app/layout.tsx`  

---

## Notes for Future Development

1. **Hero image** — The hero PNG includes baked-in branding text ("GRATITUDE ALWAYS"). Website HTML text overlays on the left; consider a clean background-only asset long term.  
2. **Domain migration** — Move `grateful-marketing.com` to the `new-website` Vercel project when ready to go live with this codebase.  
3. **Content updates** — Prefer editing `lib/content/home.ts` and `lib/testimonials.ts` over hardcoding copy in components.  
4. **Images** — All brand images are in `public/images/brand/`. Update `IMAGES` in `lib/constants.ts` when adding new assets.  

---

## Applying Changes to Another Website

Use this checklist when replicating all updates on a second site (e.g. the legacy **`greatefull`** project on `grateful-marketing.com`).

### Option A — Fastest (recommended)

If both sites should be identical, **don't rebuild from scratch**:

1. Point the other site's Vercel project to this GitHub repo (`supriyathcoders-debug/newWebsite`), **or**
2. Move `grateful-marketing.com` from **`greatefull`** → **`new-website`** in Vercel **Settings → Domains**

That makes the live domain serve this codebase with zero duplicate work.

---

### Option B — Manual migration checklist

If the other site is a separate codebase, apply changes in this order:

#### Step 1 — Copy brand assets

Copy the entire folder:

```
public/images/brand/
```

Include at minimum `hero_gold_silhouette_woman_chin_bob.png` (full purple version, no letterbox bars).

#### Step 2 — Image paths (`lib/constants.ts`)

Ensure `IMAGES` matches this project:

```ts
export const IMAGES = {
  heroGoldSilhouette: "/images/brand/hero_gold_silhouette_woman_chin_bob.png",
  heartCircuitGratitude: "/images/brand/heart_circuit_gratitude.png",
  agencyProfessionalWoman: "/images/brand/agency_professional_woman.png",
  heroHumanSpark: "/images/brand/hero_human_spark.png",
  bridgeMotifStrategy: "/images/brand/bridge_motif_strategy.png",
  cuppedHandsSpark: "/images/brand/cupped_hands_spark.png",
  handsMeetingMinimalist: "/images/brand/hands_meeting_minimalist.png",
  footprintsTurningToLight: "/images/brand/footprints_turning_to_light.png",
  aiPlatformDataConfidence: "/images/brand/ai_platform_data_confidence.png",
  founderStrategicReflection: "/images/brand/founder_strategic_reflection.png",
  clientGrowthTransformation: "/images/brand/client_growth_transformation.png",
  writingNextChapter: "/images/brand/writing_next_chapter.png",
  // ... other assets as needed
} as const;
```

#### Step 3 — Human First copy (`lib/content/home.ts`)

Replace **`SERVICES.intro`** and all four **`SERVICES.items[].description`** values.

Replace **`INDUSTRIES.intro`** and all six **`INDUSTRIES.items[].description`** values.

Copy the exact text from this repo's `lib/content/home.ts` (lines ~114–200).

#### Step 4 — AI Voice Agents testimonials (`lib/testimonials.ts`)

Add three entries at the end of the `testimonials` array:

| ID | Name | Category |
|----|------|----------|
| t20 | Priya Nair | AI Voice Agents |
| t21 | Dr. James Osei | AI Voice Agents |
| t22 | Adrienne Kowalski | AI Voice Agents |

Copy full objects from this repo's `lib/testimonials.ts`.

#### Step 5 — Testimonials UI (`components/testimonials-section.tsx`)

1. Add **`"AI Voice Agents"`** as the **first** item in `CATEGORIES`
2. Add optional prop: `categoryFilter?: string`
3. Initialize state: `useState(categoryFilter ?? null)`
4. Hide category tabs when `categoryFilter` is set: wrap tablist in `{!categoryFilter && (...)}`
5. Fix button label so it shows **AI Voice Agents** (not stripped):

```tsx
{c === "AI Voice Agents" ? "AI Voice Agents" : c.replace("AI ", "")}
```

#### Step 6 — AI Voice Agents page (`app/ai-voice-agents/page.tsx`)

Add before the final CTA section:

```tsx
import TestimonialsSection from "@/components/testimonials-section";

// ... inside page JSX:
<div className="section-shell pt-28 pb-4 max-w-[720px] mx-auto text-center">
  {/* Client Stories heading */}
</div>
<TestimonialsSection hideHeading categoryFilter="AI Voice Agents" />
```

#### Step 7 — Hero section (`components/home/hero-section.tsx`)

Key mobile + desktop behaviour:

```tsx
<div className="absolute inset-0 z-0 overflow-hidden bg-[#23004c]">
  <img
    src={IMAGES.heroGoldSilhouette}
    alt=""
    className="absolute inset-0 h-full w-full object-contain object-center sm:object-cover sm:object-[60%_center] lg:object-[68%_center]"
  />
  {/* Lighter gradients on mobile */}
</div>
```

- Mobile: `object-contain` — logo not cropped  
- Desktop: `object-cover` — full bleed  
- No heavy blur/dark overlays  

#### Step 8 — Build & deploy fixes

Apply these if the other site has the same issues:

| File | Change |
|------|--------|
| `postcss.config.mjs` | Set `base: projectRoot` for Tailwind |
| `next.config.ts` | Set `turbopack.root`; remove `output: "export"` |
| `app/globals.css` | Add `@source` for `./**/*` and `../components/**/*` |
| `package.json` | Move `tailwindcss` + `@tailwindcss/postcss` to `dependencies`; use `--webpack` in `dev` and `build` scripts |
| `vercel.json` | Remove if it sets wrong `outputDirectory` |

#### Step 9 — Verify before deploy

```bash
npm run build
npm run start
```

Check on mobile and desktop:

- [ ] Hero logo not cut in half  
- [ ] Services copy says "Human First. AI Second. Always."  
- [ ] Industries cards show new descriptions  
- [ ] Testimonials tab **AI Voice Agents** appears first  
- [ ] Three new voice agent testimonials visible  
- [ ] `/ai-voice-agents` shows filtered testimonials  

#### Step 10 — Deploy

```bash
git add .
git commit -m "Apply Human First copy, voice agent testimonials, hero fixes"
git pull --rebase origin main
git push origin main
```

Confirm the **correct Vercel project** is linked to the repo that serves your live domain.

---

### Files to copy directly from this project

If file structure matches, copy these files wholesale:

```
lib/content/home.ts
lib/testimonials.ts
lib/constants.ts
components/home/hero-section.tsx
components/testimonials-section.tsx
app/ai-voice-agents/page.tsx
postcss.config.mjs
next.config.ts
app/globals.css          (or merge @source lines)
public/images/brand/*    (all images)
```

Then run `npm run build` and fix any import/path differences in the other project.

---

## License

Private — Grateful Marketing™ client project.
