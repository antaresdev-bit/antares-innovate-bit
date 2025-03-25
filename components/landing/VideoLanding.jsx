"use client";
import { useEffect, useState } from "react";
import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";
import { useResponsive } from "../../hooks/useResponsive";

const VideoLanding = () => {
  const { isMobile } = useResponsive();
  const [videoSrc, setVideoSrc] = useState("");
  const [isMuted, setIsMuted] = useState(true);
  
  const VIDEO_SOURCES = {
    MOBILE: "/assets/videos/video_reel_mobile.mp4",
    DESKTOP: "/assets/videos/video_reel_optimised.mp4"
  };

  useEffect(() => {
    const preloadVideo = () => {
      const video = document.createElement('video');
      const newVideoSrc = isMobile ? VIDEO_SOURCES.MOBILE : VIDEO_SOURCES.DESKTOP;
      video.src = newVideoSrc;
      video.preload = "auto";
      video.playsInline = true;
      video.muted = true;
    };

    preloadVideo();
    setVideoSrc(isMobile ? VIDEO_SOURCES.MOBILE : VIDEO_SOURCES.DESKTOP);
  }, [isMobile]);

  return (
    <div className="w-full max-w-[1298px] mx-auto overflow-hidden h-full">
      <div className="relative w-full aspect-video rounded-3xl overflow-hidden">
        {videoSrc && (
          <video
            className="absolute top-0 left-0 w-full h-full object-cover"
            autoPlay
            playsInline
            loop
            muted={isMuted}
            preload="auto"
            poster="/assets/images/video-poster.png"
            playsinline="true"
            webkit-playsinline="true"
          >
            <source 
              src={isMobile ? VIDEO_SOURCES.MOBILE : VIDEO_SOURCES.DESKTOP} 
              type="video/mp4" 
            />
          </video>
        )}

        <div
          className="absolute top-4 right-4 w-12 h-12 flex items-center justify-center bg-white/80 backdrop-blur-sm rounded-full cursor-pointer shadow-lg hover:bg-white transition duration-300"
          onClick={() => setIsMuted(prev => !prev)}
        >
          {isMuted ? (
            <FaVolumeMute className="h-6 w-6 text-[#1b5def]" />
          ) : (
            <FaVolumeUp className="h-6 w-6 text-[#1b5def]" />
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoLanding;
