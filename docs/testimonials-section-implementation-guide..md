# Testimonials Section Implementation guide

## Objectives

- Full-bleed section, 100dvh height.
- One testimonial per slide. Big portrait + large quote.
- Prev/Next controls. Keyboard arrows. Loop.
- Works on dark theme. High contrast and accessible.

## Data model

```ts
type Testimonial = {
  id: string;
  quote: string; // 20–40 words, plain text
  name: string; // e.g., “Lisa Cosme”
  title: string; // e.g., “Designer”
  location?: string; // city, country
  org?: string; // company label
  photo: { src: string; alt: string; width: number; height: number }; // portrait
};
```

Store in `components/home/testimonialsData.ts`. Use remote placeholders (Unsplash/Pexels). Add domains to `next.config.js` images.remotePatterns.

## Layout

- Section: `h-[100dvh] bg-navy-900 text-white` with safe padding `px-4 sm:px-6 lg:px-8`.
- Slide grid (desktop): `grid grid-cols-12 gap-8 h-full items-center`.

  - **Photo**: cols 5–6. Rounded-2xl, `Image` `fill object-cover`.
  - **Quote panel**: cols 6–7. Large opening quote mark, headline quote, meta rows.

- Mobile: stack photo top (aspect 4/3), quote below; keep paddings generous.

## Visual system

- Quote size: `text-3xl md:text-5xl leading-tight`.
- Meta: name `font-semibold`, then `title • location • org` in `text-white/70`.
- Accent bar or oversized quote glyph at top-left of panel for hierarchy.
- Buttons: round, high-contrast, fixed at vertical center left/right; `backdrop-blur`, `ring-1 ring-white/20`. Hide on `prefers-reduced-motion` focus only.

## Swiper setup

- Modules: `Navigation`, `A11y`, `Keyboard`, `EffectFade` (optional), `Autoplay` off.
- Config:

  - `slidesPerView: 1`
  - `loop: true`
  - `speed: 500`
  - `keyboard: { enabled: true, onlyInViewport: true }`
  - `navigation: { prevEl: '#t-prev', nextEl: '#t-next' }`
  - `a11y: { prevSlideMessage: 'Previous testimonial', nextSlideMessage: 'Next testimonial' }`
  - If using fade: `effect: 'fade', fadeEffect: { crossFade: true }`

## Accessibility

- Wrapper: `role="region" aria-roledescription="carousel" aria-label="Customer testimonials"`.
- Each slide: `<figure>` with `<blockquote>` and `<figcaption>`.
- Turn off live-announcements: `aria-live="off"` to avoid chatty SR output.
- Buttons are real `<button>` with labels. Keyboard arrows and Tab order reach them.
- Reduced motion: if `(prefers-reduced-motion: reduce)`, disable transitions and fade.

## Content rules

- Quote: 1–2 sentences, no jargon. Avoid smart quotes inside the string; component adds the marks.
- Photo: tight crop to face, neutral background, `alt="{Name}, {Title} at {Org}"`.
- Keep consistent attribution order: `Name — Title, Org · Location`.

## File structure

```file
/components/home/TestimonialsFull.tsx     // client component with Swiper
/components/home/testimonialsData.ts      // data array
/public/icons/quote.svg                    // optional glyph, or lucide Quote
```

## Events and controls

- External control buttons with IDs `t-prev` and `t-next` wired via Swiper `navigation`.
- Optional pagination fraction: “01 / 05” at panel footer.
- Emit analytics on slide change: `testimonial_viewed` with `id`.

## Performance

- `next/image` only. `priority` for first slide photo. Preload next slide with `loading="eager"` when it becomes adjacent (or use Swiper’s `lazy` module if preferred).
- Avoid CLS: fixed aspect wrappers. Fonts via Next font pipeline.

## Implementation steps

1. Create `testimonialsData.ts` with 4–8 items using placeholder portraits.
2. Build `TestimonialsFull.tsx`:

   - Section shell `h-[100dvh] bg-navy-900 text-white`.
   - Swiper + modules per config. Pass slides from data.
   - Grid inside each `SwiperSlide`: photo left, quote panel right.
   - External `<button id="t-prev">` and `<button id="t-next">` with icons and `aria-label`s.

3. Wire keyboard and A11y modules. Verify screen-reader labels.
4. Add `prefers-reduced-motion` check to disable effects.
5. Replace your current `Testimonials.tsx` import with the new component in the page and remove the static 3-card grid.&#x20;
6. QA on mobile and desktop, dark contrast, focus states, and loop continuity.

## Acceptance checklist

- Full-screen slider, one testimonial per view.
- Photo, large quote, and meta visible without scroll.
- Prev/Next buttons work with mouse, touch, and keyboard.
- Looping, smooth, and respects reduced-motion.
- Images optimized and accessible.
