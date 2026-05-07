// -----------------------------------------------------------------------------
// SERVICES OFFERED BY BABU ANGI
// -----------------------------------------------------------------------------

export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  features: string[];
  gradient: string;
  accentColor: string;
}

export const services: Service[] = [
  {
    id: "saas-development",
    icon: "🚀",
    title: "SaaS Development",
    description:
      "End-to-end SaaS platform development from architecture to deployment. Multi-tenant, scalable, production-ready.",
    features: [
      "Multi-tenant architecture",
      "Subscription & billing integration",
      "Admin dashboards",
      "Role-based access control",
      "Scalable backend APIs",
      "CI/CD pipelines",
    ],
    gradient: "from-blue-500/10 to-violet-500/10",
    accentColor: "#3B82F6",
  },
  {
    id: "ai-systems",
    icon: "🧠",
    title: "AI Systems & RAG",
    description:
      "Production AI systems including RAG pipelines, LLM integrations, AI agents, and intelligent automation workflows.",
    features: [
      "RAG pipeline engineering",
      "LLM API integration (GPT-4, Claude)",
      "Vector database setup",
      "AI agent development",
      "Embedding & fine-tuning",
      "Streaming response APIs",
    ],
    gradient: "from-violet-500/10 to-fuchsia-500/10",
    accentColor: "#8B5CF6",
  },
  {
    id: "admin-dashboards",
    icon: "⚡",
    title: "Admin Dashboards",
    description:
      "Complex internal tools and operations dashboards with real-time data, analytics, and workflow automation.",
    features: [
      "Real-time analytics",
      "Data visualization",
      "Workflow automation",
      "Bulk operations",
      "Audit trails & logs",
      "Export & reporting",
    ],
    gradient: "from-amber-500/10 to-orange-500/10",
    accentColor: "#F59E0B",
  },
  {
    id: "backend-api",
    icon: "⚙️",
    title: "Backend & API Engineering",
    description:
      "High-performance REST and gRPC APIs, microservices, event-driven systems, and database architecture.",
    features: [
      "REST & gRPC API design",
      "Microservices architecture",
      "Database design & optimization",
      "Event-driven systems",
      "Authentication & authorization",
      "API documentation",
    ],
    gradient: "from-emerald-500/10 to-teal-500/10",
    accentColor: "#10B981",
  },
  {
    id: "architecture-consulting",
    icon: "🏗️",
    title: "System Architecture Consulting",
    description:
      "Architecture reviews, system design, scalability planning, and technical roadmapping for engineering teams.",
    features: [
      "Architecture review & audit",
      "Scalability planning",
      "Tech stack evaluation",
      "Performance optimization",
      "Security assessment",
      "Technical roadmapping",
    ],
    gradient: "from-rose-500/10 to-pink-500/10",
    accentColor: "#F43F5E",
  },
];
