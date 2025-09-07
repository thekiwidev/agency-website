import Image from "next/image";

export default function WhoWeAre() {
  return (
    <section className="bg-navy-900" aria-labelledby="who-we-are-heading">
      <div className="mx-auto max-w-[1200px] px-6 md:px-8 py-20 md:py-28">
        <div className="grid md:grid-cols-12 gap-8 md:gap-10 items-center">
          {/* Image Column */}
          <div className="md:col-span-7 relative group">
            <div className="relative rounded-3xl overflow-hidden bg-navy-800 border border-white/10 shadow-[0_10px_40px_rgb(0_0_0/0.35)]">
              {/* Background glow */}
              <div className="absolute inset-0 bg-brand-sphere opacity-30 pointer-events-none" />

              {/* Vignette overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/20 pointer-events-none" />

              {/* Inner ring */}
              <div className="absolute inset-2 rounded-2xl border border-white/5 pointer-events-none" />

              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1529336953121-adb2f4f5a8f2?q=80&w=1200&auto=format&fit=crop"
                  alt="Diverse team of engineers collaborating across different time zones in a modern office setting"
                  fill
                  sizes="(min-width: 768px) 560px, 100vw"
                  className="object-cover"
                  priority
                />
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 transition-opacity duration-500 pointer-events-none" />
            </div>
          </div>

          {/* Content Column */}
          <div className="md:col-span-5 space-y-6">
            <div>
              <h2
                id="who-we-are-heading"
                className="text-4xl md:text-5xl font-semibold tracking-tight text-white"
              >
                Who we are
              </h2>
              <p className="mt-5 text-base md:text-lg leading-relaxed text-white/80 max-w-prose">
                Agency is a US-registered, remote-first group of engineers
                focused on practical outcomes. Our network spans Web &amp;
                Mobile, Cyber Security, DevOps, Embedded Systems, and AI/ML,
                with strong coverage across Nigeria, North America, and Europe.
              </p>
            </div>

            {/* Chips */}
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full bg-white/5 border border-white/10 px-3 py-1 text-xs md:text-sm text-white/80">
                US-registered
              </span>
              <span className="rounded-full bg-white/5 border border-white/10 px-3 py-1 text-xs md:text-sm text-white/80">
                Global talent footprint
              </span>
              <span className="rounded-full bg-white/5 border border-white/10 px-3 py-1 text-xs md:text-sm text-white/80">
                Hourly T&M
              </span>
              <span className="rounded-full bg-white/5 border border-white/10 px-3 py-1 text-xs md:text-sm text-white/80">
                NDA on request
              </span>
              <span className="rounded-full bg-white/5 border border-white/10 px-3 py-1 text-xs md:text-sm text-white/80">
                120+ Engineers
              </span>
              <span className="rounded-full bg-white/5 border border-white/10 px-3 py-1 text-xs md:text-sm text-white/80">
                3 Regions
              </span>
              <span className="rounded-full bg-white/5 border border-white/10 px-3 py-1 text-xs md:text-sm text-white/80">
                4h Daily overlap
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
