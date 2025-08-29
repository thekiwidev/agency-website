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
  title:
    "Specialist Software Engineering, Security, DevOps, Embedded, AI/ML — agency",
  description:
    "Contract‑based teams for Web & Mobile, Cyber Security, DevOps, Embedded Systems, and AI/ML. Fast discovery. Quote in under 48 hours. Build with specialists, bill by the hour.",
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
