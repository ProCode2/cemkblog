import { FaSun, FaMoon } from "react-icons/fa";
import React, { useState } from "react";
import { isDarkMode } from "../utils/isDarkMode";

const ThemeButton = () => {
  const [isDarkModeEnabled, setIsDarkModeEnabled] = useState(isDarkMode());
  const toggleTheme = (_) => {
    if (typeof window !== "undefined") {
      if (
        localStorage.theme === "dark" ||
        (!("theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
      ) {
        localStorage.theme = "light";
        document.documentElement.classList.remove("dark");
        setIsDarkModeEnabled(false);
      } else {
        localStorage.theme = "dark";
        document.documentElement.classList.add("dark");
        setIsDarkModeEnabled(true);
      }
    }
  };

  return (
    <span
      onClick={toggleTheme}
      className="cursor-pointer flex items-center justify-center h-10 w-10 bg-gray-300 text-gray-900 dark:bg-gray-1000 z-50 rounded-full"
    >
      {isDarkModeEnabled ? (
        <FaSun className="w-6" />
      ) : (
        <FaMoon className="w-6" />
      )}
    </span>
  );
};

export default ThemeButton;
