import { ScrollReveal } from "@/components/effects/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { experience } from "@/data/experience";

export function ExperienceTimeline() {
  return (
    <section id="experience" className="border-b border-white/[0.06] py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Trajectory"
          title="Experience"
          subtitle="A condensed timeline of roles where I owned ambiguous problems end-to-end—from prototype to production metrics."
        />

        <div className="relative">
          <div className="absolute left-[11px] top-2 bottom-4 w-px bg-gradient-to-b from-violet-500/70 via-blue-500/35 to-transparent sm:left-[15px]" />
          <div className="space-y-8">
            {experience.map((item, i) => (
              <ScrollReveal key={item.id} delay={i * 0.06}>
                <div className="relative grid gap-4 pl-10 sm:grid-cols-[minmax(0,0.32fr)_minmax(0,1fr)] sm:gap-10 sm:pl-12">
                  <div className="absolute left-0 top-1.5 flex h-6 w-6 items-center justify-center sm:top-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-br from-violet-400 to-blue-400 shadow-[0_0_18px_rgba(167,139,250,0.9)]" />
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.22em] text-zinc-500">
                      {item.period}
                    </p>
                    <p className="mt-2 font-display text-lg font-semibold text-white sm:text-xl">
                      {item.role}
                    </p>
                    <p className="text-sm text-violet-200/90">{item.company}</p>
                  </div>
                  <div className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5 backdrop-blur-xl sm:p-6">
                    <p className="text-sm leading-relaxed text-zinc-300">
                      {item.summary}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {item.stack.map((s) => (
                        <span
                          key={s}
                          className="rounded-full border border-white/10 bg-black/35 px-2.5 py-1 text-[11px] text-zinc-300"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
