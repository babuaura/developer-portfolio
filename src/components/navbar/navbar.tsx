"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useScroll, useSpring } from "framer-motion";
import {
  Menu,
  X,
  Globe,
  Coffee,
  Command,
  Home,
  FolderKanban,
  BriefcaseBusiness,
  Layers3,
  UserRound,
  Send,
} from "lucide-react";
import { siteConfig } from "@/config/site.config";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { ThemeToggle } from "./theme-toogle";
import { usePaletteStore } from "@/store/paletteStore";

const iconMap = {
  globe: Globe,
  coffee: Coffee,
};

const navIconMap = {
  Home,
  Projects: FolderKanban,
  Services: BriefcaseBusiness,
  Stack: Layers3,
  About: UserRound,
  Contact: Send,
};

function BrandMark() {
  const outerFlamePath =
    "M33.8 5.5C40.7 14.3 42 21.2 38 29.4c4-2.2 6.4-5.9 7.1-10.6 7 8.1 9.6 16 7.7 23.5C50.4 52 42 59.5 31.5 59.5 20 59.5 11.6 51.2 11.6 40.8c0-7.8 4.5-13.3 9.2-18.8 4.5-5.3 8.9-10.6 8.9-18.1 1.5.4 2.9.9 4.1 1.6Z";
  const innerFlamePath =
    "M32 18.5c3.8 5.4 3.9 10.1 1.7 14.3 2.9-1.1 5.3-3 6.9-5.8 3 4.8 3.8 9.4 2.4 13.8-1.7 5.4-6.1 9.4-11.8 9.4-6.3 0-10.6-4.8-10.6-10.7 0-4.6 2.7-7.9 5.4-11.3 2.8-3.4 5.5-6.8 5.1-11.8.3.1.6.3.9.5Z";

  return (
    <span className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-cyan-300/25 bg-slate-950 shadow-[0_12px_34px_rgba(15,23,42,0.45)]">
      <motion.span
        className="absolute inset-0 rounded-xl bg-[radial-gradient(circle_at_36%_22%,rgba(251,191,36,0.18),transparent_38%),radial-gradient(circle_at_70%_72%,rgba(34,211,238,0.16),transparent_46%),linear-gradient(135deg,rgba(37,99,235,0.22),rgba(15,23,42,0))]"
        animate={{ opacity: [0.72, 1, 0.72] }}
        transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }}
      />
      <span className="absolute inset-[3px] rounded-[0.6rem] border border-white/10" />
      <motion.svg
        className="relative h-[21px] w-[21px] overflow-visible"
        viewBox="0 0 64 64"
        role="img"
        aria-label="Babu Angi flame"
        initial={false}
      >
        <defs>
          <filter id="brand-flame-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2.6" result="blur" />
            <feColorMatrix
              in="blur"
              type="matrix"
              values="1 0 0 0 0.96 0 1 0 0 0.48 0 0 1 0 0.08 0 0 0 .62 0"
            />
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <linearGradient id="brand-flame-stroke" x1="18" y1="8" x2="47" y2="57">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="48%" stopColor="#cbd5e1" />
            <stop offset="100%" stopColor="#64748b" />
          </linearGradient>
          <linearGradient id="brand-flame-ember" x1="27" y1="18" x2="38" y2="50">
            <stop offset="0%" stopColor="#fde68a" />
            <stop offset="52%" stopColor="#f59e0b" />
            <stop offset="100%" stopColor="#ea580c" />
          </linearGradient>
        </defs>

        <motion.g
          animate={{
            rotate: [-0.8, 1.1, -0.6, -0.8],
            scaleX: [1, 0.985, 1.01, 1],
            y: [0, -0.35, 0.2, 0],
          }}
          style={{ originX: "50%", originY: "72%" }}
          transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <path
            d={outerFlamePath}
            fill="#020617"
            stroke="url(#brand-flame-stroke)"
            strokeWidth="3.8"
            strokeLinejoin="round"
          />
          <motion.path
            d={outerFlamePath}
            fill="none"
            stroke="#fbbf24"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="18 118"
            filter="url(#brand-flame-glow)"
            animate={{ strokeDashoffset: [116, -20], opacity: [0.1, 0.72, 0.1] }}
            transition={{ duration: 2.55, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.g>

        <motion.path
          d={innerFlamePath}
          fill="none"
          stroke="url(#brand-flame-ember)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#brand-flame-glow)"
          animate={{
            opacity: [0.78, 1, 0.86, 0.78],
            pathLength: [0.92, 1, 0.96, 0.92],
            scale: [1, 1.035, 0.99, 1],
          }}
          style={{ originX: "50%", originY: "76%" }}
          transition={{ duration: 1.85, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.svg>
    </span>
  );
}

// -----------------------------------------------------------------------------
// TYPE DEFINITIONS
// -----------------------------------------------------------------------------

export function Navbar() {
  const { openPalette } = usePaletteStore();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);
  const [isVisible] = React.useState(true);
  const [activeHref, setActiveHref] = React.useState(pathname);
  const { scrollYProgress } = useScroll();
  const progressScale = useSpring(scrollYProgress, {
    stiffness: 130,
    damping: 24,
    mass: 0.3,
  });

  React.useEffect(() => {
    const sectionLinks = siteConfig.navigation.filter((item) =>
      item.href.startsWith("/#")
    );
    const sectionIds = sectionLinks.map((item) => item.href.slice(2));
    let frameId = 0;

    const updateFromLocation = () => {
      if (window.location.pathname !== "/") {
        setActiveHref(window.location.pathname);
        return;
      }

      setActiveHref(window.location.hash ? `/${window.location.hash}` : "/");
    };

    if (pathname !== "/") {
      updateFromLocation();
      window.addEventListener("hashchange", updateFromLocation);
      return () => window.removeEventListener("hashchange", updateFromLocation);
    }

    const updateActiveSection = () => {
      frameId = 0;

      if (window.scrollY < 160) {
        setActiveHref("/");
        return;
      }

      const markerY = window.innerHeight * 0.38;
      const sections = sectionIds
        .map((id) => ({ id, rect: document.getElementById(id)?.getBoundingClientRect() }))
        .filter((section): section is { id: string; rect: DOMRect } => Boolean(section.rect));

      const sectionAtMarker = sections.find(
        ({ rect }) => rect.top <= markerY && rect.bottom >= markerY
      );

      if (sectionAtMarker) {
        setActiveHref(`/#${sectionAtMarker.id}`);
        return;
      }

      const previousSection = sections
        .filter(({ rect }) => rect.top < markerY)
        .sort((a, b) => b.rect.top - a.rect.top)[0];

      setActiveHref(previousSection ? `/#${previousSection.id}` : "/");
    };

    const requestActiveSectionUpdate = () => {
      if (!frameId) {
        frameId = window.requestAnimationFrame(updateActiveSection);
      }
    };

    updateActiveSection();
    window.addEventListener("hashchange", updateFromLocation);
    window.addEventListener("scroll", requestActiveSectionUpdate, { passive: true });
    window.addEventListener("resize", requestActiveSectionUpdate);

    return () => {
      if (frameId) window.cancelAnimationFrame(frameId);
      window.removeEventListener("hashchange", updateFromLocation);
      window.removeEventListener("scroll", requestActiveSectionUpdate);
      window.removeEventListener("resize", requestActiveSectionUpdate);
    };
  }, [pathname]);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{
        opacity: 1,
        y: isVisible ? 0 : -100,
      }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
        y: { duration: 0.3, ease: "easeInOut" },
      }}
      className="fixed left-1/2 top-2 z-50 w-[min(calc(100%-1rem),78rem)] -translate-x-1/2 overflow-hidden rounded-2xl border border-cyan-300/15 bg-slate-950/72 shadow-[0_18px_60px_rgba(2,6,23,0.35)] backdrop-blur-2xl ring-1 ring-white/10"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_0%,rgba(59,130,246,0.22),transparent_34%),radial-gradient(circle_at_82%_0%,rgba(34,211,238,0.1),transparent_30%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-200/45 to-transparent" />
      <motion.div
        className="absolute bottom-0 left-0 h-px w-full origin-left bg-gradient-to-r from-cyan-300 via-primary to-blue-400"
        style={{ scaleX: progressScale }}
      />

      <div className="relative mx-auto grid h-12 max-w-7xl grid-cols-[1fr_auto_1fr] items-center px-2.5 sm:px-4">
        {/* Logo / Brand */}
        <Link
          href="/"
          className="flex min-w-0 items-center gap-2 rounded-xl focus-visible:ring-2 focus-visible:ring-primary/50"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex min-w-0 items-center gap-2"
          >
            <BrandMark />
            <span className="hidden min-w-0 sm:flex flex-col leading-none">
              <span className="truncate text-sm font-black tracking-tight text-white">
                {siteConfig.author}
              </span>
              <span className="mt-1 text-[9px] font-semibold uppercase tracking-[0.2em] text-cyan-100/45">
                SaaS Engineer
              </span>
            </span>
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-0.5 rounded-xl border border-white/10 bg-white/[0.045] p-1 shadow-inner shadow-black/25 md:flex">
          {siteConfig.navigation.map((item) => {
            const isActive = item.href === activeHref;
            const Icon = navIconMap[item.label as keyof typeof navIconMap];

            return (
            <motion.div
              whileHover={{ y: -2 }}
              whileFocus={{ y: -2 }}
              transition={{ type: "spring", stiffness: 500, damping: 18 }}
              className="relative inline-block"
              key={item.href}
            >
              <Link
                href={item.href}
                onClick={() => setActiveHref(item.href)}
                className={cn(
                  "group relative flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-bold transition-colors focus:text-white lg:px-3.5",
                  isActive
                    ? "text-white"
                    : "text-slate-300/70 hover:text-white"
                )}
                tabIndex={0}
              >
                {isActive && (
                  <motion.span
                    layoutId="navbar-active-pill"
                    className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary via-blue-500 to-cyan-400 shadow-[0_10px_26px_rgba(59,130,246,0.32)]"
                    transition={{ type: "spring", stiffness: 450, damping: 34 }}
                  />
                )}
                {Icon && <Icon className="relative h-3.5 w-3.5" />}
                <span className="relative">{item.label}</span>
              </Link>
            </motion.div>
            );
          })}
        </nav>

        {/* Actions */}
        <div className="flex items-center justify-end gap-1.5">
          <div className="hidden sm:block">
            <div className="flex items-center gap-1.5">
              <button
                onClick={openPalette}
                className="inline-flex h-8 items-center gap-1 rounded-lg border border-white/10 bg-white/[0.06] px-2.5 text-xs font-bold text-white shadow-sm shadow-primary/5 transition hover:-translate-y-0.5 hover:border-cyan-300/30 hover:bg-white/[0.1]"
                aria-label="Open command palette"
              >
                <Command className="h-3.5 w-3.5" />K
              </button>
              {/* Theme Toggle */}
              <ThemeToggle className="h-8 w-8 rounded-lg border-white/10 bg-white/[0.06] text-white hover:border-cyan-300/30 hover:bg-white/[0.1]" />
            </div>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                className="h-8 w-8 rounded-lg border border-white/10 bg-white/[0.08] p-0 text-white"
                aria-label="Toggle menu"
              >
                {isOpen ? (
                  <X className="h-4 w-4" />
                ) : (
                  <Menu className="h-4 w-4" />
                )}
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 border-foreground/10 bg-background/95 backdrop-blur-xl">
              <SheetHeader>
                <SheetTitle className="flex items-center justify-between gap-4 text-left">
                  <span className="flex items-center gap-2">
                    <BrandMark />
                    {siteConfig.siteName}
                  </span>
                  <ThemeToggle />
                </SheetTitle>
              </SheetHeader>

              <div className="mt-6 space-y-6">
                {/* Navigation Links */}
                <nav className="space-y-1">
                  {siteConfig.navigation.map((item) => {
                    const Icon = navIconMap[item.label as keyof typeof navIconMap];

                    return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => {
                        setActiveHref(item.href);
                        setIsOpen(false);
                      }}
                      className={cn(
                        "flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground",
                        activeHref === item.href
                          ? "bg-accent text-accent-foreground"
                          : "text-foreground/60 hover:text-foreground"
                      )}
                    >
                      {Icon && <Icon className="h-4 w-4" />}
                      {item.label}
                      {activeHref === item.href && (
                        <Badge variant="secondary" className="ml-auto">
                          Current
                        </Badge>
                      )}
                    </Link>
                    );
                  })}
                </nav>

                <Separator />

                {/* Bio */}
                <div className="space-y-3">
                  <h3 className="text-sm font-semibold">About</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {siteConfig.description}
                  </p>
                </div>

                <Separator />

                {/* Social Links */}
                <div className="space-y-3">
                  <h3 className="text-sm font-semibold">Connect</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {siteConfig.social.map((social) => {
                      const Icon = social.icon
                        ? iconMap[social.icon as keyof typeof iconMap]
                        : null;
                      return (
                        <Button
                          key={social.url}
                          variant="outline"
                          size="sm"
                          asChild
                          className="justify-start"
                        >
                          <Link
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {Icon && <Icon className="mr-2 h-4 w-4" />}
                            {social.label}
                          </Link>
                        </Button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}
