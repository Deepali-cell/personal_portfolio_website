"use client";

import React, { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import AppImage from "@/components/ui/AppImage";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  featured?: boolean;
}

const projects: Project[] = [
             {
               id:1,
  title: "AI Assistant with Web Search & Document Intelligence",
  description:
    "A multi-agent AI platform that delivers ChatGPT-like conversations, intelligently performs web searches when required, and features a RAG-powered document chat system. Users can upload PDF documents and ask context-aware questions based on their content.",
  githubUrl: "https://github.com/Deepali-cell/genai_practice",
  liveUrl: "https://genai-practice.vercel.app/",
  image: "/assets/ai.png",
      imageAlt:
      "Personal Ai Assistant for web searching and document searching",
        featured:true,
    tags: [
    "React.js",
    "Node.js",
    "Express",
    "Pinecone",
    "RAG",
    "LLM",
    "LangChain",
    "Tailwind CSS",
    "shadcn/ui",
    "Embeddings",
  ],
},
  {
    id: 2,
    title: "FitGen AI",
    description:
      "AI-powered fitness platform that creates personalized workout and nutrition plans based on user goals and fitness levels.",
    image: "/assets/fitgen.png",
    imageAlt:
      "FitGen AI fitness dashboard with workout plans and nutrition tracking",
    tags: ["Next.js", "AI", "PostgrageSQL", "Tailwind"],
    liveUrl: "https://ai-fitness-web-application.vercel.app/",
    githubUrl: "https://github.com/Deepali-cell/AI_Fitness_web_Application",
    featured: true,
  },
  {
    id: 3,
    title: "TheaterHub",
    description:
      "A movie booking platform with authentication, seat selection, booking management, and responsive user experience.",
    image: "/assets/theaterhub.png",
    imageAlt:
      "TheaterHub movie booking platform with seat selection and movie listings",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    liveUrl: "https://movie-booking-web-omega.vercel.app/",
    githubUrl: "https://github.com/Deepali-cell/movie_booking_web",
  },
  {
    id: 4,
    title: "CollabSpace",
    description:
      "Collaboration platform for managing projects, sharing resources, and improving teamwork with an intuitive dashboard.",
    image: "/assets/collab.png",
    imageAlt:
      "CollabSpace team collaboration dashboard with kanban board and project management",
    tags: ["React", "Node.js", "Socket.io"],
    liveUrl: "https://collab-space-sage.vercel.app/",
    githubUrl: "https://github.com/Deepali-cell/CollabSpace",
  },
  {
    id: 5,
    title: "Prescripto",
    description:
      "Doctor appointment platform featuring Admin, Doctor, and Patient dashboards with appointment management.",
    image: "/assets/prescripto.png",
    imageAlt:
      "Prescripto healthcare platform with doctor profiles and appointment scheduling",
    tags: ["React", "Node.js", "MongoDB", "JWT", "RBAC"],
    liveUrl: "https://prescripto-web-frontend.onrender.com",
    githubUrl: "https://github.com/Deepali-cell/prescripto_web",
  },
  {
    id: 6,
    title: "CareerHub",
    description:
      "Recruitment platform where employers can post jobs and candidates can search, apply, and manage applications.",
    image: "/assets/career.png",
    imageAlt:
      "CareerHub job portal with job listings, filters, and application tracking dashboard",
    tags: ["React", "Node.js", "Supabase"],
    liveUrl: "https://job-portal-kohl-psi.vercel.app/",
    githubUrl: "https://github.com/Deepali-cell/job-portal",
  },
  // {
  //   id: 7,
  //   title: "LearnSphere LMS",
  //   description:
  //     "Learning Management System with authentication, course management, lectures, and student learning workflows.",
  //   image: "/assets/learnSphere.png",
  //   imageAlt:
  //     "LearnSphere LMS with course catalog, video lectures, and student progress tracking",
  //   tags: ["React", "Node.js", "MongoDB"],
  //   liveUrl: "https://deepali-lms-qgqc.vercel.app/",
  //   githubUrl: "https://github.com/Deepali-cell/Deepali-lms",
  // },
];

export default function ProjectsSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" ref={ref} className="relative py-24 sm:py-32 z-10">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-4"
        ></motion.div>

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="section-heading font-extrabold text-foreground"
          >
            Things I&apos;ve
            <span className="text-gradient-primary"> Built</span>
          </motion.h2>
        </div>

        {/* Projects grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {projects.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="glass-card rounded-2xl overflow-hidden border border-border/50 hover:border-primary/30 transition-all duration-300 group hover:glow-primary flex flex-col"
              >
                {/* Image */}
                <div className="relative aspect-video overflow-hidden">
                  <AppImage
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  {/* Action buttons */}
                  <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Live demo of ${project.title}`}
                      className="w-8 h-8 glass-card rounded-lg flex items-center justify-center text-white hover:text-primary transition-colors"
                    >
                      <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`GitHub repo of ${project.title}`}
                      className="w-8 h-8 glass-card rounded-lg flex items-center justify-center text-white hover:text-primary transition-colors"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-4 h-4"
                      >
                        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-bold text-foreground mb-2 text-base">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={tag}
                        className={`px-2 py-0.5 rounded text-xs font-mono ${idx % 2 === 0 ? "tag-aurora" : "tag-cyan"}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
