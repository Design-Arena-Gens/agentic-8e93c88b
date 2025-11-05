"use client";

import { motion } from "framer-motion";

const gradients = [
  {
    id: "orb-1",
    size: "w-[420px] h-[420px]",
    position: "top-[-6rem] left-[-6rem]",
    color: "from-cyan-400/60 via-sky-500/40 to-blue-500/80",
    delay: 0,
  },
  {
    id: "orb-2",
    size: "w-[360px] h-[360px]",
    position: "top-[16rem] left-[30%]",
    color: "from-fuchsia-400/50 via-purple-500/30 to-indigo-600/60",
    delay: 1.4,
  },
  {
    id: "orb-3",
    size: "w-[480px] h-[480px]",
    position: "top-[45%] right-[-8rem]",
    color: "from-emerald-400/40 via-teal-400/30 to-cyan-500/70",
    delay: 2.1,
  },
];

export function AmbientBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(17,24,39,0.35),transparent_55%)]" />
      {gradients.map((orb) => (
        <motion.div
          key={orb.id}
          className={`absolute ${orb.size} ${orb.position} rounded-full bg-gradient-to-br ${orb.color} blur-[120px] mix-blend-screen`}
          initial={{ opacity: 0.45, scale: 0.8, rotate: 0 }}
          animate={{ opacity: 0.9, scale: 1.1, rotate: 360 }}
          transition={{
            repeat: Infinity,
            repeatType: "mirror",
            duration: 26,
            ease: "easeInOut",
            delay: orb.delay,
          }}
        />
      ))}
      <motion.div
        className="absolute inset-x-0 bottom-10 mx-auto h-[1px] w-[80%] bg-gradient-to-r from-transparent via-white/30 to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0.35] }}
        transition={{ delay: 4, duration: 18, repeat: Infinity }}
      />
    </div>
  );
}
