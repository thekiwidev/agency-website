export type Faq = {
  id: string;
  q: string;
  a: string;
  href?: string;
};

export const faqs: Faq[] = [
  {
    id: "what-services-do-you-offer",
    q: "What services do you offer?",
    a: "We provide specialized software engineering services across five core areas: Web & Mobile Engineering (React, Next.js, Node.js, Swift/Kotlin, React Native), Cyber Security (penetration testing, vulnerability management, SOC 2/ISO compliance), DevOps (CI/CD, infrastructure as code, Kubernetes, observability), Embedded Systems (firmware, RTOS, OTA updates, connectivity), and AI/ML (data pipelines, model development, LLM integration, MLOps). Each service is delivered by senior engineers who specialize in that domain, ensuring you get expert-level implementation rather than generalist approaches.",
  },
  {
    id: "how-do-you-price-work",
    q: "How do you price your work?",
    a: "We use transparent hourly billing ranging from $15-$25 per hour, with rates determined by project complexity, service type, compliance requirements, and timeline urgency. Most projects are billed as time-and-materials with weekly invoices and detailed time tracking shared for complete transparency. We provide upfront estimates with role mix and hour ranges per milestone after our discovery call. For well-defined scopes, we can offer fixed-bid pricing, and retainers are available for ongoing work. There are no hidden fees - you only pay for active engineering time.",
  },
  {
    id: "how-fast-can-you-start",
    q: "How fast can you start working on my project?",
    a: "We pride ourselves on rapid response times. Initial inquiries receive responses within 2 business hours, and we can typically schedule discovery calls within 1-2 business days. After the discovery call, you'll receive a detailed quote within 48 hours. Once approved, most projects can kick off within 1-2 business days depending on scope and team availability. For urgent projects, we offer expedited timelines with our rush service option, ensuring critical work gets immediate attention while maintaining our quality standards.",
  },
  {
    id: "can-you-sign-nda",
    q: "Can you sign an NDA and handle confidential information?",
    a: "Absolutely. We understand the sensitive nature of software development and business information. We can sign your existing NDA or provide our standard mutual non-disclosure agreement. Our team follows strict security protocols including encrypted storage, least-privilege access controls, and secure communication channels. For highly regulated industries like healthcare or finance, we can meet additional compliance requirements such as HIPAA, SOX, or PCI DSS standards. All client data is handled with enterprise-grade security practices.",
  },
  {
    id: "do-you-work-with-existing-teams",
    q: "Do you work with existing teams and codebases?",
    a: "Yes, we're designed to integrate seamlessly with your existing development workflow. We can work directly in your repositories, follow your coding standards and review processes, submit pull requests through your existing CI/CD pipelines, and participate in your team meetings and sprint planning. Our engineers adapt to your tools, whether that's Jira, Linear, Slack, GitHub, GitLab, or any other platform. We see ourselves as an extension of your team rather than an external vendor, ensuring smooth collaboration and knowledge transfer.",
  },
  {
    id: "what-about-security-and-compliance",
    q: "How do you handle security and compliance requirements?",
    a: "Security is integrated into every aspect of our delivery process, not an afterthought. We follow secure software development lifecycle (SDLC) practices including threat modeling, secure code reviews, dependency scanning, and SAST/DAST testing. For compliance-driven projects, we support SOC 2 Type II, ISO 27001, HIPAA, and other frameworks with gap analysis, policy mapping, and audit-ready documentation. Our cybersecurity specialists can conduct penetration testing, vulnerability assessments, and security architecture reviews. We maintain detailed audit logs and can provide evidence packages for your compliance audits.",
  },
  {
    id: "do-you-offer-fixed-bid-pricing",
    q: "Do you offer fixed-bid pricing?",
    a: "We offer fixed-bid pricing by exception for very well-defined scopes where requirements are stable and unlikely to change. However, our default hourly time-and-materials approach offers more flexibility and typically results in better outcomes. With hourly billing, you can adjust scope as you learn, pivot based on user feedback, and avoid the padding that fixed-bid contracts usually require. When we do provide fixed-bid quotes, they require a comprehensive discovery phase and signed acceptance criteria to ensure both parties have clear expectations.",
  },
  {
    id: "what-technologies-do-you-specialize-in",
    q: "What technologies and frameworks do you specialize in?",
    a: "Our technology stack covers modern, production-proven tools across all domains. For web development: React, Next.js, TypeScript, Node.js, GraphQL, Postgres, Redis. Mobile: Swift/iOS, Kotlin/Android, React Native. DevOps: Terraform, Kubernetes, GitHub Actions, AWS/GCP/Azure, Prometheus, Grafana. Security: Burp Suite, OWASP tools, cloud-native scanners. Embedded: C/C++, FreeRTOS, various MCU families, OTA pipelines. AI/ML: Python, PyTorch, scikit-learn, OpenAI APIs, vector databases. We stay current with ecosystem evolution and can adapt to your existing technology choices when needed.",
  },
  {
    id: "how-do-you-ensure-code-quality",
    q: "How do you ensure code quality and maintainability?",
    a: "Code quality is maintained through multiple layers of rigor. Every project includes comprehensive code reviews, automated testing (unit, integration, and end-to-end), linting and formatting standards, and architectural documentation. We write clean, self-documenting code with proper error handling, logging, and monitoring. For web projects, we ensure WCAG 2.2 AA accessibility compliance and performance optimization. All deliverables include handover documentation, runbooks, and knowledge transfer sessions. We believe in leaving codebases better than we found them, with improved patterns and practices your team can continue using.",
  },
  {
    id: "can-you-handle-ongoing-support",
    q: "Do you provide ongoing support and maintenance?",
    a: "Yes, we offer several post-delivery support options tailored to your needs. This includes retainer agreements for ongoing development, bug fixes and minor enhancements, monitoring and incident response, performance optimization, and security updates. For critical systems, we can provide SLA-backed support with defined response times for different severity levels. Our goal is to ensure smooth operation of what we build, whether that's through documentation and training for your team to maintain independently, or through continued partnership as your extended development team.",
  },
  {
    id: "how-do-you-handle-project-communication",
    q: "How do you handle project communication and reporting?",
    a: "Transparent communication is core to our process. You'll have weekly check-ins with detailed progress reports, access to our time tracking for complete transparency, shared project documentation and milestone updates, and direct communication channels with your assigned lead engineer. We adapt to your preferred communication style - whether that's Slack, email, video calls, or project management tools. For larger projects, we provide executive dashboards showing progress against milestones, budget burn rates, and upcoming deliverables. You're never left wondering about project status.",
  },
  {
    id: "what-makes-you-different-from-other-agencies",
    q: "What makes you different from other development agencies?",
    a: "Several key differentiators set us apart: First, we focus exclusively on senior engineers with deep specialization rather than generalists, ensuring expert-level work in each domain. Second, our transparent hourly billing with shared time tracking eliminates the uncertainty of traditional agency pricing. Third, we're designed for speed - 2-hour response times and 48-hour quotes versus weeks-long sales cycles. Fourth, we integrate with your existing team and tools rather than forcing you into our processes. Finally, our contractor-driven model means you work directly with the engineers building your product, not account managers who then relay requirements to offshore teams.",
  },
];
