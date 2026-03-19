"use client";

import { motion } from "framer-motion";
import { NeonButton } from "@/components/ui/NeonButton";
import Link from "next/link";
import { ArrowRight, Activity, ShieldCheck, Zap } from "lucide-react";

export default function LandingPage() {
  return (
    <main className="relative min-h-screen bg-background overflow-hidden flex flex-col items-center justify-center">
      {/* Background Animated Data Grid */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(42,199,255,0.1)_0%,transparent_60%)]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[conic-gradient(from_0deg at_50%_50%,rgba(139,92,246,0.1),transparent,rgba(42,199,255,0.1),transparent)] animate-[spin_30s_linear_infinite]" />
        
        {/* Floating background blobs */}
        <motion.div 
          animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-secondary/5 blur-[120px]" 
        />
        <motion.div 
          animate={{ x: [0, -50, 0], y: [0, 40, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-40 -right-20 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[150px]" 
        />
      </div>

      <div className="container relative z-10 px-4 md:px-6 max-w-5xl mx-auto flex flex-col items-center text-center">
        {/* Subtle tagline indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="mb-12"
        >
          <span className="text-[10px] uppercase tracking-[0.4em] text-white/30 font-bold">Autonomous Intelligence</span>
        </motion.div>


        <motion.h1 
          className="text-6xl md:text-8xl font-bold tracking-tight mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Predict. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-secondary">Prevent. Stabilize.</span>
        </motion.h1>

        <motion.p 
          className="text-xl md:text-2xl text-white/40 max-w-2xl font-light mb-12 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          The first adaptive income intelligence platform for gig workers. 
          Stop chasing shifts. Let AI design your stability.
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row gap-6 mt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <Link href="/dashboard">
            <NeonButton size="lg" variant="blue" className="w-full sm:w-auto">
              Launch OS <ArrowRight className="w-5 h-5" />
            </NeonButton>
          </Link>
          <NeonButton size="lg" variant="ghost" className="w-full sm:w-auto">
            System Guide
          </NeonButton>
        </motion.div>

        {/* Feature Highlights */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mt-32"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          {[
            { icon: Activity, title: "Income Twin", desc: "Simulate and predict every hour based on real-world demand." },
            { icon: ShieldCheck, title: "Auto-Coverage", desc: "Micro-insurance blocks that activate when demand drops or clouds form." },
            { icon: Zap, title: "Zone Intel", desc: "Real-time thermal maps of profit clusters powered by heat data." }
          ].map((feature, i) => (
            <div key={i} className="flex flex-col items-center gap-4 text-center group">
              <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center transition-all group-hover:scale-110 group-hover:bg-white/10 group-hover:neon-glow-blue border-white/5">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold text-lg">{feature.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Aesthetic Bottom Border Decoration */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
    </main>
  );
}
