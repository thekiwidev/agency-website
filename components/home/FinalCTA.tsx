// Purpose: Final CTA strip with compelling copy and gradient background.
import { Button } from "@/components/ui/button";

export default function FinalCTA() {
  return (
    <section className="py-20 md:py-28 bg-navy-800 text-white relative overflow-hidden">
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          Ready to ship faster?
        </h2>

        <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
          Stop wrestling with capacity constraints and skill gaps. Get expert
          engineers who deliver production-ready code in days, not months. Start
          with a 2-hour response and 48-hour quote.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            className="bg-white text-navy-800 hover:bg-white/90 font-semibold px-8 py-4 text-lg"
          >
            Get a Quote
          </Button>
          <Button
            variant="secondary"
            size="lg"
            className="border-white/20 text-white hover:bg-white/10 font-semibold px-8 py-4 text-lg"
          >
            Book a Call →
          </Button>
        </div>

        <p className="mt-6 text-sm text-white/60">
          No commitments • 2-hour response time • Senior engineers only
        </p>
      </div>
    </section>
  );
}
