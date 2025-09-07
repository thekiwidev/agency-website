// Purpose: Site header with agency wordmark and navigation.
import Link from "next/link";
import { Button } from "@/components/ui/button";

const nav = [
  { href: "/case-studies", label: "Case Studies" },
  { href: "/#services", label: "Services" },
  { href: "/about-us", label: "About" },
];

export default function Header() {
  return (
    <header className="z-50 bg-navy-900 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="font-logo text-2xl tracking-tight select-none text-white"
        >
          agency
        </Link>
        {/* Nav aligned to the right, next to CTA on desktop */}
        <nav className="hidden md:flex ml-auto mr-8 gap-6 text-sm">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="text-white/80 hover:text-white transition-colors"
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center">
          <Button asChild href="/contact#quote" size="sm">
            <span>Get a Quote</span>
          </Button>
        </div>
      </div>
    </header>
  );
}
