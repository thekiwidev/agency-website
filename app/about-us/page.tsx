"use client";

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  PATTERN_GLYPHS_80,
  PatternSheet,
} from "@/components/design/PatternSheet";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import {
  ChevronLeft,
  ChevronRight,
  Quote,
  Users,
  Zap,
  Shield,
  Target,
} from "lucide-react";
import { FiGlobe, FiClock, FiStar, FiCheck } from "react-icons/fi";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

export const metadata: Metadata = {
  title: "About — Senior engineers who help you ship faster — Agency",
  description:
    "US-registered, globally distributed engineers. Specialists in Web & Mobile, Security, DevOps, Embedded, and AI/ML. We remove bottlenecks so your team ships faster.",
};

export default function AboutPage() {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);

  return (
    <main className="bg-navy-900 text-white">
      {/* Hero */}
      <section className="relative isolate flex flex-col bg-navy-900 text-white overflow-hidden">
        <PatternSheet
          image={PATTERN_GLYPHS_80}
          tile={80}
          width={980}
          height={640}
          radius={112}
          tint="#9FBFFF"
          tintOpacity={0.34}
          fadeColor="#0B1A3A"
          fadeBlur={100}
          fadeSpread={50}
          fadeSteps={7}
          anchor="top-right"
          top="-12%"
          right="-16%"
        />

        <PatternSheet
          image="/svg/circuit-board.svg"
          tile={80}
          width={1100}
          height={560}
          radius={120}
          tint="#9FBFFF"
          tintOpacity={0.28}
          fadeColor="#0B1A3A"
          fadeBlur={90}
          fadeSpread={44}
          fadeSteps={6}
          anchor="bottom-left"
          bottom="10%"
          left="-24%"
        />

        {/* Top row */}
        <div className="relative z-10 w-full">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
            <div className="grid gap-10 lg:grid-cols-12 lg:gap-12 items-start">
              {/* LEFT: avatars + blurb + CTAs */}
              <div className="lg:col-span-4">
                <div className="flex -space-x-2 mb-5">
                  {[1, 2, 3].map((i) => (
                    <span
                      key={i}
                      className="inline-flex h-10 w-10 rounded-full ring-2 ring-navy-900 bg-white/10 backdrop-blur-sm"
                      aria-hidden
                    />
                  ))}
                </div>

                <p className="text-sm/6 text-white/80">
                  We are a remote-first engineering network focused on removing bottlenecks and shipping critical software faster.
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  <Button asChild size="lg" className="px-6 py-4">
                    <Link href="/contact#quote">Get a Quote</Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="secondary"
                    className="px-6 py-4"
                  >
                    <Link href="/contact#call">Book a Call</Link>
                  </Button>
                </div>
              </div>

              {/* RIGHT: H1 + subcopy */}
              <div className="lg:col-span-8">
                <h1 className="font-logo text-4xl sm:text-5xl lg:text-6xl leading-[1.08] tracking-tight">
                  Senior engineers who remove bottlenecks
                </h1>
                <p className="mt-5 max-w-3xl text-base/7 text-white/85">
                  US-registered, globally distributed engineers specializing in Web & Mobile, Security, DevOps, Embedded, and AI/ML. Hourly billing, transparent delivery.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="relative w-full">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-14">
            <div className="relative w-full h-[440px] sm:h-[540px] lg:h-[660px] overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=1600&auto=format&fit=crop"
                alt="Modern workspace with collaborative setup"
                fill
                sizes="(min-width: 1280px) 1200px, 100vw"
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
            </div>
          </div>
        </div>

        {/* Signal chips */}
        <div className="pb-16 -mt-8">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center justify-center gap-2.5">
              {[
                "US-registered",
                "Senior engineers only", 
                "Global time-zone coverage",
                "NDA on request",
              ].map((chip) => (
                <span
                  key={chip}
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/90 backdrop-blur"
                >
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-2 w-2 rounded-full bg-emerald-400 opacity-75 animate-ping" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400/80" />
                  </span>
                  {chip}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Who we are - Dynamic image showcase */}
      <section className="border-t border-white/10 py-20">
        <div className="mx-auto max-w-7xl px-4 grid items-center gap-10 md:grid-cols-2">
          <div className="relative">
            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              loop={true}
              onSwiper={setSwiper}
              speed={800}
              className="w-full aspect-[4/3] rounded-2xl overflow-hidden border border-white/10"
            >
              {[
                {
                  src: "https://images.unsplash.com/photo-1529336953121-adb2f4f5a8f2?q=80&w=1200&auto=format&fit=crop",
                  alt: "Engineers collaborating across time zones"
                },
                {
                  src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop",
                  alt: "Team working on security architecture"
                },
                {
                  src: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200&auto=format&fit=crop",
                  alt: "DevOps pipeline monitoring"
                }
              ].map((img, i) => (
                <SwiperSlide key={i}>
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(min-width: 768px) 560px, 100vw"
                    className="object-cover"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            
            {/* Navigation buttons */}
            <div className="absolute top-4 right-4 z-20 flex gap-2">
              <button
                onClick={() => swiper?.slidePrev()}
                className="p-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white hover:bg-white/20 transition-all"
                aria-label="Previous image"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={() => swiper?.slideNext()}
                className="p-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white hover:bg-white/20 transition-all"
                aria-label="Next image"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
          
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Users className="text-blue-400" size={32} />
              <h2 className="text-3xl md:text-4xl font-semibold">Who we are</h2>
            </div>
            <p className="max-w-prose text-white/90 leading-relaxed">
              Agency is a US‑registered, remote‑first group of engineers focused on
              practical outcomes. Our network spans Web & Mobile, Cyber Security,
              DevOps, Embedded Systems, and AI/ML, with strong coverage across
              Nigeria, North America, and Europe.
            </p>
            
            <div className="mt-6 grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-blue-400">50+</div>
                <div className="text-sm text-white/70">Engineers</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-400">15+</div>
                <div className="text-sm text-white/70">Countries</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-400">98%</div>
                <div className="text-sm text-white/70">On-time delivery</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why we exist - Animated stats */}
      <section className="border-t border-white/10 bg-navy-800 py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Target className="text-blue-400" size={32} />
              <h2 className="text-3xl md:text-4xl font-semibold">Why we exist</h2>
            </div>
            <p className="max-w-3xl mx-auto text-white/90 text-lg leading-relaxed">
              Teams stall for predictable reasons: unclear scope, missing skills,
              risky launches, or operational drag. We provide focused specialists
              who unblock delivery. Hourly, transparent, and reversible.
            </p>
          </div>
          
          {/* Problem/Solution grid */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-red-400 flex items-center gap-2">
                <span className="w-2 h-2 bg-red-400 rounded-full animate-pulse" />
                Common bottlenecks
              </h3>
              {[
                "Unclear project scope and requirements",
                "Missing critical engineering skills",  
                "Risky launches without proper testing",
                "Operational drag slowing delivery"
              ].map((problem, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-red-950/20 border border-red-500/20">
                  <span className="w-5 h-5 bg-red-500/20 rounded-full flex-shrink-0 mt-0.5" />
                  <span className="text-white/85">{problem}</span>
                </div>
              ))}
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-emerald-400 flex items-center gap-2">
                <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                Our solutions
              </h3>
              {[
                "Clear scope definition and acceptance criteria",
                "Senior specialists in your exact domain",
                "Comprehensive testing and quality gates", 
                "Streamlined delivery with weekly demos"
              ].map((solution, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/20">
                  <FiCheck className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span className="text-white/85">{solution}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-20">
          <h2 className="text-3xl md:text-4xl font-semibold">How we work</h2>
          <ol className="mt-8 grid gap-5 md:grid-cols-3">
            {[
              [
                "Inquiry",
                "Share goals, constraints, timeline, and repos or briefs.",
              ],
              [
                "Discovery",
                "30–45 minutes to align outcomes and acceptance criteria.",
              ],
              [
                "Quote",
                "Role mix, estimated hours, milestones, and start date.",
              ],
              [
                "Build",
                "Lead engineer assigned. Weekly demos. PRs in your repos.",
              ],
              ["Deliver", "Handover docs, runbooks, and next‑step options."],
              [
                "Assurances",
                "NDA, security‑first, accessibility‑aware, clear change control.",
              ],
            ].map(([title, body], i) => (
              <li
                key={i}
                className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition hover:bg-white/10"
              >
                <div className="flex items-center justify-between">
                  <p className="text-xs text-white/70">Step {i + 1}</p>
                  <span className="rounded-full border border-white/15 bg-white/10 px-2 py-0.5 text-[10px] text-white/80">
                    ~{8 + i * 2}h
                  </span>
                </div>
                <h3 className="mt-2 text-xl font-semibold">{title}</h3>
                <p className="mt-2 text-white/85">{body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* What we do - Interactive services mosaic */}
      <section className="border-t border-white/10 bg-navy-800 py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Zap className="text-blue-400" size={32} />
              <h2 className="text-3xl md:text-4xl font-semibold">What we do</h2>
            </div>
            <p className="max-w-3xl mx-auto text-white/90">
              Specialist teams across five core domains, ready to embed with your team or deliver scoped outcomes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3">
            {[
              {
                title: "Web & Mobile",
                description: "Modern product development across frontend, backend, mobile, and QA.",
                highlights: ["Next.js", "Node/GraphQL", "React Native", "Swift/Kotlin"],
                image: "/images/web-mobile.png",
                span: "lg:col-span-3",
                offset: "right"
              },
              {
                title: "Cyber Security", 
                description: "Pen‑testing, secure design reviews, and SOC 2/ISO readiness.",
                highlights: ["Pen-testing", "Cloud posture", "SOC 2/ISO"],
                image: "/images/cyber-security.png",
                span: "lg:col-span-3",
                offset: "left"
              },
              {
                title: "DevOps",
                description: "CI/CD, IaC, Kubernetes, SRE, and observability.",
                highlights: ["Kubernetes", "Terraform", "GitHub Actions"],
                image: "/images/devops.png", 
                span: "lg:col-span-2",
                offset: "center"
              },
              {
                title: "Embedded Systems",
                description: "Firmware, connectivity, OTA pipelines, stability testing.",
                highlights: ["RTOS", "Drivers", "OTA"],
                image: "/images/embedded.png",
                span: "lg:col-span-2", 
                offset: "left"
              },
              {
                title: "AI/ML",
                description: "Practical ML and LLM features with evaluation and guardrails.",
                highlights: ["RAG/LLM", "Model ops", "Evals"],
                image: "/images/ai-ml.png",
                span: "lg:col-span-2",
                offset: "right"
              },
            ].map((service, i) => (
              <article
                key={i}
                className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm ${service.span}`}
              >
                <div className="relative h-full flex flex-col">
                  {/* Text content */}
                  <div className="flex-shrink-0 p-6">
                    <h3 className="text-lg sm:text-xl font-semibold">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm sm:text-base text-white/80">
                      {service.description}
                    </p>

                    <ul className="mt-3 flex flex-wrap gap-1.5">
                      {service.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="text-xs rounded-full px-2 py-0.5 bg-white/10 text-white border border-white/20"
                        >
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Image container */}
                  <div className="mt-4 flex-1 flex justify-center items-end">
                    <div className={`w-full ${
                      service.offset === "left" ? "mr-5 sm:mr-6 lg:mr-7" :
                      service.offset === "right" ? "ml-5 sm:ml-6 lg:ml-7" :
                      "mx-5 sm:mx-6 lg:mx-7"
                    }`}>
                      <Image
                        src={service.image}
                        alt={`${service.title} illustration`}
                        width={1200}
                        height={750}
                        sizes="(min-width:1024px) 520px, (min-width:640px) 55vw, 100vw"
                        className="w-full h-auto max-h-48 sm:max-h-56 lg:max-h-72 object-cover rounded-lg drop-shadow-2xl pointer-events-none"
                      />
                    </div>
                  </div>
                </div>

                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-2xl ring-0 transition-all group-hover:ring-2 group-hover:ring-blue-400/40" />
                <div className="absolute -inset-2 rounded-2xl bg-blue-500/0 blur-xl transition-all group-hover:bg-blue-500/10" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Operating principles + Footprint */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-7xl grid gap-10 px-4 py-20 md:grid-cols-2">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold">
              Operating principles
            </h2>
            <ul className="mt-6 space-y-3 text-white/90">
              {[
                "Outcomes first",
                "Show your work",
                "Security by default",
                "Measure then move",
                "Integrate, don’t interrupt",
                "No lock‑in",
              ].map((t) => (
                <li key={t} className="flex gap-3">
                  <span className="mt-2 inline-block h-2.5 w-2.5 rounded-full bg-blue-300/80" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold">
              Footprint &amp; time zones
            </h2>
            <p className="mt-4 max-w-prose text-white/90">
              Registration: United States. Engineering hub: Nigeria. Global
              contributors with a guaranteed 4‑hour overlap minimum; extended
              coverage on request.
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
              {
                name: "[Name]",
                role: "Founder & Principal Engineer",
                img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop",
              },
              {
                name: "[Name]",
                role: "Security Lead",
                img: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=800&auto=format&fit=crop",
              },
            ].map((p) => (
              <article
                key={p.name}
                className="flex items-center gap-5 rounded-2xl border border-white/10 bg-navy-900 p-5"
              >
                <div className="relative h-28 w-28 overflow-hidden rounded-xl border border-white/10">
                  <Image
                    src={p.img}
                    alt={`${p.name} — ${p.role}`}
                    fill
                    sizes="112px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{p.name}</h3>
                  <p className="text-white/80">{p.role}</p>
                  <p className="mt-2 text-white/70">
                    Replace with approved bio.
                  </p>
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
              ["First response", "< 2 business hours"],
              ["Scoped quote", "< 48 hours after discovery"],
              ["Seniority", "Senior engineers only"],
              ["Kickoff", "1–2 business days post‑approval"],
            ].map(([k, v]) => (
              <div
                key={k}
                className="rounded-2xl border border-white/10 bg-navy-800 p-6"
              >
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
              [
                "They stabilized our pipeline and we shipped features again.",
                "CTO, Series B fintech",
              ],
              [
                "Security review was pragmatic and fast. We passed audit.",
                "Head of Security, healthcare SaaS",
              ],
              [
                "OTA made our fleet manageable.",
                "VP Hardware, IoT manufacturer",
              ],
            ].map(([q, a]) => (
              <figure
                key={q}
                className="rounded-2xl border border-white/10 bg-navy-900 p-6"
              >
                <blockquote className="text-white/90">“{q}”</blockquote>
                <figcaption className="mt-3 text-sm text-white/70">
                  — {a}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Security & data handling */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-20">
          <h2 className="text-3xl md:text-4xl font-semibold">
            Security &amp; data handling
          </h2>
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
              <h2 className="text-3xl md:text-4xl font-semibold">
                Join the network
              </h2>
              <p className="mt-3 text-white/90">
                We vet for craft and clarity. If you ship, apply to join.
                Transparent rates and reliable payouts.
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
              [
                "Are you an agency or staff augmentation?",
                "We are a specialist partner. Embed with your team or deliver scoped work. You keep ownership.",
              ],
              [
                "Do you require long commitments?",
                "No. Start small. Extend only if results warrant it.",
              ],
              [
                "Can you sign our NDA and security addendum?",
                "Yes. We also provide a standard mutual NDA and DPA template.",
              ],
              [
                "Who owns the IP?",
                "You do. Code is committed to your repos with appropriate licenses.",
              ],
            ].map(([q, a]) => (
              <div
                key={q}
                className="rounded-2xl border border-white/10 bg-navy-800 p-6"
              >
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
