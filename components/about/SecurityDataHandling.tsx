export default function SecurityDataHandling() {
  return (
    <section className="border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 py-20">
        <h2 className="text-3xl md:text-4xl font-semibold">
          Security &amp; data handling
        </h2>
        <ul className="mt-6 space-y-3 text-white/90">
          {[
            "Least-privilege access with time-boxed credentials.",
            "Encrypted data at rest and in transit.",
            "No production PII is copied outside client systems without written approval.",
            "Coordinated vulnerability disclosures.",
          ].map((t) => (
            <li key={t} className="flex gap-3">
              <span className="mt-1 inline-block h-2 w-2 rounded-full bg-white/70" />
              <span>{t}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
