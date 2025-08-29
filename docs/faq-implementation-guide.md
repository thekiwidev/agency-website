# FAQ Implementation guide

## Goals

* Rounded cards with chevron. One open at a time. Collapsible.
* Dark/light aware. Background stays page default.
* Keyboard and screen-reader correct.
* Optional long answers and rich text.
* JSON-LD for FAQ.

## Data

Keep a flat array. Add ids and optional hrefs.

```ts
type Faq = { id: string; q: string; a: string; href?: string };
```

Store in `components/home/faqData.ts`. Reuse existing copy and extend as needed.&#x20;

## Layout

* Section: `py-24 md:py-28`.
* Container: `max-w-5xl px-4 sm:px-6 lg:px-8`.
* Heading block: `<h2>` + optional subhead (12–18 words).
* List: vertical stack of cards with `gap-3`.

## Cards (accordion items)

* Shell: `rounded-2xl border bg-white/5 dark:bg-white/5 border-white/10` on dark; `bg-muted` and `border-border` on light.
* Button row: `min-h-[64px] px-5 py-4 flex items-center justify-between text-left`.
* Title: `text-base md:text-lg font-semibold`.
* Chevron (lucide `ChevronDown`): rotate 180° when open.
* Content: `px-5 pb-5 text-sm md:text-base text-white/70` on dark; `text-foreground/70` on light.

## Behavior

* One open at a time (`type="single"`). Collapsible.
* Open the first by default if URL has no hash; if hash `#faq-id` is present, open matching item.
* Animate height with `AccordionContent` (Radix/shadcn) or CSS `max-height` transition.
* Persist last open item in `sessionStorage` (key `faq:last`).

## Accessibility

* Use Radix/shadcn `Accordion` for proper roles/aria or implement WAI-Accordion pattern.
* Button gets `aria-controls`, panel gets `role="region"` and `aria-labelledby`.
* Focus ring: `focus:outline-none focus:ring-2 focus:ring-white/60` on dark.
* Reduced motion: disable height animation.

## Theme tokens

* Dark: `bg-navy-900` sections use higher contrast; inside FAQ keep cards `bg-white/06` and borders `border-white/12`.
* Light: `bg-white` page with `text-foreground`, `divide-border`.

## File plan

```file
/components/home/FAQSection.tsx        // client, accordion
/components/home/faqData.ts            // array<Faq>
/components/home/FaqSchema.tsx         // JSON-LD emitter
```

## JSON-LD (FAQPage)

Render in the FAQ section:

```ts
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(f => ({
    "@type": "Question",
    "name": f.q,
    "acceptedAnswer": { "@type": "Answer", "text": f.a }
  }))
}
```

## Controls and deep-linking

* Each item `id` mirrors the hash slug (e.g., `how-do-you-price`).
* Clicking copies the link: small “link” icon shows on hover; `navigator.clipboard.writeText(location.origin + location.pathname + '#' + id)`.

## Migration steps

1. Move your current `faqs` array into `faqData.ts` and add `id` slugs.&#x20;
2. Install shadcn/ui accordion (or use your existing shadcn setup). Import `Accordion`, `AccordionItem`, `AccordionTrigger`, `AccordionContent`.
3. Build `FAQSection.tsx`:

   * Section + container.
   * Map `faqs` → `AccordionItem value={id}`.
   * Trigger row = title + chevron; rotate chevron with `data-[state=open]:rotate-180`.
   * Content = answer; support inline links.
4. Add `FaqSchema.tsx` to emit JSON-LD with the same data.
5. Replace the old `FAQ.tsx` with `FAQSection.tsx` in the page. Keep heading text from the screenshot (“Frequently Asked Questions”) if desired.
6. QA:

   * Tab/Enter/Space open and close.
   * Arrow keys move focus through triggers.
   * Hash deep-links open the right item.
   * Contrast passes WCAG AA in dark and light.

## Acceptance checklist

* Rounded accordion cards match screenshots.
* One open item at a time, smooth toggle, chevron rotates.
* Works with keyboard and SR. Deep-links supported.
* JSON-LD present and valid.
* Styles follow site tokens and look good on `bg-navy-900` or default page background.
