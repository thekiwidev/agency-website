// /src/data/caseData.ts
// Single source for case studies used on /case-studies, home teasers, and detail pages.

export type CaseStudy = {
  slug: string;
  title: string;
  client: string;
  industry: string[];
  services: string[];
  stack: string[];
  timeline: { start: string; end: string | "ongoing" };
  summary: string;
  problem: string;
  approach: string[];
  solution: string[];
  outcomes: string[];
  metrics?: { label: string; value: string }[];
  hero: {
    src: string; // Next/Image remote host allowed
    alt: string;
    width: number;
    height: number;
    priority?: boolean;
  };
  gallery?: { src: string; alt: string; width: number; height: number }[];
  links: {
    live?: string;
    projectPage?: string;
  };
  cta: { label: string; href: string };
  badges?: string[]; // for quick filters/cards
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "imelda-yayala-digital-travel-platform",
    title: "Digital Travel Agency Platform",
    client: "Imelda Yayala",
    industry: ["Travel", "Professional Services"],
    services: ["Marketing Website", "Form System", "Email Automation"],
    stack: [
      "React",
      "TypeScript",
      "Vite",
      "Node.js",
      "Express",
      "Nodemailer",
      "Formik",
      "Yup",
      "Firebase",
    ],
    timeline: { start: "2024-11", end: "2025-01" },
    summary:
      "Marketing site plus a fully digital application flow. Users complete forms and upload documents in one step; submissions are emailed to the agency.",
    problem:
      "Manual PDF workflow forced clients to type answers in WhatsApp and staff to re-enter data, slowing intake.",
    approach: [
      "Mapped the legacy PDF questions to structured fields.",
      "Built a responsive, validated form with conditional requirements.",
      "Implemented file attachments and secure email delivery.",
      "Kept infra light to meet budget constraints.",
    ],
    solution: [
      "Online application with document upload and server email handler.",
      "Validation and dynamic fields reduce incomplete submissions.",
      "Mobile-first UX to match real usage context.",
    ],
    outcomes: [
      "Single-step submission replaces PDF and messaging back-and-forth.",
      "Operational bottlenecks removed; faster review cycle.",
    ],
    hero: {
      src: "/images/imelda-banner.png",
      alt: "Imelda Yayala digital travel platform banner",
      width: 1591,
      height: 636,
      priority: true,
    },
    gallery: [
      {
        src: "/images/imelda-mid.png",
        alt: "Imelda Yayala application form screens",
        width: 1332,
        height: 792,
      },
      {
        src: "/images/imelda-banner.png",
        alt: "Imelda Yayala banner view",
        width: 1591,
        height: 636,
      },
    ],
    metrics: [
      // Keep conservative. Replace if you have analytics.
      { label: "Manual steps removed", value: "PDF ↔ WhatsApp loop" },
    ],
    links: {
      live: "https://imeldayayala.com.ng",
      projectPage: "https://adedotun.xyz/projects/imelda-yayala-website",
    },
    cta: {
      label: "View case study",
      href: "/case-studies/imelda-yayala-digital-travel-platform",
    },
    badges: ["Forms", "Automation", "Email"],
  },
  {
    slug: "divine-vision-home-care",
    title: "Healthcare Service Marketing Platform",
    client: "Divine Vision Home Care",
    industry: ["Healthcare", "Home Care"],
    services: ["Marketing Website", "Appointments", "Contact & Careers Forms"],
    stack: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Styled Components",
      "EmailJS",
    ],
    timeline: { start: "2024-02", end: "2024-03" },
    summary:
      "Full marketing website with clear service pages and multi-purpose forms for appointments, contact, and careers. Submissions go to the agency inbox.",
    problem:
      "Needed credible online presence and streamlined intake/recruiting in a competitive home-care market.",
    approach: [
      "Structured content for services, testimonials, team, and locations.",
      "Built appointment and career forms wired to EmailJS.",
      "Hybrid styling for fast iteration and consistency.",
    ],
    solution: [
      "Service catalog and dedicated forms for each intent.",
      "Responsive UI and accessible components.",
    ],
    outcomes: [
      "More qualified inquiries and simpler applicant intake.",
      "Consistent brand presentation across pages.",
    ],
    hero: {
      src: "/images/divine-vision-banner.png",
      alt: "Divine Vision Home Care banner",
      width: 1591,
      height: 636,
    },
    gallery: [
      {
        src: "/images/divine-vision-mid.png",
        alt: "Divine Vision marketing site mid-shot",
        width: 1332,
        height: 792,
      },
      {
        src: "/images/divine-vision-banner.png",
        alt: "Divine Vision banner view",
        width: 1591,
        height: 636,
      },
    ],
    links: {
      live: "https://divinevissionhomecare.com",
      projectPage:
        "https://adedotun.xyz/projects/divine-vission-home-care-agency",
    },
    cta: {
      label: "View case study",
      href: "/case-studies/divine-vision-home-care",
    },
    badges: ["Healthcare", "Appointments"],
  },
  {
    slug: "cornerstone-home-care",
    title: "Healthcare Service Digital Platform",
    client: "Cornerstone Home Care",
    industry: ["Healthcare", "Home Care"],
    services: ["Marketing Website", "Consultation Requests", "Contact Forms"],
    stack: ["React", "TypeScript", "Vite", "Tailwind CSS", "EmailJS"],
    timeline: { start: "2024-11", end: "2024-12" },
    summary:
      "Professional marketing site with appointment scheduling and contact forms. EmailJS delivers submissions to the team without a heavy backend.",
    problem:
      "Needed to stand out online and reduce friction in first-contact and consultation requests.",
    approach: [
      "Defined service taxonomy and value propositions.",
      "Implemented fast, mobile-first UI and accessible patterns.",
      "Optimized performance for quick navigation.",
    ],
    solution: [
      "Service catalog with clear CTAs.",
      "Consultation request flow via EmailJS.",
    ],
    outcomes: [
      "Higher quality inquiries and less phone tag.",
      "Reduced admin overhead for intake.",
    ],
    metrics: [
      // The project page cites a 35% increase in inquiries. If you want to keep it, retain the source-cited nature on the detail page.
      { label: "New client inquiries", value: "+35%" },
    ],
    hero: {
      src: "/images/cornerstone-banner.png",
      alt: "Cornerstone Home Care banner",
      width: 1591,
      height: 636,
    },
    gallery: [
      {
        src: "/images/cornerstone-mid.png",
        alt: "Cornerstone service catalog mid-shot",
        width: 1332,
        height: 792,
      },
      {
        src: "/images/cornerstone-banner.png",
        alt: "Cornerstone banner view",
        width: 1591,
        height: 636,
      },
    ],
    links: {
      live: "https://cornerstonehomecare.netlify.app/",
      projectPage: "https://adedotun.xyz/projects/cornerstone-home-care-agency",
    },
    cta: {
      label: "View case study",
      href: "/case-studies/cornerstone-home-care",
    },
    badges: ["Healthcare", "Performance"],
  },
  {
    slug: "neckmultimedia-photography-platform",
    title: "Photography Portfolio & Booking",
    client: "NEC Multimedia",
    industry: ["Creative", "Photography"],
    services: ["Marketing Website", "Portfolio", "Booking Inquiry"],
    stack: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Styled Components",
      "EmailJS",
    ],
    timeline: { start: "2023-12", end: "2024-01" },
    summary:
      "Showcase site for a photography studio with curated galleries and an inquiry flow for bookings.",
    problem:
      "Studio needed a credible web presence to display work and convert inquiries without phone back-and-forth.",
    approach: [
      "Designed portfolio structure by category.",
      "Implemented fast image rendering and contact flow.",
      "Ensured responsive, accessible galleries.",
    ],
    solution: [
      "Gallery pages with large imagery and simple booking form.",
      "Email delivery for inquiries with clear required fields.",
    ],
    outcomes: [
      "Simpler booking inquiries and improved perceived quality.",
      "Foundation for future client galleries.",
    ],
    hero: {
      src: "/images/neckmultimedia-banner.png",
      alt: "NEC Multimedia photography platform banner",
      width: 1591,
      height: 636,
    },
    gallery: [
      {
        src: "/images/neckmultimedia-mid.png",
        alt: "NEC Multimedia portfolio mid-shot",
        width: 1332,
        height: 792,
      },
      {
        src: "/images/neckmultimedia-banner.png",
        alt: "NEC Multimedia banner view",
        width: 1591,
        height: 636,
      },
    ],
    links: {
      live: "https://neckmultimedia.com",
      projectPage:
        "https://adedotun.xyz/projects/neckmultimemdia-photography-portfolio-booking-platform",
    },
    cta: {
      label: "View case study",
      href: "/case-studies/neckmultimedia-photography-platform",
    },
    badges: ["Portfolio", "Booking"],
  },
];

// Convenience maps
export const caseStudiesBySlug = Object.fromEntries(
  caseStudies.map((c) => [c.slug, c])
);

export const caseStudyFilters = {
  industries: Array.from(
    new Set(caseStudies.flatMap((c) => c.industry))
  ).sort(),
  services: Array.from(new Set(caseStudies.flatMap((c) => c.services))).sort(),
  stack: Array.from(new Set(caseStudies.flatMap((c) => c.stack))).sort(),
  outcomes: Array.from(
    new Set(caseStudies.flatMap((c) => c.badges ?? []))
  ).sort(),
};
