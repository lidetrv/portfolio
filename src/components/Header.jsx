import { Link } from 'react-router-dom';

const Header = ({ isDarkMode, toggleTheme }) => {
  return (
    <header className={`${isDarkMode ? "bg-gray-900 text-white" : "bg-gray-800 text-white"} p-4`}>
      <nav className="container mx-auto flex justify-between items-center">
        
        <h1 className="text-xl font-bold">Lidetu Tadesse</h1>

       
        <ul className="flex space-x-4 ml-auto">
          <li>
            <Link to="/" className="hover:text-blue-500 transition duration-200">Home</Link>
          </li>
          <li>
            <Link to="/projects" className="hover:text-blue-500 transition duration-200">Projects</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-blue-500 transition duration-200">Contact</Link>
          </li>
          <li>
            <Link to="/testimonials" className="hover:text-blue-500 transition duration-200">Testimonials</Link>
          </li>
        </ul>

        
        <button
          onClick={toggleTheme}
          className={`ml-4 px-[0.25rem] py-[0.25rem] text-sm rounded ${isDarkMode ? "bg-yellow-500 text-black" : "bg-gray-300 text-black"}`}
        >
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </nav>
    </header>
  );
};

export default Header;
