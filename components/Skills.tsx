"use client";
import React from "react";
import SectionHeader from "./SectionHeader";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

export default function Skills() {
  const fadeInVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * index,
      },
    }),
  };

  const { ref } = useSectionInView("Skills", 0.5);
  return (
    <section
      ref={ref}
      id="skills"
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center mt-10 sm:mb-40"
    >
      <SectionHeader>My Skills</SectionHeader>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {skillsData.map((skill, index) => (
          <motion.li
            key={index}
            className="bg-white border border-black/[0.1] rounded-xl px-5 py-3 flex flex-row items-center align-middle gap-[0.4rem] dark:bg-white/10 dark:text-white/80"
            variants={fadeInVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={index}
          >
            <skill.icon className="pt-1 text-lg h-6" />
            {skill.title}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
