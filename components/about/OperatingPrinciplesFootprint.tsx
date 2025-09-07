export default function OperatingPrinciplesFootprint() {
  return (
    <section className="border-t border-white/10">
      <div className="mx-auto max-w-7xl grid gap-8 px-4 py-20 md:grid-cols-2">
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold">
            Operating principles
          </h2>
          <ul className="mt-6 space-y-3 text-white/90">
            {[
              "Outcomes first",
              "Show your work",
              "Security by default",
              "Measure then move",
              "Integrate, don’t interrupt",
              "No lock-in",
            ].map((t) => (
              <li key={t} className="flex gap-3">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-white/70" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold">
            Footprint &amp; time zones
          </h2>
          <p className="mt-4 max-w-prose text-white/90">
            Registration: United States. Engineering hub: Nigeria. Global
            contributors with a guaranteed 4-hour overlap minimum, extended
            coverage on request.
          </p>
        </div>
      </div>
    </section>
  );
}
