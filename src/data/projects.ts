export type Project = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  highlights: string[];
  tech: string[];
  github?: string;
  live?: string;
  year: string;
};

export const projects: Project[] = [
  {
    slug: "neural-ops-copilot",
    title: "Neural Ops Copilot",
    tagline: "Agentic SRE assistant with guarded tool use.",
    description:
      "A retrieval-grounded operations copilot that proposes remediations, drafts runbooks, and executes approved playbooks behind policy gates.",
    highlights: [
      "Latency-budgeted RAG with freshness checks",
      "Human-in-the-loop approvals for destructive tools",
      "Structured telemetry for eval loops",
    ],
    tech: ["Next.js", "Python", "OpenAI", "Postgres", "Temporal"],
    github: "https://github.com",
    live: "https://vercel.com",
    year: "2025",
  },
  {
    slug: "latent-design-studio",
    title: "Latent Design Studio",
    tagline: "Generative UI for rapid product iteration.",
    description:
      "A canvas-first environment where teams sketch flows, attach constraints, and ship interactive previews synced to a design system.",
    highlights: [
      "Constraint-aware layout synthesis",
      "Token-safe component graph",
      "Realtime collaboration",
    ],
    tech: ["React", "WebGPU", "Rust", "Tailwind", "Framer Motion"],
    github: "https://github.com",
    live: "https://vercel.com",
    year: "2024",
  },
  {
    slug: "signalforge-eval",
    title: "SignalForge Eval",
    tagline: "Evaluation harness for multimodal models.",
    description:
      "Benchmarking suite for vision-language tasks with regression detection, golden sets, and diffable reports for stakeholders.",
    highlights: [
      "Deterministic replay for flaky tests",
      "Statistical drift alerts",
      "Exportable audit trails",
    ],
    tech: ["TypeScript", "PyTorch", "Ray", "S3", "Datadog"],
    github: "https://github.com",
    year: "2024",
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
