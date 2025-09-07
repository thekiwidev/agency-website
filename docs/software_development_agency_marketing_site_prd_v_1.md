# Product Requirements Document (PRD)

**Product**: Software Development Agency Marketing Website  
**Version**: 1.0 (MVP -> V1.1 -> V2)  
**Owner**: Agency Ops / Growth  
**Primary Goals**: Generate qualified leads, streamline quoting, build trust with B2B buyers, recruit contractors.

---

## 1) Executive Summary

A modern, high‑conversion marketing site for a contractor‑driven software agency specializing in: Web & Mobile Engineering, Cyber Security, DevOps, Embedded Systems, and AI/ML. Visitors submit inquiries, book calls, and receive quotes billed primarily per hour. MVP prioritizes lead capture + manual quoting. Later phases add self‑serve scoping, rate cards, and a client portal.

### Key Outcomes

- Increase qualified lead volume and quote acceptance rate.
- Shorten time‑to‑first‑response and time‑to‑quote.
- Present credibility via case studies, certifications, and specialized service pages.

---

## 2) Target Users & JTBD

### Buyer ICPs

- Startup founders and CTOs: feature delivery, rescues, speed.
- SMB/Enterprise engineering leaders: overflow capacity, specialist workstreams.
- Security leaders: pen‑testing, audits, compliance readiness.
- Hardware/IoT teams: firmware and embedded expertise.
- Data/AI leads: ML/LLM integration, MLOps.

### Jobs‑to‑Be‑Done

- _Scope & select_: Assess capability, fit, and cost quickly.
- _Engage_: Request a quote and schedule a discovery call.
- _Decide_: See proof (case studies, references, credentials).
- _Operate_: Understand billing, timelines, SLAs, and process.

---

## 3) Business & Success Metrics

- MQLs/month, SQL rate, demo‑book rate, quote acceptance rate.
- Avg response time to inquiry (<2 business hours).
- Avg time to quote (<48 hours post discovery call).
- Avg contract value; utilization of contractor bench.
- SEO: impressions, clicks, top‑3 rankings for priority keywords.
- Core Web Vitals: LCP < 2.5s, INP < 200ms, CLS < 0.1.

---

## 4) Scope

### In‑Scope (MVP)

- Marketing website with clear IA and high‑converting CTAs.
- Inquiry/quote request form with file upload and budget/timeline fields.
- Meeting scheduling integration.
- Services hub + deep service pages for the five specializations.
- Case studies, About, Pricing & Engagement, Blog/Insights, Contractors Join page.
- Basic CRM integration, email notifications, analytics, and consent.

### Out‑of‑Scope (MVP)

- Client portal, project tracking, real‑time quote calculators.
- Payments, e‑sign, SOW generation inside the site.

### Later (Roadmap)

- Guided estimator, rate cards, instant NDA, e‑sign, deposits.
- Client portal (milestones, invoices, docs).
- Talent marketplace view for pre‑vetted contractors.

---

## 5) Information Architecture

**Top Nav**: Home · Services ▾ · Case Studies · Pricing & Engagement · About · Contractors ▾ · Insights · Contact · Book a Call  
**Services**: Web & Mobile · Cyber Security · DevOps · Embedded Systems · AI/ML  
**Contractors**: Join the Network · Open Roles  
**Footer**: Privacy · Terms · Security · DPA · Cookie Policy · Careers · Newsletter · Social

### Search & Sitemaps

- On‑site search (MVP optional).
- XML sitemap, robots.txt, breadcrumb schema, clean URL slugs.

---

## 6) Page‑by‑Page Requirements

### 6.1 Home

- Hero: Value proposition, primary CTA "Get a Quote", secondary "Book a Call".
- Trust: logos, certifications, brief numbers (projects shipped, uptime, NPS).
- Services Overview: 5 cards with quick benefits and deep links.
- Process: 3–5 steps (Inquiry → Discovery → Quote → Build → Deliver).
- Case Study highlight: 1–2 tiles linking to detail pages.
- Tech stack strip: frameworks, clouds, security tools.
- Testimonials: short quotes, roles, company names.
- FAQ: 6–8 high‑intent questions.
- Conversion strip: sticky or mid‑page CTA bar.

### 6.2 Services Hub

- Overview of capabilities and engagement models.
- Grid of the 5 core services with links.

### 6.3 Service Detail Pages (one per specialization)

### Common sections

- Problem/Outcome framing; who it’s for.
- Capabilities list with sub‑services.
- Delivery model: hourly billing, typical roles, team composition.
- Process and SLAs.
- Sample deliverables and timelines.
- Toolchain & compliance notes.
- Case study carousel filtered to this service.
- FAQ + CTA.

**Web & Mobile**: web apps, mobile apps, frontend systems, backend, QA.  
**Cyber Security**: pen‑test, vuln mgmt, security reviews, SOC2/ISO readiness.  
**DevOps**: CI/CD, IaC, cloud migration, SRE, observability.  
**Embedded**: firmware, board bring‑up, RTOS, connectivity, OTA.  
**AI/ML**: data pipelines, model dev, LLM integration, MLOps.

### 6.4 Case Studies (Listing + Detail)

- Filters: industry, service, stack, outcome.
- Detail: client context, problem, solution, stack, team, timeline, metrics, quote.

### 6.5 Pricing & Engagement

- Models: hourly T&M default; retainer; fixed‑bid by exception.
- Example rate ranges by role (no public hard commitments), billing cadence, min engagement.
- How quoting works and what to expect.
- CTA to request scoped quote.

### 6.6 About

- Mission, principles, leadership bios, certifications, locations/time zones, hiring.
- Social proof and community contributions.

### 6.7 Contractors: Join the Network

- Value prop for contractors, vetting steps, expectations, payout cadence.
- Application form + resume/GitHub/LinkedIn; role taxonomy and eligibility checklist.
- ATS integration for workflow.

### 6.8 Insights (Blog)

- Categories per service; canonical tags; reading time; related posts.
- Newsletter signup; RSS.

### 6.9 Contact / Request a Quote

- Multi‑step form with progressive disclosure. Fields: name, email, company, role, project type, scope summary, goals, timeline, budget range, codebase link, attachments (NDA/project brief), consent.
- Auto‑confirmation email; Slack/CRM alert; thank‑you page with scheduler.

### 6.10 Book a Call

- Embedded scheduler with required context fields.
- Post‑booking email and calendar invite.

### 6.11 Legal & Trust

- Privacy Policy, Terms, Cookie Policy, DPA template, Security page (data handling, hosting, certs).

---

## 7) User Flows (MVP)

### Lead Intake → Quote

1. Visitor lands via SEO/ads/referral → Home/Service page.
2. CTA → Request a Quote (form).
3. Auto‑email receipt + scheduler link.
4. Internal: CRM lead → status = _New_. Slack alert created.
5. Discovery call booked; status = _Discovery_.
6. Internal template generates quote draft; review.
7. Send quote PDF by email; status = _Quoted_.
8. On acceptance: status = _Won_. Assign lead engineer; kickoff email.
9. If no response: automated follow‑ups at 2, 7, 14 days.

### Contractor Application

1. Candidate submits application.
2. ATS status -> Screening → Tech Review → Offer/Pool.
3. Collect compliance docs and banking info on acceptance.

---

## 8) Functional Requirements

- Forms: server‑side validation, spam protection (hCaptcha), file uploads (PDF, DOCX, ZIP), 25MB cap.
- Scheduling: Calendly/Cal.com embed with routing forms.
- CRM: HubSpot or Pipedrive create/update lead + properties.
- Email: transactional (SendGrid/Resend).
- CMS: headless schema for pages, services, case studies, blog, FAQs.
- Search: optional Algolia or client‑side fuse.js for MVP.
- Internationalization: copy ready; currency display in USD for MVP.
- Accessibility: WCAG 2.2 AA.
- SEO: schema (Organization, Service, FAQ, Article, Breadcrumb), meta, OG/Twitter, clean slugs.
- Analytics: GA4 + privacy‑friendly (Plausible).
- Consent: CMP for cookies; region‑aware.
- Performance: image CDN, lazy‑loading, prefetch critical routes.
- Security: HTTPS, HSTS, CSP, CSRF on forms, rate limits.

---

## 9) Non‑Functional Requirements

- Uptime target 99.9% for marketing site.
- Build time < 10m; rollback under 5m.
- TTFB < 800ms, LCP < 2.5s on 4G mid‑tier device.
- Error logging for forms and integrations; privacy safe.

---

## 10) Content Model (Headless CMS)

**Globals**: Nav, Footer, Social, Settings.  
**Page**: title, slug, hero, sections[], SEO, OG.  
**Service**: name, summary, benefits[], capabilities[], process, tools, FAQs[], relatedCaseStudies[].  
**Case Study**: client, industry, problem, solution, metrics[], timeline, stack[], images[], testimonial, services[].  
**Post**: title, author, category, body, canonical, SEO.  
**FAQ**: question, answer, tags.  
**People**: name, role, bio, headshot, certifications.  
**Legal**: policy type, body.

---

## 11) Design System

- Brand: modern, technical, trustworthy; “futuristic” without heavy effects.
- Typography: geometric sans for display, humanist sans for body.
- Colors: accessible contrast; light/dark modes.
- Spacing & Grid: 4/8px scale; 12‑col grid; generous white space.
- Components: header, mega‑menu, CTA bars, cards, accordions, tabs, pagination, stepper, testimonial block, logo wall, timeline, code/snippet block, form elements, toast.
- Motion: subtle entrance transitions, reduced‑motion support.
- Imagery: product mockups, architecture diagrams, minimal 3D where helpful.

---

## 12) Tech Stack (Opinionated)

- **Framework**: Next.js (App Router) + TypeScript.
- **UI**: Tailwind + shadcn/ui + Framer Motion.
- **CMS**: Sanity or Contentlayer (MDX) for MVP simplicity.
- **Hosting**: Vercel.
- **Forms**: Serverless functions + Uploadcare/S3; hCaptcha.
- **CRM**: HubSpot/Pipedrive.
- **Email**: Resend/SendGrid.
- **Search**: None in MVP or fuse.js; Algolia later.
- **Analytics**: GA4 + Plausible.
- **Scheduler**: Cal.com/Calendly.
- **Monitoring**: Vercel Analytics + Sentry.

---

## 13) Integration Contracts (MVP)

### Form → CRM

- Payload: { name, email, company, role, service, budgetRange, timeline, message, attachments[], utm\*, consent }.
- Create/Update lead. Tag by service.
- Webhook retries with exponential backoff.

### Form → Email

- To visitor: confirmation with next steps and scheduler link.
- To internal: new lead summary with quick‑view.

### Scheduler → CRM

- On booking: update lead stage to _Discovery_; attach meeting link and time.

---

## 14) SEO Plan

- Keyword map by service and industry use case.
- Structured data for Organization, Service, FAQ, Article, Breadcrumb.
- Internal linking from posts → service pages and case studies.
- Performance budgets and image discipline.
- Backlink strategy: case study syndication and guest posts.

---

## 15) Analytics & Events

- `lead_submitted` {service, budget, timeline, source}.
- `call_booked` {duration, timeslot}.
- `quote_sent` {service, value_tier}.
- `quote_accepted` {value_tier}.
- `contractor_applied` {role, seniority}.
- Funnels for Home → Service → Quote Request; Service → Case Study → Quote Request.

---

## 16) Accessibility & Compliance

- WCAG 2.2 AA. Keyboard focus, labels, error messaging, contrast.
- GDPR/CPRA: consent CMP, DPA template, data subject rights page.
- Security page: data handling, storage, access controls, hosting regions.

---

## 17) Content Guidelines (for later generation)

- Voice: direct, technical, outcomes‑focused. Avoid hype.
- Show before/after metrics in case studies.
- Prefer action headings over vague claims.
- Include plain‑language explanations for non‑technical buyers.

---

## 18) Wireframe Outlines

**Home**: Header → Hero (H1, subcopy, primary/secondary CTAs) → Logos → Services grid → Process → Case study teaser → Tech strip → Testimonials → FAQ → Final CTA → Footer.

**Service Page**: Hero → Signals of fit → Capabilities grid → Process and SLAs → Tooling/compliance → Case studies → FAQ → CTA.

**Case Study**: Hero → Context → Problem → Solution → Metrics → Timeline/Team → Stack → Testimonial → CTA.

**Pricing & Engagement**: Models → Rate ranges by role (illustrative) → Billing cadence → How quoting works → CTA.

**Contractors**: Hero → Why join → Vetting steps → Expectations → Application form → FAQ.

**Contact/Quote**: Multi‑step form → Thank‑you with scheduler.

---

## 19) QA Plan

- Cross‑browser: latest Chrome, Safari, Firefox, Edge.
- Devices: iPhone SE/Pro Max, Pixel, iPad, common Android.
- Forms: validation, spam, upload limits, error states, retry logic.
- Integrations: CRM and email webhooks, scheduler callbacks.
- Accessibility: axe audits; manual keyboard review.
- Performance: Lighthouse, WebPageTest profiles.
- SEO: meta, schema validation, sitemaps, robots, canonical.

---

## 20) Launch Checklist

- Domains, SSL, redirects, www/non‑www, HSTS.
- Robots.txt allow, XML sitemap, canonical URLs.
- OG/Twitter images per page.
- 404/500 pages.
- Cookie banner and policies.
- Error monitoring and alerting on.
- Regression pass on all CTAs and forms.

---

## 21) Roadmap

**MVP (this PRD)**: Marketing site + lead capture + scheduling + CRM + blog.  
**V1.1**: Guided brief intake, smarter routing, richer case studies, gated assets.  
**V2**: Estimator with role/hour mixes, NDA click‑through, e‑sign SOW, deposit, client portal, contractor mini‑profiles with anonymized bios.

---

## 22) Risks & Mitigations

- Low lead quality → add budget/timeframe filters, industry pages, qualification copy.
- Response delays → SLA, Slack alerts, backup on‑call.
- Scope creep → clear engagement models and boundaries on pages.
- Performance regressions → CI checks and budgets.

---

## 23) Open Questions (Track in backlog)

- Final CRM choice and property schema.
- Public rate ranges vs. “contact for rates”.
- Target industries to prioritize for case studies.
- Contractor ATS selection.

---

## 24) Appendix: Suggested Tech Choices

- Next.js 14+, TS, Tailwind, shadcn/ui, Framer Motion, Sanity, Vercel, Resend, Uploadcare, Cal.com, HubSpot/Pipedrive, Plausible, Sentry.
