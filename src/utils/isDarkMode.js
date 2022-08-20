export const isDarkMode = () => {
  if (typeof window !== "undefined") {
    return (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    );
  }
  return false;
};
