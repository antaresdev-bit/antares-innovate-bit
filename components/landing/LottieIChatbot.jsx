import React from "react";

function LottieIChatbot() {
  return (
    <div
      style={{
        position: "fixed",
        bottom: "25px",
        right: "50px",
        zIndex: 1000,
      }}
    >
      <button
        style={{
          width: "98px",
          height: "104px",
          border: "none",
          background: "transparent",
          cursor: "pointer",
          padding: 0,
          position: "relative",
        }}
      >
        <img
          src="/assets/images/lottiChatbot.gif"
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
