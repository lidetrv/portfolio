import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import SkillCard from "../components/SkillCard";

const Projects = () => {
  const [likes, setLikes] = useState(Array(10).fill(0)); // Initialize like counts for each project

  const handleLike = (index) => {
    const newLikes = [...likes];
    newLikes[index] += 1;
    setLikes(newLikes);
  };

  const projects = [
    { title: "Project 1", description: "Description of Project 1", link: "#" },
    { title: "Project 2", description: "Description of Project 2", link: "#" },
    { title: "Project 3", description: "Description of Project 3", link: "#" },
    { title: "Project 4", description: "Description of Project 4", link: "#" },
    { title: "Project 5", description: "Description of Project 5", link: "#" },
    { title: "Project 6", description: "Description of Project 6", link: "#" },
    { title: "Project 7", description: "Description of Project 7", link: "#" },
    { title: "Project 8", description: "Description of Project 8", link: "#" },
    { title: "Project 9", description: "Description of Project 9", link: "#" },
    { title: "Project 10", description: "Description of Project 10", link: "#" },
  ];

  const skills = [
    { title: "React", level: 80 },
    { title: "JavaScript", level: 90 },
    { title: "CSS", level: 75 },
    { title: "C++", level: 70 }, // Added C++
    { title: "Java", level: 85 }, // Added Java
    { title: "Graphic Designing", level: 60 }, // Added Graphic Designing
    { title: "C#", level: 80 }, // Added C#
  ];

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold text-center mb-8">My Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            {...project}
            likes={likes[index]}
            onLike={() => handleLike(index)} // Handle like button click
          />
        ))}
      </div>

      <h2 className="text-2xl font-bold text-center mt-12 mb-8">My Skills</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {skills.map((skill, index) => (
          <SkillCard key={index} {...skill} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
