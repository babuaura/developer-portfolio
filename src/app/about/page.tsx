import { AboutHeader } from "@/components/sections/about-header";
import { AboutContent } from "@/components/sections/about-content";
import { buildMetadata, siteConfig } from "@/config/site.config";

export const metadata = buildMetadata({
  title: `About | ${siteConfig.siteName}`,
  description: siteConfig.about,
  path: "/about",
});

export default function AboutPage() {
  return (
    <div className="min-h-screen py-16">
      <div className="mx-auto max-w-4xl px-6 pt-5">
        <AboutHeader />
        <AboutContent />
      </div>
    </div>
  );
}
