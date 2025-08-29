export type CaseItem = {
  slug: string; // "/case-studies/[slug]"
  service:
    | "Web & Mobile"
    | "DevOps & SRE"
    | "Cyber Security"
    | "AI/ML"
    | "Embedded";
  title: string; // ≤ 70 chars
  summary: string; // 16–24 words
  image: { src: string; alt: string; width: number; height: number };
  ctaLabel?: string; // default: "Read the case study"
};

export const caseStudies: CaseItem[] = [
  {
    slug: "/case-studies/fintech-platform-velocity",
    service: "Web & Mobile",
    title: "Fintech Feature Velocity Rescue",
    summary:
      "Rebuilt frontend and CI/CD pipeline, unblocked weekly releases with visual testing suite.",
    image: {
      src: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200&auto=format&fit=crop",
      alt: "Modern fintech dashboard showing trading interface and financial charts",
      width: 1200,
      height: 675,
    },
    ctaLabel: "Read the case study",
  },
  {
    slug: "/case-studies/devops-infrastructure-modernization",
    service: "DevOps & SRE",
    title: "E-commerce Infrastructure Modernization",
    summary:
      "Standardized IaC and observability, reduced MTTR by 60% with blue-green deployments.",
    image: {
      src: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?q=80&w=1200&auto=format&fit=crop",
      alt: "Cloud infrastructure monitoring dashboard with performance metrics and alerts",
      width: 1200,
      height: 675,
    },
  },
  {
    slug: "/case-studies/healthcare-security-compliance",
    service: "Cyber Security",
    title: "Healthcare SOC 2 Readiness & Security",
    summary:
      "Hardened authentication and secrets, enforced SAST/DAST with least-privilege access.",
    image: {
      src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?q=80&w=1200&auto=format&fit=crop",
      alt: "Security dashboard showing threat monitoring and compliance metrics for healthcare platform",
      width: 1200,
      height: 675,
    },
  },
  {
    slug: "/case-studies/ai-support-search-system",
    service: "AI/ML",
    title: "B2B Support Search with LLM-RAG",
    summary:
      "Productionized inference pipeline with evaluations, improved accuracy and latency.",
    image: {
      src: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop",
      alt: "AI-powered search interface with natural language query and intelligent results",
      width: 1200,
      height: 675,
    },
  },
  {
    slug: "/case-studies/iot-sensor-firmware-stability",
    service: "Embedded",
    title: "IoT Sensor Fleet Stability & OTA",
    summary:
      "RTOS refactor with memory profiling, achieved under 0.5% monthly crash rate.",
    image: {
      src: "https://images.unsplash.com/photo-1518644730709-0835105d9daa?q=80&w=1200&auto=format&fit=crop",
      alt: "IoT sensor network monitoring dashboard showing device status and performance metrics",
      width: 1200,
      height: 675,
    },
  },
  {
    slug: "/case-studies/mobile-app-performance-optimization",
    service: "Web & Mobile",
    title: "Mobile Banking Performance & Sync",
    summary:
      "Rebuilt React Native with offline-first sync, reduced launch time by 70%.",
    image: {
      src: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200&auto=format&fit=crop",
      alt: "Mobile banking application interface showing transaction history and account management",
      width: 1200,
      height: 675,
    },
  },
];
