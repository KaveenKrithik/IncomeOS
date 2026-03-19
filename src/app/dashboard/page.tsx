"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { IncomeFlow } from "@/components/dashboard/IncomeFlow";
import { CloudRain, TrendingUp, AlertCircle, MapPin, Zap } from "lucide-react";

export default function Dashboard() {
  return (
    <main className="min-h-screen pt-32 pb-20 px-6 container max-w-7xl mx-auto">
      <div className="flex flex-col gap-8">
        {/* Header Section */}
        <section className="flex flex-col md:flex-row justify-between items-start gap-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="text-3xl font-bold tracking-tight">System Status: <span className="text-primary">Optimizing</span></h1>
            <p className="text-white/40 mt-1">Income Stability Engine is active in Central Zone.</p>
          </motion.div>

          <div className="flex gap-4">
            <GlassCard className="p-3 px-5 flex items-center gap-3 backdrop-blur-3xl bg-primary/5">
              <CloudRain className="w-5 h-5 text-primary" />
              <div className="flex flex-col">
                <span className="text-xs uppercase text-white/40 font-bold tracking-widest">Weather Impact</span>
                <span className="text-sm font-semibold">-12.4% Earning Potential</span>
              </div>
            </GlassCard>
          </div>
        </section>

        {/* Main Income View */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <GlassCard className="lg:col-span-2 min-h-[500px] flex flex-col" glow="blue">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-bold">Income Twin Flow</h3>
                <p className="text-white/40 text-sm">Real-time simulation of expected vs actual returns.</p>
              </div>
              <div className="px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest">
                AI Prediction Active
              </div>
            </div>
            
            <div className="flex-1 min-h-[350px]">
              <IncomeFlow />
            </div>
          </GlassCard>

          <div className="flex flex-col gap-8">
            <GlassCard className="flex-1" glow="violet">
              <div className="flex items-center gap-3 mb-6 font-bold text-lg">
                <Zap className="w-5 h-5 text-secondary" />
                Live Intelligence
              </div>
              
              <div className="space-y-6">
                <div className="p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors cursor-pointer group">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-xs font-bold text-primary tracking-widest">STRATEGY PEAK</span>
                    <TrendingUp className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
                  </div>
                  <p className="text-sm text-white/70 leading-relaxed font-medium">Shift zone to <span className="text-white font-bold underline underline-offset-4">Downtown S3</span> in 22 min for +18% peak earnings.</p>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/5 opacity-80">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-xs font-bold text-secondary tracking-widest">COVERAGE ACTIVE</span>
                    <AlertCircle className="w-4 h-4 text-secondary" />
                  </div>
                  <p className="text-sm text-white/70 leading-relaxed font-medium">Rain detected. Stabilizer will auto-compensate gap below ₹22/hr.</p>
                </div>
                
                <div className="pt-4 border-t border-white/5">
                  <div className="flex justify-between items-center text-sm mb-1">
                    <span className="text-white/40">Today's Predicted</span>
                    <span className="font-bold">₹244.50</span>
                  </div>
                  <div className="flex justify-between items-center text-sm mb-4">
                    <span className="text-white/40">Guaranteed Minimum</span>
                    <span className="font-bold text-secondary">₹218.00</span>
                  </div>
                </div>
              </div>
            </GlassCard>

            <GlassCard className="h-[120px] flex items-center justify-between group cursor-pointer overflow-hidden relative">
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-1">
                  <MapPin className="w-4 h-4 text-white/40" />
                  <span className="text-xs font-bold text-white/40 uppercase tracking-widest">Current Hotzone</span>
                </div>
                <div className="text-xl md:text-2xl font-bold tracking-tight text-white/90">Waterfront</div>
              </div>
              <div className="relative z-10 text-right">
                <div className="text-primary font-bold text-xl md:text-2xl">2.1x</div>
                <div className="text-[10px] text-white/30 uppercase tracking-widest font-bold">Multiplier</div>
              </div>
              
              {/* Background accent */}
              <div className="absolute top-0 right-0 w-32 h-full bg-primary/5 -skew-x-12 translate-x-10 group-hover:translate-x-5 transition-transform" />
            </GlassCard>
          </div>
        </section>

        {/* System Summary */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {[
            { label: "Weekly Progress", value: "₹1,142.00 / 1,500", color: "text-white" },
            { label: "Stability Index", value: "98.4%", color: "text-primary" },
            { label: "Prevented Loss", value: "₹42.10", color: "text-secondary" },
            { label: "Active Protection", value: "Level 4", color: "text-white" }
          ].map((item, i) => (
            <GlassCard key={i} className="py-4 md:py-6 hover:bg-white/5 cursor-default transition-all p-4">
              <span className="text-[8px] md:text-[10px] font-bold text-white/30 uppercase tracking-widest block mb-1">{item.label}</span>
              <span className={`text-base md:text-xl font-bold tracking-tighter ${item.color}`}>{item.value}</span>
            </GlassCard>
          ))}
        </section>

      </div>
    </main>
  );
}
