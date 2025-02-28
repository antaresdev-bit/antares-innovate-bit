import React from "react";

const VideoLanding = () => {
  return (
    <div className="w-full lg:w-[1298px] h-auto lg:h-[530.25px] mx-auto"> 
      <div className="rounded-3xl overflow-hidden order-1 lg:order-2">
        <video
          className="w-full h-full object-cover"
          src="https://storage.googleapis.com/antares-agency-rcs/video_reel.mp4"
          autoPlay
          loop
          muted
        ></video>
      </div>
    </div>
  );
};

export default VideoLanding;
