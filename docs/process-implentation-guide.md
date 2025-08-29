# Process Section implementation guide

## Layout

* Two columns in a max-width container.

  * **Left (content):** Section header → subhead → static list of all 5 processes (always visible).
  * **Right (media):** Vertical stack slider that shows exactly one image at a time; slides animate vertically.
* Section background: `bg-[color:var(--navy-800)]` (Tailwind v4 token mapped to your palette). Text defaults to on-dark.
* Spacing: generous `py-24` desktop, `py-16` mobile. Use `gap-10 md:gap-16`.

## Behavior

* Autoplay starts when the section first enters viewport (use `IntersectionObserver` at 35–50% threshold).
* Autoplay cadence: 5s per step. Loops 0→1→2→3→4→0.
* Clicking any process:

  * Sets activeIndex to that process.
  * **Toggle rule:** If the clicked item is already active and autoplay is paused, resume; if active and autoplay is running, pause. Clicking a different item always selects it and pauses.
* Hover on media or process list pauses autoplay. Blur/focus resumes according to the toggle rule.
* Manual navigation does not desync. Slider always renders the frame that matches `activeIndex`.
* On unmount or off-screen, autoplay stops.

## Accessibility

* Treat processes as a single-select **list of buttons**:

  * `role="tablist"` on container, each process `role="tab"`, media panel `role="tabpanel"`, connect with `aria-controls`/`aria-labelledby`.
  * Arrow Up/Down move selection; Enter/Space activate and pause.
* Focus states: visible outline on dark (`focus:ring-2 focus:ring-white/60`).
* Images: meaningful `alt` per step. No motion preferences: if `prefers-reduced-motion`, disable autoplay and show instant image swap.

## Data model

Define once and reuse in both panes:

```ts
type ProcessStep = {
  key: "inquiry"|"discovery"|"quote"|"build"|"deliver";
  title: string; // short label
  body: string;  // 1–2 lines
  icon: ReactNode; // lucide icon
  image: { src: string; alt: string; width: number; height: number; };
};
```

Populate from your existing copy (Inquiry, Discovery, Quote, Build, Deliver).&#x20;

## Visual system

* **Typography:** One `<h2>` headline ≤7 words. Subhead ≤18 words. Body in `text-sm md:text-base`.
* **Cards (process items):**

  * Container: rounded-2xl, `bg-white/06` on dark, `backdrop-blur` optional, `border border-white/10`.
  * Selected: `bg-white/12 border-white/20`, left accent bar `bg-[color:var(--brand-blue)]` 2px.
  * Layout: icon circle → title → body. Keep density compact; 56–64px row height.
* **Icons (lucide-react):**

  * Inquiry → `MessageSquare`
  * Discovery → `Search`
  * Quote → `Wallet`
  * Build → `Wrench`
  * Deliver → `PackageCheck`
* **Media (right slider):**

  * Use Next/Image with fixed aspect ratio 4:3 or 3:2, rounded-2xl.
  * Stack effect: neighboring slides slightly scaled and offset behind active slide to imply depth.
  * Shadow: `shadow-xl shadow-black/40`.

## Slider choice and setup

* Use **Keen Slider** or **Embla**. Either supports vertical, looped, controlled mode and stacked transforms. If you specifically mean “SliderJS,” apply identical controlled-index wiring.
* Config:

  * Orientation: vertical.
  * Slides per view: 1.
  * Loop: true.
  * Drag: optional; keyboard still primary.
* Controlled mode: pass `activeIndex` from React state; do not let the slider own state.

## State machine (concise)

* `activeIndex: number` in \[0..4].
* `isPaused: boolean`.
* `isInView: boolean`.
* `timerRef` for autoplay.
  Transitions:
* `IN_VIEW → startAutoplay()` if not paused.
* `OUT_OF_VIEW → stopAutoplay()`.
* `CLICK_DIFFERENT(i) → setActiveIndex(i); setPaused(true);`
* `CLICK_SAME` toggles pause: if running → pause; if paused → resume.
* `HOVER_ENTER → pause`; `HOVER_LEAVE → resume` only if previously running.
* `TICK → setActiveIndex((i+1)%5)`.

## Animation

* Use CSS transforms on the media stack:

  * Active slide: `translateY(0) scale(1) opacity:1`.
  * Next/prev slides: `translateY(±12px) scale(0.96) opacity:0.6`.
  * Transition: `transform 450ms cubic-bezier(0.22,1,0.36,1), opacity 300ms`.
* Reduce motion: switch transitions to 0ms.

## Content and copy

* **Headline:** “Collaborate with Our Creative Team” or brand voice variant.
* **Subhead:** One line about assurance: “Security-first, WCAG-aware, clear acceptance criteria.”
* **Five process items:** use the same titles and one-liners from your existing component so the doc stays consistent.&#x20;
* **CTA:** One primary at section end: “Get a Quote”.

## Assets

* Use Next/Image only. Host placeholders on approved remote domains.
* Provide descriptive `alt`. Supply `width/height` or `fill` with `sizes`.

## Tailwind tokens (dark on navy-800)

* Section: `bg-[color:var(--navy-800)] text-white`
* Muted text: `text-white/70`
* Card: `bg-white/5 border-white/10`
* Selected: `bg-white/10 border-white/20`
* Accent: `text-[color:var(--brand-blue)]`

## File structure

* `/components/shared/ProcessSection/`

  * `ProcessSection.tsx` (server wrapper; imports client subcomponents)
  * `ProcessList.tsx` (client)
  * `ProcessMedia.tsx` (client; slider hook)
  * `useProcessCarousel.ts` (client hook: state machine + IO + timers)
  * `processData.ts` (constants; re-use copy)
  * `process.css` (scoped CSS for transforms if not using Tailwind utilities)

## Events and wiring

* `ProcessList` receives `{ steps, activeIndex, isPaused, onItemClick(i) }`.
* `ProcessMedia` receives `{ steps, activeIndex, onHoverPause(boolean) }`.
* `useProcessCarousel(steps.length, startIndex=0, intervalMs=5000)` exposes:

  * `activeIndex`, `isPaused`, `setActiveIndex`, `togglePause`, `pause`, `resume`, `bindInViewRef`.

## QA checklist

* Keyboard: Up/Down change selection; Enter toggles pause/resume.
* Screen readers announce “Step X of 5: Title”.
* Autoplay starts only on first reveal. No motion if reduced-motion.
* Images lazy-load except the first. No layout shift.
* Lighthouse: LCP < 2.5s. INP ≤ 200ms.

## Migration from current component

1. Extract your `steps` array into `processData.ts`. Keep titles and bodies identical.&#x20;
2. Replace the current grid with the two-column layout and list+media split.
3. Add the slider library and the `useProcessCarousel` hook.
4. Implement controlled slider tied to `activeIndex`.
5. Add IO to start/stop autoplay.
6. Wire click/hover handlers to pause/resume per rules.
7. Add aria roles/labels and keyboard support.
8. Swap section background to navy-800 and adjust text and borders for contrast.
9. Validate alt text, tab order, and focus management.
10. Ship with one CTA.

## Content inventory (icons + images)

* Inquiry → `MessageSquare` | Image: team talking at table.
* Discovery → `Search` | Image: whiteboard session.
* Quote → `Wallet` | Image: contract or calculator screen.
* Build → `Wrench` | Image: code editor or CI dashboard.
* Deliver → `PackageCheck` | Image: demo presentation.

If you want, I can generate the files listed under “File structure” next.
