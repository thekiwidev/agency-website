"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { BOOK_CALL_URL, GET_QUOTE_URL } from "@/lib/links";
import { Globe, Layout, Smartphone, CheckCircle2, ShieldCheck, Zap, Clock } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function AboutSection() {
  return (
    <section id="about" className="relative bg-navy-900 py-20 md:py-32 overflow-hidden border-t border-white/10" aria-labelledby="about-heading">
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-brand-sphere opacity-10 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {/* Left Column - Copy & Stats */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-blue-300">
                <ShieldCheck size={14} className="text-blue-400" />
                Who We Are
              </span>
              
              <h2
                id="about-heading"
                className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight text-white leading-[1.15]"
              >
                Engineered for speed, designed for impact
              </h2>
              
              <p className="mt-5 text-base sm:text-lg text-white/80 leading-relaxed max-w-2xl">
                PDiamond is a US-registered, remote-first software engineering team. We focus strictly on building exceptional <span className="text-white font-medium">Websites</span>, high-performance <span className="text-white font-medium">Web Applications</span>, and intuitive <span className="text-white font-medium">Mobile Applications</span>.
              </p>
              
              <p className="mt-3 text-base text-white/70 leading-relaxed max-w-2xl">
                We eliminate traditional agency bloat and complex setup cycles. Working in weekly sprint cycles with transparent hourly T&amp;M billing, our senior engineers give you direct delivery without friction.
              </p>
            </motion.div>

            {/* Core Specialties Pills */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { icon: Globe, label: "Websites", sub: "Corporate & Landing Pages" },
                { icon: Layout, label: "Web Apps", sub: "SaaS & Custom Dashboards" },
                { icon: Smartphone, label: "Mobile Apps", sub: "iOS & Android Solutions" },
              ].map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-white/20 transition-colors"
                  >
                    <IconComponent className="h-5 w-5 text-blue-400 mb-2" />
                    <div className="font-semibold text-white text-sm">{item.label}</div>
                    <div className="text-xs text-white/60 mt-0.5">{item.sub}</div>
                  </div>
                );
              })}
            </motion.div>

            {/* Metric Chips */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { value: "< 48h", label: "Scoped quote delivery", icon: Clock },
                { value: "Senior", label: "Engineers only", icon: CheckCircle2 },
                { value: "Reversible", label: "Hourly T&M billing", icon: Zap },
                { value: "4h+", label: "Daily overlap window", icon: CheckCircle2 },
              ].map((metric, idx) => (
                <div
                  key={idx}
                  className="rounded-xl bg-white/[0.03] border border-white/10 p-3.5 text-center"
                >
                  <div className="text-xl sm:text-2xl font-bold text-white tracking-tight">{metric.value}</div>
                  <div className="text-[11px] text-white/60 mt-0.5 leading-tight">{metric.label}</div>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-2">
              <Button asChild size="lg" className="px-6 py-3.5">
                <a href={GET_QUOTE_URL}>Get a Quote</a>
              </Button>
              <Button asChild variant="secondary" size="lg" className="px-6 py-3.5">
                <a href={BOOK_CALL_URL}>Book a Call</a>
              </Button>
            </motion.div>
          </div>

          {/* Right Column - Feature Visual Card */}
          <motion.div variants={itemVariants} className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-navy-800 shadow-2xl group">
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop"
                  alt="Senior engineering team collaborating on software architecture"
                  fill
                  sizes="(min-width: 1024px) 450px, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/40 to-transparent" />
              </div>

              {/* Overlaid Badges inside image card */}
              <div className="relative p-6 -mt-16 z-10 space-y-3">
                <div className="flex flex-wrap gap-2">
                  {[
                    "US-Registered Agency",
                    "Senior Talent",
                    "NDA on Request",
                    "Weekly Demos",
                  ].map((badge, idx) => (
                    <span
                      key={idx}
                      className="rounded-full bg-navy-900/90 border border-white/15 px-3 py-1 text-xs text-white/90 backdrop-blur-md"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
