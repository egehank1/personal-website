"use client";

import { motion } from "framer-motion";
import { useState, type FormEvent } from "react";
import { ScrollReveal } from "@/components/effects/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { site } from "@/lib/config";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const subject = encodeURIComponent(`Portfolio inquiry from ${name || "visitor"}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`,
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setStatus("sent");
    form.reset();
    window.setTimeout(() => setStatus("idle"), 4000);
  }

  return (
    <section id="contact" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Contact"
          title="Let’s build something sharp."
          subtitle="Tell me about the problem space, constraints, and what success looks like. I typically reply within two business days."
        />

        <ScrollReveal>
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-start">
            <motion.form
              onSubmit={onSubmit}
              className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-br from-white/[0.07] via-white/[0.02] to-transparent p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_40px_120px_-60px_rgba(59,130,246,0.55)] backdrop-blur-2xl sm:p-8"
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 260, damping: 24 }}
            >
              <div className="pointer-events-none absolute inset-0 opacity-70">
                <div className="absolute -left-10 top-0 h-40 w-40 rounded-full bg-violet-500/15 blur-3xl" />
                <div className="absolute -right-16 bottom-0 h-48 w-48 rounded-full bg-blue-500/15 blur-3xl" />
              </div>

              <div className="relative grid gap-4 sm:grid-cols-2">
                <label className="flex flex-col gap-2 text-xs font-medium uppercase tracking-[0.18em] text-zinc-500">
                  Name
                  <input
                    name="name"
                    required
                    className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm font-normal normal-case tracking-normal text-zinc-100 outline-none ring-0 transition placeholder:text-zinc-600 focus:border-violet-400/50 focus:bg-black/55"
                    placeholder="Ada Lovelace"
                  />
                </label>
                <label className="flex flex-col gap-2 text-xs font-medium uppercase tracking-[0.18em] text-zinc-500">
                  Email
                  <input
                    name="email"
                    type="email"
                    required
                    className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm font-normal normal-case tracking-normal text-zinc-100 outline-none transition placeholder:text-zinc-600 focus:border-blue-400/50 focus:bg-black/55"
                    placeholder="you@company.com"
                  />
                </label>
              </div>

              <label className="relative mt-4 flex flex-col gap-2 text-xs font-medium uppercase tracking-[0.18em] text-zinc-500">
                Message
                <textarea
                  name="message"
                  required
                  rows={5}
                  className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm font-normal normal-case tracking-normal text-zinc-100 outline-none transition placeholder:text-zinc-600 focus:border-violet-400/50 focus:bg-black/55"
                  placeholder="Context, timeline, links—whatever helps me understand the shape of the work."
                />
              </label>

              <div className="relative mt-6 flex flex-wrap items-center gap-4">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-zinc-950 shadow-[0_18px_60px_-26px_rgba(129,140,248,0.95)] transition hover:-translate-y-0.5"
                >
                  Open email draft
                </button>
                {status === "sent" ? (
                  <span className="text-xs text-emerald-300">
                    Draft opened—send when you&apos;re ready.
                  </span>
                ) : (
                  <span className="text-xs text-zinc-500">
                    Uses your default mail client—no backend required.
                  </span>
                )}
              </div>
            </motion.form>

            <div className="space-y-4 rounded-3xl border border-white/[0.07] bg-white/[0.02] p-6 backdrop-blur-xl sm:p-8">
              <p className="text-sm leading-relaxed text-zinc-300">
                Prefer a direct line? Reach me at{" "}
                <a
                  href={`mailto:${site.email}`}
                  className="font-medium text-white underline decoration-white/20 underline-offset-4 transition hover:decoration-violet-400/80"
                >
                  {site.email}
                </a>
                .
              </p>
              <div className="grid gap-3 text-sm text-zinc-400">
                <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/35 px-4 py-3">
                  <span>GitHub</span>
                  <a
                    href={site.social.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-zinc-100 hover:text-white"
                  >
                    Profile →
                  </a>
                </div>
                <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/35 px-4 py-3">
                  <span>LinkedIn</span>
                  <a
                    href={site.social.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="text-zinc-100 hover:text-white"
                  >
                    Connect →
                  </a>
                </div>
                <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/35 px-4 py-3">
                  <span>X</span>
                  <a
                    href={site.social.x}
                    target="_blank"
                    rel="noreferrer"
                    className="text-zinc-100 hover:text-white"
                  >
                    Follow →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
