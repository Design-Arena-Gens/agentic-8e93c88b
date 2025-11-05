"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { GlassPanel } from "@/components/glass-panel";

const cases = [
  {
    client: "Nimbus OS",
    headline: "Adaptive workspace for 40k+ autonomous teams",
    description:
      "We redesigned Nimbus' OS with real-time AI copilots, predictive dashboards, and a modular workspace that scaled across enterprise tenants.",
    metrics: ["+63% active users", "-34% time-to-decision", "Global rollout < 6 weeks"],
    image: "/cases/nimbus.svg",
  },
  {
    client: "Aperture Health",
    headline: "Clinical insights platform driven by generative UI",
    description:
      "Crafted a HIPAA-compliant design system with contextual AI storytelling, accelerating physician decisioning within their EHR ecosystem.",
    metrics: ["2.1M patient records", "+48 NPS lift", "FDA Class II clearance"],
    image: "/cases/aperture.svg",
  },
  {
    client: "Signal Eight",
    headline: "Immersive product launch with WebGL data sculpture",
    description:
      "An interactive glassmorphic stage showcased Signal Eight's threat graph, synchronizing live security intelligence with cinematic 3D motion.",
    metrics: ["4M launch views", "+27% MQL conversion", "Awarded Site of the Day"],
    image: "/cases/signal.svg",
  },
];

export function CaseStudies() {
  return (
    <section
      id="cases"
      className="relative z-30 mx-auto max-w-6xl px-6 pb-28"
    >
      <div className="flex items-end justify-between gap-8">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-white/50">
            Selected work
          </p>
          <h2 className="mt-3 text-4xl font-semibold text-white md:text-5xl">
            Proven momentum for category-defining teams.
          </h2>
        </div>
        <p className="hidden max-w-md text-sm leading-relaxed text-white/70 md:block">
          Deep product partnerships with founders, ventures, and innovation labs.
          Every engagement delivers measured lift in activation, retention, or revenue.
        </p>
      </div>

      <div className="mt-12 space-y-8">
        {cases.map((item, index) => (
          <motion.div
            key={item.client}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.08 }}
          >
            <GlassPanel className="flex flex-col gap-8 overflow-hidden bg-white/10 p-0 md:flex-row">
              <div className="relative h-64 flex-1 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.client}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/60" />
                <span className="absolute left-6 top-6 rounded-full border border-white/20 bg-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/80 backdrop-blur-xl">
                  {item.client}
                </span>
              </div>

              <div className="flex-1 space-y-4 p-10">
                <h3 className="text-2xl font-semibold text-white">
                  {item.headline}
                </h3>
                <p className="text-sm leading-relaxed text-white/75">
                  {item.description}
                </p>
                <ul className="flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-200/80">
                  {item.metrics.map((metric) => (
                    <li
                      key={metric}
                      className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-white/70"
                    >
                      {metric}
                    </li>
                  ))}
                </ul>
              </div>
            </GlassPanel>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
