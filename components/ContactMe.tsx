"use client";
import { useSectionInView } from "@/lib/hooks";
import React, { useState } from "react";
import SectionHeader from "./SectionHeader";
import { motion } from "framer-motion";
import { sendEmail } from "@/actions/sendEmail";
import Toast from "./Toast";
import SubmitBtn from "./SubmitBtn";
import toast from "react-hot-toast";

export default function ContactMe() {
  const { ref } = useSectionInView("Contact");
  return (
    <motion.section
      ref={ref}
      id="contact"
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center scroll-mt-28"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeader>Contact Me</SectionHeader>
      <p className="text-gray-400 dark:text-white/80">
        Please contact me directly at{" "}
        <a href="mailto:priyankthakur3@gmail.com" className="underline">
          priyankthakur3@gmail.com
        </a>
        &nbsp;or through this form
      </p>
      <form
        className="mt-[2rem] flex flex-col dark:text-black/80 justify-center"
        action={async (formData) => {
          const t = await sendEmail(formData);
          const { data, error } = t;
          if (error) {
            toast.error(error);
            return;
          }
          toast.success("Email sent Successfully");
        }}
      >
        <input
          type="email"
          name="sendEmail"
          className="h-14 rounded-lg px-4 borderBlack"
          placeholder="Your Email"
          maxLength={500}
          required
        />
        <textarea
          className="h-52 my-3 px-4 py-4 rounded-lg borderBlack"
          placeholder="Your Message"
          name="sendMsg"
          maxLength={5000}
          required
        />
        <SubmitBtn />
      </form>
      <Toast />
    </motion.section>
  );
}
