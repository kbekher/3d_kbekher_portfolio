import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  sass,
  git,
  figma,
  bootstrap,
  front,
  cola,
  weather,
  gadget,
  game,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Responsive UI/UX Design",
    icon: mobile,
  },
  {
    title: "Component Development",
    icon: backend,
  },
  {
    title: "Migration and Optimization",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "sass",
    icon: sass,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "bootstrap",
    icon: bootstrap,
  },
];

const experiences = [
  {
    title: "Accountant",
    company_name: "Coca-Cola HBC",
    icon: cola,
    iconBg: "#383E56",
    date: "March 2020 - November 2023",
    points: [
      "Displayed outstanding attention to detail processing 1000 documents weekly, ensuring accuracy, integrity, and promptly resolving issues.",
      "Improved document verification efficiency by implementing a streamlined workflow, doubling verification speed, optimizing resources, and reducing turnaround times.",
      "Mastered SAP system, identified and resolved accounts payable software bugs, collaborated with global colleagues to improve system reliability.",
      "Effectively handled 30 daily colleague requests, showcasing strong multitasking and prioritization skills in a dynamic work environment.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Self-employed",
    icon: front,
    iconBg: "#E6DEDD",
    date: "May 2022 - Present",
    points: [
      "Developing and maintaining web applications using React.js, Typescript and other related technologies.",
      "Implementing efficient data management and state handling in React applications, utilizing React Context and Redux for seamless user interactions and data flow.",
      "Creating pixel-perfect, responsive web interfaces based on Figma grid layouts for optimal user experiences across devices and screen sizes.",
      "Actively engaging in GitHub, making pull requests, and participating in code reviews for code quality, version control, and collaborative development practices.",
    ],
  },
];

const projects = [
  {
    name: "Midnight Weather Guide",
    description:
      "Weather App, which allows users to search for the weather conditions of any city in the world and provides current weather information as well as the 7-day forecast.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "sass",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
    ],
    image: weather,
    source_code_link: "https://github.com/kbekher/react-weather-app",
    demo_link: "https://kbekher.github.io/react-weather-app/",
  },
  {
    name: "GadgetHub",
    description:
      "Gadget Catalog with a friendly user interface, which allows users to browse the latest products, while enjoying a fast and responsive shopping experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: gadget,
    source_code_link: "https://github.com/kbekher/react_phone-catalog",
    demo_link: "https://kbekher.github.io/react_phone-catalog/",
  },
  {
    name: "2048 Game",
    description:
      "JavaScript-based 2048 game is built using a class-based structure, providing an interactive and challenging gaming experience.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },  
    ],
    image: game,
    source_code_link: "https://github.com/kbekher/2048_js_game",
    demo_link: "https://kbekher.github.io/2048_js_game/",
  },
];

const emailIds = {
  PUBLIC_KEY: 'J1VAP8MMyBRlLDJNs',
  TEMPLATE_ID: 'template_blwzgk9',
  SERVICE_ID: 'service_32gt2ja',
};

export { services, technologies, experiences, projects, emailIds };
