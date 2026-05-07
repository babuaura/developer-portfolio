"use client";

import type { ReactNode } from "react";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useEffect, useState } from "react";
import { Activity, Code2, Network, Rocket } from "lucide-react";

// -----------------------------------------------------------------------------
// ANIMATED COUNTER HOOK
// -----------------------------------------------------------------------------
function useCounter(target: number, duration = 2000, inView = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target, duration]);

  return count;
}

// -----------------------------------------------------------------------------
// STAT CARD COMPONENT
// -----------------------------------------------------------------------------
interface StatCardProps {
  number: number;
  suffix: string;
  label: string;
  description: string;
  icon: ReactNode;
  delay: number;
  inView: boolean;
  gradient: string;
}

function StatCard({
  number,
  suffix,
  label,
  description,
  icon,
  delay,
  inView,
  gradient,
}: StatCardProps) {
  const count = useCounter(number, 2000, inView);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="group relative"
    >
      <div
        className={`relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br ${gradient} 
        backdrop-blur-xl p-6 text-center transition-all duration-500 
        hover:border-white/20 hover:shadow-2xl hover:-translate-y-1`}
      >
        {/* Glow orb */}
        <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-white/5 blur-xl group-hover:bg-white/10 transition-all duration-500" />

        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-primary shadow-lg">
          {icon}
        </div>
        <div className="text-4xl md:text-5xl font-black text-foreground mb-1">
          {count}
          {suffix}
        </div>
        <div className="text-sm font-semibold text-primary mb-1">{label}</div>
        <div className="text-xs text-muted-foreground leading-relaxed">
          {description}
        </div>
      </div>
    </motion.div>
  );
}

// -----------------------------------------------------------------------------
// CLIENT LOGO CARD
// -----------------------------------------------------------------------------
interface ClientProps {
  name: string;
  type: string;
  initials: string;
  color: string;
}

function ClientCard({ name, type, initials, color }: ClientProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -2 }}
      className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm px-4 py-3 hover:border-white/20 transition-all duration-300"
    >
      <div
        className="w-9 h-9 rounded-lg flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
        style={{ backgroundColor: color }}
      >
        {initials}
      </div>
      <div>
        <div className="text-sm font-semibold text-foreground">{name}</div>
        <div className="text-xs text-muted-foreground">{type}</div>
      </div>
    </motion.div>
  );
}

// -----------------------------------------------------------------------------
// TRUST STATS SECTION
// -----------------------------------------------------------------------------
export function TrustStatsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    {
      number: 15,
      suffix: "+",
      label: "Projects Delivered",
      description: "Production SaaS apps shipped to real clients",
      icon: <Rocket className="h-5 w-5" />,
      gradient: "from-blue-500/10 to-violet-500/10",
    },
    {
      number: 8,
      suffix: "+",
      label: "Systems Built",
      description: "End-to-end platform architectures designed & deployed",
      icon: <Network className="h-5 w-5" />,
      gradient: "from-violet-500/10 to-fuchsia-500/10",
    },
    {
      number: 50,
      suffix: "+",
      label: "APIs Developed",
      description: "REST & gRPC APIs powering production systems",
      icon: <Code2 className="h-5 w-5" />,
      gradient: "from-emerald-500/10 to-teal-500/10",
    },
    {
      number: 99,
      suffix: "%",
      label: "Uptime Average",
      description: "Reliability across all production deployments",
      icon: <Activity className="h-5 w-5" />,
      gradient: "from-amber-500/10 to-orange-500/10",
    },
  ];

  const clients: ClientProps[] = [
    {
      name: "Kahaani Box",
      type: "Media & Content SaaS",
      initials: "KB",
      color: "#F59E0B",
    },
    {
      name: "FinTech Startup",
      type: "Financial Platform",
      initials: "FT",
      color: "#10B981",
    },
    {
      name: "Hotel Chain",
      type: "Hospitality Tech",
      initials: "HC",
      color: "#F43F5E",
    },
    {
      name: "SaaS Platform",
      type: "Enterprise Software",
      initials: "SP",
      color: "#3B82F6",
    },
    {
      name: "AI Startup",
      type: "LLM Products",
      initials: "AI",
      color: "#8B5CF6",
    },
    {
      name: "E-commerce",
      type: "Online Retail",
      initials: "EC",
      color: "#06B6D4",
    },
  ];

  return (
    <section className="relative w-full py-10 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-violet-500/5 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 text-center md:flex-row md:items-start md:justify-center md:text-left">
            <span className="inline-flex shrink-0 items-center justify-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-primary/80 md:mt-4">
              <span className="h-px w-8 bg-primary/70 md:w-10" />
              Real Work. Real Impact.
            </span>
            <div className="min-w-0">
              <h2 className="text-3xl md:text-4xl font-black text-foreground">
                Numbers that speak for themselves
              </h2>
              <p className="mt-3 max-w-xl text-muted-foreground">
                Years of building production systems across industries - from AI to
                FinTech to hospitality.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {stats.map((stat, i) => (
            <StatCard
              key={stat.label}
              {...stat}
              delay={i * 0.1}
              inView={inView}
            />
          ))}
        </div>

        {/* Clients */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center"
        >
          <p className="text-sm text-muted-foreground mb-6 uppercase tracking-widest font-medium">
            Trusted by clients across industries
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {clients.map((client) => (
              <ClientCard key={client.name} {...client} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
