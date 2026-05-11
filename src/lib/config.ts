export const site = {
  name: "Alex Rivera",
  title: "AI Engineer & Product Builder",
  description:
    "Portfolio of an AI-forward engineer shipping production systems, agents, and interfaces with clarity and craft.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  email: "hello@example.com",
  social: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    x: "https://x.com",
  },
} as const;
