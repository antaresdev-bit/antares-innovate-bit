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