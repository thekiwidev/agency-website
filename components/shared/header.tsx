// Purpose: Site header with PDiamond wordmark and single-page section navigation.
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { GET_QUOTE_URL } from "@/lib/links";

const nav = [
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#about", label: "About" },
  { href: "#faq", label: "FAQ" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-navy-900/90 backdrop-blur-md border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="select-none">
          <Image
            src="/svg/p-diamond-full-logo.svg"
            alt="PDiamond logo"
            width={120}
            height={32}
            unoptimized
          />
        </a>
        {/* Nav aligned to the right, next to CTA on desktop */}
        <nav className="hidden md:flex ml-auto mr-8 gap-6 text-sm">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-white/80 hover:text-white transition-colors font-medium"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center">
          <Button asChild size="sm">
            <a href={GET_QUOTE_URL}>Get a Quote</a>
          </Button>
        </div>
      </div>
    </header>
  );
}
