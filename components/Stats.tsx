"use client";
import React from "react";
import SectionHeader from "./SectionHeader";
import { useSectionInView } from "@/lib/hooks";

export default function Stats() {
  const { ref } = useSectionInView("Stats", 0.8);
  return (
    <section ref={ref} id="stats" className="mb-[20rem] scroll-mt-28">
      <SectionHeader>My Stats</SectionHeader>
    </section>
  );
}
