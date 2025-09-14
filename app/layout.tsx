import type { Metadata } from "next";
import { Sen } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/shared/header";
import Footer from "@/components/shared/footer";

const sen = Sen({
  variable: "--font-sen",
  subsets: ["latin"],
  display: "swap",
});

const mooxy = localFont({
  src: "../public/fonts/mooxy.ttf",
  variable: "--font-mooxy",
  display: "swap",
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.p-diamond-domain.com"
  ),
  title: {
    default: "Specialist Software Engineering PDiamond",
    template: "%s — PDiamond",
  },
  description:
    "Contract‑based teams for Web & Mobile, Cyber Security, DevOps, Embedded Systems, and AI/ML. Fast discovery. Quote in under 48 hours. Build with specialists, bill by the hour.",
  openGraph: {
    type: "website",
    siteName: "PDiamond",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.p-diamond-domain.com",
    images: "/svg/p-diamond-og-image.svg",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@p_diamond",
    site: "@p_diamond",
    images: "/svg/p-diamond-og-image.svg",
  },
  icons: { icon: "/svg/p-diamond-icon-logo.svg" },
  alternates: { canonical: "/" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="alternate icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/svg/p-diamond-icon-logo.svg" />
        <link
          rel="mask-icon"
          href="/svg/p-diamond-icon-logo.svg"
          color="#0b1a3a"
        />
        <meta property="og:image" content="/svg/p-diamond-og-image.svg" />
        <meta name="twitter:image" content="/svg/p-diamond-og-image.svg" />
      </head>
      <body
        className={`${sen.variable} ${mooxy.variable} antialiased min-h-screen flex flex-col bg-navy-900 text-white`}
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
