"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { featuredProjects, type Project } from "@/data/projects";
import {
  X,
  ArrowRight,
  ExternalLink,
  BrainCircuit,
  BookOpenCheck,
  ReceiptText,
  Network,
  Hotel,
  Hospital,
  UsersRound,
  PanelsTopLeft,
  BriefcaseBusiness,
  Wind,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

const projectIconMap = {
  AI: BrainCircuit,
  KB: BookOpenCheck,
  FN: ReceiptText,
  SA: Network,
  HT: Hotel,
  HP: Hospital,
  HR: UsersRound,
  WS: PanelsTopLeft,
  "79": BriefcaseBusiness,
  AG: Wind,
};

function ProjectIcon({
  project,
  size = "md",
}: {
  project: Project;
  size?: "md" | "lg";
}) {
  const Icon =
    projectIconMap[project.icon as keyof typeof projectIconMap] ??
    BriefcaseBusiness;
  const boxSize = size === "lg" ? "h-14 w-14 rounded-2xl" : "h-12 w-12 rounded-2xl";
  const iconSize = size === "lg" ? "h-6 w-6" : "h-5 w-5";

  return (
    <span
      className={`relative flex shrink-0 items-center justify-center overflow-hidden border border-white/10 shadow-lg ${boxSize}`}
      style={{
        background: `linear-gradient(135deg, ${project.accentColor}35, ${project.accentColor}12)`,
        boxShadow: `0 16px 42px ${project.accentColor}20`,
      }}
    >
      <span
        className="absolute inset-0 opacity-70"
        style={{
          background: `radial-gradient(circle at 30% 20%, ${project.accentColor}55, transparent 52%)`,
        }}
      />
      <Icon
        className={`relative ${iconSize}`}
        style={{ color: project.accentColor }}
        strokeWidth={2.2}
      />
      <span className="absolute bottom-1 right-1 rounded bg-black/30 px-1 text-[8px] font-black tracking-wide text-white/75">
        {project.icon}
      </span>
    </span>
  );
}

// -----------------------------------------------------------------------------
// PROJECT MODAL
// -----------------------------------------------------------------------------
function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  useEffect(() => {
    const scrollY = window.scrollY;
    const previousBodyStyle = {
      position: document.body.style.position,
      top: document.body.style.top,
      width: document.body.style.width,
      overflow: document.body.style.overflow,
    };

    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = "100%";
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.position = previousBodyStyle.position;
      document.body.style.top = previousBodyStyle.top;
      document.body.style.width = previousBodyStyle.width;
      document.body.style.overflow = previousBodyStyle.overflow;
      window.scrollTo(0, scrollY);
    };
  }, [onClose]);

  return (
    <motion.div
      key={project.id}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[1000] flex items-center justify-center overflow-hidden bg-black/85 p-3 backdrop-blur-md sm:p-5"
      onClick={onClose}
      role="presentation"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="relative flex max-h-[calc(100dvh-1.5rem)] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-white/10 bg-background/95 shadow-2xl shadow-black/50 backdrop-blur-xl sm:max-h-[calc(100dvh-2.5rem)]"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
      >
          <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain">
          {/* Header */}
          <div
            className={`relative z-10 border-b border-white/10 bg-gradient-to-br ${project.gradient} p-5 pb-6 sm:p-7 lg:sticky lg:top-0`}
          >
            <button
              onClick={onClose}
              className="absolute right-4 top-4 z-20 rounded-full border border-white/10 bg-background/50 p-2 text-foreground shadow-sm backdrop-blur-md transition-colors hover:bg-background/70 sm:right-5 sm:top-5"
              aria-label="Close project case study"
            >
              <X className="w-4 h-4" />
            </button>
            <div className="mb-5 flex flex-col gap-4 pr-12 sm:flex-row sm:items-start sm:gap-4 sm:pr-14">
              <ProjectIcon project={project} size="lg" />
              <div className="min-w-0 flex-1">
                <div className="mb-1 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-white/10 text-foreground">
                    {project.category}
                  </span>
                  <span
                    className="text-xs font-medium px-2 py-0.5 rounded-full text-white"
                    style={{ backgroundColor: project.accentColor }}
                  >
                    {project.status}
                  </span>
                </div>
                <h2
                  id="project-modal-title"
                  className="max-w-3xl text-2xl font-black leading-tight text-foreground sm:text-3xl"
                >
                  {project.title}
                </h2>
                <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {project.tagline}
                </p>
              </div>
            </div>

            {/* Metrics */}
            {project.metrics && (
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {project.metrics.map((m) => (
                  <div
                    key={m.label}
                    className="rounded-xl bg-white/10 p-3 text-center"
                  >
                    <div className="text-lg font-black leading-none text-foreground sm:text-xl">
                      {m.value}
                    </div>
                    <div className="mt-1 text-xs text-muted-foreground">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Body */}
          <div className="space-y-6 p-5 sm:p-6">
            {/* Problem */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-2 flex items-center gap-2">
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: "#EF4444" }}
                />
                The Problem
              </h3>
              <p className="text-foreground/80 leading-relaxed">
                {project.problem}
              </p>
            </div>

            {/* Solution */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-2 flex items-center gap-2">
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: project.accentColor }}
                />
                The Solution
              </h3>
              <p className="text-foreground/80 leading-relaxed">
                {project.solution}
              </p>
            </div>

            {/* Architecture */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3 flex items-center gap-2">
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: "#3B82F6" }}
                />
                Architecture Highlights
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.architectureHighlights.map((highlight) => (
                  <div
                    key={highlight.title}
                    className="rounded-xl border border-white/10 bg-white/5 p-4 shadow-sm"
                  >
                    <div
                      className="text-sm font-semibold mb-1"
                      style={{ color: project.accentColor }}
                    >
                      {highlight.title}
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {highlight.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3 flex items-center gap-2">
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: "#8B5CF6" }}
                />
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech.name}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-foreground"
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ backgroundColor: tech.color }}
                    />
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Outcomes */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3 flex items-center gap-2">
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: "#10B981" }}
                />
                Outcomes & Impact
              </h3>
              <ul className="space-y-2">
                {project.outcome.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-foreground/80"
                  >
                    <span className="mt-0.5 flex-shrink-0 font-bold text-emerald-500">
                      +
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          </div>
      </motion.div>
    </motion.div>
  );
}

// -----------------------------------------------------------------------------
// PROJECT CARD
// -----------------------------------------------------------------------------
function ProjectCard({
  project,
  index,
  onOpen,
}: {
  project: Project;
  index: number;
  onOpen: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
    >
      <div
        className={`relative flex h-full min-h-[452px] cursor-pointer flex-col overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br ${project.gradient} p-6 shadow-[0_20px_60px_rgba(0,0,0,0.14)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-white/20 hover:shadow-2xl`}
        onClick={onOpen}
      >
        {/* Animated glow border on hover */}
        <div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `radial-gradient(circle at top right, ${project.accentColor}20, transparent 60%)`,
          }}
        />

        {/* Header */}
        <div className="relative mb-5 flex items-start justify-between">
          <div className="flex min-w-0 items-center gap-3">
            <ProjectIcon project={project} />
            <div className="min-w-0">
              <span className="block truncate text-xs font-semibold text-muted-foreground">
                {project.category}
              </span>
              <Badge
                className="mt-1 rounded-full px-2 py-0 text-[10px] font-bold uppercase tracking-wide"
                style={{
                  backgroundColor: `${project.accentColor}22`,
                  color: project.accentColor,
                  border: `1px solid ${project.accentColor}40`,
                }}
              >
                {project.status}
              </Badge>
            </div>
          </div>
          <ExternalLink
            className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity"
            style={{ color: project.accentColor }}
          />
        </div>

        {/* Title */}
        <h3 className="relative mb-2 min-h-[3.25rem] text-xl font-black leading-snug text-foreground transition-colors group-hover:text-primary">
          {project.title}
        </h3>
        <p className="relative mb-5 min-h-[3rem] text-sm leading-relaxed text-muted-foreground">
          {project.tagline}
        </p>

        {/* Metrics */}
        {project.metrics && (
          <div className="relative mb-5 grid grid-cols-2 gap-2">
            {project.metrics.slice(0, 4).map((m) => (
              <div
                key={m.label}
                className="rounded-xl border border-white/[0.08] bg-white/[0.07] p-2.5 text-center"
              >
                <div
                  className="text-sm font-black"
                  style={{ color: project.accentColor }}
                >
                  {m.value}
                </div>
                <div className="text-xs text-muted-foreground">{m.label}</div>
              </div>
            ))}
          </div>
        )}

        {/* Tech tags */}
        <div className="relative mb-5 flex flex-wrap gap-1.5">
          {project.techStack.slice(0, 4).map((tech) => (
            <span
              key={tech.name}
              className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-black/10 px-2.5 py-1 text-xs text-muted-foreground"
            >
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ backgroundColor: tech.color }}
              />
              {tech.name}
            </span>
          ))}
          {project.techStack.length > 4 && (
            <span className="rounded-full border border-white/10 bg-black/10 px-2.5 py-1 text-xs text-muted-foreground">
              +{project.techStack.length - 4} more
            </span>
          )}
        </div>

        {/* CTA */}
        <button
          className="relative mt-auto flex items-center gap-2 text-sm font-bold group/btn"
          style={{ color: project.accentColor }}
        >
          View Case Study
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
        </button>
      </div>
    </motion.div>
  );
}

// -----------------------------------------------------------------------------
// FEATURED PROJECTS SECTION
// -----------------------------------------------------------------------------
export function FeaturedProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="relative w-full py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-0 w-80 h-80 rounded-full bg-violet-500/5 blur-3xl" />
        <div className="absolute bottom-1/3 right-0 w-80 h-80 rounded-full bg-blue-500/5 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 text-center md:flex-row md:items-start md:justify-center md:text-left">
            <span className="inline-flex shrink-0 items-center justify-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-primary/80 md:mt-4">
              <span className="h-px w-8 bg-primary/70 md:w-10" />
              Featured Work
            </span>
            <div className="min-w-0">
              <h2 className="text-3xl md:text-5xl font-black text-foreground mb-4">
                Production-grade systems
                <br />
                <span className="bg-gradient-to-r from-primary to-violet-500 bg-clip-text text-transparent">
                  built to scale
                </span>
              </h2>
              <p className="text-muted-foreground max-w-2xl text-lg">
                Not tutorial projects. Real SaaS platforms with real users, real
                architectures, and real business impact.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {featuredProjects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              onOpen={() => setSelectedProject(project)}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-12"
        >
          <a
            href="/projects"
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 px-6 py-3 text-sm font-medium text-foreground transition-all duration-300 hover:border-white/20"
          >
            View all projects on GitHub
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            key={selectedProject.id}
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
