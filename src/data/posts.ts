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
    slug: "shipping-with-model-uncertainty",
    title: "Shipping with model uncertainty",
    excerpt:
      "How to structure releases when outputs are non-deterministic and stakeholders still need guarantees.",
    date: "2026-04-12",
    readTime: "6 min",
    content: [
      "Treat model behavior like any other distributed system: define SLOs for latency, cost, and quality—not just accuracy on a static benchmark.",
      "Version prompts, tools, and retrieval corpora together. A silent drift in any one layer can look like “the model got worse” when the root cause is elsewhere.",
      "Invest in shadow traffic and canaries. Rolling out to 1% of users with automatic rollback on guardrail violations has saved more launches than any offline metric.",
      "Finally, document failure modes in plain language. The best AI products explain what the system will not do as clearly as what it will.",
    ],
  },
  {
    slug: "designing-for-attention-budgets",
    title: "Designing for attention budgets",
    excerpt:
      "Minimal interfaces for dense information—patterns that keep operators in flow during incidents.",
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
      "Why evaluation dashboards belong next to feature work—not buried in a research folder.",
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
