"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  services,
  serviceKeyOrder,
  type ServiceDetail,
  type ServiceKey,
} from "./data";
import { Button } from "@/components/ui/button";
import { track } from "@/components/analytics/events";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { BOOK_CALL_URL, GET_QUOTE_URL } from "@/lib/links";

function useHashSelection() {
  const [selected, setSelected] = useState<ServiceKey | null>(null);
  useEffect(() => {
    const fromHash = () => {
      const h =
        (typeof window !== "undefined" && window.location.hash?.slice(1)) || "";
      const key = serviceKeyOrder.find((k) => k === h);
      if (key) setSelected(key);
    };
    fromHash();
    window.addEventListener("hashchange", fromHash);
    return () => window.removeEventListener("hashchange", fromHash);
  }, []);
  const open = (key: ServiceKey) => {
    setSelected(key);
    try {
      history.pushState(null, "", `#${key}`);
    } catch {}
    track?.("service_detail_opened", { service: key });
  };
  const close = () => {
    setSelected(null);
    try {
      history.replaceState(null, "", `#`);
    } catch {}
  };
  return { selected, open, close };
}

const heroByKey: Record<ServiceKey, { src: string; alt: string }> = {
  "web-mobile": {
    src: "/images/web-mobile.png",
    alt: "Web & Mobile engineering",
  },
  "cyber-security": {
    src: "/images/cyber-security.png",
    alt: "Cyber Security",
  },
  devops: { src: "/images/devops.png", alt: "DevOps" },
  embedded: { src: "/images/embedded.png", alt: "Embedded Systems" },
  "ai-ml": { src: "/images/ai-ml.png", alt: "AI and ML" },
};

function ServiceCard({
  s,
  onOpen,
}: {
  s: ServiceDetail;
  onOpen: (key: ServiceKey) => void;
}) {
  return (
    <article className="relative w-full h-[520px] md:h-[560px] rounded-2xl overflow-hidden group hover:scale-[1.02] transition-transform duration-300 ease-out border border-white/10">
      {/* Full Background Image */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src={heroByKey[s.key].src}
          alt={heroByKey[s.key].alt}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
          sizes="(min-width: 1280px) 33vw, (min-width: 640px) 50vw, 100vw"
          priority={false}
        />
        {/* Dark overlay for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/25 to-black/10" />
      </div>

      {/* Content area with fixed height */}
      <div className="relative h-full flex flex-col justify-between p-6">
        {/* Service badge */}
        <div className="flex justify-start">
          <span className="inline-block px-3 py-1 text-xs font-medium bg-navy-800/30 backdrop-blur-sm rounded-full text-white border border-navy-900/20">
            {s.highlights?.[0] || "Service"}
          </span>
        </div>

        {/* Floating text content card */}
        <div className="bg-white/95 backdrop-blur-sm rounded-xl p-5 border border-white/20 shadow-lg">
          <h3 className="font-semibold text-gray-900 mb-3 line-clamp-1 text-base">
            {s.name}
          </h3>
          <p className="text-sm text-gray-700 mb-4 line-clamp-2">
            {s.oneLiner}
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {s.highlights.slice(1, 4).map((h) => (
              <span
                key={h}
                className="text-xs text-gray-700/80 bg-gray-100 rounded-full px-2 py-1 border border-gray-300/60"
              >
                {h}
              </span>
            ))}
          </div>
          <button
            onClick={() => onOpen(s.key)}
            className="inline-flex items-center text-sm text-blue-700 hover:text-blue-900 font-medium cursor-pointer"
          >
            Open details
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
          </button>
        </div>
      </div>
    </article>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-6 first:mt-0">
      <h4 className="text-base font-semibold text-white/90 mb-2">{title}</h4>
      <div className="text-sm text-white/85 space-y-2">{children}</div>
    </section>
  );
}

function ServicePanel({
  s,
  onClose,
}: {
  s: ServiceDetail;
  onClose: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[60]">
      {/* Backdrop */}
      <motion.div
        className="absolute inset-0 bg-black/60"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />
      {/* Panel (right on md+, fullscreen on mobile) */}
      <motion.div
        ref={ref}
        role="dialog"
        aria-modal="true"
        aria-labelledby="service-panel-title"
        className="absolute right-0 top-0 h-full w-full md:w-[720px] bg-navy-900 border-l border-white/10 shadow-xl flex flex-col"
        initial={{ x: 40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 40, opacity: 0 }}
        transition={{ type: "spring", stiffness: 280, damping: 30 }}
      >
        <div className="p-4 border-b border-white/10 flex items-center justify-between">
          <h3 id="service-panel-title" className="text-lg font-semibold">
            {s.name}
          </h3>
          <Button size="sm" variant="secondary" onClick={onClose}>Close</Button>
        </div>
        <div className="flex-1 overflow-y-auto p-4">
          <p className="text-white/85 text-sm">{s.snapshot}</p>
          <Section title="Best for">
            <p>{s.bestFor}</p>
          </Section>
          <Section title="Capabilities">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {s.capabilities.map((c) => (
                <div
                  key={c.title}
                  className="bg-navy-800/60 border border-white/10 rounded-xl p-3"
                >
                  <div className="text-white/80 font-medium mb-1">
                    {c.title}
                  </div>
                  <ul className="list-disc list-inside text-white/75 text-sm space-y-1">
                    {c.items.map((it) => (
                      <li key={it}>{it}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Section>
          <Section title="Sample engagements">
            <ul className="list-disc list-inside">
              {s.sampleEngagements.map((it) => (
                <li key={it}>{it}</li>
              ))}
            </ul>
          </Section>
          <Section title="Process & SLAs">
            <ul className="list-disc list-inside">
              {s.processSlas.map((it) => (
                <li key={it}>{it}</li>
              ))}
            </ul>
          </Section>
          <Section title="Deliverables">
            <ul className="list-disc list-inside">
              {s.deliverables.map((it) => (
                <li key={it}>{it}</li>
              ))}
            </ul>
          </Section>
          <Section title="Tooling & compliance">
            <ul className="list-disc list-inside">
              {s.toolingCompliance.map((it) => (
                <li key={it}>{it}</li>
              ))}
            </ul>
          </Section>
          {s.caseTeaser ? (
            <Section title="Case study teaser">
              <p>{s.caseTeaser}</p>
            </Section>
          ) : null}
          {s.faqs?.length ? (
            <Section title="FAQ">
              <ServiceFaq faqs={s.faqs} />
            </Section>
          ) : null}
        </div>
        <div className="p-4 border-t border-white/10 flex gap-2">
          <Button asChild>
            <a
              href={GET_QUOTE_URL}
              onClick={() =>
                track?.("service_cta_clicked", { service: s.key, cta: "quote" })
              }
            >
              Get a Quote
            </a>
          </Button>
          <Button asChild variant="secondary">
            <a
              href={BOOK_CALL_URL}
              onClick={() =>
                track?.("service_cta_clicked", { service: s.key, cta: "call" })
              }
            >
              Book a Call
            </a>
          </Button>
        </div>
      </motion.div>
    </div>
  );
}

export default function ServicesPage() {
  const { selected, open, close } = useHashSelection();
  const selectedService = useMemo(
    () => services.find((s) => s.key === selected) || null,
    [selected]
  );

  return (
    <>
      {/* Page header */}
      <section className="py-14 md:py-20 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Services built for speed, safety, and scale
          </h1>
          <p className="mt-4 text-white/85 text-lg max-w-prose">
            Pick a track or combine teams. We assemble senior specialists, start
            quickly, and ship measurable outcomes. Hourly time‑and‑materials by
            default.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild>
              <a href={GET_QUOTE_URL}>Get a Quote</a>
            </Button>
            <Button asChild variant="secondary">
              <a href={BOOK_CALL_URL}>Book a Call</a>
            </Button>
          </div>
          <div className="mt-6 flex flex-wrap gap-2 text-xs text-white/70">
            {[
              "Hourly billing",
              "Senior engineers only",
              "Global coverage",
              "NDA on request",
            ].map((t) => (
              <span
                key={t}
                className="px-2 py-1 rounded-full bg-white/5 border border-white/10"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-prose mb-6">
            <h2 className="text-2xl md:text-3xl font-semibold">
              Choose a capability
            </h2>
            <p className="text-white/80 mt-2">
              Click a card to see details, sample deliverables, and FAQs.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-6">
            {serviceKeyOrder.map((key) => {
              const s = services.find((x) => x.key === key)!;
              return <ServiceCard key={key} s={s} onOpen={open} />;
            })}
          </div>
          <div className="mt-8">
            <div className="bg-navy-800 border border-white/10 rounded-2xl p-4 sm:p-5 flex flex-wrap items-center justify-between gap-3">
              <div className="text-white/85 text-sm">
                Not sure where to start?
              </div>
              <Button asChild variant="secondary">
                <a href={BOOK_CALL_URL}>Book a Call</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Cross-service assurances */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-navy-800 border border-white/10 rounded-2xl p-6">
            <h3 className="text-lg font-semibold mb-2">Assurances</h3>
            <ul className="text-sm text-white/80 space-y-1 list-disc list-inside">
              <li>Security‑first practices</li>
              <li>WCAG‑aware UX</li>
              <li>Clear acceptance criteria</li>
              <li>Transparent time tracking</li>
            </ul>
          </div>
          <div className="bg-navy-800 border border-white/10 rounded-2xl p-6">
            <h3 className="text-lg font-semibold mb-2">Engagement models</h3>
            <ul className="text-sm text-white/80 space-y-1 list-disc list-inside">
              <li>Hourly time & materials (default)</li>
              <li>Retainers available</li>
              <li>Fixed‑bid by exception</li>
            </ul>
          </div>
          <div className="bg-navy-800 border border-white/10 rounded-2xl p-6">
            <h3 className="text-lg font-semibold mb-2">Aftercare</h3>
            <ul className="text-sm text-white/80 space-y-1 list-disc list-inside">
              <li>Support options post‑delivery</li>
              <li>Transition assistance and handover</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Final CTA bar */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-navy-800 border border-white/10 rounded-2xl p-5 flex flex-wrap items-center justify-between gap-3">
            <div className="text-white/85 text-base">Ready to move?</div>
            <div className="flex gap-2">
              <Button asChild>
                <a href={GET_QUOTE_URL}>Get a Quote</a>
              </Button>
              <Button asChild variant="secondary">
                <a href={BOOK_CALL_URL}>Prefer to talk? Book a Call</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Panel */}
      <AnimatePresence>
        {selectedService && (
          <ServicePanel s={selectedService} onClose={close} />
        )}
      </AnimatePresence>
    </>
  );
}

function ServiceFaq({ faqs }: { faqs: { q: string; a: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return (
    <div className="space-y-3">
      {faqs.map((faq, index) => (
        <div
          key={faq.q}
          className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden transition-all duration-200 hover:border-white/20"
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full min-h-[56px] px-4 py-3 flex items-center justify-between text-left focus:outline-none"
            aria-expanded={openIndex === index}
          >
            <span className="text-sm md:text-base font-semibold text-white pr-4">
              {faq.q}
            </span>
            <ChevronDown
              size={18}
              className={`text-white/60 transition-transform duration-200 flex-shrink-0 ${
                openIndex === index ? "rotate-180" : ""
              }`}
            />
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              openIndex === index ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="px-4 pb-4">
              <div className="text-sm md:text-base text-white/75 leading-relaxed">
                {faq.a}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
