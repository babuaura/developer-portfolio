"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { featuredProjects, type Project } from "@/data/projects";
import {
  Lock,
  LayoutDashboard,
  FolderOpen,
  Settings,
  LogOut,
  Plus,
  Edit3,
  Eye,
  EyeOff,
  TrendingUp,
  Code2,
  Zap,
  Users,
} from "lucide-react";

// -----------------------------------------------------------------------------
// PIN GATE
// -----------------------------------------------------------------------------
function PinGate({ onUnlock }: { onUnlock: () => void }) {
  const [pin, setPin] = useState("");
  const [error, setError] = useState("");
  const [shake, setShake] = useState(false);
  const ADMIN_PIN = process.env.NEXT_PUBLIC_ADMIN_PIN || "1234";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (pin === ADMIN_PIN) {
      onUnlock();
    } else {
      setError("Incorrect PIN");
      setShake(true);
      setTimeout(() => setShake(false), 600);
      setPin("");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-1/3 right-1/3 w-64 h-64 rounded-full bg-violet-500/5 blur-3xl" />
      </div>

      <motion.div
        animate={shake ? { x: [-8, 8, -8, 8, 0] } : {}}
        transition={{ duration: 0.4 }}
        className="relative w-full max-w-sm"
      >
        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-2xl">
          <div className="text-center mb-8">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-4">
              <Lock className="w-6 h-6 text-primary" />
            </div>
            <h1 className="text-xl font-black text-foreground">Admin Panel</h1>
            <p className="text-sm text-muted-foreground mt-1">
              Enter your PIN to continue
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="password"
                value={pin}
                onChange={(e) => {
                  setPin(e.target.value);
                  setError("");
                }}
                placeholder="Enter PIN"
                maxLength={8}
                autoFocus
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-center text-lg font-bold tracking-[0.5em] text-foreground placeholder:text-muted-foreground/30 placeholder:tracking-normal focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30 transition-all"
              />
              {error && (
                <p className="text-xs text-red-400 text-center mt-2">{error}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-primary py-3 text-sm font-semibold text-white hover:bg-primary/90 transition-colors"
            >
              Unlock
            </button>
          </form>

          <p className="text-xs text-muted-foreground text-center mt-4">
            Default PIN: <span className="text-primary font-mono">1234</span>
            <br />
            <span className="text-muted-foreground/60">
              Set NEXT_PUBLIC_ADMIN_PIN in .env.local
            </span>
          </p>
        </div>
      </motion.div>
    </div>
  );
}

// -----------------------------------------------------------------------------
// METRIC CARD
// -----------------------------------------------------------------------------
function MetricCard({
  icon,
  label,
  value,
  sub,
  color,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  sub: string;
  color: string;
}) {
  return (
    <div
      className="rounded-xl border border-white/10 bg-white/5 p-5"
      style={{ borderColor: `${color}30` }}
    >
      <div className="flex items-center justify-between mb-3">
        <div
          className="w-9 h-9 rounded-lg flex items-center justify-center"
          style={{ backgroundColor: `${color}20`, color }}
        >
          {icon}
        </div>
      </div>
      <div className="text-2xl font-black text-foreground">{value}</div>
      <div className="text-sm font-medium text-foreground/70">{label}</div>
      <div className="text-xs text-muted-foreground mt-0.5">{sub}</div>
    </div>
  );
}

// -----------------------------------------------------------------------------
// PROJECT ROW
// -----------------------------------------------------------------------------
function ProjectRow({
  project,
  visible,
  onToggle,
}: {
  project: Project;
  visible: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="flex flex-wrap items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4 transition-colors hover:border-white/20 sm:flex-nowrap sm:gap-4">
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
        style={{ backgroundColor: `${project.accentColor}20` }}
      >
        {project.icon}
      </div>
      <div className="flex-1 min-w-0">
        <div className="font-semibold text-foreground text-sm truncate">
          {project.title}
        </div>
        <div className="text-xs text-muted-foreground">{project.category}</div>
      </div>
      <div
        className="text-xs px-2.5 py-1 rounded-full font-medium"
        style={{
          backgroundColor: `${project.accentColor}20`,
          color: project.accentColor,
        }}
      >
        {project.status}
      </div>
      <div className="ml-auto flex items-center gap-2">
        <button
          onClick={onToggle}
          className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
            visible
              ? "bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500/30"
              : "bg-white/5 text-muted-foreground hover:bg-white/10"
          }`}
          title={visible ? "Hide project" : "Show project"}
        >
          {visible ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
        </button>
        <button
          className="w-8 h-8 rounded-lg bg-white/5 text-muted-foreground hover:bg-white/10 hover:text-foreground flex items-center justify-center transition-colors"
          title="Edit project"
        >
          <Edit3 className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

// -----------------------------------------------------------------------------
// ADMIN DASHBOARD
// -----------------------------------------------------------------------------
function AdminDashboard({ onLogout }: { onLogout: () => void }) {
  const [activeSection, setActiveSection] = useState("dashboard");
  const [projectVisibility, setProjectVisibility] = useState<
    Record<string, boolean>
  >(
    Object.fromEntries(featuredProjects.map((p) => [p.id, true]))
  );

  const toggleVisibility = (id: string) => {
    setProjectVisibility((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const navItems = [
    { id: "dashboard", icon: <LayoutDashboard className="w-4 h-4" />, label: "Dashboard" },
    { id: "projects", icon: <FolderOpen className="w-4 h-4" />, label: "Projects" },
    { id: "settings", icon: <Settings className="w-4 h-4" />, label: "Settings" },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col md:flex-row">
      {/* Sidebar */}
      <aside className="w-full border-b border-white/10 bg-white/3 flex flex-col flex-shrink-0 md:w-56 md:border-b-0 md:border-r">
        {/* Logo */}
        <div className="p-5 border-b border-white/10">
          <div className="text-sm font-black text-foreground">
            <span className="text-primary">Babu</span> Admin
          </div>
          <div className="text-xs text-muted-foreground">Portfolio CMS</div>
        </div>

        {/* Nav */}
        <nav className="flex-1 p-3 space-y-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`w-full flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                activeSection === item.id
                  ? "bg-primary/15 text-primary"
                  : "text-muted-foreground hover:bg-white/5 hover:text-foreground"
              }`}
            >
              {item.icon}
              {item.label}
            </button>
          ))}
        </nav>

        {/* Logout */}
        <div className="p-3 border-t border-white/10">
          <button
            onClick={onLogout}
            className="w-full flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground hover:bg-red-500/10 hover:text-red-400 transition-colors"
          >
            <LogOut className="w-4 h-4" />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main content */}
      <main className="min-w-0 flex-1 overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 z-10 flex flex-col gap-3 border-b border-white/10 bg-background/80 px-4 py-4 backdrop-blur-xl sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <div>
            <h1 className="text-lg font-bold text-foreground capitalize">
              {activeSection}
            </h1>
            <p className="text-xs text-muted-foreground">
              Portfolio management
            </p>
          </div>
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            <Eye className="w-3.5 h-3.5" />
            View Site
          </a>
        </div>

        <div className="p-4 sm:p-8">
          {/* ── Dashboard ── */}
          {activeSection === "dashboard" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-8"
            >
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <MetricCard
                  icon={<FolderOpen className="w-4 h-4" />}
                  label="Total Projects"
                  value={`${featuredProjects.length}`}
                  sub="Featured case studies"
                  color="#3B82F6"
                />
                <MetricCard
                  icon={<Eye className="w-4 h-4" />}
                  label="Visible"
                  value={`${Object.values(projectVisibility).filter(Boolean).length}`}
                  sub="Shown on homepage"
                  color="#10B981"
                />
                <MetricCard
                  icon={<TrendingUp className="w-4 h-4" />}
                  label="Tech Items"
                  value="38"
                  sub="Across 5 categories"
                  color="#8B5CF6"
                />
                <MetricCard
                  icon={<Users className="w-4 h-4" />}
                  label="Services"
                  value="5"
                  sub="Listed on site"
                  color="#F59E0B"
                />
              </div>

              {/* Quick stats */}
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h2 className="text-sm font-semibold text-foreground mb-4">
                  Site Overview
                </h2>
                <div className="space-y-3">
                  {[
                    { label: "Sections on homepage", value: "9", icon: <LayoutDashboard className="w-3.5 h-3.5" /> },
                    { label: "Featured projects", value: `${featuredProjects.length}`, icon: <FolderOpen className="w-3.5 h-3.5" /> },
                    { label: "Tech stack items", value: "38", icon: <Code2 className="w-3.5 h-3.5" /> },
                    { label: "Services offered", value: "5", icon: <Zap className="w-3.5 h-3.5" /> },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        {item.icon}
                        {item.label}
                      </div>
                      <span className="font-semibold text-foreground">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* ── Projects ── */}
          {activeSection === "projects" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-base font-semibold text-foreground">
                    Featured Projects
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    Manage your case study projects
                  </p>
                </div>
                <button className="flex items-center gap-2 rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-white hover:bg-primary/90 transition-colors">
                  <Plus className="w-4 h-4" />
                  Add Project
                </button>
              </div>

              <div className="space-y-3">
                {featuredProjects.map((project) => (
                  <ProjectRow
                    key={project.id}
                    project={project}
                    visible={projectVisibility[project.id]}
                    onToggle={() => toggleVisibility(project.id)}
                  />
                ))}
              </div>

              <div className="rounded-xl border border-amber-500/20 bg-amber-500/10 p-4 text-sm text-amber-400">
                💡 <strong>Note:</strong> Editing projects requires modifying{" "}
                <code className="font-mono text-xs">src/data/projects.ts</code>. A
                full database backend can be connected to enable live editing.
              </div>
            </motion.div>
          )}

          {/* ── Settings ── */}
          {activeSection === "settings" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6 max-w-lg"
            >
              <h2 className="text-base font-semibold text-foreground">Settings</h2>

              <div className="space-y-4">
                {[
                  { label: "Admin PIN", value: "****", type: "password" },
                  { label: "Contact Email", value: "contact@babuangi.com", type: "email" },
                  { label: "WhatsApp Number", value: "+91 98765 43210", type: "tel" },
                  { label: "Calendly URL", value: "https://calendly.com/babuangi", type: "url" },
                ].map((field) => (
                  <div key={field.label}>
                    <label className="text-xs font-medium text-muted-foreground mb-1.5 block">
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      defaultValue={field.value}
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-foreground focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30 transition-all"
                    />
                  </div>
                ))}
              </div>

              <button className="rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-white hover:bg-primary/90 transition-colors">
                Save Settings
              </button>

              <div className="rounded-xl border border-blue-500/20 bg-blue-500/10 p-4 text-sm text-blue-400">
                ℹ️ Settings are currently UI-only. Connect a backend API to persist changes.
              </div>
            </motion.div>
          )}
        </div>
      </main>
    </div>
  );
}

// -----------------------------------------------------------------------------
// ADMIN PAGE
// -----------------------------------------------------------------------------
export default function AdminPage() {
  const [unlocked, setUnlocked] = useState(false);

  useEffect(() => {
    // Check if already unlocked this session
    const session = sessionStorage.getItem("admin_unlocked");
    if (session === "true") setUnlocked(true);
  }, []);

  const handleUnlock = () => {
    sessionStorage.setItem("admin_unlocked", "true");
    setUnlocked(true);
  };

  const handleLogout = () => {
    sessionStorage.removeItem("admin_unlocked");
    setUnlocked(false);
  };

  if (!unlocked) return <PinGate onUnlock={handleUnlock} />;
  return <AdminDashboard onLogout={handleLogout} />;
}
