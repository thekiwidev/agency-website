# Case Studies — Listing + Details (V1)

> Replace **[Agency]** with your brand. Verify bracketed metrics before launch. Voice: direct, technical, outcomes‑focused.

---

## SEO

**Meta title**: Case Studies — Proven outcomes in Web/Mobile, Security, DevOps, Embedded, AI/ML — [Agency]\
**Meta description**: Real projects with verified results. Explore how [Agency] delivered safer systems, faster releases, lower costs, and better user outcomes across industries.

---

## Listing Page

**H1**: Outcomes that hold up under load\
**Subcopy**: Real work across startups and enterprises. Filter by industry, service, stack, or outcome. Every study shows the problem, what we did, and what changed.

**Filters**: Industry ▾ · Service ▾ · Stack ▾ · Outcome ▾\
**Sort**: Newest · Impact (largest delta) · Alphabetical

**Tile fields**

- Title
- One‑liner (engagement type)
- Short description (2–3 lines)
- Badges: Services, Stack
- Key metrics (2–3)
- CTA: **Read case study**

### Tiles (examples)

#### 1) Fintech web platform — feature velocity rescue

**One‑liner**: Frontend modernization + CI/CD revamp\
**Short**: We rebuilt a legacy React codebase in Next.js and introduced reliable pipelines and visual tests.\
**Badges**: Web & Mobile · DevOps · React · Next.js · GitHub Actions · Vercel\
**Key metrics**: Deployment frequency **1/week → 8/day**; Change‑fail rate **28% → 8%**; P95 LCP **4.8s → 2.1s** [verify].\
**CTA**: Read case study →

#### 2) Healthcare SaaS — SOC 2 readiness + pen‑test

**One‑liner**: Security posture uplift and audit prep\
**Short**: Gap assessment, policy set, and offensive testing with guided remediation.\
**Badges**: Cyber Security · SOC 2 · OWASP · AWS\
**Key metrics**: Criticals **12 → 0**; Highs **47 → 3** before audit; Passed SOC 2 Type I on first attempt [verify].\
**CTA**: Read case study →

#### 3) IoT sensor fleet — stability and OTA

**One‑liner**: Firmware refactor + update pipeline\
**Short**: RTOS fixes, memory profiling, and staged OTA with rollback.\
**Badges**: Embedded · FreeRTOS · C/C++ · BLE · OTA\
**Key metrics**: Field crash rate **3.4%/mo → <0.5%/mo**; OTA success **96% → 99.6%** [verify].\
**CTA**: Read case study →

#### 4) E‑commerce scale‑up — CI/CD + cost control

**One‑liner**: SRE practices and infra modernization\
**Short**: IaC baseline, observability, and safe rollout strategies.\
**Badges**: DevOps · Terraform · Kubernetes · Prometheus/Grafana · AWS\
**Key metrics**: Deploys **weekly → 20/day**; Incidents **−40%**; Cloud cost **−23%** at 2× traffic [verify].\
**CTA**: Read case study →

#### 5) B2B support search — LLM‑RAG

**One‑liner**: Retrieval‑augmented answers with guardrails\
**Short**: Built a production RAG service with evaluation and telemetry.\
**Badges**: AI/ML · Python · PyTorch · OpenAI API · Postgres/Vector DB\
**Key metrics**: Ticket deflection **+25%**; AHT **−18%**; CSAT **+0.4**; Hallucinations **<1%** by eval [verify].\
**CTA**: Read case study →

#### 6) Industrial gateway — low‑power firmware

**One‑liner**: Power profiling and driver work\
**Short**: Optimized sleep cycles and updated radios and drivers.\
**Badges**: Embedded · Zephyr · LTE‑M · MQTT\
**Key metrics**: Battery life **+35%**; Uplink success **+9 pp**; Return rate **−60%** [verify].\
**CTA**: Read case study →

**Listing CTA bar**: Not sure which example is closest to you? **Book a Call**

---

## Detail Page Template

> Use this layout for each case study at `/case-studies/[slug]`.

**Title**\
**Summary**: 2–3 sentence overview of client, problem, and outcome.\
**At‑a‑glance**: Client · Industry · Region · Stage/Size · Services · Timeline · Team composition · Stack

### Context

Business goals, constraints, and why the timing mattered.

### Problem

What was broken or risky. Quantify baselines where possible.

### Approach

Phases and key decisions. Show trade‑offs and why choices were made.

### Solution

Architecture, implementation notes, and any diagrams or code artifacts suitable for public sharing.

### Results

Before/after metrics with measurement method and period. Call out reliability, speed, cost, and user impact. Include validation (dashboards, audits, or third‑party reports).

### Team & Timeline

Roles, seniority mix, and cadence. Start and finish dates, major milestones.

### Stack

Languages, frameworks, infra, and tools used.

### Deliverables

Documents, repos, ADRs, dashboards, runbooks, reports.

### Testimonial

Short client quote with name, role, and company permission.

### Next steps

Follow‑on work or handover. Link to related case studies and relevant services.

**CTA**: **Get a Quote** · **Book a Call**

**Image guidance**:

- Hero: product or architecture visual with alt text.
- 2–4 supporting images: dashboards, diffs, device photos, reports.
- Alt text is mandatory; avoid exposing secrets or PII.

---

## Five Full Examples

### A) Fintech web platform — feature velocity rescue

**Summary**: A Series B fintech’s React monolith slowed delivery and regressions spiked. We re‑platformed to Next.js, added CI/CD with quality gates, and stabilized releases.\
**At‑a‑glance**: Client: Fintech platform · Industry: Financial services · Region: North America · Stage: Series B · **Services**: Web & Mobile, DevOps · **Timeline**: 12 weeks · **Team**: Lead FE, BE, SRE, QA · **Stack**: React, Next.js, Node.js, GraphQL, GitHub Actions, Vercel

**Context**: Daily stand‑ups revealed features missing release trains. Marketing launches blocked.

**Problem**: Lead time from commit to prod averaged 14 days. Change‑fail rate 28%. P95 LCP 4.8s on core pages.

**Approach**: 1) Architectural baseline and ADRs. 2) Next.js app router and module boundaries. 3) CI/CD with test shards and visual regression. 4) Perf budget and vitals tracking.

**Solution**: Introduced feature flags, contract tests, and automated rollbacks. Migrated critical flows first, then long‑tail components.

**Results**: Deploy frequency **1/week → 8/day**; Change‑fail **28% → 8%**; P95 LCP **4.8s → 2.1s**; Regression rate **−35%** over 30 days [verify].

**Deliverables**: ADRs, Storybook library, pipeline config, runbooks, performance report.

**Testimonial**: “We ship again and sleep again.” — CTO, fintech [approval pending]

**Next steps**: Experiment platform and design system hardening. Links: Services → Web & Mobile, DevOps.

---

### B) Healthcare SaaS — SOC 2 readiness + pen‑test

**Summary**: A healthcare SaaS needed credible security posture before enterprise sales. We ran a gap analysis, built a policy set, and executed a targeted pen‑test with retest.\
**At‑a‑glance**: Client: HealthTech SaaS · Industry: Healthcare · Region: North America · Stage: Growth · **Services**: Cyber Security · **Timeline**: 8 weeks · **Team**: Security lead, pentester, cloud architect · **Stack**: AWS, Terraform, Burp, ZAP, CIS benchmarks

**Context**: Enterprise prospects required SOC 2 reports and evidence.

**Problem**: Unowned risks, missing policies, and unknown exposure in public endpoints.

**Approach**: 1) Map controls to SOC 2. 2) Define policies and evidence templates. 3) ROE for testing. 4) Guided remediation with engineering.

**Solution**: Implemented IAM least‑privilege baselines, logging, and alerting. Executed black‑box and authenticated tests, then retested fixes.

**Results**: Criticals **12 → 0**; Highs **47 → 3**; SOC 2 Type I **passed** with clean major findings [verify].

**Deliverables**: Risk register, policies, executive summary, technical report with CVSS and PoCs, remediation plan.

**Testimonial**: “Pragmatic, specific, and fast.” — Head of Security, healthcare SaaS [approval pending]

**Next steps**: Ongoing vuln management and Type II prep. Link: Services → Cyber Security.

---

### C) IoT sensor fleet — stability and OTA

**Summary**: Field devices crashed intermittently and updates were manual. We refactored RTOS tasks, fixed memory leaks, and built an OTA pipeline with staged rollouts.\
**At‑a‑glance**: Client: Industrial IoT · Industry: Manufacturing · Region: EMEA · Stage: Post‑launch · **Services**: Embedded Systems · **Timeline**: 10 weeks · **Team**: Firmware lead, systems engineer, QA · **Stack**: C/C++, FreeRTOS, BLE, LTE, custom bootloader

**Context**: Customers threatened churn over unreliable devices.

**Problem**: Watchdog resets and fragmentation under burst telemetry. Manual SD card updates created risk.

**Approach**: Profiling, HIL testing, heap audits, task refactors, OTA design with rollback.

**Solution**: Scheduler tuning, DMA driver fixes, segmented updates with signed images.

**Results**: Crash rate **3.4%/mo → <0.5%/mo**; OTA success **96% → 99.6%**; Support tickets **−52%** [verify].

**Deliverables**: Firmware, build scripts, OTA runbook, diagnostics, stability report.

**Testimonial**: “Fleet is finally calm.” — VP Hardware, IoT manufacturer [approval pending]

**Next steps**: Low‑power mode optimization. Link: Services → Embedded Systems.

---

### D) E‑commerce scale‑up — CI/CD + cost control

**Summary**: Traffic doubled and infra costs spiked. We standardized IaC, added SLOs and dashboards, and adjusted autoscaling and caches.\
**At‑a‑glance**: Client: Retail e‑commerce · Industry: Retail · Region: APAC · Stage: Scale‑up · **Services**: DevOps · **Timeline**: 6 weeks · **Team**: SRE lead, cloud engineer · **Stack**: AWS, Terraform, Kubernetes, Prometheus/Grafana, CloudFront, Redis

**Context**: Seasonal campaigns were risky and expensive.

**Problem**: Weekly deploys, on‑call fatigue, and opaque spend.

**Approach**: Blueprint IaC, pipeline parallelization, cache tuning, CDN config, golden dashboards, runbooks.

**Solution**: Canary deploys with automated rollback, right‑sized instances, RUM for real user metrics.

**Results**: Deploys **weekly → 20/day**; Incidents **−40%**; Cloud cost **−23%** at \~2× peak traffic [verify].

**Deliverables**: Terraform modules, CI/CD configs, playbooks, SLOs, cost report.

**Testimonial**: “Faster and cheaper without drama.” — VP Engineering, retail [approval pending]

**Next steps**: Chaos drills and multi‑region readiness. Link: Services → DevOps.

---

### E) B2B support search — LLM‑RAG

**Summary**: Support agents lacked fast, accurate answers. We built a RAG service with evaluation, guardrails, and observability.\
**At‑a‑glance**: Client: B2B SaaS · Industry: Software · Region: North America · Stage: Growth · **Services**: AI/ML · **Timeline**: 8 weeks · **Team**: ML engineer, data engineer, product engineer · **Stack**: Python, PyTorch, OpenAI API, Postgres + vector index, OpenTelemetry

**Context**: High ticket volume and inconsistent responses.

**Problem**: Long handle times, low self‑serve success, and hallucinations in early prototypes.

**Approach**: Data audit, retrieval schema, prompt policy, offline eval, online A/B with guardrails.

**Solution**: Domain adapters, confidence scoring, safety filters, human‑in‑the‑loop escalation.

**Results**: Deflection **+25%**; AHT **−18%**; CSAT **+0.4**; Hallucinations **<1%** measured by eval harness [verify].

**Deliverables**: Pipelines, model artifacts, eval suite, prompt library, dashboards.

**Testimonial**: “Search actually finds answers now.” — Director of Support, B2B SaaS [approval pending]

**Next steps**: Multilingual retrieval and fine‑tune experiments. Link: Services → AI/ML.

---

## Cross‑page Elements

- **Related studies**: Show 2–3 based on industry/service/stack.
- **Service crosslinks**: Map each study to its primary service page.
- **Evidence files**: Link sanitized reports or dashboards when permitted.
- **CTA**: Persistent **Get a Quote** and **Book a Call**.

---

## UI Behavior Notes

- Listing at `/case-studies` with filters and deep‑links (`/case-studies?service=devops`).
- Detail routes `/case-studies/[slug]`. Preserve return position to the listing.
- Keyboard and screen‑reader friendly cards and pagination.
- Event tracking: `case_study_opened {slug}`; `case_study_cta_clicked {slug, cta}`.
- Performance: lazy‑load images, LCP budget for top tiles, prefetch nearest detail route.

---

## Schema (optional JSON‑LD template)

```json
{
  "@context": "https://schema.org",
  "@type": "CaseStudy",
  "name": "Fintech web platform — feature velocity rescue",
  "author": {"@type": "Organization", "name": "[Agency]"},
  "about": ["Web Development", "DevOps"],
  "industry": "Financial services",
  "datePublished": "[YYYY-MM-DD]",
  "headline": "Modernization and CI/CD increased deployment frequency and reduced failures",
  "keywords": "Next.js, CI/CD, SRE, performance",
  "citation": "Internal performance dashboards (sanitized)",
  "abstract": "Re‑platformed a legacy frontend, implemented CI/CD and quality gates, and improved reliability and performance.",
  "result": [
    "Deploys 1/week → 8/day",
    "Change‑fail 28% → 8%",
    "P95 LCP 4.8s → 2.1s"
  ]
}
```

---

## Image & Asset Guidelines

- Redact secrets, tokens, and emails.
- Blur non‑public identifiers.
- Use vector diagrams where code cannot be shared.
- Provide descriptive alt text for each image.

