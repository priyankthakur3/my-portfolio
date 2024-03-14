"use client";
import React from "react";
import SectionHeader from "./SectionHeader";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      id="about"
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28 px-2"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeader>About Me</SectionHeader>
      <p className="mb-3">
        Driven and results-oriented{" "}
        <span className="font-medium">Software Engineer</span> with a passion
        for leveraging technology to solve complex problems. With a
        Master&apos;s degree in Computer Engineering from Stevens Institute of
        Technology and over four years of professional experience, I have honed
        my skills in Database Administration/Optimization, Software Engineering,
        and data analysis. I am Proficient in{" "}
        <span className="underline">Python, JavaScript, SQL, </span> and
        frameworks such as{" "}
        <span className="underline"> Spring Boot, Express.js and Django</span> I
        thrive in dynamic environments where I can apply my technical expertise
        to drive innovation and deliver tangible results. I{" "}
        <span className="underline">love</span> the feeling of finally figuring
        out a solution to a problem. My core stack is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        . I am always looking to learn new technologies. I am currently looking
        for a<span className="font-medium">&nbsp;full-time position</span> as a
        software developer.
      </p>
      <p>
        <span className="italic">When I am not coding</span>, I enjoy playing
        video games, watching movies, and playing video games. I also enjoy
        <span className="font-medium">&nbsp;learning new things</span>. I am
        currently learning about
        <span className="font-medium">&nbsp;history and philosophy</span>
      </p>
    </motion.section>
  );
}
