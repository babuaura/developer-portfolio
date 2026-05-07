"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/config/site.config";
import Link from "next/link";
import {
  ArrowRight,
  Calendar,
  CheckCircle2,
  Code2,
  Mail,
  MapPin,
} from "lucide-react";
import Image from "next/image";
import {
  SiNextdotjs,
  SiNodedotjs,
  SiGo,
  SiPostgresql,
  SiMongodb,
  SiReact,
} from "react-icons/si";
import Typewriter from "./typewriter";

// -----------------------------------------------------------------------------
// HERO BACKGROUND DETAIL
// -----------------------------------------------------------------------------
function GridBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        className="absolute inset-0 opacity-[0.08] dark:opacity-[0.14]"
        style={{
          backgroundImage:
            "linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-transparent to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background/70" />
    </div>
  );
}

// -----------------------------------------------------------------------------
// TECH BADGE
// -----------------------------------------------------------------------------
function TechBadge({
  icon,
  label,
  color,
}: {
  icon: React.ReactNode;
  label: string;
  color: string;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.08, y: -2 }}
      className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1.5 text-xs font-medium"
    >
      <span className="text-sm" style={{ color }}>
        {icon}
      </span>
      <span className="text-foreground/80">{label}</span>
    </motion.div>
  );
}

const cardMetrics = [
  { value: "4+", label: "Years" },
  { value: "15+", label: "Projects" },
  { value: "50+", label: "APIs" },
];

const techStack = [
  { icon: <SiNextdotjs />, label: "Next.js", color: "#ffffff" },
  { icon: <SiReact />, label: "React", color: "#61DAFB" },
  { icon: <SiNodedotjs />, label: "Node.js", color: "#339933" },
  { icon: <SiGo />, label: "Go", color: "#00ADD8" },
  { icon: <SiPostgresql />, label: "PostgreSQL", color: "#336791" },
  { icon: <SiMongodb />, label: "MongoDB", color: "#47A248" },
];

// -----------------------------------------------------------------------------
// HERO SECTION — UPGRADED
// -----------------------------------------------------------------------------
export function HeroSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="relative flex min-h-screen w-full items-start overflow-hidden pt-[4.5rem] md:pt-[4.75rem]"
    >
      <GridBackground />

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.16fr_0.84fr] xl:grid-cols-[1.22fr_0.78fr]">
          {/* ── Column 1: Content ── */}
          <div className="text-center lg:text-left">
            {/* Availability badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-sm font-medium text-emerald-500 mb-5"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Available for projects
              <span className="text-emerald-500/60">-</span>
              <span className="flex items-center gap-1 text-xs text-emerald-400/80">
                <MapPin className="w-3 h-3" />
                Bangalore, India
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.08] tracking-tight text-foreground mb-5"
            >
              I build{" "}
              <span className="bg-gradient-to-r from-primary via-violet-500 to-blue-500 bg-clip-text text-transparent">
                scalable SaaS
              </span>
              <br />
              platforms, AI systems
              <br />
              &amp; production apps
            </motion.h1>

            {/* Typewriter subheadline */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="text-lg sm:text-xl text-muted-foreground mb-3 font-medium"
            >
              <span>Full Stack Developer - </span>
              <span className="text-primary font-semibold">
                <Typewriter
                  words={[
                    "Next.js Expert",
                    "Go & Node.js",
                    "SaaS Builder",
                    "AI Systems",
                    "System Architect",
                  ]}
                  typingSpeed={80}
                  deletingSpeed={50}
                  delayBetween={1500}
                />
              </span>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8"
            >
              Specializing in multi-tenant SaaS platforms, RAG pipelines, admin
              dashboards, and scalable backend architectures. I ship real
              systems - not demos.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 mb-10"
            >
              {/* Primary: View Work */}
              <a
                href="#projects"
                className="group relative inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/25 hover:bg-primary/90 hover:shadow-primary/40 hover:-translate-y-0.5 transition-all duration-300 w-full sm:w-auto justify-center"
              >
                <Code2 className="w-4 h-4" />
                View My Work
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              {/* Secondary: Book a Call */}
              <Link
                href="/#contact"
                className="group inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 backdrop-blur-sm px-6 py-3 text-sm font-semibold text-foreground hover:border-white/25 hover:bg-white/10 hover:-translate-y-0.5 transition-all duration-300 w-full sm:w-auto justify-center"
              >
                <Calendar className="w-4 h-4" />
                Book a Call
              </Link>

              {/* Resume */}
              <a
                href={siteConfig.pdf_download}
                download="BabuAngi-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors px-2 w-full sm:w-auto justify-center"
              >
                Download CV
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-6 justify-center lg:justify-start"
            >
              {[
                { value: "15+", label: "Projects" },
                { value: "4+", label: "Years" },
                { value: "99%", label: "Uptime" },
                { value: "50+", label: "APIs Built" },
              ].map((stat, i) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-black text-foreground">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {stat.label}
                  </div>
                  {i < 3 && (
                    <div className="hidden sm:block absolute mt-[-1.5rem] ml-[5.5rem] h-8 w-px bg-white/10" />
                  )}
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── Column 2: Profile card ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="mt-6 flex justify-center lg:mt-0 lg:justify-end"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-full max-w-[28rem]"
            >
              <motion.div
                animate={{
                  opacity: [0.35, 0.75, 0.35],
                  scale: [0.98, 1.03, 0.98],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="pointer-events-none absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-primary/35 via-cyan-400/20 to-violet-500/30 blur-2xl"
              />
              <div className="pointer-events-none absolute -right-5 top-10 hidden h-24 w-24 rounded-full border border-cyan-300/20 bg-cyan-300/10 blur-xl sm:block" />
              <div className="pointer-events-none absolute -bottom-6 -left-5 hidden h-28 w-28 rounded-full border border-primary/20 bg-primary/10 blur-xl sm:block" />

              <div className="group relative overflow-hidden rounded-[2rem] border border-white/15 bg-slate-950/82 p-5 shadow-2xl shadow-black/30 backdrop-blur-xl sm:p-6">
                <motion.div
                  aria-hidden="true"
                  animate={{ x: ["-120%", "140%"] }}
                  transition={{
                    duration: 4.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                    repeatDelay: 1.8,
                  }}
                  className="pointer-events-none absolute top-0 h-full w-1/2 rotate-12 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                />
                <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />

                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.20),transparent_38%),radial-gradient(circle_at_100%_25%,rgba(34,211,238,0.13),transparent_28%)]" />

                <div className="relative">
                  <div className="flex flex-col items-center gap-5 text-center sm:flex-row sm:text-left">
                    <div className="relative shrink-0">
                      {/* <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 18,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="absolute -inset-2 rounded-full bg-gradient-to-tr from-primary via-cyan-300 to-violet-500 opacity-70 blur-[1px]"
                      /> */}
                      <div className="relative h-36 w-36 overflow-hidden rounded-full border-2 border-slate-950 bg-slate-900 shadow-2xl shadow-black/40 ring-1 ring-white/25 sm:h-40 sm:w-40">
                        <Image
                          src={siteConfig.author_img}
                          alt={`${siteConfig.author} profile`}
                          width={320}
                          height={320}
                          className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                          priority
                        />
                      </div>
                      <div className="absolute -bottom-1 left-1/2 flex -translate-x-1/2 items-center gap-1.5 rounded-full border border-emerald-400/30 bg-slate-950/95 px-3 py-1.5 text-[11px] font-semibold text-emerald-400 shadow-lg shadow-black/30 backdrop-blur">
                        <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_14px_rgba(52,211,153,0.9)]" />
                        Available
                      </div>
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.24em] text-primary">
                        SaaS Builder
                      </p>
                      <h2 className="text-2xl font-black leading-tight text-foreground sm:text-3xl">
                        {siteConfig.author}
                      </h2>
                      <p className="mx-auto mt-2 max-w-xs text-sm font-medium leading-relaxed text-muted-foreground sm:mx-0">
                        Full Stack Developer & AI Systems Engineer
                      </p>
                      <div className="mt-3 flex items-center justify-center gap-1.5 text-xs text-muted-foreground sm:justify-start">
                        <MapPin className="h-3.5 w-3.5" />
                        Bangalore, India
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 grid w-full grid-cols-3 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.045]">
                    {cardMetrics.map((item) => (
                      <div
                        key={item.label}
                        className="border-r border-white/10 px-2 py-3 text-center last:border-r-0"
                      >
                        <div className="text-lg font-black text-foreground">
                          {item.value}
                        </div>
                        <div className="text-[9px] font-semibold uppercase text-muted-foreground">
                          {item.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative mt-4 rounded-2xl border border-white/10 bg-white/[0.035] p-4">
                  <div className="mb-3 flex items-center justify-between gap-3">
                    <p className="text-[11px] font-semibold uppercase text-muted-foreground">
                      Core Stack
                    </p>
                    <div className="flex items-center gap-1.5 text-[11px] font-medium text-emerald-500">
                      <CheckCircle2 className="h-3 w-3" />
                      Production Ready
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {techStack.map((tech) => (
                      <TechBadge
                        key={tech.label}
                        icon={tech.icon}
                        label={tech.label}
                        color={tech.color}
                      />
                    ))}
                  </div>
                </div>

                <div className="relative mt-3 grid grid-cols-1 gap-2 sm:grid-cols-[1fr_auto]">
                  <Link
                    href="/#contact"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition-colors hover:bg-primary/90"
                  >
                    <Mail className="h-4 w-4" />
                    Get in touch
                  </Link>
                  <a
                    href="#projects"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-white/25 hover:bg-white/10"
                  >
                    Work
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
