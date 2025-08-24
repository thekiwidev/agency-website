"use client";

import { useEffect, useRef, useCallback, useState } from "react";
import styles from "@/services/marquee.module.css";
import type { ComponentType } from "react";
import {
  FiShield,
  FiStar,
  FiClock,
  FiClipboard,
  FiActivity,
  FiFileText,
  FiLock,
  FiKey,
  FiSlash,
  FiTrash2,
  FiZap,
} from "react-icons/fi";
import {
  SiVercel,
  SiStripe,
  SiLinear,
  SiNotion,
  SiCloudflare,
  SiSlack,
  SiGithub,
  SiSega,
} from "react-icons/si";

type Logo = {
  name: string;
  icon: ComponentType<{ className?: string }>;
  href?: string;
};

const LOGOS: Logo[] = [
  { name: "Vercel", icon: SiVercel, href: "https://vercel.com" },
  { name: "Stripe", icon: SiStripe, href: "https://stripe.com" },
  { name: "Sega", icon: SiSega, href: "https://sega.com" },
  { name: "Linear", icon: SiLinear, href: "https://linear.app" },
  { name: "Notion", icon: SiNotion, href: "https://www.notion.so" },
  { name: "Slack", icon: SiSlack, href: "https://slack.com" },
  { name: "Cloudflare", icon: SiCloudflare, href: "https://cloudflare.com" },
  { name: "GitHub", icon: SiGithub, href: "https://github.com" },
];

export default function Trust({
  logos = LOGOS,
  speed = 70, // px/s
  slowFactor = 0.25, // on hover
}: {
  logos?: Logo[];
  speed?: number;
  slowFactor?: number;
}) {
  const shellRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const rowRef = useRef<HTMLUListElement>(null);

  const [repeat, setRepeat] = useState(3);

  // RAF state (no restarts)
  const hoverRef = useRef(false);
  const speedRef = useRef(speed);
  const slowRef = useRef(slowFactor);
  const offsetRef = useRef(0);
  const rowWRef = useRef(1);
  const rafRef = useRef<number | null>(null);
  const lastTsRef = useRef<number | null>(null);

  const measure = useCallback(() => {
    const rowW = rowRef.current
      ? Math.max(1, Math.round(rowRef.current.scrollWidth))
      : 1;
    const shellW = shellRef.current
      ? Math.max(1, Math.round(shellRef.current.getBoundingClientRect().width))
      : 1;

    rowWRef.current = rowW;

    // Ensure content width ≥ shellW + rowW (plus one extra for safety)
    const needed = Math.max(3, Math.ceil((shellW + rowW) / rowW) + 1);
    setRepeat(needed);
  }, []);

  useEffect(() => {
    speedRef.current = speed;
    slowRef.current = slowFactor;
  }, [speed, slowFactor]);

  useEffect(() => {
    measure();
    const ro = new ResizeObserver(measure);
    if (rowRef.current) ro.observe(rowRef.current);
    if (shellRef.current) ro.observe(shellRef.current);

    const step = (ts: number) => {
      if (lastTsRef.current == null) lastTsRef.current = ts;
      const dt = (ts - lastTsRef.current) / 1000;
      lastTsRef.current = ts;

      const v = speedRef.current * (hoverRef.current ? slowRef.current : 1);
      offsetRef.current += v * dt;

      const rowW = rowWRef.current;
      if (offsetRef.current >= rowW) offsetRef.current -= rowW;

      // Quantize to whole pixels to avoid sub-pixel jitter
      const px = Math.round(offsetRef.current);
      if (trackRef.current)
        trackRef.current.style.transform = `translate3d(${-px}px,0,0)`;

      rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);
    return () => {
      ro.disconnect();
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [measure]);

  return (
    <section
      className={`bg-brand-sphere ${styles.section}`}
      aria-labelledby="trust-heading"
    >
      <div className={styles.container}>
        <div className={styles.headingRow}>
          <FiShield className={styles.icon} />
          <h2 id="trust-heading">Trusted by teams</h2>
          <span className={styles.dot} aria-hidden />
          <FiStar className={styles.icon} />
        </div>

        <div
          ref={shellRef}
          className={`${styles.shell} ${styles["fadeout-horizontal"]}`}
          onMouseEnter={() => (hoverRef.current = true)}
          onMouseLeave={() => (hoverRef.current = false)}
        >
          <div className={styles.track} ref={trackRef}>
            {/* base row */}
            <ul className={styles.row} ref={rowRef} aria-label="Client logos">
              {logos.map(({ name, icon: Icon, href }) => (
                <li key={name} className={styles.item}>
                  <a
                    href={href ?? "#"}
                    className={styles.brandLink}
                    aria-label={name}
                  >
                    <Icon className={styles.brandIcon} aria-hidden />
                    <span className={styles.brandName}>{name}</span>
                  </a>
                </li>
              ))}
            </ul>

            {/* duplicates to cover viewport */}
            {Array.from({ length: Math.max(0, repeat - 1) }).map((_, idx) => (
              <ul className={styles.row} aria-hidden="true" key={`dup-${idx}`}>
                {logos.map(({ name, icon: Icon }) => (
                  <li key={`${name}-dup-${idx}`} className={styles.item}>
                    <div className={styles.brandLink} aria-hidden="true">
                      <Icon className={styles.brandIcon} />
                      <span className={styles.brandName}>{name}</span>
                    </div>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>

        <div className={styles.badges}>
          <Pill>
            <FiClock className={styles.iconSm} />
            ~2h first reply
          </Pill>
          <Pill>
            <FiClipboard className={styles.iconSm} />
            Scoped quote ≤48h
          </Pill>
          <Pill>
            <FiActivity className={styles.iconSm} />
            99.9% delivered uptime
          </Pill>
          <Pill>
            <FiShield className={styles.iconSm} />
            NDA on request
          </Pill>
          <Pill>
            <FiFileText className={styles.iconSm} />
            DPA available
          </Pill>
          <Pill>
            <FiLock className={styles.iconSm} />
            Least-privilege access
          </Pill>
          <Pill>
            <FiKey className={styles.iconSm} />
            Read-only source
          </Pill>
          <Pill>
            <FiSlash className={styles.iconSm} />
            No training reuse
          </Pill>
          <Pill>
            <FiTrash2 className={styles.iconSm} />
            Deletion SLA
          </Pill>
          <Pill>
            <FiZap className={styles.iconSm} />
            WCAG AA + fast INP
          </Pill>
        </div>
      </div>
    </section>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return <span className={styles.badge}>{children}</span>;
}
