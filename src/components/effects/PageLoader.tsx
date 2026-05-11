"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export function PageLoader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = window.setTimeout(() => setVisible(false), 900);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          key="loader"
          className="pointer-events-none fixed inset-0 z-[100] flex items-center justify-center bg-[#030306]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
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
              AR
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
