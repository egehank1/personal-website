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
          subtitle="A condensed timeline of roles where I owned ambiguous problems end-to-end, from prototype to production metrics."
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
                    {item.logo ? (
                      <div className="mt-3 flex items-center gap-3">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={item.logo}
                          alt={`${item.company} logo`}
                          loading="lazy"
                          referrerPolicy="no-referrer"
                          className={`w-auto max-w-[140px] object-contain ${item.logoClass ?? "h-8"}`}
                        />
                        <p className="font-display text-lg font-semibold leading-tight text-white sm:text-xl">
                          <span className="text-zinc-500">· </span>
                          {item.role}
                        </p>
                      </div>
                    ) : (
                      <div className="mt-3 flex items-center gap-3">
                        {item.monogram ? (
                          <span
                            aria-hidden
                            className="flex h-10 min-w-10 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] px-2 text-[11px] font-semibold tracking-[0.12em] text-zinc-300"
                          >
                            {item.monogram}
                          </span>
                        ) : null}
                        <p className="font-display text-lg font-semibold leading-tight text-white sm:text-xl">
                          {item.role}
                        </p>
                      </div>
                    )}
                    {!item.logo || item.companyUrl ? (
                      item.companyUrl ? (
                        <a
                          href={item.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-1.5 inline-block text-sm text-violet-200/90 hover:text-violet-300 underline underline-offset-2 decoration-violet-400/50 transition-colors"
                        >
                          {item.company}
                        </a>
                      ) : (
                        <p className="mt-1.5 text-sm text-violet-200/90">{item.company}</p>
                      )
                    ) : null}
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
