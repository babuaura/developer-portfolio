"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface ThemeToggleProps {
  variant?: "default" | "ghost" | "outline";
  size?: "default" | "sm" | "lg" | "icon";
  className?: string;
  showLabel?: boolean;
}

export function ThemeToggle({
  variant = "ghost",
  size = "sm",
  className,
  showLabel = false,
}: ThemeToggleProps) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  if (!mounted) {
    return (
      <Button
        variant={variant}
        size={showLabel ? size : "icon"}
        className={cn(
          "rounded-full border border-primary/20 bg-themeToggleButton text-foreground shadow-sm shadow-primary/5",
          className
        )}
        disabled
        aria-label="Toggle theme"
      >
        <Sun className="h-4 w-4" />
        {showLabel && <span className="ml-2">Theme</span>}
      </Button>
    );
  }

  return (
    <Button
      variant={variant}
      size={showLabel ? size : "icon"}
      onClick={toggleTheme}
      className={cn(
        "rounded-full border border-primary/20 bg-themeToggleButton text-foreground shadow-sm shadow-primary/5",
        "hover:-translate-y-0.5 hover:border-primary/35 hover:bg-themeToggleButton/80",
        className
      )}
      aria-label={`Switch to ${resolvedTheme === "dark" ? "light" : "dark"} theme`}
    >
      <motion.div
        key={resolvedTheme}
        initial={{ opacity: 0, rotate: resolvedTheme === "dark" ? -90 : 90 }}
        animate={{ opacity: 1, rotate: 0 }}
        transition={{ duration: 0.5 }}
      >
        {resolvedTheme === "dark" ? (
          <Moon size={16} fill="currentColor" />
        ) : (
          <Sun size={16} className="text-amber-500" fill="currentColor" />
        )}
      </motion.div>
      {showLabel && <span className="ml-2 capitalize">{resolvedTheme}</span>}
    </Button>
  );
}
