# Case Study implementation guide

## Goals

- Replace grid with a **continuous marquee** of case cards.
- Each card shows: **screenshot on top**, then **title**, **description**, and a **CTA**.
- At least **four** services represented.
- Section runs on **bg-navy-900** with accessible contrast.&#x20;

## Data model

Create a typed list you can source from CMS later.

```ts
type CaseItem = {
  slug: string; // "/case-studies/[slug]"
  service:
    | "Web & Mobile"
    | "DevOps & SRE"
    | "Cyber Security"
    | "AI/ML"
    | "Embedded";
  title: string; // ≤ 70 chars
  summary: string; // 16–24 words
  image: { src: string; alt: string; width: number; height: number };
  ctaLabel?: string; // default: "Read the case study"
};
```

Populate with ≥4 items. Keep `image.src` on approved remotes (Unsplash/Pexels) and add domains to `next.config.js` if needed. Use `next/image` only.

## Layout

- **Section shell:** `bg-navy-900 text-foreground-dark py-20 md:py-24` with container `max-w-7xl px-4 sm:px-6 lg:px-8`. Token exists in your theme.&#x20;
- **Heading block:** `<h2>` “Featured case studies” + short lead (12–18 words).
- **Marquee rail:** one row that **scrolls horizontally**; duplicates appended to cover viewport width like Trust.&#x20;
- **Card (article):** `w-[min(78vw,360px)] md:w-[420px] shrink-0 rounded-2xl border border-white/10 bg-white/5 overflow-hidden`

  - **Image:** aspect `16/9`, `Image` with `fill` + `sizes="(min-width:1024px) 420px, 78vw"`, `object-cover`.
  - **Body:** `p-5` → title `font-semibold`, summary `text-sm text-white/70`, CTA link `text-brand`.

- **Gaps:** `gap-6 md:gap-8` between cards.

## Marquee behavior (reuse Trust)

- Use the **same RAF loop** and state refs: `speedRef`, `slowRef`, `offsetRef`, `rowWRef`, `lastTsRef`.&#x20;
- **Speed defaults:** `speed=70` px/s; **hover slowdown:** `slowFactor=0.25`. Expose as props for tuning.&#x20;
- **Measurement & duplication:** compute row width and set **repeat** so content ≥ shellW + rowW + safety copy, then render duplicates. &#x20;
- **Jitter fix:** quantize `offset` to whole pixels before applying `translate3d`. Keep this line.&#x20;
- **Pause on hover:** set `hoverRef.current = true/false` on shell enter/leave.&#x20;
- **Reduced motion:** if `prefers-reduced-motion`, skip RAF and render static row.

## Accessibility

- `section` with `aria-labelledby="cases-heading"`.
- Cards are `article` with `<h3>` links to detail pages.
- Shell gets `role="region"` and `aria-label="Case studies"`.
- Focusable controls must **not** auto-scroll; only the RAF moves the track. Provide a “Pause animations” button that toggles a `paused` flag to stop RAF.

## Styles and tokens

- On dark: borders `border-white/10`, text `text-white` with muted `text-white/70`. Same pattern you used in Process/Trust guides.&#x20;
- Background: `bg-navy-900` (#0b1a3a).&#x20;
- Optional edges: reuse the Trust **fadeout** class on the shell container for left/right gradient fade.&#x20;

## File plan

```file
/components/home/CaseHighlightMarquee.tsx     // client component with RAF marquee
/components/home/caseData.ts                  // CaseItem[]
/services/marquee.module.css                  // reuse existing classes
```

Repo already contains CaseHighlight and Trust locations and the marquee css path. &#x20;

## Props and events

```ts
type Props = {
  items: CaseItem[];
  speed?: number; // default 70 px/s
  slowFactor?: number; // default 0.25
  paused?: boolean; // controlled pause
  onTogglePause?: (v: boolean) => void;
};
```

## Implementation steps

1. **Create data** in `caseData.ts` with ≥4 items covering: Web & Mobile, DevOps & SRE, Cyber Security, AI/ML (or Embedded). Each item includes a remote placeholder image.
2. **Clone Trust RAF logic** into `CaseHighlightMarquee.tsx`: copy the `measure` logic, RAF `step`, hover handlers, and duplicate rendering. Keep `speed` and `slowFactor` props. &#x20;
3. **Replace grid** in current `CaseHighlight.tsx` with the marquee shell + track + repeated rows. Keep the case card body structure you already use (title, description, CTA).&#x20;
4. **Card template**: top `Image` → title `<h3>` → summary → `Link` CTA.
5. **Background and spacing**: set section to `bg-navy-900` and adjust text/border tokens for contrast.&#x20;
6. **Pause control**: add a visually subtle button “Pause” that toggles `paused` state; when `true`, skip `requestAnimationFrame`.
7. **Reduced motion**: `matchMedia('(prefers-reduced-motion: reduce)')` → set `paused=true` by default.
8. **Images**: `next/image` with accurate `alt`, `sizes`, and eager-load first card only.
9. **QA**: verify the marquee never reveals a gap at any width; duplicates count must satisfy `shellW + rowW + safety`.&#x20;

## Copy guide

Use concise, outcome-oriented text. Examples:

- **Web & Mobile Engineering** — “Rebuilt frontend and CI, unblocked weekly releases, cut regressions with visual tests.”
- **DevOps & SRE** — “Standardized IaC and observability, reduced incident MTTR, enabled safe blue-green deploys.”
- **Cyber Security** — “Hardened auth and secrets, enforced SAST/DAST gates, shipped least-privilege access.”
- **AI/ML** — “Productionized inference with evals, improved latency and accuracy under real traffic.”

## Acceptance checklist

- Renders ≥4 case cards in an **endless marquee** on **bg-navy-900** with screenshots on top.
- Hover slows the marquee; **no jitter** due to pixel quantization.&#x20;
- No gaps during scroll; duplicates scale with width.&#x20;
- Cards are keyboard reachable. CTA links work.
- Images are optimized, responsive, and accessible.

If you want, I can draft `CaseHighlightMarquee.tsx` as a drop-in and wire it to your existing CSS module now.
