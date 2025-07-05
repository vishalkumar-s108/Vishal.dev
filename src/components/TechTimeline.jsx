import React from "react";

export default function TechTimeline() {
  const timeline = [
    {
      year: "2023",
      items: ["HTML", "CSS", "Git", "GitHub"],
    },
    {
      year: "Early 2024",
      items: ["JavaScript", "Responsive Design"],
    },
    {
      year: "Mid 2024",
      items: ["React", "Tailwind CSS", "React Router"],
    },
    {
      year: "Late 2024",
      items: ["Framer Motion", "Netlify Deployment"],
    },
    {
      year: "2025",
      items: ["Case Study Projects", "Blog Setup", "GitHub Integration"],
    },
  ];

  return (
    <div className="my-16 px-4">
      <h3 className="text-2xl font-bold text-purple-600 text-center mb-10">
        🧱 Tech Stack Learning Timeline
      </h3>

      <div className="relative border-l-4 border-purple-600 pl-8 max-w-3xl mx-auto space-y-12">
        {timeline.map((section, index) => (
          <div key={index} className="relative">
            <span className="absolute -left-4 top-1 w-4 h-4 bg-purple-600 rounded-full border-2 border-white shadow-lg"></span>

            <h4 className="text-lg font-semibold text-purple-400 mb-2">
              {section.year}
            </h4>

            <ul className="list-disc list-inside text-sm text-gray-200 dark:text-gray-300 ml-1">
              {section.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
