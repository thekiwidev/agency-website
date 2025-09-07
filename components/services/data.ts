export type ServiceKey =
  | "web-mobile"
  | "cyber-security"
  | "devops"
  | "embedded"
  | "ai-ml";

export type ServiceDetail = {
  key: ServiceKey;
  name: string;
  oneLiner: string;
  highlights: string[];
  snapshot: string;
  bestFor: string;
  capabilities: { title: string; items: string[] }[];
  sampleEngagements: string[];
  processSlas: string[];
  deliverables: string[];
  toolingCompliance: string[];
  caseTeaser?: string;
  faqs?: { q: string; a: string }[];
};

export const services: ServiceDetail[] = [
  {
    key: "web-mobile",
    name: "Web & Mobile Engineering",
    oneLiner: "Full‑stack product teams for modern web and mobile apps.",
    highlights: ["React/Next.js", "Node.js", "GraphQL", "Swift/Kotlin", "React Native"],
    snapshot:
      "Product teams that ship clean, maintainable web and mobile software. Frontend, backend, and QA working in lockstep.",
    bestFor:
      "New product builds, UI modernization, feature velocity rescues, platform migrations.",
    capabilities: [
      {
        title: "Frontend",
        items: [
          "React, Next.js, TypeScript",
          "state management",
          "performance",
          "accessibility",
        ],
      },
      {
        title: "Backend",
        items: [
          "Node.js",
          "GraphQL/REST",
          "microservices",
          "auth",
          "payments",
          "queues",
        ],
      },
      {
        title: "Mobile",
        items: [
          "Swift/iOS",
          "Kotlin/Android",
          "React Native",
          "offline‑first sync",
          "push",
        ],
      },
      {
        title: "Quality",
        items: [
          "E2E tests",
          "visual regression",
          "contract tests",
          "load tests",
        ],
      },
      {
        title: "Architecture",
        items: [
          "Modular monoliths",
          "service boundaries",
          "API gateways",
        ],
      },
    ],
    sampleEngagements: [
      "Greenfield MVP to first paying users.",
      "Frontend re‑platform to Next.js for performance and DX.",
      "Feature squad to accelerate delivery alongside your team.",
      "Reliability hardening prior to enterprise rollout.",
    ],
    processSlas: [
      "Discovery in 1–2 business days.",
      "Quote in < 48 hours post discovery.",
      "PR review turnaround target: < 24 business hours.",
      "Incident response (during active build): within 2 business hours.",
    ],
    deliverables: [
      "User stories and acceptance criteria.",
      "Architecture notes and ADRs.",
      "Component library entries and storybook artifacts.",
      "Test coverage report and performance baseline.",
      "Handover guide and runbooks.",
    ],
    toolingCompliance: [
      "Frameworks: React, Next.js, Node.js.",
      "CI/CD: GitHub Actions, Vercel.",
      "Data: Postgres, Redis.",
      "Security: secure SDLC, dependency scanning, SAST/DAST on request.",
      "Accessibility: WCAG 2.2 AA practices.",
    ],
    caseTeaser:
      "Fintech product: re‑platform → improved LCP and dev velocity (details by NDA).",
    faqs: [
      { q: "Can you work alongside our team?", a: "Yes, we often embed within product squads and sync on your rituals." },
      { q: "Do you handle testing?", a: "Yes. We add E2E and visual regression tests tied to critical flows." },
      { q: "Can you migrate to Next.js?", a: "We plan, execute, and optimize performance with minimal downtime." },
      { q: "How do we start?", a: "Discovery call → scoped plan → quote in under 48 hours." },
      { q: "What artifacts do we get?", a: "Stories, ADRs, test reports, runbooks, and a clear handover." },
    ],
  },
  {
    key: "cyber-security",
    name: "Cyber Security",
    oneLiner:
      "Offensive testing and secure‑by‑design reviews with practical remediation.",
    highlights: ["Pen‑testing", "Cloud security", "SOC 2/ISO readiness"],
    snapshot:
      "Security assessments and design reviews focused on actionable fixes and measurable risk reduction.",
    bestFor:
      "Teams preparing for audits, launching new systems, or hardening critical apps and cloud.",
    capabilities: [
      {
        title: "Testing",
        items: ["Web/API/mobile/cloud pen‑testing", "social engineering by scope"],
      },
      {
        title: "Vuln mgmt",
        items: ["triage", "prioritization", "remediation guidance"],
      },
      {
        title: "Design reviews",
        items: ["threat modeling", "architecture risks", "data flows"],
      },
      {
        title: "Compliance readiness",
        items: ["SOC 2/ISO 27001 gap analysis", "policy mapping"],
      },
      {
        title: "Cloud security",
        items: ["IAM", "network segmentation", "secrets", "drift"],
      },
    ],
    sampleEngagements: [
      "Pre‑audit readiness with policy set, risk register, and evidence templates.",
      "Full‑scope web/API pen‑test with retest.",
      "Secure cloud baseline with controls and guardrails.",
    ],
    processSlas: [
      "Discovery + scoping checklist.",
      "Rules of engagement and test window agreed.",
      "Critical findings notification: same business day.",
      "Draft report in 5–7 business days; retest included.",
    ],
    deliverables: [
      "Executive summary and technical report.",
      "Repro steps, proofs of concept, CVSS scoring.",
      "Road‑mapped remediation plan and secure‑by‑design recommendations.",
    ],
    toolingCompliance: [
      "Tools: Burp Suite, Nmap, OWASP ZAP, cloud‑native scanners.",
      "Standards: OWASP ASVS, NIST CSF, CIS Benchmarks.",
      "Data handling: least privilege, encrypted storage, NDA.",
    ],
    caseTeaser:
      "Healthcare SaaS: remediated top risks pre‑audit → passed SOC 2 on first attempt.",
    faqs: [
      { q: "Can you test production?", a: "Yes, with controlled windows and monitoring in place." },
      { q: "Will you help fix findings?", a: "We provide detailed guidance and can embed for remediation." },
      { q: "Do you sign our NDA and DPA?", a: "Yes." },
      { q: "How are critical issues reported?", a: "Same business day for criticals; full report follows with repro steps." },
      { q: "Do you provide retest?", a: "Yes, retest is included to verify fixes where scope allows." },
    ],
  },
  {
    key: "devops",
    name: "DevOps",
    oneLiner: "CI/CD, IaC, and SRE for reliable, cost‑aware cloud operations.",
    highlights: ["Terraform", "Kubernetes", "GitHub Actions", "Observability"],
    snapshot:
      "Reliable delivery and operations using automation, observability, and sound infrastructure patterns.",
    bestFor:
      "Teams scaling deployments, reducing incidents, or controlling cloud costs.",
    capabilities: [
      { title: "CI/CD", items: ["pipelines", "blue‑green/canary", "artifacts", "rollouts"] },
      { title: "IaC", items: ["Terraform modules", "multi‑env topologies", "policy‑as‑code"] },
      { title: "Kubernetes", items: ["clusters", "autoscaling", "service meshes"] },
      { title: "Observability", items: ["metrics", "logs", "traces", "alerting", "SLOs"] },
      { title: "Reliability", items: ["incident response", "runbooks", "chaos", "capacity planning"] },
    ],
    sampleEngagements: [
      "Pipeline modernization with caches and parallelization.",
      "IaC baseline with reviewable modules and drift detection.",
      "SRE onboarding with SLOs, dashboards, and paging policy.",
    ],
    processSlas: [
      "Discovery + environment assessment.",
      "Phased rollout and rollback plan.",
      "Pager coverage during migrations by agreement.",
      "Post‑implementation review with KPI deltas.",
    ],
    deliverables: [
      "Pipelines as code and IaC repositories.",
      "Runbooks and on‑call playbooks.",
      "Dashboards and alert rules.",
      "Cost and performance report.",
    ],
    toolingCompliance: [
      "CI/CD: GitHub Actions, ArgoCD.",
      "IaC: Terraform, OpenTofu.",
      "Cloud: AWS/GCP/Azure.",
      "Observability: Prometheus, Grafana, OpenTelemetry.",
    ],
    caseTeaser:
      "E‑commerce: deploys from weekly to 10+/day with change‑fail rate < 10%.",
    faqs: [
      { q: "Can you operate our clusters long‑term?", a: "Retainers available for ongoing operations and SRE." },
      { q: "Do you support multi‑cloud?", a: "Yes; we favor managed services where practical." },
      { q: "How do you handle secrets?", a: "Vault/KMS with least privilege and rotation." },
      { q: "How quickly can we modernize CI?", a: "Most pipelines show gains within the first sprint." },
      { q: "Can you reduce cloud costs?", a: "We baseline spend, rightsize, and implement budgets and alerts." },
    ],
  },
  {
    key: "embedded",
    name: "Embedded Systems",
    oneLiner: "Firmware, drivers, and OTA pipelines for connected devices.",
    highlights: ["RTOS", "Board bring‑up", "Low‑power optimization"],
    snapshot:
      "Stable, updatable firmware and connectivity for devices in the field.",
    bestFor:
      "IoT products, gateways, sensor networks, medical and industrial devices.",
    capabilities: [
      { title: "Firmware", items: ["RTOS scheduling", "drivers", "bootloaders", "power mgmt"] },
      { title: "Connectivity", items: ["BLE", "Wi‑Fi", "LTE", "MQTT", "OTA pipelines"] },
      { title: "Hardware bring‑up", items: ["board validation", "DFU", "diagnostics"] },
      { title: "Testing", items: ["HIL setups", "fuzzing", "long‑run stability testing"] },
    ],
    sampleEngagements: [
      "Board bring‑up and driver development to reach functional prototype.",
      "OTA pipeline with staged rollouts and rollback.",
      "Power profiling and optimization for battery targets.",
    ],
    processSlas: [
      "Discovery with hardware and datasheet review.",
      "Milestone plan aligned to hardware availability.",
      "Field issue triage target: within 1 business day.",
    ],
    deliverables: [
      "Firmware source and build scripts.",
      "Protocol specs and integration notes.",
      "Test reports and stability metrics.",
      "OTA runbook and rollback procedure.",
    ],
    toolingCompliance: [
      "Toolchains: GCC/Clang, C/C++.",
      "RTOS: FreeRTOS/Zephyr.",
      "QA: HIL rigs, long‑haul benches.",
      "Security: signed images, secure boot where applicable.",
    ],
    caseTeaser:
      "Connected sensor fleet: OTA + stability work → crash rate < 0.5%/month.",
    faqs: [
      { q: "Can you work with our silicon vendor SDK?", a: "Yes; we evaluate and integrate." },
      { q: "Do you support certification?", a: "We assist with pre‑cert test prep and documentation." },
      { q: "Do you sign hardware NDAs?", a: "Yes." },
      { q: "Do you build HIL rigs?", a: "We design and automate pragmatic HIL setups for stability testing." },
      { q: "Can you handle OTA at scale?", a: "We implement staged rollouts with rollback and metrics." },
    ],
  },
  {
    key: "ai-ml",
    name: "AI/ML",
    oneLiner:
      "Pragmatic ML and LLM integration with robust data pipelines.",
    highlights: ["RAG", "Model dev", "MLOps"],
    snapshot:
      "Production‑grade ML and LLM features with solid data foundations and controls.",
    bestFor:
      "Search and recommendations, fraud/risk, NLP/LLM features, analytics at scale.",
    capabilities: [
      { title: "Data", items: ["ingestion", "feature stores", "vector indexes", "governance"] },
      { title: "Models", items: ["classical ML", "embeddings", "fine‑tuning", "evaluation"] },
      { title: "LLM apps", items: ["RAG", "tool use", "safety rails", "observability"] },
      { title: "MLOps", items: ["experiments", "model registry", "CI/CD for models"] },
    ],
    sampleEngagements: [
      "RAG feature for support search with guardrails and telemetry.",
      "Demand forecasting model with monitoring and drift alerts.",
      "LLM‑powered workflow assistant with human‑in‑the‑loop review.",
    ],
    processSlas: [
      "Discovery → data audit → feasibility check.",
      "Offline/online evaluation plan agreed.",
      "P0 issue response during pilot: within 4 business hours.",
    ],
    deliverables: [
      "Data contracts and pipelines.",
      "Model artifacts and evaluation reports.",
      "Prompt and policy libraries for LLM use.",
      "Inference runbooks and rollback plans.",
    ],
    toolingCompliance: [
      "Data: Python, Pandas, Spark, Postgres.",
      "ML: scikit‑learn, XGBoost, PyTorch.",
      "LLM: OpenAI API, vector DBs.",
      "Governance: model cards, audit logs, PII handling guidelines.",
    ],
    caseTeaser:
      "Support search: LLM‑RAG → deflection rate +25% with CSAT +0.4.",
    faqs: [
      { q: "Will you use our data safely?", a: "Yes; data minimization and access controls by default." },
      { q: "Fine‑tune or off‑the‑shelf?", a: "We choose the simplest option that meets the target metric." },
      { q: "How is success measured?", a: "Clear offline and online KPIs defined up front." },
      { q: "What about hallucinations?", a: "We add guardrails, evals, and human-in-the-loop where needed." },
      { q: "Do you support on-prem?", a: "Yes; we adapt to your constraints and governance needs." },
    ],
  },
];

export const serviceKeyOrder: ServiceKey[] = [
  "web-mobile",
  "cyber-security",
  "devops",
  "embedded",
  "ai-ml",
];
