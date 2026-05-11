import { ScrollReveal } from "@/components/effects/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { site } from "@/lib/config";

const pillars = [
  {
    title: "Systems thinking",
    body: "I map failure modes early: latency, cost, hallucination, and human workflow—then design architecture that degrades gracefully.",
  },
  {
    title: "Product instinct",
    body: "Great AI feels boring in the best way: predictable when it must be, surprising only when invited. I obsess over that balance.",
  },
  {
    title: "Craft in the details",
    body: "Typography, motion, and micro-interactions are not decoration—they are trust signals. I ship interfaces that respect attention.",
  },
];

export function About() {
  return (
    <section id="about" className="border-b border-white/[0.06] py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="About"
          title={`Hi, I’m ${site.name.split(" ")[0]}.`}
          subtitle="I work at the intersection of applied AI, full-stack engineering, and product design—shipping software that teams actually want to live in."
        />

        <div className="grid gap-6 lg:grid-cols-[1.1fr_minmax(0,0.9fr)] lg:gap-10">
          <ScrollReveal className="rounded-3xl border border-white/[0.08] bg-gradient-to-br from-white/[0.06] via-white/[0.02] to-transparent p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_40px_120px_-60px_rgba(99,102,241,0.55)] backdrop-blur-xl sm:p-8">
            <p className="text-sm leading-relaxed text-zinc-300 sm:text-[15px]">
              Most recently I&apos;ve been building agentic workflows, evaluation
              infrastructure, and customer-facing surfaces where model behavior is
              observable and tunable. I care deeply about the boring parts: logging,
              rollback, permissions, and clear operator UX when things go sideways.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-zinc-400 sm:text-[15px]">
              Outside of execution work, I write about shipping with uncertainty,
              design for dense information, and how to keep ML systems honest in
              production.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {["North America", "Remote-first", "Select travel"].map((chip) => (
                <div
                  key={chip}
                  className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-xs font-medium uppercase tracking-[0.18em] text-zinc-400"
                >
                  {chip}
                </div>
              ))}
            </div>
          </ScrollReveal>

          <div className="flex flex-col gap-4">
            {pillars.map((p, i) => (
              <ScrollReveal
                key={p.title}
                delay={i * 0.06}
                className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5 backdrop-blur-xl transition hover:border-violet-400/25 hover:bg-white/[0.035]"
              >
                <h3 className="font-display text-base font-semibold text-white">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">{p.body}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
