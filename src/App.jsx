import React from 'react';

import { Routes, Route } from "react-router-dom";
import './i18n'; // i18next config
import Resume from "./pages/Resume";
import BackToTop from "./components/Backtoback";
import Testimonials from "./components/Testimonials";
import Skills from "./pages/Skills";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Blog from "./pages/Blog";
import Chatbot from "./components/Chatbot";
import NotFound from "./pages/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";
import NDAProjects from "./pages/NDAProjects";
import LiveCodeEditor from "./components/LiveCodeEditor";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="*" element={<NotFound />} />

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/resume" element={<Resume />} />
         <Route
          path="/nda-projects"
          element={
            <ProtectedRoute>
              <NDAProjects />
            </ProtectedRoute>
          }
        />
       <Route path="/playground" element={<LiveCodeEditor />} />

      </Routes>

      <Testimonials />
      <BackToTop />
      <Chatbot />
    </>
  );
}

export default App;
