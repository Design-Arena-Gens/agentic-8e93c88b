"use client";

import { Sparkles, Workflow, LineChart, Bot } from "lucide-react";
import { motion } from "framer-motion";
import { GlassPanel } from "@/components/glass-panel";

const services = [
  {
    icon: Sparkles,
    title: "AI Experience Design",
    description:
      "Voice, chat, and multi-modal journeys designed with contextual intelligence and adaptive UX flows.",
    tags: ["LLM orchestration", "Conversation systems", "Ethical guardrails"],
  },
  {
    icon: Workflow,
    title: "Product Strategy",
    description:
      "Discovery sprints that align teams, de-risk innovation, and transform insight into executable roadmaps.",
    tags: ["Opportunity mapping", "Rapid prototyping", "Design ops"],
  },
  {
    icon: LineChart,
    title: "Full-stack Web",
    description:
      "Lightning-fast web platforms engineered on modern stacks with analytics, CMS, and automation baked in.",
    tags: ["Next.js", "WebGL", "Edge rendering"],
  },
  {
    icon: Bot,
    title: "Applied Intelligence",
    description:
      "System architecture that bridges internal data with bespoke AI agents, automation, and personalization.",
    tags: ["Vector pipelines", "Agentic systems", "Realtime dashboards"],
  },
];

export function Expertise() {
  return (
    <section
      id="expertise"
      className="relative z-30 mx-auto max-w-6xl px-6 pb-28"
    >
      <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <h2 className="text-balance text-4xl font-semibold text-white md:text-5xl">
          Intelligent craft across strategy, product, and launch.
        </h2>
        <p className="mt-6 text-base leading-relaxed text-white/70 md:text-lg">
          We converge research, design, and engineering into a singular flow —
          orchestrating systems that feel alive and measurable impact that scales.
        </p>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.08 }}
          >
            <GlassPanel className="p-8 text-left">
              <service.icon className="h-10 w-10 text-cyan-300" />
              <h3 className="mt-6 text-2xl font-semibold text-white">
                {service.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-white/75">
                {service.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/15 bg-white/5 px-4 py-1 text-xs font-medium uppercase tracking-[0.25em] text-white/55"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </GlassPanel>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
