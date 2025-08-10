import { ValidCategory, ValidExpType, ValidSkills } from "./constants";

interface PagesInfoInterface {
  title: string;
  imgArr: string[];
  description?: string;
}

interface DescriptionDetailsInterface {
  paragraphs: string[];
  bullets: string[];
}

export interface ExperienceInterface {
  id: string;
  type: ValidExpType;
  companyName: string;
  category: ValidCategory[];
  shortDescription: string;
  websiteLink?: string;
  githubLink?: string;
  techStack: ValidSkills[];
  startDate: Date;
  endDate: Date;
  companyLogoImg: any;
  descriptionDetails: DescriptionDetailsInterface;
  pagesInfoArr: PagesInfoInterface[];
}

export const Experiences: ExperienceInterface[] = [


  //Admin site qiita
  //shopify workshop voucher lottery
  //C# app * 2


  {
    id: "asd-vol",
    companyName: "Designed and developed Volumio Japanese bland site",
    type: "Professional",
    category: ["Frontend", "UI/UX", "Web Dev", "Static Site"],
    shortDescription:
      "developed and maintained the brand website for Japan.",
    websiteLink: "https://volumio.jp/",
    techStack: [
      "HTML 5",
      "CSS 3",
      "Javascript",
      "Bootstrap",
      "Adobe XD",
    ],
    startDate: new Date("2022-12-01"),
    endDate: new Date("2023-06-01"),
    companyLogoImg: "/experience/top-wing/volumio-jp.jpg",
    pagesInfoArr: [
      {
        title: "Re-design web pages for Japanese user",
        description:
          "Intuitive design tailored to Japanese sensibilities by using Adobe XD.",
        imgArr: ["/experience/top-wing/volumio-xd.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Handled the entire process independently—from proposing a solution to coding, release, and long-term maintenance.",
        "Designed the site using Adobe XD, referencing the original manufacturer’s global site while adapting the layout and visuals for Japanese consumers.",
        "Delivered both design and coding efficiently and consistently as a solo developer.",
        "Provided post-launch maintenance and support for approximately one year."
      ],
      bullets: [
        "Provided ongoing maintenance and support for 1 year.",
        "Delivered a lightweight, fast, and fully responsive website tailored to client needs."
      ],
    },
  },
  {
    id: "asd-biw",
    companyName: "Consulting for E-commerce website launch",
    type: "Professional",
    category: ["Technical Consulting", "UI/UX"],
    shortDescription:
      "Consulted on and implemented an online store, from platform selectionto deployment.",
    websiteLink: "https://bi-wings.shop/",
    techStack: [
    ],
    startDate: new Date("2022-10-01"),
    endDate: new Date("2023-05-01"),
    companyLogoImg: "/experience/top-wing/bi-wings-logo.png",
    pagesInfoArr: [
    ],
    descriptionDetails: {
      paragraphs: [
        "Provided technical consulting and implementation support for a client seeking to launch online stores. Compared and evaluated multiple e-commerce platforms (e.g., Shopify, BASE, STORES.jp) and delivered end-to-end support from tool selection to site deployment.",
      ],
      bullets: [
        "The store now generates about 10% of the client’s total revenue.",
      ],
    },
  },
  {
    id: "asd-nexta",
    companyName: "Platform development project for accounting firms",
    type: "Professional",
    category: ["System Design", "Agile Project", "SaaS Development","Web Dev"],
    shortDescription:
      "Led the development of a commercial web system operated by a major accounting firm",
    websiteLink: "",
    techStack: [
      "Stripe",
      "Adobe XD"
    ],
    startDate: new Date("2021-04-01"),
    endDate: new Date("2021-10-31"),
    companyLogoImg: "/experience/asd/logo.jpg",
    pagesInfoArr: [
    ],
    descriptionDetails: {
      paragraphs: [
        "Led the development of a commercial web system operated by a major accounting firm and used by over 10,000 external accounting offices, working fully remotely.",
        "Collaborated with a system integrator under a semi-delegated contract to design scalable architecture, coordinate with designers, manage a small team, and ensure high delivery quality in an agile environment.",
        "During the project's initial build phase, directed the system architecture design, including both one-time purchase and subscription-based payment methods using Stripe.",
        "Beyond payment features, implemented robust solutions for complex requirements such as user type configuration, assigning general and admin users at the corporate level, and enabling invitation functionality.",
        "Since programming was handled by an offshore team, prioritized clear and straightforward communication to ensure smooth collaboration."
      ],
      bullets: [
        "Delivered the initial build of a commercial web system used by over 10,000 external accounting offices.",
        "Successfully designed and launched a dual payment model (one-time purchase + subscription) using Stripe."
      ],
    },
  },
  {
    id: "asd-m2",
    companyName: "M2TECH Japanese bland site full renewal",
    type: "Professional",
    category: ["Frontend", "UI/UX", "Web Dev", "Static Site"],
    shortDescription:
      "developed and maintained the brand website for Japan.",
    websiteLink: "https://m2tech.jp/",
    techStack: [
      "HTML 5",
      "CSS 3",
      "Javascript",
      "Bootstrap",
      "Adobe Illustrator",
    ],
    startDate: new Date("2021-03-17"),
    endDate: new Date("2021-08-30"),
    companyLogoImg: "/experience/top-wing/m2tech-jp.png",
    pagesInfoArr: [
    ],
    descriptionDetails: {
      paragraphs: [
        "Handled the entire process independently—from proposing a solution to coding, release, and long-term maintenance.",
        "Analyzed issues with the existing website and evaluated CMS options, but proposed a static site built with Bootstrap based on the client’s needs for speed and simplicity, and the low expected update frequency.",
        "Designed the site using Adobe Illustrator, referencing the original manufacturer’s global site while adapting the layout and visuals for Japanese consumers.",
        "Delivered both design and coding efficiently and consistently as a solo developer.",
        "Provided post-launch maintenance and support for approximately three years."
      ],
      bullets: [
        "Increased monthly page views more than fivefold, from 4,100 to 105,000.",
        "Provided ongoing maintenance and support for 3 years.",
        "Delivered a lightweight, fast, and fully responsive website tailored to client needs."
      ],
    },
  },
  {
    id: "asd-ifi",
    companyName: "iFi audio Japanese bland site full renewal",
    type: "Professional",
    category: ["Frontend", "UI/UX", "Web Dev", "Static Site"],
    shortDescription:
      "developed and maintained the brand website for Japan.",
    websiteLink: "https://ifi-audio.jp/",
    techStack: [
      "HTML 5",
      "CSS 3",
      "Javascript",
      "Bootstrap",
      "Adobe Illustrator",
    ],
    startDate: new Date("2020-08-01"),
    endDate: new Date("2020-12-31"),
    companyLogoImg: "/experience/top-wing/ifi-jp.png",
    pagesInfoArr: [
      {
        title: "Top page",
        description:
          "Intuitive design tailored to Japanese sensibilities.",
        imgArr: ["/experience/top-wing/ifi-1.png"],
      },
      {
        title: "Other pages",
        imgArr: ["/experience/top-wing/ifi-6.png",
          "/experience/top-wing/ifi-2.png"
        ],
      },
      {
        title: "Responsive mobile-first design",
        description:
          "On mobile the hamburger menu is displayed.",
        imgArr: ["/experience/top-wing/ifi-mobile.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Handled the entire process independently—from proposing a solution to coding, release, and long-term maintenance.",
        "Analyzed issues with the existing website and evaluated CMS options, but proposed a static site built with Bootstrap based on the client’s needs for speed and simplicity, and the low expected update frequency.",
        "Designed the site using Adobe Illustrator, referencing the original manufacturer’s global site while adapting the layout and visuals for Japanese consumers.",
        "Delivered both design and coding efficiently and consistently as a solo developer.",
        "Adapted flexibly to last-minute schedule and scope changes before release and completed the launch without major issues.",
        "Provided post-launch maintenance and support for approximately four years."
      ],
      bullets: [
        "Increased monthly page views more than fivefold, from 58,000 to 300,000.",
        "Nearly doubled monthly unique user traffic, from 24,000 to 46,000.",
        "Completed the entire project—from design to release—solo in just 5 months.",
        "Provided ongoing maintenance and support for 4 years.",
        "Delivered a lightweight, fast, and fully responsive website tailored to client needs."
      ],
    },
  },
  {
    id: "asd-chatbot",
    companyName: "Development of delivery reservation Chatbot",
    type: "Professional",
    category: ["System Design", "Backend", "Agile Project", ],
    shortDescription:
      "Built a chatbot for automated delivery orders via a messaging platform (LINE)",
    techStack: [
      "Python",
      "Flask",
      "Docker",
      "AWS",
      "MySQL"
    ],
    startDate: new Date("2020-02-01"),
    endDate: new Date("2020-04-30"),
    companyLogoImg: "/experience/chatbot/mock_phone.png",
    pagesInfoArr: [
      {
        title: "Adress Sugestion",
        description:
          "When the user enters a zip code, the address is automatically retrieved. (Screenshots are for testing purposes only.)",
        imgArr: ["/experience/chatbot/adress_sugestion.png"],
      },
      {
        title: "Step-by-Step user input",
        description:
          "Users can input necessary information without stress by pressing buttons or entering text areas that appear on the messaging platform. If time is lost in the middle of a message, the user can continue typing, and if he/she wishes to cancel the operation, it can be terminated at any time. (Screenshots are for testing purposes only.)",
        imgArr: [
          "/experience/chatbot/step_by_step_input.png",
          "/experience/chatbot/step_by_step_button.png",
        ],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Independently handled the entire development process—from requirements definition to AWS deployment—working fully remotely.",
        "Developed a rule-based chatbot integrated into the LINE messaging platform to automate delivery reservations from users.",
        "Adopted an agile-inspired approach by delivering core features in short development cycles, enabling frequent client feedback and iterative improvements.",
        "Implemented morphological analysis using the Python library Janome to accurately process Japanese language input and extract relevant nouns for service execution.",
        "Designed a custom session management system to track each user's progress in conversations, enabling step-by-step data collection within a browserless messaging environment.",
        "Enabled automated PDF generation of reservation details, which were then sent to the registered dealership email address upon completion.",
        "Developed in a Docker environment and deployed to AWS EC2 with Amazon RDS (MySQL), ensuring scalability and maintainability.",
        "Through this project, I gained hands-on experience in end-to-end development, lightweight server design using Python Flask, containerization, and AWS deployment."
      ],
      bullets: [
        "Delivered the full development lifecycle independently and remotely",
        "Built a LINE-integrated chatbot to automate delivery reservations",
        "Implemented morphological analysis for Japanese using Python Janome",
        "Designed a session management system to track user progress in conversations",
        "Automated PDF generation and email delivery of reservation details",
      ],
    },
  },
  {
    id: "nri-tyt",
    companyName: "Test leader of a dealership payment system for a car manufacturer",
    type: "Professional",
    category: ["Test Design", "Waterfall Project",],
    shortDescription:
      "Led testing and issue tracking for a payment system implementation.",
    websiteLink: "https://www.nri.com/en/",
    techStack: [
      "Java",
      "Oracle Database"
    ],
    startDate: new Date("2016-05-01"),
    endDate: new Date("2017-03-31"),
    companyLogoImg: "/experience/nri/logo.png",
    pagesInfoArr: [
    ],
    descriptionDetails: {
      paragraphs: [
        "Joined the integration testing phase of a large-scale deployment project for a dealership payment system across approximately 5,000 locations of a major Japanese automotive manufacturer.",
        "My main responsibilities included creating and executing test cases for integration and system testing, coordinating with multiple internal teams, clients, and stakeholders, managing issues, and supporting the project manager.",
        "This large-scale project involved multiple internal teams for software development, external vendors for payment terminals, and different companies for card payment APIs and dealership coordination, requiring close collaboration among many stakeholders.",
        "To ensure smooth project progress, I focused on clear and consistent communication with both internal and external stakeholders.",
        "This experience allowed me to support project management tasks closely and gain practical knowledge in management operations.",
        "I also learned the importance of effective communication in remote environments, working with distributed development teams, distant clients, and nationwide dealership locations."


      ],
      bullets: [
        "Participated in a large-scale system rollout across ~5,000 dealership locations.",
        "Created test cases for integration and system testing.",
        "Coordinated effectively with internal teams, clients, and stakeholders.",
        "Managed issues and supported the project manager to ensure smooth progress.",
        "Practiced efficient remote communication with distributed teams and clients.",
        "Gained hands-on experience in project management support tasks."
      ],
    },
  },
  {
    id: "nri-sbik",
    companyName: "Maintenance and operations of An insurance company’s core system",
    type: "Professional",
    category: ["Full Stack", "Waterfall Project", "Mission Critical System",],
    shortDescription:
      "Oversaw the maintenance and operation of an insurance company’s core system.",
    websiteLink: "https://www.nri.com/en/",
    techStack: [
      "Javascript",
      "Java",
      "JSP",
      "COBOL",
      "Oracle Database"
    ],
    startDate: new Date("2015-04-01"),
    endDate: new Date("2017-11-30"),
    companyLogoImg: "/experience/nri/logo.png",
    pagesInfoArr: [
    ],
    descriptionDetails: {
      paragraphs: [
        "While working at Nomura Research Institute, I was assigned to the system maintenance and operations team for an insurance company with over 900,000 active contracts.",
        "The system comprised COBOL batch processes, a Java-based web application, and an Oracle Database, and also included maintenance of Windows Server 2000 running Apache and Tomcat.",
        "My role was to coordinate with external vendors and ensure system quality.",
        "In my first year, after completing six months of in-house training, I contributed to both client revenue and internal efficiency by modifying existing screens (from detailed design to testing), developing new batch processes, and building internal Excel automation tools.",
        "I gained hands-on experience with Java, JSP, and COBOL through these tasks.",
        "From the second year, I focused on reviewing design documents created by vendors and developing test cases to ensure design quality.",
        "Through practical work, I gained balanced experience across both upstream and downstream phases of the waterfall development model.",
        "This allowed me to work comprehensively on a large-scale core system and deepen my understanding of robust and secure system design.",
        "I developed foundational skills in front-end and back-end technologies, as well as infrastructure, establishing a strong base as a full-stack engineer."
      ],
      bullets: [
        "Maintained and operated a robust and secure system for approximately two years, which supported over 900,000 active contracts and was composed of COBOL batch processes, a Java-based web application, Oracle Database, and Windows Server 2000 with Apache and Tomcat.",
        "Discovered hidden bugs through code reviews and fixed them proactively before they could affect the system.",
        "Developed internal automation tools using Excel VBA, contributing to improved operational efficiency.",
        "Deepened my knowledge of system development through six months of in-house training and by obtaining multiple national IT certifications in Japan, including the Fundamental Information Technology Engineer Examination, Applied Information Technology Engineer Examination, and Database Specialist certification."
      ],
    },
  },
];

export const featuredExperiences = Experiences.slice(0, 3);
