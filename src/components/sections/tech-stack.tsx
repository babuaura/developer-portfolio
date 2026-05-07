"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { techStack, proficiencyColor } from "@/data/stack";
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiFramer,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiGo,
  SiExpress,
  SiGraphql,
  SiPrisma,
  SiPython,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiMysql,
  SiSupabase,
  SiDocker,
  SiGithubactions,
  SiVercel,
  SiNginx,
  SiLinux,
  SiGit,
  SiOpenai,
  SiHuggingface,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { Bot, Code2, Database, ServerCog, Wrench } from "lucide-react";

// -----------------------------------------------------------------------------
// ICON MAP
// -----------------------------------------------------------------------------
const iconMap: Record<string, React.ReactNode> = {
  SiNextdotjs: <SiNextdotjs />,
  SiReact: <SiReact />,
  SiTypescript: <SiTypescript />,
  SiTailwindcss: <SiTailwindcss />,
  SiFramer: <SiFramer />,
  SiJavascript: <SiJavascript />,
  SiHtml5: <SiHtml5 />,
  SiCss3: <SiCss3 />,
  SiNodedotjs: <SiNodedotjs />,
  SiGo: <SiGo />,
  SiExpress: <SiExpress />,
  SiGrpc: <span className="font-bold text-xs">gRPC</span>,
  SiOpenapiinitiative: <span className="font-bold text-xs">REST</span>,
  SiGraphql: <SiGraphql />,
  SiPrisma: <SiPrisma />,
  SiPython: <SiPython />,
  SiPostgresql: <SiPostgresql />,
  SiMongodb: <SiMongodb />,
  SiRedis: <SiRedis />,
  SiMysql: <SiMysql />,
  SiPinecone: <span className="font-bold text-xs">Pine</span>,
  SiSupabase: <SiSupabase />,
  SiDocker: <SiDocker />,
  SiGithubactions: <SiGithubactions />,
  SiVercel: <SiVercel />,
  SiAmazon: <FaAws />,
  SiNginx: <SiNginx />,
  SiLinux: <SiLinux />,
  SiGit: <SiGit />,
  SiOpenai: <SiOpenai />,
  SiLangchain: <span className="font-bold text-xs">LC</span>,
  SiHuggingface: <SiHuggingface />,
  SiAnthropic: <span className="font-bold text-xs">Ant</span>,
  SiOllama: <span className="font-bold text-xs">OLL</span>,
};

const categoryIconMap: Record<string, React.ReactNode> = {
  frontend: <Code2 className="h-3.5 w-3.5" />,
  backend: <ServerCog className="h-3.5 w-3.5" />,
  databases: <Database className="h-3.5 w-3.5" />,
  devops: <Wrench className="h-3.5 w-3.5" />,
  ai: <Bot className="h-3.5 w-3.5" />,
};

// -----------------------------------------------------------------------------
// STACK ITEM CARD
// -----------------------------------------------------------------------------
function StackCard({ item, index }: { item: (typeof techStack)[0]["items"][0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: index * 0.04 }}
      whileHover={{ scale: 1.05, y: -2 }}
      className="group relative flex flex-col items-center gap-2 rounded-xl border border-white/10 bg-white/5 p-4 cursor-default
      hover:border-white/20 hover:bg-white/10 hover:shadow-lg transition-all duration-300"
    >
      {/* Proficiency dot */}
      <div
        className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full"
        style={{ backgroundColor: proficiencyColor[item.proficiency] }}
        title={item.proficiency}
      />

      {/* Icon */}
      <div
        className="text-2xl md:text-3xl transition-all duration-300 group-hover:scale-110"
        style={{ color: item.color === "#000000" ? "var(--foreground)" : item.color }}
      >
        {iconMap[item.icon] || (
          <span className="text-xs font-bold">{item.name.slice(0, 3)}</span>
        )}
      </div>

      {/* Name */}
      <span className="text-[11px] font-medium text-muted-foreground group-hover:text-foreground transition-colors text-center leading-tight">
        {item.name}
      </span>
    </motion.div>
  );
}

// -----------------------------------------------------------------------------
// TECH STACK SECTION
// -----------------------------------------------------------------------------
export function TechStackSection() {
  const [activeTab, setActiveTab] = useState(0);
  const category = techStack[activeTab];

  return (
    <section id="stack" className="relative w-full py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 text-center md:flex-row md:items-start md:justify-center md:text-left">
            <span className="inline-flex shrink-0 items-center justify-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-primary/80 md:mt-4">
              <span className="h-px w-8 bg-primary/70 md:w-10" />
              Technology
            </span>
            <div className="min-w-0">
              <h2 className="text-3xl md:text-5xl font-black text-foreground mb-4">
                The stack I use to build
                <br />
                <span className="bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
                  production systems
                </span>
              </h2>
              <p className="text-muted-foreground max-w-xl">
                Carefully chosen tools that I&apos;ve used in real projects - not just
                side experiments.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {techStack.map((cat, i) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(i)}
              aria-pressed={activeTab === i}
              className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                activeTab === i
                  ? "border border-primary/35 bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                  : "border border-foreground/10 bg-background/45 text-muted-foreground hover:border-primary/25 hover:bg-primary/10 hover:text-foreground"
              }`}
            >
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/10">
                {categoryIconMap[cat.id]}
              </span>
              {cat.label}
            </button>
          ))}
        </div>

        {/* Stack Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3"
          >
            {category.items.map((item, i) => (
              <StackCard key={item.name} item={item} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center gap-6 mt-8"
        >
          {Object.entries(proficiencyColor).map(([level, color]) => (
            <div key={level} className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: color }} />
              {level}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
