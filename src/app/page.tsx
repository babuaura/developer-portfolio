"use client";

// import React, { useEffect, useState, useCallback, useRef } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { FiSearch } from "react-icons/fi";
import { HeroSection } from "@/components/sections/hero";
import { cn } from "@/lib/utils"; // Assuming you have a cn utility

// -----------------------------------------------------------------------------
// MAIN PAGE COMPONENT
// -----------------------------------------------------------------------------

export default function Home() {
  return (
    <main className="w-full">
      <HeroSection />
    </main>
  );
}
