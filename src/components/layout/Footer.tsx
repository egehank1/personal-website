import Link from "next/link";
import { site } from "@/lib/config";

const footerLinks = [
  { href: "/#projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: site.social.github, label: "GitHub", external: true },
  { href: site.social.linkedin, label: "LinkedIn", external: true },
];

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-[#020205]/80">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-12 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div>
          <p className="font-display text-sm font-semibold text-white">
            {site.name}
          </p>
          <p className="mt-1 max-w-sm text-sm text-zinc-400">
            {site.title}. Crafted interfaces, reliable systems, thoughtful AI.
          </p>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-zinc-400">
          {footerLinks.map((l) =>
            l.external ? (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-white"
              >
                {l.label}
              </a>
            ) : (
              <Link
                key={l.href}
                href={l.href}
                className="transition hover:text-white"
              >
                {l.label}
              </Link>
            ),
          )}
        </div>
      </div>
      <div className="border-t border-white/[0.04] py-4 text-center text-xs text-zinc-500">
        © {new Date().getFullYear()} {site.name}. Built with Next.js.
      </div>
    </footer>
  );
}
