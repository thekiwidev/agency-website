// Purpose: shared Button component with brand styles.
import * as React from "react";
import Link from "next/link";

type Variant = "primary" | "secondary" | "ghost";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean;
  href?: string;
  variant?: Variant;
  size?: "sm" | "md" | "lg";
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
};

const base =
  "inline-flex items-center justify-center rounded-xl font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";
const sizes = {
  sm: "h-9 px-3 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-base",
};
const variants = {
  primary:
    "bg-[var(--color-brand)] text-white hover:bg-[color-mix(in_oklch,var(--color-brand),black_10%)] focus-visible:ring-[var(--color-brand)]",
  secondary:
    "bg-foreground text-background hover:opacity-90 focus-visible:ring-foreground",
  ghost:
    "bg-transparent text-foreground border border-[var(--color-border)] hover:bg-[var(--color-muted)] focus-visible:ring-[var(--color-brand)]",
};

export function Button({
  asChild,
  href,
  variant = "primary",
  size = "md",
  className = "",
  children,
  leadingIcon,
  trailingIcon,
  ...props
}: ButtonProps) {
  const cls = `${base} ${sizes[size]} ${variants[variant]} ${className}`;
  if (asChild && href)
    return (
      <Link href={href} className={cls}>
        {leadingIcon ? (
          <span className="mr-2 inline-flex">{leadingIcon}</span>
        ) : null}
        {children}
        {trailingIcon ? (
          <span className="ml-2 inline-flex">{trailingIcon}</span>
        ) : null}
      </Link>
    );
  return (
    <button className={cls} {...props}>
      {leadingIcon ? (
        <span className="mr-2 inline-flex">{leadingIcon}</span>
      ) : null}
      {children}
      {trailingIcon ? (
        <span className="ml-2 inline-flex">{trailingIcon}</span>
      ) : null}
    </button>
  );
}
