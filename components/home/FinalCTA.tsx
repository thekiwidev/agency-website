// Purpose: Final CTA strip.
import { Button } from "@/components/ui/button";

export default function FinalCTA() {
  return (
    <section className="py-16 bg-[var(--navy-800)] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-semibold">Ready to move?</h2>
        <div className="mt-6 flex items-center justify-center gap-3">
          <Button asChild href="/contact" variant="secondary">
            Get a Quote
          </Button>
          <Button asChild href="/book-a-call">
            Book a Call
          </Button>
        </div>
      </div>
    </section>
  );
}
