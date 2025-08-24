// Purpose: Tech stack strip.

const tools = [
  "React",
  "Next.js",
  "Node.js",
  "Python",
  "Go",
  "Swift",
  "Kotlin",
  "Terraform",
  "Kubernetes",
  "GitHub Actions",
  "AWS",
  "GCP",
  "Azure",
  "Postgres",
  "Kafka",
  "Grafana/Prometheus",
  "OpenAI/LLM tooling",
  "RTOS/FreeRTOS",
];

export default function TechStrip() {
  return (
    <section className="py-10 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 text-sm text-foreground/70">
          {tools.map((t) => (
            <div
              key={t}
              className="rounded-md border border-[var(--color-border)] px-3 py-2 text-center"
            >
              {t}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
