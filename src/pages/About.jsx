// src/pages/About.jsx
import React from "react";
import { motion } from "framer-motion";
import myPic from "../assets/vishall.jpg"; // <-- yaha apni image ka path de

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen px-4 py-16 bg-white dark:bg-gray-900 text-gray-800 dark:text-white"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Image */}
        <motion.img
          src={myPic}
          alt="Vishal Profile"
          className="w-52 h-52 sm:w-60 sm:h-60 object-cover rounded-full shadow-lg border-4 border-purple-500"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          loading="lazy"
        />

        {/* Text */}
        <motion.div
          className="text-center md:text-left max-w-xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-purple-700 dark:text-purple-400">
            About Me
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            I'm Vishal from Bihar, a self-taught Frontend Developer. I enjoy building websites,
            creating clean designs, and crafting responsive layouts.
            <br className="hidden sm:inline" />
            <br />
            I have learned HTML, CSS, JavaScript, and React by myself. I'm passionate about learning new things every day
            and love solving real-world problems through good UI/UX.
          </p>

          <a
            href="/Vishal-Resume.pdf" // file public folder mein hona chahiye
            download
            className="mt-6 inline-block bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded shadow transition"
          >
            📄 Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
}
