export type EducationItem = {
  id: string;
  institution: string;
  abbreviation: string;
  degree: string;
  field: string;
  period: string;
  gpa: string;
  gpaNote: string;
  highlights: string[];
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
    highlights: [
      "Maintaining a GPA of 1.4 (German scale: 1.0 = highest), reflecting strong and consistent academic performance.",
      "Selected as an e-fellows.net scholar, a merit-based scholarship awarded to high-achieving students in STEM, renewed April 2026.",
      "Tutored peers in Fundamentals of CS and Advanced Programming Languages (C++) across 2 semesters, reinforcing both technical and communication skills.",
    ],
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
    gpa: "3.4",
    gpaNote: "US Scale",
    highlights: [
      "Completed 8 foundational engineering and Computer Science courses with a GPA of 3.4/4.0.",
      "Assisted a professor with laboratory research in black hole physics, gaining early exposure to applied scientific work.",
      "Transferred to FH Aachen upon receiving a merit-based scholarship. FH Aachen is ranked #1 University of Applied Sciences in Germany for Computer Science.",
    ],
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
