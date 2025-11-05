"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GlassPanel } from "@/components/glass-panel";

const stats = [
  { label: "Launch velocity", value: "3x faster" },
  { label: "Retention uplift", value: "+42%" },
  { label: "Client satisfaction", value: "4.9 / 5" },
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative z-30 mx-auto mt-16 grid max-w-6xl items-center gap-16 px-6 pb-24 pt-12 md:grid-cols-[1.1fr_0.9fr]"
    >
      <div className="flex flex-col gap-10">
        <span className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-white/70 backdrop-blur-xl">
          Crafting luminous AI experiences
        </span>

        <h1 className="text-balance text-5xl font-semibold tracking-tight text-white md:text-6xl">
          We design weightless digital products for the next wave of AI-native
          brands.
        </h1>

        <p className="max-w-xl text-lg leading-relaxed text-white/75">
          Lumin Agency merges generative intelligence with tactile design
          systems. From strategy to launch, we orchestrate frictionless journeys
          that feel inevitable — for web, product, and immersive experiences.
        </p>

        <div className="flex flex-wrap items-center gap-4">
          <Button asChild variant="glow">
            <Link href="#contact" className="relative z-10 flex items-center gap-2">
              Start a project
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Button>

          <Button asChild variant="ghost">
            <Link href="#cases">View work</Link>
          </Button>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {stats.map((stat) => (
            <GlassPanel
              key={stat.label}
              className="p-6 text-left mix-blend-screen"
            >
              <p className="text-xs uppercase tracking-[0.35em] text-white/60">
                {stat.label}
              </p>
              <p className="mt-4 text-2xl font-semibold text-white">
                {stat.value}
              </p>
            </GlassPanel>
          ))}
        </div>
      </div>

      <HeroShowcase />
    </section>
  );
}

function HeroShowcase() {
  return (
    <div className="relative">
      <GlassPanel className="overflow-visible bg-white/15 p-10 mix-blend-screen">
        <div className="relative flex h-[420px] items-center justify-center">
          <div className="absolute inset-0 rounded-[24px] border border-white/10 bg-white/5 backdrop-blur-3xl" />

          <motion.div
            className="relative flex h-64 w-64 items-center justify-center [transform-style:preserve-3d]"
            animate={{ rotateX: [15, -15, 15], rotateY: [-25, 25, -25] }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          >
            <CubeFace position="front" gradient="from-cyan-300/80 to-blue-500/70" />
            <CubeFace position="back" gradient="from-cyan-900/40 to-blue-900/10" />
            <CubeFace position="top" gradient="from-white/60 to-sky-200/40" />
            <CubeFace position="bottom" gradient="from-indigo-500/30 to-slate-900/60" />
            <CubeFace position="left" gradient="from-emerald-300/70 to-teal-500/60" />
            <CubeFace position="right" gradient="from-fuchsia-300/70 to-purple-500/60" />
          </motion.div>

          <motion.div
            className="absolute -bottom-6 rounded-full border border-white/10 bg-white/8 px-6 py-3 text-sm font-medium text-white/80 backdrop-blur-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            Realtime AI prototype
          </motion.div>
        </div>
      </GlassPanel>
    </div>
  );
}

type FaceProps = {
  position: "front" | "back" | "left" | "right" | "top" | "bottom";
  gradient: string;
};

function CubeFace({ position, gradient }: FaceProps) {
  const base =
    "absolute h-48 w-48 rounded-[20px] border border-white/25 bg-gradient-to-br shadow-[0_25px_45px_-30px_rgba(14,116,144,0.65)]";

  const placement: Record<FaceProps["position"], string> = {
    front: "translate-z-[6rem]",
    back: "-translate-z-[6rem] rotate-y-180",
    left: "rotate-y-90 -translate-z-[6rem]",
    right: "-rotate-y-90 -translate-z-[6rem]",
    top: "rotate-x-90 translate-z-[6rem]",
    bottom: "-rotate-x-90 translate-z-[6rem]",
  };

  return <div className={`${base} ${placement[position]} ${gradient}`} />;
}
