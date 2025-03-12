"use client";

import React, { useState } from "react";

const videos = [
  "https://storage.googleapis.com/antares-agency-rcs/1-Marketing.mp4",
  "https://storage.googleapis.com/antares-agency-rcs/2-Marketing.mp4",
  "https://storage.googleapis.com/antares-agency-rcs/3-Marketing.mp4",
  "https://storage.googleapis.com/antares-agency-rcs/4-Marketing.mp4",
  "https://storage.googleapis.com/antares-agency-rcs/5-Marketing.mp4",
  "https://storage.googleapis.com/antares-agency-rcs/6-Marketing.mp4",
];

function VideoCard() {
  const [currentVideo, setCurrentVideo] = useState(0);

  const handleVideoEnd = () => {
    setCurrentVideo((prev) => (prev + 1) % videos.length);
  };

  return (
    <div
      className="w-[1298px] max-w-full bg-[#D9D9D9]
    pb-[50px] sm:pb-[50px] md:pb-[50px] lg:pb-[50px]
    pt-[50px] sm:pt-[50px] md:pt-[34px] lg:pt-[34px]
    pl-[9px] sm:pl-[9px] md:pl-[22px] lg:pl-[34px]
    pr-[9px] sm:pr-[9px] md:pr-[22px] lg:pr-[34px]
    flex flex-col items-center rounded-[48px] shadow-lg mx-auto"
    >
      <div className="w-full relative pt-[56.25%] ">
        <div className="absolute top-0 left-0 w-full h-full">
          <video
            key={videos[currentVideo]}
            className="w-full h-full object-cover rounded-[24px]"
            controls
            autoPlay
            muted
            onEnded={handleVideoEnd}
          >
            <source src={videos[currentVideo]} type="video/mp4" />
            Tu navegador no soporta videos.
          </video>
        </div>
      </div>

      <div className="w-full flex justify-center space-x-4 mt-[25px]">
        {videos.map((_, index) => (
          <button
            key={index}
            className={`h-1 w-[52px] sm:w-[52px] md:w-[121px] lg:w-[165px] ${
              index === currentVideo ? "bg-blue-500" : "bg-gray-400"
            }`}
            onClick={() => setCurrentVideo(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default VideoCard;
