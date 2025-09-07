"use client";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    plausible?: (event: string, options?: { props?: Record<string, unknown> }) => void;
  }
}

export function track(event: string, data: Record<string, unknown> = {}) {
  window.gtag?.("event", event, data);
  window.plausible?.(event, { props: data });
}
