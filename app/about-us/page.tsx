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

export const metadata: Metadata = {
  title: "About — Senior engineers who help you ship faster — Agency",
  description:
    "US-registered, globally distributed engineers. Specialists in Web & Mobile, Security, DevOps, Embedded, and AI/ML. We remove bottlenecks so your team ships faster.",
};

export default function AboutPage() {
  return (
    <main className="bg-navy-900 text-white">
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
