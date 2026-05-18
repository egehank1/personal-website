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
      "React Context API",
      "localStorage",
      "XHR Streams",
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
          items: [
            "Structured extraction pipeline: post-parse LLM-assisted extraction step produces a validated JSON schema per document—title, authors, abstract, methodology, datasets, metrics, limitations—before chunking and embedding. Schema is enforced at the service boundary; malformed extractions trigger a retry with a narrowed context window. Extraction logic is decoupled from the chunking and embedding pipeline as an independent service.",
            "Global state layer: React Context backed by localStorage rehydration. FileResult[] persists across route changes and hard refreshes. addDocuments deduplicates by filename; removeDocument and clearDocuments provide full store control.",
          ],
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
            "LLM-assisted structured extraction enforces a typed JSON schema per document; field-level partial failure does not invalidate full document extraction",
          ],
        },
        {
          heading: "Frontend",
          items: [
            "Drag-and-drop PDF upload with live ingestion progress feedback",
            "Per-file upload progress via XHR onprogress events tracked per filename key in a reducer map—not a single scalar average",
            "Persistent Indexed Library table driven by global context state, not last-batch response—survives remounts and navigation",
            "Parsing status badges derived from FileResult status enum: pending, extracting, chunking, indexed, failed—failed state surfaces error_message inline",
            "chunks_stored and pages_extracted rendered as secondary metadata per document card",
            "Chat interface streams answers with inline expandable citation cards",
            "Each citation surfaces the source passage and document origin",
            "Research Insights Panel: expandable cards per extraction field (methodology, datasets, metrics, limitations), mounted inline in upload results and on a dedicated document detail page. Collapsed by default; expand state tracked per card per document. Missing fields render a degraded state cell, not an empty render",
            "Paper comparison workspace at /compare: multi-select over the global document store, side-by-side column layout per document, rows fixed to methodology, datasets, metrics, limitations. Data pulled from stored extraction payload—no LLM call at render time. Zero new backend endpoints",
            "Single-workspace UI optimized for focused, distraction-free research sessions",
          ],
        },
        {
          heading: "Roadmap",
          body: "Six independently shippable upgrades scoped for the next phase—none require ingestion schema changes:",
          items: [
            "Hybrid search: BM25 keyword index running in parallel with dense vector retrieval, merged via reciprocal rank fusion",
            "Reranking model re-scores the merged candidate set before context window construction",
            "Citation grounding: answer spans without a traceable retrieved chunk are rejected at the output layer",
            "Research Memory Layer: structured facts stored as a knowledge graph alongside chunk vectors, enabling cross-paper reasoning without re-retrieval",
            "Query Intelligence Layer: rewrite step decomposes abstract queries into concrete entity terms before hitting the index",
            "Paper Graph: methods, datasets, and tasks stored as typed nodes with edges defined by co-occurrence, rendered as an interactive force-directed layout",
            "Evaluation system: recall@k, citation correctness, and LLM-judge faithfulness scoring surfaced on an internal eval dashboard per pipeline version",
            "Research Assistant Behaviors: conflict detection across retrieved chunks, confidence scoring from retrieval score distribution, output schema extended with a reasoning trace",
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
