import { useEffect, useState } from "react";

const VideoLanding = ({ onLoadComplete}) => {
  const [videoSrc, setVideoSrc] = useState("");

  useEffect(() => {
    const updateVideoSource = () => {
      if (window.innerWidth < 640) {
        setVideoSrc(
          "https://storage.googleapis.com/antares-agency-rcs/video_reel.mp4"
        );
      } else {
        setVideoSrc(
          "https://storage.googleapis.com/antares-agency-rcs/video_reel.mp4"
        );
      }
    };

    updateVideoSource();
    window.addEventListener("resize", updateVideoSource);

    return () => window.removeEventListener("resize", updateVideoSource);
  }, []);

  return (
    <div className="w-full max-w-[1298px] mx-auto overflow-hidden h-full  ">
      <div className="relative w-full aspect-video rounded-3xl overflow-hidden ">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={videoSrc}
          autoPlay
          loop
          muted
          onLoadedData={() => {
            console.log("Video cargado");
            if (onLoadComplete) {
              onLoadComplete(); 
            }
          }}
        ></video>
      </div>
    </div>
  );
};

export default VideoLanding;
