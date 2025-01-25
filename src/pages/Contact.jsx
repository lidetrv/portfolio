import { useState } from "react";

const Contact = () => {


    
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 py-8">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg border border-gray-300">
        <h2 className="text-2xl font-bold text-center mb-6">Contact Me</h2>
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
            className="w-full p-2 border rounded"
            required
          />
          
          {/* Email Input */}
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full p-2 border rounded"
            
            required
          />
          
          {/* Message Textarea */}
          <textarea
            name="message"
            placeholder="Your Message"
            className="w-full p-2 border rounded"
            
            required
          ></textarea>

         
          
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-600 text-white rounded"
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
            href="https://www.instagram.com/"
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
