import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    Firebase,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    Youtube,
    Ipod,
    Spice,
    Todo,
    threejs,
    enshrine,
    Bharat,
    Oasis,
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
      title: "React.js Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Full Stack Web Developer",
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
      name: "Firebase",
      icon: Firebase,
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
   
  ];
  
  const experiences = [
    {
      title: "Web Developer",
      company_name: "Enshrine Global Systems",
      icon: enshrine,
      iconBg: "white",
      date: "September 2023 - November 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full Stack Web Developer",
      company_name: "Bharat Intern",
      icon: Bharat,
      iconBg: "#E6DEDD",
      date: "November 2023 - December 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Oasis InfoBytes",
      icon: Oasis,
      iconBg: "white",
      date: "November 2023 - December 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
   
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful , but Akash proved me wrong.",
      name: "Sagar",
      designation: "Account",
      company: "Private Organization",
      image: "https://randomuser.me/api/portraits/men/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Akash does.",
      name: "Chris Brown",
      designation: "Dev op",
      company: "Private Organization",
      image: "https://randomuser.me/api/portraits/women/5.jpg",
    },
    {
      testimonial:
        "After Akash optimized our website We can't thank them enough! Good Developer and Also A Teacher",
      name: "Pooja",
      designation: "Student",
      company: "Private Organization",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Youtube Clone",
      description:
      "YouTube clone created using React, Tailwind CSS, and powered by the YouTube Data API through Rapid API. It allows users to browse and search for YouTube videos, view video details, and enjoy a seamless video watching experience.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "Rapid_Api",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: Youtube,
      source_code_link: "https://github.com/125Akash/akashTube",
    },
    {
      name: "Spice_Sailor",
      description:
        "SpiceSailor Recipe Finder is a delightful React application designed to assist you in your culinary endeavors. Whether you're an experienced chef or a kitchen novice",
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
          name: "Tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: Spice,
      source_code_link: "https://github.com/125Akash/Receipe-Finder",
    },
    {
      name: "Ipod_Music",
      description:
        "This project is a fun and interactive way to experience the nostalgia of the classic iPod Mini while adding modern features. With this project, you can listen to some predefined music, change themes, explore your favorite artists, and manage your music collection",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "Html and Css",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: Ipod,
      source_code_link: "https://github.com/125Akash/Ipod_Project"
    },

    {
      name: "Todo_App",
      description:
        "Todo application built using React for the frontend, MongoDB for the database, and Node.js for the backend. The application includes user authentication (login, register, and logout) and CRUD (Create, Read, Update, Delete) functionality for managing todos.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "MongoDb",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind",
          color: "pink-text-gradient",
        },
        {
          name: "Node.js & Express",
          color: "pink-text-gradient",
        },
      ],
      image: Todo,
      source_code_link: "https://github.com/125Akash/TodoApp-"
    }
  ];
  
  export { services, technologies, experiences, testimonials, projects };