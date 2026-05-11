import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ScrollReveal } from "@/components/effects/ScrollReveal";
import { getPost, posts } from "@/data/posts";
import { site } from "@/lib/config";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  const url = `${site.url}/blog/${post.slug}`;
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      url,
      publishedTime: post.date,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <article className="mx-auto max-w-3xl px-4 pb-24 pt-4 sm:px-6">
      <ScrollReveal>
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.22em] text-zinc-500 transition hover:text-zinc-200"
        >
          <span aria-hidden>←</span>
          Back to writing
        </Link>
      </ScrollReveal>

      <ScrollReveal delay={0.05} className="mt-8">
        <header>
          <div className="flex flex-wrap items-center gap-3 text-xs text-zinc-500">
            <time dateTime={post.date}>
              {new Intl.DateTimeFormat("en", {
                month: "long",
                day: "numeric",
                year: "numeric",
              }).format(new Date(post.date))}
            </time>
            <span className="h-1 w-1 rounded-full bg-zinc-600" />
            <span>{post.readTime} read</span>
          </div>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
            {post.title}
          </h1>
          <p className="mt-5 text-base leading-relaxed text-zinc-400 sm:text-lg">
            {post.excerpt}
          </p>
        </header>
      </ScrollReveal>

      <ScrollReveal delay={0.1} className="mt-12 max-w-none">
        <div className="space-y-6 text-sm leading-relaxed text-zinc-300 sm:text-[15px]">
          {post.content.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>
      </ScrollReveal>
    </article>
  );
}
