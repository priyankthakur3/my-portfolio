import React from "react";
import SectionHeader from "./SectionHeader";
import { projectsData } from "@/lib/data";
import Project from "./Project";
export default function Projects() {
  return (
    <section>
      <SectionHeader>My Projects</SectionHeader>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
