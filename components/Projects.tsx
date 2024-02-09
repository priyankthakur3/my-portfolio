"use client";
import React, { useEffect } from "react";
import SectionHeader from "./SectionHeader";
import { projectsData } from "@/lib/data";
import Project from "./Project";
import { useInView } from "react-intersection-observer";
import { useActiveSessionContext } from "@/context/ActiveSession";
export default function Projects() {
  const { ref, inView } = useInView({ threshold: 0.5 });
  const { setActiveSession } = useActiveSessionContext();

  useEffect(() => {
    if (inView) {
      setActiveSession("Projects");
    }
  }, [inView]);
  return (
    <section ref={ref} id="projects" className="scroll-mt-20">
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
