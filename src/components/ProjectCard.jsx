import React from "react";
import { motion } from "framer-motion";

export default function ProjectCard({ title, description, image, github, live, tech, tags, role }) {
  return (
    <motion.div
      className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md transition hover:shadow-xl"
      whileHover={{ scale: 1.03 }}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      
      <div className="w-full h-48 overflow-hidden rounded">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover transition duration-300 hover:scale-105"
        />
      </div>

      <h3 className="text-2xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-700 dark:text-gray-300 mb-2">{description}</p>
      <p className="text-sm text-gray-400 mb-4">
        <strong>My Role:</strong> {role}
      </p>

      {/* 🧠 Tech Stack Icons */}
      <div className="flex gap-3 mb-4">
        {tech.map((Icon, index) => (
          <Icon key={index} className="text-xl text-purple-600 dark:text-purple-400" />
        ))}
      </div>

      {/* 🏷️ Tags */}
      {tags && (
        <div className="flex gap-2 flex-wrap mb-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="text-sm px-2 py-0.5 bg-purple-100 dark:bg-purple-700 text-purple-800 dark:text-white rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* 🔗 Buttons */}
      <div className="mt-4 flex gap-4">
        {live && (
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-4 py-2 rounded shadow-md hover:bg-blue-700 transition duration-300 text-sm font-medium"
          >
            🔗 Live Demo
          </a>
        )}
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-700 text-white px-4 py-2 rounded shadow-md hover:bg-gray-600 transition duration-300 text-sm font-medium"
          >
            💻 View Code
          </a>
        )}
      </div>
    </motion.div>
  );
}
