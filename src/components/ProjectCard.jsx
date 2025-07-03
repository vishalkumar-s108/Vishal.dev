// src/components/ProjectCard.jsx
const ProjectCard = ({ name, description, tech, live, github, image }) => {
  return (
    <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:scale-105 transition-transform">
      {image && (
        <img src={image} alt={name} className="w-full h-48 object-cover" />
      )}
      <div className="p-4">
        <h3 className="text-2xl font-semibold mb-2">{name}</h3>
        <p className="text-gray-300 text-sm mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((item, i) => (
            <span key={i} className="bg-purple-700 px-2 py-1 text-sm rounded">{item}</span>
          ))}
        </div>
        <div className="flex justify-between">
          <a href={live} target="_blank" rel="noreferrer" className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded text-sm">🔗 Live</a>
          <a href={github} target="_blank" rel="noreferrer" className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-sm">💻 GitHub</a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;



