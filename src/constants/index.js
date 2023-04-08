import {
  codered,
  dalle,
  acuity,
  flutter,
  jinja,
  bootstrap,
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
    figma,
    docker,
    meta,
    starbucks,
    oculus,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    spit,
    django,
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
      title: "Flutter Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Screenplay Writer",
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
      name: "Bootstrap",
      icon: bootstrap,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
   
    {
      name: "JavaScript",
      icon: javascript,
    },
 
    {
      name: "React JS",
      icon: reactjs,
    },

    {
      name: "Jinja",
      icon: jinja,
    },

    {
      name: "Django",
      icon: django,
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
      name: "flutter",
      icon: flutter,
    },
  ];
  
  const experiences = [
    {
      title: "Technical Head",
      company_name: "Oculus S.P.I.T",
      icon: oculus,
      iconBg: "#383E56",
      date: "November 2022 - March 2023",
      points: [
        "Collaborated with a five person team to develop an Online escape room game which was hosted on web.The game required technical knowledge to pass each level and had a creative story line and was one of the most praised events of Oculus 2023",
        "It used Django as it's back-end framework and Jinja was used for the front-end. The database used by SQLite.It was hosted on railway appsusing Github",
      ],
    },
    {
      title: "Software Developer",
      company_name: "S.P.I.T",
      icon: spit,
      iconBg: "#E6DEDD",
      date: "Mar-2023 - Present",
      points: [
        "Collaborating with a eleven person team to develop a full fledged college admission and fee payment portal.The website will be deployed on college server",
        "The frontend of the website will be made using React Js and the backend will be managed using Next Js and Node Js .The Database used will be Go. The deployment process involves the creation and usage of Linux box.",
      ],
    },
  //   {
  //     title: "Web Developer",
  //     company_name: "Shopify",
  //     icon: shopify,
  //     iconBg: "#383E56",
  //     date: "Jan 2022 - Jan 2023",
  //     points: [
  //       "Developing and maintaining web applications using React.js and other related technologies.",
  //       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //       "Implementing responsive design and ensuring cross-browser compatibility.",
  //       "Participating in code reviews and providing constructive feedback to other developers.",
  //     ],
  //   },
  //   {
  //     title: "Full stack Developer",
  //     company_name: "Meta",
  //     icon: meta,
  //     iconBg: "#E6DEDD",
  //     date: "Jan 2023 - Present",
  //     points: [
  //       "Developing and maintaining web applications using React.js and other related technologies.",
  //       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //       "Implementing responsive design and ensuring cross-browser compatibility.",
  //       "Participating in code reviews and providing constructive feedback to other developers.",
  //     ],
  //   },
  // ]
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
      name: "Acuity",
      description:
        "Web-Based application that helps students to manage their assignments, projects , budget attendance and much more.",
      tags: [
        {
          name: "Django",
          color: "blue-text-gradient",
        },
        {
          name: "dbSqlite",
          color: "green-text-gradient",
        },
        {
          name: "Jinja",
          color: "pink-text-gradient",
        },
      ],
      image: acuity,
      source_code_link: "https://github.com/Anish241/Acuity",
    },
    {
      name: "Code Red",
      description:
        "An Online escape room experience.It required technical knowledge to pass each level and had a creative story line and clock ticking.",
      tags: [
        {
          name: "Django",
          color: "blue-text-gradient",
        },
        {
          name: "dbSqlite",
          color: "green-text-gradient",
        },
        {
          name: "Jinja",
          color: "pink-text-gradient",
        },
      ],
      image: codered,
      source_code_link: "https://github.com/Hitstar53/Code-Red",
    },
    {
      name: "DALL-E 2.0",
      description:
        "A DALL-E clone using opne AI API to generate images from text prompts made using MERN stack",
      tags: [
        {
          name: "nodejs",
          color: "blue-text-gradient",
        },
        {
          name: "Mongodb",
          color: "green-text-gradient",
        },
        {
          name: "React",
          color: "pink-text-gradient",
        },
      ],
      image: dalle,
      source_code_link: "https://github.com/Anish241/DALLE-2.0",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };