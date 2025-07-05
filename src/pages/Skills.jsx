import React from "react";
import { FaReact, FaGitAlt, FaBootstrap } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import {
  SiJavascript,
  SiTailwindcss,
  SiPython,
  SiCplusplus,
  SiC,
  SiOpenai,
  SiHtml5,
  SiCss3,
} from "react-icons/si";
import { DiGithubBadge } from "react-icons/di";
import { motion } from "framer-motion";
import FadeInWrapper from "../components/FadeInWrapper";

const frontendSkills = [
  { name: "HTML", icon: <SiHtml5 size={28} className="text-orange-600" /> },
  { name: "CSS", icon: <SiCss3 size={28} className="text-blue-500" /> },
  { name: "JavaScript", icon: <SiJavascript size={28} className="text-yellow-400" /> },
  { name: "React", icon: <FaReact size={28} className="text-blue-400" /> },
];

const otherSkills = [
  { name: "Git", icon: <FaGitAlt size={28} className="text-orange-600" /> },
  { name: "TailwindCSS", icon: <SiTailwindcss size={28} className="text-sky-400" /> },
  { name: "GitHub", icon: <DiGithubBadge size={28} className="text-white" /> },
  { name: "Python (Basic)", icon: <SiPython size={28} className="text-green-500" /> },
  { name: "C++ (Basic)", icon: <SiCplusplus size={28} className="text-blue-400" /> },
  { name: "C (Basic)", icon: <SiC size={28} className="text-gray-400" /> },
  { name: "Bootstrap", icon: <FaBootstrap size={28} className="text-purple-700" /> },
  { name: "ChatGPT", icon: <SiOpenai size={28} className="text-emerald-400" /> },
];

export default function Skills() {
  const { t } = useTranslation();

  return (
    <section
      id="skills"
      className="min-h-screen px-4 py-16 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white"
    >
      <div className="max-w-6xl mx-auto space-y-10">
        <FadeInWrapper>
          <h2 className="text-3xl font-bold text-purple-600 mb-6">{t("skills.title")}</h2>
        </FadeInWrapper>

        {/* Frontend Section */}
        <motion.div
          className="bg-gray-800 text-orange-300 p-6 rounded-xl shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <FadeInWrapper>
            <h3 className="text-2xl font-semibold flex items-center gap-2">
              <FaReact className="text-orange-400" />
              {t("skills.frontend")}
            </h3>
          </FadeInWrapper>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-6">
            {frontendSkills.map(({ name, icon }, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md transition flex flex-col items-center justify-center"
              >
                <div className="text-4xl mb-2">{icon}</div>
                <p className="text-center font-medium text-sm sm:text-base">{t(`skills.items.${name.toLowerCase()}`)}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Other Skills Section */}
        <motion.div
          className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold mb-4 text-purple-600 dark:text-purple-400">
            {t("skills.others")}
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {otherSkills.map(({ name, icon }, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 bg-gray-200 dark:bg-gray-700 p-3 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition"
              >
                {icon}
                <span className="font-medium text-sm sm:text-base">{t(`skills.items.${name.toLowerCase()}`)}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* GitHub Stats (Optional) */}
      <div className="mt-10 text-center">
        <h3 className="text-2xl font-bold text-purple-600 mb-4">{t("skills.githubStats")}</h3>
        <img
          src="https://github-readme-activity-graph.vercel.app/graph?username=vishalkumar-s108&theme=react-dark"
          alt="GitHub Graph"
          className="mx-auto w-full max-w-4xl rounded-lg shadow-md"
        />
      </div>
    </section>
  );
}
