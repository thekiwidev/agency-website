import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { QuoteForm } from "@/components/contact/QuoteForm";

export const metadata: Metadata = {
  title: "Contact, Request a Quote, or Book a Call — PDiamond",
  description: "Talk to engineers today. Book a call, request a scoped quote, or send a message. Hourly pricing $15–$25/hr. Quote in under 48 hours after discovery.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <main className="bg-navy-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <Breadcrumbs
          items={[
            { href: "/", label: "Home" },
            { href: "/contact", label: "Contact" },
          ]}
        />
      </div>
      <div className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Talk to engineers. Get a scoped quote.
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            Choose the fastest path. Book a call now, request a quote with details, or send a message. We reply within 2 business hours.
          </p>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* TODO: Implement tabbed interface here */}
          <div className="p-8 border border-white/20 rounded-lg">
            <QuoteForm />
          </div>
        </div>
      </div>
    </main>
  );
}