// Purpose: FAQ list per copy.
const faqs = [
  {
    q: "How do you price work?",
    a: "Hourly time‑and‑materials. We provide role mix and estimated hours per milestone.",
  },
  {
    q: "How fast can you start?",
    a: "Discovery within 1–2 business days. Typical kick‑off depends on scope and team.",
  },
  {
    q: "Can you sign an NDA?",
    a: "Yes. We can use yours or provide a standard mutual NDA.",
  },
  {
    q: "What about security and compliance?",
    a: "Security is baked into design and delivery. We support SOC 2/ISO readiness and secure SDLC practices.",
  },
  {
    q: "Do you work with existing teams and codebases?",
    a: "Yes. We integrate with your workflows and submit PRs to your repos.",
  },
  {
    q: "Do you offer fixed‑bid?",
    a: "By exception for well‑defined scopes. Hourly is default.",
  },
];

export default function FAQ() {
  return (
    <section className="py-14">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-semibold">FAQ</h2>
        <dl className="mt-6 divide-y divide-[var(--color-border)]">
          {faqs.map((f) => (
            <div key={f.q} className="py-4">
              <dt className="font-medium">{f.q}</dt>
              <dd className="mt-1 text-foreground/70">{f.a}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
