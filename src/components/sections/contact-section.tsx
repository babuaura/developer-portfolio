"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { siteConfig } from "@/config/site.config";
import { sendContactMessage } from "@/lib/contact-api";
import {
  Mail,
  MessageCircle,
  Linkedin,
  Github,
  ArrowRight,
  Send,
  MapPin,
  Clock,
} from "lucide-react";
import Link from "next/link";

// -----------------------------------------------------------------------------
// CONTACT SECTION
// -----------------------------------------------------------------------------
export function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    budget: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await sendContactMessage({
        ...formState,
        source: "home-contact-section",
      });
      setSubmitted(true);
      setFormState({ name: "", email: "", budget: "", message: "" });
    } catch (error) {
      setError(
        error instanceof Error
          ? error.message
          : "Could not send your message. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const contactLinks = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: siteConfig.links.contactMail,
      href: `mailto:${siteConfig.links.contactMail}`,
      color: "#3B82F6",
      desc: "Typically reply within 24h",
    },
    {
      icon: <MessageCircle className="w-5 h-5" />,
      label: "WhatsApp",
      value: "Quick chat",
      href: "https://wa.me/919791237669",
      color: "#25D366",
      desc: "For quick queries",
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      value: "Babu Angi",
      href: siteConfig.links.linkedin,
      color: "#0A66C2",
      desc: "Connect professionally",
    },
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      value: "@babuangi",
      href: siteConfig.links.github,
      color: "#ffffff",
      desc: "See my open-source work",
    },
  ];

  return (
    <section id="contact" className="relative w-full py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/3 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-primary/8 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 text-center md:flex-row md:items-start md:justify-center md:text-left">
            <span className="inline-flex shrink-0 items-center justify-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-primary/80 md:mt-4">
              <span className="h-px w-8 bg-primary/70 md:w-10" />
              Let&apos;s Work Together
            </span>
            <div className="min-w-0">
              <h2 className="text-3xl md:text-5xl font-black text-foreground mb-4">
                Let&apos;s build something
                <br />
                <span className="bg-gradient-to-r from-primary to-violet-500 bg-clip-text text-transparent">
                  real
                </span>
              </h2>
              <p className="text-muted-foreground max-w-xl text-lg">
                Have a project in mind? Let&apos;s talk about how I can help you
                build it right - from architecture to deployment.
              </p>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* CTA Header */}
            <div className="rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/10 to-violet-500/10 p-6">
              <h3 className="text-xl font-bold text-foreground mb-2">
                Ready to start a project?
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Whether it&apos;s a SaaS platform, AI system, or architecture review —
                I&apos;m here to help you ship with confidence.
              </p>
              <div className="flex flex-col gap-2 text-sm text-muted-foreground sm:flex-row sm:items-center sm:gap-3">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-primary" />
                  Bangalore, India · Remote
                </div>
                <span>·</span>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-primary" />
                  IST (UTC+5:30)
                </div>
              </div>
            </div>

            {/* Contact links */}
            <div className="space-y-3">
              {contactLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4 hover:border-white/20 hover:bg-white/8 transition-all duration-300 group"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${link.color}20`, color: link.color }}
                  >
                    {link.icon}
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-foreground">{link.label}</div>
                    <div className="text-xs text-muted-foreground">{link.desc}</div>
                  </div>
                  <ArrowRight
                    className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1"
                    style={{ color: link.color }}
                  />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right: Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center h-64 text-center"
                >
                  <div className="text-5xl mb-4">✅</div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    I&apos;ll get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="text-xs font-medium text-muted-foreground mb-1.5 block">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) =>
                          setFormState({ ...formState, name: e.target.value })
                        }
                        placeholder="John Smith"
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30 transition-all"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-medium text-muted-foreground mb-1.5 block">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) =>
                          setFormState({ ...formState, email: e.target.value })
                        }
                        placeholder="john@company.com"
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-medium text-muted-foreground mb-1.5 block">
                      Project Budget
                    </label>
                    <select
                      value={formState.budget}
                      onChange={(e) =>
                        setFormState({ ...formState, budget: e.target.value })
                      }
                      className="w-full rounded-xl border border-white/10 bg-background px-4 py-2.5 text-sm text-foreground focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30 transition-all"
                    >
                      <option value="">Select range...</option>
                      <option>Under $2,000</option>
                      <option>$2,000 – $5,000</option>
                      <option>$5,000 – $15,000</option>
                      <option>$15,000+</option>
                      <option>Let&apos;s discuss</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-medium text-muted-foreground mb-1.5 block">
                      Tell me about your project
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formState.message}
                      onChange={(e) =>
                        setFormState({ ...formState, message: e.target.value })
                      }
                      placeholder="What are you building? What's the problem you're solving? What's your timeline?"
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="flex items-center justify-center gap-2 w-full rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-primary/90 transition-all duration-300 disabled:opacity-60 shadow-lg shadow-primary/20"
                  >
                    {loading ? (
                      <>
                        <div className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  {error ? (
                    <p className="text-xs text-red-400 text-center">{error}</p>
                  ) : null}

                  <p className="text-xs text-muted-foreground text-center">
                    Or reach out directly at{" "}
                    <Link
                      href={`mailto:${siteConfig.links.contactMail}`}
                      className="text-primary hover:underline"
                    >
                      {siteConfig.links.contactMail}
                    </Link>
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
