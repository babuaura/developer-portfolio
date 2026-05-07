"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// -----------------------------------------------------------------------------
// ARCHITECTURE DIAGRAMS DATA
// -----------------------------------------------------------------------------
const architecturePatterns = [
  {
    id: "microservices",
    label: "Microservices",
    icon: "🏗️",
    description:
      "Independent services communicating via API Gateway and message queues",
    diagram: MicroservicesDiagram,
  },
  {
    id: "api-gateway",
    label: "API Gateway",
    icon: "🔀",
    description:
      "Centralized gateway handling routing, auth, rate limiting, and load balancing",
    diagram: ApiGatewayDiagram,
  },
  {
    id: "auth",
    label: "Auth / IDP",
    icon: "🔐",
    description:
      "Identity Provider with JWT, refresh tokens, and RBAC across services",
    diagram: AuthDiagram,
  },
  {
    id: "event-driven",
    label: "Event-Driven",
    icon: "⚡",
    description:
      "Async event bus (RabbitMQ/Kafka) for decoupled service communication",
    diagram: EventDrivenDiagram,
  },
];

// -----------------------------------------------------------------------------
// DIAGRAM COMPONENTS (CSS-based SVG-like UI)
// -----------------------------------------------------------------------------

function Node({
  label,
  sub,
  color,
  className = "",
}: {
  label: string;
  sub?: string;
  color: string;
  className?: string;
}) {
  return (
    <div
      className={`flex flex-col items-center justify-center rounded-xl border px-3 py-2.5 text-center min-w-[80px] backdrop-blur-sm ${className}`}
      style={{
        borderColor: `${color}50`,
        backgroundColor: `${color}15`,
      }}
    >
      <span className="text-xs font-bold text-foreground leading-tight">
        {label}
      </span>
      {sub && (
        <span
          className="text-[10px] mt-0.5 font-medium"
          style={{ color: `${color}CC` }}
        >
          {sub}
        </span>
      )}
    </div>
  );
}

function Arrow({
  label,
  vertical = false,
  color = "#6B7280",
}: {
  label?: string;
  vertical?: boolean;
  color?: string;
}) {
  if (vertical) {
    return (
      <div className="flex flex-col items-center gap-0.5 my-0.5">
        {label && (
          <span className="text-[9px] text-muted-foreground font-medium">
            {label}
          </span>
        )}
        <div className="w-px h-5 border-l-2 border-dashed" style={{ borderColor: `${color}60` }} />
        <div
          className="w-0 h-0"
          style={{
            borderLeft: "5px solid transparent",
            borderRight: "5px solid transparent",
            borderTop: `6px solid ${color}60`,
          }}
        />
      </div>
    );
  }
  return (
    <div className="flex items-center gap-0.5 mx-0.5">
      <div className="h-px w-5 border-t-2 border-dashed" style={{ borderColor: `${color}60` }} />
      {label && (
        <span className="text-[9px] text-muted-foreground font-medium whitespace-nowrap">
          {label}
        </span>
      )}
      <div
        className="w-0 h-0 flex-shrink-0"
        style={{
          borderTop: "5px solid transparent",
          borderBottom: "5px solid transparent",
          borderLeft: `6px solid ${color}60`,
        }}
      />
    </div>
  );
}

function MicroservicesDiagram() {
  return (
    <div className="flex flex-col items-center gap-2 py-4 select-none">
      {/* Client */}
      <Node label="Client" sub="Browser / Mobile" color="#6B7280" />
      <Arrow vertical label="HTTP/S" color="#6B7280" />

      {/* API Gateway */}
      <Node label="API Gateway" sub="Rate limit · Auth" color="#3B82F6" className="w-44" />
      <Arrow vertical color="#3B82F6" />

      {/* Services Row */}
      <div className="flex items-start gap-4">
        <div className="flex flex-col items-center gap-1">
          <Node label="CRM Service" sub="Go" color="#10B981" />
          <Arrow vertical color="#10B981" />
          <Node label="PostgreSQL" sub="DB" color="#336791" />
        </div>
        <div className="flex flex-col items-center gap-1">
          <Node label="HRIS Service" sub="Node.js" color="#F59E0B" />
          <Arrow vertical color="#F59E0B" />
          <Node label="MongoDB" sub="DB" color="#47A248" />
        </div>
        <div className="flex flex-col items-center gap-1">
          <Node label="AI Service" sub="Python" color="#8B5CF6" />
          <Arrow vertical color="#8B5CF6" />
          <Node label="Pinecone" sub="Vector DB" color="#00D4AA" />
        </div>
      </div>

      {/* Message Bus */}
      <div className="mt-3 w-full max-w-xs">
        <div className="rounded-xl border border-orange-500/30 bg-orange-500/10 px-4 py-2 text-center">
          <span className="text-xs font-bold text-orange-400">RabbitMQ Event Bus</span>
          <span className="text-[10px] text-muted-foreground block">Async messaging between services</span>
        </div>
      </div>
    </div>
  );
}

function ApiGatewayDiagram() {
  return (
    <div className="flex flex-col items-center gap-2 py-4 select-none">
      {/* Clients */}
      <div className="flex gap-4">
        <Node label="Web App" sub="Next.js" color="#000000" />
        <Node label="Mobile" sub="React Native" color="#61DAFB" />
        <Node label="3rd Party" sub="External" color="#6B7280" />
      </div>

      <Arrow vertical label="All traffic" color="#6B7280" />

      {/* Gateway box */}
      <div className="w-full max-w-xs rounded-xl border border-blue-500/40 bg-blue-500/10 p-3">
        <div className="text-center text-xs font-bold text-blue-400 mb-2">API Gateway</div>
        <div className="grid grid-cols-3 gap-1.5">
          {["JWT Auth", "Rate Limit", "Routing", "Logging", "CORS", "Cache"].map((f) => (
            <div key={f} className="rounded bg-blue-500/20 px-1.5 py-1 text-[10px] text-center text-blue-300 font-medium">
              {f}
            </div>
          ))}
        </div>
      </div>

      <Arrow vertical color="#3B82F6" />

      {/* Downstream */}
      <div className="flex gap-3">
        <Node label="Auth Service" color="#F43F5E" />
        <Node label="Core API" color="#10B981" />
        <Node label="AI API" color="#8B5CF6" />
      </div>

      <div className="mt-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-center">
        <span className="text-[10px] font-bold text-emerald-400">Redis Cache Layer · p99 &lt; 50ms</span>
      </div>
    </div>
  );
}

function AuthDiagram() {
  return (
    <div className="flex flex-col items-center gap-2 py-4 select-none">
      <Node label="User" sub="Browser" color="#6B7280" />
      <Arrow vertical label="1. Login" color="#6B7280" />

      <div className="w-full max-w-xs rounded-xl border border-rose-500/40 bg-rose-500/10 p-3">
        <div className="text-center text-xs font-bold text-rose-400 mb-2">🔐 Identity Provider (IDP)</div>
        <div className="space-y-1">
          {["Validate credentials", "Generate JWT + Refresh Token", "Set secure HttpOnly cookie"].map((step, i) => (
            <div key={step} className="flex items-center gap-2 text-[10px] text-muted-foreground">
              <span className="w-4 h-4 rounded-full bg-rose-500/30 text-rose-400 flex items-center justify-center text-[9px] font-bold flex-shrink-0">
                {i + 1}
              </span>
              {step}
            </div>
          ))}
        </div>
      </div>

      <Arrow vertical label="2. JWT Token" color="#F43F5E" />

      <div className="flex gap-3">
        <div className="flex flex-col items-center gap-1">
          <Node label="Service A" color="#3B82F6" />
          <div className="text-[9px] text-muted-foreground">Verify JWT</div>
        </div>
        <div className="flex flex-col items-center gap-1">
          <Node label="Service B" color="#10B981" />
          <div className="text-[9px] text-muted-foreground">Check RBAC</div>
        </div>
        <div className="flex flex-col items-center gap-1">
          <Node label="Service C" color="#8B5CF6" />
          <div className="text-[9px] text-muted-foreground">Scope check</div>
        </div>
      </div>

      <Arrow vertical label="3. Refresh Flow" color="#6B7280" />
      <Node label="Token Refresh" sub="Redis TTL store" color="#DC382D" className="w-44" />
    </div>
  );
}

function EventDrivenDiagram() {
  return (
    <div className="flex flex-col items-center gap-2 py-4 select-none">
      {/* Publishers */}
      <div className="text-[10px] text-muted-foreground uppercase tracking-wider mb-1">Publishers</div>
      <div className="flex gap-3">
        <Node label="CRM Service" color="#3B82F6" />
        <Node label="HRIS Service" color="#F59E0B" />
        <Node label="Billing" color="#10B981" />
      </div>

      <div className="flex items-center gap-1 my-1">
        <Arrow label="publish event" color="#6B7280" />
      </div>

      {/* Event Bus */}
      <div className="w-full max-w-sm rounded-xl border border-orange-500/40 bg-orange-500/10 p-3">
        <div className="text-center text-xs font-bold text-orange-400 mb-2">⚡ RabbitMQ Event Bus</div>
        <div className="grid grid-cols-3 gap-1.5">
          {["user.created", "invoice.paid", "role.updated", "report.gen", "notify.send", "sync.data"].map((e) => (
            <div key={e} className="rounded bg-orange-500/20 px-1.5 py-1 text-[10px] text-center text-orange-300 font-mono">
              {e}
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-1 my-1">
        <Arrow label="consume" color="#6B7280" />
      </div>

      {/* Consumers */}
      <div className="text-[10px] text-muted-foreground uppercase tracking-wider mb-1">Consumers</div>
      <div className="flex gap-3">
        <Node label="Email Worker" color="#8B5CF6" />
        <Node label="Analytics" color="#F43F5E" />
        <Node label="Sync Worker" color="#06B6D4" />
      </div>

      <div className="mt-2 rounded-xl border border-gray-500/20 bg-gray-500/10 px-4 py-1.5 text-center">
        <span className="text-[10px] font-bold text-muted-foreground">Dead Letter Queue · Retry logic · At-least-once delivery</span>
      </div>
    </div>
  );
}

// -----------------------------------------------------------------------------
// ARCHITECTURE SECTION
// -----------------------------------------------------------------------------
export function ArchitectureSection() {
  const [active, setActive] = useState(0);
  const pattern = architecturePatterns[active];
  const DiagramComponent = pattern.diagram;

  return (
    <section id="architecture" className="relative w-full py-24 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-blue-500/5 blur-3xl" />
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
              System Design
            </span>
            <div className="min-w-0">
              <h2 className="text-3xl md:text-5xl font-black text-foreground mb-4">
                Architecture-level thinking
              </h2>
              <p className="text-muted-foreground max-w-2xl text-lg">
                Beyond writing code - designing systems that scale, fail gracefully,
                and evolve with your business.
              </p>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Tab selector */}
          <div className="space-y-3">
            {architecturePatterns.map((pattern, i) => (
              <motion.button
                key={pattern.id}
                onClick={() => setActive(i)}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`w-full text-left rounded-xl border p-4 transition-all duration-300 ${
                  active === i
                    ? "border-primary/50 bg-primary/10"
                    : "border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/8"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-xl">{pattern.icon}</span>
                  <div>
                    <div
                      className={`font-semibold text-sm ${active === i ? "text-primary" : "text-foreground"}`}
                    >
                      {pattern.label}
                    </div>
                    <div className="text-xs text-muted-foreground mt-0.5">
                      {pattern.description}
                    </div>
                  </div>
                  {active === i && (
                    <div className="ml-auto w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                  )}
                </div>
              </motion.button>
            ))}

            {/* Design principles */}
            <div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-4">
              <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                Core Design Principles
              </div>
              <div className="space-y-2">
                {[
                  { icon: "🎯", text: "Single responsibility per service" },
                  { icon: "🔒", text: "Zero-trust security model" },
                  { icon: "⚡", text: "Sub-100ms API response targets" },
                  { icon: "📈", text: "Horizontal scalability by default" },
                ].map((p) => (
                  <div key={p.text} className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span>{p.icon}</span>
                    {p.text}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Diagram panel */}
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden">
            <div className="flex items-center gap-3 border-b border-white/10 px-4 py-3">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-green-500/60" />
              </div>
              <span className="text-xs text-muted-foreground font-mono">
                {pattern.icon} {pattern.label} Architecture
              </span>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="p-6 min-h-[380px] flex items-center justify-center"
              >
                <DiagramComponent />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
