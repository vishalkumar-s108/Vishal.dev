// src/components/Terminal.jsx
import React, { useState } from "react";

export default function Terminal() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([]);

  const handleCommand = (command) => {
    let response = "";

    switch (command.toLowerCase()) {
      case "help":
        response = "Available commands: about, projects, skills, contact, clear";
        break;
      case "about":
        response = "I'm Vishal, a React developer passionate about building beautiful UIs.";
        break;
      case "projects":
        response = "Check out: https://vishal-s.netlify.app/#projects";
        break;
      case "skills":
        response = "HTML, CSS, JavaScript, React, Tailwind, Node.js";
        break;
      case "contact":
        response = "Email: vishal@example.com | LinkedIn: linkedin.com/in/vishalkumar";
        break;
      case "clear":
        setHistory([]);
        return;
      default:
        response = `Command not found: ${command}`;
    }

    setHistory((prev) => [...prev, { command, response }]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    handleCommand(input);
    setInput("");
  };

  return (
    <div className="bg-black text-green-400 p-4 font-mono rounded-lg min-h-[400px]">
      {history.map((entry, idx) => (
        <div key={idx}>
          <div className="text-green-500">$ {entry.command}</div>
          <div className="pl-4">{entry.response}</div>
        </div>
      ))}

      <form onSubmit={handleSubmit} className="flex mt-4">
        <span className="text-green-500 mr-2">$</span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          autoFocus
          className="bg-black text-green-400 border-none outline-none flex-1"
        />
      </form>
    </div>
  );
}
