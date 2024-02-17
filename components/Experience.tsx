"use client";
import React from "react";
import SectionHeader from "./SectionHeader";
import "react-vertical-timeline-component/style.min.css";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";

export default function Experience() {
  const { ref } = useSectionInView("Experience", 0.2);
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
                background: "#f3f4f6",
                boxShadow: "none",
                border: "1px solid rgba(0,0,0,0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              iconStyle={{
                background: "white",
                fontSize: "1.5rem",
              }}
              contentArrowStyle={{ borderRight: "0.4rem solid #9ca3af" }}
              dateClassName="!font-normal"
            >
              <h2 className="!font-semibold !capitalize">{item.title}</h2>
              <h3 className="!font-semibold !capitalize">
                {item.organisation}
              </h3>
              <p className="!font-normal !mt-0">{item.location}</p>
              <div className="!mt-1 !font-normal text-gray-700 text-justify flex flex-col">
                {item.description.map((desc, index) => (
                  <p key={index}>{desc}</p>
                ))}
              </div>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
