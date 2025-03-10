import React from "react";

const GridImageSection = ({ images }) => {
  return (
    <div className="h-auto">
      {/* Imagen superior */}
      {images.top && (
        <div className="w-full max-w-[1298px] mx-auto mb-[25px] rounded-3xl overflow-hidden aspect-[1298/869]">
          <img
            src={images.top.src}
            alt={images.top.alt}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-[14px] md:gap-[23px] lg:gap-[25px] max-w-[1298px] mx-auto">
        {/* Imagen izquierda */}
        {images.left && (
          <div className="w-full rounded-3xl overflow-hidden aspect-[632/632]">
            <img
              src={images.left.src}
              alt={images.left.alt}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* Imagen derecha */}
        {images.right && (
          <div className="w-full rounded-3xl overflow-hidden aspect-[632/632]">
            <img
              src={images.right.src}
              alt={images.right.alt}
              className="w-full h-full object-cover"
            />
          </div>
        )}
      </div>

      {/* Imagen inferior */}
      {images.bottom && (
        <div className="w-full max-w-[1298px] mx-auto mt-[25px] rounded-3xl overflow-hidden aspect-[1298/869]">
          <img
            src={images.bottom.src}
            alt={images.bottom.alt}
            className="w-full h-full object-cover"
          />
        </div>
      )}
    </div>
  );
};

export default GridImageSection;
