import React, { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    if (dark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="px-3 py-1 text-sm font-medium border rounded-full dark:bg-gray-700 dark:text-white bg-white text-gray-900 hover:bg-gray-100 transition"
    >
      {dark ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
};

export default ThemeToggle;
