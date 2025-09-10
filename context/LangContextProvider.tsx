"use client";
import React, { createContext, useContext, useState } from "react";

type Lang = "en" | "es";
type LangContextProviderProps = {
  children: React.ReactNode;
};

type LangContextType = {
  lang: Lang;
  switchLanguage: () => void;
};

const LangContext = createContext<LangContextType | null>(null);

export default function LangContextProvider({
  children,
}: LangContextProviderProps) {
  const [lang, setLang] = useState<Lang>("en");

  const switchLanguage = () => {
    setLang(lang);
  };

  return (
    <LangContext.Provider value={{ lang, switchLanguage }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LangContext);
  if (!context)
    throw new Error("useLanguage must be used within a LanguageProvider");
  return context;
}
