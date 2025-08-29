"use client";

import { Button } from "@/components/ui/button";
import { processSteps } from "./processData";
import { useProcessCarousel } from "./useProcessCarousel";
import { ProcessList } from "./ProcessList";
import { ProcessMedia } from "./ProcessMedia";

export function ProcessSection() {
  const { activeIndex, bindInViewRef, onItemClick, onHoverPause } =
    useProcessCarousel({
      totalSteps: processSteps.length,
      startIndex: 0,
      intervalMs: 5000,
    });

  return (
    <section
      ref={bindInViewRef}
      className="py-16 md:py-24 bg-navy-900 text-white"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <header className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Collaborate with Our Creative Team
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            We co-design the plan, define acceptance tests, and deliver
            predictably. Security-first, WCAG-aware, measurable outcomes, weekly
            demos, and single-threaded ownership reduce risk throughout.
          </p>
        </header>

        {/* Main Content - Desktop: Two Column Layout, Mobile: Stacked Layout */}
        <div>
          {/* Desktop Layout */}
          <div className="hidden lg:grid lg:grid-cols-5 gap-2 items-center">
            {/* Left Column - Process List (2/5 width on desktop) */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-6 text-white/90">
                  Our Process
                </h3>
                <ProcessList
                  steps={processSteps}
                  activeIndex={activeIndex}
                  onItemClick={onItemClick}
                />
              </div>
            </div>

            {/* Right Column - Media Slider (3/5 width on desktop) */}
            <div className="lg:col-span-3 relative pt-4 lg:pt-8">
              <ProcessMedia
                steps={processSteps}
                activeIndex={activeIndex}
                onHoverPause={onHoverPause}
                isMobileOverlay={false}
              />
            </div>
          </div>

          {/* Mobile Layout - Process List followed by Images */}
          <div className="lg:hidden space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-6 text-white/90">
                Our Process
              </h3>
              <ProcessList
                steps={processSteps}
                activeIndex={activeIndex}
                onItemClick={onItemClick}
              />
            </div>

            {/* Mobile Images - Full width, no pointer events */}
            <div className="pointer-events-none">
              <ProcessMedia
                steps={processSteps}
                activeIndex={activeIndex}
                onHoverPause={onHoverPause}
                isMobileOverlay={true}
              />
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button asChild href="/contact">
            Get a Quote
          </Button>
        </div>
      </div>
    </section>
  );
}
