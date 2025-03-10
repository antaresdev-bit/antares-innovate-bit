import React from "react";

const GridImageVideo = ({ media }) => {
  return (
    <div className="h-auto">
      {/* Media superior */}
      {media.top && (
        <div className="w-full max-w-[1298px] mx-auto mb-[14px] sm:mb-[14px] md:mb-[23px] lg:mb-[25px]  rounded-3xl overflow-hidden aspect-[1298/869]">
          {media.top.type === "video" ? (
            <video
              src={media.top.src}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          ) : (
            <img
              src={media.top.src}
              alt={media.top.alt}
              className="w-full h-full object-cover"
            />
          )}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-[14px] md:gap-[23px] lg:gap-[25px] max-w-[1298px] mx-auto">
        {/* Media izquierda */}
        {media.left && (
          <div className="w-full rounded-3xl overflow-hidden aspect-[632/632]">
            {media.left.type === "video" ? (
              <video
                src={media.left.src}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            ) : (
              <img
                src={media.left.src}
                alt={media.left.alt}
                className="w-full h-full object-cover"
              />
            )}
          </div>
        )}

        {/* Media derecha */}
        {media.right && (
          <div className="w-full rounded-3xl overflow-hidden aspect-[632/632]">
            {media.right.type === "video" ? (
              <video
                src={media.right.src}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            ) : (
              <img
                src={media.right.src}
                alt={media.right.alt}
                className="w-full h-full object-cover"
              />
            )}
          </div>
        )}
      </div>

      {/* Media inferior */}
      {media.bottom && (
        <div className="w-full max-w-[1298px] mx-auto mt-[14px]  sm:mt-[14px]  md:mt-[23px]   lg:mt-[25px] rounded-3xl overflow-hidden aspect-[1298/869]">
          {media.bottom.type === "video" ? (
            <video
              src={media.bottom.src}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          ) : (
            <img
              src={media.bottom.src}
              alt={media.bottom.alt}
              className="w-full h-full object-cover"
            />
          )}
        </div>
      )}
    </div>
  );
};

export default GridImageVideo;

