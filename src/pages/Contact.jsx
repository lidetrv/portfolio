import { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(""); // For storing validation error messages

  const handleSubmit = (e) => {
    e.preventDefault();

    // Reset error message
    setError("");

    // Validate inputs
    if (!name || !email || !message) {
      setError("All fields are required.");
      return;
    }

    // Email validation regex
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    // Message word count validation (max 500 words)
    const wordCount = message.trim().split(/\s+/).length;
    if (wordCount > 500) {
      setError("Your message must not exceed 500 words.");
      return;
    }

    // Proceed with form submission if valid
    console.log("Form submitted:", { name, email, message });
    // Add any further submit logic (e.g., sending data to an API)
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 py-8">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg border border-gray-300">
        <h2 className="text-2xl font-bold text-center mb-6">Contact Me</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Name Input */}
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-2 border rounded"
            value={name}
            onChange={(e) => setName(e.target.value)} // Controlled component
          />
          
          {/* Email Input */}
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-2 border rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Controlled component
          />
          
          {/* Message Textarea */}
          <textarea
            placeholder="Your Message"
            className="w-full p-2 border rounded"
            value={message}
            onChange={(e) => setMessage(e.target.value)} // Controlled component
          ></textarea>

          {/* Error message */}
          {error && <p className="text-red-500 text-sm">{error}</p>}
          
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
