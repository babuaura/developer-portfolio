import { Suspense } from "react";
import { ProjectsGrid } from "@/components/sections/projects-grid";
import { ProjectsHeader } from "@/components/sections/projects-header";
import { buildMetadata, siteConfig } from "@/config/site.config";

export const metadata = buildMetadata({
  title: `Projects | ${siteConfig.siteName}`,
  description:
    "Explore production-grade SaaS, AI, dashboard, and backend architecture projects built by Babu Angi.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <div className="min-h-screen py-16">
      <div className="mx-auto max-w-7xl px-6 pt-5">
        <ProjectsHeader />
        <Suspense fallback={<ProjectsLoading />}>
          <ProjectsGrid />
        </Suspense>
      </div>
    </div>
  );
}

function ProjectsLoading() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="h-64 bg-muted/30 rounded-lg animate-pulse" />
      ))}
    </div>
  );
}
