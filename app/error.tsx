"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <main className="relative bg-navy-900 text-white min-h-[80vh] flex items-center">
      {/* Subtle background vignette */}
      <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_160px_rgba(0,0,0,0.35)]" />

      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-6">
          <div className="text-[12vw] leading-none font-extrabold text-white/10 select-none">500</div>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Something went wrong
        </h1>
        <p className="mt-4 text-white/80 text-lg">
          An unexpected error occurred. You can retry the last action or head back home while we sort this out.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button onClick={reset} variant="primary">
            Try again
          </Button>
          <Button asChild variant="secondary">
            <Link href="/">Go to Homepage</Link>
          </Button>
        </div>

        <div className="mt-6 text-sm text-white/70">
          <button
            className="underline decoration-white/30 hover:decoration-white"
            onClick={() => setShowDetails((s) => !s)}
            aria-expanded={showDetails}
          >
            {showDetails ? "Hide error details" : "Show error details"}
          </button>
          {showDetails && (
            <pre className="mt-3 text-left bg-white/5 border border-white/10 rounded-lg p-4 overflow-x-auto whitespace-pre-wrap">
              {error?.message || "Unknown error"}
              {error?.digest ? `\n\nDigest: ${error.digest}` : ""}
            </pre>
          )}
        </div>

        <div className="mt-10 text-sm text-white/70">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link className="underline decoration-white/30 hover:decoration-white" href="/#services">
              Our Services
            </Link>
            <span className="text-white/30">•</span>
            <Link className="underline decoration-white/30 hover:decoration-white" href="/case-studies">
              Case Studies
            </Link>
            <span className="text-white/30">•</span>
            <Link className="underline decoration-white/30 hover:decoration-white" href="/contact?tab=call">
              Book a Call
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

