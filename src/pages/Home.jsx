import Header from "../components/Header";
import AboutSection from "../components/AboutSection"; // Ensure the path to AboutSection is correct

const Home = ({ isDarkMode, toggleTheme }) => {
  return (
    <div>
      {/* <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} /> */}
      <div className="p-8">
        {/* <h2 className="text-2xl font-bold">Welcome to My Portfolio</h2>
        <p>This is the Home Page.</p> */}
      </div>
      <AboutSection /> {/* Call AboutSection here */}
    </div>
  );
};

export default Home;