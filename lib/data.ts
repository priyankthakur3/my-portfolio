import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import { PiFileSqlDuotone } from "react-icons/pi";
import { FaHtml5, FaJava, FaGit, FaCss3Alt, FaNodeJs } from "react-icons/fa";

import {
  SiTypescript,
  SiJavascript,
  SiTeradata,
  SiMongodb,
  SiPostgresql,
  SiPython,
  SiReact,
  SiNextdotjs,
  SiExpress,
  SiTailwindcss,
  SiDjango,
  SiFastapi,
  SiJquery,
  SiApacheairflow,
  SiApachespark,
} from "react-icons/si";

import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import clickchaser from "@/public/clickchaser.png";
import campuscompass from "@/public/campuscompass.png";
import { Project, ExperienceType, SkillsType } from "./types";

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
    name: "Stats",
    hash: "#stats",
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

export const experiencesData: ExperienceType[] = [
  {
    title: "Software Engineer Intern",
    organisation: "JerseySTEM",
    location: "Florham Park, NJ",
    description: [
      "Currently I am working as a Intern Leading development of API endpoints using Google App Scripts, OAuth to integrate Salesforce & Chrome Extensions",
    ],
    icon: React.createElement(CgWorkAlt),
    date: "Feb 2024 - Present",
    type: "work",
  },
  {
    title: "Graduate Student Assistant - Food Prepartion",
    organisation: "Stevens Institute of Technology",
    location: "Hoboken, NJ",
    description: [
      "I worked as a Graduate Student Assistant in Multilingual Kitchen, leveraging strong communication & time management skills balancing work and Student Life",
    ],
    icon: React.createElement(CgWorkAlt),
    date: "Sept 2023 - Dec 2023",
    type: "work",
  },
  {
    title: "Master of Engineering, Computer Engineering",
    organisation: "Stevens Institute of Technology",
    location: "Hoboken, NJ",
    description: [
      "I graduated with GPA: 3.75",
      "I took Courses Web Programing, Data Acquistion modeling & Analysis, Engineering Python, Internet of Things",
    ],
    icon: React.createElement(LuGraduationCap),
    date: "Jan 2022 - Dec 2023",
    type: "edu",
  },
  {
    title: "Data Engineer",
    organisation: "Teradata Corporation",
    location: "Mumbai, India",
    description: [
      "I worked as a Data Engineer wherein I was responsible to build/maintain ETL pipelines, Conduct Code Reviews & implemented Data Quality Rules",
      "I also Led team of 4 member, built & maintained SOPs for addressing common & new Data Issues",
    ],
    icon: React.createElement(CgWorkAlt),
    date: "Aug 2019 - Jan 2022",
    type: "work",
  },
  {
    title: "Junior Technical Associate",
    organisation: "Teradata Corporation",
    location: "Mumbai, India",
    description: [
      "My Primary responsibilites was optimizing Database Performance through SQL Tuning & Automating manual reporting generation task",
      "I also built performance Monitoring Dashboards & SQL Procedures for access control to comply with Data Goverance Policies",
    ],
    icon: React.createElement(CgWorkAlt),
    date: "Aug 2018 - Jul 2019",
    type: "work",
  },
  {
    title: "Bachelor of Engineering, Computer Engineering",
    organisation: "University of Mumbai",
    location: "Mumbai, India",
    description: [
      "From mathematics, physics, and then computer hardware knowledge, to C, data structure & algos, SQL, Java, Python, Agile Development, UI/UX design and web development, I learned a lot",
    ],
    icon: React.createElement(LuGraduationCap),
    date: "Aug 2014 - May 2018",
    type: "edu",
  },
] as const;

export const projectsData: Project[] = [
  {
    title: "Campus Compass",
    description:
      "An online site to help Stevens Students notify their current lectures and display all events occuring on campus",
    tags: [
      "Express.js",
      "Leaflet.js",
      "jQuery",
      "MongoDB",
      "Handlebars",
      "turf.js",
    ],
    imageUrl: campuscompass,
  },
  {
    title: "Click Chaser",
    description: "A public web app for Counting clicks.",
    tags: ["React.js", "Tailwind"],
    imageUrl: clickchaser,
  },
];

export const skillsData: SkillsType[] = [
  { title: "Python", icon: SiPython },
  { title: "Java", icon: FaJava },
  { title: "SQL", icon: PiFileSqlDuotone },
  { title: "JavaScript", icon: SiJavascript },
  { title: "TypeScript", icon: SiTypescript },
  { title: "Teradata", icon: SiTeradata },
  { title: "MongoDB", icon: SiMongodb },
  { title: "PostgreSQL", icon: SiPostgresql },
  { title: "HTML", icon: FaHtml5 },
  { title: "CSS", icon: FaCss3Alt },
  { title: "React", icon: SiReact },
  { title: "Next.js", icon: SiNextdotjs },
  { title: "Node.js", icon: FaNodeJs },
  { title: "Express.js", icon: SiExpress },
  { title: "Git", icon: FaGit },
  { title: "Tailwind", icon: SiTailwindcss },
  { title: "Django", icon: SiDjango },
  { title: "FastAPI", icon: SiFastapi },
  { title: "jQuery", icon: SiJquery },
  { title: "Apache Spark", icon: SiApachespark },
  { title: "Apache Airflow", icon: SiApacheairflow },
] as const;

export const statsData = [
  {
    name: "LeetCode Solved Questions",
    img_link:
      "https://leetcard.jacoblin.cool/priyankthakur3?theme=dark&font=Ubuntu",
  },
  {
    name: "GitHub Stats: My Top Languages",
    img_link:
      "https://github-readme-personal.vercel.app/api/top-langs?username=Priyankthakur3&show_icons=true&locale=en&layout=compact&theme=radical&hide_progress=true",
  },
  {
    name: "GitHub Stats: My Account Stats",
    img_link:
      "https://github-readme-personal.vercel.app/api?username=PriyankThakur3&show_icons=true&theme=radical",
  },
] as const;
