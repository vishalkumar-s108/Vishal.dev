import React from "react";
import resumeData from "../data/resumeData";
import { motion } from "framer-motion";
import { FaCircle } from "react-icons/fa";

export default function Resume() {
  return (
    <section id="resume" className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-4xl font-bold mb-10 text-center"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          📄 Resume / Timeline
        </motion.h2>

        <div className="relative border-l-4 border-purple-500 pl-6 space-y-10">
          {resumeData.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3">
                <FaCircle className="text-purple-500 text-xs" />
                <h3 className="text-xl font-semibold">{item.title}</h3>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">{item.company} • {item.date}</p>
              <p className="mt-2 text-base">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
