import { useActiveSessionContext } from "@/context/ActiveSession";

import en from "../locales/en/common.json";
import es from "../locales/es/common.json";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { SectionName } from "./types";
import { useLanguage } from "@/context/LangContextProvider";

interface Translations {
  welcome: string;
  about: string;
  Home: string;
  About: string;
  Stats: string;
  Projects: string;
  Skills: string;
  Experience: string;
  Contact: string;
}

const translations: Record<string, Translations> = {
  en: en,
  es: es,
};

export const useTranslation = (): ((key: keyof Translations) => string) => {
  const { lang } = useLanguage();
  return (key: keyof Translations) => {
    return translations[lang][key] || key;
  };
};

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
