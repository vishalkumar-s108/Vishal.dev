// src/components/CaseStudyModal.jsx
import React from "react";
import { motion } from "framer-motion";

const CaseStudyModal = ({ isOpen, onClose, project }) => {
  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-60 flex items-center justify-center px-4">
      <motion.div
        className="bg-white dark:bg-gray-900 rounded-xl p-6 max-w-2xl w-full relative shadow-lg"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-gray-600 dark:text-white text-2xl font-bold"
        >
          ×
        </button>

        <h2 className="text-2xl font-bold mb-2 text-purple-700 dark:text-purple-400">
          {project.title}
        </h2>

        <img
          src={project.image}
          alt={project.title}
          className="w-full h-56 object-cover rounded mb-4"
        />

        <p className="mb-3 text-gray-700 dark:text-gray-300"><strong>🧩 Challenge:</strong> {project.challenge}</p>
        <p className="mb-3 text-gray-700 dark:text-gray-300"><strong>💡 Solution:</strong> {project.solution}</p>

        {project.video && (
          <div className="mt-4">
            <strong className="block mb-2">🎬 Demo Video:</strong>
            <iframe
              src={project.video}
              title="Project Demo"
              className="w-full h-56 rounded shadow"
              allowFullScreen
            ></iframe>
          </div>
        )}

        <div className="mt-6 flex gap-4">
          <a href={project.live} target="_blank" rel="noreferrer" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            🔗 Live Demo
          </a>
          <a href={project.github} target="_blank" rel="noreferrer" className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600">
            💻 GitHub
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default CaseStudyModal;
