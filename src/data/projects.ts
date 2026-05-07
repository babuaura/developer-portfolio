// -----------------------------------------------------------------------------
// FEATURED PROJECT CASE STUDIES
// Real-world SaaS projects by Babu Angi
// -----------------------------------------------------------------------------

export interface TechBadge {
  name: string;
  color: string;
}

export interface ArchHighlight {
  title: string;
  description: string;
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: string;
  status: "Production" | "Beta" | "Shipped";
  problem: string;
  solution: string;
  techStack: TechBadge[];
  architectureHighlights: ArchHighlight[];
  outcome: string[];
  gradient: string;
  accentColor: string;
  icon: string;
  metrics?: { label: string; value: string }[];
}

export const featuredProjects: Project[] = [
  {
    id: "ai-book-platform",
    title: "AI-Powered Book Interaction Platform",
    tagline: "Chat with any book using RAG + LLMs",
    category: "AI / SaaS",
    status: "Production",
    problem:
      "Readers struggle to extract key insights from long books. Traditional search is keyword-based and misses context. Teams needed a way to interact with internal knowledge bases in natural language.",
    solution:
      "Built a full RAG (Retrieval-Augmented Generation) pipeline that ingests PDFs/EPUBs, chunks them semantically, stores embeddings in a vector database, and lets users ask natural language questions with source-cited answers in real time.",
    techStack: [
      { name: "Next.js", color: "#000000" },
      { name: "Node.js", color: "#339933" },
      { name: "Python", color: "#3572A5" },
      { name: "LangChain", color: "#1C3C3C" },
      { name: "OpenAI GPT-4", color: "#412991" },
      { name: "Pinecone", color: "#00D4AA" },
      { name: "PostgreSQL", color: "#336791" },
      { name: "Redis", color: "#DC382D" },
    ],
    architectureHighlights: [
      {
        title: "RAG Pipeline",
        description:
          "PDF to chunking to embeddings to Pinecone storage to semantic search to GPT-4 synthesis with citations",
      },
      {
        title: "Streaming Response",
        description:
          "Server-Sent Events (SSE) for real-time token streaming — zero perceived latency for users",
      },
      {
        title: "Multi-tenant Architecture",
        description:
          "Each user's book collection is isolated with row-level security in PostgreSQL + dedicated Pinecone namespaces",
      },
      {
        title: "Caching Layer",
        description:
          "Redis caches frequent query embeddings reducing OpenAI API costs by 40%",
      },
    ],
    outcome: [
      "500+ books processed across 200+ active users",
      "Average response latency under 1.8 seconds",
      "40% reduction in API costs via embedding cache",
      "99.2% uptime over 6 months",
    ],
    gradient: "from-violet-500/20 via-purple-500/10 to-fuchsia-500/20",
    accentColor: "#8B5CF6",
    icon: "AI",
    metrics: [
      { label: "Books Processed", value: "500+" },
      { label: "Avg Latency", value: "1.8s" },
      { label: "Cost Saved", value: "40%" },
      { label: "Uptime", value: "99.2%" },
    ],
  },
  {
    id: "kahaani-box-admin",
    title: "Kahaani Box Admin Panel",
    tagline: "Full-featured content operations dashboard",
    category: "Admin Dashboard",
    status: "Shipped",
    problem:
      "The Kahaani Box content team managed stories, creators, subscriptions, and analytics across disconnected spreadsheets and tools. No unified system existed for content approval workflows, revenue tracking, or creator management.",
    solution:
      "Built a comprehensive admin panel with role-based access control, content moderation workflows, real-time analytics dashboards, creator payout management, and automated notification systems — all in a single unified interface.",
    techStack: [
      { name: "Next.js", color: "#000000" },
      { name: "TypeScript", color: "#3178C6" },
      { name: "Tailwind CSS", color: "#06B6D4" },
      { name: "Node.js", color: "#339933" },
      { name: "PostgreSQL", color: "#336791" },
      { name: "Prisma", color: "#2D3748" },
      { name: "Recharts", color: "#FF6B6B" },
      { name: "BullMQ", color: "#E11D48" },
    ],
    architectureHighlights: [
      {
        title: "RBAC System",
        description:
          "4-tier role hierarchy (Super Admin, Admin, Moderator, Viewer) with granular permission sets per resource",
      },
      {
        title: "Real-time Analytics",
        description:
          "WebSocket-powered live dashboard with 15+ charts — revenue, user growth, content performance, churn rates",
      },
      {
        title: "Workflow Engine",
        description:
          "BullMQ-based async job queue for content approval, email notifications, and payout processing",
      },
      {
        title: "Audit Trail",
        description:
          "Every admin action is logged with actor, timestamp, before/after state — full compliance trail",
      },
    ],
    outcome: [
      "Reduced content approval time from 3 days to 4 hours",
      "Unified 6 disconnected tools into one platform",
      "Handles 10,000+ content items with sub-200ms list loads",
      "30+ team members onboarded with zero training issues",
    ],
    gradient: "from-amber-500/20 via-orange-500/10 to-red-500/20",
    accentColor: "#F59E0B",
    icon: "KB",
    metrics: [
      { label: "Team Members", value: "30+" },
      { label: "Content Items", value: "10K+" },
      { label: "Approval Time", value: "-95%" },
      { label: "Tools Replaced", value: "6" },
    ],
  },
  {
    id: "ledger-reconciliation",
    title: "Ledger Reconciliation System",
    tagline: "Automated financial data reconciliation at scale",
    category: "FinTech / Backend",
    status: "Production",
    problem:
      "Finance teams spent 40+ hours per month manually reconciling transactions across bank statements, payment gateways, and internal ledgers. Discrepancies took days to trace and human error was frequent.",
    solution:
      "Engineered an automated reconciliation engine that ingests data from multiple sources (bank APIs, Stripe, Razorpay, internal DB), applies fuzzy matching algorithms, flags discrepancies, and generates audit-ready reports — cutting reconciliation time to under 30 minutes.",
    techStack: [
      { name: "Node.js", color: "#339933" },
      { name: "TypeScript", color: "#3178C6" },
      { name: "PostgreSQL", color: "#336791" },
      { name: "Redis", color: "#DC382D" },
      { name: "Bull Queue", color: "#E11D48" },
      { name: "Stripe API", color: "#635BFF" },
      { name: "Razorpay API", color: "#02042B" },
      { name: "CSV/XLSX Parser", color: "#217346" },
    ],
    architectureHighlights: [
      {
        title: "Multi-source Ingestion",
        description:
          "Adapters for 5+ data sources (bank statements, Stripe, Razorpay, NEFT, internal DB) with normalized transaction schema",
      },
      {
        title: "Fuzzy Matching Engine",
        description:
          "Custom algorithm matching transactions by amount ±2%, date window ±3 days, and reference ID similarity — 94% auto-match rate",
      },
      {
        title: "Batch Processing",
        description:
          "Bull Queue processes up to 50,000 transactions/hour in parallel batches without memory pressure",
      },
      {
        title: "Audit Reports",
        description:
          "Auto-generated XLSX/PDF reconciliation reports with discrepancy heatmaps, ready for CA/CFO review",
      },
    ],
    outcome: [
      "Reconciliation time reduced from 40h to 30 minutes",
      "94% auto-match rate on first pass",
      "Processes 50,000+ transactions per hour",
      "Zero reconciliation errors in 8 months of production",
    ],
    gradient: "from-emerald-500/20 via-teal-500/10 to-cyan-500/20",
    accentColor: "#10B981",
    icon: "FN",
    metrics: [
      { label: "Time Saved", value: "98%" },
      { label: "Auto-match Rate", value: "94%" },
      { label: "Tx/Hour", value: "50K+" },
      { label: "Error Rate", value: "0%" },
    ],
  },
  {
    id: "modular-saas-architecture",
    title: "Modular SaaS Architecture",
    tagline: "CRM + HRIS + RPS as a unified multi-tenant platform",
    category: "SaaS Architecture",
    status: "Production",
    problem:
      "A growing enterprise needed CRM, HRIS, and Resource Planning System (RPS) as three separate tools that shared common users, organizations, and permissions — but buying 3 SaaS tools was expensive and created data silos.",
    solution:
      "Designed and built a modular monorepo SaaS platform with shared auth (IDP), organization management, and billing — while CRM, HRIS, and RPS run as independent modules with their own domain logic, databases, and APIs. Modules communicate via internal gRPC and message queues.",
    techStack: [
      { name: "Next.js", color: "#000000" },
      { name: "Node.js", color: "#339933" },
      { name: "Go", color: "#00ADD8" },
      { name: "gRPC", color: "#244C5A" },
      { name: "PostgreSQL", color: "#336791" },
      { name: "MongoDB", color: "#47A248" },
      { name: "Redis", color: "#DC382D" },
      { name: "RabbitMQ", color: "#FF6600" },
    ],
    architectureHighlights: [
      {
        title: "Shared IDP",
        description:
          "Single Identity Provider (JWT + refresh tokens) handles auth across all 3 modules — one login, access everywhere",
      },
      {
        title: "gRPC Inter-module Communication",
        description:
          "Modules call each other's internal APIs via gRPC for strong type safety, performance, and contract-first development",
      },
      {
        title: "Event-driven Data Sync",
        description:
          "RabbitMQ event bus syncs shared entities (users, org, roles) across modules asynchronously — eventual consistency",
      },
      {
        title: "Module Federation",
        description:
          "Each module is independently deployable. Rolling deploys per module with zero downtime — true microservice approach",
      },
    ],
    outcome: [
      "3 enterprise modules running on a single auth + billing platform",
      "40+ organizations onboarded as tenants",
      "99.5% uptime with independent module deployments",
      "gRPC calls under 5ms internal latency",
    ],
    gradient: "from-blue-500/20 via-indigo-500/10 to-violet-500/20",
    accentColor: "#3B82F6",
    icon: "SA",
    metrics: [
      { label: "Modules", value: "3" },
      { label: "Tenants", value: "40+" },
      { label: "gRPC Latency", value: "<5ms" },
      { label: "Uptime", value: "99.5%" },
    ],
  },
  {
    id: "hms-hotel-management",
    title: "HMS - Hotel Management System",
    tagline: "Full-stack hospitality operations platform",
    category: "Hospitality SaaS",
    status: "Shipped",
    problem:
      "A hotel chain operated with paper-based check-in/out, manual room allocation, disconnected billing, and no real-time visibility into occupancy or revenue. Scaling to multiple properties was impossible.",
    solution:
      "Built a complete HMS covering front-desk operations (check-in/out, room allocation), housekeeping management, F&B billing, reservations, real-time occupancy dashboard, multi-property support, and automated invoice generation.",
    techStack: [
      { name: "Next.js", color: "#000000" },
      { name: "Node.js", color: "#339933" },
      { name: "PostgreSQL", color: "#336791" },
      { name: "Prisma", color: "#2D3748" },
      { name: "Socket.io", color: "#010101" },
      { name: "Razorpay", color: "#02042B" },
      { name: "PDF-lib", color: "#EC4899" },
      { name: "Redis", color: "#DC382D" },
    ],
    architectureHighlights: [
      {
        title: "Real-time Room State",
        description:
          "Socket.io broadcasts room status changes (occupied/available/cleaning) instantly across all front-desk terminals",
      },
      {
        title: "Multi-property Support",
        description:
          "Tenant-isolated data with a global superadmin view — each property has its own schema partition in PostgreSQL",
      },
      {
        title: "Automated Billing Engine",
        description:
          "Calculates GST, applies discounts, generates PDF invoices, and integrates Razorpay for online payments automatically",
      },
      {
        title: "Offline-first Design",
        description:
          "Critical operations (check-in, room allocation) work offline with service workers + sync when connection restores",
      },
    ],
    outcome: [
      "3 hotel properties fully digitized",
      "Check-in time reduced from 15 minutes to under 2 minutes",
      "Real-time occupancy visibility across all properties",
      "Revenue reporting automated — saves 8 hours/week for management",
    ],
    gradient: "from-rose-500/20 via-pink-500/10 to-fuchsia-500/20",
    accentColor: "#F43F5E",
    icon: "HT",
    metrics: [
      { label: "Properties", value: "3" },
      { label: "Check-in Time", value: "-87%" },
      { label: "Rooms Managed", value: "200+" },
      { label: "Time Saved/Week", value: "8h" },
    ],
  },
  {
    id: "hmis-hospital-management",
    title: "HMIS - Hospital Management System",
    tagline: "Clinical, patient, billing, pharmacy, and hospital operations platform",
    category: "Healthcare SaaS",
    status: "Production",
    problem:
      "Hospital teams were coordinating OPD, IPD, appointments, pharmacy, billing, lab requests, and patient records through disconnected desks and manual registers. This caused duplicate entry, delayed reports, billing gaps, and weak visibility for administrators.",
    solution:
      "Built an HMIS workflow covering patient registration, appointment scheduling, OPD/IPD flows, doctor assignment, prescriptions, lab requests, pharmacy stock, discharge summaries, billing, role-based dashboards, and hospital admin reporting.",
    techStack: [
      { name: "Next.js", color: "#000000" },
      { name: "TypeScript", color: "#3178C6" },
      { name: "Node.js", color: "#339933" },
      { name: "PostgreSQL", color: "#336791" },
      { name: "Prisma", color: "#2D3748" },
      { name: "Redis", color: "#DC382D" },
      { name: "Socket.io", color: "#010101" },
      { name: "PDF Reports", color: "#EC4899" },
    ],
    architectureHighlights: [
      {
        title: "Patient Journey Flow",
        description:
          "Tracks patient movement from registration to consultation, lab, pharmacy, billing, admission, and discharge.",
      },
      {
        title: "Role-based Clinical Access",
        description:
          "Separate dashboards for reception, doctors, nurses, lab, pharmacy, billing, and administrators with scoped permissions.",
      },
      {
        title: "Inventory and Pharmacy Sync",
        description:
          "Prescription fulfillment updates pharmacy stock, low-stock alerts, and item movement history in real time.",
      },
      {
        title: "Operational Reports",
        description:
          "Daily collection, OPD/IPD counts, doctor-wise visits, lab requests, discharge reports, and invoice exports.",
      },
    ],
    outcome: [
      "Centralized patient records and reduced duplicate entry across departments",
      "Improved appointment, consultation, billing, and pharmacy handoffs",
      "Gave administrators live visibility into hospital operations",
      "Created a scalable base for lab integrations and insurance workflows",
    ],
    gradient: "from-cyan-500/20 via-blue-500/10 to-emerald-500/20",
    accentColor: "#06B6D4",
    icon: "HP",
    metrics: [
      { label: "Departments", value: "7+" },
      { label: "Core Flows", value: "10+" },
      { label: "Reports", value: "15+" },
      { label: "Roles", value: "8" },
    ],
  },
  {
    id: "aerogenesis-platform",
    title: "Aerogenesis Platform",
    tagline: "Modern operations and product workflow platform for Aerogenesis",
    category: "Custom SaaS",
    status: "Shipped",
    problem:
      "Aerogenesis needed a polished platform to organize its business workflow, present key information professionally, and manage operational data without relying on scattered manual updates.",
    solution:
      "Built Aerogenesis as a custom web platform with a professional frontend, admin-managed content, structured workflow sections, responsive pages, inquiry handling, and reusable components for future product and operations modules.",
    techStack: [
      { name: "Next.js", color: "#000000" },
      { name: "React", color: "#61DAFB" },
      { name: "TypeScript", color: "#3178C6" },
      { name: "Tailwind CSS", color: "#06B6D4" },
      { name: "Node.js", color: "#339933" },
      { name: "PostgreSQL", color: "#336791" },
      { name: "Prisma", color: "#2D3748" },
      { name: "Vercel", color: "#000000" },
    ],
    architectureHighlights: [
      {
        title: "Brand-first Interface",
        description:
          "Built a clean responsive UI system with reusable sections, consistent spacing, and conversion-focused content structure.",
      },
      {
        title: "Content and Inquiry Flow",
        description:
          "Structured content, contact, and inquiry paths so business updates and leads are easier to manage.",
      },
      {
        title: "Scalable Module Base",
        description:
          "Component and data structure supports future modules without rebuilding the core application shell.",
      },
      {
        title: "Performance-focused Delivery",
        description:
          "Optimized routing, assets, responsive layouts, and deployment flow for a fast professional web experience.",
      },
    ],
    outcome: [
      "Delivered a professional digital platform for Aerogenesis",
      "Improved brand presentation across desktop and mobile",
      "Created reusable foundations for future business modules",
      "Made inquiries and content updates easier to manage",
    ],
    gradient: "from-slate-500/20 via-cyan-500/10 to-blue-500/20",
    accentColor: "#38BDF8",
    icon: "AG",
    metrics: [
      { label: "Pages", value: "6+" },
      { label: "Sections", value: "12+" },
      { label: "Responsive", value: "100%" },
      { label: "Brand", value: "AG" },
    ],
  },
  {
    id: "hrms-workforce-platform",
    title: "HRMS - Human Resource Management System",
    tagline: "Employee lifecycle, payroll, attendance, and approvals in one flow",
    category: "Enterprise SaaS",
    status: "Production",
    problem:
      "HR teams were managing hiring, employee records, attendance, leave, payroll inputs, and approvals across spreadsheets and messaging apps. Managers had no reliable view of team availability, payroll reconciliation was slow, and employee self-service was missing.",
    solution:
      "Built a complete HRMS workflow covering employee onboarding, department and role hierarchy, attendance capture, leave and holiday policies, payroll-ready reports, document management, approval chains, and self-service dashboards for employees, managers, HR, and admins.",
    techStack: [
      { name: "Next.js", color: "#000000" },
      { name: "TypeScript", color: "#3178C6" },
      { name: "Node.js", color: "#339933" },
      { name: "PostgreSQL", color: "#336791" },
      { name: "Prisma", color: "#2D3748" },
      { name: "Redis", color: "#DC382D" },
      { name: "BullMQ", color: "#E11D48" },
      { name: "S3 Storage", color: "#FF9900" },
    ],
    architectureHighlights: [
      {
        title: "Role-based HR Flow",
        description:
          "Separate workspaces for employee, manager, HR, finance, and superadmin roles with scoped data access and approval permissions.",
      },
      {
        title: "Attendance and Leave Engine",
        description:
          "Shift rules, holidays, leave balances, late marks, comp-offs, and monthly summaries are calculated through reusable policy modules.",
      },
      {
        title: "Payroll-ready Reports",
        description:
          "Exports attendance, leave deductions, reimbursement approvals, and employee changes into finance-ready monthly reports.",
      },
      {
        title: "Audit and Documents",
        description:
          "Employee documents, offer letters, appraisal notes, and admin changes are stored with audit logs for traceability.",
      },
    ],
    outcome: [
      "Reduced HR operations dependency on spreadsheets",
      "Centralized employee records, attendance, leave, and payroll inputs",
      "Improved manager visibility into availability and approvals",
      "Created a scalable foundation for performance reviews and asset tracking",
    ],
    gradient: "from-sky-500/20 via-blue-500/10 to-cyan-500/20",
    accentColor: "#0EA5E9",
    icon: "HR",
    metrics: [
      { label: "Roles", value: "5" },
      { label: "Core Flows", value: "8+" },
      { label: "Reports", value: "12+" },
      { label: "Ops Saved", value: "70%" },
    ],
  },
  {
    id: "workspace-operations-suite",
    title: "Workspace Operations Suite",
    tagline: "Unified internal workspace for teams, tasks, files, and approvals",
    category: "Productivity SaaS",
    status: "Shipped",
    problem:
      "Teams were switching between chat, spreadsheets, file drives, and task trackers to manage daily operations. Work context was scattered, approvals were hard to trace, and leadership had limited visibility into blockers across departments.",
    solution:
      "Built a workspace platform with organization spaces, project boards, task assignment, file attachments, comments, notification preferences, approval requests, activity timelines, and admin-level workspace controls.",
    techStack: [
      { name: "Next.js", color: "#000000" },
      { name: "React", color: "#61DAFB" },
      { name: "TypeScript", color: "#3178C6" },
      { name: "Node.js", color: "#339933" },
      { name: "PostgreSQL", color: "#336791" },
      { name: "Socket.io", color: "#010101" },
      { name: "Redis", color: "#DC382D" },
      { name: "Tailwind CSS", color: "#06B6D4" },
    ],
    architectureHighlights: [
      {
        title: "Multi-workspace Model",
        description:
          "Organizations can create multiple workspaces with independent members, projects, permissions, and activity feeds.",
      },
      {
        title: "Real-time Collaboration",
        description:
          "Socket-based updates keep task status, comments, mentions, and notifications synchronized without full page refreshes.",
      },
      {
        title: "Approval Workflow",
        description:
          "Configurable approvals route requests to managers or admins with comments, status history, and final decision logs.",
      },
      {
        title: "Searchable Activity Layer",
        description:
          "Every task, file, comment, and status change is indexed into a timeline so teams can recover work context quickly.",
      },
    ],
    outcome: [
      "Reduced context switching by consolidating daily operations into one workspace",
      "Improved accountability with assignment, due dates, and approval history",
      "Made team progress easier to scan for managers and founders",
      "Created reusable collaboration primitives for future SaaS modules",
    ],
    gradient: "from-teal-500/20 via-emerald-500/10 to-lime-500/20",
    accentColor: "#14B8A6",
    icon: "WS",
    metrics: [
      { label: "Modules", value: "6" },
      { label: "Realtime", value: "Yes" },
      { label: "Views", value: "4" },
      { label: "Teams", value: "Multi" },
    ],
  },
  {
    id: "79er-business-platform",
    title: "79er Business Platform",
    tagline: "Custom business workflow platform with admin, customer, and operations flows",
    category: "Custom SaaS",
    status: "Shipped",
    problem:
      "The 79er workflow needed a branded platform to manage business operations end to end instead of relying on manual coordination, fragmented customer records, and disconnected operational updates.",
    solution:
      "Built a custom 79er platform with admin dashboards, customer records, workflow status tracking, operational notes, role-based access, analytics cards, and clean handoff flows between business users and internal operators.",
    techStack: [
      { name: "Next.js", color: "#000000" },
      { name: "TypeScript", color: "#3178C6" },
      { name: "Node.js", color: "#339933" },
      { name: "PostgreSQL", color: "#336791" },
      { name: "Prisma", color: "#2D3748" },
      { name: "Tailwind CSS", color: "#06B6D4" },
      { name: "NextAuth", color: "#6D28D9" },
      { name: "Vercel", color: "#000000" },
    ],
    architectureHighlights: [
      {
        title: "Business-specific Data Model",
        description:
          "Modeled 79er entities around real operational states so admins can track each record from intake to completion.",
      },
      {
        title: "Admin-first UX",
        description:
          "Built dense dashboards, filtered tables, quick actions, and summary cards for repeated back-office work.",
      },
      {
        title: "Role and Status Controls",
        description:
          "Permissions and status transitions prevent accidental updates while keeping operations fast for trusted users.",
      },
      {
        title: "Analytics-ready Foundation",
        description:
          "Key workflow events are stored in a structured way so conversion, completion time, and bottleneck reports can be added cleanly.",
      },
    ],
    outcome: [
      "Created a professional branded platform for the 79er workflow",
      "Centralized operational records and reduced manual follow-up",
      "Improved admin visibility through status dashboards and filtered views",
      "Kept the architecture flexible for future customer-facing features",
    ],
    gradient: "from-indigo-500/20 via-slate-500/10 to-blue-500/20",
    accentColor: "#6366F1",
    icon: "79",
    metrics: [
      { label: "Dashboards", value: "3+" },
      { label: "Roles", value: "4" },
      { label: "Flows", value: "5+" },
      { label: "Brand", value: "79er" },
    ],
  },
];
