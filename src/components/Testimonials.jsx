// src/components/Testimonials.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Testimonials = () => {
  const { t } = useTranslation();

  const testimonials = [
    {
      name: t("testimonials.items.0.name"),
      role: t("testimonials.items.0.role"),
      message: t("testimonials.items.0.message"),
    },
    {
      name: t("testimonials.items.1.name"),
      role: t("testimonials.items.1.role"),
      message: t("testimonials.items.1.message"),
    },
  ];

  return (
    <section
      id="testimonials"
      className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white py-16 px-6"
    >
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold mb-10"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {t("testimonials.title")}
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((item, i) => (
            <motion.div
              key={i}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-left"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <FaQuoteLeft className="text-purple-500 mb-3 text-2xl" />
              <p className="text-lg italic mb-4 leading-relaxed">“{item.message}”</p>
              <h4 className="font-semibold text-lg">{item.name}</h4>
              <p className="text-sm text-gray-500 dark:text-gray-400">{item.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
