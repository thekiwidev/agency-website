// Services.tsx
// Purpose: Core services section showcasing Website, Web App, and Mobile App focus.

import Image from "next/image";
import { BOOK_CALL_URL } from "@/lib/links";
import { Button } from "@/components/ui/button";

type Card = {
  slug: string;
  title: string;
  sub: string;
  highlights: string[];
  img: { src: string; alt: string; width: number; height: number };
};

const cards: Card[] = [
  {
    slug: "website",
    title: "Websites",
    sub: "High-converting corporate websites, brand landing pages, and web experiences built for maximum speed, SEO, and visual impact.",
    highlights: ["Next.js", "Tailwind CSS", "SEO & Speed", "Design Systems"],
    img: {
      src: "/images/web-mobile.png",
      alt: "Corporate website preview",
      width: 1200,
      height: 750,
    },
  },
  {
    slug: "web-app",
    title: "Web Applications",
    sub: "Scalable SaaS platforms, cloud dashboards, and custom web apps built with modern frameworks and robust API architectures.",
    highlights: ["React / Next.js", "Node.js API", "Databases", "Cloud Infra"],
    img: {
      src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
      alt: "Web application dashboard",
      width: 1200,
      height: 750,
    },
  },
  {
    slug: "mobile-app",
    title: "Mobile Applications",
    sub: "Cross-platform and native mobile apps for iOS and Android with intuitive UI, smooth performance, and offline capability.",
    highlights: ["React Native", "iOS & Android", "Offline Sync", "Push Alerts"],
    img: {
      src: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80",
      alt: "Mobile app interface preview",
      width: 1200,
      height: 750,
    },
  },
];

export default function Services() {
  return (
    <section id="services" className="py-16 sm:py-24 bg-navy-900 text-foreground-dark">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-white">
            Our Focused Services
          </h2>
          <p className="mt-4 text-base sm:text-lg text-foreground-dark/80">
            We specialize exclusively in Websites, Web Apps, and Mobile Apps. Our senior engineering team scopes outcomes and delivers scalable, production-ready software in weekly sprints with hourly time-and-materials transparency.
          </p>
        </header>

        {/* 3 Column Service Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((c) => (
            <article
              key={c.slug}
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:border-white/25 hover:bg-white/[0.07] hover:shadow-2xl"
            >
              <div className="p-6 sm:p-7 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-white">
                  {c.title}
                </h3>
                <p className="mt-2 text-sm text-foreground-dark/80 leading-relaxed">
                  {c.sub}
                </p>

                <ul className="mt-4 flex flex-wrap gap-1.5 mb-6">
                  {c.highlights.map((h) => (
                    <li
                      key={h}
                      className="text-xs rounded-full px-2.5 py-1 bg-white/10 text-white/90 border border-white/15"
                    >
                      {h}
                    </li>
                  ))}
                </ul>

                {/* Card Image */}
                <div className="mt-auto relative w-full h-48 sm:h-52 overflow-hidden rounded-xl border border-white/10">
                  <Image
                    src={c.img.src}
                    alt={c.img.alt}
                    width={c.img.width}
                    height={c.img.height}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

              {/* Hover highlight border */}
              <div className="absolute inset-0 rounded-2xl ring-0 transition-all group-hover:ring-1 group-hover:ring-blue-400/40 pointer-events-none" />
            </article>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Button
            asChild
            className="px-6 py-4 font-semibold bg-white !text-black hover:bg-white/90 hover:!text-black"
          >
            <a href={BOOK_CALL_URL}>
              Ready to start your project? Book a Call
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
