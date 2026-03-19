import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "IncomeOS | Adaptive Income Intelligence",
  description: "Predict. Prevent. Stabilize. The next-gen financial operating system for gig workers.",
};

import { BackgroundParticles } from "@/components/ui/Particles";
import { Navbar } from "@/components/layout/Navbar";

export default function RootLayout({

  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable}`}>
      <body className="antialiased overflow-x-hidden bg-background text-foreground relative">
        <BackgroundParticles />
        <Navbar />
        {children}
      </body>
    </html>
  );
}



