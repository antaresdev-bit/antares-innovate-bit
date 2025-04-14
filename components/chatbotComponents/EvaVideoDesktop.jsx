import React from "react";

function EvaVideoDesktop() {
  return (
    <div className="relative w-[200px] h-[200px] min-h-[200px] flex items-center justify-center">
      <div className="absolute w-[340px] h-[340px] rounded-full border border-white/10" />
      <div className="absolute w-[286px] h-[286px] rounded-full border border-white/20" />
      <div className="absolute w-[241px] h-[241px] rounded-full border border-white/30" />
      <div className="absolute w-[205px] h-[205px] rounded-full border-2 border-white/80" />

      <div className="w-[179px] h-[179px] rounded-full overflow-hidden relative z-10">
        <img
          src="/assets/images/Giif generico.gif"
          alt="Eva Animation"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

export default EvaVideoDesktop;
