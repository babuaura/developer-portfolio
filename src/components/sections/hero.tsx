"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/config/site.config";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";
import BatchTech from "../ui/badge-tech";
import {
  SiNextdotjs,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiTailwindcss,
  SiPostgresql,
} from "react-icons/si";
import { IoLogoGithub } from "react-icons/io";
import Image from "next/image";
import Stat from "./stat";
import Typewriter from "./typewriter";
import CopyToClipboard from "@/components/ui/copyToClipboard";

export function HeroSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="w-full min-h-screen grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-10 lg:gap-10 items-center 
                  justify-center relative overflow-hidden z-10 p-4 sm:p-12 lg:p-8 pt-20 sm:pt-20 lg:pt-18"
    >
      {/* Column 1: Main Content and CTA */}
      <div className="relative mx-auto w-full max-w-2xl text-center md:text-left">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-8"
        >
          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Babu Angi -{" "}
            <Typewriter
              words={[
                "Web Developer",
                "Node & Next Expert ",
                "Typescript",
                "AI Enthusiast",
              ]}
              typingSpeed={100}
              deletingSpeed={60}
              delayBetween={1200}
            />
          </h1>
          {/* Description */}
          <p className="mx-auto max-w-2xl text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed">
            Specializing in the Node.js/Next.js stack to develop optimized,
            full-stack applications built for stability and speed. Seeking
            opportunities in software architecture and front-end excellence.
          </p>
          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-evenly gap-4"
          >
            <Button
              asChild
              size="lg"
              className="group relative overflow-hidden bg-primary text-white dark:bg-white dark:text-black px-6 sm:px-8 
              py-3 sm:py-4 text-sm sm:text-base font-bold shadow-xl hover:shadow-2xl transition-all duration-300 w-full sm:w-auto"
            >
              <Link
                href={`${siteConfig.links.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center"
              >
                <IoLogoGithub className="w-5 h-5" />
                <span>GitHub</span>
                {/* View Projects */}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 text-white dark:text-black" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="group border-primary/90 bg-background/50 backdrop-blur-sm px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-medium 
              hover:bg-background/80 hover:border-primary/100 transition-all duration-300 w-full sm:w-auto"
            >
              <Link
                href={`${siteConfig.pdf_download}`}
                download="BabuAngi-FullStackDeveloper_gv1okt.pdf"
                target="_blank"
              >
                <Zap
                  className="mr-2 h-4 w-4 transition-transform group-hover:scale-110 dark:text-white text-black"
                  fill="currentColor"
                />
                Download CV
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
          <motion.div>
            <div className="mt-8 grid grid-cols-3 gap-3 text-center opacity-90">
              <Stat number="4+" label="Years" />
              <Stat number="5+" label="Projects" />
              <Stat number="10k" label="Users" />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Column 2: Profile Image and Tech Snapshot */}
      <div className="relative mx-auto w-full max-w-md text-center md:text-left">
        {/* Profile image with GLOW WRAPPER */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative w-48 h-48 md:w-56 md:h-56 mx-auto rounded-full overflow-visible mb-2
                     transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl"
        >
          <div className="absolute inset-0 rounded-full animate-glow z-0" />

          {/* Image Container */}
          <div className="relative w-full h-full rounded-full overflow-hidden z-10">
            <Image
              src={siteConfig.author_img}
              alt={`${siteConfig.author} profile`}
              width={192}
              height={192}
              className="object-cover w-full h-full rounded-full"
              priority
            />
          </div>
        </motion.div>

        {/* Tech snapshot and contact (Uncommented and improved) */}
        <motion.div
          initial={{ x: 30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="p-6 bg-white/70 dark:bg-gray-900/60 backdrop-blur rounded-2xl shadow-xl ring-2 ring-primary/70 md:ml-4"
        >
          <h3 className="font-semibold mb-3 text-lg">Tech Snapshot</h3>
          <div className="flex flex-wrap justify-center md:justify-start gap-3">
            <BatchTech icon={<SiReact />} label="React" />
            <BatchTech icon={<SiNextdotjs />} label="Next" />
            <BatchTech icon={<SiNodedotjs />} label="Node" />
            <BatchTech icon={<SiTailwindcss />} label="Tailwind" />
            <BatchTech icon={<SiMongodb />} label="MongoDB" />
            <BatchTech icon={<SiPostgresql />} label="Postgresql" />
          </div>
          <div className="flex flex-wrap gap-3 mt-6">
            <CopyToClipboard textToCopy={siteConfig.links.contactMail} />
            <Button
              asChild
              variant="outline"
              size="lg"
              className=" group border-primary/90 bg-background/50 backdrop-blur-sm px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-medium hover:bg-background/80 hover:border-primary/50 transition-all duration-300 w-full sm:w-auto"
            >
              <Link href={`${siteConfig.links.email}`}>
                Get in Touch
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <div className="absolute left-1/4 top-1/4 h-40 w-40 sm:h-64 sm:w-64 rounded-full bg-primary/10 blur-3xl pointer-events-none select-none" />
      <div className="absolute right-1/4 bottom-1/4 h-40 w-40 sm:h-64 sm:w-64 rounded-full bg-secondary/10 blur-3xl pointer-events-none select-none" />
    </motion.section>
  );
}
