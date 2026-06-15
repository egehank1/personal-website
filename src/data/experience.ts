export type ExperienceItem = {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  period: string;
  summary: string;
  stack: string[];
};

export const experience: ExperienceItem[] = [
  {
    id: "1",
    role: "Software Developer",
    company: "snacc-it",
    period: "Mar 2025 - Present",
    summary:
      "Contributing to Project ETHICA, a €6.2M EU-funded R&D initiative building a Digital Product Passport platform that uses LLMs and RAG to automate ESG compliance verification across global supply chains. Built and deployed end-to-end ServiceNow applications automating incident management, travel reimbursement, and illness reporting workflows. Also maintained and optimized the company enterprise website across production environments.",
    stack: ["ServiceNow", "JavaScript", "Workflow Automation", "Service Portal", "ITSM", "REST APIs"],
  },
  {
    id: "2",
    role: "Founder",
    company: "Hardstyle Wear",
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
    period: "Mar 2025 - Aug 2025",
    summary:
      "Engineered Python-based algorithmic trading systems with live price streaming, multi-threading, and automated order execution. Developed and validated quantitative strategies against 6+ years of historical market data using custom backtesting frameworks. Built data aggregation tools with Pandas, web scraping, and third-party APIs to feed signal generation.",
    stack: ["Python", "Algorithmic Trading", "Pandas", "Backtesting", "Data Analysis", "APIs"],
  },
  {
    id: "4",
    role: "Computer Science Tutor",
    company: "FH Aachen University of Applied Sciences",
    period: "Aug 2024 - Feb 2025",
    summary:
      "Tutored 200+ students in Fundamentals of Computer Science and Advanced Programming Languages across 6 months, covering C++, algorithms, data structures, and memory management. Ran coding labs and guided students through assignments, with a focus on making hard topics click through worked examples.",
    stack: ["C++", "Algorithms", "Data Structures", "Teaching"],
  },
  {
    id: "5",
    role: "Marketing Manager",
    company: "AcIAS e. V.",
    period: "Apr 2024 - Feb 2025",
    summary:
      "Grew the association's Instagram to 2500+ followers, publishing 200+ stories, 35+ posts, and 5 reels over 11 months. Promoted from Social Media Manager to Marketing Manager within 7 months, taking on full content strategy and campaign ownership across all digital channels.",
    stack: ["Instagram", "Digital Marketing", "Content Strategy", "Social Media"],
  },
  {
    id: "6",
    role: "Graphic Designer",
    company: "Fiverr (Freelance)",
    period: "Apr 2020 - Jun 2023",
    summary:
      "Maintained a 4.9-star rating across 85+ completed orders over 3 years on the platform. Designed logos and brand identities for 45+ personal brands and small businesses. Delivered 120+ social media graphics including headers, posts, and promotional banners.",
    stack: ["Adobe Photoshop", "Logo Design", "Branding", "Canva", "Social Media Design"],
  },
  {
    id: "7",
    role: "Co-Founder",
    company: "Upstreak Media",
    period: "2019 - 2020",
    summary:
      "Co-founded a Social Media Marketing Agency (SMMA) producing short-form content across social platforms. Grew client accounts with Instagram Reels that hit 3,000,000+ views and 25,000+ likes, and generated €2,000+ through TikTok content. Handled design across motivational, wellness, and construction niches.",
    stack: ["Instagram Reels", "TikTok", "Content Creation", "Social Media Marketing"],
  },
];
