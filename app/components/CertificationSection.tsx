"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ShieldCheckIcon, TrophyIcon } from "@heroicons/react/24/outline";

interface Certification {
  title: string;
  issuer: string;
  year: string;
  icon: React.ReactNode;
  color: string;
  link: string;
}

interface Achievement {
  title: string;
  description: string;
  value: string;
  icon: string;
}

const certifications: Certification[] = [
  {
    title: "AI Full Stack Developer Internship",
    issuer: "Pinsout Solutions Ltd.",
    year: "2026",
    icon: <ShieldCheckIcon className="w-6 h-6" />,
    color: "border-violet-500/30 hover:border-violet-400/60",
    link: "https://drive.google.com/file/d/1i5i220rLkB8wrWkbEie4pTypSmzhy-nd/view?usp=drive_link",
  },
  {
    title: "MERN Stack Developer Internship",
    issuer: "Future Intern",
    year: "2026",
    icon: <ShieldCheckIcon className="w-6 h-6" />,
    color: "border-cyan-400/30 hover:border-cyan-300/60",
    link: "https://drive.google.com/file/d/1P4Bp849lFfN9OWQ9-IYg5lAi9ENpQRqA/view?usp=drive_link",
  },
  {
    title: "Web Development Internship",
    issuer: "CodSoft",
    year: "2026",
    icon: <ShieldCheckIcon className="w-6 h-6" />,
    color: "border-violet-500/30 hover:border-violet-400/60",
    link: "https://drive.google.com/file/d/1rlnpx2yunJA0osmvHHrrbnQ5CSsDHhpe/view?usp=drive_link",
  },
  {
    title: "Microsoft Excel (Basic to Advanced)",
    issuer: "Course Certificate",
    year: "2026",
    icon: <ShieldCheckIcon className="w-6 h-6" />,
    color: "border-purple-400/30 hover:border-purple-300/60",
    link: "https://drive.google.com/file/d/18_Sp-v6AKLFFUzYsvY-4tbZjL2m6Ox3-/view?usp=drive_link",
  },
  {
    title: "Frontend Development Skills Test",
    issuer: "Certified Assessment",
    year: "2026",
    icon: <ShieldCheckIcon className="w-6 h-6" />,
    color: "border-cyan-400/30 hover:border-cyan-300/60",
    link: "https://drive.google.com/file/d/1uuGGgJjIngdzWaxEl1bolU9bnZZONNjS/view?usp=drive_link",
  },
  {
    title: "ICAT Aptitude Test",
    issuer: "ICAT",
    year: "2025",
    icon: <ShieldCheckIcon className="w-6 h-6" />,
    color: "border-violet-400/30 hover:border-violet-300/60",
    link: "https://drive.google.com/file/d/1yXUAa5g7BGGtauXqAENmF5fXHdIakHMK/view?usp=drive_link",
  },
];

const achievements: Achievement[] = [
  {
    title: "15+ Full Stack Projects",
    description:
      "Built real-world MERN Stack and AI applications including TheaterHub, Prescripto, CareerHub, and CollabSpace.",
    value: "15+",
    icon: "🚀",
  },
  {
    title: "3 Industry Internships",
    description:
      "Completed internships in Web Development, MERN Stack Development, and AI Full Stack Development.",
    value: "3",
    icon: "💼",
  },
  {
    title: "AI & MERN Developer",
    description:
      "Hands-on experience building end-to-end AI and Full Stack applications using modern technologies.",
    value: "AI",
    icon: "🤖",
  },
  {
    title: "Continuous Learning",
    description:
      "Earned certifications in Excel, Frontend Development, and completed technical aptitude assessments.",
    value: "6+",
    icon: "📚",
  },
];

export default function CertificationsSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="certifications"
      ref={ref}
      className="relative py-24 sm:py-32 z-10"
    >
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-4"
        ></motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="section-heading font-extrabold text-foreground mb-12"
        >
          Proof of
          <span className="text-gradient-primary"> Work</span>
        </motion.h2>

        <div className="grid lg:grid-cols-12 gap-6">
          {/* Certifications — col-span-5 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 space-y-3"
          >
            <h3 className="font-semibold text-foreground text-sm font-mono uppercase tracking-wider mb-4 flex items-center gap-2">
              <ShieldCheckIcon className="w-4 h-4 text-primary" />
              Certifications
            </h3>
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.08 }}
                className={`glass-card rounded-xl p-4 border ${cert.color} transition-all duration-300 flex items-center gap-4 group hover:glow-primary`}
              >
                <div className="w-10 h-10 rounded-lg bg-muted/50 flex items-center justify-center text-primary shrink-0">
                  {cert.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-foreground text-sm truncate">
                    {cert.title}
                  </p>
                  <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                  <div className="flex items-center justify-between mt-1">
                    <span className="font-mono text-xs text-muted-foreground">
                      {cert.year}
                    </span>
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-primary hover:underline"
                    >
                      View Certificate
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Achievements — col-span-7 */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-7"
          >
            <h3 className="font-semibold text-foreground text-sm font-mono uppercase tracking-wider mb-4 flex items-center gap-2">
              <TrophyIcon className="w-4 h-4 text-primary" />
              Achievements
            </h3>
            <div className="grid sm:grid-cols-2 gap-8">
              {achievements.map((ach, i) => (
                <motion.div
                  key={ach.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.4 + i * 0.08 }}
                  className="glass-card rounded-2xl p-5 border border-border/50 hover:border-primary/30 transition-all group hover:glow-primary"
                >
                  <div className="flex items-start justify-between mb-3">
                    <span className="text-2xl">{ach.icon}</span>
                    <span className="font-mono text-lg font-bold text-gradient-mint">
                      {ach.value}
                    </span>
                  </div>
                  <h4 className="font-bold text-foreground text-sm mb-2">
                    {ach.title}
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {ach.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
