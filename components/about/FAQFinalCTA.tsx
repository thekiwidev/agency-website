import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BOOK_CALL_URL, GET_QUOTE_URL } from "@/lib/links";

export default function FAQFinalCTA() {
  return (
    <section className="border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 py-20">
        <h2 className="text-3xl md:text-4xl font-semibold">FAQ</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {[
            [
              "Are you an agency or staff augmentation?",
              "We are a specialist partner. Embed with your team or deliver scoped work. You keep ownership.",
            ],
            [
              "Do you require long commitments?",
              "No. Start small. Extend only if results warrant it.",
            ],
            [
              "Can you sign our NDA and security addendum?",
              "Yes. We also provide a standard mutual NDA and DPA template.",
            ],
            [
              "Who owns the IP?",
              "You do. Code is committed to your repos with appropriate licenses.",
            ],
          ].map(([q, a]) => (
            <div
              key={q}
              className="rounded-2xl border border-white/10 bg-navy-800 p-6"
            >
              <h3 className="text-lg font-semibold">{q}</h3>
              <p className="mt-2 text-white/90">{a}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex gap-3">
          <Button asChild>
            <Link href={GET_QUOTE_URL}>Get a Quote</Link>
          </Button>
          <Button asChild variant="secondary">
            <Link href={BOOK_CALL_URL}>Book a Call</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
