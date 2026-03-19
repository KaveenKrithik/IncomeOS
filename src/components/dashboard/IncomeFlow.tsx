"use client";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { earningsData } from "@/lib/mockData";
import { motion } from "framer-motion";

export function IncomeFlow() {
  return (
    <div className="w-full h-[400px] mt-8">
      <ResponsiveContainer width="100%" height="80%">
        <AreaChart data={earningsData}>
          <defs>
            <linearGradient id="colorExpected" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="var(--primary)" stopOpacity={0.3} />
              <stop offset="95%" stopColor="var(--primary)" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorActual" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="var(--secondary)" stopOpacity={0.5} />
              <stop offset="95%" stopColor="var(--secondary)" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid vertical={false} stroke="rgba(255,255,255,0.03)" />
          <XAxis 
            dataKey="time" 
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: "rgba(255,255,255,0.3)", fontSize: 12 }} 
            dy={15}
          />
          <YAxis hide />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: "rgba(10, 10, 10, 0.9)", 
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "12px",
              backdropFilter: "blur(10px)",
              color: "#fff"
            }}
            itemStyle={{ color: "#fff" }}
          />
          <Area
            type="monotone"
            dataKey="expected"
            stroke="var(--primary)"
            strokeWidth={2}
            fillOpacity={1}
            fill="url(#colorExpected)"
          />
          <Area
            type="monotone"
            dataKey="actual"
            stroke="var(--secondary)"
            strokeWidth={3}
            fillOpacity={1}
            fill="url(#colorActual)"
            strokeDasharray="5 5"
          />
        </AreaChart>
      </ResponsiveContainer>
      
      <div className="flex gap-8 justify-center mt-6">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-primary neon-glow-blue" />
          <span className="text-xs text-white/50 uppercase tracking-widest font-semibold">Expected Twin</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-secondary neon-glow-violet border-2 border-dashed border-white/20" />
          <span className="text-xs text-white/50 uppercase tracking-widest font-semibold">Real-Time Reality</span>
        </div>
      </div>
    </div>
  );
}
