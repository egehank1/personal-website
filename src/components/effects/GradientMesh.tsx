"use client";

import { motion } from "framer-motion";

export function GradientMesh() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 z-[1] overflow-hidden"
    >
      <motion.div
        className="absolute -left-1/4 top-[-10%] h-[55vh] w-[55vh] rounded-full bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.35),transparent_65%)] blur-3xl"
        animate={{ x: [0, 40, 0], y: [0, 24, 0], opacity: [0.55, 0.85, 0.55] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -right-1/4 top-1/3 h-[50vh] w-[50vh] rounded-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.32),transparent_68%)] blur-3xl"
        animate={{ x: [0, -36, 0], y: [0, -20, 0], opacity: [0.45, 0.75, 0.45] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-20%] left-1/3 h-[45vh] w-[45vh] rounded-full bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.12),transparent_70%)] blur-3xl"
        animate={{ scale: [1, 1.08, 1], opacity: [0.35, 0.55, 0.35] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(3,3,6,0.2),#030306_85%)]" />
    </div>
  );
}
