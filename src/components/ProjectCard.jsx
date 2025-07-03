import React from "react";

export default function ProjectCard({ title, description, image, github, live, tech, tags }) {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md transition hover:shadow-xl">
      <img
        src={image}
        alt={title}
        loading="lazy"
        className="w-full h-48 object-cover rounded-md mb-4"
      />

      <h3 className="text-2xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-700 dark:text-gray-300 mb-4">{description}</p>

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

      <div className="flex gap-4">
        <a
          href={live}
          target="_blank"
          rel="noreferrer"
          className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition"
        >
          Live
        </a>
        <a
          href={github}
          target="_blank"
          rel="noreferrer"
          className="border border-purple-600 text-purple-600 px-4 py-2 rounded hover:bg-purple-600 hover:text-white transition"
        >
          GitHub
        </a>
      </div>
    </div>
  );
}
