"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
type StatProps = {
  name: string;
  img_link: string;
};
export default function Stat({ name, img_link }: StatProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  const opactityProgress = useTransform(scrollYProgress, [0, 1], [0.4, 1]);

  return (
    <motion.div
      style={{
        scale: scaleProgress,
        opacity: opactityProgress,
      }}
      ref={ref}
      className="group mb-1 sm:m-1 last:mb-0"
    >
      <section
        className="bg-white border border-black/5 relative rounded-lg
                    dark:text-white dark:bg-white/10"
      >
        <Image
          className="w-full"
          src={img_link}
          alt={name}
          width={400}
          height={400}
          quality={95}
        />
        <h3 className="text-2xl px-6 py-4 font-semibold">{name}</h3>
      </section>
    </motion.div>
  );
}
