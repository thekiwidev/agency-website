import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-[400px]">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">404</h1>
        <p className="text-slate-600 mb-6">Page not found</p>
        <Link
          href="/"
          className="inline-flex items-center px-4 py-2 bg-[var(--color-brand)] text-white rounded-md hover:bg-[var(--color-brand-dark)]"
        >
          Go home
        </Link>
      </div>
    </div>
  );
}
