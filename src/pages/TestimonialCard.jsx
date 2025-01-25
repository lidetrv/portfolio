import { useState, useEffect } from "react";

const TestimonialCard = ({ isDarkMode }) => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Jane Doe",
      photo: "https://via.placeholder.com/150",
      quote: "This developer is amazing! Highly recommend.",
    },
    {
      name: "John Smith",
      photo: "https://via.placeholder.com/150",
      quote: "A pleasure to work with. Delivered on time and exceeded expectations.",
    },
    {
      name: "Sarah Lee",
      photo: "https://via.placeholder.com/150",
      quote: "Fantastic work! I love the clean design and functionality.",
    },
    {
      name: "Michael Brown", // Added another person
      photo: "https://via.placeholder.com/150",
      quote: "Incredible service and attention to detail. Highly satisfied!",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Change testimonial every 5 seconds

    return () => clearInterval(interval); // Clean up the interval on unmount
  }, [testimonials.length]);

  return (
    <div
      className={`flex flex-col min-h-screen ${isDarkMode ? "bg-gray-900" : "bg-gray-50"} py-8`}
    >
      <main className="flex-grow px-8">
        <h2
          className={`text-2xl font-bold text-center mb-6 ${isDarkMode ? "text-white" : "text-black"}`}
        >
          Testimonials
        </h2>
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-500 text-white shadow-lg p-6 rounded-lg hover:shadow-2xl transition-all mx-4 flex-shrink-0 w-full"
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
        </div>
      </main>
    </div>
  );
};

export default TestimonialCard;
