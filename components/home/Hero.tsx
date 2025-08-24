import { Button } from "@/components/ui/button";
import Image from "next/image";
import { PATTERN_GLYPHS_80, PatternSheet } from "../design/PatternSheet";

export default function Hero() {
  return (
    <section className="relative isolate flex flex-col bg-[var(--navy-900)] text-white overflow-hidden">
      <PatternSheet
        image={PATTERN_GLYPHS_80}
        tile={80}
        width={980}
        height={640}
        radius={112}
        // color controls
        tint="#9FBFFF"
        tintOpacity={0.34}
        fadeColor="#0B1A3A" // darker shade for edge-dim, or same as tint
        // fade controls
        fadeBlur={100}
        fadeSpread={50}
        fadeSteps={7}
        // placement
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
                    className="inline-flex h-10 w-10 rounded-full ring-2 ring-[var(--navy-900)] bg-white/10 backdrop-blur-sm"
                    aria-hidden
                  />
                ))}
              </div>

              <p className="text-sm/6 text-white/80">
                Empower projects by merging effective engineering techniques and
                captivating design to enhance velocity and experience.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <Button
                  asChild
                  size="lg"
                  className="px-6 py-4 font-semibold bg-white !text-black hover:bg-white/90 hover:!text-black"
                >
                  <a href="/contact#quote">Get a Quote</a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="secondary"
                  className="px-6 py-4 font-semibold border border-white/30 bg-white/10 hover:bg-white/15 text-white"
                >
                  <a href="/contact#call">Book a Call</a>
                </Button>
              </div>
            </div>

            {/* RIGHT: H1 + subcopy */}
            <div className="lg:col-span-8">
              <h1 className="font-logo text-4xl sm:text-5xl lg:text-6xl leading-[1.08] tracking-tight">
                Ship critical software with specialist engineers
              </h1>
              <p className="mt-5 max-w-3xl text-base/7 text-white/85">
                Web &amp; Mobile, Cyber Security, DevOps, Embedded, and AI/ML.
                Contract-based delivery. Hourly billing. Discovery today, scoped
                quote within 48 hours.
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
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=2072&q=80"
              alt="Modern workspace"
              fill
              className="object-cover"
              priority
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
              "Hourly billing",
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
  );
}
