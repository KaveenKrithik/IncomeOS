import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";

interface GlassCardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  glow?: "blue" | "violet" | "none";
}

export function GlassCard({ children, className, glow = "none", ...props }: GlassCardProps) {
  const glowClasses = {
    none: "",
    blue: "hover:neon-glow-blue transition-shadow duration-500",
    violet: "hover:neon-glow-violet transition-shadow duration-500",
  };

  return (
    <motion.div
      className={cn(
        "glass rounded-2xl p-6 relative overflow-hidden",
        glowClasses[glow],
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      {...props}
    >
      {/* Reflective top sheen */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      {children}
    </motion.div>
  );
}
