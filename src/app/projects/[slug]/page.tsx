import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ScrollReveal } from "@/components/effects/ScrollReveal";
import { getProject, projects } from "@/data/projects";
import type { CaseStudySection } from "@/data/projects";
import { site } from "@/lib/config";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  const url = `${site.url}/projects/${project.slug}`;
  return {
    title: project.title,
    description: project.description,
    alternates: { canonical: url },
    openGraph: {
      title: project.title,
      description: project.description,
      url,
    },
  };
}

function SectionBlock({ section }: { section: CaseStudySection }) {
  return (
    <div>
      <h2 className="text-xs font-medium uppercase tracking-[0.26em] text-zinc-500">
        {section.heading}
      </h2>
      {section.body && (
        <p className="mt-3 text-sm leading-relaxed text-zinc-300 sm:text-[15px]">
          {section.body}
        </p>
      )}
      {section.items && section.items.length > 0 && (
        <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-zinc-300 sm:text-[15px]">
          {section.items.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-br from-violet-400 to-blue-400 shadow-[0_0_12px_rgba(167,139,250,0.9)]" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const isRich = !!project.caseStudy;

  return (
    <div className="mx-auto max-w-4xl px-4 pb-24 pt-4 sm:px-6">
      <ScrollReveal>
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.22em] text-zinc-500 transition hover:text-zinc-200"
        >
          <span aria-hidden>←</span>
          Back to projects
        </Link>
      </ScrollReveal>

      <ScrollReveal delay={0.05} className="mt-8">
        <div className="rounded-3xl border border-white/[0.08] bg-gradient-to-br from-white/[0.07] via-white/[0.02] to-transparent p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_40px_120px_-60px_rgba(99,102,241,0.55)] backdrop-blur-2xl sm:p-10">
          {/* Header row */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p className="text-xs font-medium uppercase tracking-[0.26em] text-zinc-500">
              Case study · {project.year}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.github ? (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/12 bg-white/[0.04] px-4 py-1.5 text-xs font-medium text-zinc-100 transition hover:border-violet-400/45"
                >
                  GitHub
                </a>
              ) : null}
              {project.live ? (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/12 bg-white/[0.04] px-4 py-1.5 text-xs font-medium text-zinc-100 transition hover:border-blue-400/45"
                >
                  Live demo
                </a>
              ) : null}
            </div>
          </div>

          {/* Title + tagline */}
          <h1 className="mt-6 font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            {project.title}
          </h1>
          <p className="mt-3 text-base text-violet-200/90 sm:text-lg">
            {isRich ? project.caseStudy!.subtitle : project.tagline}
          </p>

          {/* Rich case study layout */}
          {isRich ? (
            <div className="mt-10 space-y-10">
              {project.caseStudy!.sections.map((section) => (
                <SectionBlock key={section.heading} section={section} />
              ))}
            </div>
          ) : (
            <>
              {/* Fallback: description + highlights */}
              <p className="mt-6 text-sm leading-relaxed text-zinc-300 sm:text-[15px]">
                {project.description}
              </p>
              <div className="mt-10">
                <h2 className="text-xs font-medium uppercase tracking-[0.26em] text-zinc-500">
                  Highlights
                </h2>
                <ul className="mt-4 space-y-3 text-sm leading-relaxed text-zinc-300 sm:text-[15px]">
                  {project.highlights.map((h) => (
                    <li key={h} className="flex gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-br from-violet-400 to-blue-400 shadow-[0_0_12px_rgba(167,139,250,0.9)]" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </>
          )}

          {/* Tech stack — always shown */}
          <div className="mt-10 border-t border-white/[0.06] pt-8">
            <h2 className="text-xs font-medium uppercase tracking-[0.26em] text-zinc-500">
              Tech stack
            </h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/10 bg-black/40 px-3 py-1 text-xs text-zinc-200"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}
