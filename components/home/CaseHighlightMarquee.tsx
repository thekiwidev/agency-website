"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { CaseItem } from "./caseData";
import styles from "../../services/marquee.module.css";

interface CaseHighlightMarqueeProps {
  items: CaseItem[];
  speed?: number; // default 70 px/s
  slowFactor?: number; // default 0.25
  paused?: boolean; // controlled pause
  onTogglePause?: (v: boolean) => void;
}

export function CaseHighlightMarquee({
  items,
  speed = 70,
  slowFactor = 0.25,
  paused = false,
}: CaseHighlightMarqueeProps) {
  const [shellWidth, setShellWidth] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  // RAF state refs
  const speedRef = useRef(speed);
  const slowRef = useRef(1);
  const offsetRef = useRef(0);
  const rowWRef = useRef(0);
  const lastTsRef = useRef(0);
  const hoverRef = useRef(false);
  const pausedRef = useRef(paused);
  const rafRef = useRef<number | null>(null);

  // DOM refs
  const shellRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  // Update refs when props change
  useEffect(() => {
    speedRef.current = speed;
  }, [speed]);

  useEffect(() => {
    pausedRef.current = paused;
  }, [paused]);

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) =>
      setReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // Measure shell width and row width including gaps
  const measure = useCallback(() => {
    if (!shellRef.current || !trackRef.current) return;

    const shellRect = shellRef.current.getBoundingClientRect();
    setShellWidth(shellRect.width);

    // Calculate actual track width including all gaps
    const firstChild = trackRef.current.firstElementChild as HTMLElement;
    if (!firstChild) return;

    const cardWidth = firstChild.getBoundingClientRect().width;
    const gap = 32; // 8 * 4 = 32px gap on desktop, 6 * 4 = 24px on mobile
    const actualRowWidth = items.length * (cardWidth + gap) - gap;
    rowWRef.current = actualRowWidth;
  }, [items.length]);

  // RAF animation step
  const step = useCallback(
    (timestamp: number) => {
      if (!lastTsRef.current) lastTsRef.current = timestamp;
      const dt = timestamp - lastTsRef.current;
      lastTsRef.current = timestamp;

      if (!pausedRef.current && !hoverRef.current) {
        const currentSpeed = speedRef.current * slowRef.current;
        offsetRef.current += (currentSpeed * dt) / 1000;

        if (offsetRef.current >= rowWRef.current) {
          offsetRef.current -= rowWRef.current;
        }
      }

      // Quantize offset to avoid jitter
      const quantizedOffset = Math.round(offsetRef.current);

      if (trackRef.current) {
        trackRef.current.style.transform = `translate3d(-${quantizedOffset}px, 0, 0)`;
      }

      if (!reducedMotion && !pausedRef.current) {
        rafRef.current = requestAnimationFrame(step);
      }
    },
    [reducedMotion]
  );

  // Start/stop animation
  useEffect(() => {
    if (reducedMotion || paused) {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
      return;
    }

    measure();
    rafRef.current = requestAnimationFrame(step);

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    };
  }, [reducedMotion, paused, step, measure]);

  // Handle resize
  useEffect(() => {
    const handleResize = () => measure();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [measure]);

  // Calculate number of duplicates needed
  const safetyMargin = 400; // Increased margin for smooth wrapping
  const duplicatesNeeded = Math.max(
    3, // Minimum 3 copies
    Math.ceil((shellWidth + safetyMargin) / Math.max(rowWRef.current, 1)) + 1
  );
  const allItems = Array.from({ length: duplicatesNeeded }, () => items).flat();

  return (
    <section
      className="py-20 md:py-24 bg-navy-900 text-white overflow-hidden"
      role="region"
      aria-label="Featured case studies"
    >
      {/* Section Header */}
      <header className="text-center mb-16 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 id="cases-heading" className="text-3xl md:text-4xl font-bold mb-4">
          Featured Case Studies
        </h2>
        <p className="text-lg text-white/70 max-w-2xl mx-auto">
          Real projects with verified results across Web & Mobile, Security,
          DevOps, Embedded, and AI/ML specializations.
        </p>
      </header>

      {/* Marquee Container - Full width */}
      <div
        ref={shellRef}
        className={`relative overflow-hidden ${styles["fadeout-horizontal"]}`}
        onMouseEnter={() => {
          hoverRef.current = true;
          slowRef.current = slowFactor;
        }}
        onMouseLeave={() => {
          hoverRef.current = false;
          slowRef.current = 1;
        }}
      >
        {/* Track */}
        <div
          ref={trackRef}
          className="flex gap-6 md:gap-8 p-8"
          style={{
            transform: reducedMotion ? "none" : undefined,
            willChange: "transform",
          }}
        >
          {allItems.map((item, index) => (
            <article
              key={`${item.slug}-${index}`}
              className="relative w-[min(80vw,400px)] md:w-[460px] h-[500px] shrink-0 rounded-2xl overflow-hidden group hover:scale-105 transition-transform duration-300 ease-out"
            >
              {/* Full Background Image */}
              <div className="absolute inset-0 overflow-hidden">
                <Image
                  src={item.image.src}
                  alt={item.image.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  sizes="(min-width: 1024px) 460px, 80vw"
                  priority={index === 0}
                />
                {/* Dark overlay for better text contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/10" />
              </div>

              {/* Content area with fixed height */}
              <div className="relative h-full flex flex-col justify-between p-6">
                {/* Service badge */}
                <div className="flex justify-start">
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-white/20 backdrop-blur-sm rounded-full text-white border border-white/20">
                    {item.service}
                  </span>
                </div>

                {/* Floating text content card */}
                <div className="bg-white/95 backdrop-blur-sm rounded-xl p-5 border border-white/20 shadow-lg">
                  <h3 className="font-semibold text-gray-900 mb-3 line-clamp-1 text-base">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                    {item.summary}
                  </p>
                  <Link
                    href={item.slug}
                    className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800 transition-colors font-medium"
                  >
                    {item.ctaLabel || "Read the case study"}
                    <svg
                      className="ml-1 w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
