import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../App";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  const [repos, setRepos] = useState([]);
  const { isDarkMode } = useContext(ThemeContext);

  // Fetch GitHub repositories
  useEffect(() => {
    fetch("https://api.github.com/users/lidetrv/repos")
      .then((res) => res.json())
      .then((data) => setRepos(data));
  }, []);

  return (
    <div
      className={`min-h-screen p-6 ${
        isDarkMode ? "bg-slate-900 text-white" : "bg-gray-300 text-black"
      }`}
    >
      <h2 className="text-2xl font-bold">My Projects</h2>
      <div className="flex flex-wrap justify-center gap-6">
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
