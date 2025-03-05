"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaUserPlus } from "react-icons/fa";

function BannerForm() {
  const [imageSrc, setImageSrc] = useState(
    "/assets/images/form-contact/Banner.svg"
  );

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setImageSrc("/assets/images/form-contact/BannerMobile.svg");
      } else {
        setImageSrc("/assets/images/form-contact/Banner.svg");
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className="w-full max-w-[1500px] mx-auto relative overflow-hidden rounded-[48px]">
        <div className="relative w-full h-full">
          <Image
            src={imageSrc}
            alt="Banner"
            width={1440}
            height={524}
            className="w-full h-auto object-cover transform translate-y-[50px]"
            priority
          />
        </div>
      </div>

      {/* Texto condicional solamente en sm */}
      <div className="relative mx-[21px] sm:mx-[21px] md:mx-[49px] lg:mx-[71px] mt-[70px]">
        <div className="text-left mb-[20px] sm:mb-[20px] md:mb-[40px] lg:mb-[40px]">
          <p
            className="bg-clip-text text-transparent bg-gradient-to-r from-[#4D86FF] to-[#FFFFFF] text-[46px] sm:text-[46px] md:text-[50px] lg:text-[65px] transition-all leading-[35px] sm:leading-[31px] md:leading-[40px] lg:leading-[60px]"
            style={{ fontFamily: "HandelGothic" }}
          >
            <span className="sm:inline md:hidden lg:hidden">Contacto</span>
          </p>
        </div>

        <div className="flex items-center space-x-3 mb-[20px] sm:mb-[20px] md:mb-[40px] lg:mb-[60px] sm:hidden">
          <div className="w-[50px] h-[50px] bg-white flex items-center justify-center rounded-full">
            <FaUserPlus className="text-black text-xl" />
          </div>

          <p
            className="text-white text-[25px] sm:text-[25px] md:text-[25px] lg:text-[30px]"
            style={{ fontFamily: "UniteaSans-semi-bold" }}
          >
            Atendemos a tus solicitudes
          </p>
        </div>
      </div>
      {/* texto condicional solamente en sm */}
    </>
  );
}

export default BannerForm;
