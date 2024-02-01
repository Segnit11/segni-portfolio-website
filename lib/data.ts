import React from "react";
import { FaReact } from "react-icons/fa";
import { FaComputer } from "react-icons/fa6";
import { FcManager } from "react-icons/fc";
import { LuGraduationCap } from "react-icons/lu";
import { BsFillHouseFill } from "react-icons/bs";
import { IoFastFood } from "react-icons/io5";
import { IoInformationCircle } from "react-icons/io5";
import corpcommentImg from "@/public/corpcomment.png";
import csswebsiteImg from "@/public/CSS-websiteImg.png";
import theChiefLanudaryImg from "@/public/theChiefLanudary.png";
import interactivPhysicsImg from "@/public/InteravtivePhysics.png";
import ticketImgs from "@/public/ticketImg.png";
import portfolioSegniImg from "@/public/portfolio-segnit.png";
import newRozKababImgs from "@/public/newRozKababImg.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

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
    date: "Aug. 2021 –  May 2025",
  },
  {
    title: "Full-Stack Software Developer Intern",
    location: "Marvin Windows, Fargo, ND",
    description:
      "Led  mission-critical web application, resulting in significant efficiency gains across five facilities. Demonstrated expertise in C#, ASP.NET Core, .NET Framework, and React.js to create and maintain efficient API routes, ensuring seamless communication between system components. Successfully identified and resolved complex production issues in both React.js and .NET applications, leading to a noticeable improvement in system performance and heightened user satisfaction.",
    icon: React.createElement(FaReact),
    date: "May 2023 - Present",
  },
  {
    title: "IT Student Technician",
    location:
      "Information Technology Solution Center, Concordia College, Moorhead, MN",
    description:
      "I demonstrated exceptional problem-solving abilities by efficiently resolving a wide range of technical issues, consistently delivering effective solutions to optimize system performance. Additionally, I was responsible for installing and repairing minor software and hardware problems, ensuring minimal downtime and enhancing functionality for users. Providing exceptional online and phone support to customers was a key aspect of my role, where I consistently offered exemplary customer service, established strong connections, and swiftly resolved their technical concerns. ",
    icon: React.createElement(FaComputer),
    date: "Aug. 2023 - Present",
  },
  {
    title: "Project Manager - Computer Science Society Club",
    location: "Concordia College, Moorhead, MN",
    description:
      "As a Project Manager in the Computer Science Club, I led and managed technology projects, collaborating with members to define goals and allocate tasks. My commitment to open communication played a pivotal role in cultivating a culture of transparency and collaboration. I also facilitated workshops and training sessions to mentor and support fellow members, promoting skill development and knowledge sharing.",
    icon: React.createElement(FcManager),
    date: "May 2023 - Present",
  },
  {
    title: "Resident Assistant",
    location: "Concordia College, Moorhead, MN",
    description:
      "Fostered a positive campus community by organizing engaging events promoting inclusivity and diversity, while serving as a mentor and role model for ethnically diverse students. Managed various responsibilities, including rounds, event planning, emergencies, and administrative tasks, effectively prioritizing to meet all deadlines.",
    icon: React.createElement(BsFillHouseFill),
    date: "Aug. 2022 - May 2023",
  },
  {
    title: "Student Manager - Dinning Service",
    location: "Concordia College, Moorhead, MN",
    description:
      "Managed and supervised a team of dining service staff, overseeing daily operations and staff scheduling. Improved team performance and morale through effective leadership and training. Optimized resource allocation and controlled budgets, resulting in improved efficiency and cost savings.",
    icon: React.createElement(IoFastFood),
    date: "Aug. 2021 –  May 2022",
  },
  {
    title: "Campus Information and Public Safety",
    location: "Concordia College, Moorhead, MN",
    description:
      "I monitored and responded to radio and emergency systems to ensure a safe campus environment. I also welcomed visitors, answered their questions, and provided assistance as needed. Additionally, I played a role in organizing and maintaining files and records, ensuring they were updated as necessary.",
    icon: React.createElement(IoInformationCircle),
    date: "Aug. 2023 – Present",
  },
] as const;

export const projectsData = [
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
    title: "The Chiefs Laundary Android Mobile App",
    description:
      "Driven by a love for cooking, I created an Android game to challenge skills in food prep, time management, and decision-making.",
    tags: ["Kotlin", "Grade", "Android Studio", "XML"],
    imageUrl: theChiefLanudaryImg,
    linkUrl: "https://github.com/Segnit11/The-Chefs-Laundry-Android-Mobile-App",
  },
  {
    title: "Interactive Physics Quiz",
    description:
      "A Windows app, built with Java and GUI on NetBeans, simulates a quiz. It’s designed to make physics learning fun and engaging for middle schoolers.",
    tags: ["Java", "GUI"],
    imageUrl: interactivPhysicsImg,
    linkUrl: "https://github.com/Segnit11/Interactive-Physics",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Three.js",
  "Git",
  "Github",
  "Tailwind",
  "MongoDB",
  "Redux",
  "SQL",
  "PostgreSQL",
  "Java",
  "C#",
  "PHP",
  "Python",
  "Kotlin",
  "Docker",
  "Postman",
  "Framer Motion",
] as const;
