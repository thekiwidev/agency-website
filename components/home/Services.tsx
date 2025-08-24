// Purpose: Services overview grid.
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "Web & Mobile Engineering",
    focus: "React, Next.js, Node.js, GraphQL, Swift/Kotlin, React Native.",
    outcomes: "Reliable releases, clean architecture, measurable performance.",
  },
  {
    title: "Cyber Security",
    focus: "Offensive testing, remediation plans, secure SDLC, cloud security.",
    outcomes: "Reduced risk, audit‑ready documentation, faster approvals.",
  },
  {
    title: "DevOps",
    focus: "Terraform, Kubernetes, GitHub Actions, Argo, Prometheus/Grafana.",
    outcomes: "Faster deploys, fewer incidents, clear SLOs.",
  },
  {
    title: "Embedded Systems",
    focus: "RTOS, board bring‑up, drivers, OTA, Bluetooth/Wi‑Fi/LTE.",
    outcomes: "Stable firmware, low‑power efficiency, reliable updates.",
  },
  {
    title: "AI/ML",
    focus: "Model development, RAG/LLM apps, feature stores, MLOps.",
    outcomes: "Production‑grade models, measurable lift, safe deployment.",
  },
];

export default function Services() {
  return (
    <section className="py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-semibold">Services</h2>
          <p className="mt-2 text-foreground/70">
            Choose a track or combine teams. We assemble the right mix of roles
            and start fast.
          </p>
        </header>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="rounded-xl border border-[var(--color-border)] p-5 hover:shadow-sm transition-shadow"
            >
              <h3 className="text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-foreground/70">{s.focus}</p>
              <p className="mt-2 text-sm">{s.outcomes}</p>
            </div>
          ))}
        </div>
        <div className="mt-6">
          <Button asChild href="/book-a-call" variant="ghost">
            Not sure where to start? Book a Call
          </Button>
        </div>
      </div>
    </section>
  );
}
