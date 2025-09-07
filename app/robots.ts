import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://www.agency-domain.com";
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/preview", "/draft"] }],
    sitemap: `${base}/sitemap.xml`,
  };
}

