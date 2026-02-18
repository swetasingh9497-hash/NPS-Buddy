"use client";

import { useTheme } from "../context/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="
        absolute top-6 right-6
        px-4 py-2
        rounded-xl
        bg-gray-200 dark:bg-slate-800
        text-sm font-medium
        text-gray-700 dark:text-gray-200
        hover:scale-105
        transition-all duration-200
        shadow-md
      "
    >
      {theme === "light" ? "Dark Mode" : "Light Mode"}
    </button>
  );
}
