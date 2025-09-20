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
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  if (!mounted) {
    return (
      <Button
        variant={variant}
        size={showLabel ? size : "icon"}
        className={cn(
          "rounded-full", // Ensure rounded-full for the placeholder
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
        "rounded-full border-1 border-foreground bg-themeToggleButton", // Always ensure the button is rounded-full
        "hover:bg-themeToggleButton/50", // Outer Moon color for dark theme
        className
      )}
      aria-label={`Switch to ${theme} theme`}
    >
      <motion.div
        key={theme}
        initial={{ opacity: 0, rotate: theme === "dark" ? -90 : 90 }}
        animate={{ opacity: 1, rotate: 0 }}
        transition={{ duration: 0.5 }}
      >
        {theme === "dark" ? (
          // Moon icon is white when dark theme is active border-foreground/20 bg-foreground/30
          <Moon size={16} color={"white"} fill={"currentColor"} />
        ) : (
          // Sun icon remains yellow in light theme
          <Sun size={16} color={"gold"} fill={"currentColor"} />
        )}
      </motion.div>
      {showLabel && <span className="ml-2 capitalize">{theme}</span>}
    </Button>
  );
}
