// import React, { useContext } from "react";
// import { ThemeContext } from "../App";

// const Contact = () => {
//   const { isDarkMode } = useContext(ThemeContext);
//   return (
//     <div
//       className={`flex items-center justify-center min-h-screen py-8 ${
//         isDarkMode ? "bg-gray-900 text-white" : "bg-gray-300 text-black"
//       }`}
//     >
//       <div
//         className={`w-full max-w-md p-6 rounded-lg shadow-lg border ${
//           isDarkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-300"
//         }`}
//       >
//         <h2 className="text-2xl font-bold text-center mb-6">Contact Me</h2>
//         <form
//           name="contact"
//           action="/success"
//           method="POST"
//           className="space-y-4"
//         >
//           <input type="hidden" name="form-name" value="contact" />

//           {/* Name Input */}
//           <input
//             type="text"
//             name="name"
//             placeholder="Your Name"
//             className={`w-full p-2 border rounded ${
//               isDarkMode
//                 ? "bg-gray-700 text-white border-gray-600"
//                 : "bg-gray-100 text-black border-gray-300"
//             }`}
//             required
//           />

//           {/* Email Input */}
//           <input
//             type="email"
//             name="email"
//             placeholder="Your Email"
//             className={`w-full p-2 border rounded ${
//               isDarkMode
//                 ? "bg-gray-700 text-white border-gray-600"
//                 : "bg-gray-100 text-black border-gray-300"
//             }`}
//             required
//           />

//           {/* Message Textarea */}
//           <textarea
//             name="message"
//             placeholder="Your Message"
//             className={`w-full p-2 border rounded ${
//               isDarkMode
//                 ? "bg-gray-700 text-white border-gray-600"
//                 : "bg-gray-100 text-black border-gray-300"
//             }`}
//             required
//           ></textarea>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300"
//           >
//             Submit
//           </button>
//         </form>

//         {/* Social Media Links */}
//         <div className="flex space-x-8 items-center justify-center mt-6">
//           <a
//             href="https://x.com/TadesseLidetu"
//             className="text-blue-500 hover:text-blue-700 transition duration-300 ease-in-out"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <i className="fab fa-twitter text-2xl"></i>
//           </a>
//           <a
//             href="https://t.me/Lide23"
//             className="text-blue-500 hover:text-blue-700 transition duration-300 ease-in-out"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <i className="fab fa-telegram-plane text-2xl"></i>
//           </a>
//           <a
//             href="www.linkedin.com/in/lidetu-tadesse-1985792b6"
//             className="text-blue-500 hover:text-blue-700 transition duration-300 ease-in-out"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <i className="fab fa-linkedin text-2xl"></i>
//           </a>
//           <a
//             href="https://www.instagram.com/tad._lidetu?igsh=YWFiZHNvcDM5Z2F6"
//             className="text-blue-500 hover:text-blue-700 transition duration-300 ease-in-out"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <i className="fab fa-instagram text-2xl"></i>
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;
import React, { useContext } from "react";
import { ThemeContext } from "../App";

const Contact = () => {
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <div
      className={`flex items-center justify-center min-h-screen py-8 ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-gray-300 text-black"
      }`}
    >
      <div
        className={`w-full max-w-md p-6 rounded-lg shadow-lg border ${
          isDarkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-300"
        }`}
      >
        <h2 className="text-2xl font-bold text-center mb-6">Contact Me</h2>
        
        {/* Contact Details Section */}
        <div className="mb-6 space-y-2 text-sm">
          <p>
            <strong>Country:</strong> Ethiopia
          </p>
          <p>
            <strong>City:</strong> Addis Ababa
          </p>
          <p>
            <strong>Street:</strong> 4Kilo, Arada
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a
              href="mailto:Lidetutadesse6@gmail.com"
              className="text-blue-500 hover:underline"
            >
              Lidetutadesse6@gmail.com
            </a>
          </p>
          <p>
            <strong>Personal 1:</strong>{" "}
            <a
              href="tel:+251953328981"
              className="text-blue-500 hover:underline"
            >
              +251 953328981
            </a>
          </p>
          <p>
            <strong>Personal 2:</strong>{" "}
            <a
              href="tel:+251987253238"
              className="text-blue-500 hover:underline"
            >
              +251 987253238
            </a>
          </p>
        </div>

        <form
          name="contact"
          action="/success"
          method="POST"
          className="space-y-4"
        >
          <input type="hidden" name="form-name" value="contact" />

          {/* Name Input */}
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className={`w-full p-2 border rounded ${
              isDarkMode
                ? "bg-gray-700 text-white border-gray-600"
                : "bg-gray-100 text-black border-gray-300"
            }`}
            required
          />

          {/* Email Input */}
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className={`w-full p-2 border rounded ${
              isDarkMode
                ? "bg-gray-700 text-white border-gray-600"
                : "bg-gray-100 text-black border-gray-300"
            }`}
            required
          />

          {/* Message Textarea */}
          <textarea
            name="message"
            placeholder="Your Message"
            className={`w-full p-2 border rounded ${
              isDarkMode
                ? "bg-gray-700 text-white border-gray-600"
                : "bg-gray-100 text-black border-gray-300"
            }`}
            required
          ></textarea>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300"
          >
            Submit
          </button>
        </form>

        {/* Social Media Links */}
        <div className="flex space-x-8 items-center justify-center mt-6">
          <a
            href="https://x.com/TadesseLidetu"
            className="text-blue-500 hover:text-blue-700 transition duration-300 ease-in-out"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter text-2xl"></i>
          </a>
          <a
            href="https://t.me/Lide23"
            className="text-blue-500 hover:text-blue-700 transition duration-300 ease-in-out"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-telegram-plane text-2xl"></i>
          </a>
          <a
            href="www.linkedin.com/in/lidetu-tadesse-1985792b6"
            className="text-blue-500 hover:text-blue-700 transition duration-300 ease-in-out"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin text-2xl"></i>
          </a>
          <a
            href="https://www.instagram.com/tad._lidetu?igsh=YWFiZHNvcDM5Z2F6"
            className="text-blue-500 hover:text-blue-700 transition duration-300 ease-in-out"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram text-2xl"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
