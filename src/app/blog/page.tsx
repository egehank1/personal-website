import type { Metadata } from "next";
import Link from "next/link";
import { ScrollReveal } from "@/components/effects/ScrollReveal";
import { posts } from "@/data/posts";
import { site } from "@/lib/config";

export const metadata: Metadata = {
  title: "Blog",
  description: `Essays and notes by ${site.name} on AI systems, design, and shipping.`,
  openGraph: {
    title: `Blog — ${site.name}`,
    description: `Essays and notes by ${site.name} on AI systems, design, and shipping.`,
    url: `${site.url}/blog`,
  },
};

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 pb-24 sm:px-6">
      <header className="mb-14 max-w-2xl pt-4">
        <p className="text-xs font-medium uppercase tracking-[0.28em] text-violet-300/90">
          Writing
        </p>
        <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          Field notes
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-zinc-400 sm:text-base">
          Longer-form pieces on building with models, designing for operators, and
          keeping quality measurable as products evolve.
        </p>
      </header>

      <div className="grid gap-6">
        {posts.map((post, i) => (
          <ScrollReveal key={post.slug} delay={i * 0.04}>
            <article className="group relative overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-br from-white/[0.06] via-white/[0.02] to-transparent p-6 backdrop-blur-2xl transition hover:border-violet-400/35 sm:p-8">
              <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-violet-500/15 via-transparent to-cyan-400/10 blur-2xl" />
              </div>
              <div className="relative flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-3 text-xs text-zinc-500">
                    <time dateTime={post.date}>
                      {new Intl.DateTimeFormat("en", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      }).format(new Date(post.date))}
                    </time>
                    <span className="h-1 w-1 rounded-full bg-zinc-600" />
                    <span>{post.readTime} read</span>
                  </div>
                  <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="transition hover:text-violet-100"
                    >
                      {post.title}
                    </Link>
                  </h2>
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-zinc-400 sm:text-[15px]">
                    {post.excerpt}
                  </p>
                </div>
                <Link
                  href={`/blog/${post.slug}`}
                  className="relative inline-flex shrink-0 items-center justify-center rounded-full border border-white/12 bg-white/[0.04] px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-zinc-200 transition hover:border-violet-400/45 hover:text-white sm:mt-1"
                >
                  Read
                </Link>
              </div>
            </article>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}
