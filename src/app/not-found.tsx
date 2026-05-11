import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-lg flex-col items-start gap-6 px-4 py-24 sm:px-6">
      <p className="text-xs font-medium uppercase tracking-[0.28em] text-violet-300/90">
        404
      </p>
      <h1 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        This page drifted out of distribution.
      </h1>
      <p className="text-sm leading-relaxed text-zinc-400">
        The route you requested is not in the current deployment graph. If you
        followed an old link, try the homepage or blog index instead.
      </p>
      <div className="flex flex-wrap gap-3">
        <Link
          href="/"
          className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-zinc-950 transition hover:-translate-y-0.5"
        >
          Back home
        </Link>
        <Link
          href="/blog"
          className="rounded-full border border-white/15 bg-white/[0.04] px-5 py-2.5 text-sm font-medium text-zinc-100 transition hover:border-violet-400/40"
        >
          Read writing
        </Link>
      </div>
    </div>
  );
}
