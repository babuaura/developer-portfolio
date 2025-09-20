"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { User } from "lucide-react";

export function AboutHeader() {
  return (
    <div className="text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Badge
          variant="outline"
          className="mb-6 bg-primary/5 text-primary border-primary/20"
        >
          <User className="mr-1 h-3 w-3" />
          About Me
        </Badge>
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl mb-6">
          Babu{" "}
          <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Angi
          </span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Full Stack Developer dedicated to leveraging end-to-end expertise to
          engineer innovative digital solutions sthat seamlessly translate
          complex technology into intuitive user experiences
        </p>
      </motion.div>
    </div>
  );
}
