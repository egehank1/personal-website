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
      "The learning curve isn't the language. It's knowing which API to reach for and when, and accepting that the platform has opinions.",
    date: "2026-03-08",
    readTime: "4 min",
    content: [
      "ServiceNow scripting is regular JavaScript with a decade of platform-specific APIs bolted on top. GlideRecord for database queries, GlideAjax for async calls, catalog client scripts that only run on specific form states. The learning curve isn't the language. It's knowing which API to reach for and when.",
      "The travel reimbursement workflow I built had six approval states and three notification templates. Every time I thought I had the state machine right, a tester found a path I hadn't handled. I started drawing the flow on paper before touching the script editor. That alone cut the back-and-forth in half.",
      "Service Portal development is its own thing. AngularJS 1.x, widgets that mix HTML, CSS, client script, and server script in four separate fields per widget. Nothing about it is intuitive, but once you understand that the server script runs first and the client script hydrates against it, the mental model clicks.",
      "The Digital Product Passport work for ETHICA was different. Less automation, more data integrity across the product lifecycle. Audit trails, field-level validation, making sure compliance data doesn't drift silently between systems. The technical side wasn't complex. Getting the domain model right was the whole job.",
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}
