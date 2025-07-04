import { Routes, Route } from "react-router-dom";
import BackToTop from "./components/Backtoback";
import Testimonials from "./components/Testimonials";
import Skills from "./pages/Skills";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Blog from "./pages/Blog";

function App() {
  return (
    <>
      <Testimonials /> {/* Corrected here */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <BackToTop />
    </>
  );
}

export default App;
