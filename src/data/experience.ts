export type ExperienceItem = {
  id: string;
  role: string;
  company: string;
  period: string;
  summary: string;
  stack: string[];
};

export const experience: ExperienceItem[] = [
  {
    id: "1",
    role: "Staff AI Engineer",
    company: "Northwind Labs",
    period: "2023 — Present",
    summary:
      "Leading agent platforms, safety reviews, and inference cost programs across product and infra.",
    stack: ["Agents", "Evals", "Kubernetes", "Go"],
  },
  {
    id: "2",
    role: "Senior Software Engineer",
    company: "Lumen Foundry",
    period: "2020 — 2023",
    summary:
      "Built data-intensive services, ML feature stores, and customer-facing analytics with strict SLOs.",
    stack: ["Python", "Spark", "React", "GCP"],
  },
  {
    id: "3",
    role: "Product Engineer",
    company: "Arc Studio",
    period: "2017 — 2020",
    summary:
      "Shipped design systems and growth experiments for a collaborative creative suite used by global teams.",
    stack: ["TypeScript", "GraphQL", "Design Systems"],
  },
];
