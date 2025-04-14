import React from "react";

function EvaVideoMobile() {
  return (
    <div className="relative w-[120px] h-[120px] min-h-[120px] flex items-center justify-center">
      <div className="absolute w-[204px] h-[204px] rounded-full border border-white/10" />
      <div className="absolute w-[171.6px] h-[171.6px] rounded-full border border-white/20" />
      <div className="absolute w-[144.6px] h-[144.6px] rounded-full border border-white/30" />
      <div className="absolute w-[123px] h-[123px] rounded-full border-2 border-white/80" />

      <div className="w-[107.4px] h-[107.4px] rounded-full overflow-hidden relative z-10">
        <img
          src="/assets/images/Giif generico.gif"
          alt="Eva Animation"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

export default EvaVideoMobile;
