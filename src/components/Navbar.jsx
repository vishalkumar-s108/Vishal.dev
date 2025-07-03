// src/components/Navbar.jsx
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  // Toggle Mobile Menu
  const toggleMenu = () => setIsOpen(!isOpen);

  // Handle Dark Mode Class on <html>
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
          {["Home", "About", "Skills", "Projects","Blog", "Contact"].map((item, i) => (
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              key={i}
              className="text-lg"
            >
              <Link
                to={`/${item === "Home" ? "" : item.toLowerCase()}`}
                className="hover:text-yellow-300 transition duration-200"
              >
                {item}
              </Link>
            </motion.div>
          ))}

          {/*  Dark/Light Toggle Button */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="ml-4 px-3 py-1 rounded bg-white text-black dark:bg-black dark:text-white border"
          >
            {darkMode ? " Dark" : " Light"}
          </button>
        </div>

        {/* Mobile Toggle Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-purple-600 px-6 py-4 space-y-4"
          >
            {["Home", "About", "Skills", "Projects", "Contact"].map((item, i) => (
              <Link
                key={i}
                to={`/${item === "Home" ? "" : item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="hover:text-yellow-300 transition duration-200"
              >
                {item}
              </Link>
            ))}

            {/* 🌗 Dark mode toggle in mobile menu */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="w-full px-3 py-2 rounded bg-white text-black dark:bg-black dark:text-white border mt-4"
            >
              {darkMode ? " Dark" : " Light"}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
