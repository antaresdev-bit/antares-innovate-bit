import React from "react";

function GridCimlOne() {
  return (
    <div className="h-auto">
      {/* Imagen superior */}
      <div className="w-full max-w-[1298px] mx-auto mb-[14px] sm:mb-[14px] md:mb-[23px] lg:mb-[25px] rounded-3xl overflow-hidden aspect-[1298/869]">
        <img
          src="/assets/images/ciml/5.jpg"
          alt="ciml"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-[14px] sm:gap-[14px] md:gap-[23px] lg:gap-[25px] max-w-[1298px] mx-auto">
        {/* Imagen izquierda */}
        <div className="w-full rounded-3xl overflow-hidden aspect-[632/632]">
          <video
            src="https://storage.googleapis.com/antares-agency-rcs/ciml-6.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        </div>

        {/* Imagen derecha */}
        <div className="w-full rounded-3xl overflow-hidden aspect-[632/632]">
          <video
            src="https://storage.googleapis.com/antares-agency-rcs/ciml-7.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* imagen inferior */}
      <div className="w-full max-w-[1298px] mx-auto mt-[14px] sm:mt-[14px] md:mt-[23px] lg:mt-[25px] rounded-3xl overflow-hidden aspect-[1298/869]">
        <img
          src="/assets/images/ciml/9.jpg"
          alt="Stand Moto Cross"
          className="w-full h-full object-cover"
        />
      </div>
      {/* otra seccion de imagenes---------------------------- */}
      {/* Imagen izquierda */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[14px]  sm:gap-[14px] md:gap-[23px] lg:gap-[25px] ">
        {/* Imagen izquierda */}
        <div className="w-full rounded-3xl mt-[14px] sm:mt-[14px] md:mt-[23px] lg:mt-[25px]  overflow-hidden aspect-[632/632]">
          <img
            src="/assets/images/ciml/10.png"
            alt="Flyer Connor McGregor"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Imagen derecha */}
        <div className="w-full rounded-3xl sm:mt-[14px] md:mt-[23px] lg:mt-[25px] overflow-hidden aspect-[632/632]">
          <img
            src="/assets/images/ciml/11.jpg"
            alt="Render Punto de Venta"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default GridCimlOne;
