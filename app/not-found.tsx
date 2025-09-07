import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="relative bg-navy-900 text-white min-h-[80vh] flex items-center">
      {/* Subtle background pattern / vignette */}
      <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_160px_rgba(0,0,0,0.35)]" />

      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-6">
          <div className="text-[18vw] leading-none font-extrabold text-white/10 select-none">404</div>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">We couldn’t find that page</h1>
        <p className="mt-4 text-white/80 text-lg">
          The link may be broken or the page may have moved. Try one of these paths.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button asChild variant="primary">
            <Link href="/">Go to Homepage</Link>
          </Button>
          <Button asChild variant="secondary">
            <Link href="/case-studies">Browse Case Studies</Link>
          </Button>
        </div>

        <div className="mt-10 text-sm text-white/70">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link className="underline decoration-white/30 hover:decoration-white" href="/#services">
              Our Services
            </Link>
            <span className="text-white/30">•</span>
            <Link className="underline decoration-white/30 hover:decoration-white" href="/about-us">
              About Us
            </Link>
            <span className="text-white/30">•</span>
            <Link className="underline decoration-white/30 hover:decoration-white" href="/contact?tab=quote">
              Get a Quote
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
