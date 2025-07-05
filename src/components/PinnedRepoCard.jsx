// src/components/PinnedRepoCard.jsx
import React from "react";

const PinnedRepoCard = ({ name, description, stars, url }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow hover:shadow-lg transition">
      <h4 className="text-lg font-bold text-purple-600">{name}</h4>
      <p className="text-sm text-gray-600 dark:text-gray-300 my-2">{description}</p>
      <div className="flex justify-between items-center mt-2">
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-blue-600 font-medium hover:underline"
        >
          View Repo
        </a>
        <span className="text-xs text-gray-400">⭐ {stars}</span>
      </div>
    </div>
  );
};

export default PinnedRepoCard;
