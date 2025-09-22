import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/themeProvider/theme-provider";
import { buildMetadata } from "@/config/site.config";
import { FooterSection } from "@/components/sections/footer";
import { Navbar } from "@/components/navbar/navbar";
import { PaletteManager } from "@/components/navbar/paletteManager";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = buildMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen gradient animate-gradient-shift text-foreground`}
      >
        <ThemeProvider>
          <Navbar />
          {children}
          <PaletteManager />
          <FooterSection />
        </ThemeProvider>
      </body>
    </html>
  );
}
