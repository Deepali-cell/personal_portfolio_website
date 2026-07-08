"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [trailPos, setTrailPos] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    // Only show custom cursor on desktop
    const checkMobile = () =>
      setIsMobile(window.innerWidth < 768 || "ontouchstart" in window);
    checkMobile();
    window.addEventListener("resize", checkMobile);

    const handleMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    const handleHoverIn = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.matches('a, button, [role="button"], input, textarea')) {
        setIsHovering(true);
      }
    };
    const handleHoverOut = () => setIsHovering(false);

    window.addEventListener("mousemove", handleMove);
    document.addEventListener("mouseover", handleHoverIn);
    document.addEventListener("mouseout", handleHoverOut);

    // Trail follows with slight delay
    let raf: number;
    let tx = -100,
      ty = -100;
    const animateTrail = () => {
      tx += (pos.x - tx) * 0.12;
      ty += (pos.y - ty) * 0.12;
      setTrailPos({ x: tx, y: ty });
      raf = requestAnimationFrame(animateTrail);
    };
    raf = requestAnimationFrame(animateTrail);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseover", handleHoverIn);
      document.removeEventListener("mouseout", handleHoverOut);
      window.removeEventListener("resize", checkMobile);
      cancelAnimationFrame(raf);
    };
  }, [pos.x, pos.y]);

  if (isMobile) return null;

  return (
    <>
      {/* Main dot */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 rounded-full bg-primary pointer-events-none z-[9998] mix-blend-difference"
        style={{
          translateX: pos.x - 6,
          translateY: pos.y - 6,
        }}
        animate={{ scale: isHovering ? 0.5 : 1 }}
        transition={{ duration: 0.15 }}
      />
      {/* Trail ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-primary/40 pointer-events-none z-[9997]"
        style={{
          translateX: trailPos.x - 16,
          translateY: trailPos.y - 16,
        }}
        animate={{
          scale: isHovering ? 1.8 : 1,
          opacity: isHovering ? 0.5 : 0.3,
        }}
        transition={{ duration: 0.2 }}
      />
    </>
  );
}
