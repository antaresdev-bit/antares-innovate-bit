// "use client";

// import React, { useState, useEffect, useRef } from "react";
// import EvaVideoDesktop from "../chatbotComponents/EvaVideoDesktop";
// import EvaVideoMobile from "../chatbotComponents/EvaVideoMobile";

// const API_BASE_URL = "https://eva-chatbot-production.up.railway.app";

// const LinkifyText = ({ text }) => {
//   const normalizedText = text.replace(/\n/g, " ").replace(/\s+/g, " ").trim();

//   const parts = [];
//   let remainingText = normalizedText;

//   const emailIndex = remainingText.indexOf("contacto@antaresinnovate.com");
//   if (emailIndex >= 0) {
//     if (emailIndex > 0) {
//       parts.push(
//         <span key="pre-email">{remainingText.substring(0, emailIndex)}</span>
//       );
//     }

//     parts.push(
//       <div key="email">
//         <a
//           href="mailto:contacto@antaresinnovate.com"
//           style={{
//             color: "#2D6DFF",
//             textDecoration: "underline",
//             fontSize: "15px",
//           }}
//         >
//           contacto@antaresinnovate.com
//         </a>
//       </div>
//     );

//     remainingText = remainingText.substring(
//       emailIndex + "contacto@antaresinnovate.com".length
//     );
//   }

//   // Procesamos WhatsApp Colombia
//   const whatsappColIndex = remainingText.indexOf("573053456611");
//   if (whatsappColIndex >= 0) {
//     parts.push(
//       <div key="whatsapp-col">
//         🇨🇴 WhatsApp:{" "}
//         <a
//           href="https://wa.me/573053456611"
//           target="_blank"
//           rel="noopener noreferrer"
//           style={{ color: "#2D6DFF", textDecoration: "underline" }}
//         >
//           Link
//         </a>
//       </div>
//     );
//     remainingText = remainingText.substring(
//       whatsappColIndex + "573053456611".length
//     );
//   }

//   // Procesamos WhatsApp USA
//   const whatsappUsaIndex = remainingText.indexOf("16893312690");
//   if (whatsappUsaIndex >= 0) {
//     parts.push(
//       <div key="whatsapp-usa">
//         🇺🇸 WhatsApp:{" "}
//         <a
//           href="https://wa.me/16893312690"
//           target="_blank"
//           rel="noopener noreferrer"
//           style={{ color: "#2D6DFF", textDecoration: "underline" }}
//         >
//           Link
//         </a>
//       </div>
//     );
//     remainingText = remainingText.substring(
//       whatsappUsaIndex + "16893312690".length
//     );
//   }

//   // Texto restante
//   if (remainingText.trim().length > 0) {
//     parts.push(<div key="remaining-text">{remainingText.trim()}</div>);
//   }

//   return <div style={{ lineHeight: "1.6" }}>{parts}</div>;
// };

// function LottieIChatbot() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isChatOpen, setIsChatOpen] = useState(false);
//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState("");
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [isOnline, setIsOnline] = useState(null);
//   const [isMobile, setIsMobile] = useState(false);
//   const messagesEndRef = useRef(null);

//   useEffect(() => {
//     const checkIfMobile = () => {
//       setIsMobile(window.innerWidth < 768);
//     };

//     checkIfMobile();
//     window.addEventListener("resize", checkIfMobile);

//     return () => window.removeEventListener("resize", checkIfMobile);
//   }, []);

//   const scrollToBottom = () => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   };

//   useEffect(() => {
//     scrollToBottom();
//   }, [messages]);

//   const handleClick = (phoneNumber) => {
//     setIsChatOpen(!isChatOpen);
//   };

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const toggleChat = () => {
//     setIsChatOpen(!isChatOpen);
//     setIsMenuOpen(false);
//   };

//   const sendMessage = async () => {
//     if (input.trim() === "" || isLoading) return;

//     const userMessage = { id: Date.now(), role: "user", content: input };
//     setMessages((prevMessages) => [...prevMessages, userMessage]);

//     const userInput = input;
//     setInput("");

//     try {
//       setIsLoading(true);

//       const conversationHistory = messages
//         .map(
//           (msg) =>
//             `${msg.role === "user" ? "Usuario" : "Asistente"}: ${msg.content}`
//         )
//         .join("\n");

//       const fullMessage = `${conversationHistory}\nUsuario: ${userInput}\nAsistente:`;

//       const response = await fetch(`${API_BASE_URL}/chat`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ message: fullMessage }),
//       });

//       if (!response.ok) {
//         throw new Error(`Servidor respondió con ${response.status}`);
//       }

//       const data = await response.json();

//       const botMessage = {
//         id: Date.now(),
//         role: "assistant",
//         content:
//           data.response && data.response.trim() !== ""
//             ? data.response
//             : "🤖 No tengo una respuesta en este momento. ¿Podrías reformular tu pregunta?",
//       };

//       setMessages((prevMessages) => [...prevMessages, botMessage]);
//       setError(null);
//     } catch (err) {
//       console.error("Error en el fetch:", err.message, err);
//       setError(
//         "No se pudo conectar con el servidor. Por favor, intenta más tarde."
//       );

//       const errorMessage = {
//         id: Date.now(),
//         role: "assistant",
//         content:
//           "Lo siento, ocurrió un problema técnico. Intenta de nuevo más tarde.",
//       };

//       setMessages((prevMessages) => [...prevMessages, errorMessage]);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleKeyPress = (e) => {
//     if (e.key === "Enter" && !e.shiftKey) {
//       e.preventDefault();
//       sendMessage();
//     }
//   };

//   useEffect(() => {
//     if (isChatOpen && messages.length === 0) {
//       setMessages([
//         {
//           id: Date.now(),
//           role: "assistant",
//           content:
//             "¡Hola! Soy Eva, tu asistente virtual. ¿me podrías indicar tu nombre?",
//         },
//       ]);

//       fetch(`${API_BASE_URL}/`)
//         .then((res) => setIsOnline(res.ok))
//         .catch(() => setIsOnline(false));
//     }
//   }, [isChatOpen]);

//   return (
//     <div className="fixed bottom-[25px] right-[21px] sm:right-[21px] md:right-[49px] lg:right-[71px] z-[1000]">
//       <button
//         onClick={toggleChat}
//         className="w-[98px] h-[104px] border-none bg-transparent cursor-pointer p-0 relative"
//       >
//         <img
//           src="/assets/images/lottiChatbot.gif"
//           alt="Chatbot Animation"
//           className="w-full h-full object-cover"
//         />
//       </button>

//       {isChatOpen && (
//         <div
//           className="fixed top-0 right-0 z-[1001] shadow-lg overflow-hidden flex flex-col"
//           style={{
//             width: "370px",
//             height: "100dvh",
//             backgroundImage: 'url("/assets/images/fondo_chat.png")',
//             backgroundSize: "cover",
//             backgroundPosition: "top center",
//             backgroundRepeat: "no-repeat",
//             borderTopLeftRadius: "48px",
//             borderBottomLeftRadius: "48px",
//           }}
//           data-aos="fade-left"
//           data-aos-duration="500"
//         >
//           <div className="ml-[20px] mt-[20px] self-start">
//             <button
//               onClick={toggleChat}
//               className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-gray-200"
//             >
//               ✖
//             </button>
//           </div>

//           <div className="flex-1 flex flex-col items-center overflow-y-auto px-4 py-2 space-y-4">
//             <div className="w-[161px] h-[108px] bg-[#2D6DFF] rounded-bl-[24px] rounded-tr-[24px] px-3 py-2 text-white border flex flex-col items-center justify-center">
//               <div
//                 className="text-[48px] leading-none"
//                 style={{ fontFamily: "HandelGothic", color: "#B1CCFF" }}
//               >
//                 Eva
//               </div>
//               <div className="flex items-center gap-2 mt-1 text-[14px] font-light">
//                 <span>En Línea</span>
//                 <span
//                   className="w-3 h-3 rounded-full"
//                   style={{
//                     background:
//                       "linear-gradient(180deg, #7DEE47 0%, #1EDD31 100%)",
//                   }}
//                 />
//               </div>
//             </div>

//             {isMobile ? <EvaVideoMobile /> : <EvaVideoDesktop />}

//             <div
//               className="border w-full flex-1 min-h-[200px] max-h-[400px] rounded-[24px] overflow-hidden"
//               style={{ backgroundColor: "rgba(56, 116, 245, 0.76)" }}
//             >
//               <div className="h-full overflow-y-auto p-4">
//                 {messages.map((msg) => (
//                   <div
//                     key={msg.id}
//                     className={`mb-3 max-w-[80%] ${
//                       msg.role === "user"
//                         ? "ml-auto bg-[#1C5DEF] border border-white text-white text-[18px] rounded-tl-lg rounded-tr-[12px] rounded-bl-lg"
//                         : "mr-auto bg-white text-gray-800 text-[18px] rounded-tr-[12px] rounded-tl-lg rounded-br-lg"
//                     } p-3 shadow-sm`}
//                     style={{ fontFamily: "UniteaSans" }}
//                   >
//                     <LinkifyText text={msg.content} />
//                     {/*  {msg.content} */}
//                   </div>
//                 ))}
//                 {error && (
//                   <div className="text-red-500 text-sm p-2 mb-3 bg-red-50 rounded border border-red-200">
//                     {error}
//                   </div>
//                 )}
//                 <div ref={messagesEndRef} />
//               </div>
//             </div>
//           </div>

//           <div className="p-[20px] mb-[15px]">
//             <div className="flex items-center w-full gap-2">
//               <div className="flex items-center bg-white rounded-full px-[10px] h-[39px] flex-1 min-w-0">
//                 <img
//                   src="/assets/images/face.svg"
//                   alt="emoji"
//                   className="w-[26px] h-[26px] shrink-0"
//                 />
//                 <input
//                   value={input}
//                   onChange={(e) => setInput(e.target.value)}
//                   onKeyPress={handleKeyPress}
//                   disabled={isLoading}
//                   placeholder={
//                     isLoading
//                       ? "Eva está escribiendo..."
//                       : "Escribe tu mensaje..."
//                   }
//                   className="flex-1 outline-none text-gray-500 text-[15px] bg-transparent placeholder:text-gray-400 mx-2 min-w-0"
//                 />
//                 {/* <img
//                   src="/assets/images/clip.svg"
//                   alt="clip"
//                   className="w-[26px] h-[26px] shrink-0"
//                 /> */}
//                 <button
//                   onClick={sendMessage}
//                   disabled={isLoading || input.trim() === ""}
//                   className="rounded-full overflow-hidden border-2 border-white flex items-center justify-center bg-[#3874F5] ml-2 w-[32px] h-[32px] shrink-0"
//                 >
//                   <img
//                     src="/assets/images/Gif Avion.gif"
//                     alt="send"
//                     className="w-[26px] h-[26px] min-w-[26px] min-h-[26px] max-w-[26px] max-h-[26px] object-contain"
//                   />
//                 </button>
//               </div>
//               {/* <div
//                 className="w-[39px] h-[39px] rounded-full flex items-center justify-center shrink-0"
//                 style={{ backgroundColor: "#FDC548" }}
//               >
//                 <img
//                   src="/assets/images/mic.png"
//                   alt="mic"
//                   className="w-[15px] h-[15px]"
//                 />
//               </div> */}
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default LottieIChatbot;

"use client";

import React, { useState, useEffect, useRef } from "react";
import EvaVideoDesktop from "../chatbotComponents/EvaVideoDesktop";
import EvaVideoMobile from "../chatbotComponents/EvaVideoMobile";
import { useTranslations } from "next-intl";

const API_BASE_URL = "https://eva-chatbot-production.up.railway.app";

const LinkifyText = ({ text }) => {
  const normalizedText = text.replace(/\n/g, " ").replace(/\s+/g, " ").trim();

  const parts = [];
  let remainingText = normalizedText;

  const emailIndex = remainingText.indexOf("contacto@antaresinnovate.com");
  if (emailIndex >= 0) {
    if (emailIndex > 0) {
      parts.push(
        <span key="pre-email">{remainingText.substring(0, emailIndex)}</span>
      );
    }

    parts.push(
      <div key="email">
        <a
          href="mailto:contacto@antaresinnovate.com"
          style={{
            color: "#2D6DFF",
            textDecoration: "underline",
            fontSize: "15px",
          }}
        >
          contacto@antaresinnovate.com
        </a>
      </div>
    );

    remainingText = remainingText.substring(
      emailIndex + "contacto@antaresinnovate.com".length
    );
  }

  const whatsappColIndex = remainingText.indexOf("573053456611");
  if (whatsappColIndex >= 0) {
    parts.push(
      <div key="whatsapp-col">
        🇨🇴 WhatsApp:{" "}
        <a
          href="https://wa.me/573053456611"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#2D6DFF", textDecoration: "underline" }}
        >
          Link
        </a>
      </div>
    );
    remainingText = remainingText.substring(
      whatsappColIndex + "573053456611".length
    );
  }

  const whatsappUsaIndex = remainingText.indexOf("16893312690");
  if (whatsappUsaIndex >= 0) {
    parts.push(
      <div key="whatsapp-usa">
        🇺🇸 WhatsApp:{" "}
        <a
          href="https://wa.me/16893312690"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#2D6DFF", textDecoration: "underline" }}
        >
          Link
        </a>
      </div>
    );
    remainingText = remainingText.substring(
      whatsappUsaIndex + "16893312690".length
    );
  }

  if (remainingText.trim().length > 0) {
    parts.push(<div key="remaining-text">{remainingText.trim()}</div>);
  }

  return <div style={{ lineHeight: "1.6" }}>{parts}</div>;
};

function LottieIChatbot() {
  const t = useTranslations("evaChatbot");

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isOnline, setIsOnline] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const messagesEndRef = useRef(null);
  const recognitionRef = useRef(null);
  const speechSynthesisRef = useRef(null);
  const utteranceRef = useRef(null);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = false;
      recognitionRef.current.interimResults = false;
      recognitionRef.current.lang = "es-ES";

      recognitionRef.current.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setIsListening(false);
        setTimeout(() => {
          sendMessage(transcript);
        }, 500);
      };

      recognitionRef.current.onerror = (event) => {
        console.error("Error en reconocimiento de voz:", event.error);
        setIsListening(false);
        setError("Error en el reconocimiento de voz. Intenta nuevamente.");
      };

      recognitionRef.current.onend = () => {
        if (isListening) recognitionRef.current.start();
      };
    }

    if (typeof window !== "undefined" && window.speechSynthesis) {
      speechSynthesisRef.current = window.speechSynthesis;
      // Asegura que las voces estén disponibles
      window.speechSynthesis.onvoiceschanged = () => {
        speechSynthesisRef.current.getVoices();
      };
    }

    return () => {
      window.removeEventListener("resize", checkIfMobile);
      if (recognitionRef.current) recognitionRef.current.stop();
      if (utteranceRef.current) speechSynthesisRef.current.cancel();
    };
  }, []);

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

  const startListening = () => {
    if (!recognitionRef.current) {
      setError("El reconocimiento de voz no es compatible con tu navegador");
      return;
    }

    if (isListening) {
      recognitionRef.current.stop();
      setIsListening(false);
    } else {
      try {
        setInput("");
        recognitionRef.current.start();
        setIsListening(true);
        setError(null);
      } catch (err) {
        console.error("Error al iniciar reconocimiento de voz:", err);
        ("❌ No pudimos acceder al micrófono. Por favor, ve a Ajustes > Safari > Micrófono y actívalo manualmente para este sitio.");
      }
    }
  };

  const getBestSpanishVoice = () => {
    const voices = speechSynthesis.getVoices();

    const preferred = voices.find((v) =>
      ["Microsoft Francisca"].some((name) => v.name.includes(name))
    );

    const fallback = voices.find((v) => v.lang.startsWith("es"));

    return preferred || fallback || voices[0];
  };

  const speak = (text) => {
    if (!speechSynthesisRef.current || !text) {
      console.warn("Síntesis de voz no disponible o texto vacío.");
      return;
    }

    // Cancelar cualquier utterance activa
    speechSynthesisRef.current.cancel();

    const voice = getBestSpanishVoice();

    const processedText = text

      .replace(/\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/gi, "")
      .replace(/\+?\d{7,15}/g, "")
      .replace(
        /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|\uD83E[\uDD00-\uDFFF])/g,
        ""
      )

      .replace(/\./g, ". ")
      .replace(/,/g, ", ")
      .replace(/([¡!¿?])/g, "$1 ")
      .replace(/\s+/g, " ")
      .trim();

    const utterance = new SpeechSynthesisUtterance(processedText);
    utterance.rate = 1.1;
    utterance.pitch = 1.1;
    utterance.volume = 1.0;

    if (voice) {
      utterance.voice = voice;
      console.log("🗣️ Voz seleccionada:", voice.name, voice.lang);
    } else {
      console.warn("⚠️ No se encontró una voz española adecuada.");
    }

    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = (err) => {
      console.error("❌ Error en síntesis de voz:", err);
      setIsSpeaking(false);
    };

    utteranceRef.current = utterance;

    setTimeout(() => {
      speechSynthesisRef.current.speak(utterance);
    }, 100);
  };

  const sendMessage = async (voiceInput = null) => {
    const messageToSend = voiceInput !== null ? voiceInput : input;

    if (messageToSend.trim() === "" || isLoading) return;

    const userMessage = {
      id: Date.now(),
      role: "user",
      content: messageToSend,
    };
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    const userInput = messageToSend;

    if (voiceInput === null) {
      setInput("");
    }

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

      if (voiceInput !== null) {
        speak(botMessage.content);
      }
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
      speak(errorMessage.content);
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
      const welcomeMessage = {
        id: Date.now(),
        role: "assistant",
        content: t("initialGreeting"),
      };

      setMessages([welcomeMessage]);
      //speak(welcomeMessage.content);

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

            {isMobile ? <EvaVideoMobile /> : <EvaVideoDesktop />}

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
                    <LinkifyText text={msg.content} />
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
                  disabled={isLoading || isListening}
                  placeholder={
                    isLoading
                      ? "Eva está escribiendo..."
                      : isListening
                      ? "Escuchando..."
                      : "Escribe tu mensaje..."
                  }
                  className="flex-1 outline-none text-gray-500 text-[15px] bg-transparent placeholder:text-gray-400 mx-2 min-w-0"
                />

                <button
                  onClick={() => sendMessage()}
                  disabled={isLoading || input.trim() === "" || isListening}
                  className="rounded-full overflow-hidden border-2 border-white flex items-center justify-center bg-[#3874F5] ml-2 w-[32px] h-[32px] shrink-0"
                >
                  <img
                    src="/assets/images/Gif Avion.gif"
                    alt="send"
                    className="w-[26px] h-[26px] min-w-[26px] min-h-[26px] max-w-[26px] max-h-[26px] object-contain"
                  />
                </button>
              </div>
              <button
                onClick={() => startListening()}
                className={`w-[39px] h-[39px] rounded-full flex items-center justify-center shrink-0 ${
                  isListening ? "bg-red-500" : "bg-[#FDC548]"
                }`}
                disabled={isSpeaking || isLoading}
              >
                <img
                  src="/assets/images/mic.png"
                  alt="mic"
                  className="w-[15px] h-[15px]"
                />
                {isListening && (
                  <span className="absolute inline-flex h-6 w-6 rounded-full bg-red-400 opacity-75 animate-ping"></span>
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
