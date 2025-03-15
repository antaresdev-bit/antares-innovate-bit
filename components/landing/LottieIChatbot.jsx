// "use client"
// import React, { useState, useEffect, useRef } from "react";

// // Configura la URL base del API
// const API_BASE_URL = "http://localhost:9000"; // Cambia esto en producción

// function LottieIChatbot() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState("");
//   const [sessionId, setSessionId] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const messagesEndRef = useRef(null);

//   // Scroll to bottom whenever messages change
//   const scrollToBottom = () => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   };

//   useEffect(() => {
//     scrollToBottom();
//   }, [messages]);

//   // Function to start a new session with the chatbot
//   const startSession = async () => {
//     try {
//       setIsLoading(true);
//       const response = await fetch(`${API_BASE_URL}/api/mr-antares/session`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });
      
//       if (!response.ok) {
//         throw new Error(`Server responded with status: ${response.status}`);
//       }
      
//       const data = await response.json();
//       setSessionId(data.session_id);
      
//       // Add a welcome message from the bot
//       setMessages([
//         { 
//           id: Date.now(), 
//           role: "assistant", 
//           content: "¡Hola! Soy Mr. Antares, el asistente virtual de Antares Innovate. ¿En qué puedo ayudarte hoy?" 
//         }
//       ]);
      
//       setError(null);
//     } catch (error) {
//       console.error("Error al iniciar sesión:", error);
//       setError("No se pudo conectar con el servidor. Por favor, intenta más tarde.");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   // Function to send a message to the chatbot
//   const sendMessage = async () => {
//     if (input.trim() === "" || isLoading) return;
    
//     const userMessage = { id: Date.now(), role: "user", content: input };
//     setMessages(prevMessages => [...prevMessages, userMessage]);
    
//     const userInput = input;
//     setInput("");
    
//     if (!sessionId) {
//       setError("No hay una sesión activa. Reiniciando...");
//       await startSession();
//       return;
//     }
    
//     try {
//       setIsLoading(true);
//       const response = await fetch(`${API_BASE_URL}/api/mr-antares/message`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           session_id: sessionId,
//           message: userInput,
//         }),
//       });
      
//       if (!response.ok) {
//         throw new Error(`Server responded with status: ${response.status}`);
//       }
      
//       const data = await response.json();
      
//       // Check if we got a proper response
//       if (data.error) {
//         throw new Error(data.error);
//       }
      
//       const botMessage = { 
//         id: Date.now(), 
//         role: "assistant", 
//         content: data.response || "Lo siento, no pude procesar tu mensaje." 
//       };
      
//       setMessages(prevMessages => [...prevMessages, botMessage]);
      
//       // Opcional: guardar la intención y otros metadatos si los necesitas después
//       console.log("Intención detectada:", data.intent);
//       console.log("Modo de respuesta:", data.mode);
      
//       setError(null);
//     } catch (error) {
//       console.error("Error al enviar mensaje:", error);
//       setError("Hubo un problema al comunicarse con el chatbot. Por favor, intenta de nuevo.");
      
//       const errorMessage = { 
//         id: Date.now(), 
//         role: "assistant", 
//         content: "Lo siento, parece que hay un problema de conexión. ¿Podrías intentarlo de nuevo?" 
//       };
      
//       setMessages(prevMessages => [...prevMessages, errorMessage]);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   // Start a new session when the component mounts or when chatbot is opened
//   useEffect(() => {
//     if (isOpen && !sessionId) {
//       startSession();
//     }
//   }, [isOpen, sessionId]);

//   // Handle pressing Enter to send message
//   const handleKeyPress = (e) => {
//     if (e.key === "Enter" && !e.shiftKey) {
//       e.preventDefault();
//       sendMessage();
//     }
//   };

//   // Guardar la sesión en localStorage cuando cambia
//   useEffect(() => {
//     if (sessionId && messages.length > 0) {
//       localStorage.setItem('mrAntaresSession', JSON.stringify({
//         sessionId,
//         messages,
//         timestamp: new Date().toISOString()
//       }));
//     }
//   }, [sessionId, messages]);

//   // Cargar sesión guardada al iniciar
//   useEffect(() => {
//     const loadSavedSession = () => {
//       const savedSession = localStorage.getItem('mrAntaresSession');
//       if (savedSession) {
//         try {
//           const session = JSON.parse(savedSession);
          
//           // Verificar si la sesión no ha expirado (24 horas)
//           const expiryTime = new Date(session.timestamp);
//           expiryTime.setHours(expiryTime.getHours() + 24);
          
//           if (new Date() < expiryTime) {
//             setSessionId(session.sessionId);
//             setMessages(session.messages);
//             return true;
//           }
//         } catch (e) {
//           console.error("Error al cargar sesión guardada:", e);
//         }
//       }
//       return false;
//     };
    
//     // Solo intentar cargar la sesión si el chat está abierto y no hay sesión activa
//     if (isOpen && !sessionId) {
//       const sessionLoaded = loadSavedSession();
//       if (!sessionLoaded) {
//         startSession();
//       }
//     }
//   }, [isOpen]);

//   return (
//     <div className="fixed bottom-[25px] right-[21px] sm:right-[21px] md:right-[49px] lg:right-[71px] z-[1000]">
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className="w-[98px] h-[104px] border-none bg-transparent cursor-pointer p-0 relative"
//       >
//         <img
//           src="/assets/images/lottiChatbot.gif"
//           alt="Chatbot Animation"
//           className="w-full h-full object-cover"
//         />
//       </button>
      
//       {isOpen && (
//         <div className="fixed bottom-[130px] right-[21px] sm:right-[21px] md:right-[49px] lg:right-[71px] w-[350px] h-[450px] bg-white shadow-lg rounded-lg flex flex-col overflow-hidden">
//           <div className="flex justify-between items-center p-3 bg-blue-600 text-white">
//             <h3 className="text-lg font-semibold">Mr. Antares</h3>
//             <button onClick={() => setIsOpen(false)} className="text-white hover:text-red-200">
//               ✖
//             </button>
//           </div>
          
//           <div className="flex-1 overflow-y-auto p-3 bg-gray-50">
//             {messages.length === 0 && !isLoading && (
//               <div className="text-center text-gray-500 mt-4">
//                 Iniciando conversación...
//               </div>
//             )}
            
//             {messages.map((msg) => (
//               <div 
//                 key={msg.id} 
//                 className={`mb-3 max-w-[80%] ${
//                   msg.role === "user" 
//                     ? "ml-auto bg-blue-500 text-white rounded-tl-lg rounded-tr-lg rounded-bl-lg" 
//                     : "mr-auto bg-gray-200 text-gray-800 rounded-tr-lg rounded-tl-lg rounded-br-lg"
//                 } p-3 shadow-sm`}
//               >
//                 {msg.content}
//               </div>
//             ))}
            
//             {isLoading && (
//               <div className="flex items-center space-x-2 text-gray-500 mb-3">
//                 <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
//                 <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
//                 <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.4s" }}></div>
//               </div>
//             )}
            
//             {error && (
//               <div className="text-red-500 text-sm p-2 mb-3 bg-red-50 rounded border border-red-200">
//                 {error}
//               </div>
//             )}
            
//             <div ref={messagesEndRef} />
//           </div>
          
//           <div className="border-t p-3 bg-white">
//             <div className="flex items-center">
//               <textarea
//                 value={input}
//                 onChange={(e) => setInput(e.target.value)}
//                 onKeyPress={handleKeyPress}
//                 disabled={isLoading}
//                 className="flex-1 border border-gray-300 p-2 rounded-lg resize-none h-[50px]"
//                 placeholder="Escribe un mensaje..."
//                 rows="1"
//               />
//               <button 
//                 onClick={sendMessage} 
//                 disabled={isLoading || input.trim() === ""}
//                 className={`ml-2 px-4 py-2 rounded-lg ${
//                   isLoading || input.trim() === "" 
//                     ? "bg-gray-300 cursor-not-allowed" 
//                     : "bg-blue-500 hover:bg-blue-600"
//                 } text-white transition`}
//               >
//                 {isLoading ? (
//                   <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                     <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                     <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                   </svg>
//                 ) : "Enviar"}
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default LottieIChatbot;

"use client"

import React from "react";

function LottieIChatbot() {
  const handleClick = () => {
    window.open("https://wa.me/573053456611", "_blank");
  };

  return (
    <div className="fixed bottom-[25px] right-[21px] sm:right-[21px] md:right-[49px] lg:right-[71px] z-[1000]">
      <button
        onClick={handleClick}
        className="w-[98px] h-[104px] border-none bg-transparent cursor-pointer p-0 relative"
      >
        <img
          src="/assets/images/lottiChatbot.gif"
          alt="Chatbot Animation"
          className="w-full h-full object-cover"
        />
      </button>
    </div>
  );
}

export default LottieIChatbot;