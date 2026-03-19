"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { Wallet, Target, ArrowUpRight, ShieldCheck, History, Activity } from "lucide-react";

export default function WalletPage() {
  return (
    <main className="min-h-screen pt-32 pb-20 px-6 container max-w-7xl mx-auto flex flex-col gap-10">
      <div className="flex flex-col md:flex-row justify-between items-end gap-6 text-center md:text-left">
        <div className="flex-1">
          <h1 className="text-4xl font-bold tracking-tight">Stability Wallet</h1>
          <p className="text-white/40 mt-2">Managing your income security and stabilization payouts.</p>
        </div>
        
        <div className="flex-1 flex justify-center md:justify-end gap-6">
           <div className="text-right">
             <span className="text-[10px] font-bold text-white/30 uppercase tracking-widest">WEEKS TOTAL</span>
             <div className="text-3xl md:text-4xl font-black text-white">₹1,142.12</div>
           </div>
           <div className="text-right">
             <span className="text-[10px] font-bold text-primary uppercase tracking-widest">STABILIZED</span>
             <div className="text-3xl md:text-4xl font-black text-primary">₹42.40</div>
           </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-10">
        <GlassCard className="p-6 md:p-10 flex flex-col items-center justify-center relative overflow-hidden" glow="blue">
           {/* Weekly Goal Progress Circle */}
           <div className="relative w-56 h-56 md:w-72 md:h-72 flex items-center justify-center">
             <div className="absolute inset-0 rounded-full border-[10px] border-white/5" />
             <svg className="absolute inset-0 w-full h-full -rotate-90">
                <motion.circle 
                  cx="50%" cy="50%" r="45%" 
                  stroke="currentColor" 
                  strokeWidth="10" 
                  fill="none" 
                  className="text-primary opacity-80"
                  strokeDasharray="100 0"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 0.76 }}
                  transition={{ duration: 2, ease: "easeOut" }}
                />
             </svg>

             {/* Inner data */}
             <div className="flex flex-col items-center gap-1 relative z-10">
                <Target className="w-6 h-6 md:w-8 md:h-8 text-white/40 mb-2" />
                <span className="text-4xl md:text-5xl font-black tracking-tighter">76%</span>
                <span className="text-[8px] md:text-[10px] font-bold text-white/30 uppercase tracking-widest leading-none mt-2">WEEKLY GOAL</span>
                <span className="text-xs md:text-sm font-bold text-white mt-2">₹1,142 / 1,500</span>
             </div>
             
             {/* Glow behind circle */}
             <div className="absolute inset-0 bg-primary/20 blur-[100px] pointer-events-none rounded-full" />
           </div>
           
           <div className="mt-8 md:mt-12 w-full pt-8 border-t border-white/5 flex flex-col gap-4">
              <div className="flex justify-between items-center px-2">
                <div className="flex items-center gap-3">
                   <div className="w-2 h-2 rounded-full bg-primary" />
                   <span className="text-xs md:text-sm font-bold opacity-70 italic whitespace-nowrap">"Income Security Active"</span>
                </div>
                <ShieldCheck className="w-5 h-5 text-primary neon-glow-blue" />
              </div>
              <button className="w-full py-4 rounded-full bg-primary text-background font-black text-[10px] md:text-xs uppercase tracking-widest hover:neon-glow-blue transition-all">Withdraw Stabilized Funds</button>
           </div>
        </GlassCard>

        {/* Digital Twin Simulation */}
        <div className="lg:col-span-2 space-y-10">
           <GlassCard className="p-6 md:p-10 flex flex-col min-h-[400px]" glow="violet">
              <div className="flex items-center gap-3 mb-8">
                 <Activity className="w-6 h-6 text-secondary" />
                 <h3 className="text-lg md:text-xl font-bold">Digital Twin Simulation</h3>
              </div>
              
              <div className="flex-1 flex flex-col justify-center gap-12">
                 <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                    {[
                      { label: "Optimal Output", value: "₹42/hr", sub: "Based on historicals" },
                      { label: "Real Reality", value: "₹34/hr", sub: "Currently tracking" },
                      { label: "Stability Gap", value: "₹8/hr", sub: "Protection active" },
                      { label: "Shift Potency", value: "92%", sub: "Zone efficiency" },
                    ].map((stat, i) => (
                      <div key={i} className="flex flex-col">
                        <span className="text-[8px] md:text-[10px] font-bold text-white/30 uppercase tracking-widest mb-1 leading-none">{stat.label}</span>
                        <span className={`text-xl md:text-2xl font-black ${i === 2 ? 'text-secondary' : 'text-white'}`}>{stat.value}</span>
                        <span className="text-[8px] md:text-[10px] text-white/30 font-medium leading-none mt-2 italic">{stat.sub}</span>
                      </div>
                    ))}
                 </div>
                 
                 {/* Visual ghost trail abstraction */}
                 <div className="h-32 w-full relative group">
                    <div className="absolute inset-0 bg-white/[0.02] rounded-2xl border border-white/5" />
                    <div className="absolute inset-0 flex items-center px-6 md:px-10">
                       {/* Animated wave abstraction */}
                       <svg className="w-full h-full overflow-visible">
                          <motion.path 
                            d="M 0 50 Q 50 10 100 50 T 200 50 T 300 10 T 400 50 T 500 90 T 600 50 T 700 10"
                            stroke="rgba(255,255,255,0.05)"
                            strokeWidth="10"
                            fill="none"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                          />
                          <motion.path 
                            d="M 0 55 Q 55 15 105 55 T 205 55 T 305 15 T 405 55 T 505 95 T 605 55 T 705 15"
                            stroke="rgba(139, 92, 246, 0.4)"
                            strokeWidth="3"
                            fill="none"
                            className="neon-glow-violet"
                            animate={{ 
                                d: [
                                    "M 0 50 Q 50 10 100 50 T 200 50 T 300 10 T 400 50 T 500 90 T 600 50 T 700 10",
                                    "M 0 50 Q 50 30 100 50 T 200 50 T 300 40 T 400 50 T 500 70 T 600 50 T 700 30",
                                    "M 0 50 Q 50 10 100 50 T 200 50 T 300 10 T 400 50 T 500 90 T 600 50 T 700 10",
                                ],
                            }}
                            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                          />
                       </svg>
                    </div>
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
                       <span className="text-[10px] font-bold text-secondary uppercase tracking-widest animate-pulse italic">Simulation Syncing...</span>
                    </div>
                 </div>
              </div>
           </GlassCard>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <GlassCard className="p-6">
                 <div className="flex justify-between items-center mb-4">
                    <History className="w-5 h-5 text-white/40" />
                    <span className="text-xs font-bold text-white/20 uppercase tracking-widest">Recent Activity</span>
                 </div>
                 <div className="space-y-4">
                    <div className="flex justify-between items-center text-sm">
                       <span className="text-white/60 text-xs md:text-sm">Gap Coverage (Rain)</span>
                       <span className="font-bold text-secondary text-xs md:text-sm">+₹12.40</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                       <span className="text-white/60 text-xs md:text-sm">Shift Completion</span>
                       <span className="font-bold text-xs md:text-sm">+₹84.10</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                       <span className="text-white/60 text-xs md:text-sm">Peak Intelligence Bonus</span>
                       <span className="font-bold text-primary text-xs md:text-sm">+₹4.10</span>
                    </div>
                 </div>
              </GlassCard>


              <div className="glass p-6 rounded-2xl border-white/5 flex flex-col justify-center gap-4 bg-gradient-to-tr from-primary/5 to-transparent">
                 <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full glass border-primary/20 flex items-center justify-center">
                       <ArrowUpRight className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                       <div className="text-sm font-bold italic">Stabilized Rate: Level 4</div>
                       <div className="text-xs text-white/40 leading-none mt-1">Efficiency up by 12% vs last week.</div>
                    </div>
                 </div>
                 <button className="w-full py-3 rounded-full border border-white/10 hover:bg-white/5 font-bold text-xs uppercase tracking-widest transition-all">Optimization Report</button>
              </div>
           </div>
        </div>
      </div>
    </main>
  );
}
