"use client";

import { motion } from "framer-motion";
import { GlassPanel } from "@/components/glass-panel";

const phases = [
  {
    title: "Discover",
    description:
      "Immersive workshops, AI opportunity mapping, experimentation charters, and sharper KPIs tied to your growth model.",
    deliverables: [
      "North-star narrative",
      "Experience blueprints",
      "Success metrics stack",
    ],
  },
  {
    title: "Design",
    description:
      "Modular design systems with glassmorphic depth, 3D micro-interactions, and accessibility at their core.",
    deliverables: [
      "Interactive prototypes",
      "Design system tokens",
      "Usability lab reports",
    ],
  },
  {
    title: "Deploy",
    description:
      "Align engineering, integrate data pipelines, and launch with performance budgets and observability tuned for scale.",
    deliverables: [
      "Implementation kits",
      "AI agent handoff",
      "Growth experiment slate",
    ],
  },
];

export function Process() {
  return (
    <section
      id="process"
      className="relative z-30 mx-auto max-w-6xl px-6 pb-28"
    >
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-white/50">
          Methodology
        </p>
        <h2 className="mt-3 text-4xl font-semibold text-white md:text-5xl">
          Precision process that moves from signal to shipped.
        </h2>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {phases.map((phase, index) => (
          <motion.div
            key={phase.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <GlassPanel className="flex h-full flex-col gap-6 p-8 text-left">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-lg font-semibold text-cyan-200">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="text-2xl font-semibold text-white">{phase.title}</h3>
              <p className="text-sm leading-relaxed text-white/75">
                {phase.description}
              </p>
              <ul className="mt-auto space-y-2 text-sm text-white/65">
                {phase.deliverables.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </GlassPanel>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
