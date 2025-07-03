import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="min-h-screen bg-gray-100 dark:bg-gray-900 px-6 py-16 text-gray-800 dark:text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10">Contact Me</h2>

        {/* Contact Form */}
        <form className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 border rounded-md bg-gray-50 dark:bg-gray-700 dark:border-gray-600 outline-none"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 border rounded-md bg-gray-50 dark:bg-gray-700 dark:border-gray-600 outline-none"
              required
            />
          </div>
          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full px-4 py-2 border rounded-md bg-gray-50 dark:bg-gray-700 dark:border-gray-600 outline-none"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded shadow transition"
          >
            Send Message
          </button>
        </form>

        {/* Socials */}
       {/* Socials */}
<div className="mt-12 text-center space-y-4">
  <p className="text-lg">Or reach me directly:</p>
  <div className="flex justify-center flex-wrap gap-6 text-base">
    <a
      href="https://github.com/vishalrishabh108"
      target="_blank"
      rel="noreferrer"
      className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-purple-600 transition"
    >
      <FaGithub /> GitHub
    </a>
    <a
      href="https://linkedin.com/in/vishalrishabh108" // correct LinkedIn if available
      target="_blank"
      rel="noreferrer"
      className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-purple-600 transition"
    >
      <FaLinkedin /> LinkedIn
    </a>
    <a
      href="mailto:vishalrishabh108@gmail.com"
      className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-purple-600 transition"
    >
      <FaEnvelope /> Email
    </a>
    <a
      href="tel:+917292869873"
      className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-purple-600 transition"
    >
      <FaPhone /> +91 72928 69873
    </a>
  </div>
</div>

      </div>
    </section>
  );
}
