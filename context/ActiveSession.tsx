"use client";
import React, { useState, createContext, useContext } from "react";
import {
  ActiveSectionContextProps,
  ActiveSectionProviderProps,
  SectionName,
} from "@/lib/types";

export const ActiveSectionContext =
  createContext<ActiveSectionContextProps | null>(null);

export default function ActiveSectionProvider({
  children,
}: ActiveSectionProviderProps) {
  const [activeSession, setActiveSession] = useState<SectionName>("Home");
  const [timeOfLastClick, setTimeOfLastClick] = useState<number>(0);

  return (
    <ActiveSectionContext.Provider
      value={{
        activeSession,
        setActiveSession,
        timeOfLastClick,
        setTimeOfLastClick,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
}

export function useActiveSessionContext() {
  const context = useContext(ActiveSectionContext);

  if (context === null) {
    throw new Error("useActiveSessions must be within ActiveSectionContext");
  }

  return context;
}
