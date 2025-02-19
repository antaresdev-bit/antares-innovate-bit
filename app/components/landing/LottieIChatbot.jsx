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
          src="/assets/images/Animation - 1739558310152.gif"
          alt="Chatbot Animation"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />

        <img
          src="/assets/images/whatsapp 1.png"
          alt="WhatsApp Icon"
          style={{
            width: "32px",
            height: "32px",
            position: "absolute",
            top: "-30px",
            right: "-20px",
          }}
        />
      </button>
    </div>
  );
}

export default LottieIChatbot;
