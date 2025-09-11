import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import { PiFileSqlDuotone } from "react-icons/pi";
import { FaHtml5, FaJava, FaGit, FaCss3Alt, FaNodeJs, FaAmazon } from "react-icons/fa";
import { SiAmazonredshift } from "react-icons/si";
import { FaAws } from "react-icons/fa6";


import {
  SiTypescript,
  SiJavascript,
  SiAlteryx,
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
  SiTableau,
  SiPowerbi,
  SiJquery,
  SiApacheairflow,
  SiApachespark,
} from "react-icons/si";

import clickchaser from "@/public/clickchaser.png";
import campuscompass from "@/public/campuscompass.png";
import { Project, ExperienceType, SkillsType } from "./types";
import { useTranslation } from "./hooks";

export const getLinks = () => {
  // const t = useTranslation();

  return [
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
  ];
};
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
    title: "Data Engineer (Contract)",
    organisation: "Amazon",
    location: "Austin, TX",
    description: [
      "Currently I am building framework to efficiently migrate data from legacy EDW to Cloud Environment",
    ],
    icon: React.createElement(CgWorkAlt),
    date: "November 2024 - Present",
    type: "work",
  },
  {
    title: "Data Engineer",
    organisation: "JerseySTEM",
    location: "Florham Park, NJ",
    description: [
      "Worked as found Data Engineer, helped in setting up of data infrastructure and establish Data Goverance and Standards",
    ],
    icon: React.createElement(CgWorkAlt),
    date: "May 2024 - October 2024",
    type: "work",
  },
  {
    title: "Software Engineer",
    organisation: "JerseySTEM",
    location: "Florham Park, NJ",
    description: [
      "Built new microservices API endpoint for data extraction from Salesforce.",
    ],
    icon: React.createElement(CgWorkAlt),
    date: "Feb 2024 - May 2024",
    type: "work",
  },
  {
    title: "Graduate Student Assistant",
    organisation: "Stevens Institute of Technology",
    location: "Hoboken, NJ",
    description: [
      "Worked as Graduate Student Assistant in Food Prep Section",
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
      "I Led team of 4 Data Engineer, built/maintained Sales ETL pipelines, Conduct Code Reviews & implemented Data Quality Rules",
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
      "I optimizing Database Performance through SQL Doctor Program",
      "I also worked on automating manual tasks and built performance Monitoring Dashboards. Along with this I Developed SQL Procedures for access control to enforce Data Goverance Policies",
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
      "My Undergraduate Degree exposed me to basics of CS world ranging of Hardware Design to Web Development, UI/UX development, Object Oriented Programing, Operating System.",
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
  { title: "Apache Spark", icon: SiApachespark },
  { title: "Apache Airflow", icon: SiApacheairflow },
  { title: "Alteryx", icon: SiAlteryx },
  { title: "Tableau", icon: SiTableau },
  { title: "PowerBI", icon: SiPowerbi },
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
  { title: "Redshift", icon: SiAmazonredshift}, 
  { title: "AWS", icon:  FaAws}
] as const;

export const statsData = [
  {
    name: "LeetCode Solved Questions",
    img_link: "https://leetcard.jacoblin.cool/pthakur2?theme=dark&font=Ubuntu",
  },
  {
    name: "GitHub Stats: My Top Languages",
    img_link:
      "https://github-readme-stats.vercel.app/api/top-langs?username=Priyankthakur3&show_icons=true&locale=en&layout=compact&theme=radical&hide_progress=true",
  },
  {
    name: "GitHub Stats: My Account Stats",
    img_link:
      "https://github-readme-stats.vercel.app/api?username=PriyankThakur3&show_icons=true&theme=radical",
  },
] as const;
