import React from "react";
import { AiOutlineArrowDown } from "react-icons/ai";

import { FaReact, FaGitAlt, FaBootstrap } from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiHtml5, SiCss3, SiPython, SiCplusplus, SiOpenai } from "react-icons/si";
import { DiGithubBadge } from "react-icons/di";

export default function Home() {
  return (
    
    <section className=" pt-20 min-h-screen bg-gradient-to-r from-gray-900 to-gray-800 text-white px-4 py-10 flex flex-col items-center justify-center pt-20">
      <div className="absolute bottom-6">
        <AiOutlineArrowDown className="text-3xl animate-bounce text-white" />
      </div>
      <div className="max-w-5xl w-full text-center flex flex-col items-center space-y-6">
        {/* Profile Photo */}
        <img
          src="/vishal.jpg"
          alt="Vishal"
          className="w-40 h-40 rounded-full object-cover border-4 border-purple-500 shadow-lg"
        />

        <h1 className="text-4xl font-bold">Hi, I'm Vishal</h1>
        <p className="text-lg max-w-2xl">
          A passionate Frontend Developer from Bihar. I love turning ideas into beautiful, responsive websites.
        </p>

        {/* Resume Button */}
        <a
          href="/vishal-Resume.pdf"
          download
          className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-2 rounded-full transition"
        >
          📄 Download Resume
        </a>

        {/* FRONTEND SKILLS */}
        <div className="bg-[#1e1e2f] rounded-2xl shadow-xl p-6 w-full max-w-3xl mt-10">
          <h2 className="text-2xl font-bold text-orange-300 flex items-center gap-2 justify-center mb-6">
            <FaReact className="text-cyan-400" /> Frontend Skills
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <SkillCard icon={<SiHtml5 size={30} className="text-orange-500" />} name="HTML" />
            <SkillCard icon={<SiCss3 size={30} className="text-blue-500" />} name="CSS" />
            <SkillCard icon={<SiJavascript size={30} className="text-yellow-400" />} name="JavaScript" />
            <SkillCard icon={<FaReact size={30} className="text-cyan-400" />} name="React" />
            <SkillCard icon={<SiTailwindcss size={30} className="text-sky-400" />} name="TailwindCSS" />
            <SkillCard icon={<FaBootstrap size={30} className="text-purple-500" />} name="Bootstrap" />
          </div>
        </div>

        {/* OTHER SKILLS */}
        <div className="bg-[#1e1e2f] rounded-2xl shadow-xl p-6 w-full max-w-3xl mt-10">
          <h2 className="text-2xl font-bold text-green-300 text-center mb-6">Other Skills</h2>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <SkillCard icon={<FaGitAlt size={30} className="text-red-500" />} name="Git" />
            <SkillCard icon={<DiGithubBadge size={30} className="text-white" />} name="GitHub" />
            <SkillCard icon={<SiPython size={30} className="text-yellow-200" />} name="Python (Basic)" />
            <SkillCard icon={<SiCplusplus size={30} className="text-blue-300" />} name="C++ (Basic)" />
            <SkillCard icon={<SiOpenai size={30} className="text-green-400" />} name="ChatGPT" />
          </div>
        </div>
      </div>
    </section>
  );
}

// SkillCard Component
const SkillCard = ({ icon, name }) => (
  <div className="bg-[#2d2d40] p-4 rounded-xl flex flex-col items-center hover:scale-105 transition">
    {icon}
    <span className="mt-2">{name}</span>
  </div>
);
