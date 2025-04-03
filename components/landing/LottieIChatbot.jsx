"use client";

import React, { useState, useEffect, useRef } from "react";

const API_BASE_URL = "https://eva-llama-backend.onrender.com";

function LottieIChatbot() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isOnline, setIsOnline] = useState(null);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleClick = (phoneNumber) => {
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
    setIsMenuOpen(false);
  };

  const sendMessage = async () => {
    if (input.trim() === "" || isLoading) return;

    const userMessage = { id: Date.now(), role: "user", content: input };
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    const userInput = input;
    setInput("");

    try {
      setIsLoading(true);

      const conversationHistory = messages
        .map(
          (msg) =>
            `${msg.role === "user" ? "Usuario" : "Asistente"}: ${msg.content}`
        )
        .join("\n");

      const fullMessage = `${conversationHistory}\nUsuario: ${userInput}\nAsistente:`;

      const response = await fetch(`${API_BASE_URL}/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: fullMessage }),
      });

      if (!response.ok) {
        throw new Error(`Servidor respondió con ${response.status}`);
      }

      const data = await response.json();

      const botMessage = {
        id: Date.now(),
        role: "assistant",
        content:
          data.response && data.response.trim() !== ""
            ? data.response
            : "🤖 No tengo una respuesta en este momento. ¿Podrías reformular tu pregunta?",
      };

      setMessages((prevMessages) => [...prevMessages, botMessage]);
      setError(null);
    } catch (err) {
      console.error("Error en el fetch:", err.message, err);
      setError(
        "No se pudo conectar con el servidor. Por favor, intenta más tarde."
      );

      const errorMessage = {
        id: Date.now(),
        role: "assistant",
        content:
          "Lo siento, ocurrió un problema técnico. Intenta de nuevo más tarde.",
      };

      setMessages((prevMessages) => [...prevMessages, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  useEffect(() => {
    if (isChatOpen && messages.length === 0) {
      setMessages([
        {
          id: Date.now(),
          role: "assistant",
          content: "¡Hola! Soy Eva, ¿Cómo te llamas?",
        },
      ]);

      fetch(`${API_BASE_URL}/`)
        .then((res) => setIsOnline(res.ok))
        .catch(() => setIsOnline(false));
    }
  }, [isChatOpen]);

  return (
    <div className="fixed bottom-[25px] right-[21px] sm:right-[21px] md:right-[49px] lg:right-[71px] z-[1000]">
      <button
        onClick={toggleMenu}
        className="w-[98px] h-[104px] border-none bg-transparent cursor-pointer p-0 relative"
      >
        <img
          src="/assets/images/lottiChatbot.gif"
          alt="Chatbot Animation"
          className="w-full h-full object-cover"
        />
      </button>

      {isMenuOpen && (
        <div className="absolute bottom-[120px] right-0 bg-white shadow-lg rounded-lg p-4">
          <p
            className="text-[17px] font-semibold mb-2"
            style={{ fontFamily: "HandelGothic", color: "#0B0C28" }}
          >
            Contactanos!
          </p>

          <button
            onClick={toggleChat}
            className="block w-full text-left py-2 px-4 hover:bg-gray-100 border border-[#0B0C28] rounded-[10px] mb-[10px]"
            style={{ fontFamily: "HandelGothic", color: "#0B0C28" }}
          >
            👩🏼‍🚀 Eva
          </button>
          <button
            onClick={() => handleClick("573053456611")}
            className="block w-full text-left py-2 px-4 hover:bg-gray-100 border border-[#0B0C28] rounded-[10px] mb-[10px]"
            style={{ fontFamily: "HandelGothic", color: "#0B0C28" }}
          >
            🇨🇴 COL
          </button>
          <button
            onClick={() => handleClick("16893312690")}
            className="block w-full text-left py-2 px-4 hover:bg-gray-100 border border-[#0B0C28] rounded-[10px]"
            style={{ fontFamily: "HandelGothic", color: "#0B0C28" }}
          >
            🇺🇸 EU
          </button>
        </div>
      )}

      {isChatOpen && (
        <div className="fixed bottom-[130px] left-[21px] right-[21px] sm:left-[21px] sm:right-[21px] md:left-[49px] md:right-[49px] lg:left-[71px] lg:right-[71px] max-w-[350px] ml-auto h-[450px] bg-white shadow-lg rounded-lg flex flex-col overflow-hidden">
          <div className="flex justify-between items-center p-3 bg-blue-600 text-white">
            <h3 className="text-lg font-semibold">EVA</h3>
            <button
              onClick={toggleChat}
              className="text-white hover:text-red-200"
            >
              ✖
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-3 bg-gray-50">
            {isOnline !== null && (
              <div
                className={`text-sm text-center p-1 ${
                  isOnline ? "text-green-600" : "text-red-600"
                }`}
              ></div>
            )}

            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`mb-3 max-w-[80%] ${
                  msg.role === "user"
                    ? "ml-auto bg-blue-500 text-white rounded-tl-lg rounded-tr-lg rounded-bl-lg"
                    : "mr-auto bg-gray-200 text-gray-800 rounded-tr-lg rounded-tl-lg rounded-br-lg"
                } p-3 shadow-sm`}
              >
                {msg.content}
              </div>
            ))}

            {error && (
              <div className="text-red-500 text-sm p-2 mb-3 bg-red-50 rounded border border-red-200">
                {error}
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          <div className="border-t p-3 bg-white">
            <div className="flex items-center">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                disabled={isLoading}
                className="flex-1 border border-gray-300 p-2 rounded-lg resize-none h-[50px]"
                placeholder="Escribe un mensaje..."
                rows="1"
              />
              <button
                onClick={sendMessage}
                disabled={isLoading || input.trim() === ""}
                className={`ml-2 px-4 py-2 rounded-lg ${
                  isLoading || input.trim() === ""
                    ? "bg-gray-300 cursor-not-allowed"
                    : "bg-blue-500 hover:bg-blue-600"
                } text-white transition`}
              >
                {isLoading ? (
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                ) : (
                  "Enviar"
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default LottieIChatbot;