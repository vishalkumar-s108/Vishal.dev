// src/pages/About.jsx
import React from "react";

export default function About() {
  return (
    <section className="min-h-screen px-4 py-10 bg-white dark:bg-gray-900 text-gray-800 dark:text-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">About Me</h2>
        <p className="text-lg mb-4">
          I'm Vishal from Bihar, a self-taught Frontend Developer passionate about building clean and responsive web applications using HTML, CSS, JavaScript, and React.
        </p>
        <p className="text-lg mb-4">
          I'm currently learning advanced React, TypeScript, and UI/UX design to level up my frontend skills.
        </p>
        <p className="text-lg font-medium">
          🎯 Fun Fact: I can turn chai and code into magic!
        </p>
      </div>
    </section>
  );
}
