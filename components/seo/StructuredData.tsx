"use client";
import React from "react";

export function StructuredData({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  return (
    <script
      type="application/ld+json"
      // stringify once to avoid hydration mismatches
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
