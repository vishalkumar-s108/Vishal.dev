import React, { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { motion } from "framer-motion";

// 🔹 Project Data
const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    image: "/image.png",
    description: "My personal portfolio built using React and Tailwind CSS.",
    github: "https://github.com/vishalkumar-s108",
    live: "https://prismatic-fenglisu-bb6d14.netlify.app/",
    tech: [FaReact, SiTailwindcss],
    tags: ["Frontend"],
    role: "Designed and developed the complete frontend using React and Tailwind CSS.",
  },
  {
    id: 2,
    title: "Taskify",
    image: "/Taskify.png",
    description: "A frontend task manager app.",
    github: "https://github.com/vishalkumar-s108",
    live: "https://taskifynetlifyapp.netlify.app/",
    tech: [FaReact],
    tags: ["Frontend"],
    role: "Built UI components and task management flow using React hooks.",
  },
];

// 🔹 Main Component
const Projects = () => {
  const [selectedTag, setSelectedTag] = useState("All");

  // 🔸 Filter logic
  const filteredProjects =
    selectedTag === "All"
      ? projects
      : projects.filter((project) => project.tags.includes(selectedTag));

  return (
    <section id="projects" className="py-16 px-4 bg-gray-900 text-white min-h-screen">
      <motion.h2
        className="text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Projects
      </motion.h2>

      {/* 🔹 Filter Buttons */}
      <motion.div
        className="flex flex-wrap gap-4 justify-center mb-8"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true }}
      >
        {['All', 'Frontend', 'Fullstack'].map((tag) => (
          <button
            key={tag}
            onClick={() => setSelectedTag(tag)}
            className={`px-4 py-2 rounded-full border font-medium transition duration-200 ease-in-out
              ${selectedTag === tag ? 'bg-blue-600 text-white' : 'bg-white text-gray-800'}
              hover:bg-blue-700 hover:text-white`}
          >
            {tag}
          </button>
        ))}
      </motion.div>

      {/* 🔹 Project Cards */}
      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        viewport={{ once: true }}
      >
        {filteredProjects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;