export type CaseStudySection = {
  heading: string;
  body?: string;
  items?: string[];
};

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
  caseStudy?: {
    subtitle: string;
    sections: CaseStudySection[];
  };
};

export const projects: Project[] = [
  {
    slug: "deepscholar",
    title: "DeepScholar",
    tagline: "RAG-powered research copilot with grounded citations.",
    description:
      "Ingests academic PDFs into a pgvector knowledge base and answers questions with semantically retrieved, source-cited context—eliminating hallucination at the retrieval layer.",
    highlights: [
      "Sentence-aware chunking with configurable overlap preserves context at boundaries",
      "pgvector cosine similarity + IVFFlat indexing for sub-100 ms semantic retrieval",
      "RAG prompt enforces grounded responses—model cites or declines, never fabricates",
      "Structured JSON citation output with source, chunk ID, and passage fields",
    ],
    tech: [
      "Next.js 14",
      "TypeScript",
      "Tailwind CSS",
      "FastAPI",
      "Python",
      "OpenAI",
      "PostgreSQL",
      "pgvector",
      "Supabase",
      "PyMuPDF",
    ],
    github: "https://github.com/egehank1/deepscholar",
    year: "2026",
    caseStudy: {
      subtitle:
        "AI-powered RAG copilot that converts academic PDFs into a grounded, citable knowledge base.",
      sections: [
        {
          heading: "Overview",
          body: "DeepScholar is a research assistant that ingests academic PDFs and exposes them as a semantic knowledge base. Users submit questions and receive grounded answers backed by exact source passages—with inline, expandable citations. The architecture decouples ingestion from retrieval, keeping each stage independently testable and scalable.",
        },
        {
          heading: "Problem",
          items: [
            "Manual literature review is slow and hard to scale across dozens of papers",
            "Keyword search misses semantic relationships between concepts",
            "General-purpose LLMs hallucinate citations and fabricate references",
            "Outputs lack verifiable sourcing, making them unreliable for academic work",
          ],
        },
        {
          heading: "Architecture",
          body: "FastAPI handles PDF ingestion through a multi-stage pipeline: PyMuPDF extracts raw text, a sentence-aware chunker splits content with configurable overlap, and OpenAI's embedding API generates vector representations stored in PostgreSQL with pgvector on Supabase. At query time, the RAG pipeline performs cosine similarity search over indexed embeddings and constructs a prompt that instructs the model to answer strictly from retrieved context—emitting structured JSON citations for every claim.",
        },
        {
          heading: "Technical Highlights",
          items: [
            "Magic-byte validation rejects non-PDF payloads before any processing begins",
            "Sentence-aware chunking with configurable overlap preserves cross-boundary context",
            "RAG prompt contract: model must cite retrieved passages or explicitly decline—no fabrication",
            "Citations emitted as structured JSON: source filename, chunk_id, and verbatim passage",
            "pgvector cosine similarity search with IVFFlat indexing for sub-100 ms P99 retrieval",
            "Supabase schema designed for multi-document workspaces and per-user isolation",
            "Async ingestion pipeline keeps the API responsive under concurrent uploads",
            "Deterministic document fingerprinting prevents duplicate vector entries on re-upload",
          ],
        },
        {
          heading: "Frontend",
          items: [
            "Drag-and-drop PDF upload with live ingestion progress feedback",
            "Chat interface streams answers with inline expandable citation cards",
            "Each citation surfaces the source passage and document origin",
            "Single-workspace UI optimized for focused, distraction-free research sessions",
          ],
        },
      ],
    },
  },
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
