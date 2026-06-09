import { ScrollReveal } from "@/components/effects/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { site } from "@/lib/config";

const pillars = [
  {
    title: "Trust by design",
    body: "I'd rather ship AI that admits what it doesn't know. In DeepScholar, every answer cites a real passage or says it can't answer. No fabricated sources, no confident guesses.",
  },
  {
    title: "Range across the stack",
    body: "Next.js and FastAPI, Python ML pipelines, Java systems, ServiceNow scripting, even a trading bot. I follow the problem wherever it leads instead of staying in one lane.",
  },
  {
    title: "The boring parts matter",
    body: "Validation at every boundary, reproducible pipelines, and clean data the rest of a team can rely on. Most of what makes software trustworthy is unglamorous, and I lean into it.",
  },
];

export function About() {
  return (
    <section id="about" className="border-b border-white/[0.06] py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="About"
          title={`Hi, I’m ${site.name.split(" ")[0]}.`}
          subtitle="I'm a software developer who builds enterprise platforms by day and AI products on the side, from ServiceNow workflows and EU-funded ESG research platforms to RAG copilots and ML pipelines."
        />

        <div className="grid gap-6 lg:grid-cols-[1.1fr_minmax(0,0.9fr)] lg:gap-10">
          <ScrollReveal className="rounded-3xl border border-white/[0.08] bg-gradient-to-br from-white/[0.06] via-white/[0.02] to-transparent p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_40px_120px_-60px_rgba(99,102,241,0.55)] backdrop-blur-xl sm:p-8">
            <p className="text-sm leading-relaxed text-zinc-300 sm:text-[15px]">
              Right now I&apos;m a Software Developer at snacc-it, where I support
              Project ETHICA, an EU-funded research project building a Digital Product
              Passport platform for ESG transparency and compliance. Alongside that I
              work across a range of ServiceNow areas: incident management, travel
              reimbursement, illness reporting, and enterprise web development. On the
              side I build AI and ML projects like DeepScholar, a RAG research copilot
              that keeps its answers grounded in real, citable sources.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-zinc-400 sm:text-[15px]">
              Before this I worked as a quantitative developer building trading bots,
              tutored 200+ students in computer science at FH Aachen, and founded a
              fitness clothing e-commerce brand that hit 6,500+ euros in revenue. I
              write about what I learn on Medium, usually about building AI products
              people can actually trust.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {["Aachen, Germany", "Remote-friendly", "Open to roles"].map((chip) => (
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
