# Pricing & Engagement — Full Page + Home Block (V1)

> Replace **P-Diamond** with your brand. Rates reflect your stated range: **\$15–\$25/hour**, hourly T&M by default. All examples are estimates, not binding quotes.

---

## SEO (for the full page)

**Meta title**: Pricing & Engagement — Hourly specialists, clear estimates — P-Diamond\
**Meta description**: Simple hourly pricing (\$15–\$25/hr). Estimate your project cost by service, complexity, and duration. Hourly T&M by default. Quote in under 48 hours after discovery.

---

## Homepage Pricing Block (embed)

**Section label**: Pricing & Engagement\
**H2**: Simple hourly pricing, built for clarity\
**Subcopy**: Most work runs **\$15–\$25/hr**. You pick scope and pace. We quote a role mix and estimated hours for each milestone.

**Quick estimate (mini)**\
Inputs:

- **Work type**: Full Project · Feature/Fix · Cyber Security · DevOps · Embedded · AI/ML
- **Weeks**: slider (1–16)
- **Hours/week**: slider (5–40)
- **Team size**: stepper (1–4)

Output:

- **Estimated range**: `$[low] – $[high]` total
- **Effective hourly**: `$[rate]/hr` (within \$15–\$25)

**Notes**: Hourly T&M. Final quote follows discovery. Fixed‑bid available by exception for well‑defined scopes.\
**CTAs**: **Get a Quote** · **Book a Call**

---

## Full Pricing & Engagement Page

**H1**: Pricing you can reason about\
**Subcopy**: We scope outcomes, estimate hours by role, and bill hourly within **\$15–\$25/hr**. Retainers available. Fixed‑bid by exception.

### Rate overview

- **Standard range**: **\$15–\$25/hr**.
- **Drivers**: service type, complexity, compliance requirements, urgency, and team size.
- **Billing**: hourly time‑and‑materials; weekly invoices; detailed time reports.

### Engagement models

- **Hourly T&M (default)**: Flexible scope with milestone check‑ins.
- **Retainer**: Reserved capacity per week or month for ongoing work.
- **Fixed‑bid**: For tight, stable scopes. Requires discovery and signed acceptance criteria.

---

## Interactive Estimator (full)

> Use this content to power a calculator. Cap effective hourly at **\$25** and floor at **\$15**.

### Inputs

- **Work type** _(select)_: Full Project · Feature/Fix · Cyber Security · DevOps · Embedded · AI/ML
- **Complexity** _(radio)_: Low · Medium · High
- **Weeks** _(slider)_: 1–26
- **Hours/week per engineer** _(slider)_: 5–40
- **Team size** _(stepper)_: 1–6
- **Options** _(toggles)_: Expedited timeline · Regulated compliance (e.g., healthcare/finance) · Onsite requirement

### Calculation

- **Base rate**: \$15/hr.
- **Multipliers**:
  - _Work type_:
    - Full Project: ×1.30–1.60
    - Feature/Fix: ×1.00–1.20
    - Cyber Security: ×1.20–1.60
    - DevOps: ×1.20–1.40
    - Embedded: ×1.40–1.60
    - AI/ML: ×1.30–1.60
  - _Complexity_: Low ×0.95 · Medium ×1.05 · High ×1.15
  - _Options_: Expedited +0.10, Compliance +0.05, Onsite +0.05 (applied multiplicatively)

**Effective hourly** = clamp( round( Base × WorkType × Complexity × (1 + option surcharges) ), **\$15**, **\$25** )\
**Total estimate** = Effective hourly × (Team size × Hours/week × Weeks)

### Example outputs

- **Feature/Fix**, Low complexity, 1 engineer, 10 hours total → **\$150–\$250** total (at \~\$15–\$25/hr).
- **Full Project**, High complexity, 2 engineers, 12 weeks @ 30 h/wk → Effective ≈ capped **\$25/hr** → **\$18,000**.
- **Cyber Security pen‑test**, Medium complexity, 1 engineer, 2 weeks @ 25 h/wk → Effective ≈ **\$19–\$24/hr** → **\$950–\$1,200**.
- **DevOps sprint**, Medium, 1 engineer, 3 weeks @ 20 h/wk → Effective ≈ **\$19–\$22/hr** → **\$1,140–\$1,320**.
- **Embedded firmware**, Medium, 1 engineer, 4 weeks @ 25 h/wk → Effective ≈ **\$22–\$24/hr** → **\$2,200–\$2,400**.
- **AI/ML pilot**, Medium, 1 engineer, 4 weeks @ 25 h/wk → Effective ≈ **\$21–\$23/hr** → **\$2,100–\$2,300**.

> Display both the **effective hourly** and **total** so users can sanity‑check scope.

---

## What’s included (by default)

- Discovery call and scoped estimate.
- Senior engineer assigned as lead.
- Weekly check‑ins and progress reports.
- Code in your repos, CI/CD setup, and documentation/hand‑off notes.
- Security‑first practices and basic accessibility checks (WCAG‑aware).

## Not included (unless specified)

- Cloud/infra fees, paid third‑party licenses, data labeling, production on‑call outside agreed windows, hardware procurement, formal certifications/audits.
- Travel for onsite work.

## Minimums & scheduling

- **Small tasks** (Feature/Fix): 5‑hour minimum.
- **Project starts**: typical kickoff within 1–2 business days after quote approval.
- **Time‑zone coverage**: standard 4‑hour overlap; expanded coverage by arrangement.

## Discounts & adjustments

- **Pre‑purchase blocks**: 100+ hours (−5%), 200+ hours (−8%).
- **Nonprofit/education**: case‑by‑case.
- **Rush**: expedited toggle increases the effective hourly within the \$25/hr cap.

## Terms

- Weekly invoices; net 7 by default.
- Time tracking shared for transparency.
- Change management: new scope is estimated and approved before work.
- Cancellation: unused hours are not billed; active week billed to date.

---

## FAQs (pricing‑specific)

**Can you give a fixed price?**\
Yes, for well‑defined scopes after discovery. Most work stays hourly for flexibility and speed.

**What raises the hourly rate?**\
High complexity, regulated compliance, onsite needs, or expedited timelines. The cap remains **\$25/hr**.

**Do you work alongside our team?**\
Yes. We merge PRs in your repos and follow your processes.

**Can we pause and resume?**\
Yes. Hours only accrue while we are actively working.

**How do you estimate hours?**\
We produce a milestone plan with role mix, acceptance criteria, and best/worst‑case hour ranges.

---

## UI behavior notes

- **Homepage block**: compact estimator (work type, weeks, hours/week, team size) with live total and effective hourly.
- **Full page**: show advanced toggles (complexity, expedited, compliance, onsite).
- **Accessibility**: keyboard + screen‑reader friendly; units labeled; currency locale aware.
- **Analytics**: `pricing_estimate_viewed`, `pricing_estimate_updated {workType, rate, total}`, `pricing_cta_clicked {cta}`.
- **SEO**: JSON‑LD Offer for each service with price range, linking to contact.

---

## Optional JSON (estimator config)

```json
{
  "baseRate": 15,
  "capRate": 25,
  "workType": {
    "Full Project": [1.3, 1.6],
    "Feature/Fix": [1.0, 1.2],
    "Cyber Security": [1.2, 1.6],
    "DevOps": [1.2, 1.4],
    "Embedded": [1.4, 1.6],
    "AI/ML": [1.3, 1.6]
  },
  "complexity": { "Low": 0.95, "Medium": 1.05, "High": 1.15 },
  "options": { "Expedited": 0.1, "Compliance": 0.05, "Onsite": 0.05 },
  "sliders": { "weeks": [1, 26], "hoursPerWeek": [5, 40], "teamSize": [1, 6] }
}
```

---

## Microcopy for legal/trust

- “Estimated totals are informational and subject to a formal quote after discovery.”
- “All work is billed hourly within the \$15–\$25/hr range unless a fixed‑bid SOW is signed.”
- “We can sign your NDA or provide ours.”
