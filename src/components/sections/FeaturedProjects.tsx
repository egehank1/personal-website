"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ScrollReveal } from "@/components/effects/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projects } from "@/data/projects";

export function FeaturedProjects() {
  return (
    <section id="projects" className="border-b border-white/[0.06] py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Work"
          title="Featured projects"
          subtitle="Selected builds where models, infra, and interface design had to move together—no loose seams."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ScrollReveal key={project.slug} delay={index * 0.05}>
              <motion.article
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 260, damping: 22 }}
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-b from-white/[0.07] via-white/[0.02] to-transparent p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_30px_90px_-40px_rgba(79,70,229,0.65)] backdrop-blur-2xl"
              >
                <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                  <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-violet-500/25 via-transparent to-cyan-400/10 blur-xl" />
                </div>

                <div className="relative flex items-center justify-between gap-3">
                  <span className="rounded-full border border-white/10 bg-black/40 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.22em] text-zinc-400">
                    {project.year}
                  </span>
                  <div className="flex gap-2">
                    {project.github ? (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] text-zinc-200 transition hover:border-violet-400/40 hover:text-white"
                      >
                        GitHub
                      </a>
                    ) : null}
                    {project.live ? (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] text-zinc-200 transition hover:border-blue-400/40 hover:text-white"
                      >
                        Live
                      </a>
                    ) : null}
                  </div>
                </div>

                <div className="relative mt-6 flex-1">
                  <h3 className="font-display text-xl font-semibold tracking-tight text-white">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm text-violet-200/90">{project.tagline}</p>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                    {project.description}
                  </p>
                </div>

                <div className="relative mt-6 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/10 bg-black/35 px-2.5 py-1 text-[11px] text-zinc-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="relative mt-6 border-t border-white/[0.06] pt-4">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-medium text-zinc-100 transition group-hover:gap-3"
                  >
                    View case study
                    <span aria-hidden>→</span>
                  </Link>
                </div>
              </motion.article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
