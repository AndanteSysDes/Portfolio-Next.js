import { ValidSkills } from "./constants";

export interface CareerExperienceInterface {
  id: string;
  position: string;
  company: string;
  location: string;
  startDate: Date;
  endDate: Date | "Present";
  description: string[];
  achievements: string[];
  skills: ValidSkills[];
  companyUrl?: string;
  logo?: string;
}

export const careerExperiences: CareerExperienceInterface[] = [
  {
    id: "asd",
    position: "Freelance Tech Lead / Software Engineer / Web Developer ",
    company: "Andante System & Design (Self-employed)",
    location: "Västerås, Sweden (2022-Present) / Yokohama, Japan (2020-2022)",
    startDate: new Date("2020-01-01"),
    endDate: "Present",
    description: [
      "Provided technical consulting and designed system architectures, including chatbot, payment and subscription services.",
      "As a project leader, led an agile team consisting of a web designer and an offshore development team.",
      "As a web developer, designed and delivered three responsive static websites from scratch.",
    ],
    achievements: [
      "Led the development of a commercial web system operated by a major accounting firm and used by more than 10,000 external accountants offices. Collaborated with a system integrator under a semi-delegated contract to design scalable architecture, manage a small team, and ensure high delivery quality in an Agile environment.",
      "Provided technical consulting and implementation support for a client seeking to launch online stores. Compared and evaluated multiple e-commerce platforms (e.g., Shopify, BASE, STORES.jp) and delivered end-to-end support from tool selection to site deployment. The store now generates about 10% of the client’s totalrevenue.",
      "Designed and developed three static websites from scratch with responsive design and maintained them for four years. One of them increased page views over fivefold (from 58,000 to 300,000 monthlyPV) and nearly doubled unique user traffic (from 24,000 to 46,000 UU)", 
      "Built a rule-based chatbot for the LINE messaging platform, utilizing morphological analysis for natural language handling.",
    ],
    skills: ["HTML 5", "CSS 3", "Javascript", "Bootstrap","Python", "Flask","MySQL", "AWS", "Docker", "Git", "Heroku", "Stripe", "Adobe Illustrator", "Adobe XD", "Figma"],
    companyUrl: "https://pf.andante-sd.com/",
    logo: "/career/andante-logo.png",
  },

  {
    id: "NRI",
    position: "Application engineer",
    company: "Nomura Research Institute",
    location: "Yokohama, Japan",
    startDate: new Date("2015-04-01"),
    endDate: new Date("2017-11-30"),
    description: [
      "Directed system design and vendor coordination for an insurance company’s core system, utilizing COBOL, Java, and Oracle Database.",
      "Improved system architecture based on client requirements, managed tasks and issues and coordinated project schedules with stakeholders.",
      "Led testing and issue tracking for a payment system implementation.",
    ],
    achievements: [
      "Oversaw the maintenance and operation of an insurance company’s core system for two years.The system, which handled approximately 900,000 active contracts, was composed of COBOL batch processes, a Java-based web application, and Oracle Database.",
      "Improved the quality of High-Level Design Documents in a system modification project for an insurance company, aimed at eliminating credit card data retention for PCI DSS compliance.",
      "Contributed to the testing phase of a dealership payment system across approximately 5,000 locations for a major Japanese car manufacturer by creating test cases and tracking issues.",
    ],
    skills: ["Javascript", "Java", "JSP", "COBOL", "Oracle Database"],
    companyUrl: "https://www.nri.com/en/",
    logo: "/career/nri-nomura-research-institute-logo.jpg",
  },
];
