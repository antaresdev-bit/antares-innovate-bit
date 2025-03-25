"use client";
import { useEffect, useState } from "react";
import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";
import { useResponsive } from "../../hooks/useResponsive";

const VideoLanding = ({ onLoadComplete }) => {
  const { isMobile } = useResponsive();
  const [videoSrc, setVideoSrc] = useState("");
  const [isMuted, setIsMuted] = useState(true);
  
  // Predefine las fuentes para mejor organización
  const VIDEO_SOURCES = {
    MOBILE: {
      WEBM: "/assets/videos/video_reel_mobile.webm",
      MP4: "/assets/videos/video_reel_mobile.mp4"
    },
    DESKTOP: {
      WEBM: "/assets/videos/video_reel_optimised.webm",
      MP4: "/assets/videos/video_reel_optimised.mp4"
    }
  };

  useEffect(() => {
    // Precarga el video adecuado
    const preloadVideo = () => {
      const video = document.createElement('video');
      const newVideoSrc = isMobile ? VIDEO_SOURCES.MOBILE.WEBM : VIDEO_SOURCES.DESKTOP.WEBM;
      video.src = newVideoSrc;
      video.preload = "auto";
    };

    preloadVideo();
    setVideoSrc(isMobile ? VIDEO_SOURCES.MOBILE.WEBM : VIDEO_SOURCES.DESKTOP.WEBM);
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
            poster="/assets/images/video-poster.png" // Añade un poster para mejor UX
            onLoadedData={() => {
              console.log("Video cargado");
              if (onLoadComplete) onLoadComplete();
            }}
          >
            {/* WebM */}
            <source 
              src={isMobile ? VIDEO_SOURCES.MOBILE.WEBM : VIDEO_SOURCES.DESKTOP.WEBM} 
              type="video/webm" 
            />
            {/* Fallback MP4*/}
            <source 
              src={isMobile ? VIDEO_SOURCES.MOBILE.MP4 : VIDEO_SOURCES.DESKTOP.MP4} 
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
