import React from "react";
import { motion } from "framer-motion";

const Blog = () => {
  const blogPosts = [
    {
      title: "🔧 How I Built My Portfolio",
      content:
        "I used React 19, Tailwind CSS, Framer Motion, and deployed on Netlify. Here’s how I approached the layout, animations, and responsiveness...",
    },
    {
      title: "📚 What I'm Learning Now",
      content:
        "Currently diving deeper into TypeScript, APIs, and building full-stack MERN projects. Also exploring UI/UX best practices.",
    },
  ];

  return (
    <section
      id="blog"
      className="min-h-screen px-6 py-16 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white"
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-10 text-center"
        >
          Blog / Insights
        </motion.h2>

        <div className="space-y-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-2 text-purple-600 dark:text-purple-400">
                {post.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base">
                {post.content}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
