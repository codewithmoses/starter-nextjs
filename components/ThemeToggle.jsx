"use client"; // Ensuring this component runs on the client

import { useTheme } from "@/components/ThemeProvider";
import { HiSun } from "react-icons/hi2";
import { RiMoonClearFill } from "react-icons/ri";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
    onClick={toggleTheme}
    className="p-1  text-black text-[18px]  dark:text-white"
    aria-label="Toggle theme"
  >
    {theme === "light" ? (
      <RiMoonClearFill className=" text-black dark:text-white" />
    ) : (
      <HiSun className="text-black dark:text-white" />
    )}
  </button>
  
  );
}
