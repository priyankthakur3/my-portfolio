"use client";
import React, { useRef } from "react";
import SectionHeader from "./SectionHeader";
import { useSectionInView } from "@/lib/hooks";
import { statsData } from "@/lib/data";
import Stat from "./Stat";

export default function Stats() {
  const { ref } = useSectionInView("Stats", 0.7);

  return (
    <section ref={ref} id="stats" className="mb-[10rem] scroll-mt-28 px-2">
      <SectionHeader>My Stats</SectionHeader>
      <div className="flex flex-col gap-1 justify-center">
        {statsData.map((stat, index) => (
          <React.Fragment key={index}>
            <Stat {...stat} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
