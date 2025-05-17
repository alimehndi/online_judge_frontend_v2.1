"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Header = () => {
  const pathname = usePathname();
  const navItems = [
    { name: "Welcome", href: "/online-judge/dashboard" },
    { name: "Problems", href: "/online-judge/problems" },
    { name: "Analytics", href: "/online-judge/analytics" },
    { name: "Profile", href: "/online-judge/profile" },
  ];

  return (
   <header className="bg-white dark:bg-gray-900 shadow px-4 py-3">
  <div className="max-w-7xl mx-auto flex items-center justify-between">
    <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
      Online Judge
    </h1>

    <nav className="flex items-center space-x-6">
      {navItems.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className={`text-base font-medium hover:underline ${
            pathname === item.href
              ? "text-blue-600 dark:text-blue-400"
              : "text-gray-700 dark:text-gray-300"
          }`}
        >
          {item.name}
        </Link>
      ))}
    </nav>

    {pathname === "/online-judge/problems" && (
      <div className="hidden lg:flex items-center space-x-2">
        <input
          type="text"
          placeholder="Search problems..."
          className="px-4 py-2 text-base rounded-md border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
        <button className="px-4 py-2 text-base bg-blue-600 text-white rounded hover:bg-blue-700">
          Search
        </button>
      </div>
    )}
  </div>
</header>

  );
};

export default Header;
