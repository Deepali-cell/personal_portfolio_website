"use client";

import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { EnvelopeIcon } from "@heroicons/react/24/outline";

const socialLinks = [
  {
    label: "Email",
    value: "deepalisingal19@gmail.com",
    href: "mailto:deepalisingal19@gmail.com",
    icon: <EnvelopeIcon className="w-5 h-5" />,
  },
  {
    label: "GitHub",
    value: "@deepali-cell",
    href: "https://github.com/Deepali-cell",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/deepali-singal",
    href: "https://www.linkedin.com/in/deepali-singal-5b1a0a28a/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

export default function ContactSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [loading, setLoading] = useState(false);

  return (
    <section id="contact" ref={ref} className="relative py-24 sm:py-32 z-10">
      {/* Background blob */}
      <div className="blob-primary absolute w-96 h-96 bottom-0 right-0 pointer-events-none opacity-50" />

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-4"
        >
          <div className="w-8 h-px bg-primary" />
          <span className="font-mono text-xs text-primary uppercase tracking-widest">
            Contact
          </span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-4">
            <h2 className="section-heading font-extrabold text-foreground">
              Lets build
              <br />
              <span className="text-gradient-primary">something amazing.</span>
            </h2>

            <p className="text-muted-foreground leading-relaxed">
              I am currently open to full-time opportunities, internships,
              freelance work, and exciting collaborations. If you&apos;d like to work
              together or discuss a project, feel free to reach out.
            </p>
          </div>

          {/* Social Links */}
          <div className="space-y-3">
            {socialLinks?.map((s, i) => (
              <motion.a
                key={s?.label}
                href={s?.href}
                target={s?.href?.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.08 }}
                className="flex items-center gap-4 glass-card rounded-xl p-4 border border-border/50 hover:border-primary/40 hover:glow-primary transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary/20 group-hover:glow-primary transition-all">
                  {s?.icon}
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider font-mono text-muted-foreground">
                    {s?.label}
                  </p>
                  <p className="text-sm font-medium text-foreground">
                    {s?.value}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Availability */}
          <div className="relative rounded-xl p-4 bg-zinc-950/40 border border-zinc-900 shadow-xl overflow-hidden group">
            {/* Hover Accent Light Effect */}
            <div className="absolute -inset-px border border-transparent rounded-xl group-hover:border-emerald-500/20 transition-all duration-300" />

            <div className="flex items-center gap-3.5 relative z-10">
              {/* Live Ping Radar Node */}
              <div className="relative flex h-3 w-3 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.8)]"></span>
              </div>

              <div className="space-y-0.5">
                <p className="text-sm font-bold tracking-wide text-zinc-100 font-mono uppercase text-xs">
                  System_Status:{" "}
                  <span className="text-emerald-400">Active</span>
                </p>

                <p className="text-xs text-zinc-400 font-normal">
                  Open for Core Roles &bull;{" "}
                  <span className="font-mono text-zinc-500 text-[11px]">
                    Replies &lt; 24h
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
