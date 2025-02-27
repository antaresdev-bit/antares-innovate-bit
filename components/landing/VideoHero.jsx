import React from "react";
import WideVideoSection from "../media/WideVideoSection";
import Certifications from "../cards/Certifications";

const VideoHero = () => {
  return (
    <div className="relative w-full h-full">
      <WideVideoSection src="/assets/videos/antares-agency-welcome.mp4"/>
      <div className="absolute bottom-16 right-16">
        <Certifications />
      </div>
    </div>
  );
};

export default VideoHero;
