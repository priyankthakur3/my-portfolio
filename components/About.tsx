"use client";

import React, { useState, useEffect } from "react";
import SectionHeader from "./SectionHeader";
import { motion } from "framer-motion";
import { useSectionInView, useTranslation } from "@/lib/hooks";

export default function About() {
  const [mounted, setMounted] = useState(false); // Track if component is mounted
  const t = useTranslation(); // Use the translation hook
  const { ref } = useSectionInView("About");

  // Set mounted to true after the component mounts
  useEffect(() => {
    setMounted(true);
  }, []);

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
        {/* Conditionally render the translation only after component mounts */}
        {mounted && <h1>{t("welcome")}</h1>}
        Driven and results-oriented{" "}
        <span className="font-medium">Data Engineer</span> with a passion
        for leveraging technology to solve complex problems. With a
        Master&apos;s degree in Computer Engineering from Stevens Institute of
        Technology and over four years of professional experience, I have honed
        my skills in Database Optimization, Software Engineering,
        and data analysis. I am proficient in{" "}
        <span className="underline">Python, JavaScript, SQL </span> and
        frameworks such as{" "}
        <span className="underline"> FastAPI, Express.js and Apache Spark</span>.
        I specialize in migrating legacy pipelines into cloud native architecture. I{" "}
        <span className="underline">love</span> the feeling of finally figuring
        out a solution to a problem.I am always looking to learn new technologies. I am currently looking
        for a<span className="font-medium">&nbsp;full-time position</span> as a
        Data Engineer.
      </p>
      <p>
        <span className="italic">When I am not coding</span>, I enjoy playing
        video games, watching movies, and playing video games. I also enjoy
        <span className="font-medium">&nbsp;learning new things</span>
      </p>
    </motion.section>
  );
}
