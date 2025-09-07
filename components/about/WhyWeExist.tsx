"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { BOOK_CALL_URL, GET_QUOTE_URL } from "@/lib/links";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function WhyWeExist() {
  return (
    <section className="relative bg-navy-900" aria-labelledby="why-we-exist">
      {/* Background glow */}
      <div className="absolute inset-0 bg-brand-sphere opacity-[0.08] pointer-events-none" />

      <div className="relative mx-auto max-w-[1200px] px-6 md:px-8 py-24 md:py-32">
        {/* Layout: text + image */}
        <motion.div
          className="md:grid md:grid-cols-12 md:gap-10 md:items-start"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Left: copy */}
          <div className="md:col-span-7 space-y-8">
            {/* Heading */}
            <motion.div
              variants={itemVariants}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h2
                id="why-we-exist"
                className="text-4xl md:text-5xl font-semibold tracking-tight text-white relative"
              >
                Why we{" "}
                <span className="relative">
                  exist
                  <motion.div
                    className="absolute -bottom-2 left-0 h-0.5 bg-gradient-to-r from-brand to-brand/50"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1.2,
                      ease: "easeOut",
                      delay: 0.8,
                    }}
                    style={{
                      animation: "reduced-motion: none",
                    }}
                  />
                </span>
              </h2>
            </motion.div>

            {/* Body text */}
            <motion.div
              variants={itemVariants}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <p className="mt-5 text-base md:text-lg leading-relaxed text-white/80 max-w-prose">
                Teams stall for predictable reasons: unclear scope, missing
                skills, risky launches, or operational drag. We provide focused
                specialists who unblock delivery. Hourly, transparent, and
                reversible.
              </p>
            </motion.div>

            {/* Signal pills on separate lines (bad first, then good) */}
            <motion.div
              variants={itemVariants}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="mt-4 space-y-2">
                <div className="flex flex-wrap items-center gap-0">
                  {[
                    "Unclear scope",
                    "Skill gaps",
                    "Risky launches",
                    "Ops drag",
                  ].map((label, i) => (
                    <span
                      key={`bad-${label}-${i}`}
                      className="px-3 py-1 whitespace-nowrap -ml-px first:ml-0 text-xs md:text-sm border first:rounded-l-full last:rounded-r-full rounded-none bg-rose-500/15 border-rose-400/30 text-rose-200"
                    >
                      {label}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap items-center gap-0">
                  {[
                    "Focused specialists",
                    "Weekly demos",
                    "Reversible hourly",
                    "Clear SLAs",
                  ].map((label, i) => (
                    <span
                      key={`good-${label}-${i}`}
                      className="px-3 py-1 whitespace-nowrap -ml-px first:ml-0 text-xs md:text-sm border first:rounded-l-full last:rounded-r-full rounded-none bg-brand/25 border-brand/40 text-white"
                    >
                      {label}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Metrics: variable-size chips with equal padding */}
            <motion.div
              variants={itemVariants}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  { value: "< 48h", label: "scoped quote" },
                  { value: "4h+", label: "overlap daily" },
                  { value: "Senior-only", label: "teams" },
                ].map((metric, index) => (
                  <div
                    key={index}
                    className="rounded-2xl bg-navy-900 border border-white/10 px-5 py-4 text-center"
                  >
                    <div className="text-2xl font-semibold text-white">
                      {metric.value}
                    </div>
                    <div className="text-xs text-white/60 mt-1">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="mt-10 flex flex-wrap gap-3">
                <Button
                  asChild
                  size="lg"
                  aria-label="Get a quote for our engineering services"
                >
                  <Link href={GET_QUOTE_URL}>Get a Quote</Link>
                </Button>
                <Button
                  asChild
                  variant="secondary"
                  size="lg"
                  aria-label="Book a call to discuss your project"
                >
                  <Link href={BOOK_CALL_URL}>Book a Call</Link>
                </Button>
              </div>
            </motion.div>
          </div>

          {/* Right: image */}
          <motion.div
            className="md:col-span-5 mt-10 md:mt-0"
            variants={itemVariants}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <Image
                src="/images/web-mobile.png"
                alt="Why we exist — delivery-focused engineering"
                width={720}
                height={540}
                className="h-auto w-full object-cover"
                sizes="(min-width: 768px) 480px, 100vw"
                priority={false}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
