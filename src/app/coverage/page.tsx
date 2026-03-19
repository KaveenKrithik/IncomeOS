"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { ShieldCheck, Clock, Layers, AlertTriangle, ShieldOff } from "lucide-react";

export default function Coverage() {
  return (
    <main className="min-h-screen pt-32 pb-20 px-6 container max-w-7xl mx-auto flex flex-col gap-10">
      <div className="flex flex-col md:flex-row justify-between items-end gap-6">
        <div>
          <h1 className="text-4xl font-bold tracking-tight">Coverage Engine</h1>
          <p className="text-white/40 mt-2">Algorithmic micro-protection blocks for earnings stabilization.</p>
        </div>
        
        <GlassCard className="py-2 px-6 flex items-center gap-4 bg-secondary/10 border-secondary/20">
          <div className="flex flex-col">
             <span className="text-[10px] font-bold text-secondary uppercase tracking-widest">CURRENT SHIELD</span>
             <span className="text-sm font-bold tracking-tight">LEVEL 4 ACTIVE</span>
          </div>
          <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-background">
            <ShieldCheck className="w-5 h-5" />
          </div>
        </GlassCard>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <GlassCard className="lg:col-span-2 p-10 flex flex-col" glow="violet">
          <div className="flex justify-between items-center mb-10">
            <h3 className="text-xl font-bold">Protection Timeline</h3>
            <div className="flex gap-4 text-xs font-bold text-white/30 tracking-widest uppercase">
               <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-secondary" /> Active</span>
               <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-white/10" /> Projected</span>
            </div>
          </div>

          <div className="relative h-64 flex items-end gap-1 mb-10">
            {/* Timeline base grid */}
            <div className="absolute inset-x-0 bottom-0 h-[1px] bg-white/10" />
            
            {Array.from({ length: 24 }).map((_, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-2 group cursor-pointer h-full justify-end">
                 {/* Protection block */}
                 <motion.div 
                   initial={{ height: 0 }}
                   animate={{ height: i > 8 && i < 18 ? (i === 12 ? "80%" : "40%") : "10%" }}
                   className={`w-full rounded-t-sm transition-all group-hover:opacity-100 ${i > 8 && i < 18 ? (i === 12 ? "bg-secondary neon-glow-violet opacity-80" : "bg-secondary/40 opacity-50") : "bg-white/5 opacity-30"}`}
                 />
                 <span className="text-[8px] font-bold text-white/20 uppercase tracking-tighter opacity-0 group-hover:opacity-100 transition-opacity">{i}:00</span>
              </div>
            ))}
            
            {/* Weather Marker */}
            <div className="absolute top-[20%] left-[50%] -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none">
              <div className="glass p-2 px-4 rounded-xl border-secondary/50 flex flex-col items-center">
                 <AlertTriangle className="w-4 h-4 text-secondary mb-1" />
                 <span className="text-[10px] font-bold uppercase tracking-widest leading-none">RAIN TRIGGER</span>
                 <span className="text-lg font-bold">Level 7 Activation</span>
              </div>
              <div className="w-[1px] h-32 bg-secondary/50 border-l border-dashed border-secondary/30" />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-8 justify-between mt-auto pt-10 border-t border-white/5">
            <div className="flex gap-6">
              <div className="flex flex-col gap-1">
                <span className="text-xs font-bold text-white/30 uppercase tracking-widest">Guaranteed Hourly</span>
                <span className="text-xl md:text-2xl font-bold text-secondary">₹22.40 / hr</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-xs font-bold text-white/30 uppercase tracking-widest">Stabilizer Fee</span>
                <span className="text-xl md:text-2xl font-bold">₹1.82 / shift</span>
              </div>
            </div>
            <button className="px-8 py-3 rounded-full bg-secondary text-background font-bold text-sm uppercase tracking-widest hover:neon-glow-violet transition-all">Adjust Strategy</button>
          </div>
        </GlassCard>

        <div className="space-y-6 md:space-y-8">
           <GlassCard className="p-6 md:p-8" glow="none">
             <div className="flex items-center gap-3 mb-6">
               <Layers className="w-5 h-5 text-white/40" />
               <h4 className="font-bold text-lg">Active Blocks</h4>
             </div>
             
             <div className="space-y-6">
               {[
                 { name: "Severe Weather", type: "Automatic", status: "Armed", color: "text-secondary" },
                 { name: "Low-Demand Gap", type: "Predictive", status: "Active", color: "text-primary" },
                 { name: "Traffic Delay", type: "Dynamic", status: "Armed", color: "text-white/40" },
               ].map((block, i) => (
                 <div key={i} className="flex justify-between items-center group cursor-pointer hover:bg-white/5 p-2 rounded-lg transition-colors">
                   <div>
                     <div className="font-bold text-sm group-hover:text-secondary transition-colors">{block.name}</div>
                     <span className="text-[10px] uppercase text-white/30 font-bold tracking-widest">{block.type}</span>
                   </div>
                   <div className={`text-[10px] font-bold uppercase tracking-widest ${block.color}`}>{block.status}</div>
                 </div>
               ))}
             </div>
           </GlassCard>

           <GlassCard className="p-6 md:p-8 bg-gradient-to-br from-white/5 to-transparent border-white/10 group cursor-pointer transition-all hover:border-white/20">
             <div className="flex justify-between items-start mb-6">
                <Clock className="w-8 h-8 md:w-10 md:h-10 text-white/20" />
                <div className="text-right">
                  <span className="text-[10px] font-bold text-white/30 uppercase tracking-widest">Protection Used</span>
                  <div className="text-2xl md:text-3xl font-bold tracking-tighter">₹4.12</div>
                </div>
             </div>
             <p className="text-xs text-white/40 leading-relaxed font-medium">Auto-protection was triggered <span className="text-secondary font-bold">2 times</span> in the last 24h, saving your evening target by <span className="text-white font-bold">18%</span>.</p>
           </GlassCard>

           <div className="p-1 px-4 rounded-full border border-white/10 text-white/30 text-[10px] font-bold uppercase tracking-widest text-center glass brightness-50">
             Next OS Scan: 4m 12s
           </div>

        </div>
      </div>
    </main>
  );
}
