import AboutSection from "../components/AboutSection";
import SkillCard from "../components/SkillCard";

const Home = ({ isDarkMode }) => {
  return (
    <div
      className={`p-8 ${
        isDarkMode ? "bg-slate-800 text-white" : "bg-white text-black"
      }`}
    >
      
      <AboutSection />
      <SkillCard isDarkMode={isDarkMode} />
    </div>
  );
};

export default Home;
