"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { services } from "@/data/services";
import {
  ArrowRight,
  Bot,
  CheckCircle2,
  Gauge,
  Network,
  Rocket,
  ServerCog,
} from "lucide-react";
import Link from "next/link";

const serviceIconMap = {
  "saas-development": Rocket,
  "ai-systems": Bot,
  "admin-dashboards": Gauge,
  "backend-api": ServerCog,
  "architecture-consulting": Network,
};

// -----------------------------------------------------------------------------
// SERVICE CARD
// -----------------------------------------------------------------------------
function ServiceCard({ service, index }: { service: (typeof services)[0]; index: number }) {
  const [hovered, setHovered] = useState(false);
  const Icon = serviceIconMap[service.id as keyof typeof serviceIconMap] ?? Rocket;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative h-full"
    >
      <div
        className={`relative h-full overflow-hidden rounded-2xl border transition-all duration-500 p-6 flex flex-col
        ${hovered ? "border-white/20 shadow-2xl -translate-y-1" : "border-white/10"}
        bg-gradient-to-br ${service.gradient} backdrop-blur-xl`}
      >
        {/* Glow effect */}
        <div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse at top left, ${service.accentColor}15, transparent 70%)`,
          }}
        />

        {/* Icon */}
        <div
          className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 shadow-lg"
          style={{
            background: `linear-gradient(135deg, ${service.accentColor}32, ${service.accentColor}12)`,
            boxShadow: `0 16px 42px ${service.accentColor}18`,
          }}
        >
          <Icon className="h-5 w-5" style={{ color: service.accentColor }} />
        </div>

        {/* Title & Description */}
        <h3
          className="text-lg font-bold mb-2 transition-colors"
          style={{ color: hovered ? service.accentColor : undefined }}
        >
          {service.title}
        </h3>
        <p className="text-sm text-muted-foreground mb-5 leading-relaxed flex-1">
          {service.description}
        </p>

        {/* Features */}
        <ul className="space-y-2 mb-6">
          {service.features.map((f) => (
            <li key={f} className="flex items-center gap-2 text-xs text-foreground/80">
              <CheckCircle2
                className="w-3.5 h-3.5 flex-shrink-0"
                style={{ color: service.accentColor }}
              />
              {f}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="mt-auto">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-sm font-medium group/link"
            style={{ color: service.accentColor }}
          >
            Get Started
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
          </Link>
        </div>

        {/* Bottom gradient line */}
        <div
          className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ background: `linear-gradient(to right, transparent, ${service.accentColor}, transparent)` }}
        />
      </div>
    </motion.div>
  );
}

// -----------------------------------------------------------------------------
// SERVICES SECTION
// -----------------------------------------------------------------------------
export function ServicesSection() {
  return (
    <section id="services" className="relative w-full py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-emerald-500/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-blue-500/5 blur-3xl" />
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
              What I Build
            </span>
            <div className="min-w-0">
              <h2 className="text-3xl md:text-5xl font-black text-foreground mb-4">
                Services that deliver
                <br />
                <span className="bg-gradient-to-r from-emerald-500 to-blue-500 bg-clip-text text-transparent">
                  real business value
                </span>
              </h2>
              <p className="text-muted-foreground max-w-2xl text-lg">
                From idea to production. Specializing in complex, high-impact systems
                that actually ship.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
            <div className="text-left">
              <div className="font-semibold text-foreground">
                Not sure what you need?
              </div>
              <div className="text-sm text-muted-foreground">
                Let&apos;s have a 30-minute architecture call — free, no strings
                attached.
              </div>
            </div>
            <Link
              href="/contact"
              className="flex-shrink-0 inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-white hover:bg-primary/90 transition-colors"
            >
              Book a Call
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
