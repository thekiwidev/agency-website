export function absolute(path: string) {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://www.agency-domain.com";
  try {
    return new URL(path, base).toString();
  } catch {
    return path; // fallback for malformed inputs in non-critical paths
  }
}

export function canonicalFor(path: string) {
  return absolute(path || "/");
}

