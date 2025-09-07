// Services.tsx
// Purpose: Dark mosaic services section with offset imagery and CTA glow.

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

type Card = {
  slug: string;
  title: string;
  sub: string;
  highlights: string[];
  img: { src: string; alt: string; width: number; height: number };
  offset: "left" | "center" | "right";
};

const cards: Card[] = [
  {
    slug: "web-mobile",
    title: "Web & Mobile Engineering",
    sub: "Full-stack teams that ship modern web and mobile apps fast. Senior engineers only. Reviews, tests, and weekly demos keep risk low and delivery predictable.",
    highlights: ["Next.js", "Node/GraphQL", "React Native", "Swift/Kotlin"],
    img: {
      src: "/images/web-mobile.png",
      alt: "Responsive product screens",
      width: 1200,
      height: 750,
    },
    offset: "right",
  },
  {
    slug: "devops",
    title: "DevOps & SRE",
    sub: "CI/CD, IaC, and observability for faster deploys and fewer incidents. Cost-aware infrastructure with safe rollouts.",
    highlights: ["Kubernetes", "Terraform", "GitHub Actions"],
    img: {
      src: "/images/devops.png",
      alt: "Deploy pipeline and metrics",
      width: 1000,
      height: 600,
    },
    offset: "center",
  },
  {
    slug: "cyber-security",
    title: "Cyber Security",
    sub: "Offensive testing and secure-by-design reviews with actionable fixes. We help you pass audits without slowing product teams.",
    highlights: ["Pen-testing", "Cloud posture", "SOC 2/ISO"],
    img: {
      src: "/images/cyber-security.png",
      alt: "Security dashboard and report",
      width: 1200,
      height: 750,
    },
    offset: "left",
  },
  {
    slug: "embedded",
    title: "Embedded Systems",
    sub: "Firmware, drivers, and OTA for connected devices. Stability, low power, and field-ready diagnostics.",
    highlights: ["RTOS", "Drivers", "OTA"],
    img: {
      src: "/images/embedded.png",
      alt: "Circuit board and oscilloscope",
      width: 1000,
      height: 600,
    },
    offset: "left",
  },
  {
    slug: "ai-ml",
    title: "AI & ML",
    sub: "Practical ML and LLM features with clean data pipelines, evaluation, and guardrails. Impact measured, not assumed.",
    highlights: ["RAG/LLM", "Model ops", "Evals"],
    img: {
      src: "/images/ai-ml.png",
      alt: "Neural network sketch",
      width: 1000,
      height: 600,
    },
    offset: "right",
  },
];

const spanClasses = (i: number) => (i < 2 ? "lg:col-span-3" : "lg:col-span-2");

const offsetClasses = (where: Card["offset"]) => {
  switch (where) {
    case "left":
      return "mr-5 sm:mr-6 lg:mr-7";
    case "right":
      return "ml-5 sm:ml-6 lg:ml-7";
    default:
      return "mx-5 sm:mx-6 lg:mx-7";
  }
};

const textPaddingClasses = (where: Card["offset"]) => {
  switch (where) {
    case "left":
      return "pl-5 sm:pl-6 lg:pl-7 pr-5 sm:pr-6 lg:pr-7 pt-5 sm:pt-6 lg:pt-7";
    case "right":
      return "pl-5 sm:pl-6 lg:pl-7 pr-5 sm:pr-6 lg:pr-7 pt-5 sm:pt-6 lg:pt-7";
    default:
      return "px-5 sm:px-6 lg:px-7 pt-5 sm:pt-6 lg:pt-7";
  }
};

export default function Services() {
  return (
    <section id="services" className="py-16 sm:py-20 bg-navy-900 text-foreground-dark">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight">
            Our Digital Agency Services
          </h2>
          <p className="mt-4 text-base sm:text-lg text-foreground-dark/80">
            Specialist teams for Web & Mobile, Cyber Security, DevOps, Embedded
            Systems, and AI/ML. We scope outcomes, assemble the right roles, and
            work in weekly increments with clear acceptance criteria, quality
            gates, and progress you can verify. Hourly time-and-materials by
            default with scoped quotes in under 48 hours after discovery.
          </p>
        </header>

        {/* Mosaic grid: 2 wide, then 3 wide. Tighter gaps. */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3">
          {cards.map((c, i) => (
            <article
              key={c.slug}
              className={`group relative overflow-hidden rounded-2xl border border-white/10
                          bg-white/5 backdrop-blur-sm ${spanClasses(i)}`}
            >
              <div className="relative h-full flex flex-col">
                {/* Text content with selective padding */}
                <div
                  className={`flex-shrink-0 ${textPaddingClasses(c.offset)}`}
                >
                  <h3 className="text-lg sm:text-xl font-semibold">
                    {c.title}
                  </h3>
                  <p className="mt-1 text-sm sm:text-base text-foreground-dark/80">
                    {c.sub}
                  </p>

                  <ul className="mt-3 flex flex-wrap gap-1.5">
                    {c.highlights.map((h) => (
                      <li
                        key={h}
                        className="text-xs rounded-full px-2 py-0.5
                                   bg-white/10 text-foreground-dark border border-white/20"
                      >
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Image container - edge to edge with selective margins */}
                <div className="mt-4 flex-1 flex justify-center items-end">
                  <div className={`w-full ${offsetClasses(c.offset)}`}>
                    <Image
                      src={c.img.src}
                      alt={c.img.alt}
                      width={c.img.width}
                      height={c.img.height}
                      sizes="(min-width:1024px) 520px, (min-width:640px) 55vw, 100vw"
                      className="w-full h-auto max-h-48 sm:max-h-56 lg:max-h-72 object-cover rounded-lg drop-shadow-2xl pointer-events-none"
                      priority={false}
                    />
                  </div>
                </div>
              </div>

              {/* Card glow on hover */}
              <div className="absolute inset-0 rounded-2xl ring-0 transition-all group-hover:ring-2 group-hover:ring-blue-400/40" />
            </article>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button
            asChild
            className="px-6 py-4 font-semibold bg-white !text-black hover:bg-white/90 hover:!text-black"
          >
            <Link href="/contact#call">
              Not sure where to start? Book a Call
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
