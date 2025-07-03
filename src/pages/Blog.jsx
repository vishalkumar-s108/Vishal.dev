import React from "react";

const Blog = () => {
  return (
    <section id="blog" className="min-h-screen px-6 py-16 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center">Blog / Insights</h2>
        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded shadow">
            <h3 className="text-xl font-semibold mb-2">🔧 How I Built My Portfolio</h3>
            <p className="text-gray-700 dark:text-gray-300">
              I used React 19, Tailwind CSS, Framer Motion, and deployed on Netlify. Here’s how I approached the layout, animations, and responsiveness...
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded shadow">
            <h3 className="text-xl font-semibold mb-2">📚 What I'm Learning Now</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Currently diving deeper into TypeScript, APIs, and building full-stack MERN projects. Also exploring UI/UX best practices.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
