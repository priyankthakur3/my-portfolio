"use client";
import React, { useRef } from "react";
import SectionHeader from "./SectionHeader";
import { useSectionInView } from "@/lib/hooks";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function Stats() {
  const { ref } = useSectionInView("Stats", 0.8);
  const ref2 = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref2,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  const opactityProgress = useTransform(scrollYProgress, [0, 1], [0.4, 1]);

  return (
    <section ref={ref} id="stats" className="mb-[10rem] scroll-mt-28">
      <SectionHeader>My Stats</SectionHeader>
      <motion.div
        className="flex flex-col gap-3 justify-center"
        style={{
          scale: scaleProgress,
          opacity: opactityProgress,
        }}
        ref={ref2}
      >
        <Image
          src={
            "https://github-readme-personal.vercel.app/api/top-langs?username=Priyankthakur3&show_icons=true&locale=en&layout=compact&theme=radical&hide_progress=true"
          }
          alt="Most Used Languages Github"
          width={400}
          height={400}
          quality={95}
        />
        <Image
          src={
            "https://leetcard.jacoblin.cool/priyankthakur3?theme=dark&font=Ubuntu"
          }
          alt="LeetCode stats"
          width={400}
          height={400}
          quality={95}
        />
        <Image
          src={
            "https://github-readme-personal.vercel.app/api?username=PriyankThakur3&show_icons=true&theme=radical"
          }
          alt="Github stats"
          width={400}
          height={400}
          quality={95}
        />
      </motion.div>
    </section>
  );
}
