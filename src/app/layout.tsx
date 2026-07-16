import type { Metadata } from "next";
import { Libre_Baskerville } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
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
        <div className="mx-auto w-full max-w-[52rem] px-6 pt-16 pb-24 sm:px-8 sm:pt-24">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-0">
            <Nav />
            <div className="min-w-0 flex-1 sm:pl-10">
              <main>{children}</main>
              <Footer />
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
