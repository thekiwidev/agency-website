import type { Metadata } from "next";
import Hero from "@/components/about/hero";
import WhoWeAre from "@/components/about/WhoWeAre";
import WhyWeExist from "@/components/about/WhyWeExist";
import Process from "@/components/home/Process";
import OperatingPrinciplesFootprint from "@/components/about/OperatingPrinciplesFootprint";
import Testimonials from "@/components/about/Testimonials";
import SecurityDataHandling from "@/components/about/SecurityDataHandling";
import FAQSection from "@/components/home/FAQSection";
import FinalCTA from "@/components/home/FinalCTA";
import { StructuredData } from "@/components/seo/StructuredData";
import { orgSchema } from "@/lib/schema";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";

export const metadata: Metadata = {
  title: "About — Senior engineers who help you ship faster — Agency",
  description:
    "US-registered, globally distributed engineers. Specialists in Web & Mobile, Security, DevOps, Embedded, and AI/ML. We remove bottlenecks so your team ships faster.",
  alternates: { canonical: "/about-us" },
};

export default function AboutPage() {
  return (
    <main className="bg-navy-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <Breadcrumbs items={[{ href: "/", label: "Home" }, { href: "/about-us", label: "About" }]} />
      </div>
      {/* Hero */}
      <Hero />

      {/* Who we are */}
      <WhoWeAre />

      {/* Why we exist */}
      <WhyWeExist />

      {/* Process (same as homepage) */}
      <Process />


      {/* Operating principles + Footprint */}
      <OperatingPrinciplesFootprint />



      {/* Testimonials */}
      <Testimonials />

      {/* Security & data handling */}
      <SecurityDataHandling />


      {/* FAQ */}
      <FAQSection />

      {/* Final CTA */}
      <FinalCTA />

      {/* Organization JSON-LD */}
      <StructuredData data={orgSchema} />
    </main>
  );
}
