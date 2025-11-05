"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { GlassPanel } from "@/components/glass-panel";

const testimonials = [
  {
    quote:
      "Lumin stretched our ambition and still shipped faster than any partner we've had. The AI-first flows they designed lifted activation by 40% in a single quarter.",
    author: "Mae Chen",
    role: "COO, Nimbus OS",
  },
  {
    quote:
      "Their glassmorphic system made our clinical data feel cinematic yet precise. Stakeholders finally saw our product the way we intended.",
    author: "Dr. Laila Ortiz",
    role: "Chief Product Officer, Aperture Health",
  },
  {
    quote:
      "From WebGL staging to growth instrumentation, Lumin orchestrated an end-to-end launch that sold out our enterprise pipeline.",
    author: "Jonas Vaziri",
    role: "Founder, Signal Eight",
  },
];

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative z-30 mx-auto max-w-6xl px-6 pb-28"
    >
      <div className="flex flex-col gap-6 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-white/50">
          Testimonials
        </p>
        <h2 className="text-balance text-4xl font-semibold text-white md:text-5xl">
          Growth leaders trust our autonomous delivery.
        </h2>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.author}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <GlassPanel className="flex h-full flex-col gap-6 p-8 text-left">
              <Quote className="h-8 w-8 text-cyan-200" />
              <p className="text-sm leading-relaxed text-white/75">
                “{testimonial.quote}”
              </p>
              <div className="mt-auto">
                <p className="text-sm font-semibold text-white">
                  {testimonial.author}
                </p>
                <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                  {testimonial.role}
                </p>
              </div>
            </GlassPanel>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
