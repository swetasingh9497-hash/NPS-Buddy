"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  const navItems = [
    { name: "Dashboard", path: "/" },
    { name: "Simulator", path: "/simulator" },
    { name: "Chat", path: "/chat" },
    { name: "Profile", path: "/profile" },
  ];

  return (
    <aside
      className="
        w-64
        min-h-screen
        bg-brand-lightbg
        dark:bg-brand-darkbg
        border-r
        border-gray-200
        dark:border-slate-700
        p-6
        transition-colors duration-300
      "
    >
      <h2 className="text-xl font-bold mb-8">
        NPS Buddy
      </h2>

      <nav className="space-y-3">
        {navItems.map((item) => {
          const isActive = pathname === item.path;

          return (
            <Link
              key={item.path}
              href={item.path}
              className={`
                block
                px-4
                py-2
                rounded-lg
                transition-all duration-200
                ${
                  isActive
                    ? "bg-brand-primary text-white"
                    : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800"
                }
              `}
            >
              {item.name}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
