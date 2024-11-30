import React from "react";
import { FaReact } from "react-icons/fa";
import { FaComputer } from "react-icons/fa6";
import { FcManager } from "react-icons/fc";
import { LuGraduationCap } from "react-icons/lu";
import { BsFillHouseFill } from "react-icons/bs";
import { IoFastFood } from "react-icons/io5";
import { IoInformationCircle } from "react-icons/io5";
import csswebsiteImg from "@/public/CSS-websiteImg.png";
import ticketImgs from "@/public/ticketImg.png";
import portfolioSegniImg from "@/public/portfolio-segnit.png";
import pokedexImg from "@/public/pokedexImg.png";
import newRozKababImgs from "@/public/newRozKababImg.png";
import chiefLanudaryImg from "@/public/theChiefLanudary.png";
import interactPhysicsImg from "@/public/InteractivePhysics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Bachelor of Arts – Computer Science",
    location: "Concordia College, Moorhead, MN",
    description:
      "I will graduate in May 2025 with a major in Computer Science and a concentration in Computing, along with a minor in Mathematics and Data Analytics.",
    icon: React.createElement(LuGraduationCap),
    date: "Aug. 2021 –  Dec 2025",
  },
  {
    title: "Software Engineer Intern",
    location: "Marvin Windows, Fargo, ND",
    description: `
      Phase II: System Programming.
      - Developed 5 advanced GUI interfaces using Ignition and Python, enhancing system control and reducing operator errors by 15%.
      - Implemented a centralized MS SQL Server data repository, optimizing queries through indexing and stored procedures, resulting in a 30% improvement in work efficiency.
      - Designed and implemented a recut feature that verifies if parts are cut correctly and redirects them for proper cutting if needed, reducing material waste and saving the company over $100,000 annually.
      
      Phase I: Full-Stack Software Development.
      - Created an end-of-shift reporting tool that reduced report generation time by 40% and improved data accuracy, providing supervisors with a production analysis and daily summary via email.
      - Collaborated with Design and Product teams to develop a machine metrics tool using APIs, C#, SQL, Azure, and JavaScript with React to track and display machine status on production line TV boards, improving operational efficiency by 45%.
    `,
    icon: React.createElement(FaReact),
    date: "May 2023 - Present",
  },
  {
    title: "IT Technician",
    location: "Concordia ITS, Moorhead, MN",
    description: `
      - Showcased technical proficiency by addressing hardware, software, and Wi-Fi connectivity issues.
      - Documented and troubleshot for 10 to 15 students and faculty weekly.
      - Delivered exceptional online and phone support to customers, building strong connections and swiftly resolving their technical issues.
    `,
    icon: React.createElement(FaComputer),
    date: "Aug. 2023 - May 2024",
  },    
  {
    title: "Project Manager - Computer Science Society Club",
    location: "Concordia College, Moorhead, MN",
    description:
      "- As a Project Manager in the Computer Science Club, I led and managed technology projects, collaborating with members to define goals and allocate tasks. - My commitment to open communication played a pivotal role in cultivating a culture of transparency and collaboration. - I also facilitated workshops and training sessions to mentor and support fellow members, promoting skill development and knowledge sharing.",
    icon: React.createElement(FcManager),
    date: "May 2023 - Present",
  },
  {
    title: "Resident Assistant",
    location: "Concordia College, Moorhead, MN",
    description:
      "- Fostered a positive campus community by organizing engaging events promoting inclusivity and diversity, while serving as a mentor and role model for ethnically diverse students. - Managed various responsibilities, including rounds, event planning, emergencies, and administrative tasks, effectively prioritizing to meet all deadlines.",
    icon: React.createElement(BsFillHouseFill),
    date: "Aug. 2022 - May 2023",
  },
  {
    title: "Student Manager - Dinning Service",
    location: "Concordia College, Moorhead, MN",
    description:
      "- Managed and supervised a team of dining service staff, overseeing daily operations and staff scheduling. - Improved team performance and morale through effective leadership and training. - Optimized resource allocation and controlled budgets, resulting in improved efficiency and cost savings.",
    icon: React.createElement(IoFastFood),
    date: "Aug. 2021 –  May 2022",
  },
  {
    title: "Campus Information and Public Safety",
    location: "Concordia College, Moorhead, MN",
    description:
      "- I monitored and responded to radio and emergency systems to ensure a safe campus environment. - I also welcomed visitors, answered their questions, and provided assistance as needed. - I played a role in organizing and maintaining files and records, ensuring they were updated as necessary.",
    icon: React.createElement(IoInformationCircle),
    date: "Aug. 2023 – Present",
  },
] as const;

export const projectsData = [
  {
    title: "Pokdex App",
    description:
      "A full-stack Pokedex web app that lets users browse Pokémon, view them with pagination, filter results by various parameters, and capture Pokémon. ",
    tags: ["Next.js", "Spring Boot (Java)", "PostgreSQL", "Docker", "GitLab CI/CD"],
    imageUrl: pokedexImg,
    linkUrl: "https://segnitulu.vercel.app",
  },
  {
    title: "Personal Portfolio",
    description:
      "I crafted my portfolio website, prioritizing front-end development to deliver a visually captivating and interactive platform that showcases my work, skills, and passion for web design. ",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: portfolioSegniImg,
    linkUrl: "https://segnitulu.vercel.app",
  },
  {
    title: "Computer Science Society Club Website",
    description:
      "Visually appealing and highly functional user interface and improved website performance by reducing load times for a smoother browsing experience.",
    tags: ["React", "TypeScript", "Next.js", "Email.js", "Chakra UI"],
    imageUrl: csswebsiteImg,
    linkUrl: "https://css-website-staging.vercel.app",
  },
  {
    title: "Ticketing App",
    description:
      "Utilizing a robust database and API calls, my Ticketing App integrates frontend and backend effortlessly. Experience streamlined event management with intuitive design and efficient functionality.",
    tags: ["React", "TypeScript", "Next.js", "MonogoDB", "Tailwind"],
    imageUrl: ticketImgs,
    linkUrl: "https://ticketing-app-nu.vercel.app",
  },
  {
    title: "New Roz Kabab Restaurant Website",
    description:
      "Designed and developed a 15-page restaurant website with a responsive front-end and integrated back-end functionalities.",
    tags: ["HTML", "CSS", "JavaScript", "SQL", "PHP"],
    imageUrl: newRozKababImgs,
    linkUrl: "http://newroz-kebab.infinityfreeapp.com/?i=1",
  },
  {
    title: "Interactive Physics Quiz",
    description:
      "A Windows app, built with Java and GUI on NetBeans, simulates a quiz. It’s designed to make physics learning fun and engaging for middle schoolers.",
    tags: ["Java", "GUI"],
    imageUrl: interactPhysicsImg,
    linkUrl: "https://github.com/Segnit11/Interactive-Physics",
  },
  {
    title: "The Chiefs Laundary Android Mobile App",
    description:
      "Driven by a love for cooking, I created an Android game to challenge skills in food prep, time management, and decision-making.",
    tags: ["Kotlin", "Grade", "Android Studio", "XML"],
    imageUrl: chiefLanudaryImg,
    linkUrl: "https://github.com/Segnit11/The-Chefs-Laundry-Android-Mobile-App",
  },
] as const;

export const skillsData = [
  "Java",
  "Python",
  "Kotlin",
  "JavaScript (React)",
  "JavaScript (Angular)",
  "Ruby",
  "C#",
  "C++",
  "C",
  "Assembly",
  "PHP",
  "SQL",
  "Next.js",
  "React",
  "Angular",
  "Spring Boot",
  "Node.js",
  "Android Studio",
  "HTML5",
  "CSS",
  "Bootstrap",
  "PostgreSQL",
  "MS SQL",
  "MongoDB",
  "Firebase",
  "AWS",
  "Azure",
  "Docker",
  "Git",
  "GitHub",
  "GitLab CI/CD",
  "Gradle",
  "Postman",
  "Jira",
  "Confluence"
] as const;

