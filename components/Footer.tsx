"use client";

import React, { useState, useEffect } from "react";
import { ArrowUpIcon } from "@heroicons/react/24/outline";

export default function Footer() {
  const [year, setYear] = useState("2026");

  useEffect(() => {
    const run = () => {
      setYear(new Date()?.getFullYear()?.toString());
    };
    run();
  }, []);

  return (
    <footer className="border-t border-primary/15 bg-gradient-to-b from-card/20 to-background/80 backdrop-blur-sm relative z-10">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Logo + brand */}
          <div className="flex items-center gap-2">
            <span className="font-sans font-semibold text-sm text-foreground">
              Portfolio
            </span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a
              href="#about"
              className="hover:text-foreground transition-colors font-medium"
            >
              About
            </a>
            <a
              href="#projects"
              className="hover:text-foreground transition-colors font-medium"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="hover:text-foreground transition-colors font-medium"
            >
              Contact
            </a>
            <span className="text-border">·</span>
            <span>© {year} Portfolio</span>
          </div>

          {/* Back to top */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            className="p-2.5 rounded-lg bg-primary/10 border border-primary/20 text-primary hover:bg-primary/20 hover:glow-primary transition-all min-w-[44px] min-h-[44px] flex items-center justify-center"
          >
            <ArrowUpIcon className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
