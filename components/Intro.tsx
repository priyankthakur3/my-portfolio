"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
export default function Intro() {
  return (
    <section className="mb-28 max-w-[50rem]">
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
            <motion.span
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
            </motion.span>
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
        <span className="font-bold">Hello, I'm Priyank</span>
        <span>
          , Software Developer with 3 years of experience in Data Engineering. I
          enjoy building <span className="italic">sites & apps</span> and binge
          watch Mystery, Sci-fi genre movies and TV Series. My Current focus is{" "}
          <span className="underline">React (Next.js), Spring Boot</span>
        </span>
      </motion.p>
      <div className="flex flex-col">
        <Link
          href={"#contact"}
          className="bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full w-[18rem]"
        >
          Contact me here!
          <BsArrowRight />
        </Link>
        <a className="bg-white px-7 py-3 flex items-center gap-2 rounded-full w-[18rem]">
          Download CV <HiDownload />{" "}
        </a>
        <a
          className="bg-white px-7 py-3 flex items-center gap-2 rounded-full w-[18rem]"
          href="linkedin.com/in/priyankthakur3"
          target="_blank"
        >
          <BsLinkedin />
        </a>
      </div>
    </section>
  );
}
