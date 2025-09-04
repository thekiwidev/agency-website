# Agency Styling & Brand Guidelines v1

## 0) Intent

Single source of truth for look-and-feel. Dark theme by default. Fast to apply. Easy to audit.

---

## 1) Theme baseline

- **Default surface**: `bg-navy-900` (#0b1a3a).
- **Default text**: `text-white` (#ffffff).
- **Tokens** (Tailwind CSS `@theme`):
  - `--color-navy-900: #0b1a3a` (primary surfaces)
  - `--color-navy-800: #112656` (elevated surfaces)
  - `--color-brand: #0f2d6b` (actions, accents)
  - `--color-brand-dark: #0b224f` (hover, outlines)
  - `--color-foreground: #ffffff` (base text)
  - `--color-border: #e5e7eb` (dividers on light surfaces; lower alpha on dark)

- **Mapping**

- Body: `bg-background` → `--color-navy-900`, `text-foreground` → `#ffffff`.
- Border utilities map to `--color-border` but prefer `border-white/10` on dark.

---

## 2) Layout & spacing

- Grid: 12-col, 24px gutter desktop, 16px mobile.
- Max widths: `prose` 70–75ch, content container 1200–1320px.
- Spacing scale: 4, 8, 12, 16, 24, 32, 40, 48, 64, 80.
- Sections: top/bottom padding 80–120px desktop, 48–64px mobile.

---

## 3) Typography

- **Body**: Sen via Next.js font pipeline.
- **Display/Headings**: Sen bold.
- **Logo wordmark**: Mooxy (local). Use only for brand lockup.
- Line length 60–75ch. Line height 1.4–1.6 body, 1.1–1.25 headings.
- Contrast ≥ 4.5:1. Never rely on color alone.

Examples:

- H1: `text-4xl md:text-5xl font-bold tracking-tight`
- H2: `text-3xl md:text-4xl font-semibold`
- Body: `text-base md:text-lg text-white/90`
- Muted: `text-white/70`

---

## 4) Color usage

- Backgrounds: always `bg-navy-900` unless an elevated block.
- Elevated blocks: `bg-navy-800` with `border-white/10`.
- Brand accents: buttons, links, key icons use `--color-brand`.
- Success: green-500 on dark; Warning: amber-400; Danger: red-400.
- Do not use pure black backgrounds.

Do/Don’t:

- ✅ `bg-navy-800 text-white`
- ✅ `border-white/10`
- ❌ random grays on dark
- ❌ light surfaces without sufficient contrast

---

## 5) Components

### Buttons

- Use the **default Button** from `/components/ui/Button`.
- **Primary**: `variant="default"` (brand background, white text).
- **Secondary**: `variant="secondary"` (subtle surface, white/90 text).
- Do not create ad-hoc button styles.

### Inputs

- Background `bg-white/5`, border `border-white/10`, focus ring brand.
- Labels required; help text via `aria-describedby`.

### Cards/Surfaces

- Card surface `bg-navy-800`, `rounded-2xl`, `shadow` minimal, `border-white/10`.

### Links

- Default link color `text-brand`. Hover underline. Focus visible.

---

## 6) Imagery & media

- Always use Next.js `Image` with remote patterns preapproved.
- Provide descriptive `alt` or empty alt if decorative.
- LCP image uses `priority` and fixed `sizes`.

Composition:

- Prefer dark-friendly images. Add subtle vignette if needed.

---

## 7) Motion

- Use Framer Motion. Durations 150–250ms. Ease out. Reduced motion respects OS setting.
- Avoid parallax on mobile.

---

## 8) Accessibility

- WCAG 2.2 AA minimum.
- Keyboard-first. Visible focus. Escape closes overlays.
- Form error summary + per-field messages.

---

## 9) Icons & illustrations

- Lucide for line icons. Stroke 1.5–2 on dark. Use `text-white/80`.
- Do not mix icon packs.

---

## 10) Data viz (if used)

- Neutral axes `white/40`. Grid `white/10`.
- Primary series = brand. Secondary = `white/70`.

---

## 11) Patterns & effects

- Background pattern optional. Keep low-contrast (`white/[0.03–0.06]`).
- Inset vignette allowed: `shadow-[inset_0_0_120px_rgba(0,0,0,0.35)]`.

---

## 12) Page blocks

- Home: hero → trust → services → process → case studies → tech → testimonials → FAQ → CTA.
- Each block ends with one primary CTA.

---

## 13) Do / Don’t quick audit

- ✅ `bg-navy-900 text-white` as default on pages.
- ✅ Buttons use existing variants only.
- ✅ Images via `next/image` with proper `alt`.
- ❌ New ad-hoc color tokens.
- ❌ Text below 4.5:1 contrast.

---

## 14) Code snippets (illustrative)

```html
<section class="bg-navy-900 text-white">
  <div class="container">
    <h2 class="text-3xl md:text-4xl font-semibold">Section</h2>
    <p class="text-white/80 max-w-prose">Copy…</p>
  </div>
</section>
```

```tsx
// Button usage
<Button variant="default">Primary</Button>
<Button variant="secondary">Secondary</Button>
```

---

## 15) Governance

- Changes to tokens require ADR and approval.
- Run visual QA: contrast, focus, keyboard paths, LCP.

---

## 16) Assets

- Store brand assets in `/public/brand/*`.
- Keep remote image hosts whitelisted in `next.config.ts`.
