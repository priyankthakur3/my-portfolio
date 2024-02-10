import { StaticImageData } from "next/image";
import { links } from "./data";
import { IconBaseProps, IconType } from "react-icons";

export type Project = {
  title: string;
  description: string;
  tags: string[];
  imageUrl: StaticImageData; // Assuming imageUrl is a string
};

export type SectionName = (typeof links)[number]["name"];

export type ActiveSectionProviderProps = {
  children: React.ReactNode;
};
export type ActiveSectionContextProps = {
  activeSession: SectionName;
  setActiveSession: React.Dispatch<React.SetStateAction<SectionName>>;
  timeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};

export type ExperienceType = {
  title: String;
  organisation: String;
  location: String;
  description: Array<string>;
  icon: React.FunctionComponentElement<IconBaseProps>;
  date: string;
  type: "edu" | "work";
};

export type SkillsType = {
  title: string;
  icon: IconType;
};
