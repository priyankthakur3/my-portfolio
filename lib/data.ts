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
} from "react-icons/si";

import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import clickchaser from "@/public/clickchaser.png";
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
  // {
  //   title: "CorpComment",
  //   description:
  //     "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
  //   tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
  //   imageUrl: corpcommentImg,
  // },
  // {
  //   title: "rmtDev",
  //   description:
  //     "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
  //   tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
  //   imageUrl: rmtdevImg,
  // },
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
  { title: "Teradata Database", icon: SiTeradata },
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
] as const;
