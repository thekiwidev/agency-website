// Purpose: Two case study teasers with placeholder metrics from copy.
import Link from "next/link";

export default function CaseHighlight() {
  return (
    <section className="py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-6">
          <article className="rounded-xl border border-border p-6">
            <h3 className="font-semibold">
              Fintech web platform — feature velocity rescue
            </h3>
            <p className="mt-2 text-sm text-foreground/70">
              Legacy frontend slowed delivery. Release pain.
            </p>
            <p className="mt-2 text-sm">
              Introduced modular Next.js, CI/CD, and visual regression tests.
            </p>
            <p className="mt-2 text-sm text-foreground/70">
              Outcome: 60% faster release cycle; 35% defect reduction.
            </p>
            <Link
              href="#"
              className="mt-3 inline-flex text-sm text-brand hover:underline"
            >
              Read the full case study →
            </Link>
          </article>
          <article className="rounded-xl border border-border p-6">
            <h3 className="font-semibold">
              IoT device firmware — stability and OTA
            </h3>
            <p className="mt-2 text-sm text-foreground/70">
              Intermittent device crashes in field.
            </p>
            <p className="mt-2 text-sm">
              RTOS refactor, memory profiling, OTA pipeline.
            </p>
            <p className="mt-2 text-sm text-foreground/70">
              Outcome: crash rate &lt; 0.5%/month.
            </p>
            <Link
              href="#"
              className="mt-3 inline-flex text-sm text-brand hover:underline"
            >
              Read the full case study →
            </Link>
          </article>
        </div>
      </div>
    </section>
  );
}
