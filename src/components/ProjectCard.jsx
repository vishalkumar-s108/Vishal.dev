import React from "react";
import { motion } from "framer-motion";

export default function ProjectCard({ 
  title, description, image, github, live, tech, tags, role, videoUrl, onViewCaseStudy 
}) {
  return (
    <motion.div
      className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md transition hover:shadow-lg"
      whileHover={{ scale: 1.02 }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* 🖼️ Image */}
      <div className="w-full h-36 overflow-hidden rounded mb-3">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover transition duration-300 hover:scale-105"
        />
      </div>

      {/* 📝 Text */}
      <h3 className="text-xl font-semibold mb-1">{title}</h3>
      <p className="text-gray-700 dark:text-gray-300 text-sm mb-1">{description}</p>
      <p className="text-xs text-gray-400 mb-2">
        <strong>My Role:</strong> {role}
      </p>

      {/* 🧠 Tech Stack Icons */}
      <div className="flex gap-2 mb-3">
        {tech.map((Icon, index) => (
          <Icon key={index} className="text-lg text-purple-600 dark:text-purple-400" />
        ))}
      </div>

      {/* 🏷️ Tags */}
      {tags && (
        <div className="flex gap-1 flex-wrap mb-3">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="text-xs px-2 py-0.5 bg-purple-100 dark:bg-purple-700 text-purple-800 dark:text-white rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* 🧾 View Case Study Button */}
      {onViewCaseStudy && (
        <button
          onClick={onViewCaseStudy}
          className="mt-2 text-xs text-blue-600 hover:underline"
        >
          View Case Study
        </button>
      )}

      {/* 🔗 Links */}
      <div className="mt-3 flex gap-2 flex-wrap">
        {live && (
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-3 py-1 rounded shadow hover:bg-blue-700 text-xs"
          >
            🔗 Live
          </a>
        )}
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-700 text-white px-3 py-1 rounded shadow hover:bg-gray-600 text-xs"
          >
            💻 Code
          </a>
        )}
      </div>

      {/* 🎥 Demo Video */}
      {videoUrl && (
        <div className="w-full mt-4 rounded overflow-hidden">
          <div className="relative" style={{ paddingBottom: "56.25%", height: 0 }}>
            <iframe
              src={videoUrl}
              title={`${title} Demo Video`}
              className="absolute top-0 left-0 w-full h-full rounded-md"
              loading="lazy"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </motion.div>
  );
}
