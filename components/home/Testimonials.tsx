// Purpose: Short testimonials per copy.
export default function Testimonials() {
  const quotes = [
    {
      q: "They stabilized our pipeline and we shipped features again.",
      a: "CTO, Series B fintech",
    },
    {
      q: "Security review was pragmatic and fast. We passed audit.",
      a: "Head of Security, healthcare SaaS",
    },
    { q: "OTA made our fleet manageable.", a: "VP Hardware, IoT manufacturer" },
  ];
  return (
    <section className="py-14 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-6">
        {quotes.map((t) => (
          <figure
            key={t.q}
            className="rounded-xl border border-[var(--color-border)] p-6"
          >
            <blockquote className="text-lg">“{t.q}”</blockquote>
            <figcaption className="mt-3 text-sm text-foreground/70">
              — {t.a}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
