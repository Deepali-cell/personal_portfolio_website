"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { BriefcaseIcon, AcademicCapIcon } from "@heroicons/react/24/outline";

interface TimelineItem {
  type: "work" | "education";
  title: string;
  organization: string;
  period: string;
  location: string;
  description: string[];
  technologies?: string[];
  achievement?: string;
}

const timelineItems: TimelineItem[] = [
  {
    type: "work",
    title: "AI Full Stack Developer Intern",
    organization: "Pinsout Solutions Ltd.",
    period: "Mar 2026 – Jun 2026",
    location: "Hybrid • Noida, India",
    description: [
      "Developed AI-powered full-stack applications using modern JavaScript frameworks and backend technologies.",
      "Built end-to-end AI projects independently, from frontend development to backend integration.",
      "Worked with Generative AI concepts, LLMs, AI models, and API integrations to create intelligent applications.",
      "Collaborated with the development team while following industry-standard development practices.",
    ],
    technologies: [
      "Next.js",
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "TypeScript",
      "OpenAI API",
      "Google Gemini",
      "LangChain",
    ],
  },
  {
    type: "work",
    title: "MERN Stack Developer Intern",
    organization: "Future Intern",
    period: "Feb 2026",
    location: "Remote",
    description: [
      "Built complete MERN stack applications from frontend to backend.",
      "Implemented authentication, REST APIs, database design, and CRUD operations.",
      "Gained practical experience in developing scalable full-stack web applications.",
    ],
    technologies: ["React", "Node.js", "Express", "MongoDB", "JWT", "REST API"],
  },
  {
    type: "work",
    title: "Web Development Intern",
    organization: "CodSoft",
    period: "Dec 2025 – Jan 2026",
    location: "Remote",
    description: [
      "Designed responsive website interfaces using Figma designs.",
      "Built modern web applications using HTML, CSS, JavaScript, and React.",
      "Completed multiple hands-on projects to strengthen frontend development skills.",
      "Learned modern web development workflows and best coding practices.",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "React", "Figma", "Git"],
  },
  {
    type: "education",
    title: "Bachelor of Computer Application(BCA)",
    organization: "Chandigarh University(CU)",
    period: "2023 – 2026",
    location: "Mohali , Punjab",
    description: [
      "Focused on Data Structures & Algorithms, Full-Stack Development, Artificial Intelligence, and Machine Learning.",
      "Actively built multiple full-stack and AI-based projects while completing the degree.",
    ],
    achievement: "(BCA) • Computer Science & Engineering",
  },
];

export default function ExperienceSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" ref={ref} className="relative py-24 sm:py-32 z-10">
      <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-4"
        >
          <div className="w-8 h-px bg-primary" />
          <span className="font-mono text-xs text-primary uppercase tracking-widest">
            Career Journey
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="section-heading font-extrabold text-foreground mb-14"
        >
          Career
          <span className="text-gradient-primary"> Journey</span>
        </motion.h2>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-px timeline-line" />

          <div className="space-y-10">
            {timelineItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.12 }}
                className="relative flex gap-6 sm:gap-10 pl-16 sm:pl-20"
              >
                {/* Node */}
                <div
                  className={`absolute left-3 sm:left-5 top-3 w-7 h-7 rounded-full flex items-center justify-center border-2 z-10 ${
                    item.type === "work"
                      ? "bg-card border-primary text-primary"
                      : "bg-card border-secondary text-secondary"
                  }`}
                >
                  {item.type === "work" ? (
                    <BriefcaseIcon className="w-3.5 h-3.5" />
                  ) : (
                    <AcademicCapIcon className="w-3.5 h-3.5" />
                  )}
                </div>

                {/* Card */}
                <div className="flex-1 glass-card rounded-2xl p-5 sm:p-6 border border-border/50 hover:border-primary/30 transition-colors group">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-3">
                    <div>
                      <h3 className="font-bold text-foreground text-base">
                        {item.title}
                      </h3>
                      <p className="text-primary text-sm font-semibold">
                        {item.organization}
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="font-mono text-xs text-muted-foreground block">
                        {item.period}
                      </span>
                      <span className="font-mono text-xs text-muted-foreground/60 block">
                        {item.location}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-1.5 mb-4">
                    {item.description.map((d, di) => (
                      <li
                        key={di}
                        className="text-sm text-muted-foreground flex items-start gap-2"
                      >
                        <span className="text-primary mt-1.5 shrink-0">▸</span>
                        {d}
                      </li>
                    ))}
                  </ul>

                  {item.technologies && (
                    <div className="flex flex-wrap gap-1.5">
                      {item.technologies.map((tech, idx) => (
                        <span
                          key={tech}
                          className={`px-2 py-0.5 rounded text-xs font-mono ${idx % 2 === 0 ? "tag-aurora" : "tag-cyan"}`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}

                  {item.achievement && (
                    <div className="mt-3 inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/25 rounded-lg glow-primary">
                      <span className="text-primary text-xs">🎓</span>
                      <span className="text-xs text-primary font-medium">
                        {item.achievement}
                      </span>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
