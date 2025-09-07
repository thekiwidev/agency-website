// Lightweight content indexers for sitemap and metadata builders
// Replace these with CMS fetchers as you evolve content.

import { caseStudies } from "@/components/home/caseData";

export async function getAllServiceSlugs(): Promise<string[]> {
  // TODO: Wire to real service list when service routes exist
  return [];
}

export async function getAllCaseStudySlugs(): Promise<string[]> {
  return caseStudies.map((c) => c.slug);
}

export async function getAllJobSlugs(): Promise<string[]> {
  // TODO: Wire to real roles once contractors pages exist
  return [];
}

