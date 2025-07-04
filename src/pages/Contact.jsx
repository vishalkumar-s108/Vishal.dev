import React, { useState } from "react";
import FadeInWrapper from "../components/FadeInWrapper";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    if (!name.trim() || !email.trim() || !message.trim()) {
      setError("Please fill all fields.");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email.");
      return;
    }

    setSubmitted(true);
    console.log(formData);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="min-h-screen bg-gray-100 dark:bg-gray-900 px-6 py-16 text-gray-800 dark:text-white">
      <div className="max-w-4xl mx-auto">
        <FadeInWrapper>
          <h2 className="text-4xl font-bold text-center mb-10">Contact Me</h2>
        </FadeInWrapper>

        {/* Contact Form */}
        {submitted ? (
          <motion.p
            className="text-green-500 text-center text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Thanks! I'll get back to you soon.
          </motion.p>
        ) : (
          <motion.form
            onSubmit={handleSubmit}
            className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {error && <p className="text-red-500 text-center">{error}</p>}

            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full px-4 py-2 border rounded-md bg-gray-50 dark:bg-gray-700 dark:border-gray-600 outline-none"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 border rounded-md bg-gray-50 dark:bg-gray-700 dark:border-gray-600 outline-none"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              className="w-full px-4 py-2 border rounded-md bg-gray-50 dark:bg-gray-700 dark:border-gray-600 outline-none"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <button
              type="submit"
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded shadow transition"
            >
              Send Message
            </button>
          </motion.form>
        )}

        {/* Socials */}
        <motion.div
          className="mt-12 text-center space-y-4"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <FadeInWrapper>
            <p className="text-lg">Or reach me directly:</p>
          </FadeInWrapper>

          <div className="flex justify-center flex-wrap gap-6 text-base">
            <a
              href="https://github.com/vishalkumar-s108"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-purple-600 transition"
            >
              <FaGithub /> GitHub
            </a>
            <a
              href="https://linkedin.com/in/your-linkedin"
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
        </motion.div>
      </div>
    </section>
  );
}
