"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/effects/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { techCategories } from "@/data/tech";

export function TechStackGrid() {
  return (
    <section id="stack" className="border-b border-white/[0.06] py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Toolkit"
          title="Tech stack"
          subtitle="A pragmatic mix of languages, ML tooling, and infra primitives—chosen for leverage, not novelty."
        />

        <div className="grid gap-5 md:grid-cols-2">
          {techCategories.map((cat, i) => (
            <ScrollReveal key={cat.label} delay={i * 0.05}>
              <motion.div
                whileHover={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 320, damping: 24 }}
                className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-br from-white/[0.06] via-white/[0.02] to-transparent p-6 backdrop-blur-2xl"
              >
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(129,140,248,0.16),transparent_55%)]" />
                <div className="relative">
                  <p className="text-xs font-medium uppercase tracking-[0.26em] text-zinc-500">
                    {cat.label}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {cat.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-black/40 px-3 py-1.5 text-xs text-zinc-200 shadow-[0_0_24px_-16px_rgba(129,140,248,0.9)]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
