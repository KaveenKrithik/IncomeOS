"use client";

import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";

interface NeonButtonProps extends HTMLMotionProps<"button"> {
  variant?: "blue" | "violet" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export function NeonButton({
  variant = "blue",
  size = "md",
  children,
  className,
  ...props
}: NeonButtonProps) {
  const variants = {
    blue: "bg-primary text-background hover:neon-glow-blue",
    violet: "bg-secondary text-background hover:neon-glow-violet",
    ghost: "border border-white/20 text-white hover:bg-white/10",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg font-bold tracking-wider",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "rounded-full transition-all duration-300 font-medium overflow-hidden relative group",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
      
      {/* Glossy overlay effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    </motion.button>
  );
}
