"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqs } from "./faqData";
import { Button } from "../ui/button";

/**
 * FAQSection
 * Purpose: Comprehensive FAQ section with accordion functionality and rounded cards.
 * Inputs: FAQ data array with expandable answers.
 * Output: Interactive accordion with smooth animations and accessibility features.
 */
export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-24 bg-navy-900">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Get answers to common questions about our services, pricing,
            process, and how we work with your team.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={faq.id}
              id={faq.id}
              className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden transition-all duration-200 hover:border-white/20"
            >
              {/* Question Button */}
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full min-h-[64px] px-5 py-4 flex items-center justify-between text-left focus:outline-none outline-none"
                aria-expanded={openIndex === index}
                aria-controls={`faq-content-${faq.id}`}
              >
                <span className="text-base md:text-lg font-semibold text-white pr-4">
                  {faq.q}
                </span>
                <ChevronDown
                  size={20}
                  className={`text-white/60 transition-transform duration-200 flex-shrink-0 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Answer Content */}
              <div
                id={`faq-content-${faq.id}`}
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
                role="region"
                aria-labelledby={`faq-button-${faq.id}`}
              >
                <div className="px-5 pb-5">
                  <div className="text-sm md:text-base text-white/70 leading-relaxed">
                    {faq.a}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <p className="text-white/70 mb-6">
            Still have questions? We&apos;d love to discuss your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button>Get a Quote</Button>
            <Button variant="secondary">Book a Call</Button>
          </div>
        </div>
      </div>

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.a,
              },
            })),
          }),
        }}
      />
    </section>
  );
}
