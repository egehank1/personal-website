"use client";

import { AnimatePresence, motion, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
import { site } from "@/lib/config";

const links = [
  { href: "/#about", label: "About" },
  { href: "/#projects", label: "Projects" },
  { href: "/#experience", label: "Experience" },
  { href: "/#stack", label: "Stack" },
  { href: "/blog", label: "Blog" },
  { href: "/#contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const lastY = useRef(0);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = lastY.current;
    lastY.current = y;
    setScrolled(y > 12);
    if (y > prev && y > 120) setHidden(true);
    else setHidden(false);
  });

  return (
    <>
      <motion.header
        className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6"
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: hidden ? -100 : 0, opacity: hidden ? 0 : 1 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      >
        <div
          className={`mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-2xl border px-4 py-3 backdrop-blur-2xl transition-colors duration-300 sm:px-5 ${
            scrolled
              ? "border-white/12 bg-white/[0.06] shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_24px_80px_-32px_rgba(99,102,241,0.35)]"
              : "border-white/[0.07] bg-white/[0.03]"
          }`}
        >
          <Link
            href="/"
            className="group flex items-center gap-2 font-display text-sm font-semibold tracking-tight text-white"
          >
            <span className="relative flex h-8 w-8 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-violet-500/25 via-blue-500/10 to-transparent text-[11px] tracking-[0.18em]">
              <span className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[radial-gradient(circle_at_30%_0%,rgba(255,255,255,0.35),transparent_55%)]" />
              EK
            </span>
            <span className="hidden sm:inline">{site.name}</span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {links.map((l) => {
              const active =
                l.href === "/blog" ? pathname.startsWith("/blog") : false;
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`rounded-full px-3 py-1.5 text-sm text-zinc-300 transition-colors hover:bg-white/5 hover:text-white ${
                    active ? "bg-white/10 text-white" : ""
                  }`}
                >
                  {l.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="/#contact"
              className="hidden rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-sm text-zinc-100 shadow-[0_0_24px_-12px_rgba(129,140,248,0.9)] transition hover:border-violet-400/40 hover:bg-white/[0.08] sm:inline-flex"
            >
              Let&apos;s build
            </Link>
            <button
              type="button"
              aria-label="Toggle menu"
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-zinc-100 md:hidden"
              onClick={() => setOpen((v) => !v)}
            >
              <span className="sr-only">Menu</span>
              <div className="flex flex-col gap-1.5">
                <motion.span
                  className="block h-0.5 w-5 rounded-full bg-white"
                  animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                />
                <motion.span
                  className="block h-0.5 w-5 rounded-full bg-white/70"
                  animate={open ? { opacity: 0 } : { opacity: 1 }}
                />
                <motion.span
                  className="block h-0.5 w-5 rounded-full bg-white"
                  animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                />
              </div>
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              type="button"
              aria-label="Close menu"
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />
            <motion.nav
              initial={{ y: -12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -12, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="absolute left-4 right-4 top-24 rounded-2xl border border-white/10 bg-[#05050a]/95 p-4 shadow-2xl backdrop-blur-2xl"
            >
              <div className="flex flex-col gap-1">
                {links.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="rounded-xl px-3 py-3 text-sm text-zinc-200 hover:bg-white/5 hover:text-white"
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            </motion.nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
