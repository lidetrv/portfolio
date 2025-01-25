const ProjectCard = ({ title, description, link, likes, onLike }) => {
  return (
    <div className="relative bg-white p-6 shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:shadow-xl">
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
      <a href={link} className="text-blue-500 hover:underline mt-4 inline-block">
        View Project
      </a>
      <button
        onClick={onLike}
        className="absolute bottom-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
      >
        Like ({likes})
      </button>
    </div>
  );
};

export default ProjectCard;