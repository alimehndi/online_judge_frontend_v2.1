'use client';

import { useEffect, useState } from 'react';

export default function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    
    const storedTheme = localStorage.getItem('theme');
    console
    if (
      storedTheme === 'dark' ||
      (!storedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.setAttribute("data-theme", "dark");
      setIsDark(true);
    } else {
      document.documentElement.removeAttribute("data-theme");
      setIsDark(false);
    }
  }, []);

  const toggleDarkMode = () => {
    const html = document.documentElement;
    if (localStorage.getItem('theme') == 'light') {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    } else {
      document.documentElement.removeAttribute("data-theme");
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    }
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="absolute top-4 right-4 px-4 py-2 rounded-lg bg-gray-700 dark:bg-gray-200 text-white dark:text-black shadow"
    >
      {isDark ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
}
