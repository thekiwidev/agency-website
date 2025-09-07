import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import ServicesPage from "@/components/services/ServicesPage";
import FinalCTA from "@/components/home/FinalCTA";
import FAQSection from "@/components/home/FAQSection";

export const metadata: Metadata = {
  title:
    "Software Services: Web & Mobile, Cyber Security, DevOps, Embedded, AI/ML — Agency",
  description:
    "Contract‑based specialist teams. Hourly billing. Discovery fast. Quotes in under 48 hours. See capabilities, process, sample deliverables, and FAQs for each service.",
  alternates: { canonical: "/services" },
};

export default function ServicesHubPage() {
  return (
    <main className="bg-navy-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <Breadcrumbs
          items={[
            { href: "/", label: "Home" },
            { href: "/services", label: "Services" },
          ]}
        />
      </div>
      <ServicesPage />
      <FAQSection />
      <FinalCTA />
    </main>
  );
}
