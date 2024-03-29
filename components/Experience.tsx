"use client";
import React, { useContext } from "react";
import SectionHeader from "./SectionHeader";
import "react-vertical-timeline-component/style.min.css";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/ThemeContextProvider";

export default function Experience() {
  const { ref } = useSectionInView("Experience", 0.2);
  const { theme } = useTheme();

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeader>My Experience</SectionHeader>
      <VerticalTimeline lineColor="">
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              visible={true}
              icon={item.icon}
              date={item.date}
              position={item.type === "work" ? "left" : "right"}
              contentStyle={{
                background:
                  theme === "light" ? "white" : "rgba(255,255,255,0.05)",
                boxShadow: "none",
                border: "1px solid rgba(0,0,0,0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              iconStyle={{
                background:
                  theme === "light" ? "white" : "rgba(255,255,255,0.5)",
                fontSize: "1.5rem",
              }}
              contentArrowStyle={{
                borderRight:
                  theme === "light"
                    ? "0.4rem solid #9ca3af"
                    : "0.4rem solid rgba(255,255,255,0.5)",
              }}
              dateClassName="!font-normal"
            >
              <h2 className="font-semibold capitalize dark:text-white/90">
                {item.title}
              </h2>
              <h3 className="font-semibold capitalize">{item.organisation}</h3>
              <p className="!font-normal !mt-0">{item.location}</p>
              <div className="!mt-1 !font-normal text-gray-700 text-justify flex flex-col">
                {item.description.map((desc, index) => (
                  <p key={index} className="dark:text-white/75">
                    {desc}
                  </p>
                ))}
              </div>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
