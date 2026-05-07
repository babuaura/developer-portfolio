"use client";

import { HeroSection } from "@/components/sections/hero";
import { TrustStatsSection } from "@/components/sections/trust-stats";
import { FeaturedProjectsSection } from "@/components/sections/featured-projects";
import { ArchitectureSection } from "@/components/sections/architecture";
import { ServicesSection } from "@/components/sections/services";
import { TechStackSection } from "@/components/sections/tech-stack";
import { WorkflowSection } from "@/components/sections/workflow";
import { AboutSection } from "@/components/sections/about-section";
import { ContactSection } from "@/components/sections/contact-section";

// -----------------------------------------------------------------------------
// SECTION DIVIDER
// -----------------------------------------------------------------------------
function SectionDivider() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </div>
  );
}

// -----------------------------------------------------------------------------
// HOMEPAGE - Long scroll landing page
// -----------------------------------------------------------------------------
export default function Home() {
  return (
    <main className="w-full overflow-x-hidden">
      {/* 1. Hero */}
      <HeroSection />

      <SectionDivider />

      {/* 2. Trust / Proof */}
      <TrustStatsSection />

      <SectionDivider />

      {/* 3. Featured Projects */}
      <FeaturedProjectsSection />

      <SectionDivider />

      {/* 4. Architecture Thinking */}
      <ArchitectureSection />

      <SectionDivider />

      {/* 5. Services */}
      <ServicesSection />

      <SectionDivider />

      {/* 6. Tech Stack */}
      <TechStackSection />

      <SectionDivider />

      {/* 7. Workflow / Process */}
      <WorkflowSection />

      <SectionDivider />

      {/* 8. About */}
      <AboutSection />

      <SectionDivider />

      {/* 9. Contact */}
      <ContactSection />
    </main>
  );
}
