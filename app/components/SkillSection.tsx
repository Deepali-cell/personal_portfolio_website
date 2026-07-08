"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  id: string;
  title: string;
  emoji: string;
  accentClass: string; // Dynamic neon color accent mapping
  skills: Skill[];
  colSpan?: string;
}

const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend Layer",
    emoji: "🎨",
    accentClass:
      "group-hover:border-emerald-500/40 shadow-emerald-500/5 text-emerald-400 prog-emerald",
    colSpan: "md:col-span-2",
    skills: [
      { name: "React / Next.js 14+ (App Router)", level: 95 },
      { name: "TypeScript (Strict Mode)", level: 90 },
      { name: "Tailwind CSS & Framer Motion", level: 92 },
      { name: "JavaScript / ES6+", level: 95 },
      { name: "Semantic HTML5 / Core CSS3", level: 98 },
    ],
  },
  {
    id: "backend",
    title: "Backend Core",
    emoji: "⚙️",
    accentClass:
      "group-hover:border-teal-500/40 shadow-teal-500/5 text-teal-400 prog-teal",
    colSpan: "md:col-span-1",
    skills: [
      { name: "Node.js Runtime", level: 88 },
      { name: "Express.js Framework", level: 85 },
      { name: "RESTful Architecture / APIs", level: 90 },
    ],
  },
  {
    id: "databases",
    title: "Data Persistence",
    emoji: "🗄️",
    accentClass:
      "group-hover:border-purple-500/40 shadow-purple-500/5 text-purple-400 prog-purple",
    colSpan: "md:col-span-1",
    skills: [
      { name: "MongoDB (NoSQL)", level: 85 },
      { name: "MySQL / Relational DBs", level: 80 },
    ],
  },
  {
    id: "ai",
    title: "Applied Intelligence & AI",
    emoji: "🤖",
    accentClass:
      "group-hover:border-indigo-400/40 shadow-indigo-400/5 text-indigo-400 prog-indigo",
    colSpan: "md:col-span-2",
    skills: [
      { name: "Python / Data Extraction", level: 88 },
      { name: "LangChain Orchestration", level: 85 },
      { name: "OpenAI & Anthropic API Architectures", level: 92 },
      { name: "Contextual RAG / Autonomous Agents", level: 82 },
    ],
  },
  {
    id: "devops",
    title: "Infrastructure & Continuous Deployment",
    emoji: "☁️",
    accentClass:
      "group-hover:border-cyan-500/40 shadow-cyan-500/5 text-cyan-400 prog-cyan",
    colSpan: "md:col-span-3",
    skills: [
      { name: "Version Control (Git / GitHub Workflow)", level: 95 },
      { name: "Vercel Build Pipelines & Edge Deployments", level: 88 },
      { name: "Docker Containerization", level: 78 },
    ],
  },
];

function SkillBar({
  name,
  level,
  delay,
  inView,
  accentClass,
}: {
  name: string;
  level: number;
  delay: number;
  inView: boolean;
  accentClass: string;
}) {
  // Determine tailwind color for progress bar based on category settings
  let progressBg = "bg-emerald-500";
  if (accentClass.includes("prog-teal")) progressBg = "bg-teal-500";
  if (accentClass.includes("prog-purple")) progressBg = "bg-purple-500";
  if (accentClass.includes("prog-indigo")) progressBg = "bg-indigo-400";
  if (accentClass.includes("prog-cyan")) progressBg = "bg-cyan-500";

  return (
    <div className="space-y-1.5 group/bar">
      <div className="flex justify-between items-center text-xs">
        <span className="font-medium text-zinc-300 group-hover/bar:text-zinc-100 transition-colors">
          {name}
        </span>
        <span className="font-mono text-zinc-500 group-hover/bar:text-zinc-300">
          {level}%
        </span>
      </div>
      <div className="h-1 bg-zinc-900 rounded-full overflow-hidden border border-zinc-950">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.4, delay, ease: [0.16, 1, 0.3, 1] }}
          className={`h-full rounded-full opacity-85 group-hover/bar:opacity-100 transition-opacity ${progressBg} shadow-[0_0_8px_rgba(255,255,255,0.1)]`}
        />
      </div>
    </div>
  );
}

export default function SkillsSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="skills"
      ref={ref}
      className="relative py-24 sm:py-32 z-10 text-zinc-50"
    >
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        {/* Section Metadata Label */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-4"
        ></motion.div>

        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl font-black tracking-tight mb-12 text-zinc-100 leading-none"
        >
          Technical{" "}
          <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-purple-400 bg-clip-text text-transparent">
            Capabilities
          </span>
        </motion.h2>

        {/* Modern Cyber Bento Grid Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {skillCategories.map((cat, catIdx) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + catIdx * 0.08 }}
              className={`${cat.colSpan || ""} rounded-2xl p-6 bg-zinc-950/40 border border-zinc-900 hover:bg-zinc-950/70 transition-all duration-300 group relative overflow-hidden hover:shadow-xl`}
            >
              {/* Subtle dynamic glow ring on hover */}
              <div
                className={`absolute -inset-px border border-transparent rounded-2xl transition-all duration-300 ${cat.accentClass.split(" ")[0]}`}
              />

              <div className="relative z-10">
                {/* Bento Card Header */}
                <div className="flex items-center justify-between mb-6 border-b border-zinc-900 pb-3">
                  <div className="flex items-center gap-2.5">
                    <span className="text-xl select-none filter drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
                      {cat.emoji}
                    </span>
                    <h3 className="font-bold text-zinc-100 tracking-wide font-mono text-sm uppercase">
                      {cat.title}
                    </h3>
                  </div>
                  {/* Pseudo terminal signifier */}
                  <span
                    className={`font-mono text-[9px] uppercase tracking-wider opacity-60 group-hover:opacity-100 transition-opacity ${cat.accentClass.split(" ")[2]}`}
                  >
                    [active]
                  </span>
                </div>

                {/* Skill Bars Stack */}
                <div className="space-y-4">
                  {cat.skills.map((skill, skillIdx) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      delay={0.2 + catIdx * 0.08 + skillIdx * 0.04}
                      inView={inView}
                      accentClass={cat.accentClass}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
