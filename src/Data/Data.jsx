import { AiOutlineHtml5 } from "react-icons/ai";
import { BsFileCode } from "react-icons/bs";
import { HiOutlineCheckCircle } from "react-icons/hi";
import { CiViewTimeline } from "react-icons/ci";
import { BiCalendar } from "react-icons/bi";
import {
  jobifyImage,
  resume3,
  computerPhoto,
  MikeProfilePicture,
  fullstackAdminPic,
  proshopImage,
  promptopiaImage,
} from "../assets";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { TfiLinkedin } from "react-icons/tfi";
import { BsSpeaker } from "react-icons/bs";
import { CgGym } from "react-icons/cg";
import { BiBrain } from "react-icons/bi";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { TbBrandJavascript } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { SiStyledcomponents } from "react-icons/si";
import { SiMaterialui } from "react-icons/si";
import { VscTools } from "react-icons/vsc";
import { DiJqueryLogo } from "react-icons/di";
import { BsFillBootstrapFill } from "react-icons/bs";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiSpring } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { CgFigma } from "react-icons/cg";
import { DiGit } from "react-icons/di";
import { AiFillGithub } from "react-icons/ai";
import {SiPostman} from "react-icons/si";
import {TbBrandNextjs} from "react-icons/tb";

const year = new Date().getFullYear();
export const homePageData = {
  mainImg: computerPhoto,
  name: "Michael Boyd",
  about:
    " I'm a software developer based in Pennsylvania, and I have a passion for creating applications that live on the web ",
  description: "Software Developer",
  buttonText: "Contact Me",

  socialLinks: [
    {
      link: "https://github.com/mboyd3083",
      icon: <i className="uil uil-github-alt"></i>,
    },
    {
      link: "https://www.linkedin.com/in/michael-boyd-96b12812a",
      icon: <i className="uil uil-linkedin"></i>,
    },
  ],
};

export const aboutPageData = {
  title: "About Me",
  subtitle: "My Introduction",
  mainImg: MikeProfilePicture,
  buttonText: "Download Resume",
  resume: resume3,
  aboutDescription: {
    p1: "Hi, I'm Micheal - an aspiring software developer with a passion for creating innovative web experiences. I'm driven by creativity, constant learning, and a desire to leverage technology to solve problems. My goal is to craft web experiences that are both aesthetically pleasing and highly functional.",

    p2: "When I'm not coding, you can find me breaking a sweat at the gym or immersing myself in the world of audio engineering. I'm always eager to expand my skills and knowledge into new territories. Self-improvement is important to me, whether it's leveling up my abilities as a developer or discovering new hobbies.",
  },
  hobbies: [
    {
      icon: <BiBrain className="about__icon" />,
      title: "Learning",
      subtitle: `"The more that you learn, the more you'll know. The more that you know, the more places you'll go." - Dr. Seuss`,
    },
    {
      icon: <BsSpeaker className="about__icon" />,
      title: "Music",
      subtitle: `"Music is the art which is most nigh to tears and memories." - Oscar Wilde"`,
    },
    {
      icon: <CgGym className="about__icon" />,
      title: "Lifting",
      subtitle: `"The resistance that you fight physically in the gym and the resistance that you fight in life can only build a strong character." - Arnold Schwarzenegger`,
    },
  ],
  aboutSection:
    "Frontend developer, I create web pages with UI/UX user interface, I have years of experience and many clients are happy wit my work.",
};

export const skillsPageData = {
  title: "About Me",
  subtitle: "My Introduction",

  frontendSkills: {
    name: "Frontend",
    mainIcon: <AiOutlineHtml5 />,
    skillsList: [
      {
        skillName: "HTML",
        icon: <AiFillHtml5 />,
      },
      {
        skillName: "CSS",
        icon: <DiCss3 />,
      },
      {
        skillName: "JavaScript",
        icon: <TbBrandJavascript />,
      },
      {
        skillName: "React",
        icon: <FaReact />,
      },
      {
        skillName: "Redux",
        icon: <TbBrandJavascript />,
      },
      {
        skillName: "jQuery",
        icon: <DiJqueryLogo />,
      },
      {
        skillName: "Bootstrap",
        icon: <BsFillBootstrapFill />,
      },
      {
        skillName: "Tailwind css",
        icon: <SiTailwindcss />,
      },
      {
        skillName: "Styled Components",
        icon: <SiStyledcomponents />,
      },
      {
        skillName: "Material UI",
        icon: <SiMaterialui />,
      },
    ],
  },
  backendSkills: {
    name: "Backend",
    mainIcon: <BsFileCode />,
    skillsList: [
      {
        skillName: "Node.js",
        icon: <FaNodeJs />,
      },
      {
        skillName: "Express.js",
        icon: <SiExpress />,
      },
      {
        skillName: "Next.js",
        icon: <TbBrandNextjs />,
      },
      {
        skillName: "Spring",
        icon: <SiSpring />,
      },
      {
        skillName: "Java EE",
        icon: <FaJava />,
      },
      {
        skillName: "MongoDB",
        icon: <SiMongodb />,
      },
      {
        skillName: "MySQL",
        icon: <GrMysql />,
      },
      {
        skillName: "Sanity",
        icon: <HiOutlineCheckCircle />,
      },
    ],
  },
  otherSkills: {
    name: "Other",
    mainIcon: <VscTools />,
    skillsList: [
      {
        skillName: "C/C++",
        icon: <HiOutlineCheckCircle />,
      },
      {
        skillName: "Java",
        icon: <FaJava />,
      },
      {
        skillName: "Git",
        icon: <DiGit />,
      },
      {
        skillName: "Github",
        icon: <AiFillGithub />,
      },
      {
        skillName: "Figma",
        icon: <CgFigma />,
      },
      {
        skillName: "Postman",
        icon: <SiPostman />,
      },
      {
        skillName: "Render",
        icon: <HiOutlineCheckCircle />,
      },
    ],
  },
};

export const experiencePageData = {
  title: "Experience",
  subtitle: "Highlighting Accomplishments and Professional Growth",

  sectionTitle: "Timeline",
  sectionIcon: <CiViewTimeline />,

  calendarIcon: <BiCalendar className="uil uil-calendar-alt" />,

  experienceData: [
    {
      experienceTitle: "Computer Science Degree",
      experienceSubtitle: "Bloomsburg University of Pennsylvania",
      timeLine: "2017 - 2021",
    },
    {
      experienceTitle: "Data Systems Coordinator",
      experienceSubtitle: "Indiana County EMA",
      timeLine: "2022 - Present",
    },
  ],
};

export const workPageData = {
  title: "Portfolio",
  subtitle: "Check out my work",

  sourceTitle: "Source Code",
  demoTitle: "Live Demo",

  numOfWords: 20,

  projectsNav: [
    {
      name: "all",
    },
    {
      name: "frontend",
    },
    {
      name: "full stack",
    },
  ],

  projectsData: [
    {
      id: 1,
      image: jobifyImage,
      title: "Jobify",
      subTitle: "Job Tracking App",
      category: "full stack",
      description:
        "This is a full stack MERN application that helps users effectively manage their job search and interview process.Users can create an account, securely log in, and manage their profile information. Once logged in users have the ability to create new job entries, edit existing ones, and delete entries when necessary. The application incorporates search, filtering, and pagination functionalities, allowing users to easily navigate and locate specific job entries. The application also provides statistics, allowing users to gain insights and monitor their job search performance.",
      technologies: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Styled Components",
        "JWT",
      ],
      githubLink: "https://github.com/mboyd3083/mern-project-jobify",
      websiteLink: "https://jobify-job-tracker-4cyr.onrender.com",
    },
    {
      id: 2,
      image: proshopImage,
      title: "Proshop",
      subTitle: "Ecommerce App",
      category: "full stack",
      description:
        "This full-stack MERN (MongoDB, Express, React, Node.js) application utilizes Redux Toolkit for state management and handles requests to the backend. The project offers a wide range of functionalities, allowing users to register and log in, browse through a variety of products, add items to their shopping cart, and proceed to checkout using PayPal for secure transactions. Users have the ability to leave reviews for products they have purchased. Admins have the ability to create, update, and delete products.",
      technologies: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "React Bootstrap",
        "Redux Toolkit",
      ],
      githubLink: "https://github.com/mboyd3083/fullstack-ecommerce",
      websiteLink: "https://proshop-qfgs.onrender.com/",
    },
    {
      id: 3,
      image: fullstackAdminPic,
      title: "ECOMVISION",
      subTitle: "FullStack admin dashboard",
      category: "full stack",
      description:
        "This Fullstack Admin Dashboard project serves as a comprehensive management tool. This application is built using the MERN (MongoDB, Express, React, Node.js) stack, employing Redux Toolkit for efficient state management and handling backend requests. The Admin Dashboard project utilizes Material UI's extensive collection of components, including graphs and tables, to present data and statistics in a visually appealing and user-friendly manner. This enables administrators to easily interpret and make informed decisions based on the displayed information",
      technologies: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Material UI",
        "Redux Toolkit",
      ],
      githubLink: "https://github.com/mboyd3083/fullstack-dashboard-app",
      websiteLink: "https://fullstack-admin-ai9g.onrender.com",
    },
    {
      id: 4,
      image: promptopiaImage,
      title: "Promptopia",
      subTitle: "FullStack prompt sharing app",
      category: "full stack",
      description:
        "Promptopia is a fullstack Next.js web application built for sharing and discovering AI writing prompts. It allows users to login via Google OAuth and access a community feed for posting useful prompts. After logging in, users have full CRUD functionality to create posts sharing prompts to the public feed. Users have personal profile pages to manage their own prompts, with options to edit or delete their posts. Promptopia provides a platform for crowdsourcing top writing prompts across domains, enabling members to easily find inspiration for leveraging AI. The app is built with Next.js on the frontend, integrates OAuth for authentication, and connects to MongoDB to facilitate user accounts and prompt sharing.",
      technologies: [
        "React",
        "Next.js",
        "MongoDB",
        "OAuth 2.0",
        "Tailwind CSS",
      ],
      githubLink: "https://github.com/mboyd3083/promptopia",
      websiteLink: "https://promptopia-xi-eight.vercel.app/",
    },
  ],
};

export const contactPageData = {
  title: "Contact",
  subTitle: "Get in touch",

  contactCardTitle: "Talk to me",
  contactTitle: "Write me your project",

  contactCardData: [
    {
      icon: <AiOutlineMail className="contact__card-icon" />,
      contactType: "Email",
      info: "mboyd3083@gmail.com",
      link: "mailto:mboyd3083@gmail.com",
      linkText: "email me",
    },
    {
      icon: <AiOutlinePhone className="contact__card-icon" />,
      contactType: "Phone",
      info: "570-447-8186",
      link: "tel:570-447-8186",
      linkText: "call me",
    },
  ],

  contactFormData: {
    inputInfo: [
      {
        tag: "Name",
        name: "name",
        type: "text",
        placeHolder: "Insert your name",
      },
      {
        tag: "Mail",
        name: "email",
        type: "email",
        placeHolder: "Insert your email",
      },
    ],
    textArea: {
      tag: "Message",
      name: "message",
      cols: "30",
      rows: "10",
      placeHolder: "Your Message",
    },
    submitButton: {
      buttonText: "Send Message",
    },
  },

  contactSubmitData: {
    submitMessage: "Your message has been sent!",
  },
};

export const navbarData = {
  // navLogo: "MIKE BOYD",
  toggleIcon: <i className="uil uil-apps"></i>,

  socialLinks: [
    {
      link: "https://github.com/mboyd3083",
      icon: <i className="uil uil-github-alt"></i>,
    },
    {
      link: "https://www.linkedin.com/in/michael-boyd-96b12812a",
      icon: <i className="uil uil-linkedin"></i>,
    },
  ],

  navLinks: [
    {
      link: "#home",
      linkTitle: "Home",
      icon: <i className="uil uil-estate nav__icon"></i>,
    },
    {
      link: "#about",
      linkTitle: "About",
      icon: <i className="uil uil-user nav__icon"></i>,
    },
    {
      link: "#skills",
      linkTitle: "Skills",
      icon: <i className="uil uil-file-alt nav__icon"></i>,
    },
    {
      link: "#portfolio",
      linkTitle: "Work",
      icon: <i className="uil uil-scenery nav__icon"></i>,
    },
    {
      link: "#contact",
      linkTitle: "Contact",
      icon: <i className="uil uil-message nav__icon"></i>,
    },
  ],
};

export const footerData = {
  footerTitle: "Mike",

  navLinks: [
    {
      link: "#about",
      name: "About",
    },
    {
      link: "#skills",
      name: "Skills",
    },
    {
      link: "#portfolio",
      name: "Work",
    },
  ],

  socialLinks: [
    {
      link: "https://github.com/mboyd3083",
      icon: <i className="uil uil-github-alt"></i>,
    },
    {
      link: "https://www.linkedin.com/in/michael-boyd-96b12812a",
      icon: <TfiLinkedin />,
    },
  ],

  footer: `${year} by Michael Boyd. All Rights Reserved.`,
};
