import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

// Blueprint
// AboutPage
// ├─ Hero (impact headline, signal chips, dual CTAs)
// ├─ WhoWeAre (side image, copy)
// ├─ WhyWeExist (full-width statement band)
// ├─ HowWeWork (steps with modern tiles)
// ├─ WhatWeDo (service grid with hover glow)
// ├─ OperatingPrinciples (bulleted, accent markers)
// ├─ Leadership (elegant profile cards)
// ├─ FastFacts (stats tiles)
// ├─ Testimonials (clean quotes)
// ├─ SecuritySection (trust list)
// ├─ CareersSection (join CTA)
// └─ FinalCTA (quote/call)

export const metadata: Metadata = {
  title: "About — Senior engineers who help you ship faster — Agency",
  description:
    "US-registered, globally distributed engineers. Specialists in Web & Mobile, Security, DevOps, Embedded, and AI/ML. We remove bottlenecks so your team ships faster.",
};

export default function AboutPage() {
  return (
    <main className="bg-navy-900 text-white">
      {/* Hero */}
      <section className="relative">
        {/* subtle background sphere per brand guidelines */}
        <div className="pointer-events-none absolute inset-0 bg-brand-sphere opacity-40" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 md:py-28">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-[1.05]">
            Senior engineers who remove bottlenecks
          </h1>
          <p className="mt-5 max-w-2xl text-white/85 text-lg">
            We help product teams ship faster without long‑term lock‑ins. You
            bring the goal. We fix the critical path and hand back momentum.
          </p>

          <div className="mt-6 flex flex-wrap gap-2 text-sm text-white/80">
            {["US-registered","Global talent footprint","Hourly T&M","NDA on request"].map((t)=> (
              <span key={t} className="rounded-full bg-white/10 border border-white/15 px-3 py-1 backdrop-blur-sm">
                {t}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild>
              <Link href="/contact?tab=quote">Get a Quote</Link>
            </Button>
            <Button asChild variant="secondary">
              <Link href="/contact?tab=call">Book a Call</Link>
            </Button>
          </div>
        </div>

        {/* LCP image */}
        <div className="mx-auto max-w-7xl px-4">
          <div className="relative aspect-[16/7] w-full overflow-hidden rounded-2xl border border-white/10 bg-navy-800 shadow-[inset_0_0_120px_rgba(0,0,0,0.35)]">
            <Image
              src="https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=1600&auto=format&fit=crop"
              alt="Modern workspace with collaborative setup"
              fill
              sizes="(min-width: 1280px) 1200px, 100vw"
              priority
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Who we are */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-7xl grid items-center gap-10 px-4 py-20 md:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-navy-800">
            <Image
              src="https://images.unsplash.com/photo-1529336953121-adb2f4f5a8f2?q=80&w=1200&auto=format&fit=crop"
              alt="Engineers collaborating across time zones"
              fill
              sizes="(min-width: 768px) 560px, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold">Who we are</h2>
            <p className="mt-4 max-w-prose text-white/90">
              Agency is a US‑registered, remote‑first group of engineers focused on
              practical outcomes. Our network spans Web & Mobile, Cyber Security,
              DevOps, Embedded Systems, and AI/ML, with strong coverage across
              Nigeria, North America, and Europe.
            </p>
          </div>
        </div>
      </section>

      {/* Why we exist */}
      <section className="border-t border-white/10 bg-navy-800">
        <div className="mx-auto max-w-7xl px-4 py-20">
          <h2 className="text-3xl md:text-4xl font-semibold">Why we exist</h2>
          <p className="mt-4 max-w-prose text-white/90">
            Teams stall for predictable reasons: unclear scope, missing skills,
            risky launches, or operational drag. We provide focused specialists
            who unblock delivery. Hourly, transparent, and reversible.
          </p>
        </div>
      </section>

      {/* How we work */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-20">
          <h2 className="text-3xl md:text-4xl font-semibold">How we work</h2>
          <ol className="mt-8 grid gap-5 md:grid-cols-3">
            {[
              ["Inquiry","Share goals, constraints, timeline, and repos or briefs."],
              ["Discovery","30–45 minutes to align outcomes and acceptance criteria."],
              ["Quote","Role mix, estimated hours, milestones, and start date."],
              ["Build","Lead engineer assigned. Weekly demos. PRs in your repos."],
              ["Deliver","Handover docs, runbooks, and next‑step options."],
              ["Assurances","NDA, security‑first, accessibility‑aware, clear change control."],
            ].map(([title, body], i) => (
              <li
                key={i}
                className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition hover:bg-white/10"
              >
                <div className="flex items-center justify-between">
                  <p className="text-xs text-white/70">Step {i + 1}</p>
                  <span className="rounded-full border border-white/15 bg-white/10 px-2 py-0.5 text-[10px] text-white/80">~{8 + i * 2}h</span>
                </div>
                <h3 className="mt-2 text-xl font-semibold">{title}</h3>
                <p className="mt-2 text-white/85">{body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* What we do */}
      <section className="border-t border-white/10 bg-navy-800">
        <div className="mx-auto max-w-7xl px-4 py-20">
          <h2 className="text-3xl md:text-4xl font-semibold">What we do</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {[
              ["Web & Mobile","Modern product development across frontend, backend, mobile, and QA."],
              ["Cyber Security","Pen‑testing, secure design reviews, and SOC 2/ISO readiness."],
              ["DevOps","CI/CD, IaC, Kubernetes, SRE, and observability."],
              ["Embedded Systems","Firmware, connectivity, OTA pipelines, stability testing."],
              ["AI/ML","Practical ML and LLM features with evaluation and guardrails."],
            ].map(([title, body]) => (
              <div
                key={title}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-navy-900 p-6 transition hover:shadow-[0_0_0_2px_rgba(159,191,255,0.25)]"
              >
                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/5 blur-2xl transition group-hover:bg-white/10" />
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="mt-2 text-white/90">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Operating principles + Footprint */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-7xl grid gap-10 px-4 py-20 md:grid-cols-2">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold">Operating principles</h2>
            <ul className="mt-6 space-y-3 text-white/90">
              {["Outcomes first","Show your work","Security by default","Measure then move","Integrate, don’t interrupt","No lock‑in"].map((t) => (
                <li key={t} className="flex gap-3">
                  <span className="mt-2 inline-block h-2.5 w-2.5 rounded-full bg-blue-300/80" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold">Footprint &amp; time zones</h2>
            <p className="mt-4 max-w-prose text-white/90">
              Registration: United States. Engineering hub: Nigeria. Global contributors with a
              guaranteed 4‑hour overlap minimum; extended coverage on request.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="border-t border-white/10 bg-navy-800">
        <div className="mx-auto max-w-7xl px-4 py-20">
          <h2 className="text-3xl md:text-4xl font-semibold">Leadership</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {[
              { name: "[Name]", role: "Founder & Principal Engineer", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop" },
              { name: "[Name]", role: "Security Lead", img: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=800&auto=format&fit=crop" },
            ].map((p) => (
              <article key={p.name} className="flex items-center gap-5 rounded-2xl border border-white/10 bg-navy-900 p-5">
                <div className="relative h-28 w-28 overflow-hidden rounded-xl border border-white/10">
                  <Image src={p.img} alt={`${p.name} — ${p.role}`} fill sizes="112px" className="object-cover" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{p.name}</h3>
                  <p className="text-white/80">{p.role}</p>
                  <p className="mt-2 text-white/70">Replace with approved bio.</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Fast facts */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-20">
          <h2 className="text-3xl md:text-4xl font-semibold">Fast facts</h2>
          <dl className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["First response","< 2 business hours"],
              ["Scoped quote","< 48 hours after discovery"],
              ["Seniority","Senior engineers only"],
              ["Kickoff","1–2 business days post‑approval"],
            ].map(([k, v]) => (
              <div key={k} className="rounded-2xl border border-white/10 bg-navy-800 p-6">
                <dt className="text-white/70">{k}</dt>
                <dd className="mt-1 text-xl font-semibold">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Testimonials */}
      <section className="border-t border-white/10 bg-navy-800">
        <div className="mx-auto max-w-7xl px-4 py-20">
          <h2 className="text-3xl md:text-4xl font-semibold">Testimonials</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              ["They stabilized our pipeline and we shipped features again.","CTO, Series B fintech"],
              ["Security review was pragmatic and fast. We passed audit.","Head of Security, healthcare SaaS"],
              ["OTA made our fleet manageable.","VP Hardware, IoT manufacturer"],
            ].map(([q, a]) => (
              <figure key={q} className="rounded-2xl border border-white/10 bg-navy-900 p-6">
                <blockquote className="text-white/90">“{q}”</blockquote>
                <figcaption className="mt-3 text-sm text-white/70">— {a}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Security & data handling */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-20">
          <h2 className="text-3xl md:text-4xl font-semibold">Security &amp; data handling</h2>
          <ul className="mt-6 space-y-3 text-white/90">
            {[
              "Least‑privilege access with time‑boxed credentials.",
              "Encrypted data at rest and in transit.",
              "No production PII is copied outside client systems without written approval.",
              "Coordinated vulnerability disclosures.",
            ].map((t) => (
              <li key={t} className="flex gap-3">
                <span className="mt-1.5 inline-block h-2.5 w-2.5 rounded-full bg-blue-300/80" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Careers CTA */}
      <section className="border-t border-white/10 bg-navy-800">
        <div className="mx-auto max-w-7xl px-4 py-20">
          <div className="grid items-center gap-6 rounded-2xl border border-white/10 bg-navy-900 p-8 md:grid-cols-2">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold">Join the network</h2>
              <p className="mt-3 text-white/90">
                We vet for craft and clarity. If you ship, apply to join. Transparent rates and reliable payouts.
              </p>
            </div>
            <div className="flex gap-3">
              <Button asChild>
                <Link href="/careers">View roles</Link>
              </Button>
              <Button asChild variant="secondary">
                <Link href="/careers/apply">Apply now</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ + Final CTA */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-20">
          <h2 className="text-3xl md:text-4xl font-semibold">FAQ</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              ["Are you an agency or staff augmentation?","We are a specialist partner. Embed with your team or deliver scoped work. You keep ownership."],
              ["Do you require long commitments?","No. Start small. Extend only if results warrant it."],
              ["Can you sign our NDA and security addendum?","Yes. We also provide a standard mutual NDA and DPA template."],
              ["Who owns the IP?","You do. Code is committed to your repos with appropriate licenses."],
            ].map(([q, a]) => (
              <div key={q} className="rounded-2xl border border-white/10 bg-navy-800 p-6">
                <h3 className="text-lg font-semibold">{q}</h3>
                <p className="mt-2 text-white/90">{a}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap gap-3">
            <Button asChild>
              <Link href="/contact?tab=quote">Get a Quote</Link>
            </Button>
            <Button asChild variant="secondary">
              <Link href="/contact?tab=call">Book a Call</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Organization JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Agency",
            url: "https://example.com",
            logo: "https://example.com/logo.png",
            address: { "@type": "PostalAddress", addressCountry: "US" },
            areaServed: ["North America", "Europe", "Africa"],
          }),
        }}
      />
    </main>
  );
}
