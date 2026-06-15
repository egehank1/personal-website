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
      "Contributed to Project ETHICA, a €6.2M EU-funded AI research initiative under CELTIC-NEXT / EUREKA. Built and deployed ServiceNow applications that automated internal workflows including incident management, travel reimbursement, and illness reporting. Also maintained and improved the company enterprise website across production environments.",
    stack: ["ServiceNow", "JavaScript", "Workflow Automation", "Service Portal", "ITSM", "REST APIs"],
  },
  {
    id: "2",
    role: "Founder",
    company: "Hardstyle Wear",
    companyUrl: "https://www.hardstylewear.com",
    period: "Feb 2023 - Jun 2024",
    summary:
      "Co-founded a fitness clothing e-commerce brand, generating €4,400+ in revenue and shipping 330+ orders to 15+ countries. Ran paid ad campaigns on TikTok and Instagram that drove 52,000+ website visits within 24 hours. Handled SEO and performance tracking using Google Analytics and Sprout Social.",
    stack: ["Shopify", "E-Commerce", "Google Analytics", "Meta Pixel", "SEO", "Branding"],
  },
  {
    id: "3",
    role: "Quantitative Developer",
    company: "Aachen Investment Club e.V.",
    period: "Mar 2025 - Aug 2025",
    summary:
      "Built Python-based algorithmic trading systems with live price streaming, multi-threading, and automated order execution. Developed and tested quantitative strategies using 6+ years of historical market data and custom backtesting frameworks. Also built data aggregation tools using Pandas, web scraping, and third-party APIs.",
    stack: ["Python", "Algorithmic Trading", "Pandas", "Backtesting", "Data Analysis", "APIs"],
  },
  {
    id: "4",
    role: "Computer Science Tutor",
    company: "FH Aachen University of Applied Sciences",
    period: "Aug 2024 - Feb 2025",
    summary:
      "Delivered tutoring sessions for Fundamentals of Computer Science and Advanced Programming Languages, covering C++, algorithms, data structures, and memory management. Helped students work through coding labs and assignments, breaking complex topics into clear, structured explanations.",
    stack: ["C++", "Algorithms", "Data Structures", "Teaching"],
  },
  {
    id: "5",
    role: "Marketing Manager",
    company: "AcIAS e. V.",
    period: "Apr 2024 - Feb 2025",
    summary:
      "Managed the association's Instagram and digital marketing, growing the account to 2500+ followers and publishing 200+ stories, 35+ posts, and 5 reels. Promoted from Social Media Manager to Marketing Manager within 7 months, taking on broader content strategy and campaign ownership.",
    stack: ["Instagram", "Digital Marketing", "Content Strategy", "Social Media"],
  },
  {
    id: "6",
    role: "Graphic Designer",
    company: "Fiverr (Freelance)",
    period: "Apr 2020 - Jun 2023",
    summary:
      "Completed 85+ client orders with a 4.9-star average rating across three years on the platform. Designed logos and brand visuals for 45+ personal brands and small businesses. Delivered 120+ social media graphics including headers, posts, and promotional banners.",
    stack: ["Adobe Photoshop", "Logo Design", "Branding", "Canva", "Social Media Design"],
  },
  {
    id: "7",
    role: "Co-Founder",
    company: "Upstreak Media",
    period: "2019 - 2020",
    summary:
      "Co-founded an SMMA agency focused on short-form content creation and social media growth. Produced Instagram Reels that accumulated 3,000,000+ views and 25,000+ likes, and generated €2,000+ through TikTok content creation. Designed thumbnails, banners, and posts across motivational, wellness, and construction niches.",
    stack: ["Instagram Reels", "TikTok", "Content Creation", "SMMA"],
  },
];
