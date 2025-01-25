// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { createContext, useState } from "react";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import Home from "./pages/Home";
// import Projects from "./pages/Projects";
// import Contact from "./pages/Contact";
// import TestimonialCard from "./pages/TestimonialCard";
// export const ThemeContext = createContext();

// const App = () => {
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   const toggleTheme = () => {
//     setIsDarkMode((prevMode) => !prevMode);
//   };

//   return (
//     <Router>
//       <div className={`${isDarkMode ? "bg-slate-900 text-white" : "bg-gray-200 text-black"} flex flex-col min-h-screen`}>
//         {/* Header */}
//         <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />

//         {/* Main Content */}
//         <main className="flex-grow">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/projects" element={<Projects />} />
//             <Route path="/contact" element={<Contact />} />
//             <Route path="/testimonials" element={<TestimonialCard />} />
//           </Routes>
//         </main>

//         {/* Footer */}
//         <Footer />
//       </div>
//     </Router>
//   );
// };

// export default App;



import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createContext, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import TestimonialCard from "./pages/TestimonialCard";

export const ThemeContext = createContext();

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      <Router>
        <div
          className={`${
            isDarkMode ? "bg-slate-900 text-white" : "bg-gray-200 text-black"
          } flex flex-col min-h-screen`}
        >
          {/* Header */}
          <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />

          {/* Main Content */}
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/testimonials" element={<TestimonialCard />} />
            </Routes>
          </main>

          {/* Footer */}
          <Footer />
        </div>
      </Router>
    </ThemeContext.Provider>
  );
};

export default App;
