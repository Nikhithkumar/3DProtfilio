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
    Api
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
      title: "React Native Developer",
      icon: mobile,
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
      name: "csharp",
      icon: csharp,
    },
  ];
  
  const experiences = [
    // {
    //   title: "React.js Developer",
    //   company_name: "Starbucks",
    //   icon: starbucks,
    //   iconBg: "#383E56",
    //   date: "March 2020 - April 2021",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
    {
      title: "React Native Developer",
      company_name: "Neot-teq",
      icon: Neoteq,
      iconBg: "#E6DEDD",
      date: "Mar 2023 - Present",
      points: [
        "As a App developer ,I have experience Develop and maintain mobile applications for iOS and Android using React Native framework",
        "In experience to work on Electronical payment transactions with restful API",
      ],
    },
    {
      title: "Full Stack Web Developer Intership",
      company_name: "Null Class",
      icon: nullclass,
      iconBg: "#383E56",
      date: "May 2023 - June 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "The chatbot feature allows users to receive automated assistance, enhancing their experience and providing quick answers to common queries. With the added layer of OTP authentication, we've ensured enhanced security and user trust",     
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
      name: "Notes Applications",
      description:
        "CRUD operation using React-Redux Developed a Notes App using React-Redux with CRUD functionality to manage user notes efficiently. ",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "redux",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: NotesApp,
      source_code_link: "https://courageous-fox-106eff.netlify.app/",
    },
    {
      name: "Stack Overflow Clone",
      description:
        "Developed a Stack Overflow website using MERN Stack and also integrated ChatBot and Payment Gateway with razor pay",
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
        }
      ],
      image: stackoverflowclone,
      source_code_link: "https://stack-overflow-nikhith.netlify.app/",
    },
    {
      name: "Counteries",
      description:
        "Proficient in integrating multiple APIs using React JS and JavaScript to create dynamic and responsive web applications. Some of them",
      tags: [
        {
          name: "reactjs",
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
      image: Api,
      source_code_link: "https://dazzling-pixie-5d6397.netlify.app/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
  