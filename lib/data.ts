import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { StaticImageData } from "next/image";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import clickchaser from "@/public/clickchaser.png";

type imageUrl = string;
interface Project {
  title: string;
  description: string;
  tags: string[];
  imageUrl: StaticImageData; // Assuming imageUrl is a string
}
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

export const experiencesData = [
  {
    title: "Master's In Computer Engineering",
    location: "Hoboken, NJ",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Data Engineer",
    location: "Mumbai, India",
    description:
      "I worked as a data Engineer developer for 3 years in 1 job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "Aug 2019 - Jan 2022",
  },
  {
    title: "Junior Technical Associate",
    location: "Mumbai, India",
    description: " aslghdsloghsdnhgpsind",
    icon: React.createElement(FaReact),
    date: "Aug 2018 - Jul 2019",
  },
  {
    title: "Bachelor's In Computer Engineering",
    location: "Mumbai, India",
    description: ".",
    icon: React.createElement(LuGraduationCap),
    date: "Aug 2014 - May 2018",
  },
] as const;

export const projectsData: Project[] = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Click Chaser",
    description: "A public web app for Counting clicks.",
    tags: ["React.js", "Tailwind"],
    imageUrl: clickchaser,
  },
];

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Teradata Database",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;
