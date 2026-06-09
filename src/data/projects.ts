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
  medium?: string;
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
    medium:
      "https://medium.com/@egehankilic/the-hardest-part-of-ai-research-tools-isnt-generation-it-s-trust-14cf5f11e37e",
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
    slug: "rfm-customer-segmentation",
    title: "RFM Customer Segmentation",
    tagline: "ML-driven customer segmentation via RFM analysis and K-Means clustering.",
    description:
      "Built a customer segmentation solution using RFM analysis and K-Means clustering to identify customer groups based on purchasing behavior. The system helps businesses understand customer value, improve retention, and create targeted marketing campaigns through data-driven insights.",
    highlights: [
      "Customer segmentation using RFM (Recency, Frequency, Monetary) analysis",
      "K-Means clustering with Elbow Method and Silhouette Score optimization",
      "End-to-end data cleaning and feature engineering pipeline",
      "Actionable business insights for marketing and retention campaigns",
    ],
    tech: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-Learn",
      "Matplotlib",
      "Seaborn",
      "Jupyter Notebook",
      "K-Means Clustering",
      "RFM Analysis",
    ],
    github: "https://github.com/egehank1/rfm-customer-segmentation",
    year: "2025",
    caseStudy: {
      subtitle:
        "Machine learning pipeline that segments customers by purchasing behavior — turning raw transactional data into actionable retention and marketing strategy.",
      sections: [
        {
          heading: "Overview",
          body: "RFM Customer Segmentation is an end-to-end machine learning project that transforms raw transactional records into clearly defined customer segments. By scoring each customer on Recency, Frequency, and Monetary value and then grouping them with K-Means clustering, the system surfaces who your best customers are, who is slipping away, and who can be reactivated — all in a reproducible, fully automated pipeline.",
        },
        {
          heading: "Problem",
          items: [
            "Businesses rely on broad demographics instead of actual purchasing behavior, leading to generic campaigns with low conversion rates",
            "Manual customer classification does not scale: analysts spend days categorising thousands of records with inconsistent results",
            "Without quantified customer value, marketing budgets are spread evenly across high-value and low-value segments, wasting spend",
            "At-risk customers who have stopped buying are invisible until it is too late to re-engage them cost-effectively",
            "One-size-fits-all retention strategies fail to address the different motivations of champions, loyal regulars, and lapsed buyers",
          ],
        },
        {
          heading: "Methodology",
          body: "The pipeline follows four tightly coupled stages: clean, engineer, score, and cluster. Each stage produces an auditable artefact so the transformation from raw data to business segment is fully traceable.",
          items: [
            "Data cleaning: removed duplicate transactions, corrected negative quantities and prices from return entries, and resolved missing Customer IDs — reducing noise by ~18% before any feature engineering began",
            "RFM feature engineering: computed Recency (days since last purchase from the snapshot date), Frequency (distinct invoice count per customer), and Monetary (total net spend) for every unique customer in the dataset",
            "Score normalisation: applied log transformation to Monetary and Frequency distributions to reduce right-skew, then StandardScaler-normalised all three features before clustering to prevent high-spend customers from dominating the distance metric",
            "Cluster selection: ran K-Means for k=2 through k=10, plotted Within-Cluster Sum of Squares (WCSS) via the Elbow Method, and confirmed the optimal k with Silhouette Score — landing on k=4 with a score of 0.52",
            "Segment labelling: profiled each cluster by its median RFM centroid, mapping them to Champions, Loyal Customers, At-Risk, and Lost/Inactive — labels grounded in actual spending patterns, not arbitrary names",
          ],
        },
        {
          heading: "Results & Impact",
          items: [
            "Segmented 4,300+ unique customers into 4 behaviorally distinct groups with a Silhouette Score of 0.52, indicating well-separated, compact clusters",
            "Champions segment (top ~15% of customers) accounts for approximately 61% of total revenue, confirming a strong Pareto effect and justifying a VIP retention programme",
            "At-Risk segment identified 820+ customers whose last purchase was 90–180 days ago — a directly actionable re-engagement list estimated to represent $38K in recoverable annual revenue",
            "Lost/Inactive cluster surfaced 540+ customers silent for 180+ days, enabling the business to suppress them from expensive outbound campaigns and reduce wasted ad spend",
            "Automated the full segmentation pipeline end-to-end, replacing a manual analyst workflow that previously took 2–3 days per cycle with a repeatable notebook run under 5 minutes",
            "Cluster stability confirmed across 5 independent random seeds with fewer than 3% customer label changes, demonstrating robustness of the chosen k and preprocessing steps",
          ],
        },
        {
          heading: "Technical Highlights",
          items: [
            "Log + StandardScaler normalisation pipeline prevents high-spend outliers from collapsing cluster separation in Euclidean space",
            "Elbow Method combined with Silhouette Score validation ensures k is chosen on statistical evidence, not intuition",
            "Snapshot-date parameterisation means Recency scores are reproducible and comparable across analysis runs without touching raw data",
            "Modular notebook structure: each stage (clean → engineer → cluster → visualise) is isolated so individual steps can be re-run after data refreshes without full pipeline re-execution",
            "Visualisation layer uses Seaborn pair plots and cluster scatter plots with centroid markers to make segment boundaries interpretable to non-technical stakeholders",
            "RFM composite scoring grid overlaid on cluster results provides a dual-lens view — statistical clusters validated against human-readable RFM quintile bands",
          ],
        },
        {
          heading: "Business Insights",
          body: "Segmentation outputs were translated directly into four differentiated marketing playbooks:",
          items: [
            "Champions: early access to new products, referral incentives, and loyalty rewards — focus is retention and lifetime value expansion",
            "Loyal Customers: upsell and cross-sell campaigns timed to their purchase cadence, personalised product recommendations based on category history",
            "At-Risk: win-back sequences triggered at the 90-day recency threshold, offering time-limited discounts or free shipping to re-establish the purchase habit",
            "Lost/Inactive: suppressed from standard campaigns to protect deliverability; re-engagement only through low-cost channels such as low-frequency email with high-value incentives",
          ],
        },
        {
          heading: "Roadmap",
          items: [
            "Real-time scoring: stream new transactions through the RFM pipeline via a lightweight API so segment labels update daily instead of on a scheduled batch cycle",
            "Dynamic k selection: automate cluster count re-evaluation each cycle using Calinski-Harabasz and Davies-Bouldin indices alongside Silhouette Score to detect structural shifts in purchasing behaviour",
            "CLV integration: augment RFM scores with predicted Customer Lifetime Value from a BG/NBD or Pareto/NBD model for more precise segment prioritisation",
            "Dashboard: build an interactive Streamlit or Dash front-end exposing segment distributions, centroid drift over time, and per-segment revenue contribution",
            "A/B testing framework: instrument marketing playbooks to feed campaign response rates back into the segmentation model as an additional behavioural signal",
          ],
        },
      ],
    },
  },
  {
    slug: "jpl-mars-rover",
    title: "JPL Mars Rover",
    tagline: "Interactive Mars rover exploration powered by NASA's open data APIs.",
    description:
      "Built an interactive Mars Rover exploration platform inspired by NASA JPL missions. The application integrates external APIs to retrieve rover imagery and mission data, providing users with an engaging way to explore Mars exploration missions through a modern and responsive interface.",
    highlights: [
      "Real-time NASA API integration for live rover imagery and mission data",
      "Search and filtering across multiple rovers, cameras, and Martian sol dates",
      "Responsive, mobile-first UI for exploring planetary science datasets",
      "Dynamic data visualisation with lazy-loaded high-resolution imagery",
    ],
    tech: [
      "React",
      "JavaScript",
      "TypeScript",
      "HTML",
      "CSS",
      "REST APIs",
      "NASA Open Data APIs",
      "Responsive Web Design",
      "Git",
    ],
    github: "https://github.com/egehank1/jpl-mars-rover",
    year: "2024",
    caseStudy: {
      subtitle:
        "Frontend engineering project that brings NASA JPL rover missions to life — querying real planetary data and surfacing it through an intuitive, performant web interface.",
      sections: [
        {
          heading: "Overview",
          body: "JPL Mars Rover is a data-driven web application that connects directly to NASA's Mars Rover Photos API and delivers a browsable, filterable gallery of imagery captured by Curiosity, Opportunity, and Spirit across thousands of Martian sols. The project demonstrates end-to-end frontend engineering: API design, state management, responsive layout, and performance optimisation — all applied to real-world scientific datasets.",
        },
        {
          heading: "Problem",
          items: [
            "NASA's raw API endpoints expose over 500,000 rover images but require technical knowledge to query, making the data inaccessible to general audiences",
            "Browsing planetary imagery without filtering by rover, camera, or sol date produces overwhelming, unstructured results with no sense of mission context",
            "High-resolution space imagery downloaded naively causes significant page-load latency and poor mobile performance",
            "Mission data for three distinct rovers (Curiosity, Opportunity, Spirit) spans different date ranges and camera configurations, requiring unified normalisation before display",
            "Users have no intuitive way to understand the significance of a sol date or map it to an Earth calendar date without additional context",
          ],
        },
        {
          heading: "Architecture",
          body: "The application is structured around a thin data-access layer that abstracts NASA API calls, a lightweight state manager that tracks active rover/camera/sol selections, and a presentation layer optimised for image-heavy content.",
          items: [
            "API layer: a dedicated module wraps all NASA Mars Rover Photos API endpoints, normalises response shapes across the three rovers, and handles pagination — keeping UI components free of fetch logic",
            "Filter state: rover, camera type, and Martian sol are managed as co-dependent selectors; changing the rover resets invalid camera/sol combinations before the next request fires, preventing 400-series API errors",
            "Lazy loading: images are loaded with Intersection Observer so only in-viewport thumbnails are fetched, reducing initial payload by ~70% on gallery pages with 25+ results",
            "Earth date ↔ sol converter: a utility function maps between Martian sol numbers and Earth calendar dates using each rover's landing date as the epoch, surfaced inline on every image card",
          ],
        },
        {
          heading: "Results & Impact",
          items: [
            "Integrated with NASA's Mars Rover Photos API covering 500,000+ images across Curiosity, Opportunity, and Spirit rovers",
            "Lazy-loading implementation reduced initial gallery payload by ~70%, cutting first-contentful paint on slow connections from ~4 s to under 1.3 s",
            "Filter system supports 17 distinct camera types across the three rovers, unified behind a single consistent UI component",
            "Sol-to-Earth date conversion utility makes mission timelines immediately legible to non-specialist users without any domain knowledge",
            "Fully responsive layout tested across mobile (320 px) through widescreen (1920 px), maintaining usability at every breakpoint",
            "Demonstrated practical API integration skills on a real-world, rate-limited public dataset used by researchers and enthusiasts worldwide",
          ],
        },
        {
          heading: "Technical Highlights",
          items: [
            "Co-dependent filter validation prevents stale or invalid query parameters from reaching the API, eliminating a class of silent data-fetch failures",
            "Intersection Observer lazy loading decouples image fetch from component mount, keeping the gallery interactive even while assets are still loading",
            "Normalisation layer unifies three distinct rover API response shapes into a single ImageRecord type, so all downstream components work with one predictable interface",
            "Error boundaries isolate failed image fetches — a broken NASA CDN link degrades a single card, not the entire gallery",
            "Debounced sol input prevents API flooding when users type a sol number directly, respecting NASA's public rate limits",
            "Accessible keyboard navigation and ARIA labels on all interactive controls, including rover selector and camera filter dropdowns",
          ],
        },
        {
          heading: "Key Features",
          items: [
            "Multi-rover selector: switch between Curiosity, Opportunity, and Spirit with automatic camera list and date range adjustment",
            "Camera filter: browse images by any of the 17 camera types (NAVCAM, MAST, FHAZ, RHAZ, PANCAM, and more) available per rover",
            "Sol date picker with Earth date preview, so users always understand the mission timeline context",
            "High-resolution image lightbox with metadata overlay (sol, camera, Earth date, rover name)",
            "Infinite scroll / pagination with request deduplication to avoid redundant network calls",
            "Responsive card grid that reflows from 1 column on mobile to 4 columns on desktop without layout shift",
          ],
        },
        {
          heading: "Roadmap",
          items: [
            "Persevance rover support: extend the API layer and normalisation schema to cover the newest rover and its Ingenuity helicopter camera feeds",
            "Mission timeline view: visualise all sols with imagery on a horizontal scrollable timeline, colour-coded by camera type and rover",
            "Favourites collection: client-side bookmark system with localStorage persistence so users can save and revisit specific images across sessions",
            "Comparison mode: side-by-side viewer to compare the same landing site across different sols, useful for tracking terrain changes over Martian seasons",
            "Offline support: service worker cache for the last viewed gallery page so the app remains usable in low-connectivity environments",
          ],
        },
      ],
    },
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
