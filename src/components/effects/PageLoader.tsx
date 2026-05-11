"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { site } from "@/lib/config";

type Phase = "show" | "fade" | "gone";

export function PageLoader() {
  const [phase, setPhase] = useState<Phase>("show");

  useEffect(() => {
    const t = window.setTimeout(() => setPhase("fade"), 850);
    return () => window.clearTimeout(t);
  }, []);

  useEffect(() => {
    if (phase !== "fade") return;
    const t = window.setTimeout(() => setPhase("gone"), 700);
    return () => window.clearTimeout(t);
  }, [phase]);

  if (phase === "gone") return null;

  return (
    <div
      className={`pointer-events-none fixed inset-0 z-[100] flex items-center justify-center bg-[#030306] transition-opacity duration-[480ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
        phase === "fade" ? "opacity-0" : "opacity-100"
      }`}
      aria-hidden
    >
      <motion.div
        className="relative h-14 w-14"
        initial={{ scale: 0.92, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-500/30 via-blue-500/20 to-cyan-400/10 blur-xl" />
        <motion.span
          className="absolute inset-0 rounded-2xl border border-white/15"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1.1, ease: "linear" }}
        />
        <motion.span
          className="absolute inset-[3px] rounded-[13px] border border-transparent border-t-violet-400/80 border-l-blue-400/40"
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 0.9, ease: "linear" }}
        />
        <div className="absolute inset-0 flex items-center justify-center font-display text-xs font-semibold tracking-[0.2em] text-white/90">
          {site.initials}
        </div>
      </motion.div>
    </div>
  );
}
