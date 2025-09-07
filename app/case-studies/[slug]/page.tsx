import Image from "next/image";
import { notFound } from "next/navigation";
import {
  caseStudies,
  caseStudiesBySlug,
  type CaseStudy,
} from "@/components/home/caseData";
import { Button } from "@/components/ui/button";

type Params = { params: { slug: string } };

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: Params) {
  const c = caseStudiesBySlug[params.slug];
  if (!c) return {};
  return {
    title: `${c.title} — Case Study`,
    description: c.summary,
  };
}

function AtAGlance({ c }: { c: CaseStudy }) {
  return (
    <div className="bg-navy-800 border border-white/10 rounded-2xl p-5">
      <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div>
          <dt className="text-xs uppercase tracking-wide text-white/70">Client</dt>
          <dd className="text-sm text-white">{c.client}</dd>
        </div>
        <div>
          <dt className="text-xs uppercase tracking-wide text-white/70">Industry</dt>
          <dd className="text-sm text-white">{c.industry.join(", ")}</dd>
        </div>
        <div>
          <dt className="text-xs uppercase tracking-wide text-white/70">Services</dt>
          <dd className="text-sm text-white">{c.services.join(", ")}</dd>
        </div>
        <div>
          <dt className="text-xs uppercase tracking-wide text-white/70">Stack</dt>
          <dd className="text-sm text-white">{c.stack.join(", ")}</dd>
        </div>
        <div>
          <dt className="text-xs uppercase tracking-wide text-white/70">Timeline</dt>
          <dd className="text-sm text-white">
            {c.timeline.start} – {c.timeline.end}
          </dd>
        </div>
        {c.metrics && c.metrics.length > 0 && (
          <div>
            <dt className="text-xs uppercase tracking-wide text-white/70">Key metrics</dt>
            <dd className="text-sm text-white">
              {c.metrics.map((m) => `${m.label}: ${m.value}`).join(" · ")}
            </dd>
          </div>
        )}
      </dl>
    </div>
  );
}

export default function CaseStudyDetailPage({ params }: Params) {
  const c = caseStudiesBySlug[params.slug];
  if (!c) return notFound();

  return (
    <main className="bg-navy-900 text-white">
      {/* Hero */}
      <section className="bg-navy-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">{c.title}</h1>
              <p className="text-white/85 text-lg mb-6">{c.summary}</p>
              <AtAGlance c={c} />
            </div>
            <div className="relative aspect-[16/9] rounded-xl overflow-hidden border border-white/10">
              <Image
                src={c.hero.src}
                alt={c.hero.alt}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
                priority={true}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Body sections */}
      <section className="py-12 md:py-16 bg-navy-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold mb-3">Problem</h2>
            <p className="text-white/85 leading-relaxed">{c.problem}</p>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-semibold mb-3">Approach</h2>
            <ul className="list-disc pl-6 space-y-1 text-white/85">
              {c.approach.map((a, i) => (
                <li key={i}>{a}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-semibold mb-3">Solution</h2>
            <ul className="list-disc pl-6 space-y-1 text-white/85">
              {c.solution.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-semibold mb-3">Outcomes</h2>
            <ul className="list-disc pl-6 space-y-1 text-white/85">
              {c.outcomes.map((o, i) => (
                <li key={i}>{o}</li>
              ))}
            </ul>
          </div>

          {c.gallery && c.gallery.length > 0 && (
            <div>
              <h2 className="text-xl font-semibold mb-3">Gallery</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {c.gallery.map((g, i) => (
                  <div key={i} className="relative aspect-[5/3] rounded-lg overflow-hidden border border-white/10">
                    <Image
                      src={g.src}
                      alt={g.alt}
                      fill
                      className="object-cover"
                      sizes="(min-width: 640px) 50vw, 100vw"
                      priority={false}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="pt-2">
            <Button asChild variant="primary">
              <a href={c.cta.href}>{c.cta.label}</a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
