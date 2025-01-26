import React, { useContext } from "react";
import { ThemeContext } from "../App";

const AboutSection = () => {
  const { isDarkMode } = useContext(ThemeContext); 
  return (
    <section
      className={`p-8 ${
        isDarkMode ? "bg-slate-900 text-white" : "bg-gray-300 text-black"
      }`}
    >
      <div className="container mx-auto flex flex-col items-center">
       
        <img
          src="src\assets\lide.jpg" 
          alt="About Me"
          className="w-32 h-32 rounded-full shadow-lg ring-4 ring-blue-500"
        />
        
       
        <p className="mt-4 text-center text-lg leading-relaxed max-w-xl">
          My name is Lidetu Tadesse, and I am a passionate developer and graphic
          designer. I specialize in creating visually appealing and functional
          web applications that enhance user experience. With a strong background in both front-end development and graphic design, I enjoy
          blending aesthetics with technology. My enthusiasm for learning new
          trends in design and coding keeps me motivated to push creative
          boundaries. I believe in the power of collaboration and often seek
          opportunities to work with talented individuals on innovative
          projects. In my free time, I love exploring new design tools and
          contributing to open-source projects.
        </p>

        
        <div className="mt-8 w-full max-w-3xl">
          <h3 className="text-2xl font-semibold text-center mb-6">Education & Courses</h3>
          <ul className="space-y-6">
           
            <li className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-bold text-blue-500">Information Systems Student</h4>
              <p className="text-gray-600">Addis Ababa University - Information Systems</p>
              <p className="text-gray-500">2020 - 2024</p>
              <p className="mt-2 text-gray-700">
                Acquired a strong background in information systems and technology solutions.
              </p>
            </li>

            
            <li className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-bold text-blue-500">Full Responsive Web Design</h4>
              <p className="text-gray-600">freeCodeCamp - Full Responsive Web Design</p>
              <p className="text-gray-500">Ongoing</p>
              <p className="mt-2 text-gray-700">
                Enrolled in freeCodeCamp specialized program to master responsive web design and front-end technologies.
              </p>
            </li>

            
            <li className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-bold text-blue-500">AI Essentials Course</h4>
              <p className="text-gray-600">AI Essentials - ALX</p>
              <p className="text-gray-500">Finished 8 weeks training</p>
              <p className="mt-2 text-gray-700">
                Completed an 8-week intensive course in Artificial Intelligence fundamentals.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
