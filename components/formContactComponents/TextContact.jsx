import React from "react";
import { FaUserPlus } from "react-icons/fa";

function TextContact() {
  return (
    <div className="w-full max-w-[542px]  h-auto  p-4">
      <div className="text-left mb-[20px] sm:mb-[20px] md:b-[40px] lg:mb-[40px] ">
        <p
          className=" bg-clip-text text-transparent bg-gradient-to-r from-[#4D86FF] to-[#FFFFFF] text-[46px] sm:text-[46px] md:text-[50px] lg:text-[65px] transition-all leading-[35px] sm:leading-[31px] md:leading-[40px] lg:leading-[60px] "
          style={{ fontFamily: "HandelGothic" }}
        >
          <span className="hidden sm:inline">¿Hablamos de innovación?</span>
          {/* <span className="sm:hidden">Contacto</span> */}
        </p>
      </div>

      <div className="flex items-center space-x-3 mb-[20px] sm:mb-[20px] md:mb-[40px] lg:mb-[60px]">
        <div className="hidden sm:flex w-[50px] h-[50px] bg-white items-center justify-center rounded-full">
          <FaUserPlus className="text-black text-xl" />
        </div>

        <p
          className="hidden sm:block text-white sm:text-[25px] md:text-[25px] lg:text-[30px]"
          style={{ fontFamily: "UniteaSans-semi-bold" }}
        >
          Atendemos a tus solicitudes
        </p>
      </div>

      <div>
        <p
          className=" mb-[55px] sm:mb-[70px] md:mb-[85px] lg:mb-[85px] text-white text-[25px] sm:text-[25px] md:text-[25px] lg:text-[30px] leading-[25px] sm:leading-[25px] md:leading-[30px] lg:leading-[35px]"
          style={{ fontFamily: "UniteaSans-semi-bold" }}
        >
          La transformación digital comienza con una conversación. Cuéntanos tu
          idea y hagámosla realidad.
        </p>
      </div>

      <div>
        <p
          className="mb-[38px] bg-clip-text text-transparent bg-gradient-to-r from-[#4D86FF] to-[#FFFFFF] text-[30px] sm:text-[30px] md:text-[30px] lg:text-[35px] transition-all leading-[31px] sm:leading-[31px] md:leading-[35px] lg:leading-[35px]  "
          style={{ fontFamily: "HandelGothic" }}
        >
          Construyamos el futuro de tu marca.
        </p>
      </div>

      <div>
        <p
          className=" mb-[55px] sm:mb-[70px] md:mb-[85px] lg:mb-[85px] text-white text-[25px] sm:text-[25px] md:text-[25px] lg:text-[30px] leading-[25px] sm:leading-[25px] md:leading-[30px] lg:leading-[35px]"
          style={{ fontFamily: "UniteaSans-semi-bold" }}
        >
          Dinos qué necesitas y crearemos una estrategia digital a la medida.
        </p>
      </div>

      <div>
        <p
          className="mb-[38px] bg-clip-text text-transparent bg-gradient-to-r from-[#4D86FF] to-[#FFFFFF] text-[30px] sm:text-[30px] md:text-[30px] lg:text-[35px] transition-all leading-[31px] sm:leading-[31px] md:leading-[35px] lg:leading-[35px]  "
          style={{ fontFamily: "HandelGothic" }}
        >
          ¿Necesitas un cambio digital?
        </p>
      </div>

      <div>
        <p
          className="text-white text-[25px] sm:text-[25px] md:text-[25px] lg:text-[30px] leading-[25px] sm:leading-[25px] md:leading-[30px] lg:leading-[35px]"
          style={{ fontFamily: "UniteaSans-semi-bold" }}
        >
          Te ayudamos a modernizar tu negocio con tecnología, creatividad y
          estrategia.
        </p>
      </div>
    </div>
  );
}

export default TextContact;
