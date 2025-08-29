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
    "bg-white !text-black hover:bg-white/80 hover:!text-black focus-visible:ring-brand font-semibold",
  secondary:
    "font-semibold border border-white/30 bg-white/10 hover:bg-white/15 text-white",
  ghost:
    "bg-transparent text-foreground border border-border hover:bg-muted focus-visible:ring-brand",
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
