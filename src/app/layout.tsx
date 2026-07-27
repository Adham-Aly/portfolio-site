import type { Metadata, Viewport } from "next";
import { Libre_Baskerville } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { baseOpenGraph, baseTwitter } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

// Libre Baskerville is not a variable font, so weights are specified explicitly.
const libreBaskerville = Libre_Baskerville({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-libre-baskerville",
});

export const metadata: Metadata = {
  // Lets every other route express canonical/og:url as a relative path.
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s · ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "technology",
  keywords: [
    "Adham Aly",
    "AI Engineer",
    "Machine Learning",
    "Automation",
    "Robotics",
    "Computer Science",
    "University of Toronto",
    "Open Source",
    "Software Engineer",
  ],
  // Deliberately no `alternates.canonical` here: canonical URLs are declared
  // per page. A canonical set on the layout would be inherited by every route
  // that forgot to override it, pointing the whole site at the home page.
  openGraph: {
    ...baseOpenGraph,
    type: "website",
    url: "/",
    title: siteConfig.name,
    description: siteConfig.description,
  },
  twitter: {
    ...baseTwitter,
    title: siteConfig.name,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      // Allow full-size image previews and untruncated snippets.
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

// themeColor and colorScheme moved out of `metadata` in Next.js 14.
export const viewport: Viewport = {
  themeColor: "#f4f1e9",
  // The site has no dark mode; saying so stops browsers auto-darkening it.
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${libreBaskerville.variable} h-full`}>
      <body className="min-h-full antialiased">
        <div className="px-6 pt-8 pb-24 sm:px-10 sm:pt-10">
          <Header />
          <main className="mx-auto mt-20 max-w-xl sm:mt-28">{children}</main>
        </div>
      </body>
    </html>
  );
}
