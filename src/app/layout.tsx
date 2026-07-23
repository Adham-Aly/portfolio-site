import type { Metadata } from "next";
import { Libre_Baskerville } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
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
  title: {
    default: siteConfig.name,
    template: `%s · ${siteConfig.name}`,
  },
  description: siteConfig.description,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  keywords: [
    "Adham Aly",
    "AI Engineer",
    "Machine Learning",
    "Computer Science",
    "University of Toronto",
    "Open Source",
  ],
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
