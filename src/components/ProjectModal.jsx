import React from "react";

export default function ProjectModal({ isOpen, onClose, project }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-gray-900 rounded-2xl max-w-xl w-full shadow-lg p-6 overflow-y-auto max-h-[90vh]">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          {project.title}
        </h2>
        {project.subtitle && (
          <p className="text-sm mb-4 text-gray-500 dark:text-gray-400">
            {project.subtitle}
          </p>
        )}

        {/* Challenge */}
        <h3 className="font-semibold text-lg mt-4 text-blue-600">🧩 Challenge</h3>
        <p className="text-gray-800 dark:text-gray-300">{project.challenge}</p>

        {/* Solution */}
        <h3 className="font-semibold text-lg mt-4 text-green-600">🛠️ Solution</h3>
        <p className="text-gray-800 dark:text-gray-300">{project.solution}</p>

        {/* Tech Stack */}
        <h3 className="font-semibold text-lg mt-4 text-purple-600">🧪 Tech Stack</h3>
        <p className="text-gray-800 dark:text-gray-300">{project.techStack}</p>

        {/* Results */}
        <h3 className="font-semibold text-lg mt-4 text-yellow-600">🏁 Results</h3>
        <p className="text-gray-800 dark:text-gray-300">{project.results}</p>

        <div className="flex justify-end mt-6">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
