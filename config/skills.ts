import { Icons } from "@/components/common/icons";

export interface skillsInterface {
  name: string;
  description: string;
  rating: number;
  icon: any;
}

export const skillsUnsorted: skillsInterface[] = [
  {
    name: "express.js",
    description:
      "Build web applications and APIs quickly using a fast, unopinionated Node.js framework.",
    rating: 2,
    icon: Icons.express,
  },
  {
    name: "Node.js",
    description:
      "Run JavaScript on the server side, enabling dynamic and responsive applications.",
    rating: 2,
    icon: Icons.nodejs,
  },
  {
    name: "MongoDB",
    description:
      "Store and retrieve data seamlessly with a flexible and scalable NoSQL database.",
    rating: 2,
    icon: Icons.mongodb,
  },
  {
    name: "Typescript",
    description:
      "Enhance JavaScript with static types, making code more understandable and reliable.",
    rating: 3,
    icon: Icons.typescript,
  },
  {
    name: "Javascript",
    description:
      "Create interactive and dynamic web experiences with the versatile scripting language.",
    rating: 4,
    icon: Icons.javascript,
  },
  {
    name: "HTML 5",
    description:
      "Create well-structured, accessible web content using the latest version of HyperText Markup Language.",
    rating: 5,
    icon: Icons.html5,
  },
  {
    name: "CSS 3",
    description:
      "Style web pages creatively and responsively with the latest iteration of Cascading Style Sheets.",
    rating: 5,
    icon: Icons.css3,
  },
  {
    name: "AWS",
    description:
      "Utilize Amazon Web Services to build and deploy scalable, reliable, and secure applications.",
    rating: 3,
    icon: Icons.amazonaws,
  },
  {
    name: "Bootstrap",
    description:
      "Quickly create responsive and appealing web designs using a popular CSS framework.",
    rating: 5,
    icon: Icons.bootstrap,
  },
  {
    name: "Java",
    description:
      "Capable of building robust backend systems with object-oriented design.",
    rating: 4,
    icon: Icons.java,
  },

  {
    name: "Python",
    description:
      "Highly readable and flexible; used for scripting, data handling, and rapid prototyping.",
    rating: 4,
    icon: Icons.python,
  },

  {
    name: "Flask",
    description:
      "Develop rule-based chatbots using morphological analysis and other web applications by a lightweight Python web app framework.",
    rating: 3,
    icon: Icons.flask,
  },

  {
    name: "C#",
    description:
      "Experienced in OOP and MVVM-based application development.",
    rating: 2,
    icon: Icons.csharp,
  },
  {
    name: "MySQL",
    description:
      "Manage and organize relational databases efficiently for data-driven applications.",
    rating: 4,
    icon: Icons.mysql,
  },
  {
    name: "Oracle Database",
    description:
      "Skilled in writing complex SQL queries and managing relational data.",
    rating: 3,
    icon: Icons.oracle,
  },

  
  {
    name: "Next.js",
    description:
      "Effortlessly build dynamic apps with routing, layouts, loading UI, and API routes.",
    rating: 4,
    icon: Icons.nextjs,
  },
  {
    name: "React",
    description:
      "Craft interactive user interfaces using components, state, props, and virtual DOM.",
    rating: 4,
    icon: Icons.react,
  },
  
  {
    name: "Docker",
    description:
      "Able to containerize development environments with multi-container setups.",
    rating: 3,
    icon: Icons.docker,
  },
  
  {
    name: "Git (Github)",
    description:
      "Proficient in version control and basic CI/CD using GitHub Actions.",
    rating: 4,
    icon: Icons.Github,
  },
  
  {
    name: "Adobe Illustrator",
    description:
      "Create vector graphics and icons with precision using industry-standard tools.",
    rating: 3,
    icon: Icons.illustrator,
  },
  {
    name: "Adobe XD",
    description:
      "Design and prototype user interfaces with efficient, screen-based workflows.",
    rating: 4,
    icon: Icons.xd,
  },
  {
    name: "Figma",
    description:
      "Collaborate in real time on responsive UI/UX design with a cloud-based platform.",
    rating: 2,
    icon: Icons.figma,
  },
  {
    name: "Stripe",
    description:
      "Integrated online payment processing into web applications using Stripe API. Familiar with checkout flows, webhooks, and secure transaction handling.",
    rating: 3,
    icon: Icons.stripe,
  },

  {
    name: "Heroku",
    description:
      "Simplify app deployment and shorten the time from ideation to production.",
    rating: 4,
    icon: Icons.heroku,
  },
];

export const skills = skillsUnsorted
  .slice()
  .sort((a, b) => b.rating - a.rating);

export const featuredSkills = skills.slice(0, 6);
