"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin, BsGithub } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { useInView } from "react-intersection-observer";
import { useActiveSessionContext } from "@/context/ActiveSession";
export default function Intro() {
  const { ref, inView } = useInView({ threshold: 0.75 });
  const { setActiveSession } = useActiveSessionContext();

  useEffect(() => {
    if (inView) {
      setActiveSession("Home");
    }
  }, [inView]);
  return (
    <section ref={ref} className="mb-15 max-w-[50rem]">
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src="/profile.jpg"
              alt="Priyank Potrait"
              width={192}
              height={192}
              quality={95}
              priority={true}
              className="h-30 w-30 rounded-full border-[0.35rem] border-white object-cover shadow-xl"
            />
            {/* <motion.span
              className="absolute bottom-0 right-0 text-4xl"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 125,
                delay: 0.1,
                duration: 0.7,
              }}
            >
              👋
            </motion.span> */}
          </motion.div>
        </div>
      </div>
      <motion.p
        className="mb-10 mt-4 px-4 text-xs font-medium sm:text-4xl"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          delay: 0.1,
          duration: 0.3,
        }}
      >
        <span className="font-bold">Hello, I am Priyank</span>
        <span>
          , Software Developer with 3 years of experience in Data Engineering. I
          enjoy building <span className="italic">sites & apps</span> and binge
          watch Mystery, Sci-fi genre movies and TV Series. My Current focus is{" "}
          <span className="underline">React (Next.js), Spring Boot</span>
        </span>
      </motion.p>
      <motion.div
        className="flex flex-col sm:flex-row gap-4 items-center justify-center px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href={"#contact"}
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 
            rounded outline-none focus:scale-110 hover:scale-110 
            hover:bg-gray-950 active:scale-105 transition-all cursor-pointer"
        >
          Contact me
          <BsArrowRight className="group-hover:translate-x-1 opacity-95 transition" />
        </Link>

        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded 
            focus:scale-110 hover:scale-110 hover:bg-slate-300 active:scale-105 transition-all cursor-pointer
            border border-black/10"
          href="/CV.pdf"
          target="_blank"
          download={true}
        >
          Download CV
          <HiDownload className="group-hover:translate-x-1 opacity-95 transition" />
        </a>

        <a
          className="bg-white px-7 py-3 flex items-center gap-2 rounded 
            text-[1.35rem] focus:scale-110 hover:scale-110 hover:bg-slate-300 active:scale-105 transition-all border border-black/10"
          href="https://linkedin.com/in/priyankthakur3"
          target="_blank"
        >
          <BsLinkedin />
        </a>

        <a
          className="bg-white px-7 py-3 flex items-center gap-2 rounded text-lg text-[1.35rem] 
            focus:scale-110 hover:scale-110 hover:bg-slate-300 active:scale-105 transition-all border border-black/10"
          href="https://github.com/priyankthakur3"
          target="_blank"
        >
          <BsGithub />
        </a>
      </motion.div>
    </section>
  );
}
