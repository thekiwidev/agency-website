// Purpose: Delivery process steps.
import { Button } from "@/components/ui/button";

const steps = [
  {
    t: "Inquiry",
    d: "Tell us your goals, constraints, and timeline. Attach briefs or a repo link.",
  },
  { t: "Discovery", d: "30–45 min call to align scope and success criteria." },
  {
    t: "Quote",
    d: "Role mix, estimated hours, milestones, and start date. Hourly T&M by default.",
  },
  {
    t: "Build",
    d: "Assigned lead engineer, weekly check‑ins, transparent progress.",
  },
  {
    t: "Deliver",
    d: "Demo, handover docs, and next‑step options (support, retainer).",
  },
];

export default function Process() {
  return (
    <section className="py-14 bg-muted">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-semibold">How we work</h2>
          <p className="mt-2 text-foreground/70">
            NDA on request · Security‑first practices · WCAG‑aware UX · Clear
            acceptance criteria
          </p>
        </header>
        <ol className="mt-8 grid grid-cols-1 md:grid-cols-5 gap-6">
          {steps.map((s, i) => (
            <li
              key={s.t}
              className="rounded-xl bg-white p-5 border border-border"
            >
              <div className="text-brand text-sm font-semibold">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="mt-1 font-semibold">{s.t}</div>
              <p className="mt-2 text-sm text-foreground/70">{s.d}</p>
            </li>
          ))}
        </ol>
        <div className="mt-6">
          <Button asChild href="/contact">
            Get a Quote
          </Button>
        </div>
      </div>
    </section>
  );
}
