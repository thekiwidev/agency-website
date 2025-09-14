export const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "P-Diamond",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.p-diamond-domain.com",
  logo: `${
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.p-diamond-domain.com"
  }/svg/p-diamond-icon-logo.svg`,
  sameAs: [
    // Fill in as you add them
    // "https://www.linkedin.com/company/...",
  ],
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "P-Diamond",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.p-diamond-domain.com",
  potentialAction: {
    "@type": "SearchAction",
    target: `${
      process.env.NEXT_PUBLIC_SITE_URL || "https://www.p-diamond-domain.com"
    }/search?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

export function serviceSchema(s: { title: string; summary: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: s.title,
    description: s.summary,
    areaServed: "Global",
    provider: { "@type": "Organization", name: "P-Diamond" },
    offers: {
      "@type": "Offer",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        priceCurrency: "USD",
        minPrice: 15,
        maxPrice: 25,
        unitCode: "HUR",
      },
      availability: "https://schema.org/InStock",
    },
  } as const;
}

export function caseStudySchema(c: {
  title: string;
  slug: string;
  summary: string;
  industry?: string[];
  problem?: string;
  outcomes?: { label?: string; value?: string }[] | string[];
}) {
  const outcomesArray: string[] = Array.isArray(c.outcomes)
    ? (c.outcomes as Array<{ label?: string; value?: string } | string>)
        .map((o) =>
          typeof o === "string" ? o : `${o.label ?? ""}: ${o.value ?? ""}`
        )
        .filter((s): s is string => Boolean(s))
    : [];

  const base =
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.p-diamond-domain.com";
  return {
    "@context": "https://schema.org",
    "@type": "CaseStudy",
    name: c.title,
    url: `${base}/case-studies/${c.slug}`,
    description: c.summary,
    industry: c.industry?.[0],
    about: c.problem,
    result: outcomesArray,
    author: { "@type": "Organization", name: "P-Diamond" },
  } as const;
}

export function jobPostingSchema(job: {
  title: string;
  htmlDescription: string;
  type: string;
  datePosted: string;
  validThrough?: string;
  min?: number;
  max?: number;
  currency?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: job.title,
    description: job.htmlDescription,
    employmentType: job.type,
    hiringOrganization: {
      "@type": "Organization",
      name: "P-Diamond",
      sameAs:
        process.env.NEXT_PUBLIC_SITE_URL || "https://www.p-diamond-domain.com",
    },
    jobLocationType: "TELECOMMUTE",
    applicantLocationRequirements: { "@type": "Country", name: "Global" },
    datePosted: job.datePosted,
    validThrough: job.validThrough,
    baseSalary: {
      "@type": "MonetaryAmount",
      currency: job.currency || "USD",
      value: {
        "@type": "QuantitativeValue",
        minValue: job.min ?? 15,
        maxValue: job.max ?? 25,
        unitText: "HOUR",
      },
    },
  } as const;
}

export function faqSchema(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((q) => ({
      "@type": "Question",
      name: q.q,
      acceptedAnswer: { "@type": "Answer", text: q.a },
    })),
  } as const;
}

export function breadcrumbsSchema(crumbs: { label: string; href: string }[]) {
  const base =
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.p-diamond-domain.com";
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
      item: `${base}${c.href}`,
    })),
  } as const;
}
