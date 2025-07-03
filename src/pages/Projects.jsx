import React from "react";
import ProjectCard from "../components/ProjectCard";
import { FaReact, } from "react-icons/fa";
import { SiTailwindcss,  } from "react-icons/si";
// import FadeInWrapper from "../components/FadeInWrapper";
  

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
  },
  {
    id: 2,
    title: "Taskify",
    image: "/Taskify.png",
    description: "A fronted Taskify app using React.js",
    github: "https://github.com/vishalkumar-s108",
    live: "https://taskifynetlifyapp.netlify.app/",
    tech: [ FaReact],
    tags: ["Fronted"],
  },
];

const Projects = () => {
  return (<>
   <section id="projects" className="py-12 px-4 bg-gray-900 text-white min-h-screen">
      {/* <FadeInWrapper> */}
  <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
   {/* <FadeInWrapper/> */}
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
   
    {projects.map((project, index) => (
      <ProjectCard key={index} {...project} />
    ))}
  </div>
</section>

    </>
  );
};

export default Projects;
