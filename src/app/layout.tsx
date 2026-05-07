import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/themeProvider/theme-provider";
import { buildMetadata, siteConfig } from "@/config/site.config";
import { FooterSection } from "@/components/sections/footer";
import { Navbar } from "@/components/navbar/navbar";
import { PaletteManager } from "@/components/navbar/paletteManager";
import { AmbientBackground } from "@/components/ambient-background";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = buildMetadata();

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
  themeColor: siteConfig.seo.themeColor,
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.author,
  url: siteConfig.links.website,
  image: siteConfig.author_img,
  jobTitle: "Full Stack Developer",
  description: siteConfig.description,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bangalore",
    addressCountry: "IN",
  },
  sameAs: [siteConfig.links.github, siteConfig.links.linkedin],
  knowsAbout: siteConfig.keywords,
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.siteName,
  url: siteConfig.links.website,
  description: siteConfig.description,
  author: {
    "@type": "Person",
    name: siteConfig.author,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-background text-foreground`}
      >
        <ThemeProvider>
          <script
            type="application/ld+json"
            suppressHydrationWarning
            dangerouslySetInnerHTML={{
              __html: JSON.stringify([personJsonLd, websiteJsonLd]),
            }}
          />
          <AmbientBackground />
          <Navbar />
          {children}
          <PaletteManager />
          <FooterSection />
        </ThemeProvider>
      </body>
    </html>
  );
}
