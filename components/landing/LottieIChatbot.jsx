"use client";

import React, { useState, useEffect, useRef } from "react";

const API_BASE_URL = "https://eva-chatbot-production.up.railway.app";

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
    setIsChatOpen(!isChatOpen);
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
          content:
            "¡Hola! Soy Eva, tu asistente virtual. Estoy aquí para ayudarte en lo que necesites.",
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
        onClick={toggleChat}
        className="w-[98px] h-[104px] border-none bg-transparent cursor-pointer p-0 relative"
      >
        <img
          src="/assets/images/lottiChatbot.gif"
          alt="Chatbot Animation"
          className="w-full h-full object-cover"
        />
      </button>

      {isChatOpen && (
        <div
          className="fixed top-0 right-0 z-[1001] shadow-lg overflow-hidden flex flex-col"
          style={{
            width: "370px",
            height: "100dvh",
            backgroundImage: 'url("/assets/images/fondo_chat.png")',
            backgroundSize: "cover",
            backgroundPosition: "top center",
            backgroundRepeat: "no-repeat",
            borderTopLeftRadius: "48px",
            borderBottomLeftRadius: "48px",
          }}
          data-aos="fade-left"
          data-aos-duration="500"
        >
          <div className="ml-[20px] mt-[20px] self-start">
            <button
              onClick={toggleChat}
              className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-gray-200"
            >
              ✖
            </button>
          </div>

          <div className="flex-1 flex flex-col items-center overflow-y-auto px-4 py-2 space-y-4">
            <div className="w-[161px] h-[108px] bg-[#2D6DFF] rounded-bl-[24px] rounded-tr-[24px] px-3 py-2 text-white border flex flex-col items-center justify-center">
              <div
                className="text-[48px] leading-none"
                style={{ fontFamily: "HandelGothic", color: "#B1CCFF" }}
              >
                Eva
              </div>
              <div className="flex items-center gap-2 mt-1 text-[14px] font-light">
                <span>En Línea</span>
                <span
                  className="w-3 h-3 rounded-full"
                  style={{
                    background:
                      "linear-gradient(180deg, #7DEE47 0%, #1EDD31 100%)",
                  }}
                />
              </div>
            </div>

            <div className="relative w-[200px] h-[200px] min-h-[200px] flex items-center justify-center">
              <div className="absolute w-[340px] h-[340px] rounded-full border border-white/10" />
              <div className="absolute w-[286px] h-[286px] rounded-full border border-white/20" />
              <div className="absolute w-[241px] h-[241px] rounded-full border border-white/30" />
              <div className="absolute w-[205px] h-[205px] rounded-full border-2 border-white/80" />

              <div className="w-[179px] h-[179px] rounded-full overflow-hidden relative z-10">
                <video
                  src="https://s3-figma-videos-production-sig.figma.com/video/TEAM/1191228606551987000/f0d5339302028b0942efd9dbdc82467530c15fc1?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=r1UMHc-~FMQFftN4pL-XfHTBIRWhHT7FwMxpP3ZTMBv3d4ISREoClN4k36pgs94TVFC2rnuYSlOZQrV5lxN3O7BR0c-9h1CZHo4gHMNaQvsYahtC1ndeEpiW2qXk9ZfYtmSwk8PFPpKxw6OeAF8Be75TR2cuK1SgMV7lmqM4cIhc9Ziu-SMH52SPX74M~9YvG1Gzpr3I4DkaQlN8IYv9T7vbZ733VumIOps1OO5SJgdclGjwdsggSMXmWN0w4nTSpsrzHJHeKSGMQiz0~ASSrnfPxwF2p6siwG43MUOkHlh6SUZt~liOaXdgIPOZGVXJysDgVx8DgAQFMIg3gk-X4w__"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div
              className="border w-full flex-1 min-h-[200px] max-h-[400px] rounded-[24px] overflow-hidden"
              style={{ backgroundColor: "rgba(56, 116, 245, 0.76)" }}
            >
              <div className="h-full overflow-y-auto p-4">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`mb-3 max-w-[80%] ${
                      msg.role === "user"
                        ? "ml-auto bg-[#1C5DEF] border border-white text-white text-[18px] rounded-tl-lg rounded-tr-[12px] rounded-bl-lg"
                        : "mr-auto bg-white text-gray-800 text-[18px] rounded-tr-[12px] rounded-tl-lg rounded-br-lg"
                    } p-3 shadow-sm`}
                    style={{ fontFamily: "UniteaSans" }}
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
            </div>
          </div>

          <div className="p-[20px] mb-[15px]">
            <div className="flex items-center w-full gap-2">
              <div className="flex items-center bg-white rounded-full px-[10px] h-[39px] flex-1 min-w-0">
                <img
                  src="/assets/images/face.svg"
                  alt="emoji"
                  className="w-[26px] h-[26px] shrink-0"
                />
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  disabled={isLoading}
                  placeholder={
                    isLoading
                      ? "Eva está escribiendo..."
                      : "Escribe tu mensaje..."
                  }
                  className="flex-1 outline-none text-gray-500 text-[15px] bg-transparent placeholder:text-gray-400 mx-2 min-w-0"
                />
                <img
                  src="/assets/images/clip.svg"
                  alt="clip"
                  className="w-[26px] h-[26px] shrink-0"
                />
                <button
                  onClick={sendMessage}
                  disabled={isLoading || input.trim() === ""}
                  className="rounded-full overflow-hidden border-2 border-white flex items-center justify-center bg-[#3874F5] ml-2 w-[32px] h-[32px] shrink-0"
                >
                  <img
                    src="/assets/images/Gif Avion.gif"
                    alt="send"
                    className="w-[26px] h-[26px] min-w-[26px] min-h-[26px] max-w-[26px] max-h-[26px] object-contain"
                  />
                </button>
              </div>

              <div
                className="w-[39px] h-[39px] rounded-full flex items-center justify-center shrink-0"
                style={{ backgroundColor: "#FDC548" }}
              >
                <img
                  src="/assets/images/mic.png"
                  alt="mic"
                  className="w-[15px] h-[15px]"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default LottieIChatbot;
