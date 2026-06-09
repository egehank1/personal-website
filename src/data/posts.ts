export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  content: string[];
};

export const posts: Post[] = [
  {
    slug: "rag-production-reality",
    title: "What nobody tells you about RAG in production",
    excerpt:
      "I spent two days tuning chunk sizes. None of it mattered as much as one prompt constraint I added at the end.",
    date: "2026-05-20",
    readTime: "5 min",
    content: [
      "I spent two days tuning chunk sizes and overlap percentages for DeepScholar. Sentence boundaries, 256 tokens, 512 tokens. The WCSS curve eventually flattened. None of that mattered as much as one line I added at the end of the RAG prompt: 'If you cannot cite a retrieved passage, say so. Do not invent references.' That constraint cut hallucinated citations to near zero.",
      "PDFs are a disaster. PyMuPDF is solid, but academic papers with two-column layouts, footnotes baked into the margin, and scanned pages encoded as image objects will break any extraction pipeline eventually. I kept a folder of known-bad PDFs to test against after every pipeline change. That folder grew faster than I expected.",
      "The cost model surprised me. Embedding a 30-page paper during ingestion is cheap. Per-query retrieval costs add up fast if you're not caching. I added a simple hash-based query cache for repeated questions and the API bill dropped noticeably within a week.",
      "The hardest part was not the retrieval. It was convincing myself the answers were actually grounded. I wrote a spot-check script that pulled 20 random QA pairs and verified citations manually. That loop taught me more about the system's failure modes than any automated metric ever did.",
    ],
  },
  {
    slug: "servicenow-scripting-lessons",
    title: "ServiceNow: enterprise JavaScript with a memory",
    excerpt:
      "The learning curve isn't the language. It's knowing which API to reach for and when — and accepting that the platform has opinions.",
    date: "2026-03-08",
    readTime: "4 min",
    content: [
      "ServiceNow scripting is regular JavaScript with a decade of platform-specific APIs bolted on top. GlideRecord for database queries, GlideAjax for async calls, catalog client scripts that only run on specific form states. The learning curve isn't the language — it's knowing which API to reach for and when.",
      "The travel reimbursement workflow I built had six approval states and three notification templates. Every time I thought I had the state machine right, a tester found a path I hadn't handled. I started drawing the flow on paper before touching the script editor. That alone cut the back-and-forth in half.",
      "Service Portal development is its own thing. AngularJS 1.x, widgets that mix HTML, CSS, client script, and server script in four separate fields per widget. Nothing about it is intuitive, but once you understand that the server script runs first and the client script hydrates against it, the mental model clicks.",
      "The Digital Product Passport work for ETHICA was different — less automation, more data integrity across the product lifecycle. Audit trails, field-level validation, making sure compliance data doesn't drift silently between systems. The technical side wasn't complex. Getting the domain model right was the whole job.",
    ],
  },
  {
    slug: "data-pipeline-reality",
    title: "The pipeline always takes longer than the model",
    excerpt:
      "I spent more time cleaning data for the trading bot than writing any signal logic. That pattern has not changed.",
    date: "2025-12-10",
    readTime: "4 min",
    content: [
      "I spent more time cleaning data for the trading bot than writing any signal logic. Survivorship bias in historical price data. Splits that weren't adjusted. Gaps during market holidays that looked like crashes in the charts. The model was never the hard part.",
      "Same story with the RFM segmentation project. The dataset had negative quantities from returns, missing customer IDs on about 8% of records, and a handful of obviously wrong unit prices — £0.001 for items that should cost £12. Before any clustering, I was just auditing rows for two days.",
      "I've started treating data cleaning as a first-class step with its own acceptance criteria. Before feature engineering begins, I write out what 'clean' means for that specific dataset: no nulls in these columns, these ranges are valid, duplicates are defined this way. It sounds obvious. I wish I'd done it from day one on every project.",
      "The Elbow Method for K selection always looks cleaner in tutorials than in real data. My WCSS curve had two plausible elbows. I ran Silhouette Score alongside it and they agreed on k=4, which was reassuring. But I kept k=3 and k=5 versions around for a few days and compared the business interpretation of each before committing. The algorithm gives you a number. You still have to decide if the segments mean something.",
    ],
  },
  {
    slug: "shipping-with-model-uncertainty",
    title: "Shipping with model uncertainty",
    excerpt:
      "How to structure releases when outputs are non-deterministic and stakeholders still need guarantees.",
    date: "2026-04-12",
    readTime: "6 min",
    content: [
      "Treat model behavior like any other distributed system: define SLOs for latency, cost, and quality, not just accuracy on a static benchmark.",
      "Version prompts, tools, and retrieval corpora together. A silent drift in any one layer can look like “the model got worse” when the root cause is elsewhere.",
      "Invest in shadow traffic and canaries. Rolling out to 1% of users with automatic rollback on guardrail violations has saved more launches than any offline metric.",
      "Finally, document failure modes in plain language. The best AI products explain what the system will not do as clearly as what it will.",
    ],
  },
  {
    slug: "designing-for-attention-budgets",
    title: "Designing for attention budgets",
    excerpt:
      "Minimal interfaces for dense information, with patterns that keep operators in flow during incidents.",
    date: "2026-02-02",
    readTime: "4 min",
    content: [
      "Operators skim; they do not read. Hierarchy beats decoration. Use motion sparingly to signal state changes, not to entertain.",
      "Glass panels and gradients can be beautiful, but contrast and legibility are non-negotiable. Test in bright rooms and on low-end displays.",
      "Progressive disclosure keeps advanced actions reachable without crowding the default path. Keyboard shortcuts and command palettes pay dividends.",
    ],
  },
  {
    slug: "evals-are-a-product-surface",
    title: "Evals are a product surface",
    excerpt:
      "Why evaluation dashboards belong next to feature work, not buried in a research folder.",
    date: "2025-11-18",
    readTime: "5 min",
    content: [
      "If evals are not visible to PMs and designers, they will not influence roadmap tradeoffs. Make regressions legible with human-readable diffs.",
      "Golden sets rot. Schedule freshness reviews and automate alerts when distributions shift in production telemetry.",
      "Pair quantitative metrics with qualitative spot checks. The fastest way to lose trust is optimizing a metric nobody experiences as quality.",
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}
