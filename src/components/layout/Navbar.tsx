"use client";

import { motion } from "framer-motion";
import { Activity, Wallet, Map as MapIcon, ShieldCheck, User } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Live", icon: Activity, href: "/dashboard" },
  { name: "Intelligence", icon: MapIcon, href: "/intelligence" },
  { name: "Coverage", icon: ShieldCheck, href: "/coverage" },
  { name: "Wallet", icon: Wallet, href: "/wallet" },
];

export function Navbar() {
  const pathname = usePathname();

  if (pathname === "/") return null;

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-2xl px-4">

      <div className="glass h-16 rounded-full flex items-center justify-between px-4 md:px-6 border-white/10">
        <div className="flex items-center gap-2 pr-4 border-r border-white/10">
          <div className="flex flex-col gap-0.5">
            <div className="w-4 h-1 bg-primary rounded-full" />
            <div className="w-2 h-1 bg-secondary rounded-full" />
          </div>
          <span className="font-medium tracking-tighter text-base md:text-lg">IncomeOS</span>
        </div>


        <div className="flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link key={item.name} href={item.href}>
                <motion.div
                  className={cn(
                    "flex items-center gap-2 px-4 py-2 rounded-full transition-all text-sm font-medium",
                    isActive 
                      ? "bg-white/10 text-white" 
                      : "text-white/40 hover:text-white/70 hover:bg-white/5"
                  )}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <item.icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{item.name}</span>
                </motion.div>
              </Link>
            );
          })}
        </div>

        <div className="pl-4 border-l border-white/10">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/10 transition-colors"
          >
            <User className="w-5 h-5 text-white/70" />
          </motion.button>
        </div>
      </div>
    </nav>
  );
}
