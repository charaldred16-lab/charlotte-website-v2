import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Manrope, Newsreader } from "next/font/google";
import "./globals.css";
import "../styles/about.css";
import "../styles/case-study.css";
import { SkipLink } from "@/components/SkipLink";
import { siteConfig } from "@/lib/site";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: "%s | Charlotte Aldred",
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  icons: {
    icon: "/icon.svg",
  },
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Charlotte Aldred — Digital Experience Consultancy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en-GB" className={`${manrope.variable} ${newsreader.variable}`}>
      <body>
        <SkipLink />
        {children}
      </body>
    </html>
  );
}
