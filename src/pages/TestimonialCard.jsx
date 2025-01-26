
import React, { useContext } from "react";
import { ThemeContext } from "../App";
import masamo from "../assets/masamo.jpg";
import birhanu from "../assets/Birhanu.jpg";

const TestimonialCard = () => {
  const { isDarkMode } = useContext(ThemeContext);

  
  const testimonials = [
    {
      name: "Masamo Mathewos",
      photo: masamo,
      quote: "This developer is amazing! Highly recommend.",
    },
    {
      name: "Birhanu Tesfaye",
      photo: birhanu,
      quote: "A pleasure to work with. Delivered on time and exceeded expectations.",
    }
  ];

  return (
    <div
      className={`flex flex-col min-h-screen ${isDarkMode ? "bg-gray-900 text-white" : "bg-gray-300 text-black"} py-8`}
    >
      <main className="flex-grow px-8">
        <h2 className="text-2xl font-bold text-center mb-6">Testimonials</h2>
        <div className="flex justify-center space-x-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-500 text-white shadow-lg p-6 rounded-lg hover:shadow-2xl transition-all w-80"
            >
              <img
                src={testimonial.photo}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full mx-auto"
              />
              <p className="mt-4 italic">"{testimonial.quote}"</p>
              <h5 className="mt-2 text-lg font-semibold text-center">
                {testimonial.name}
              </h5>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default TestimonialCard;
