import Link from "next/link";
import { siteConfig } from "@/config/site.config";
import { Github, Linkedin, Mail, Globe } from "lucide-react";

const navGroups = [
  {
    label: "Navigation",
    links: [
      { label: "Home", href: "/" },
      { label: "Projects", href: "/projects" },
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    label: "Sections",
    links: [
      { label: "Services", href: "/#services" },
      { label: "Tech Stack", href: "/#stack" },
      { label: "Architecture", href: "/#architecture" },
      { label: "Process", href: "/#process" },
    ],
  },
  {
    label: "Connect",
    links: [
      { label: "GitHub", href: siteConfig.links.github, external: true },
      { label: "LinkedIn", href: siteConfig.links.linkedin, external: true },
      { label: "Email", href: siteConfig.links.email, external: true },
      { label: "Privacy Policy", href: "/privacy-policy" },
    ],
  },
];

const socialIcons = [
  { icon: <Github className="w-4 h-4" />, href: siteConfig.links.github, label: "GitHub" },
  { icon: <Linkedin className="w-4 h-4" />, href: siteConfig.links.linkedin, label: "LinkedIn" },
  { icon: <Mail className="w-4 h-4" />, href: siteConfig.links.email, label: "Email" },
  { icon: <Globe className="w-4 h-4" />, href: siteConfig.links.website, label: "Website" },
];

export function FooterSection() {
  return (
    <footer className="relative border-t border-white/10 bg-background/60 backdrop-blur-xl">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <div className="text-xl font-black text-foreground">
                <span className="text-primary">Babu</span> Angi
              </div>
              <div className="text-xs text-muted-foreground">
                Full Stack Developer & SaaS Builder
              </div>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mb-6">
              Building scalable SaaS platforms, AI systems, and production-grade
              applications that actually work at scale.
            </p>

            {/* Status */}
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1.5 text-xs font-medium text-emerald-400 mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Available for new projects
            </div>

            {/* Social links */}
            <div className="flex gap-2">
              {socialIcons.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-white/20 hover:bg-white/10 transition-all duration-300"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Nav groups */}
          {navGroups.map((group) => (
            <div key={group.label}>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                {group.label}
              </h3>
              <ul className="space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      target={"external" in link && link.external ? "_blank" : undefined}
                      rel={"external" in link && link.external ? "noopener noreferrer" : undefined}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground text-center sm:text-left">
            © {new Date().getFullYear()} Babu Angi. Built with{" "}
            <a href="https://nextjs.org" className="text-primary hover:underline">Next.js</a>
            {" "}·{" "}
            <a href="https://tailwindcss.com" className="text-primary hover:underline">Tailwind CSS</a>
            {" "}·{" "}
            <a href="https://www.framer.com/motion" className="text-primary hover:underline">Framer Motion</a>
          </p>
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            All systems operational
          </div>
        </div>
      </div>
    </footer>
  );
}
