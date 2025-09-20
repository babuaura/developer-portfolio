"use client";

import React, { useEffect, useState, useCallback, useRef } from "react";
import { AnimatePresence } from "framer-motion";
import { usePaletteStore } from "@/store/paletteStore";
import { CommandPalette } from "../navbar/commandPalette";
import { useThemeActions } from "@/store/paletteStore";

export function PaletteManager() {
  const { isPaletteOpen, closePalette } = usePaletteStore();
  const { toggleTheme } = useThemeActions();
  React.useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        usePaletteStore.getState().togglePalette();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <AnimatePresence>
      {isPaletteOpen && (
        <CommandPalette onClose={closePalette} onToggleTheme={toggleTheme} />
      )}
    </AnimatePresence>
  );
}
