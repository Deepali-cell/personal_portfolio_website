"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import AppImage from "@/components/ui/AppImage";
import {
  ArrowDownIcon,
  DocumentArrowDownIcon,
} from "@heroicons/react/24/outline";

const typingTexts = [
  "Software Engineer",
  "AI Developer",
  "Full-Stack Builder",
  "GenAI Developer",
  "Problem Solver",
];
function useTypingEffect(texts: string[]) {
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = texts[textIndex];

    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && charIndex < current.length) {
      timeout = setTimeout(() => {
        setCharIndex((c) => c + 1);
      }, 80);
    } else if (!deleting && charIndex === current.length) {
      timeout = setTimeout(() => {
        setDeleting(true);
      }, 1800);
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setCharIndex((c) => c - 1);
      }, 40);
    } else {
      timeout = setTimeout(() => {
        setDeleting(false);
        setTextIndex((i) => (i + 1) % texts.length);
      }, 200);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, textIndex, texts]);

  return texts[textIndex].slice(0, charIndex);
}

const stats = [
  { label: "Projects Built", value: "6+" },
  { label: "AI Models Built", value: "3+" },
  { label: "GitHub Repos", value: "15+" },
  { label: "Months of Code", value: "12+" },
];

export default function HeroSection() {
  const typedText = useTypingEffect(typingTexts);
  const sectionRef = useRef<HTMLElement>(null);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden"
    >
      {/* Atmospheric blobs */}
      <div className="blob-primary absolute w-[500px] h-[500px] top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="blob-secondary absolute w-[400px] h-[400px] bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 pointer-events-none" />
      <div className="blob-aurora absolute w-[600px] h-[300px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-40" />

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left: Text content — col-span-7 */}
          <div className="lg:col-span-7 space-y-8">
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full border border-primary/30 glow-primary"
            >
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_8px_rgba(168,85,247,0.8)]" />
              <span className="font-mono text-xs text-emerald-400 tracking-widest uppercase">
                ● Available for Hire
              </span>
            </motion.div>

            {/* Main headline */}
            <div className="space-y-2">
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.4,
                  duration: 0.7,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="font-mono text-muted-foreground text-sm tracking-widest uppercase"
              >
                Hello, I&apos;m
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.5,
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="hero-display font-extrabold text-foreground text-glow-primary"
              >
                Deepali
                <br />
                <span className="text-gradient-primary">Singal.</span>
              </motion.h1>
            </div>

            {/* Typing animation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="h-10 flex items-center"
            >
              <span className="font-mono text-xl sm:text-2xl text-muted-foreground">
                {typedText}
                <span className="inline-block w-0.5 h-6 bg-primary ml-1 animate-blink" />
              </span>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="text-muted-foreground text-base sm:text-lg leading-relaxed max-w-xl"
            >
              I build intelligent, full-stack applications that merge robust
              engineering with cutting-edge AI. From RAG pipelines to production
              Next.js apps — I&apos;m eager to learn, grow, and ship things that
              actually work.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.6 }}
              className="flex flex-wrap items-center gap-4"
            >
              <button
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="px-6 py-3 bg-gradient-to-r from-violet-600 to-purple-500 text-white rounded-lg font-semibold text-sm hover:from-violet-500 hover:to-purple-400 transition-all animate-pulse-glow flex items-center gap-2 min-h-[44px] shadow-lg shadow-violet-500/30"
              >
                View Projects
                <ArrowDownIcon className="w-4 h-4 rotate-[-45deg]" />
              </button>
              <button
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="px-6 py-3 glass-card border border-primary/30 text-foreground rounded-lg font-semibold text-sm hover:border-cyan-400/50 hover:glow-secondary transition-all flex items-center gap-2 min-h-[44px]"
              >
                Contact Me
              </button>
              <a
                href="/resume/se_role_resume.pdf"
                download
                className="inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-cyan-400/10 px-5 py-2.5 text-sm font-semibold text-cyan-300 transition-all duration-300 hover:bg-cyan-400/20 hover:text-cyan-200 hover:shadow-lg hover:shadow-cyan-400/25"
              >
                <DocumentArrowDownIcon className="h-4 w-4" />
                Resume
              </a>
            </motion.div>
          </div>

          {/* Right: Profile card — col-span-5 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            {/* Rotating border ring */}
            <div className="absolute -inset-4 rounded-3xl border border-primary/15 animate-spin-slow pointer-events-none" />
            <div
              className="absolute -inset-8 rounded-3xl border border-secondary/10 animate-spin-slow pointer-events-none"
              style={{
                animationDirection: "reverse",
                animationDuration: "30s",
              }}
            />

            {/* Profile image card */}
            <div>
              <div className="aspect-[4/5] relative">
                <AppImage
                  src="/hero_section_img2.png"
                  alt="Deepali Singal - AI Framework Developer Portrait Portfolio"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover mix-blend-luminosity brightness-[0.85] contrast-[1.1] group-hover:mix-blend-normal group-hover:brightness-100 transition-all duration-700"
                  priority
                />

                {/* Bottom overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="glass-card rounded-xl p-4 border border-primary/30 aurora-border">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_8px_rgba(168,85,247,0.8)]" />
                      <span className="font-mono text-xs text-emerald-400 tracking-widest uppercase">
                        Open to Work
                      </span>
                    </div>
                    <p className="text-white/60 text-xs font-mono">
                      Software Engineer · Full stack Developer
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
