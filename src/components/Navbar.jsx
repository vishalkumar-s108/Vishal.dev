import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

 const navItems = [
  { path: "", label: t("navbar.home") },
  { path: "about", label: t("navbar.about") },
  { path: "skills", label: t("navbar.skills") },
  { path: "projects", label: t("navbar.projects") },
  { path: "blog", label: t("navbar.blog") },
  { path: "contact", label: t("navbar.contact") },
  { path: "resume", label: t("Resume") },
{ path: "Nda-projects", label: t("NdaProjects") },
{ path: "playground", label: t("Playground") }

];


  return (
    <nav className="bg-gradient-to-r from-purple-700 to-purple-500 text-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-6xl mx-auto px-4 py-2 flex justify-between items-center">
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          className="font-bold text-2xl tracking-wide"
        >
          Vishal.dev
        </motion.h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          {navItems.map((item, i) => (
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              key={i}
              className="text-lg"
            >
              <Link
                to={`/${item.path}`}
                className="hover:text-yellow-300 transition duration-200"
              >
                {item.label}
              </Link>
            </motion.div>
          ))}

          {/* 🌙 Dark/Light Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="ml-4 px-3 py-1 rounded bg-white text-black dark:bg-black dark:text-white border transition"
          >
          {darkMode ? t("navbar.dark") : t("navbar.light")}

          </button>

          {/* 🌐 Language Switcher */}
          <div className="ml-4 flex gap-2">
            <button
              onClick={() => i18n.changeLanguage("en")}
              className="text-sm px-2 py-1 rounded bg-white text-black dark:bg-gray-900 dark:text-white hover:bg-gray-200"
            >
              EN
            </button>
            <button
              onClick={() => i18n.changeLanguage("hi")}
              className="text-sm px-2 py-1 rounded bg-white text-black dark:bg-gray-900 dark:text-white hover:bg-gray-200"
            >
              हिंदी
            </button>
          </div>
        </div>

        {/* Mobile Toggle Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* 📱 Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-purple-600 px-6 py-6 space-y-6 rounded-b-lg"
          >
            {navItems.map((item, i) => (
              <Link
                key={i}
                to={`/${item.path}`}
                onClick={() => setIsOpen(false)}
                className="block text-white text-lg hover:text-yellow-300"
              >
                {item.label}
              </Link>
            ))}

            {/* 🌙 Mobile Dark Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="w-full px-3 py-2 rounded bg-white text-black dark:bg-black dark:text-white border mt-4 transition"
            >
              {darkMode ? "🌙 Dark" : "☀️ Light"}
            </button>

            {/* 🌐 Language Switcher for Mobile */}
            <div className="flex justify-center gap-4 mt-4">
              <button
                onClick={() => i18n.changeLanguage("en")}
                className="text-sm px-3 py-1 rounded bg-white text-black dark:bg-gray-900 dark:text-white hover:bg-gray-200"
              >
                EN
              </button>
              <button
                onClick={() => i18n.changeLanguage("hi")}
                className="text-sm px-3 py-1 rounded bg-white text-black dark:bg-gray-900 dark:text-white hover:bg-gray-200"
              >
                हिंदी
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
