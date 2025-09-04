// components/legal/LegalButton.tsx
import React from "react";
import Link from "next/link";

type LegalButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

export default function LegalButton({
  href,
  children,
  variant = "primary",
  className = "",
}: LegalButtonProps) {
  const baseClasses = "inline-flex items-center justify-center rounded-xl font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none px-5 py-2.5 text-sm";
  
  const variantClasses = {
    primary: "bg-white !text-navy-900 hover:bg-white/90 focus-visible:ring-brand font-semibold",
    secondary: "border border-white/30 bg-white/10 hover:bg-white/15 text-white font-semibold",
  };

  return (
    <Link 
      href={href} 
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}