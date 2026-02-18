"use client";

import { useTheme } from "../context/ThemeContext";

export default function Navbar() {
    const { theme, toggleTheme } = useTheme();

    return (
        <nav
            className="
        bg-white 
        dark:bg-slate-900 
        border-b 
        border-gray-200 
        dark:border-slate-700 
        px-8 
        h-16 
        flex 
        items-center 
        justify-between
      "
        >
            <div className="text-xl font-bold text-[#1E3A8A] dark:text-white">
                Pension Copilot
            </div>

            <div className="flex items-center gap-6">
                <span className="text-gray-600 dark:text-gray-300">Dashboard</span>
                <span className="text-gray-600 dark:text-gray-300">Simulator</span>
                <span className="text-gray-600 dark:text-gray-300">Profile</span>

                <button
                    onClick={toggleTheme}
                    className="
            px-3 py-1 
            rounded-lg 
            bg-gray-200 
            dark:bg-gray-700 
            text-sm 
            transition-all 
            duration-200 
            hover:scale-105 
            active:scale-95
          "
                >
                    {theme === "light" ? "Dark Mode" : "Light Mode"}
                </button>
            </div>
        </nav>
    );
}
