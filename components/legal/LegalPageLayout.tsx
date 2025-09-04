// components/legal/LegalPageLayout.tsx
import React from "react";
import { PatternSheet } from "../design/PatternSheet";
import Link from "next/link";
import LegalButton from "./LegalButton";

type LegalPageProps = {
  title: string;
  dateText: string;
  children: React.ReactNode;
};

const legalPages = [
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Terms of Service", href: "/terms-of-service" },
  { name: "Cookie Policy", href: "/cookies-agreement" },
  { name: "Data Processing Addendum", href: "/data-processing-agreement" },
  { name: "Security", href: "/security-policy" },
];

export default function LegalPageLayout({
  title,
  dateText,
  children,
}: LegalPageProps) {
  return (
    <main className="bg-navy-900 text-white min-h-screen relative overflow-hidden">
      {/* Background patterns */}
      <PatternSheet
        image="/svg/circuit-board.svg"
        tile={80}
        width={900}
        height={500}
        radius={120}
        tint="#9FBFFF"
        tintOpacity={0.18}
        fadeColor="#0B1A3A"
        fadeBlur={90}
        fadeSpread={44}
        fadeSteps={6}
        anchor="top-right"
        top="-5%"
        right="-10%"
      />

      <PatternSheet
        image="/svg/circuit-board.svg"
        tile={80}
        width={800}
        height={400}
        radius={100}
        tint="#9FBFFF"
        tintOpacity={0.15}
        fadeColor="#0B1A3A"
        fadeBlur={80}
        fadeSpread={40}
        fadeSteps={5}
        anchor="bottom-left"
        bottom="5%"
        left="-15%"
      />

      <div className="container mx-auto px-4 py-16 max-w-7xl relative z-10">
        {/* Header section with title and date */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            {title}
          </h1>
          <p className="text-white/70">{dateText}</p>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar navigation for legal pages */}
          <aside className="md:w-80 shrink-0">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10 sticky top-24">
              <h2 className="text-lg font-semibold mb-4">Legal Documents</h2>
              <nav className="space-y-2">
                {legalPages.map((page) => (
                  <Link
                    key={page.href}
                    href={page.href}
                    className={`block px-3 py-2 rounded-lg transition-colors ${
                      page.name === title
                        ? "bg-white/10 text-white"
                        : "text-white/70 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {page.name}
                  </Link>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main content */}
          <div className="flex-1">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-white/10">
              <section className="prose prose-lg prose-invert max-w-none legal-content">
                {children}
              </section>

              {/* Call to action */}
              <div className="mt-12 pt-8 border-t border-white/10">
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
                  <h3 className="text-xl font-semibold mb-3">
                    Need help with your project?
                  </h3>
                  <p className="text-white/70 mb-6">
                    Our team of experts is ready to assist you with any
                    questions or requirements.
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <LegalButton href="/contact" variant="primary">
                      Get a Quote
                    </LegalButton>
                    <LegalButton href="/contact#call" variant="secondary">
                      Book a Call →
                    </LegalButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
