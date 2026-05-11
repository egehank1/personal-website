import Link from "next/link";
import { ScrollReveal } from "@/components/effects/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { posts } from "@/data/posts";

export function BlogPreview() {
  const featured = posts.slice(0, 2);

  return (
    <section id="blog" className="border-b border-white/[0.06] py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Writing"
            title="Notes from the field"
            subtitle="Long-form thinking on shipping AI products, interface design under pressure, and evaluation as a first-class surface."
          />
          <ScrollReveal className="sm:mb-14">
            <Link
              href="/blog"
              className="inline-flex items-center justify-center rounded-full border border-white/12 bg-white/[0.04] px-5 py-2.5 text-sm font-medium text-zinc-100 shadow-[0_0_40px_-22px_rgba(59,130,246,0.9)] transition hover:border-blue-400/40 hover:bg-white/[0.07]"
            >
              View all posts
            </Link>
          </ScrollReveal>
        </div>

        <div className="mt-4 grid gap-6 md:grid-cols-2">
          {featured.map((post, i) => (
            <ScrollReveal key={post.slug} delay={i * 0.06}>
              <article className="group flex h-full flex-col rounded-3xl border border-white/[0.08] bg-white/[0.02] p-6 backdrop-blur-xl transition hover:border-violet-400/35 hover:bg-white/[0.035] sm:p-7">
                <div className="flex items-center justify-between gap-3 text-xs text-zinc-500">
                  <time dateTime={post.date}>
                    {new Intl.DateTimeFormat("en", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    }).format(new Date(post.date))}
                  </time>
                  <span>{post.readTime} read</span>
                </div>
                <h3 className="mt-4 font-display text-xl font-semibold tracking-tight text-white group-hover:text-violet-100">
                  {post.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-400">
                  {post.excerpt}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-zinc-100 transition group-hover:gap-3"
                >
                  Continue reading
                  <span aria-hidden>→</span>
                </Link>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
