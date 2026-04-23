import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
});

export const metadata: Metadata = {
  title: "West Warwick Soccer Association",
  description:
    "Youth soccer organization dedicated to developing players in West Warwick, RI and surrounding communities.",
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-light-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  keywords: [
    "soccer",
    "youth soccer",
    "West Warwick",
    "Rhode Island",
    "USYS",
    "recreational soccer",
    "travel soccer",
  ],
  openGraph: {
    title: "West Warwick Soccer Association",
    description:
      "Youth soccer organization dedicated to developing players in West Warwick, RI",
    type: "website",
    images: [{ url: "/wwsa-logo.png", width: 512, height: 512, alt: "West Warwick Soccer Association logo" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${oswald.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === "production" ? <Analytics /> : null}
      </body>
    </html>
  );
}
