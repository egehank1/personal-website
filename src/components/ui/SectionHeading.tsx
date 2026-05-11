import { ScrollReveal } from "@/components/effects/ScrollReveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  subtitle?: string;
};

export function SectionHeading({ eyebrow, title, subtitle }: SectionHeadingProps) {
  return (
    <ScrollReveal className="mb-10 max-w-2xl sm:mb-14">
      <p className="text-xs font-medium uppercase tracking-[0.28em] text-violet-300/90">
        {eyebrow}
      </p>
      <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-3 text-sm leading-relaxed text-zinc-400 sm:text-base">
          {subtitle}
        </p>
      ) : null}
    </ScrollReveal>
  );
}
