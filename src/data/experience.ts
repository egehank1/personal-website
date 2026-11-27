export type ExperienceItem = {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  logo?: string;
  logoClass?: string;
  monogram?: string;
  period: string;
  summary: string;
  stack: string[];
};

export const experience: ExperienceItem[] = [
  {
    id: "0",
    role: "Co-Founder",
    company: "Koby",
    logo: "/brand/koby-wordmark.svg",
    logoClass: "h-8",
    period: "Oct 2026 - Present",
    summary:
      "Co-founded Koby, an AI startup that helps small and medium-sized businesses grow revenue. The platform analyses a business's website, Google presence and social media automatically, then turns the evidence into at most three concrete priorities, a social media preview and a customer-ready report. I build the AI side of the product: LLM integrations, the evidence-backed analysis pipeline and the cost and quality controls around it. We ship daily with an agent-driven workflow in which coding agents open pull requests that CI checks and a bot merges.",
    stack: ["AI Agents", "LLMs", "OpenAI API", "Next.js", "TypeScript", "Prisma", "PostgreSQL", "GitHub Actions"],
  },
  {
    id: "1",
    role: "Software Developer",
    company: "snacc-it",
    logo: "/logos/snacc-it-dark.svg",
    logoClass: "h-7",
    period: "Mar 2025 - Present",
    summary:
      "Contributing to Project ETHICA, a €6.2M EU-funded R&D initiative building a Digital Product Passport platform that uses LLMs and RAG to automate ESG compliance verification across global supply chains. Built and deployed end-to-end ServiceNow applications automating incident management, travel reimbursement, and illness reporting workflows. Also maintained and optimized the company enterprise website across production environments.",
    stack: ["ServiceNow", "JavaScript", "Workflow Automation", "Service Portal", "ITSM", "REST APIs"],
  },
  {
    id: "2",
    role: "Founder",
    company: "Hardstyle Wear",
    logo: "https://www.hardstylewear.com/wp-content/uploads/2022/12/Yeni-Proje-3-1.png",
    logoClass: "h-12 brightness-0 invert",
    companyUrl: "https://www.hardstylewear.com",
    period: "Feb 2023 - Jun 2024",
    summary:
      "Ran paid ad campaigns on TikTok and Instagram that drove 52,000+ website visits within 24 hours. Co-founded the brand from scratch, generating €4,400+ in revenue and shipping 330+ orders to 15+ countries. Tracked conversion funnels and iterated on landing pages using Google Analytics and Sprout Social.",
    stack: ["Shopify", "E-Commerce", "Google Analytics", "Meta Pixel", "SEO", "Branding"],
  },
  {
    id: "3",
    role: "Quantitative Developer",
    company: "Aachen Investment Club e.V.",
    logo: "https://avatars.githubusercontent.com/u/191549492?v=4&s=128",
    logoClass: "h-10 rounded-md invert",
    period: "Mar 2025 - Aug 2025",
    summary:
      "Engineered Python-based algorithmic trading systems with live price streaming, multi-threading, and automated order execution. Developed and validated quantitative strategies against 6+ years of historical market data using custom backtesting frameworks. Built data aggregation tools with Pandas, web scraping, and third-party APIs to feed signal generation.",
    stack: ["Python", "Algorithmic Trading", "Pandas", "Backtesting", "Data Analysis", "APIs"],
  },
  {
    id: "4",
    role: "Computer Science Tutor",
    company: "FH Aachen University of Applied Sciences",
    logo: "https://upload.wikimedia.org/wikipedia/commons/b/b9/FHAachen-logo.svg",
    logoClass: "h-10",
    period: "Aug 2024 - Feb 2025",
    summary:
      "Tutored 200+ students in Fundamentals of Computer Science and Advanced Programming Languages across 6 months, covering C++, algorithms, data structures, and memory management. Ran coding labs and guided students through assignments, with a focus on making hard topics click through worked examples.",
    stack: ["C++", "Algorithms", "Data Structures", "Teaching"],
  },
  {
    id: "5",
    role: "Marketing Manager",
    company: "AcIAS e. V.",
    monogram: "AcIAS",
    period: "Apr 2024 - Feb 2025",
    summary:
      "Grew the association's Instagram to 2500+ followers, publishing 200+ stories, 35+ posts, and 5 reels over 11 months. Promoted from Social Media Manager to Marketing Manager within 7 months, taking on full content strategy and campaign ownership across all digital channels.",
    stack: ["Instagram", "Digital Marketing", "Content Strategy", "Social Media"],
  },
  {
    id: "6",
    role: "Graphic Designer",
    company: "Fiverr (Freelance)",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/18/Fiverr_Logo_09.2020.svg",
    logoClass: "h-7 brightness-0 invert",
    period: "Apr 2020 - Jun 2023",
    summary:
      "Maintained a 4.9-star rating across 85+ completed orders over 3 years on the platform. Designed logos and brand identities for 45+ personal brands and small businesses. Delivered 120+ social media graphics including headers, posts, and promotional banners.",
    stack: ["Adobe Photoshop", "Logo Design", "Branding", "Canva", "Social Media Design"],
  },
  {
    id: "7",
    role: "Co-Founder",
    company: "Upstreak Media",
    monogram: "UM",
    period: "2019 - 2020",
    summary:
      "Co-founded a Social Media Marketing Agency (SMMA) producing short-form content across social platforms. Grew client accounts with Instagram Reels that hit 3,000,000+ views and 25,000+ likes, and generated €2,000+ through TikTok content. Handled design across motivational, wellness, and construction niches.",
    stack: ["Instagram Reels", "TikTok", "Content Creation", "Social Media Marketing"],
  },
];
