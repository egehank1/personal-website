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
    role: "Software Developer",
    company: "snacc-it",
    period: "Mar 2025 - Present",
    summary:
      "Currently working on Project ETHICA, a Digital Product Passport platform that gives companies ESG transparency, compliance, and a full audit trail across their products. Alongside that I build on ServiceNow day to day, covering incident management, travel reimbursement workflows, an enterprise illness reporting process, and enterprise website development. Most of the work is client and server side scripting, catalog items, and Service Portal configuration to cut down manual effort in internal processes.",
    stack: ["ServiceNow", "Digital Product Passport", "ESG", "ITSM", "JavaScript"],
  },
  {
    id: "2",
    role: "Quantitative Developer",
    company: "Aachen Investment Club e.V.",
    period: "Mar 2025 - Aug 2025",
    summary:
      "Built quantitative models for the club's investment strategies and developed an automated trading bot that handled signal generation and order logic. Spent most of my time on data analysis and keeping the pipelines the rest of the team relied on for decisions clean and reliable. Worked closely with people from both finance and software backgrounds.",
    stack: ["Python", "Trading Bot", "Quantitative Finance", "Data Analysis"],
  },
  {
    id: "3",
    role: "Computer Science Tutor",
    company: "FH Aachen University of Applied Sciences",
    period: "Aug 2024 - Feb 2025",
    summary:
      "Tutored over 200 students across Fundamentals of Computer Science and Advanced Programming, working through 10+ assignments with each of them. A lot of the job was explaining algorithms, walking through control flow line by line, and sitting with students to debug their code until it finally clicked.",
    stack: ["Algorithms", "Programming", "Teaching"],
  },
  {
    id: "4",
    role: "Marketing Manager",
    company: "AcIAS e. V.",
    period: "Apr 2024 - Feb 2025",
    summary:
      "Ran the association's Instagram account, which reaches 500+ students a year from all over the world. Put out 200+ stories, 35+ posts, and 5+ reels while keeping the messaging consistent, and handled the wider digital marketing along with a few process improvements on the side.",
    stack: ["Instagram", "Digital Marketing", "Content Strategy"],
  },
  {
    id: "5",
    role: "Social Media Manager",
    company: "Fiverr (Freelance)",
    period: "Sep 2023 - Apr 2024",
    summary:
      "Created content for Instagram, Facebook, and YouTube using Canva, Photoshop, Canon 80D, and Rode Wireless GO. Managed accounts via Sprout Social, Khoros, and Google Analytics to improve engagement and audience growth.",
    stack: ["Canva", "Photoshop", "Sprout Social", "Google Analytics"],
  },
  {
    id: "6",
    role: "Founder",
    company: "Hardstyle Wear",
    period: "Feb 2023 - Present",
    summary:
      "Built and launched a streetwear e-commerce brand from scratch, with full brand identity, website, and social assets. Produced TikTok ad campaigns that drove 50,000+ website visitors in 24 hours, and generated over 4,400 euros in revenue while shipping 300+ products to 15+ countries. Optimised marketing performance and SEO using analytics tools.",
    stack: ["E-Commerce", "TikTok Ads", "Branding", "SEO"],
  },
  {
    id: "7",
    role: "Co-Founder",
    company: "Upstreak Media",
    period: "2019 - 2020",
    summary:
      "SMMA agency focused on short-form content creation and social media growth. Created viral Instagram Reels totalling 3,000,000+ views and 25,000+ likes, and generated over 2,000 euros in revenue through TikTok content. Designed thumbnails, banners, and posts across motivational, wellness, and construction niches.",
    stack: ["Instagram Reels", "TikTok", "Content Creation", "SMMA"],
  },
];
