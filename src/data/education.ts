export type EducationItem = {
  id: string;
  institution: string;
  abbreviation: string;
  degree: string;
  field: string;
  period: string;
  gpa: string;
  gpaNote: string;
  coursework: string[];
  skills: string[];
};

export const education: EducationItem[] = [
  {
    id: "fh-aachen",
    institution: "FH Aachen University of Applied Sciences",
    abbreviation: "FH",
    degree: "Bachelor's degree",
    field: "Computer Science",
    period: "Aug 2023 – Aug 2026",
    gpa: "1.4",
    gpaNote: "German Scale",
    coursework: [
      "Advanced Mathematics I & II",
      "Fundamentals of Computer Science and High-Level Programming",
      "Technical Computer Science",
      "Computer Networks and IT Security",
      "Algorithms and Data Structures",
      "Theoretical Computer Science and Logic",
      "Databases and Web Technologies",
      "Computer System Architecture, Operating System Concepts, and Distributed Systems",
      "Software Engineering",
      "Object-Oriented Software Development",
      "Business Administration",
      "iOS Development",
      "Development for Operations (DevOps)",
      "Model-Based Systems Engineering",
      "IT Infrastructure",
      "Modeling of Distributed Systems",
      "Software Development Lifecycle",
      "Applied Data Analytics",
      "Interdisciplinary Project: ROS-Based Software Development for Planetary Rover Systems",
      "B2B Software Sales",
      "Fault-Tolerant Systems",
      "Linux: Concepts and Applications",
    ],
    skills: [
      "Applied Mathematics",
      "Algorithms",
      "Computer Networks",
      "IT Security",
      "Databases",
      "Systems Architecture",
      "Distributed Systems",
      "Software Engineering",
      "Object-Oriented Software Development",
      "iOS Development",
      "DevOps",
      "Model-Based Systems Engineering",
      "IT Infrastructure",
      "Software Development Lifecycle",
      "Data Analysis",
      "ROS",
      "B2B Software Sales",
      "Fault-Tolerant Systems",
      "Linux",
    ],
  },
  {
    id: "ozyegin",
    institution: "Özyeğin University",
    abbreviation: "ÖZÜ",
    degree: "Bachelor's degree",
    field: "Computer Science",
    period: "Sep 2021 – Sep 2022",
    gpa: "3.3",
    gpaNote: "US Scale",
    coursework: [
      "Computer Programming",
      "English I & II",
      "Calculus for Engineering I & II",
      "Physics I & II",
      "Object-Oriented Programming",
      "Turkish Language and Literature I & II",
      "Personal Development",
      "Introduction to University Life",
    ],
    skills: [
      "Computer Programming",
      "Object-Oriented Programming",
      "Calculus",
      "Physics",
      "Academic English",
    ],
  },
];
