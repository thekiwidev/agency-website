// Purpose: Site footer with giant, high-contrast Jersey20 font display text matching design reference.
import { GET_QUOTE_URL, BOOK_CALL_URL } from "@/lib/links";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#about", label: "About" },
  { href: "#faq", label: "FAQ" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-navy-900 text-[#e6e7eb] overflow-hidden pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Header Row with Brand & Navigation */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-12 border-b border-white/10">
          <div>
            <a href="#" className="inline-flex items-center gap-2 group select-none">
              <span className="text-3xl font-bold tracking-tight text-white font-jersey">
                Pdiamond
              </span>
            </a>
            <p className="mt-2 text-xs text-white/70 max-w-sm leading-relaxed">
              Bespoke software development: Websites, Web Apps, and Mobile Apps.
            </p>
          </div>

          <nav className="flex flex-wrap items-center gap-6 sm:gap-8 text-xs font-bold uppercase tracking-widest text-white/80">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="hover:text-white transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href={GET_QUOTE_URL}
              className="text-white hover:text-blue-300 underline underline-offset-4 transition-colors"
            >
              Get a Quote
            </a>
          </nav>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-white/60 border-t border-white/10 pt-6 gap-4 mb-24">
          <p>© {new Date().getFullYear()} PDiamond. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href={BOOK_CALL_URL} className="hover:text-white transition-colors">
              Book a Call
            </a>
            <span>•</span>
            <span>US-Registered Agency</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
