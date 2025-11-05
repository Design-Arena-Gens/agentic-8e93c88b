"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CalendarClock } from "lucide-react";
import { GlassPanel } from "@/components/glass-panel";
import { Button } from "@/components/ui/button";

export function ContactCTA() {
  return (
    <section
      id="contact"
      className="relative z-30 mx-auto max-w-5xl px-6 pb-32"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <GlassPanel className="overflow-hidden p-12 text-center">
          <div className="mx-auto flex max-w-2xl flex-col items-center gap-6">
            <span className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
              <CalendarClock className="h-4 w-4" />
              Limited new partnerships Q3
            </span>
            <h2 className="text-balance text-4xl font-semibold text-white md:text-5xl">
              Let's architect the next category-leading experience.
            </h2>
            <p className="text-base leading-relaxed text-white/70">
              Drop your brief, Figma file, or future vision. We’ll return within
              48 hours with a tailored plan, timeline, and investment options.
            </p>

            <Button asChild variant="glow" className="mt-4">
              <Link
                href="mailto:hello@lumin.studio?subject=Project%20Inquiry"
                className="relative z-10 flex items-center gap-2"
              >
                Schedule immersion call
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </GlassPanel>
      </motion.div>
    </section>
  );
}
