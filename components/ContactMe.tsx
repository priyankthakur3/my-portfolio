"use client";
import { useSectionInView } from "@/lib/hooks";
import React from "react";
import SectionHeader from "./SectionHeader";

export default function ContactMe() {
  const { ref } = useSectionInView("Contact");
  return (
    <section ref={ref} id="contact">
      <SectionHeader>Contact Me</SectionHeader>
      <p>
        Please contact me directly at{" "}
        <a href="mailto:priyankthakur3@gmail.com">priyankthakur3@gmail.com</a>
      </p>
    </section>
  );
}
