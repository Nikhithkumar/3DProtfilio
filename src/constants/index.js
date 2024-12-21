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
  mongodb,
  git,
  csharp,
  figma,
  docker,
  meta,
  starbucks,
  innomatics,
  nullclass,
  Neoteq,
  solera,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  NotesApp,
  stackoverflowclone,
  Api,
  wallero,
  CoffeApp,
  Yeldam,
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
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
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
    name: "MongoDB",
    icon: mongodb,
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
    name: "csharp",
    icon: csharp,
  },
];

const experiences = [
  {
    title: "Software Development Engineer",
    company_name: "Wallero",
    icon: wallero,
    iconBg: "#383E56",
    date: "November 2023 - Present",
    points: [
      "Developed and deployed mobile and web applications using React Native, MERN stack, and .NET Core, ensuring scalability and robustness.",
      "Collaborated with cross-functional teams to design and implement features for applications like Tracker, a task management solution, delivering user-friendly and efficient solutions.",
      "Optimized application performance and maintained coding standards for high-quality, maintainable code.",
      "Integrated APIs and backend services, ensuring seamless communication and functionality across platforms.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Neot-teq",
    icon: Neoteq,
    iconBg: "#E6DEDD",
    date: "Mar 2023 - November 2023",
    points: [
      "Developed and maintained Payzigo Consumer, a fintech mobile application, for iOS and Android platforms using the React Native tech stack.",
      "Integrated secure and efficient payment transaction features using RESTful APIs, ensuring seamless user experiences.",
    ],
  },
  {
    title: "Full stack Developer Intership",
    company_name: "Innomatics",
    icon: innomatics,
    iconBg: "#E6DEDD",
    date: "Mar 2023 - May 2023",
    points: [
      "As a full-stack developer, I have experience in both frontend and backend development, allowing me to create seamless and integrated web applications",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
  {
    title: "Analyst",
    company_name: "Solera",
    icon: solera,
    iconBg: "#E6DEDD",
    date: "July 2021 - Jan 2023",
    points: [
      "It’s is a Video Reviewing process. Ability to concentrate,review videos without distraction to resolution",
      "Ensure that appropriate steps were taken to resolve customers problems and providing feedback accordingly Maintains Quality and Performance",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Coffee App",
    description:
      "Coffee Shop App built with React Native and Zustand for state management. Browse and search for various coffees and coffee beans, view details like ingredients, roast level, ratings, and descriptions. Favorite items, add them to the cart, and place orders. Sit back, relax, and enjoy the experience!",
    tags: [
      {
        name: "reactnative",
        color: "blue-text-gradient",
      },
      {
        name: "zustand",
        color: "green-text-gradient",
      },
      {
        name: "ui/ux",
        color: "pink-text-gradient",
      },
    ],
    image: CoffeApp,
    source_code_link: "https://github.com/Nikhithkumar/Coffee_App",
  },
  {
    name: "Yeldam",
    description:
      "Proficient in integrating multiple APIs to develop dynamic and responsive web and mobile applications, including Yeldam — a platform built with MERN stack and React Native that helps users find healthy restaurants and organic stores nearby, with features like restaurant and store ratings.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "grey-text-gradient",
      },
      {
        name: "reactnative",
        color: "pink-text-gradient",
      },
    ],
    image: Yeldam,
    source_code_link: "https://www.yeldam.com/",
  },
  {
    name: "Stack Overflow Clone",
    description:
      "Developed a Stack Overflow-like website using the MERN stack, incorporating user authentication, dynamic content management, and a real-time Q&A system. Integrated a ChatBot for user support and a secure Payment Gateway with Razorpay to facilitate premium subscriptions and transactions.",
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
        name: "mongodb",
        color: "pink-text-gradient",
      },
      {
        name: "node js",
        color: "grey-text-gradient",
      },
    ],
    image: stackoverflowclone,
    source_code_link: "https://stack-overflow-nikhith.netlify.app/",
  },
 
];

export { services, technologies, experiences, testimonials, projects };
