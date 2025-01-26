import React, { useContext } from "react";
import { ThemeContext } from "../App"; 
const SkillCard = () => {
  const { isDarkMode } = useContext(ThemeContext); // Access the theme context

  const skills = [
    { title: "HTML/CSS", level: 90 },
    { title: "Java", level: 75 },
    { title: "C#", level: 80 },
    { title: "JavaScript", level: 85 },
    { title: "React", level: 80 },
    { title: "C++", level: 40 },
  ];

  return (
    <section
      className={`py-8 ${
        isDarkMode ? "bg-slate-900 text-white" : "bg-gray-300 text-black"
      }`}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6">My Skills</h2>
        <p className="text-center mb-12">
          Below are some of my technical skills and their proficiency levels.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`p-6 shadow-lg rounded-lg ${
                isDarkMode
                  ? "bg-gray-800 text-white border-gray-700"
                  : "bg-white text-black border-gray-300"
              }`}
            >
              <h4 className="text-lg font-semibold flex justify-between items-center">
                {skill.title} <span className="text-sm">{skill.level}%</span>
              </h4>
              <div className="bg-gray-200 h-2 rounded mt-2">
                <div
                  className={`h-2 rounded transition-all duration-500 ease-in-out ${
                    isDarkMode ? "bg-blue-500" : "bg-blue-600"
                  }`}
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillCard;
