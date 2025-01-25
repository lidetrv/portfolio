import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../App";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  const [repos, setRepos] = useState([]);
  const { darkMode } = useContext(ThemeContext);

  // Fetch GitHub repositories
  useEffect(() => {
    fetch("https://api.github.com/users/lidetrv/repos")
      .then((res) => res.json())
      .then((data) => setRepos(data));
  }, []);

  return (
    <div
      className={`min-h-screen p-6 ${
        darkMode ? "bg-gray-200 text-black" : "bg-slate-900 text-white"
      }`}
    >
      <h2 className="text-2xl font-bold">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        {repos.map((repo) => (
          <ProjectCard
            key={repo.id}
            id={repo.id.toString()} // Pass unique ID for Firestore
            title={repo.name}
            description={repo.description || "No description available"}
            link={repo.html_url}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;