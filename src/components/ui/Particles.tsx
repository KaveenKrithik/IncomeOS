"use client";

import { motion } from "framer-motion";

export function BackgroundParticles() {
  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden bg-background">
      {/* Moving data grid lines */}
      <svg className="absolute inset-0 w-full h-full opacity-5">
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
      
      {/* Floating data particles */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
           key={i}
           initial={{ 
             x: Math.random() * 2000 - 500, 
             y: Math.random() * 2000 - 500,
             opacity: 0,
             scale: Math.random() * 2
           }}
           animate={{ 
             y: [null, Math.random() * 2000 - 500],
             x: [null, Math.random() * 2000 - 500],
             opacity: [0, 0.2, 0],
           }}
           transition={{ 
             duration: 10 + Math.random() * 20, 
             repeat: Infinity,
             ease: "linear"
           }}
           className="absolute w-1 h-1 bg-primary rounded-full blur-[1px]"
        />
      ))}

      {/* Atmospheric glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/5 blur-[120px] rounded-full animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-secondary/5 blur-[150px] rounded-full animate-pulse [animation-delay:-2s]" />
    </div>
  );
}
