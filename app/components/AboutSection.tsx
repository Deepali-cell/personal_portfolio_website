"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import AppImage from "@/components/ui/AppImage";
import {
  SparklesIcon,
  AcademicCapIcon,
  RocketLaunchIcon,
  CodeBracketIcon,
} from "@heroicons/react/24/outline";

const highlights = [
  {
    icon: <CodeBracketIcon className="w-5 h-5" />,
    title: "Full-Stack Engineering",
    desc: "React, Next.js, Node.js — from pixel to database.",
  },
  {
    icon: <SparklesIcon className="w-5 h-5" />,
    title: "AI & LLM Integration",
    desc: "LangChain, RAG pipelines, AI agents that ship to prod.",
  },
  {
    icon: <RocketLaunchIcon className="w-5 h-5" />,
    title: "Ship Fast, Ship Right",
    desc: "Clean code, CI/CD, Vercel deployments — no excuses.",
  },
  {
    icon: <AcademicCapIcon className="w-5 h-5" />,
    title: "Lifelong Learner",
    desc: "Always ahead of the curve — reading papers, building things.",
  },
];

const aboutStats = [
  { value: "6+", label: "Projects Built" },
  { value: "12+", label: "Months Learning" },
  { value: "8", label: "Tech Stacks" },
  { value: "3", label: "AI Frameworks" },
];

export default function AboutSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="relative py-24 sm:py-32 z-10">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-4"
        ></motion.div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: Image + stats — col-span-5 */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="relative rounded-2xl overflow-hidden glass-card">
              <div className="aspect-[4/3] relative">
                <AppImage
                  src="/hero_section_img1.png"
                  alt="Code on a dark monitor screen showing JavaScript and TypeScript, deep shadows, dark office environment with teal glow"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-3">
              {aboutStats?.map((s, i) => (
                <motion.div
                  key={s?.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                  className="glass-card rounded-xl p-4 border border-border/50 text-center glow-primary"
                >
                  <p className="text-2xl font-bold text-gradient-mint">
                    {s?.value}
                  </p>
                  <p className="text-xs text-muted-foreground font-mono mt-1">
                    {s?.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Content — col-span-7 */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-8 flex flex-col justify-between"
          >
            <div className="space-y-6">
              <h2 className="section-heading font-extrabold text-foreground">
                Crafting the future
                <br />
                <span className="text-gradient-primary">
                  one commit at a time.
                </span>
              </h2>

              <div className="space-y-4 text-zinc-400 text-base leading-relaxed">
                <p>
                  I&apos;m{" "}
                  <strong className="text-zinc-200 font-semibold">
                    Deepali Singal
                  </strong>
                  , a Software Engineer and AI Developer. As a fast-learning
                  engineer entering the industry, I specialize in translating
                  complex ideas into functional, production-grade applications.
                  My journey began with building responsive web apps; today, I
                  am deeply focused on engineering AI systems that reason,
                  retrieve, and scale.
                </p>
                <p>
                  I thrive at the intersection of modern full-stack engineering
                  (
                  <strong className="text-zinc-200 font-semibold">
                    Next.js, TypeScript
                  </strong>
                  ) and applied AI architectures like{" "}
                  <strong className="text-emerald-400 font-medium">
                    RAG pipelines, LLM orchestration, and intelligent agents
                  </strong>
                  . I care deeply about writing clean, maintainable code and
                  building features that solve real-world efficiency puzzles.
                </p>
                <p>
                  What I might lack in years of corporate legacy, I more than
                  make up for in velocity, a fresh technical perspective, and an
                  intense drive to build. When I&apos;m not shipping features,
                  I&apos;m benchmarking runtime execution, reading ML papers,
                  and committing to open-source codebases to refine my craft
                  daily.
                </p>
              </div>
            </div>

            {/* Highlight cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {highlights?.map((h, i) => (
                <motion.div
                  key={h?.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                  className="glass-card rounded-xl p-4 border border-border/50 hover:border-cyan-500 transition-colors group"
                >
                  <div className="text-primary mb-2 group-hover:scale-110 transition-transform inline-block">
                    {h?.icon}
                  </div>
                  <h3 className="text-sm font-semibold text-foreground mb-1">
                    {h?.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {h?.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex items-center gap-4 pt-2">
              <button
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="px-6 py-3 bg-gradient-to-r from-violet-600 to-purple-500 text-white rounded-lg text-sm font-semibold hover:from-violet-500 hover:to-purple-400 transition-all shadow-lg shadow-violet-500/30 min-h-[44px]"
              >
                Let&apos;s Work Together
              </button>
              <button
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="text-sm text-muted-foreground hover:text-primary transition-colors font-medium min-h-[44px] flex items-center"
              >
                See My Work →
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
