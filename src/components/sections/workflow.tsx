"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// -----------------------------------------------------------------------------
// WORKFLOW STEPS
// -----------------------------------------------------------------------------
const steps = [
  {
    number: "01",
    icon: "🎯",
    title: "Requirement Analysis",
    description:
      "Deep-dive into business goals, user needs, and technical constraints. Define success metrics before writing a single line of code.",
    details: [
      "Stakeholder interviews & problem mapping",
      "Technical feasibility assessment",
      "Scope definition & project breakdown",
      "Risk identification & mitigation",
    ],
    color: "#3B82F6",
    duration: "Day 1–2",
  },
  {
    number: "02",
    icon: "🏗️",
    title: "Architecture Design",
    description:
      "Design the system from the ground up. Choose the right tools, define data models, and plan for scale before development begins.",
    details: [
      "System architecture diagram",
      "Database schema design",
      "API contract definition",
      "Tech stack selection",
    ],
    color: "#8B5CF6",
    duration: "Day 2–4",
  },
  {
    number: "03",
    icon: "⚡",
    title: "Development",
    description:
      "Iterative, test-driven development with regular demos. Clean code, proper naming, and documentation from day one.",
    details: [
      "Feature-by-feature implementation",
      "Code reviews & quality gates",
      "Unit & integration testing",
      "Weekly progress demos",
    ],
    color: "#10B981",
    duration: "Week 1–4",
  },
  {
    number: "04",
    icon: "🚀",
    title: "Deployment",
    description:
      "Production-grade deployment with CI/CD pipelines, monitoring, and zero-downtime releases. You go live with confidence.",
    details: [
      "CI/CD pipeline setup",
      "Environment configuration",
      "Performance testing",
      "Monitoring & alerting setup",
    ],
    color: "#F59E0B",
    duration: "Week 4–5",
  },
  {
    number: "05",
    icon: "📈",
    title: "Scaling & Support",
    description:
      "Post-launch optimization, performance monitoring, and ongoing support. Your system grows with your business.",
    details: [
      "Performance monitoring",
      "Bottleneck identification",
      "Feature iterations",
      "Technical documentation",
    ],
    color: "#F43F5E",
    duration: "Ongoing",
  },
];

// -----------------------------------------------------------------------------
// STEP COMPONENT
// -----------------------------------------------------------------------------
function WorkflowStep({
  step,
  index,
  isLast,
}: {
  step: (typeof steps)[0];
  index: number;
  isLast: boolean;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className="relative flex gap-6 md:gap-8">
      {/* Left: number + line */}
      <div className="flex flex-col items-center flex-shrink-0">
        {/* Number circle */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: index * 0.15 }}
          className="relative z-10 w-12 h-12 rounded-full border-2 flex items-center justify-center text-sm font-black"
          style={{
            borderColor: step.color,
            backgroundColor: `${step.color}15`,
            color: step.color,
          }}
        >
          {step.number}
        </motion.div>

        {/* Connecting line */}
        {!isLast && (
          <motion.div
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 0.6, delay: index * 0.15 + 0.3 }}
            className="w-px flex-1 mt-2 origin-top"
            style={{
              background: `linear-gradient(to bottom, ${step.color}60, ${steps[index + 1].color}30)`,
              minHeight: "60px",
            }}
          />
        )}
      </div>

      {/* Right: content */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5, delay: index * 0.15 + 0.1 }}
        className={`pb-10 flex-1 ${isLast ? "" : ""}`}
      >
        <div
          className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium mb-3"
          style={{
            backgroundColor: `${step.color}15`,
            color: step.color,
          }}
        >
          <span>{step.icon}</span>
          {step.duration}
        </div>

        <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
        <p className="text-muted-foreground leading-relaxed mb-4 text-sm">
          {step.description}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {step.details.map((detail) => (
            <div key={detail} className="flex items-center gap-2 text-xs text-foreground/70">
              <div
                className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                style={{ backgroundColor: step.color }}
              />
              {detail}
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

// -----------------------------------------------------------------------------
// WORKFLOW SECTION
// -----------------------------------------------------------------------------
export function WorkflowSection() {
  return (
    <section id="process" className="relative w-full py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-0 w-64 h-64 rounded-full bg-violet-500/5 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-64 h-64 rounded-full bg-emerald-500/5 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Header */}
          <div className="lg:sticky lg:top-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="mb-6 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-primary/80">
                <span className="h-px w-10 bg-primary/70" />
                How I Work
              </span>
              <h2 className="text-3xl md:text-5xl font-black text-foreground mb-6">
                A process built
                <br />
                for{" "}
                <span className="bg-gradient-to-r from-primary to-violet-500 bg-clip-text text-transparent">
                  real results
                </span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                No guesswork. No scope creep. A battle-tested process that
                delivers production-ready software on time.
              </p>

              {/* Quick stats */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: "⚡", label: "Fast Delivery", value: "2–6 weeks" },
                  { icon: "🎯", label: "On-time Rate", value: "95%+" },
                  { icon: "💬", label: "Communication", value: "Daily updates" },
                  { icon: "✅", label: "Quality Gate", value: "Code reviews" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-xl border border-white/10 bg-white/5 p-4"
                  >
                    <div className="text-xl mb-1">{stat.icon}</div>
                    <div className="text-sm font-semibold text-foreground">
                      {stat.value}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: Timeline */}
          <div>
            {steps.map((step, i) => (
              <WorkflowStep
                key={step.number}
                step={step}
                index={i}
                isLast={i === steps.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
