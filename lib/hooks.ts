import { useActiveSessionContext } from "@/context/ActiveSession";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { SectionName } from "./types";

export function useSectionInView(sectionName: SectionName, threshold = 0.75) {
  const { ref, inView } = useInView({
    threshold,
  });
  const { setActiveSession, timeOfLastClick } = useActiveSessionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSession(sectionName);
    }
  }, [inView, setActiveSession, timeOfLastClick, sectionName]);

  return {
    ref,
  };
}
