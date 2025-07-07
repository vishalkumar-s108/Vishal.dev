import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";

const Blog = () => {
  const { t } = useTranslation();

  // ✅ Blog Data with categories
  const blogPosts = [
    {
      title: t("blog.posts.portfolio.title"),
      content: t("blog.posts.portfolio.content"),
      category: "Frontend",
    },
    {
      title: t("blog.posts.learning.title"),
      content: t("blog.posts.learning.content"),
      category: "Mindset",
    },
  ];

  // ✅ Filters
  const categories = ["All", "Frontend", "Mindset"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts =
    selectedCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

  return (
    <>
      {/* 🧠 SEO Meta Tags */}
      <Helmet>
        <title>Blog | Vishal.dev</title>
        <meta name="description" content="Read articles about frontend development and growth mindset by Vishal." />
        <meta property="og:title" content="Vishal.dev Blog" />
        <meta property="og:description" content="Developer thoughts, frontend guides, and learning journey." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://vishal-s.netlify.app/blog" />
        <meta property="og:image" content="https://vishal-s.netlify.app/og-image.png" />
      </Helmet>

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
            {t("blog.title")}
          </motion.h2>

          {/* 🔘 Category Filters */}
          <div className="flex gap-4 mb-6 justify-center flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1 rounded-full text-sm font-medium 
                  ${
                    selectedCategory === cat
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-white"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* 📝 Filtered Blog Cards */}
          <div className="grid gap-6 md:grid-cols-2">
            {filteredPosts.map((blog, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold mb-2 text-purple-600 dark:text-purple-400">
                  {blog.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base">
                  {blog.content}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
