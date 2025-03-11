import { useEffect, useState } from "react";
import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";

const VideoLanding = ({ onLoadComplete }) => {
  const [videoSrc, setVideoSrc] = useState("");
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    const updateVideoSource = () => {
      setVideoSrc(
        "https://storage.googleapis.com/antares-agency-rcs/video_reel.mp4"
      );
    };

    updateVideoSource();
    window.addEventListener("resize", updateVideoSource);

    return () => window.removeEventListener("resize", updateVideoSource);
  }, []);

  const toggleMute = () => {
    setIsMuted((prev) => !prev);
  };

  return (
    <div className="w-full max-w-[1298px] mx-auto overflow-hidden h-full">
      <div className="relative w-full aspect-video rounded-3xl overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={videoSrc}
          autoPlay
          loop
          muted={isMuted}
          onLoadedData={() => {
            console.log("Video cargado");
            if (onLoadComplete) {
              onLoadComplete();
            }
          }}
        ></video>

        <div
          className="absolute top-4 right-4 w-12 h-12 flex items-center justify-center bg-white rounded-full cursor-pointer shadow-lg hover:bg-gray-200 transition duration-300"
          onClick={toggleMute}
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
