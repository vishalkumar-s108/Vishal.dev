import React from "react";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  const projectList = [
    {
      name: "Taskify",
      description: "A responsive to-do task manager built with React.",
      tech: ["React", "Tailwind CSS"],
      live: "https://taskifynetlifyapp.netlify.app/",
      github: "https://github.com/vishalrishabh108",
      image: "https://source.unsplash.com/600x400/?todo,app"  // you can replace this
    },
    // Add more projects if you want
  ];

  return (
    <section className="py-12 px-4 bg-gray-900 text-white">
      <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectList.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
