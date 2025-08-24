# copilot-instructions.md

> Purpose: operating rules for AI Companion on the **Software Development Agency Marketing Site**. Follow exactly. Keep answers terse. Implementations complete and well‑commented.

---

## 0) Response style

- Answer in short sentences. No filler. No exclamation marks.
- If a judgement is needed, state **good / bad** and why in ≤1 line.
- Prefer lists and code over prose.

## 1) Project context

- Source of truth: `Software Development Agency Marketing Site — PRD V1`.
- Stack: Next.js App Router + TypeScript. Tailwind + shadcn/ui + Framer Motion. Sanity or Contentlayer. Vercel. Resend/SendGrid. Cal.com/Calendly. HubSpot/Pipedrive. hCaptcha, Zod.
- Core pages: Home, Services (hub+details), Case Studies (list+detail), Pricing & Engagement, About, Contractors (join+roles+apply), Contact/Quote/Call (unified), Legal.

## 2) Before you change code

1. Read the PRD section(s) for the feature located in `Software Development Agency Marketing Site — PRD V1` or `docs/pages` or `docs/features` folder.
2. Locate all impacted files. Propose a **plan** with file list and diffs you expect.
3. If >1 file will change, **ask for confirmation** before proceeding.
4. Create or update an ADR stub for any notable decision.

## 3) Editing protocol

- Modify only the requested file(s) unless confirmation was given.
- For each file changed, also update tests, types, and docs as required.
- Run checks locally in this order; stop on first failure:
  1. `bun typecheck` (or `tsc --noEmit`)
  2. `bun lint` (ESLint flat config)
  3. `bun format:check` (Prettier)
  4. `bun test` (unit) and `bun e2e` (Playwright if present)
  5. `bun build` (Next.js)
- If a check fails, fix and re‑run. Do not leave TODOs unresolved.

## 4) Code style & comments

- TypeScript: `strict` + `exactOptionalPropertyTypes` + `noUncheckedIndexedAccess` + `noImplicitOverride` when possible.
- React/Next.js: functional components, server components by default, client only when needed.
- Comments:
  - File header: one line: purpose.
  - Each exported function/component: top block comment: what it does, inputs/outputs, side effects.
  - Inline comments only for **crucial** lines. Keep ≤80 chars.
- Example pattern:

```ts
/**
 * getHourlyEstimate
 * Purpose: compute estimated total cost from inputs.
 * Inputs: rateUSD, hours, teamSize.
 * Output: totalUSD (number).
 */
export function getHourlyEstimate(
  rateUSD: number,
  hours: number,
  teamSize = 1
) {
  // Guard: prevent negative values
  if (rateUSD < 0 || hours < 0 || teamSize < 1) throw new Error("invalid");
  // Core: multiply rate by hours and team size
  const total = rateUSD * hours * teamSize;
  // Return: integer dollars
  return Math.round(total);
}
```

## 5) Utilities first

- Prefer reusable utilities over one‑off functions.
- Create utilities in `src/lib/*` or `src/utils/*` with focused modules.
- Never duplicate logic across pages or components.

## 6) Linting, formatting, editor config

- ESLint: `@typescript-eslint` recommended + `no-floating-promises`, `import/no-cycle` if applicable.
- Prettier: project‑wide. Respect `.prettierignore`.
- EditorConfig: enforce LF, final newline, utf‑8, 2‑space indent.

## 7) Testing

- Unit: Vitest or Jest + Testing Library. Write tests for branches and edge cases.
- E2E: Playwright for critical flows (quote request, call booking, application form).
- Principle: test user behavior, not implementation details.
- Add minimal fixtures and factories in `tests/fixtures`.

## 8) Accessibility (WCAG 2.2 AA)

- Color contrast ≥ 4.5:1 for text; 3:1 for large text.
- Keyboard: tab order, focus outlines, Escape to close modals.
- Forms: labels, `aria-describedby`, error summary, success state.
- Images: descriptive `alt`. Decorative → empty `alt`.

## 9) Security

- No secrets in repo. Read from `process.env`. Document required env vars in `.env.example`.
- Forms: server‑side validation, hCaptcha, CSRF tokens, file AV scan, size/type limits.
- Headers: enable CSP, HSTS, X‑Content‑Type‑Options, Referrer‑Policy, COOP/COEP if applicable.
- Least privilege on tokens. Rotate keys on leak.

## 10) Performance & CWV

- Budgets: LCP < 2.5s, INP ≤ 200ms, CLS < 0.1.
- Use `next/image` and `next/font`. Avoid layout shift.
- Ship only needed JS. Prefer server components and streaming where possible.
- CI: Lighthouse CI with budgets; block PRs that regress.

## 11) Analytics & events

- Emit events from the PRD: `lead_submitted`, `call_booked`, `quote_sent`, etc.
- Respect consent. No tracking before acceptance.

## 12) Content & CMS

- All copy in CMS or constants. No hard‑coded brand strings in components.
- Place legal copy in dedicated CMS types or `content/legal/*`.

## 13) Files, naming, docs

- Docs live in `/docs`. Development docs in `/docs/dev`.
- Filenames: **lowercase-hyphenated**.
- Add or update:
  - README section for new features.
  - ADR in `/docs/dev/adrs/NNNN-title.md`.
  - Any runbooks or playbooks.

## 14) Git hygiene

- Branches: short‑lived, from `main`. Name: `feat/…`, `fix/…`, `chore/…`.
- Conventional Commits. Examples:
  - `feat(pricing): add mini estimator`
  - `fix(contact): validate file types server-side`
- PRs: small, single purpose. Include **Context → Change → Tests → Screens**.
- CI: cancel in‑progress runs on new commits.

## 15) Versioning & changelog

- SemVer. Single package → root `changelog.md`.
- Format: Keep a Changelog. Sections: Added, Changed, Fixed, Removed, Security.
- Optionally Changesets for automated versioning and changelog.

## 16) Page‑specific checklists (abbrev.)

- **Contact / Quote / Call**: multi‑step, routing, CRM + email, uploads scanned, consent.
- **Pricing**: estimator math clamped to \$15–\$25/hr. Show effective hourly and total.
- **Services**: hub + detail in one view with expand/collapse; deep links preserved.
- **Case Studies**: verified metrics placeholders; filters; accessible cards.
- **Contractors**: roles, detail, apply; prefill role; resumable uploads.
- **Legal**: privacy, terms, cookie, DPA, security page.

## 17) Error handling & logging

- Fail fast with typed errors. No `any`.
- Log server errors with Sentry. Scrub PII. Do not log tokens.
- User‑facing errors: clear, short, actionable.

## 18) Deploy & rollback

- Vercel previews on PRs. Block merge if checks fail.
- Keep envs: `preview`, `production`.
- Rollback via previous deployment if KPIs or CI checks regress.

## 19) When unsure

- Re‑read PRD. Ask one focused question. Propose 2–3 options with trade‑offs. Recommend one.

---

# Templates

## A) ADR (place in `/docs/dev/adrs/`)

```md
# NNNN – Title

Date: YYYY‑MM‑DD
Status: proposed | accepted | superseded
Context: one paragraph on forces and constraints.
Decision: the choice and why.
Consequences: trade‑offs and follow‑ups.
Links: related PRs, issues, docs.
```

## B) PR description

```md
### Context

Why this change. Link PRD section.

### Changes

Bullets of what changed.

### Tests

Unit/E2E notes.

### Screens

Before/after or GIFs. Include keyboard demo if interactive.
```

## C) CHANGELOG entry (Keep a Changelog)

```md
## [Unreleased]

### Added

- Pricing mini estimator on Home.

### Fixed

- CSRF on contact form.
```

## D) GitHub Actions concurrency snippet

```yml
concurrency:
  group: ${{ github.workflow }}-${{ github.ref }}
  cancel-in-progress: true
```

## E) ESLint flat config sketch

```js
import ts from "typescript-eslint";
export default ts.config(ts.configs.recommended, ts.configs.strictTypeChecked, {
  rules: {
    "@typescript-eslint/no-floating-promises": "error",
  },
});
```

## F) Accessibility checklist block

```md
- Contrast ≥ 4.5:1 (text), ≥ 3:1 (large text)
- Labels + describedby on inputs
- Focus visible; Escape closes dialogs
- No keyboard traps; tab order logical
```

## G) Components — structure and rules

- **Location**: `/components` at project root. Sibling to `/app` (or `src/components` sibling to `src/app`). Never inside `/app`.
- **Subfolders**:

  - `/components/ui` → pure UI atoms/molecules (Button, Input, Modal, Tabs, Icon). No domain logic.
  - `/components/shared` → cross-page sections (Header, Footer, SiteNav, CTA bar).
  - `/components/general` → generic, reusable blocks not tied to one page (Container, Section, MetricCard).
  - `/components/<page>` → page-specific only. Examples: `home/`, `about/`, `services/`, `case-studies/`, `pricing/`, `contact/`, `contractors/`.

- **Page-specific rule**: If used only on one route, keep it in that route’s folder. If reused twice, promote to `general` or `ui` as appropriate.
- **UI vs Shared vs General**:

  - UI → primitive, styleable, no fetch.
  - Shared → site-wide sections.
  - General → composable blocks helpful across pages.

- **Naming**:

  - Component files: `PascalCase.tsx`. Colocated test: `PascalCase.test.tsx`. Optional Storybook: `PascalCase.stories.tsx`.
  - Folders: kebab-case for page folders (`case-studies/`), `ui/`, `shared/`, `general/`.
  - Barrel export: optional `index.ts` per folder.

- **Imports**: use alias `@/components/...` (and `@/components/ui/...`, `@/components/shared/...`, etc.).
- **Server/Client**: default server. Add `"use client"` only when needed (state, effects, portals).
- **Styles**: Tailwind first. CSS Modules only for complex cases. No global CSS leaks.
- **Testing**: co-locate tests with components. Focus on behavior.
- **Do not** cross-import page folders. Keep boundaries strict.

**Example tree**

```
/app
/components
  /ui
    Button.tsx
    Input.tsx
  /shared
    Header.tsx
    Footer.tsx
  /general
    Container.tsx
    Section.tsx
  /home
    Hero.tsx
    TrustStrip.tsx
  /services
    ServiceCard.tsx
    ServiceDetailPanel.tsx
  /case-studies
    CaseStudyTile.tsx
    Filters.tsx
```

**Examples**

```ts
// UI atom
import { Button } from "@/components/ui/Button";

// Shared section
import Header from "@/components/shared/Header";

// Page-specific
import Hero from "@/components/home/Hero";
```

---

## Done criteria (per change)

-

## Output rules

- Provide diff or files changed.
- Provide commands run and their results.
- Provide rollback note if risk exists.
