"use client";

import { useState } from "react";
import { ScrollReveal } from "@/components/effects/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { education, type EducationItem } from "@/data/education";

function EducationCard({ item, delay }: { item: EducationItem; delay: number }) {
  const [open, setOpen] = useState(false);

  return (
    <ScrollReveal delay={delay}>
      <div className="relative grid gap-4 pl-10 sm:grid-cols-[minmax(0,0.32fr)_minmax(0,1fr)] sm:gap-10 sm:pl-12">
        {/* timeline dot */}
        <div className="absolute left-0 top-1.5 flex h-6 w-6 items-center justify-center sm:top-2">
          <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-br from-violet-400 to-blue-400 shadow-[0_0_18px_rgba(167,139,250,0.9)]" />
        </div>

        {/* left column */}
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-zinc-500">
            {item.period}
          </p>
          <p className="mt-2 font-display text-lg font-semibold text-white sm:text-xl">
            {item.degree}
          </p>
          <p className="text-sm text-violet-200/90">{item.field}</p>
          <div className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-violet-500/25 bg-violet-500/10 px-2.5 py-1">
            <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
            <span className="text-[11px] font-medium text-violet-300">
              {item.gpa} &middot; {item.gpaNote}
            </span>
          </div>
        </div>

        {/* right card */}
        <div className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5 backdrop-blur-xl sm:p-6">
          {/* institution header */}
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br from-violet-500/20 via-blue-500/10 to-transparent font-display text-[10px] font-semibold tracking-wider text-violet-200">
              {item.abbreviation}
            </span>
            <p className="font-display text-sm font-semibold leading-snug text-white sm:text-base">
              {item.institution}
            </p>
          </div>

          {/* highlights */}
          <ul className="mt-4 space-y-2">
            {item.highlights.map((point) => (
              <li key={point} className="flex items-start gap-2.5 text-sm leading-relaxed text-zinc-300">
                <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-violet-400/70" />
                {point}
              </li>
            ))}
          </ul>

          {/* coursework toggle */}
          <div className="mt-5 border-t border-white/[0.06] pt-4">
            <button
              onClick={() => setOpen((v) => !v)}
              className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-zinc-500 transition-colors hover:text-violet-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 12 12"
                fill="none"
                className={`h-3 w-3 shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
              >
                <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {open ? "Hide Coursework" : "See Coursework"}
            </button>

            {open && (
              <ul className="mt-3 space-y-2">
                {item.coursework.map((course) => (
                  <li key={course} className="flex items-start gap-2.5 text-sm text-zinc-300">
                    <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-violet-400/70" />
                    {course}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}

export function Education() {
  return (
    <section id="education" className="border-b border-white/[0.06] py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Academic Background"
          title="Education"
        />

        <div className="relative">
          <div className="absolute left-[11px] top-2 bottom-4 w-px bg-gradient-to-b from-violet-500/70 via-blue-500/35 to-transparent sm:left-[15px]" />
          <div className="space-y-8">
            {education.map((item, i) => (
              <EducationCard key={item.id} item={item} delay={i * 0.06} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
