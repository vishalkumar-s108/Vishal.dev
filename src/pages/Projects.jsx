import React, { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import ProjectModal from "../components/ProjectModal";
import AnalyticsDashboard from "../components/AnalyticsDashboard";
// 🔹 Project Data
const projects = [
  {
    id: 1,
    title: "projects.portfolioTitle",
    image: "/image.png",
    description: "projects.portfolioDesc",
    github: "https://github.com/vishalkumar-s108",
    live: "https://vishal-s.netlify.app/",
    tech: [FaReact, SiTailwindcss],
    tags: ["Frontend"],
    role: "projects.portfolioRole",
    challenge: "projects.portfolioChallenge",
    solution: "projects.portfolioSolution",
    techStack: "React, Tailwind CSS, Vite",
    results: "projects.portfolioResults",
    videoUrl: "https://img.youtube.com/vi/ORTKhhgHoWQ"

  },
  {
    id: 2,
    title: "projects.taskifyTitle",
    image: "/Taskify.png",
    description: "projects.taskifyDesc",
    github: "https://github.com/vishalkumar-s108",
    live: "https://taskifynetlifyapp.netlify.app/",
    tech: [FaReact],
    tags: ["Frontend"],
    role: "projects.taskifyRole",
    challenge: "projects.taskifyChallenge",
    solution: "projects.taskifySolution",
    techStack: "React, Tailwind CSS, Zustand",
    results: "projects.taskifyResults"
  }
];

const Projects = () => {
  const { t } = useTranslation();
  const [selectedTag, setSelectedTag] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const closeModal = () => setSelectedProject(null);

  const filteredProjects =
    selectedTag === "All"
      ? projects
      : projects.filter((project) => project.tags.includes(selectedTag));

  const tags = ["All", "Frontend", "Fullstack"];

  return (
    <section id="projects" className="py-16 px-4 bg-gray-900 text-white min-h-screen">
      <motion.h2
        className="text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {t("projects.title")}
      </motion.h2>

      {/* 🔹 Filter Buttons */}
      <motion.div
        className="flex flex-wrap gap-4 justify-center mb-8"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true }}
      >
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => setSelectedTag(tag)}
            className={`px-4 py-2 rounded-full border font-medium transition duration-200 ease-in-out
              ${selectedTag === tag ? 'bg-blue-600 text-white' : 'bg-white text-gray-800'}
              hover:bg-blue-700 hover:text-white`}
          >
            {t(`projects.tags.${tag.toLowerCase()}`)}
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
          <ProjectCard
            key={index}
            {...project}
            title={t(project.title)}
            description={t(project.description)}
            role={t(project.role)}
            videoUrl={project.videoUrl} // ✅ THIS LINE IS ESSENTIAL
            onViewCaseStudy={() => setSelectedProject(project)}
          />
        ))}
      </motion.div>

      {/* 🔹 Case Study Modal */}
      {selectedProject && (
        <ProjectModal
          isOpen={!!selectedProject}
          onClose={closeModal}
          project={{
            ...selectedProject,
            title: t(selectedProject.title),
            subtitle: selectedProject.subtitle || "",
            challenge: t(selectedProject.challenge),
            solution: t(selectedProject.solution),
            results: t(selectedProject.results)
          }}
        />
      )}
      <section id="analytics" className="py-20">
  <AnalyticsDashboard />
</section>

    </section>
  );
};

export default Projects;
