"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { Search, MapPin, TrendingUp, Navigation } from "lucide-react";

const zones = [
  { name: "Downtown Core", multiplier: "2.4x", demand: "Peak", active: true, color: "bg-primary" },
  { name: "Business Hub", multiplier: "1.8x", demand: "High", active: false, color: "bg-secondary" },
  { name: "West Quarter", multiplier: "1.2x", demand: "Low", active: false, color: "bg-white/20" },
  { name: "East Port", multiplier: "2.1x", demand: "Critical", active: false, color: "bg-accent" },
  { name: "South Hills", multiplier: "1.0x", demand: "Minimal", active: false, color: "bg-white/5" },
];

export default function Intelligence() {
  return (
    <main className="min-h-screen pt-32 pb-20 px-6 container max-w-7xl mx-auto flex flex-col gap-10">
      <div className="flex flex-col md:flex-row justify-between items-end gap-6">
        <div>
          <h1 className="text-4xl font-bold tracking-tight">Zone Intelligence</h1>
          <p className="text-white/40 mt-2">Thermal analysis of earning potential and real-time demand shifts.</p>
        </div>
        
        <div className="flex bg-white/5 rounded-full p-1 border border-white/10 glass">
          <button className="px-6 py-2 rounded-full text-sm font-bold bg-primary text-background transition-all">HEAT MAP</button>
          <button className="px-6 py-2 rounded-full text-sm font-bold text-white/50 hover:text-white transition-all">PREDICTOR</button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
        {/* Abstract Map Component */}
        <div className="lg:col-span-3 h-[600px] glass rounded-3xl relative overflow-hidden group">
          <div className="absolute inset-0 bg-grid-pattern opacity-10" />
          
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Hex-like abstract map visualization */}
            <div className="grid grid-cols-6 gap-2 w-full h-full p-10 opacity-30 select-none">
              {Array.from({ length: 48 }).map((_, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0.1 }}
                  animate={{ 
                    opacity: [0.1, Math.random() * 0.4, 0.1],
                    scale: [1, 1.05, 1],
                  }}
                  transition={{ duration: 4 + Math.random() * 4, repeat: Infinity }}
                  className="rounded-lg bg-white/5 hover:bg-primary/20 transition-all border border-white/5 cursor-crosshair"
                />
              ))}
            </div>
            
            {/* Focal Zones */}
            <div className="absolute inset-0 z-10 p-20">
               <motion.div 
                 initial={{ scale: 0 }}
                 animate={{ scale: 1 }}
                 className="absolute top-[20%] left-[30%] w-32 h-32 rounded-full bg-primary/20 blur-[40px] border border-primary animate-pulse"
               />
               <motion.div 
                 initial={{ scale: 0 }}
                 animate={{ scale: 1 }}
                 className="absolute bottom-[30%] right-[20%] w-48 h-48 rounded-full bg-secondary/10 blur-[60px] border border-secondary animate-pulse"
                 transition={{ delay: 0.5 }}
               />
               
               {/* Zone labels */}
               <label className="absolute top-[25%] left-[35%] glass border-white/20 p-4 rounded-2xl flex flex-col gap-1 cursor-pointer hover:border-primary transition-colors group">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-xs font-bold uppercase tracking-widest text-white/50 group-hover:text-primary transition-colors">Downtown</span>
                  </div>
                  <div className="text-xl font-bold">Peak Potential</div>
               </label>

               <label className="absolute bottom-[35%] right-[25%] glass border-white/20 p-4 rounded-3xl flex flex-col gap-1 hover:border-secondary transition-colors group">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-secondary" />
                    <span className="text-xs font-bold uppercase tracking-widest text-white/50 group-hover:text-secondary transition-colors">Airport Hub</span>
                  </div>
                  <div className="text-xl font-bold">Expanding Demand</div>
               </label>
            </div>
          </div>

          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-4">
            <div className="glass px-6 py-3 rounded-full flex items-center gap-3 backdrop-blur-3xl border-white/10 group-hover:border-primary/40 transition-colors">
              <Search className="w-4 h-4 text-white/40" />
              <span className="text-sm font-medium">Scanning clusters...</span>
              <div className="flex gap-1 ml-4">
                <div className="w-1.5 h-1.5 rounded-full bg-primary animate-bounce [animation-delay:-0.3s]" />
                <div className="w-1.5 h-1.5 rounded-full bg-primary animate-bounce [animation-delay:-0.15s]" />
                <div className="w-1.5 h-1.5 rounded-full bg-primary animate-bounce" />
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar recommendations */}
        <div className="flex flex-col gap-6">
          <h3 className="text-sm font-bold uppercase text-white/40 tracking-widest">Recommended Zones</h3>
          {zones.map((zone, i) => (
            <motion.div
              key={i}
              whileHover={{ x: 5 }}
              className={`glass p-4 rounded-2xl border-white/5 flex justify-between items-center group cursor-pointer ${zone.active ? "border-primary/20 bg-primary/5" : ""}`}
            >
              <div>
                <div className="text-lg font-bold group-hover:text-primary transition-colors">{zone.name}</div>
                <div className="text-xs font-bold text-white/40 uppercase tracking-widest mt-1">{zone.demand} Demand</div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold tracking-tighter">{zone.multiplier}</div>
                <div className="flex items-center gap-1 justify-end text-[10px] text-white/30 uppercase tracking-widest font-bold">
                  <Navigation className="w-2 h-2" /> 12m
                </div>
              </div>
            </motion.div>
          ))}
          
          <GlassCard className="mt-4 bg-primary/10 border-primary/20 py-8 text-center p-6" glow="blue">
             <TrendingUp className="w-8 h-8 text-primary mx-auto mb-4" />
             <h4 className="font-bold text-lg mb-2 leading-tight">Maximize Opportunity</h4>
             <p className="text-xs text-white/50 leading-relaxed mb-6">Transitioning to Central Zone now will increase expected baseline by ₹8.40 in the next 60m.</p>
             <button className="w-full py-3 rounded-full bg-primary text-background font-bold text-xs uppercase tracking-widest hover:neon-glow-blue transition-all">Navigate To Zone</button>
          </GlassCard>
        </div>
      </div>
    </main>
  );
}
