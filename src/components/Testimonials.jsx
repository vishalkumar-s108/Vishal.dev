// src/components/Testimonials.jsx
import React from "react";

const testimonials = [
  {
    name: "",
    role: "",
    message: "Vishal is a dedicated and talented developer. His attention to UI/UX is impressive.",
  },
  {
    name: "",
    role: "",
    message: "He consistently delivered great work during our mentorship. Highly recommend him!",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white py-16 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10">Testimonials</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((item, i) => (
            <div key={i} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <p className="text-lg italic mb-4">“{item.message}”</p>
              <h4 className="font-semibold">{item.name}</h4>
              <p className="text-sm text-gray-500 dark:text-gray-400">{item.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
