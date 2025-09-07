import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BOOK_CALL_URL, GET_QUOTE_URL } from "@/lib/links";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative bg-navy-900 text-white">
      <div className="flex flex-col md:flex-row">
        {/* Main Content Container */}
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 md:py-28">
          {/* Text Content */}
          <div className="max-w-2xl">
            <div className="mb-8">
              <h1 className="text-5xl md:text-7xl font tracking-tight font-logo">
                Senior engineers who remove bottlenecks
              </h1>
            </div>

            <div className="mb-8 space-y-4">
              <p className="text-base md:text-lg text-white/90 max-w-prose leading-relaxed">
                We help product teams ship faster without long-term lock-ins.
                You bring the goal. We fix the critical path and hand back
                momentum.
              </p>

              <div className="flex flex-wrap gap-3 text-sm text-white/80">
                <span className="rounded-full bg-white/10 px-3 py-1">
                  US-registered
                </span>
                <span className="rounded-full bg-white/10 px-3 py-1">
                  Global talent footprint
                </span>
                <span className="rounded-full bg-white/10 px-3 py-1">
                  Hourly T&M
                </span>
                <span className="rounded-full bg-white/10 px-3 py-1">
                  NDA on request
                </span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href={GET_QUOTE_URL}>Get a Quote</Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link href={BOOK_CALL_URL}>Book a Call</Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="flex-shrink-0 self-center md:self-auto px-4 md:px-0 -mt-8 -mr-8">
          <Image
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop"
            alt="Engineers collaborating across time zones"
            width={560}
            height={420}
            className="w-full md:w-auto rounded-2xl border border-white/10"
          />
        </div>
      </div>
    </section>
  );
}
