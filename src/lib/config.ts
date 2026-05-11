function resolveSiteUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (!raw) return "http://localhost:3000";
  try {
    return new URL(raw).href;
  } catch {
    try {
      return new URL(`https://${raw}`).href;
    } catch {
      return "http://localhost:3000";
    }
  }
}

export const site = {
  name: "Egehan Kilic",
  initials: "EK",
  title: "AI Engineer & Product Builder",
  description:
    "Portfolio of an AI-forward engineer shipping production systems, agents, and interfaces with clarity and craft.",
  url: resolveSiteUrl(),
  email: "hello@example.com",
  social: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    x: "https://x.com",
  },
} as const;
