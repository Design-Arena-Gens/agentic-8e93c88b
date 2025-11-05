"use client";

import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type GlassPanelProps = {
  className?: string;
  children: ReactNode;
};

export function GlassPanel({ className, children }: GlassPanelProps) {
  return (
    <div
      className={cn(
        "group/glass relative overflow-hidden rounded-[28px] border border-white/15 bg-white/10 p-px shadow-[0_20px_60px_-40px_rgba(15,23,42,0.9)] backdrop-blur-2xl before:absolute before:inset-0 before:bg-gradient-to-b before:from-white/35 before:via-white/5 before:to-white/0 before:opacity-60 before:transition-opacity before:duration-500 before:content-[''] after:absolute after:-right-20 after:top-1/2 after:h-40 after:w-40 after:-translate-y-1/2 after:rounded-full after:bg-white/10 after:blur-3xl after:transition-transform after:duration-500 after:content-[''] group-hover/glass:before:opacity-80 group-hover/glass:after:translate-x-6",
      className,
    )}
  >
      <div className="relative z-10 rounded-[26px] bg-gradient-to-b from-white/15 via-white/5 to-white/0 p-8 text-white mix-blend-screen">
        {children}
      </div>
    </div>
  );
}
