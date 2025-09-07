import { MetadataRoute } from "next";
import {
  getAllServiceSlugs,
  getAllCaseStudySlugs,
  getAllJobSlugs,
} from "@/lib/content-index";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base =
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.agency-domain.com";

  const staticPaths: MetadataRoute.Sitemap = [
    "",
    "/services",
    "/case-studies",
    "/about-us",
    "/privacy-policy",
    "/terms-of-service",
    "/cookies-agreement",
    "/data-processing-agreement",
    "/security-policy",
  ].map((p) => ({ url: `${base}${p}`, lastModified: new Date() }));

  const services = (await getAllServiceSlugs()).map((slug) => ({
    url: `${base}/services/${slug}`,
    lastModified: new Date(),
  }));

  const cases = (await getAllCaseStudySlugs()).map((slug) => ({
    url: `${base}/case-studies/${slug}`,
    lastModified: new Date(),
  }));

  const jobs = (await getAllJobSlugs()).map((slug) => ({
    url: `${base}/contractors/${slug}`,
    lastModified: new Date(),
  }));

  return [...staticPaths, ...services, ...cases, ...jobs];
}
