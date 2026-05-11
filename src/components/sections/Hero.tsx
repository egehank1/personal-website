"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { GradientMesh } from "@/components/effects/GradientMesh";
import { NeuralNetworkBackground } from "@/components/effects/NeuralNetworkBackground";
import { site } from "@/lib/config";
import { useTypingCycle } from "@/hooks/useTypingCycle";

const HERO_PHRASES: string[] = [
  "LLMs",
  "computer vision",
  "production ML pipelines",
  "reliable agents in production",
];

/** Same chrome as “Start a conversation” (default + hover background). */
const secondaryGhostButtonClass =
  "inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.03] px-6 py-3 text-sm font-medium text-zinc-100 backdrop-blur-xl transition hover:border-violet-400/35 hover:bg-white/[0.06]";

export function Hero() {
  const typed = useTypingCycle(HERO_PHRASES, 42, 2600);

  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-white/[0.06] pb-24 pt-6 sm:pb-32 sm:pt-4"
    >
      <GradientMesh />
      <NeuralNetworkBackground />
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.22em] text-zinc-300 shadow-[0_0_40px_-18px_rgba(129,140,248,0.9)]"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]" />
          Open to selective collaborations
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 max-w-4xl pb-1 font-display text-[clamp(2.6rem,6vw,4.25rem)] font-semibold leading-[1.1] tracking-tight text-white"
        >
          Building calm software
          <span className="block bg-gradient-to-r from-white via-violet-100 to-blue-200 bg-clip-text pb-3 text-transparent">
            at the edge of intelligence.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg"
        >
          <span className="text-zinc-300">
            AI engineer building intelligent systems — from{" "}
            <span className="font-medium text-zinc-100">
              <span className="tabular-nums">{typed}</span>
              <span className="ml-0.5 inline-block h-[1.1em] w-px translate-y-0.5 bg-violet-400/80 align-middle animate-pulse" />
            </span>
          </span>
          <span className="hero-tagline-in mt-3 block text-zinc-400">
            Turning research into products.
          </span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Link
            href="/#projects"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-white px-6 py-3 text-sm font-semibold text-zinc-950 shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_18px_60px_-24px_rgba(129,140,248,0.9)] transition hover:-translate-y-0.5"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-violet-200/40 via-transparent to-blue-200/30 opacity-0 transition group-hover:opacity-100" />
            <span className="relative">View projects</span>
          </Link>
          <Link href="/#contact" className={secondaryGhostButtonClass}>
            Start a conversation
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.28 }}
          className="mt-12 flex flex-wrap gap-4"
        >
          {[
            { label: "GitHub", href: site.social.github },
            { label: "LinkedIn", href: site.social.linkedin },
            { label: "X", href: site.social.x },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className={secondaryGhostButtonClass}
            >
              {s.label}
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
