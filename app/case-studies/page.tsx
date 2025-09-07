import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { caseStudies, caseStudyFilters } from "@/components/home/caseData";
import FAQSection from "@/components/home/FAQSection";
import FinalCTA from "@/components/home/FinalCTA";
import { BOOK_CALL_URL, GET_QUOTE_URL } from "@/lib/links";

export const metadata: Metadata = {
  title: "Case Studies — Proven outcomes in Web/Mobile, Security, DevOps, Embedded, AI/ML",
  description:
    "Real projects with verified results. Explore how we delivered safer systems, faster releases, lower costs, and better user outcomes across industries.",
  alternates: { canonical: "/case-studies" },
  openGraph: {
    title: "Case Studies — Agency",
    description:
      "Real projects with verified results across Web & Mobile, Security, DevOps, Embedded, and AI/ML.",
    url: "/case-studies",
  },
};

export default function CaseStudiesListingPage() {
  const counts = {
    cases: caseStudies.length,
    industries: caseStudyFilters.industries.length,
    services: caseStudyFilters.services.length,
    stack: caseStudyFilters.stack.length,
  };
  return (
    <main className="bg-navy-900 text-white">
      <section className="py-16 md:py-24 bg-navy-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div>
            <Breadcrumbs items={[{ href: "/", label: "Home" }, { href: "/case-studies", label: "Case Studies" }]} />
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Outcomes that hold up under load
            </h1>
            <p className="text-white/85 text-lg max-w-prose mb-6">
              Real projects across Web & Mobile, Security, DevOps, Embedded, and
              AI/ML. Each case shows the problem, how we approached it, what we
              shipped, and what changed.
            </p>

            <ul className="text-white/80 space-y-2 mb-8">
              <li>
                • Clear narrative: Problem → Approach → Solution → Results
              </li>
              <li>
                • At-a-glance: client, industry, services, timeline, stack
              </li>
              <li>• Verifiable metrics and links where available</li>
            </ul>

            <div className="flex flex-wrap gap-3">
              <Button asChild variant="primary">
                <a href={GET_QUOTE_URL}>Get a Quote</a>
              </Button>
              <Button asChild variant="secondary">
                <a href={BOOK_CALL_URL}>Book a Call</a>
              </Button>
            </div>
          </div>

          <aside className="bg-navy-800 border border-white/10 rounded-2xl p-6">
            <h2 className="text-lg font-semibold mb-4">
              Browse by the numbers
            </h2>
            <dl className="grid grid-cols-2 gap-4">
              <div>
                <dt className="text-xs uppercase tracking-wide text-white/70">
                  Case studies
                </dt>
                <dd className="text-2xl font-bold">{counts.cases}</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wide text-white/70">
                  Industries
                </dt>
                <dd className="text-2xl font-bold">{counts.industries}</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wide text-white/70">
                  Services
                </dt>
                <dd className="text-2xl font-bold">{counts.services}</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wide text-white/70">
                  Tools/Stack
                </dt>
                <dd className="text-2xl font-bold">{counts.stack}</dd>
              </div>
            </dl>
            <div className="mt-4 text-sm text-white/70">
              Tip: Use browser search to jump by keywords (e.g., “Next.js”,
              “forms”, “automation”).
            </div>
          </aside>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-4 md:gap-4 grid-cols-1 sm:grid-cols-2 xl:grid-cols-2">
          {caseStudies.map((c) => (
            <article
              key={c.slug}
              className="relative w-full h-[460px] md:h-[500px] rounded-2xl overflow-hidden group hover:scale-[1.02] transition-transform duration-300 ease-out"
            >
              {/* Full Background Image */}
              <div className="absolute inset-0 overflow-hidden">
                <Image
                  src={c.hero.src}
                  alt={c.hero.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  sizes="(min-width: 1280px) 33vw, (min-width: 640px) 50vw, 100vw"
                  priority={false}
                />
                {/* Dark overlay for better text contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/10" />
              </div>

              {/* Content area with fixed height */}
              <div className="relative h-full flex flex-col justify-between p-6">
                {/* Service badge */}
                <div className="flex justify-start">
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-navy-800/20 backdrop-blur-sm rounded-full text-white border border-navy-900/20">
                    {c.services?.[0] || c.industry?.[0] || "Case Study"}
                  </span>
                </div>

                {/* Floating text content card */}
                <div className="bg-white/95 backdrop-blur-sm rounded-xl p-5 border border-white/20 shadow-lg">
                  <h2 className="font-semibold text-gray-900 mb-3 line-clamp-1 text-base">
                    {c.title}
                  </h2>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                    {c.summary}
                  </p>
                  <Link
                    href={c.cta?.href || `/case-studies/${c.slug}`}
                    className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800 transition-colors font-medium"
                  >
                    {c.cta?.label || "Read the case study"}
                    <svg
                      className="ml-1 w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <FAQSection />
      <FinalCTA />
    </main>
  );
}
