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
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.agency-domain.com"
  ),
  title: {
    default: "Specialist Software Engineering Agency",
    template: "%s — Agency",
  },
  description:
    "Contract‑based teams for Web & Mobile, Cyber Security, DevOps, Embedded Systems, and AI/ML. Fast discovery. Quote in under 48 hours. Build with specialists, bill by the hour.",
  openGraph: {
    type: "website",
    siteName: "Agency",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.agency-domain.com",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@agency",
    site: "@agency",
  },
  icons: { icon: "/favicon.ico" },
  alternates: { canonical: "/" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
