import { FaSun, FaMoon } from "react-icons/fa";
import React, { useState } from "react";
import { isDarkMode } from "../utils/isDarkMode";
import { useTheme } from "next-themes";

const ThemeButton = () => {
  const [isDarkModeEnabled, setIsDarkModeEnabled] = useState(isDarkMode());
  const { theme, setTheme } = useTheme();

  const toggleTheme = (_) => {
    if (theme === "dark") setTheme("light");
    else setTheme("dark");
  };

  return (
    <span
      onClick={toggleTheme}
      className="cursor-pointer flex items-center justify-center h-10 w-10 bg-gray-300 text-gray-900 dark:bg-gray-100 z-10 rounded-full"
    >
      {theme === "dark" ? (
        <FaSun className="w-6" />
      ) : (
        <FaMoon className="w-6" />
      )}
    </span>
  );
};

export default ThemeButton;
