import { AiOutlineHtml5 } from "react-icons/ai";
import { BsFileCode } from "react-icons/bs";
import { HiOutlineCheckCircle } from "react-icons/hi";
import { CiViewTimeline } from "react-icons/ci";
import { BiCalendar } from "react-icons/bi";
import {
  jobifyImage,
  resume2,
  computerPhoto,
  MikeProfilePicture,
  // ecommerceImage,
  fullstackAdminPic,
  proshopImage
} from "../assets";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { TfiLinkedin } from "react-icons/tfi";
// import { profilePic } from "../assets";
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
  resume: resume2,
  aboutDescription: {
    p1: "My name is Micheal, and I am a software developer. I have always been fascinated by technology and the endless possibilities it brings to our world, especially in the realm of web development where innovation is happening at an incredible pace. As a developer, I love the challenge of creating seamless user experiences that are both visually stunning and highly functional.",

    p2: "In my free time, I enjoy exercising to stay physically fit and energized. I also have a keen interest in audio engineering, and love experimenting with sound and music. Above all, I have a passion for learning and constantly expanding my knowledge in various fields. I believe that continuous learning is key to personal growth and success in any career, and I am always eager to discover new things and challenge myself.",
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
    // {
    //   id: 1,
    //   image: adminProjectImage,
    //   title: "Admin Dashboard",
    //   category: "frontend",
    //   description:
    //     "This application demonstrates how a admin dashboard would look on the frontend. It offers tons of features such as, interactive graphs to display important data, a text editor page, a fully functional calendar page, and much more!",
    //   technologies: [
    //     "React",
    //     "JavaScript",
    //     "React",
    //     "JavaScript",
    //     "React",
    //     "JavaScript",
    //   ],
    //   githubLink: "https://github.com/mboyd3083",
    //   websiteLink: "https://github.com/mboyd3083",
    //   subTitle: "Dashboard",
    // },
    {
      id: 2,
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
      id: 3,
      image: proshopImage,
      title: "Proshop",
      subTitle: "Ecommerce App",
      category: "full stack",
      description:
        "This full-stack MERN (MongoDB, Express, React, Node.js) application utilizes Redux Toolkit for state management and handles requests to the backend. The project offers a wide range of functionalities, allowing users to register and log in, browse through a variety of products, add items to their shopping cart, and proceed to checkout using PayPal for secure transactions. Furthermore, users have access to their order history, enabling them to review their past purchases. The application also allows users to leave reviews for products, and admins can create new products, update existing products, and delete products.",
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
      id: 4,
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
