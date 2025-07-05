import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import myPic from "../assets/vishall.jpg";
import PinnedRepoCard from "../components/PinnedRepoCard";
import TechTimeline from "../components/TechTimeline";

export default function About() {
  const { t } = useTranslation();
  const pinnedRepos = [
    {
      name: "vishal-portfolio",
      description: "My personal React portfolio using Tailwind CSS",
      stars: 4,
      url: "https://github.com/vishalkumar-s108/vishal.dev",
    },
    {
      name: "taskify",
      description: "A task manager app built with React hooks",
      stars: 3,
      url: "https://github.com/vishalkumar-s108/taskify",
    },
  ];

  return (
    <section
      id="about"
      className="min-h-screen px-4 py-16 bg-white dark:bg-gray-900 text-gray-800 dark:text-white"
    >
      <h2>{t("about.title")}</h2>
<p>{t("about.description")}</p>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <motion.img
          src={myPic}
          alt="Vishal Profile"
          className="w-52 h-52 sm:w-60 sm:h-60 object-cover rounded-full shadow-lg border-4 border-purple-500"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          loading="lazy"
        />

        <motion.div
          className="text-center md:text-left max-w-xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-purple-700 dark:text-purple-400">
            About Me
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-4">
            👋 Hi, I'm <strong>Vishal Kumar</strong>, a passionate frontend developer based in Bihar, India. I specialize in <strong>JavaScript</strong> and <strong>React.js</strong> and love building fast, responsive, and accessible web apps using tools like Tailwind CSS, Framer Motion, and React Router.
          </p>

          <p className="text-base sm:text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-4">
            ⚡ Although I’m a <strong>fresher</strong>, I’ve worked on real-world style projects like dynamic blogs, interactive portfolios, and contact forms with validation. My projects use clean UI, responsive design, and are deployed live — all from scratch.
          </p>

          <p className="text-base sm:text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-4">
            💡 I approach frontend development with a <strong>growth mindset</strong>. I continuously learn about performance optimization, semantic HTML, SEO, accessibility, and modern best practices. I enjoy solving complex UI problems and making them simple for users.
          </p>

          <p className="text-base sm:text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-4">
            👨‍💻 Besides React, I have working knowledge of <strong>C++, C, and Python (basics)</strong>. I’m comfortable with Git & GitHub, and I follow clean commit history, branching, and proper folder structure.
          </p>

          <p className="text-base sm:text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-4">
            🎯 <strong>Short-term goal:</strong> Join a company where I can grow as a frontend developer and contribute meaningfully. <br />
            🚀 <strong>Long-term goal:</strong> Become a full-stack developer and lead impactful projects that solve real problems.
          </p>

          <p className="text-base sm:text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
            🙌 Even as a fresher, what sets me apart is my passion, curiosity, and commitment to build, break, learn, and rebuild better. I don’t give up easily — I debug, research, and finish strong.
          </p>

          <a
            href="/Vishal-Resume.pdf"
            download
            className="inline-block mt-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded shadow-md transition duration-300 text-sm font-semibold"
          >
            📄 Download My Resume – See My Skills, Projects & Growth Mindset
          </a>
        </motion.div>
      </div>

     <div className="mt-16 text-center">
  <h3 className="text-2xl font-bold text-purple-600 mb-4">🏆 GitHub Achievements</h3>
  <img
    src="https://github-profile-trophy.vercel.app/?username=vishalkumar-s108&theme=tokyonight&column=7"
    alt="GitHub Trophy"
    className="mx-auto w-full max-w-4xl rounded-lg shadow-md"
    loading="lazy"
  />

  <h3 className="text-2xl font-bold text-purple-600 mt-12 mb-4">🔥 Contribution Streak</h3>
  <img
    src="https://streak-stats.demolab.com/?user=vishalkumar-s108&theme=tokyonight"
    alt="GitHub Streak"
    className="mx-auto w-full max-w-md rounded-lg shadow-md"
    loading="lazy"
  />
</div>


      <div className="mt-16">
        <TechTimeline />
      </div>

      <div className="my-16 px-4">
        <h3 className="text-2xl font-bold text-center mb-6 text-purple-600">📌 Pinned Repositories</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {pinnedRepos.map((repo, index) => (
            <PinnedRepoCard key={index} {...repo} />
          ))}
        </div>
      </div>
    </section>
  );
}
