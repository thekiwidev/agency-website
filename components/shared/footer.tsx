// Purpose: Site footer with oversized centered wordmark and link grids.
import Link from "next/link";

const quickLinks = [
  [
    { href: "/services", label: "Services" },
    { href: "/case-studies", label: "Case Studies" },
    { href: "/pricing", label: "Pricing & Engagement" },
  ],
  [
    { href: "/about", label: "About" },
    { href: "/contractors", label: "Contractors" },
    { href: "/insights", label: "Insights" },
  ],
  [
    { href: "/privacy", label: "Privacy" },
    { href: "/terms", label: "Terms" },
    { href: "/security", label: "Security" },
    { href: "/dpa", label: "DPA" },
    { href: "/cookies", label: "Cookie Policy" },
  ],
];

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-navy-800 text-[#e6e7eb]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <div className="font-logo text-[min(20vw,200px)] leading-none text-white/15">
            agency
          </div>
        </div>
        <div className="my-10 border-t border-white/15" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
          {quickLinks.map((col, i) => (
            <ul key={i} className="space-y-3">
              {col.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-white/80 hover:text-white"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          ))}
        </div>
        <div className="mt-10 flex items-center justify-between text-xs text-white/60">
          <p>© {new Date().getFullYear()} agency. All rights reserved.</p>
          <p>
            Subscribe to Insights for engineering, security, and AI updates.
          </p>
        </div>
      </div>
    </footer>
  );
}
