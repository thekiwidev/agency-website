import Link from "next/link";
import { StructuredData } from "./StructuredData";
import { breadcrumbsSchema } from "@/lib/schema";

export function Breadcrumbs({ items }: { items: { href: string; label: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex flex-wrap gap-2 text-sm">
        {items.map((c, i) => (
          <li key={c.href} className="flex items-center">
            {i > 0 && <span className="mx-1 text-white/40">/</span>}
            <Link href={c.href} className="hover:underline text-white/70 hover:text-white">
              {c.label}
            </Link>
          </li>
        ))}
      </ol>
      <StructuredData data={breadcrumbsSchema(items)} />
    </nav>
  );
}

