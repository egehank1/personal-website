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
    role: "Founder",
    company: "Hardstyle Wear",
    companyUrl: "https://www.hardstylewear.com",
    period: "Feb 2023 - Present",
    summary:
      "Built and launched a fitness clothing e-commerce brand from scratch. Designed the brand identity, built the Shopify storefront, and set up the full stack from payment processing to automated order fulfilment. hardstylewear.com is still live and running to this day. Ran paid ad campaigns that drove 50,000+ website visitors in 24 hours, and generated over €4,400 in revenue while shipping 300+ products to 15+ countries. Used Google Analytics and Meta Pixel to track conversion funnels and iterate on landing pages.",
    stack: ["Shopify", "E-Commerce", "Google Analytics", "Meta Pixel", "Branding", "SEO"],
  },
  {
    id: "2",
    role: "Software Developer",
    company: "snacc-it",
    period: "Mar 2025 - Present",
    summary:
      "Supporting Project ETHICA, a €6.2M CELTIC-NEXT / EUREKA European research initiative. Day to day I work across ServiceNow: building catalog items, writing client and server-side scripts, configuring Service Portal widgets, and automating internal workflows like incident management, travel reimbursement, and illness reporting. Also handling enterprise website development and keeping the platform integrations running cleanly.",
    stack: ["ServiceNow", "JavaScript", "Service Portal", "ITSM", "Workflow Automation", "REST APIs"],
  },
  {
    id: "3",
    role: "Quantitative Developer",
    company: "Aachen Investment Club e.V.",
    period: "Mar 2025 - Aug 2025",
    summary:
      "Built quantitative models for the club's investment strategies and developed an automated trading bot that handled signal generation and order logic. Spent most of my time on data analysis and keeping the pipelines the rest of the team relied on for decisions clean and reliable. Worked closely with people from both finance and software backgrounds.",
    stack: ["Python", "Trading Bot", "Quantitative Finance", "Data Analysis"],
  },
  {
    id: "4",
    role: "Computer Science Tutor",
    company: "FH Aachen University of Applied Sciences",
    period: "Aug 2024 - Feb 2025",
    summary:
      "Tutored over 200 students across Fundamentals of Computer Science and Advanced Programming, working through 10+ assignments with each of them. A lot of the job was explaining algorithms, walking through control flow line by line, and sitting with students to debug their code until it finally clicked.",
    stack: ["Algorithms", "Programming", "Teaching"],
  },
  {
    id: "5",
    role: "Marketing Manager",
    company: "AcIAS e. V.",
    period: "Apr 2024 - Feb 2025",
    summary:
      "Ran the association's Instagram account, which reaches 500+ students a year from all over the world. Put out 200+ stories, 35+ posts, and 5+ reels while keeping the messaging consistent, and handled the wider digital marketing along with a few process improvements on the side.",
    stack: ["Instagram", "Digital Marketing", "Content Strategy"],
  },
  {
    id: "6",
    role: "Social Media Manager",
    company: "Fiverr (Freelance)",
    period: "Sep 2023 - Apr 2024",
    summary:
      "Created content for Instagram, Facebook, and YouTube using Canva, Photoshop, Canon 80D, and Rode Wireless GO. Managed accounts via Sprout Social, Khoros, and Google Analytics to improve engagement and audience growth.",
    stack: ["Canva", "Photoshop", "Sprout Social", "Google Analytics"],
  },
  {
    id: "7",
    role: "Co-Founder",
    company: "Upstreak Media",
    period: "2019 - 2020",
    summary:
      "SMMA agency focused on short-form content creation and social media growth. Created viral Instagram Reels totalling 3,000,000+ views and 25,000+ likes, and generated over €2,000 in revenue through TikTok content. Designed thumbnails, banners, and posts across motivational, wellness, and construction niches.",
    stack: ["Instagram Reels", "TikTok", "Content Creation", "SMMA"],
  },
];
