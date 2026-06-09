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
    period: "Mar 2025 — Present",
    summary:
      "ServiceNow ITSM development focused on incident management automation. Built dynamic UI components, catalog items, and workflow automation scripts. Developed client-side and server-side logic for process optimization and configured Service Portals.",
    stack: ["ServiceNow", "ITSM", "JavaScript", "Scripting"],
  },
  {
    id: "2",
    role: "Quantitative Developer",
    company: "Aachen Investment Club e.V.",
    period: "Mar 2025 — Aug 2025",
    summary:
      "Developed quantitative models for investment strategies and built data analysis and automation tools for financial decision-making. Worked in a multidisciplinary finance and software team.",
    stack: ["Python", "Quantitative Finance", "Data Analysis", "Automation"],
  },
  {
    id: "3",
    role: "Computer Science Tutor",
    company: "FH Aachen University of Applied Sciences",
    period: "Aug 2024 — Feb 2025",
    summary:
      "Tutored students in Fundamentals of Computer Science and Advanced Programming. Supported algorithmic thinking, coding skills, and problem-solving.",
    stack: ["Algorithms", "Programming", "Teaching"],
  },
  {
    id: "4",
    role: "Marketing Manager",
    company: "AcIAS e. V.",
    period: "Apr 2024 — Feb 2025",
    summary:
      "Worked on digital marketing and business process optimization.",
    stack: ["Digital Marketing", "Business Processes"],
  },
  {
    id: "5",
    role: "Social Media Manager",
    company: "",
    period: "Sep 2023 — Apr 2024",
    summary:
      "Created content for Instagram, Facebook, and YouTube using Canva, Photoshop, Canon 80D, and Rode Wireless GO. Managed accounts via Sprout Social, Khoros, and Google Analytics to improve engagement and audience growth.",
    stack: ["Canva", "Photoshop", "Sprout Social", "Google Analytics"],
  },
  {
    id: "6",
    role: "Founder",
    company: "Hardstyle Wear",
    period: "Feb 2023 — Present",
    summary:
      "Built and launched a streetwear e-commerce brand from scratch — full brand identity, website, and social assets. Produced TikTok ad campaigns that drove 50,000+ website visitors in 24 hours. Optimised marketing performance and SEO using analytics tools.",
    stack: ["E-Commerce", "TikTok Ads", "Branding", "SEO"],
  },
  {
    id: "7",
    role: "Co-Founder",
    company: "Upstreak Media",
    period: "2019 — 2020",
    summary:
      "SMMA agency focused on short-form content creation and social media growth. Created viral Instagram Reels totalling 3,000,000+ views and 25,000+ likes. Designed thumbnails, banners, and posts across motivational, wellness, and construction niches.",
    stack: ["Instagram Reels", "Content Creation", "SMMA", "Graphic Design"],
  },
];
