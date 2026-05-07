"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/config/site.config";
import Image from "next/image";
import { MapPin, Briefcase, Code2, Zap, Globe } from "lucide-react";

const principles = [
  {
    icon: "🎯",
    title: "Problem-first thinking",
    description:
      "Every feature I build starts with understanding the real problem. Code is a means, not the end.",
  },
  {
    icon: "🏗️",
    title: "Architecture before code",
    description:
      "Design the system before writing a line. The best bugs are the ones you never write.",
  },
  {
    icon: "📈",
    title: "Scalability by default",
    description:
      "I build systems that can handle 10x growth without a full rewrite. It costs the same to do it right.",
  },
  {
    icon: "🤝",
    title: "Clear communication",
    description:
      "Daily updates, no surprises. I treat clients as partners, not as ticket-issuers.",
  },
];

const highlights = [
  { icon: <Briefcase className="w-4 h-4" />, text: "4+ years in full-stack development" },
  { icon: <Code2 className="w-4 h-4" />, text: "15+ production SaaS platforms shipped" },
  { icon: <Zap className="w-4 h-4" />, text: "Expert in Next.js, Node.js, Go & AI" },
  { icon: <Globe className="w-4 h-4" />, text: "Working with global clients remotely" },
];

export function AboutSection() {
  return (
    <section id="about" className="relative w-full py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-0 w-72 h-72 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-72 h-72 rounded-full bg-violet-500/5 blur-3xl" />
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
              About Me
            </span>
            <div className="min-w-0">
              <h2 className="text-3xl md:text-5xl font-black text-foreground mb-4">
                The engineer behind
                <br />
                <span className="bg-gradient-to-r from-primary to-violet-500 bg-clip-text text-transparent">
                  the systems
                </span>
              </h2>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image + highlights */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center lg:items-start gap-8"
          >
            {/* Profile image */}
            <div className="relative">
              <div className="relative w-56 h-64 rounded-2xl overflow-hidden border-2 border-white/10 shadow-2xl">
                <Image
                  src={siteConfig.author_full_img}
                  alt={`${siteConfig.author} — Full Stack Developer`}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {/* Floating card */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -right-4 rounded-xl border border-white/10 bg-background/90 backdrop-blur-xl px-4 py-3 shadow-xl"
              >
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-semibold text-foreground">
                    Open to projects
                  </span>
                </div>
                <div className="flex items-center gap-1 mt-1 text-xs text-muted-foreground">
                  <MapPin className="w-3 h-3" />
                  Bangalore, India · Remote
                </div>
              </motion.div>
            </div>

            {/* Highlights */}
            <div className="w-full space-y-3">
              {highlights.map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-foreground/80"
                >
                  <span className="text-primary">{h.icon}</span>
                  {h.text}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Story + principles */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p className="text-lg">
                I&apos;m{" "}
                <span className="font-semibold text-foreground">Babu Angi</span>
                , a Full Stack Engineer based in Bangalore, India. I specialize
                in building <span className="text-primary font-medium">scalable SaaS platforms</span>,{" "}
                <span className="text-primary font-medium">AI-powered systems</span>, and{" "}
                <span className="text-primary font-medium">complex backend architectures</span> that
                go into production and actually work.
              </p>
              <p>
                Over 4+ years, I&apos;ve built everything from multi-tenant enterprise
                software to RAG pipelines to real-time hospitality systems. I
                don&apos;t just write code — I design systems that handle growth,
                failure, and change gracefully.
              </p>
              <p>
                My philosophy: understand the problem deeply first, design the
                architecture second, then write clean, maintainable code that a
                team can own for years. Speed is important, but{" "}
                <span className="text-foreground font-medium">
                  correctness is non-negotiable
                </span>
                .
              </p>
            </div>

            {/* Principles */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                Engineering Principles
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {principles.map((p, i) => (
                  <motion.div
                    key={p.title}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="rounded-xl border border-white/10 bg-white/5 p-4 hover:border-white/20 hover:bg-white/8 transition-all duration-300"
                  >
                    <div className="text-xl mb-2">{p.icon}</div>
                    <div className="text-sm font-semibold text-foreground mb-1">
                      {p.title}
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {p.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
