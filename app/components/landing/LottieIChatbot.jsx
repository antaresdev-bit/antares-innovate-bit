import React from "react";

function LottieIChatbot() {
  return (
    <div
      style={{
        position: "fixed",
        bottom: "25px",
        right: "25px",
        zIndex: 1000,
      }}
    >
      {/* Botón con el GIF */}
      <button
        style={{
          width: "98px",
          height: "104px",
          border: "none",
          background: "transparent",
          cursor: "pointer",
          padding: 0,
        }}
      >
        <img
          src="/assets/images/Animation - 1739558310152.gif"
          alt="Chatbot Animation" 
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </button>
    </div>
  );
}

export default LottieIChatbot;
