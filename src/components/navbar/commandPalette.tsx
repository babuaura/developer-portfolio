"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { FiSearch, FiDownload, FiGlobe, FiSun, FiMoon } from "react-icons/fi";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

interface CommandPaletteProps {
  onClose: () => void;
  onToggleTheme: () => void;
}

interface Action {
  label: string;
  href?: string;
  actionId: "goto" | "download" | "theme" | "external";
  icon: React.ElementType;
}

const ACTIONS: Action[] = [
  {
    label: "Go to Projects",
    actionId: "goto",
    href: "#projects",
    icon: FiGlobe,
  },
  { label: "Go to Contact", actionId: "goto", href: "#contact", icon: FiGlobe },
  {
    label: "Download Resume",
    actionId: "download",
    href: "/resume.pdf",
    icon: FiDownload,
  },
  { label: "Toggle Theme", actionId: "theme", icon: FiSun },
];

export function CommandPalette({
  onClose,
  onToggleTheme,
}: CommandPaletteProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [q, setQ] = useState<string>("");
  const router = useRouter();

  const results = ACTIONS.filter((a) =>
    a.label.toLowerCase().includes(q.toLowerCase())
  );

  useEffect(() => {
    const prevActiveElement = document.activeElement as HTMLElement | null;
    inputRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", onKey);

    return () => {
      document.removeEventListener("keydown", onKey);
      if (prevActiveElement && prevActiveElement.focus) {
        prevActiveElement.focus();
      }
    };
  }, [onClose]);

  const handleActionClick = (action: Action) => {
    switch (action.actionId) {
      case "goto":
        if (action.href) {
          window.location.hash = action.href;
        }
        break;
      case "download":
        if (action.href) {
          window.open(action.href, "_blank");
        }
        break;
      case "theme":
        onToggleTheme();
        break;
      default:
        break;
    }
    onClose();
  };

  const [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {
    const handleKeyNav = (e: KeyboardEvent) => {
      if (results.length === 0) return;

      if (e.key === "ArrowDown") {
        e.preventDefault();
        setActiveIndex((prev) => (prev + 1) % results.length);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setActiveIndex((prev) => (prev - 1 + results.length) % results.length);
      } else if (e.key === "Enter" && activeIndex !== -1) {
        e.preventDefault();
        handleActionClick(results[activeIndex]);
      }
    };

    document.addEventListener("keydown", handleKeyNav);
    return () => document.removeEventListener("keydown", handleKeyNav);
  }, [results, activeIndex, handleActionClick]);

  return (
    <motion.div
      className="fixed inset-0 z-[1000] flex items-start justify-center pt-[15vh] px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        aria-hidden
      />

      <motion.div
        role="dialog"
        aria-modal="true"
        aria-label="Command Palette"
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-xl bg-background dark:bg-gray-900 rounded-2xl shadow-2xl ring-1 ring-border/50 overflow-hidden"
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        exit={{ y: 20 }}
      >
        <div className="flex items-center gap-3 px-4 py-3 border-b border-border/70">
          <FiSearch className="h-5 w-5 opacity-60 text-foreground" />
          <input
            ref={inputRef}
            value={q}
            onChange={(e) => {
              setQ(e.target.value);
              setActiveIndex(-1);
            }}
            placeholder="Search for a project, link, or command..."
            className="w-full bg-transparent outline-none py-2 text-foreground placeholder-muted-foreground text-base"
            type="search"
          />
          <kbd className="text-xs px-2 py-1 rounded-md border border-border/70 bg-secondary text-secondary-foreground">
            ESC
          </kbd>
        </div>

        <ul className="max-h-64 overflow-y-auto divide-y divide-border/50">
          {results.length === 0 && (
            <li className="px-4 py-3 text-sm text-muted-foreground">
              No matching commands found.
            </li>
          )}
          {results.map((r, index) => {
            const Icon = r.icon;
            const isSelected = index === activeIndex;
            return (
              <li
                key={r.label}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 text-sm text-foreground/90 cursor-pointer transition-colors duration-150",
                  isSelected
                    ? "bg-primary/20 dark:bg-primary/30"
                    : "hover:bg-primary/10 dark:hover:bg-gray-800"
                )}
                onClick={() => handleActionClick(r)}
                onMouseEnter={() => setActiveIndex(index)}
              >
                {/* Use FiSun/FiMoon dynamically if possible, or use one fixed icon */}
                <Icon className="h-4 w-4 opacity-60" />
                <span>{r.label}</span>
              </li>
            );
          })}
        </ul>
      </motion.div>
    </motion.div>
  );
}
