"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import { siteConfig } from "@/config/site.config";

export function AboutContent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="space-y-8"
    >
      <Card className="relative bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-sm border-0 overflow-hidden">
        <CardHeader className="relative z-10 flex flex-col items-center justify-center gap-4">
          <div className="relative w-48 h-48 overflow-hidden border-4 border-primary shadow-xl bg-background rounded-xl">
            <Image
              src={siteConfig.author_full_img}
              alt={`${siteConfig.author} profile`}
              width={192}
              height={192}
              className="object-cover w-full h-full rounded-lg"
              priority
            />
            {/* SaaS-style background effect */}
            <div className="absolute inset-0 pointer-events-none z-0">
              <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-[340px] h-[340px] bg-gradient-radial from-primary/30 to-transparent rounded-lg blur-2xl opacity-40 dark:opacity-60" />
              <div className="absolute bottom-0 right-0 w-[180px] h-[180px] bg-gradient-to-br from-secondary/30 to-transparent rounded-lg blur-xl opacity-30 dark:opacity-50" />
            </div>
          </div>
          <div className="text-center text-3xl font-extrabold text-primary mt-4">
            Babu Angi
          </div>
        </CardHeader>
        <CardContent className="space-y-4 relative z-10">
          <p className="text-muted-foreground leading-relaxed">
            Hi, I&apos;m Babu Angi, a Full Stack Engineer and SaaS enthusiast
            specializing in modern, scalable web application development.
            Leveraging expertise in TypeScript, React, and Next.js, I focus on
            transforming ideas into beautiful, performant products that delight
            users and drive measurable business growth."
          </p>
          <p className="text-muted-foreground leading-relaxed">
            My journey in tech is rooted in a drive to solve real-world problems
            and deliver tangible value. I've collaborated with both startups and
            global teams, developing robust, high-impact solutions across
            e-commerce, productivity, and essential developer tooling. My core
            philosophy centers on clean code, thoughtful design, and continuous
            technical growth.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Beyond professional engagements, I maintain technical edge by
            actively exploring new frameworks, contributing to open source
            projects, and sharing insights with the broader developer community.
            I'm always ready for the next challenge—let's connect and architect
            something impactful.
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
