// src/components/Chatbot.jsx
import React, { useState } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";
import { FaRobot, FaTimes } from "react-icons/fa";

const Chatbot = () => {
  const { t } = useTranslation();
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { role: "assistant", content: t("chatbot.title") },
  ]);
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { role: "user", content: input }];
    setMessages(newMessages);
    setLoading(true);
    setInput("");

    try {
    const response = await axios.post(
  `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`,
  {
    contents: [
      {
        parts: [{ text: input }]  // ✅ No role here
      }
    ]
  },
  {
    headers: {
      "Content-Type": "application/json",
    },
  }
);


      const reply =
        response.data.candidates?.[0]?.content?.parts?.[0]?.text ||
        t("chatbot.error");

      setMessages([...newMessages, { role: "assistant", content: reply }]);
    } catch (error) {
      console.error("❌ Error from Gemini API:", error);
      setMessages([
        ...newMessages,
        { role: "assistant", content: t("chatbot.error") },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {!isOpen && (
        <button
          className="fixed bottom-6 right-6 z-50 bg-purple-600 hover:bg-purple-700 text-white p-4 rounded-full shadow-lg hover:scale-110 transition-all"
          onClick={() => setIsOpen(true)}
        >
          <FaRobot className="w-6 h-6" />
        </button>
      )}

      {isOpen && (
        <div className="fixed bottom-6 right-6 w-[360px] h-[540px] bg-white dark:bg-gray-900 shadow-2xl rounded-2xl border border-gray-300 dark:border-gray-700 flex flex-col text-sm z-50">
          {/* Header */}
          <div className="flex justify-between items-center p-4 border-b dark:border-gray-700">
            <h3 className="font-bold text-purple-600 text-lg">
              {t("chatbot.title")}
            </h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-500 hover:text-red-500"
            >
              <FaTimes />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-2 space-y-2">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`p-2 rounded-lg whitespace-pre-line ${
                  msg.role === "user"
                    ? "bg-purple-100 text-right"
                    : "bg-gray-100 dark:bg-gray-700"
                }`}
              >
                {msg.content}
              </div>
            ))}
            {loading && <p className="text-gray-400">{t("chatbot.thinking")}</p>}
          </div>

          {/* Input */}
          <div className="flex p-3 gap-2 border-t dark:border-gray-700">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 p-2 border rounded-md text-black dark:text-white dark:bg-gray-800"
              placeholder={t("chatbot.placeholder")}
            />
            <button
              onClick={sendMessage}
              className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700"
            >
              {t("chatbot.send")}
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
