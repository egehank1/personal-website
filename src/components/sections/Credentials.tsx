"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal } from "@/components/effects/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { credentials, type Credential, type CredentialType } from "@/data/credentials";

// ── Helpers ───────────────────────────────────────────────────────────────────

function isImage(path: string) {
  return /\.(jpe?g|png|webp|gif)$/i.test(path);
}

// ── Type config ───────────────────────────────────────────────────────────────

type TypeConfig = {
  label: string;
  gradient: string;
  border: string;
  text: string;
  badgeBg: string;
  badgeText: string;
  badgeBorder: string;
  glow: string;
};

const TYPE_CONFIG: Record<CredentialType, TypeConfig> = {
  certificate: {
    label: "Certificate",
    gradient: "from-violet-500/25 via-indigo-500/10 to-transparent",
    border: "border-violet-500/20",
    text: "text-violet-200",
    badgeBg: "bg-violet-500/10",
    badgeText: "text-violet-300",
    badgeBorder: "border-violet-500/25",
    glow: "rgba(139,92,246,0.55)",
  },
  scholarship: {
    label: "Scholarship",
    gradient: "from-sky-500/25 via-blue-500/10 to-transparent",
    border: "border-sky-500/20",
    text: "text-sky-200",
    badgeBg: "bg-sky-500/10",
    badgeText: "text-sky-300",
    badgeBorder: "border-sky-500/25",
    glow: "rgba(14,165,233,0.55)",
  },
  course: {
    label: "Course",
    gradient: "from-emerald-500/25 via-teal-500/10 to-transparent",
    border: "border-emerald-500/20",
    text: "text-emerald-200",
    badgeBg: "bg-emerald-500/10",
    badgeText: "text-emerald-300",
    badgeBorder: "border-emerald-500/25",
    glow: "rgba(16,185,129,0.55)",
  },
  award: {
    label: "Award",
    gradient: "from-amber-500/25 via-yellow-500/10 to-transparent",
    border: "border-amber-500/20",
    text: "text-amber-200",
    badgeBg: "bg-amber-500/10",
    badgeText: "text-amber-300",
    badgeBorder: "border-amber-500/25",
    glow: "rgba(245,158,11,0.55)",
  },
  recommendation: {
    label: "Recommendation",
    gradient: "from-rose-500/25 via-pink-500/10 to-transparent",
    border: "border-rose-500/20",
    text: "text-rose-200",
    badgeBg: "bg-rose-500/10",
    badgeText: "text-rose-300",
    badgeBorder: "border-rose-500/25",
    glow: "rgba(244,63,94,0.55)",
  },
};

const TYPE_ICONS: Record<CredentialType, React.ReactNode> = {
  certificate: (
    <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4" aria-hidden="true">
      <path d="M10 2l1.8 3.6 4 .58-2.9 2.82.69 3.98L10 11l-3.59 1.88.69-3.98L4.2 6.18l4-.58L10 2z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      <path d="M7 14.5v3.5l3-1.5 3 1.5V14.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  scholarship: (
    <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4" aria-hidden="true">
      <path d="M3 7.5L10 4l7 3.5-7 3.5-7-3.5z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      <path d="M6.5 9.5V14a7 7 0 007 0V9.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M17 7.5v4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  ),
  course: (
    <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4" aria-hidden="true">
      <rect x="3" y="3" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="1.4" />
      <path d="M7 8l2.5 2L7 12" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M11 12h2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  ),
  award: (
    <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4" aria-hidden="true">
      <path d="M10 2l1.55 4.78H16.5l-4.07 2.95 1.55 4.78L10 11.56l-3.98 2.95 1.55-4.78L3.5 6.78h4.95L10 2z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
    </svg>
  ),
  recommendation: (
    <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4" aria-hidden="true">
      <path d="M4 4h12a1 1 0 011 1v8a1 1 0 01-1 1H4a1 1 0 01-1-1V5a1 1 0 011-1z" stroke="currentColor" strokeWidth="1.4" />
      <path d="M7 8h6M7 11h4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  ),
};

// ── Lightbox ──────────────────────────────────────────────────────────────────

function Lightbox({
  src,
  title,
  onClose,
}: {
  src: string;
  title: string;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[100] flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        {/* Backdrop */}
        <button
          type="button"
          aria-label="Close lightbox"
          className="absolute inset-0 bg-black/80 backdrop-blur-md"
          onClick={onClose}
        />

        {/* Image panel */}
        <motion.div
          className="relative z-10 flex max-h-[90vh] max-w-4xl flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#05050c]/95 shadow-2xl"
          initial={{ scale: 0.94, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.94, opacity: 0 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/[0.07] px-4 py-3">
            <p className="font-display text-sm font-medium text-white">{title}</p>
            <div className="flex items-center gap-2">
              <a
                href={src}
                download
                className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-zinc-300 transition hover:bg-white/[0.08] hover:text-white"
              >
                <svg viewBox="0 0 16 16" fill="none" className="h-3 w-3" aria-hidden="true">
                  <path d="M2 10v4h12v-4M8 2v8M5 7l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Download
              </a>
              <button
                type="button"
                aria-label="Close"
                onClick={onClose}
                className="flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-zinc-400 transition hover:bg-white/[0.09] hover:text-white"
              >
                <svg viewBox="0 0 16 16" fill="none" className="h-3.5 w-3.5" aria-hidden="true">
                  <path d="M3 3l10 10M13 3L3 13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="relative flex-1 overflow-auto">
            <Image
              src={src}
              alt={title}
              width={1200}
              height={900}
              className="h-auto w-full object-contain"
              unoptimized
            />
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

// ── Filter types ──────────────────────────────────────────────────────────────

type Filter = CredentialType | "all";

// keep counts initialiser in sync with CredentialType union
const FILTERS: { value: Filter; label: string }[] = [
  { value: "all", label: "All" },
  { value: "certificate", label: "Certificates" },
  { value: "scholarship", label: "Scholarships" },
  { value: "course", label: "Courses" },
  { value: "award", label: "Awards" },
  { value: "recommendation", label: "Recommendations" },
];

// ── Card ──────────────────────────────────────────────────────────────────────

function CredentialCard({
  item,
  index,
  onImageOpen,
}: {
  item: Credential;
  index: number;
  onImageOpen: (src: string, title: string) => void;
}) {
  const cfg = TYPE_CONFIG[item.type];
  const hasFile = !!item.filePath;
  const fileIsImage = hasFile && isImage(item.filePath!);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.35, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }}
    >
      <div
        className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.07] bg-gradient-to-br ${cfg.gradient} p-5 backdrop-blur-xl transition-all duration-300 hover:border-white/[0.12] hover:shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_24px_80px_-32px_var(--card-glow)]`}
        style={{ "--card-glow": cfg.glow } as React.CSSProperties}
      >
        {/* Inner shine on hover */}
        <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[radial-gradient(circle_at_30%_0%,rgba(255,255,255,0.04),transparent_65%)]" />

        {/* Top row: type badge + date */}
        <div className="flex items-center justify-between gap-2">
          <div className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 ${cfg.badgeBg} ${cfg.badgeBorder}`}>
            <span className={cfg.badgeText}>{TYPE_ICONS[item.type]}</span>
            <span className={`text-[11px] font-medium ${cfg.badgeText}`}>{cfg.label}</span>
          </div>
          <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-zinc-500">
            {item.date}
          </span>
        </div>

        {/* Issuer abbr icon + titles */}
        <div className="mt-4 flex items-start gap-3">
          <span
            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border ${cfg.border} bg-gradient-to-br ${cfg.gradient} font-display text-[9px] font-semibold tracking-wider ${cfg.text}`}
          >
            {item.issuer
              .split(" ")
              .map((w) => w[0])
              .join("")
              .toUpperCase()
              .slice(0, 3)}
          </span>
          <div className="min-w-0 flex-1">
            <p className="font-display text-sm font-semibold leading-snug text-white sm:text-[15px]">
              {item.title}
            </p>
            <p className={`mt-0.5 text-xs ${cfg.text}`}>{item.issuer}</p>
          </div>
        </div>

        {/* Description */}
        {item.description ? (
          <p className="mt-3 text-sm leading-relaxed text-zinc-400">{item.description}</p>
        ) : null}

        {/* Tags */}
        {item.tags && item.tags.length > 0 ? (
          <div className="mt-4 flex flex-wrap gap-1.5">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/[0.07] bg-white/[0.03] px-2 py-0.5 text-[11px] text-zinc-400"
              >
                {tag}
              </span>
            ))}
          </div>
        ) : null}

        {/* Action buttons */}
        <div className="mt-auto flex gap-2 pt-4">
          {hasFile ? (
            fileIsImage ? (
              /* Image → open lightbox */
              <button
                type="button"
                onClick={() => onImageOpen(item.filePath!, item.title)}
                className={`inline-flex items-center gap-1.5 rounded-full border ${cfg.badgeBorder} ${cfg.badgeBg} px-3 py-1.5 text-xs font-medium ${cfg.badgeText} transition-all duration-200 hover:brightness-110`}
              >
                <svg viewBox="0 0 16 16" fill="none" className="h-3 w-3" aria-hidden="true">
                  <rect x="1.5" y="3" width="13" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="5.5" cy="6.5" r="1" stroke="currentColor" strokeWidth="1.2" />
                  <path d="M1.5 11l3.5-3 2.5 2.5 2-1.5 3 3.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                View Image
              </button>
            ) : (
              /* PDF → open in new tab */
              <a
                href={item.filePath}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-1.5 rounded-full border ${cfg.badgeBorder} ${cfg.badgeBg} px-3 py-1.5 text-xs font-medium ${cfg.badgeText} transition-all duration-200 hover:brightness-110`}
              >
                <svg viewBox="0 0 16 16" fill="none" className="h-3 w-3" aria-hidden="true">
                  <path d="M2 10v4h12v-4M8 2v8M5 7l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                View PDF
              </a>
            )
          ) : null}

          {item.credentialUrl ? (
            <a
              href={item.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-zinc-400 transition-all duration-200 hover:border-white/[0.15] hover:text-zinc-200"
            >
              <svg viewBox="0 0 16 16" fill="none" className="h-3 w-3" aria-hidden="true">
                <path d="M6.5 3.5H3.5a1 1 0 00-1 1v8a1 1 0 001 1h8a1 1 0 001-1V9.5M9.5 2.5h4v4M8 8L13.5 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Verify
            </a>
          ) : null}
        </div>
      </div>
    </motion.div>
  );
}

// ── Section ───────────────────────────────────────────────────────────────────

export function Credentials() {
  const [active, setActive] = useState<Filter>("all");
  const [lightbox, setLightbox] = useState<{ src: string; title: string } | null>(null);

  const filtered =
    active === "all" ? credentials : credentials.filter((c) => c.type === active);

  const counts = credentials.reduce<Record<Filter, number>>(
    (acc, c) => {
      acc.all += 1;
      acc[c.type] = (acc[c.type] ?? 0) + 1;
      return acc;
    },
    { all: 0, certificate: 0, scholarship: 0, course: 0, award: 0, recommendation: 0 },
  );

  return (
    <>
      <section id="credentials" className="border-b border-white/[0.06] py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Credentials"
            title="Certificates & Achievements"
            subtitle="A collection of completed courses, earned certificates, scholarships, and awards."
          />

          {/* Filter bar */}
          <ScrollReveal className="mb-8">
            <div className="flex flex-wrap gap-2">
              {FILTERS.map(({ value, label }) => {
                const count = counts[value] ?? 0;
                if (value !== "all" && count === 0) return null;
                const isActive = active === value;
                return (
                  <button
                    key={value}
                    type="button"
                    onClick={() => setActive(value)}
                    className={`relative inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? "border-violet-500/40 bg-violet-500/15 text-violet-200 shadow-[0_0_24px_-8px_rgba(139,92,246,0.5)]"
                        : "border-white/[0.08] bg-white/[0.03] text-zinc-400 hover:border-white/[0.14] hover:text-zinc-200"
                    }`}
                  >
                    {label}
                    <span
                      className={`rounded-full px-1.5 py-0.5 text-[10px] font-semibold tabular-nums ${
                        isActive
                          ? "bg-violet-500/25 text-violet-200"
                          : "bg-white/[0.06] text-zinc-500"
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </ScrollReveal>

          {/* Cards grid */}
          <motion.div layout className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filtered.map((item, i) => (
                <CredentialCard
                  key={item.id}
                  item={item}
                  index={i}
                  onImageOpen={(src, title) => setLightbox({ src, title })}
                />
              ))}
            </AnimatePresence>
          </motion.div>

          {filtered.length === 0 ? (
            <p className="mt-12 text-center text-sm text-zinc-500">
              No credentials in this category yet.
            </p>
          ) : null}
        </div>
      </section>

      {/* Lightbox portal */}
      {lightbox ? (
        <Lightbox
          src={lightbox.src}
          title={lightbox.title}
          onClose={() => setLightbox(null)}
        />
      ) : null}
    </>
  );
}
