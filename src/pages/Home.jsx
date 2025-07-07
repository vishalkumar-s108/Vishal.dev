import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { AiOutlineArrowDown } from "react-icons/ai";
import { FaReact, FaGitAlt, FaBootstrap } from "react-icons/fa";
import {
  SiJavascript,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiPython,
  SiCplusplus,
  SiOpenai,
} from "react-icons/si";
import { DiGithubBadge } from "react-icons/di";
import { motion } from "framer-motion";
import FadeInWrapper from "../components/FadeInWrapper";

const getGreeting = (t) => {
  const hour = new Date().getHours();
  if (hour < 12) return "🌅 " + t("greetings.morning");
  if (hour < 17) return "🌞 " + t("greetings.afternoon");
  if (hour < 20) return "🌇 " + t("greetings.evening");
  return "🌙 " + t("greetings.night");
};
export default function Home() {
  const { t } = useTranslation();

  return (
    <section
      id="home"
      className="pt-24 min-h-screen bg-gradient-to-r from-gray-900 to-gray-800 text-white px-4 py-10 flex flex-col items-center justify-center relative"
    >
      {/* Scroll Down Icon */}
      <div className="absolute bottom-6">
        <AiOutlineArrowDown className="text-3xl animate-bounce text-white" aria-label="Scroll Down" />
      </div>

      <div className="max-w-5xl w-full text-center flex flex-col items-center space-y-6">
        {/* Profile Photo */}
        <motion.img
          src="/vishall.jpg"
          alt="Vishal's Profile Picture"
          loading="lazy"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="w-32 sm:w-40 h-32 sm:h-40 rounded-full object-cover border-4 border-purple-500 shadow-lg"
        />

        {/* Intro Text */}
        <FadeInWrapper delay={0.2}>
          <h1 className="text-3xl sm:text-4xl font-bold">
            {getGreeting(t)}, <span className="text-purple-400">{t("home.name")}</span>
          </h1>
          <p className="text-base sm:text-lg max-w-2xl">{t("home.description")}</p>
        </FadeInWrapper>

    
        {/* Buttons */}
       <div className="flex flex-col sm:flex-row gap-4 mt-4">
  <motion.a
    href="/vishal-Resume.pdf"
    download
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-2 rounded-full transition shadow-lg"
  >
    {t("home.resume")}
  </motion.a>

  <Link
    to="/resume"
    className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-2 rounded-full transition shadow-lg"
  >
    {t("home.timeline")}
  </Link>
</div>

        {/* Frontend Skills */}
        <motion.div
          className="bg-[#1e1e2f] rounded-2xl shadow-xl p-6 w-full max-w-3xl mt-10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold text-orange-300 flex items-center gap-2 justify-center mb-6">
            <FaReact className="text-cyan-400" /> {t("home.frontendSkills")}
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            <SkillCard icon={<SiHtml5 size={28} className="text-orange-500" />} name="HTML" />
            <SkillCard icon={<SiCss3 size={28} className="text-blue-500" />} name="CSS" />
            <SkillCard icon={<SiJavascript size={28} className="text-yellow-400" />} name="JavaScript" />
            <SkillCard icon={<FaReact size={28} className="text-cyan-400" />} name="React" />
            <SkillCard icon={<SiTailwindcss size={28} className="text-sky-400" />} name="TailwindCSS" />
            <SkillCard icon={<FaBootstrap size={28} className="text-purple-500" />} name="Bootstrap" />
          </div>
        </motion.div>

        {/* Other Skills */}
        <motion.div
          className="bg-[#1e1e2f] rounded-2xl shadow-xl p-6 w-full max-w-3xl mt-10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold text-green-300 text-center mb-6">
            {t("home.otherSkills")}
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            <SkillCard icon={<FaGitAlt size={28} className="text-red-500" />} name="Git" />
            <SkillCard icon={<DiGithubBadge size={28} className="text-white" />} name="GitHub" />
            <SkillCard icon={<SiPython size={28} className="text-yellow-200" />} name="Python (Basic)" />
            <SkillCard icon={<SiCplusplus size={28} className="text-blue-300" />} name="C++ (Basic)" />
            <SkillCard icon={<SiOpenai size={28} className="text-green-400" />} name="ChatGPT" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// SkillCard Component
const SkillCard = ({ icon, name }) => (
  <motion.div
    className="bg-[#2d2d40] p-4 rounded-xl flex flex-col items-center hover:scale-105 transition"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
  >
    {icon}
    <span className="mt-2 text-sm sm:text-base text-center">{name}</span>
  </motion.div>
);
