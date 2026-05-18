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
      "Ingests academic PDFs into a pgvector knowledge base and answers questions from semantically retrieved, source-cited context so the model stays grounded at retrieval time.",
    highlights: [
      "Sentence-aware chunking with configurable overlap preserves context at boundaries",
      "pgvector cosine similarity + IVFFlat indexing for sub-100 ms semantic retrieval",
      "RAG prompt enforces grounded responses: cite a passage or say you cannot answer",
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
          body: "DeepScholar is a research assistant that ingests academic PDFs and exposes them as a semantic knowledge base. Users ask questions and get answers tied to real passages, with inline citations they can expand. Ingestion and retrieval are separate services, so each stage is easy to test and scale on its own.",
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
          body: "FastAPI runs a multi-stage ingest: PyMuPDF pulls text, a sentence-aware chunker splits it with configurable overlap, and OpenAI embeddings land in PostgreSQL with pgvector on Supabase. At query time, cosine search over those vectors builds a prompt that only allows answers from retrieved chunks, with structured JSON citations on every claim.",
          items: [
            "Structured extraction pipeline: after parse, an LLM step fills a validated JSON schema per paper (title, authors, abstract, methodology, datasets, metrics, limitations) before chunking and embedding. Bad payloads fail at the service boundary and retry with a smaller context window. Extraction runs as its own service, separate from chunking and embedding.",
            "Global state layer: React Context backed by localStorage rehydration. FileResult[] persists across route changes and hard refreshes. addDocuments deduplicates by filename; removeDocument and clearDocuments provide full store control.",
          ],
        },
        {
          heading: "Technical Highlights",
          items: [
            "Magic-byte validation rejects non-PDF payloads before any processing begins",
            "Sentence-aware chunking with configurable overlap preserves cross-boundary context",
            "RAG prompt contract: model must cite retrieved passages or explicitly decline. No fabrication.",
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
            "Per-file upload progress via XHR onprogress, keyed by filename in a reducer map (not one blended percentage)",
            "Indexed Library table reads from global context, not the last upload response, so it survives remounts and route changes",
            "Status badges follow the FileResult enum: pending, extracting, chunking, indexed, failed. Failures show error_message inline",
            "chunks_stored and pages_extracted rendered as secondary metadata per document card",
            "Chat interface streams answers with inline expandable citation cards",
            "Each citation surfaces the source passage and document origin",
            "Research Insights Panel: expandable cards per extraction field (methodology, datasets, metrics, limitations), mounted inline in upload results and on a dedicated document detail page. Collapsed by default; expand state tracked per card per document. Missing fields render a degraded state cell, not an empty render",
            "Paper comparison at /compare: pick papers from the global store, columns per doc, rows for methodology, datasets, metrics, and limitations. Renders from stored extraction JSON only; no LLM on page load and no new API routes",
            "Single-workspace UI optimized for focused, distraction-free research sessions",
          ],
        },
        {
          heading: "Roadmap",
          body: "Next phase work is split into six shippable slices. None of them need changes to the ingest schema:",
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
