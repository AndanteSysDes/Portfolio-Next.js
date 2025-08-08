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



  // {
  //   id: "the-super-quotes",
  //   companyName: "The Super Quotes",
  //   type: "Professional",
  //   category: ["Mobile Dev", "Full Stack", "UI/UX"],
  //   shortDescription:
  //     "Elevated The Super Quotes app with JavaScript, React Native, APIs, Redux magic, and Google Play Store debut.",
  //   websiteLink:
  //     "https://play.google.com/store/apps/details?id=com.thesuperlife",
  //   techStack: ["React Native", "Node.js", "MongoDB", "Javascript"],
  //   startDate: new Date("2021-07-01"),
  //   endDate: new Date("2022-07-01"),
  //   companyLogoImg: "/experience/superquotes/logo.png",
  //   pagesInfoArr: [
  //     {
  //       title: "Quotes View Page",
  //       description:
  //         "Elegantly designed quotes display with customizable themes and sharing options",
  //       imgArr: ["/experience/superquotes/app_2.webp"],
  //     },
  //     {
  //       title: "Quotes Download Component",
  //       description:
  //         "Feature allowing users to download quotes as beautiful images for social media sharing",
  //       imgArr: [
  //         "/experience/superquotes/app_4.webp",
  //         "/experience/superquotes/app_7.webp",
  //       ],
  //     },
  //     {
  //       title: "Account Management",
  //       description:
  //         "User profile management with favorites, history, and personalization settings",
  //       imgArr: ["/experience/superquotes/app_6.webp"],
  //     },
  //     {
  //       title: "Interest Selection and Update Page",
  //       description:
  //         "Interactive interface for users to select and update their quote preferences and interests",
  //       imgArr: [
  //         "/experience/superquotes/app_1.webp",
  //         "/experience/superquotes/app_3.webp",
  //       ],
  //     },
  //     {
  //       title: "Responsiveness",
  //       description:
  //         "Adaptive design ensuring optimal user experience across various device sizes and orientations",
  //       imgArr: ["/experience/superquotes/app_5.webp"],
  //     },
  //   ],
  //   descriptionDetails: {
  //     paragraphs: [
  //       `Venturing into the world of creativity at The Super Quotes was an exhilarating journey. As a passionate developer, I led the charge in crafting a compelling application from inception to completion, using the dynamic duo of JavaScript and React Native.`,
  //       `The heart of my achievement lay in the seamless integration of APIs, threading a tapestry of data flow that propelled the application's functionality to new heights.`,
  //       `With the wizardry of Redux, I choreographed a symphony of state management and performance optimization, orchestrating a ballet of responsiveness that wowed users with every interaction.`,
  //       `A crescendo awaited as I unveiled the culmination of my work on the grand stage of the Google Play Store. The app's debut marked an epoch, opening doors to an expansive audience eager to embrace the charm of The Super Quotes.`,
  //     ],
  //     bullets: [
  //       "Led the end-to-end development of a captivating application using JavaScript and React Native.",
  //       "Championed the integration of APIs, harmonizing data flow and enhancing application functionality.",
  //       "Conducted Redux magic to ensure state management and optimize performance, delivering a mesmerizing user experience.",
  //       "Premiered the application on the Google Play Store, capturing hearts and expanding its user base.",
  //     ],
  //   },
  // },
  // {
  //   id: "apex-shopping",
  //   companyName: "Apex Shopping App",
  //   type: "Personal Project",
  //   category: ["Mobile Dev", "Full Stack", "UI/UX"],
  //   shortDescription:
  //     "Developed a feature-rich mobile shopping application with admin panel, user authentication, and seamless product management using React Native and Firebase.",
  //   githubLink: "https://github.com/namanbarkiya/apex-shopping-app",
  //   techStack: ["React Native", "Javascript", "Redux", "Node.js", "express.js"],
  //   startDate: new Date("2021-07-14"),
  //   endDate: new Date("2022-07-01"),
  //   companyLogoImg: "/experience/apex/logo.png",
  //   pagesInfoArr: [
  //     {
  //       title: "Splash Screen",
  //       description: "Custom animated splash screen with app branding",
  //       imgArr: ["/experience/apex/app_7.webp"],
  //     },
  //     {
  //       title: "Login/Signup Authentication",
  //       description: "Secure user authentication system with Firebase",
  //       imgArr: ["/experience/apex/app_1.webp"],
  //     },
  //     {
  //       title: "All Products Explore Screen",
  //       description: "Interactive product browsing with categories and filters",
  //       imgArr: ["/experience/apex/app_3.webp"],
  //     },
  //     {
  //       title: "Admin Panel",
  //       description:
  //         "Comprehensive admin dashboard for product and order management",
  //       imgArr: ["/experience/apex/app_4.webp", "/experience/apex/app_6.webp"],
  //     },
  //     {
  //       title: "Sidenav Navigation",
  //       description: "Intuitive side navigation for easy app navigation",
  //       imgArr: ["/experience/apex/app_5.webp"],
  //     },
  //     {
  //       title: "Firebase Database",
  //       description:
  //         "Real-time database structure for efficient data management",
  //       imgArr: ["/experience/apex/db.webp"],
  //     },
  //   ],
  //   descriptionDetails: {
  //     paragraphs: [
  //       "The Apex Shopping App represents a comprehensive mobile e-commerce solution that I developed from the ground up using React Native and Firebase. This project showcases my ability to create a full-featured shopping application with both user and admin functionalities.",
  //       "The application features a robust authentication system, allowing users to securely sign up and log in. The product exploration interface is designed with user experience in mind, incorporating smooth navigation and intuitive filtering options.",
  //       "One of the key highlights is the admin panel, which provides complete control over product management, order processing, and inventory tracking. The integration with Firebase ensures real-time data synchronization and reliable data persistence.",
  //       "The app's architecture emphasizes scalability and performance, utilizing Redux for state management and following best practices for mobile app development. The UI/UX design focuses on providing a seamless shopping experience across different device sizes.",
  //     ],
  //     bullets: [
  //       "Implemented secure user authentication and authorization using Firebase",
  //       "Designed and developed an intuitive product browsing and shopping cart system",
  //       "Created a comprehensive admin panel for product and order management",
  //       "Integrated real-time data synchronization using Firebase Database",
  //       "Implemented state management using Redux for optimal performance",
  //       "Designed responsive UI components following mobile-first principles",
  //       "Incorporated smooth animations and transitions for enhanced user experience",
  //     ],
  //   },
  // },
  // {
  //   id: "builtdesign-blogs",
  //   companyName: "Builtdesign Blogs",
  //   type: "Professional",
  //   category: ["Web Dev", "Full Stack", "UI/UX"],
  //   shortDescription:
  //     "Crafted Builtdesign's vibrant Blogs Website using Netlify CMS and React for engaging content experiences.",
  //   websiteLink: "https://blog.builtdesign.in",
  //   techStack: ["Next.js", "React", "Node.js", "MongoDB", "Typescript"],
  //   startDate: new Date("2022-03-01"),
  //   endDate: new Date("2022-07-01"),
  //   companyLogoImg: "/experience/builtdesign-blogs/logo.png",
  //   pagesInfoArr: [
  //     {
  //       title: "Blog Landing Page",
  //       description:
  //         "Modern and responsive landing page showcasing featured articles",
  //       imgArr: ["/experience/builtdesign-blogs/blog_2.webp"],
  //     },
  //     {
  //       title: "Blog Listing",
  //       description:
  //         "Organized display of all blog posts with search and filtering",
  //       imgArr: ["/experience/builtdesign-blogs/blog_3.webp"],
  //     },
  //     {
  //       title: "Category Navigation",
  //       description: "Intuitive category-based navigation system",
  //       imgArr: ["/experience/builtdesign-blogs/blog_1.webp"],
  //     },
  //     {
  //       title: "Article View",
  //       description:
  //         "Clean and readable article layout with rich media support",
  //       imgArr: [
  //         "/experience/builtdesign-blogs/blog_4.webp",
  //         "/experience/builtdesign-blogs/blog_5.webp",
  //       ],
  //     },
  //   ],
  //   descriptionDetails: {
  //     paragraphs: [
  //       "As part of the Builtdesign platform, I developed a sophisticated blog website that serves as a content hub for the company's thought leadership and industry insights. The project leveraged Next.js and React to create a fast, SEO-friendly platform.",
  //       "The blog platform features a modern, responsive design that prioritizes readability and user engagement. I implemented a robust content management system using Netlify CMS, enabling the content team to easily publish and manage blog posts.",
  //       "The architecture includes server-side rendering for optimal performance and SEO, while MongoDB provides flexible content storage. TypeScript ensures code reliability and maintainability throughout the application.",
  //       "Key features include category-based navigation, search functionality, and a rich text editor for content creation. The platform supports various content types including images, code snippets, and embedded media.",
  //     ],
  //     bullets: [
  //       "Developed a modern blog platform using Next.js and React with TypeScript",
  //       "Implemented Netlify CMS for efficient content management",
  //       "Created a responsive design that prioritizes readability and user engagement",
  //       "Built server-side rendering for optimal performance and SEO",
  //       "Integrated MongoDB for flexible content storage and management",
  //       "Developed category-based navigation and search functionality",
  //       "Implemented rich text editing capabilities for content creation",
  //     ],
  //   },
  // },
  // {
  //   id: "portfolio-card",
  //   companyName: "Portfolio Card",
  //   type: "Personal Project",
  //   category: ["Web Dev", "Frontend", "3D Modeling"],
  //   shortDescription:
  //     "Forged an immersive 3D Portfolio Card utilizing the prowess of Three.js and Blender, where art and technology converge in an interactive masterpiece.",
  //   websiteLink: "https://card.namanbarkiya.xyz/",
  //   githubLink: "https://github.com/namanbarkiya/3d-portfolio-card",
  //   techStack: ["React", "Javascript", "HTML 5", "CSS 3"],
  //   startDate: new Date("2022-03-01"),
  //   endDate: new Date("2022-07-01"),
  //   companyLogoImg: "/experience/card/logo.png",
  //   pagesInfoArr: [
  //     {
  //       title: "Card Views",
  //       description: "Front and back views of the interactive 3D card",
  //       imgArr: [
  //         "/experience/card/card_2.webp",
  //         "/experience/card/card_3.webp",
  //       ],
  //     },
  //     {
  //       title: "Interactive Elements",
  //       description:
  //         "Custom links embedded in the 3D model with interactive animations",
  //       imgArr: ["/experience/card/card_1.webp"],
  //     },
  //     {
  //       title: "3D Model Development",
  //       description: "Blender project showcasing the model creation process",
  //       imgArr: ["/experience/card/card_4.webp"],
  //     },
  //   ],
  //   descriptionDetails: {
  //     paragraphs: [
  //       "In my personal project, I've ventured into the world of creativity, fashioning a distinctive portfolio card through the utilization of Three.js.",
  //       "This portfolio card transcends convention; it emerges as a captivating 3D model, adorned with meticulous lighting arrangements that conjure a spellbinding visual journey.",
  //       "To materialize this concept, I've harnessed the combined potential of Three.js and Blender, orchestrating a meticulous crafting of the central 3D model that serves as the cornerstone of the card's allure.",
  //       "Yet, the allure extends beyond aesthetics. I've ingeniously interwoven custom links directly into the fabric of Three.js components. Through the creation and seamless integration of novel components, these additions elegantly rest upon the card's surface, mirroring its rotations and delivering an interactive dimension to my portfolio.",
  //       "The portfolio card itself is an opus of motion, perpetually swaying in an auto-rotational dance that unfurls its multifaceted essence. As an enhancement, I've introduced an instinctive user interaction element. A simple, intuitive drag of the card in specific directions grants viewers a comprehensive vantage, enabling exploration from every conceivable angle.",
  //       "At its core, my personal project epitomizes technical finesse, artistic expression, and interactive design. The amalgamation of Three.js, Blender's prowess, and the innovation of component integration has birthed not only a portfolio card, but a dynamic encounter leaving an indelible imprint on all who partake.",
  //     ],
  //     bullets: [
  //       "Conceptualized and realized a distinct portfolio card using Three.js, highlighting creative exploration.",
  //       "Crafted a mesmerizing 3D model enhanced by thoughtful lighting arrangements, resulting in a captivating visual voyage.",
  //       "Leveraged the synergy of Three.js and Blender to meticulously sculpt and refine the central 3D model, embodying meticulous attention to detail.",
  //       "Innovatively integrated custom links within Three.js components, introducing an interactive layer via seamlessly incorporated new elements.",
  //       "Enabled an auto-rotating feature for the portfolio card, perpetually showcasing its various facets to observers.",
  //       "Introduced an instinctual user interaction mechanism, allowing viewers to comprehensively explore the card's dimensions through simple, intuitive dragging motions.",
  //       "Represented a fusion of technical prowess, artistic ingenuity, and interactive design in a project that reshapes the boundaries of conventional portfolio representation.",
  //     ],
  //   },
  // },
  // {
  //   id: "cirql-dashboard",
  //   companyName: "Cirql Dashboard",
  //   type: "Personal Project",
  //   category: ["Web Dev", "Frontend", "UI/UX"],
  //   shortDescription:
  //     "Created a dashboard project using React and Tailwind CSS, focusing on UI design and routing implementation.",
  //   websiteLink: "https://cirql-ui.namanbarkiya.xyz/",
  //   techStack: ["React", "Tailwind CSS", "Google Auth"],
  //   startDate: new Date("2023-01-01"),
  //   endDate: new Date("2023-02-15"),
  //   companyLogoImg: "/experience/cirql/logo.png",
  //   pagesInfoArr: [
  //     {
  //       title: "Dashboard Home",
  //       description:
  //         "Main dashboard view with analytics widgets and data visualization",
  //       imgArr: ["/experience/cirql/web_1.png", "/experience/cirql/web_2.png"],
  //     },
  //     {
  //       title: "Profile Page",
  //       description:
  //         "User profile management interface with customization options",
  //       imgArr: ["/experience/cirql/web_3.png", "/experience/cirql/web_4.png"],
  //     },
  //   ],
  //   descriptionDetails: {
  //     paragraphs: [
  //       "For the 'Cirql Dashboard' personal project, I aimed to enhance my UI design skills and deepen my understanding of routing within a React application.",
  //       "I utilized React and Tailwind CSS to craft an intuitive dashboard interface that provides users with an organized overview of data and functionalities. The UI components were thoughtfully designed to ensure a seamless user experience.",
  //       "Incorporating Google Sign-In Authentication further fortified the project by adding a layer of security and convenience. Users are required to authenticate before accessing certain routes, ensuring the safety of sensitive information.",
  //       "The routing system was meticulously implemented to enable smooth navigation between different sections of the dashboard, simulating real-world use cases.",
  //       "Through this project, I've gained valuable insights into UI/UX design principles and the implementation of secure and efficient routing in React applications.",
  //     ],
  //     bullets: [
  //       "Created a user-friendly dashboard project using React and Tailwind CSS.",
  //       "Implemented Google Sign-In Authentication to ensure secure access to sensitive routes.",
  //       "Designed UI components to provide an intuitive and visually pleasing experience.",
  //       "Focused on implementing a smooth routing system to simulate real-world use cases.",
  //       "Enhanced my skills in UI design, routing, and component architecture.",
  //     ],
  //   },
  // },
  // {
  //   id: "inscript-hindi-typing",
  //   companyName: "Inscript Hindi Typing",
  //   type: "Personal Project",
  //   category: ["Web Dev", "UI/UX"],
  //   shortDescription:
  //     "Developed a user-friendly website for Inscript Hindi typing, addressing the need for a simple tool for Hindi writers to convey data digitally.",
  //   websiteLink: "https://hindityping.namanbarkiya.xyz",
  //   githubLink: "https://github.com/namanbarkiya/inscript-hindi-keyboard",
  //   techStack: ["HTML 5", "CSS 3", "Javascript"],
  //   startDate: new Date("2022-05-01"),
  //   endDate: new Date("2022-06-15"),
  //   companyLogoImg: "/experience/hindi-keyboard/logo.png",
  //   pagesInfoArr: [
  //     {
  //       title: "Typing Interface",
  //       description: "Minimal and user-friendly Inscript Hindi typing area",
  //       imgArr: ["/experience/hindi-keyboard/web_1.png"],
  //     },
  //     {
  //       title: "Copy and Download the file",
  //       description:
  //         "Export functionality allowing users to copy text or download as a document file",
  //       imgArr: [
  //         "/experience/hindi-keyboard/web_2.png",
  //         "/experience/hindi-keyboard/web_3.png",
  //       ],
  //     },
  //   ],
  //   descriptionDetails: {
  //     paragraphs: [
  //       "The 'Inscript Hindi Typing Website' project emerged from the need to provide a simple and accessible tool for Hindi writers, especially those in digital news and media, who wished to convey data in Hindi.",
  //       "Recognizing the challenges posed by complex software in the market, I set out to create a minimalistic typing area that catered to the needs of a vast community of Hindi typists in India.",
  //       "The project was designed to address the specific requirements of users familiar with the Inscript keyboard layout, mapping English and Hindi alphabets for seamless typing. The intuitive interface allowed users to effortlessly switch between languages, streamlining the process of content creation.",
  //       "Leveraging HTML and CSS, I crafted the website's UI to ensure a user-friendly experience. Additionally, Local Storage was utilized to enable users to save and retrieve their work, enhancing convenience and productivity.",
  //       "The website's focus on user experience and simplicity proved to be a key factor in its popularity among Hindi writers. By offering a tool that reduced the barriers to entry, I contributed to the digital empowerment of Hindi typists who previously faced challenges in conveying their message effectively.",
  //       "This project marked one of my initial forays into web development and highlighted the transformative potential of technology in addressing real-world challenges.",
  //     ],
  //     bullets: [
  //       "Developed a user-friendly website for Inscript Hindi typing.",
  //       "Catered to the needs of Hindi writers in digital news and media.",
  //       "Created a minimalistic and intuitive typing interface for the Inscript keyboard layout.",
  //       "Mapped English and Hindi alphabets to provide a seamless typing experience.",
  //       "Utilized HTML and CSS to design a user-friendly UI.",
  //       "Implemented Local Storage to enable users to save and retrieve their work.",
  //       "Contributed to the digital empowerment of Hindi typists by offering a simple tool.",
  //       "Marked one of my first web development projects, showcasing technology's potential for addressing real-world needs.",
  //     ],
  //   },
  // },
];

export const featuredExperiences = Experiences.slice(0, 3);
