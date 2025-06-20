"use client";

import { useTheme } from "./theme-provider";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  // Ensure the component only renders after the client has mounted
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // Avoid rendering mismatched content during hydration
  }

  return (
    <button
      onClick={toggleTheme}
      className="h-8 w-8 rounded text-black dark:text-white hover:bg-neutral-300 hover:dark:bg-neutral-700 flex justify-center items-center"
    >
      {theme === "light" ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
    </button>
  );
}