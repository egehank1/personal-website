export type CredentialType = "certificate" | "scholarship" | "course" | "award" | "recommendation";

export type Credential = {
  id: string;
  /** Full name of the certificate / scholarship / award */
  title: string;
  /** Issuing organisation, platform, or institution */
  issuer: string;
  /** Display date, e.g. "Mar 2024" */
  date: string;
  type: CredentialType;
  /** Short one-liner shown on the card */
  description?: string;
  /**
   * Path to the credential file inside /public/credentials/.
   * Supports PDF (.pdf), JPEG (.jpg / .jpeg), and PNG (.png).
   * - Images open in a lightbox modal.
   * - PDFs open in a new browser tab.
   * Encode spaces as %20, e.g. "/credentials/My%20File.pdf"
   */
  filePath?: string;
  /** External verification / credential URL */
  credentialUrl?: string;
  /** Skill tags displayed as chips */
  tags?: string[];
};

export const credentials: Credential[] = [
  {
    id: "e-fellows-scholarship",
    title: "e-fellows.net Scholarship",
    issuer: "e-fellows.net",
    date: "Apr 2026",
    type: "scholarship",
    description:
      "Awarded to outstanding students for exceptional academic results and extracurricular achievements. Includes exclusive networking, career services, and access to top-company internship pipelines.",
    filePath: "/credentials/e-fellows-scholarship.jpg",
    tags: ["Academic Excellence", "Networking", "Career Development"],
  },
  {
    id: "apple-swift",
    title: "App Development with Swift",
    issuer: "Apple Authorised Training",
    date: "Jul 2025",
    type: "certificate",
    description:
      "Certificate of Achievement granted by FH Aachen University of Applied Sciences through Apple's official Authorised Training programme.",
    filePath: "/credentials/app-development-with-swift.jpg",
    tags: ["Swift", "iOS", "Mobile Development", "Apple"],
  },
  {
    id: "cisco-linux-essentials",
    title: "Linux Essentials",
    issuer: "Cisco Networking Academy",
    date: "Jun 2025",
    type: "certificate",
    description:
      "Completed through the Cisco Networking Academy programme at FH Aachen (Fachbereich Elektrotechnik und Informationstechnik) in Summer Semester 2025.",
    filePath: "/credentials/linux-essentials-cisco-networking-academy.jpg",
    tags: ["Linux", "CLI", "Networking", "Cisco"],
  },
  {
    id: "ai-engineer-365",
    title: "The AI Engineer Course",
    issuer: "365 Careers",
    date: "2025",
    type: "course",
    description:
      "Comprehensive programme covering AI engineering fundamentals, LLMs, RAG pipelines, and production deployment of AI-powered applications.",
    filePath: "/credentials/The%20Al%20Engineer%20Course-365-careers.pdf",
    tags: ["AI", "LLMs", "RAG", "Python", "Machine Learning"],
  },
  {
    id: "coursera-photography-msu",
    title: "Cameras, Exposure, and Photography",
    issuer: "Michigan State University",
    date: "Apr 2024",
    type: "course",
    description:
      "Online course authorised by Michigan State University and delivered through Coursera, covering cameras, exposure techniques, and photographic composition.",
    filePath: "/credentials/cameras-exposure-photography-michigan-state-university.jpg",
    tags: ["Photography", "Cameras", "Exposure", "Coursera"],
  },
  {
    id: "forex-algorithmic-trading",
    title: "Complete Algorithmic Forex Trading & Backtesting System",
    issuer: "Udemy",
    date: "2024",
    type: "course",
    description:
      "End-to-end course on building automated forex trading systems with algorithmic strategies and rigorous backtesting frameworks.",
    filePath: "/credentials/Complete%20algorithmic%20forex%20trading%20and%20back%20testing%20system.pdf",
    tags: ["Forex", "Algorithmic Trading", "Backtesting", "Python", "Finance"],
  },
  {
    id: "telc-german-c1",
    title: "telc Deutsch C1 Hochschule",
    issuer: "telc",
    date: "Mar 2023",
    type: "certificate",
    description:
      "Council of Europe C1-level German proficiency certificate. Scored 198 / 214 points overall with grade 'Sehr gut' (Very Good).",
    filePath: "/credentials/telc-c1-german.jpeg",
    tags: ["German", "C1", "Language", "CEFR"],
  },
  {
    id: "recommendation-black-hole-physics",
    title: "Letter of Recommendation",
    issuer: "Özyeğin University",
    date: "2022",
    type: "recommendation",
    description:
      "Written by Assoc. Prof. Koray Düztaş (theoretical physicist, black hole physics researcher) following outstanding attendance, participation, and grades in introductory physics.",
    filePath: "/credentials/recommendation-letter-black-hole-physics.jpg",
    tags: ["Physics", "Özyeğin University", "Academic Excellence"],
  },
  {
    id: "arduino-certificate-2014",
    title: "Arduino Robotics & Creative Technology Olympiad",
    issuer: "National Arduino Robotics Olympiad (Turkey)",
    date: "Nov 2014",
    type: "award",
    description:
      "Excellence Completion Certificate for achieving 2nd place in the Turkey-wide National Arduino Robotics Olympiad for Middle Schools, 2014, alongside teammate Beyazit Nural. Recognised for exceptional robotics engineering, creative problem-solving, and technical excellence.",
    filePath: "/credentials/arduino_certificate_2014.pdf",
    tags: ["Arduino", "Robotics", "Olympiad", "Creative Technology", "Embedded Systems"],
  },
];
